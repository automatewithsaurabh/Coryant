import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import { isValidPackSlug } from "@/lib/build-pack-zip";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let razorpay_order_id: string;
  let razorpay_payment_id: string;
  let razorpay_signature: string;
  let slug: string;

  try {
    const body = await request.json();
    razorpay_order_id = body.razorpay_order_id;
    razorpay_payment_id = body.razorpay_payment_id;
    razorpay_signature = body.razorpay_signature;
    slug = body.slug;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !slug) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!isValidPackSlug(slug)) {
    return NextResponse.json({ error: "Invalid pack" }, { status: 400 });
  }

  // Verify HMAC-SHA256 signature
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keySecret) {
    console.error("RAZORPAY_KEY_SECRET is not configured");
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const expected = createHmac("sha256", keySecret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (expected !== razorpay_signature) {
    return NextResponse.json({ error: "Invalid payment signature" }, { status: 400 });
  }

  // Record purchase in Supabase
  const admin = createAdminClient();
  const { error: dbError } = await admin.from("purchases").insert({
    user_id: user.id,
    pack_slug: slug,
    // Razorpay fields mapped into the existing purchases table
    stripe_checkout_session_id: razorpay_order_id,
    stripe_payment_intent_id: razorpay_payment_id,
    amount_total: null,
    currency: "INR",
  });

  if (dbError) {
    // 23505 = unique_violation — duplicate webhook / double-click, safe to ignore
    if (dbError.code !== "23505") {
      console.error("Failed to record Razorpay purchase:", dbError.message);
      // Don't fail the response — payment was verified, let the user proceed
    }
  }

  return NextResponse.json({ success: true });
}
