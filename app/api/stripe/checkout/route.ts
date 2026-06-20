import { NextRequest, NextResponse } from "next/server";
import { getStripe, getPriceId } from "@/lib/stripe";
import { createClient } from "@/lib/supabase/server";
import { rateLimit } from "@/lib/rate-limit";
import { isValidPackSlug } from "@/lib/build-pack-zip";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  // Rate limit: 5 checkout attempts per IP per minute
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!rateLimit(ip, 5, 60_000)) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  // Require an authenticated session
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Validate request body
  let slug: string;
  try {
    const body = await request.json();
    slug = body?.slug;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!isValidPackSlug(slug)) {
    return NextResponse.json({ error: "Invalid pack" }, { status: 400 });
  }

  let priceId: string;
  try {
    priceId = getPriceId(slug);
  } catch {
    return NextResponse.json(
      { error: "Pack not available for purchase" },
      { status: 404 }
    );
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  try {
    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      // Link the Stripe session back to the Supabase user so the webhook can
      // grant access without trusting any client-supplied userId.
      client_reference_id: user.id,
      customer_email: user.email,
      metadata: { pack_slug: slug },
      success_url: `${appUrl}/packs/${slug}?purchase=success`,
      cancel_url: `${appUrl}/packs/${slug}?purchase=cancelled`,
      // Prevent a single link from being reused across different users.
      expires_at: Math.floor(Date.now() / 1000) + 30 * 60, // 30 min
    });

    if (!session.url) {
      throw new Error("Stripe did not return a checkout URL");
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
