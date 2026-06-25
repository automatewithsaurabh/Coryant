import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import { isValidPackSlug } from "@/lib/build-pack-zip";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!rateLimit(ip, 5, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

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

  // Constant-time comparison prevents timing side-channel attacks
  const expectedBuf = Buffer.from(expected, "hex");
  const actualBuf = Buffer.from(razorpay_signature.padEnd(expected.length, "0").slice(0, expected.length), "hex");
  if (expectedBuf.length !== actualBuf.length || !timingSafeEqual(expectedBuf, actualBuf) || expected !== razorpay_signature) {
    return NextResponse.json({ error: "Invalid payment signature" }, { status: 400 });
  }

  const admin = createAdminClient();

  // Check if purchase already exists (webhook may have already recorded it)
  const { data: existing } = await admin
    .from("purchases")
    .select("id")
    .eq("user_id", user.id)
    .eq("pack_slug", slug)
    .limit(1)
    .maybeSingle();

  if (!existing) {
    // No record yet — insert it
    const { error: dbError } = await admin.from("purchases").insert({
      user_id: user.id,
      pack_slug: slug,
      stripe_checkout_session_id: razorpay_order_id,
      stripe_payment_intent_id: razorpay_payment_id,
      amount_total: null,
      currency: "INR",
    });

    if (dbError) {
      // 23505 = unique violation — webhook already inserted, safe to proceed
      if (dbError.code !== "23505") {
        console.error("Failed to record purchase:", dbError.message, dbError.code);
        return NextResponse.json({ error: "Payment verified but failed to activate. Contact support." }, { status: 500 });
      }
    }
  }

  return NextResponse.json({ success: true });
}
