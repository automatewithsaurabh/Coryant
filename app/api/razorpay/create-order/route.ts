import { NextRequest, NextResponse } from "next/server";
import { getRazorpay, getPackPricePaise } from "@/lib/razorpay";
import { createClient } from "@/lib/supabase/server";
import { rateLimit } from "@/lib/rate-limit";
import { isValidPackSlug } from "@/lib/build-pack-zip";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!rateLimit(ip, 5, 60_000)) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

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

  const amount = getPackPricePaise();
  if (amount < 100) {
    return NextResponse.json(
      { error: "Amount must be at least 100 paise" },
      { status: 500 }
    );
  }

  try {
    const order = await getRazorpay().orders.create({
      amount,
      currency: "INR",
      receipt: `${slug}-${user.id.slice(0, 8)}-${Date.now()}`,
      notes: { pack_slug: slug, user_id: user.id },
    });

    return NextResponse.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (err) {
    console.error("Razorpay create-order error:", err);
    return NextResponse.json(
      { error: "Failed to create payment order" },
      { status: 500 }
    );
  }
}
