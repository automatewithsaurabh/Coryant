import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";
import { createAdminClient } from "@/lib/supabase/server";
import { sendPurchaseConfirmationEmail } from "@/lib/send-purchase-email";
import { PACKS } from "@/lib/packs-data";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const signature = request.headers.get("x-razorpay-signature");

  // Verify the webhook signature
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) {
    console.error("RAZORPAY_WEBHOOK_SECRET is not set");
    return NextResponse.json({ error: "Misconfigured" }, { status: 500 });
  }

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const expected = createHmac("sha256", secret).update(rawBody).digest("hex");
  const expectedBuf = Buffer.from(expected, "hex");
  const actualBuf = Buffer.from(signature, "hex");

  const valid =
    expectedBuf.length === actualBuf.length &&
    timingSafeEqual(expectedBuf, actualBuf);

  if (!valid) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const event = JSON.parse(rawBody);

  if (event.event === "payment.captured") {
    const payment = event.payload?.payment?.entity;

    if (!payment) {
      return NextResponse.json({ received: true });
    }

    const orderId: string = payment.order_id;
    const paymentId: string = payment.id;
    const amount: number = payment.amount; // in paise
    const notes: Record<string, string> = payment.notes ?? {};
    const packSlug: string | undefined = notes.pack_slug;
    const userId: string | undefined = notes.user_id;

    if (!packSlug || !userId) {
      console.error("Webhook missing pack_slug or user_id in notes", notes);
      return NextResponse.json({ received: true });
    }

    const admin = createAdminClient();

    // Check if already recorded (verify-payment may have beaten us)
    const { data: existing } = await admin
      .from("purchases")
      .select("id")
      .eq("user_id", userId)
      .eq("pack_slug", packSlug)
      .limit(1)
      .maybeSingle();

    if (!existing) {
      const { error } = await admin.from("purchases").insert({
        user_id: userId,
        pack_slug: packSlug,
        stripe_checkout_session_id: orderId,
        stripe_payment_intent_id: paymentId,
        amount_total: amount,
        currency: "INR",
      });

      if (error && error.code !== "23505") {
        console.error("Webhook: failed to record purchase:", error.message);
      } else if (!error) {
        console.log(`Webhook: purchase recorded — user ${userId}, pack ${packSlug}`);
        // Send confirmation email — only when webhook is the one recording the purchase
        const { data: userData } = await admin.auth.admin.getUserById(userId);
        if (userData?.user?.email) {
          const packName = PACKS[packSlug as keyof typeof PACKS]?.name ?? packSlug;
          sendPurchaseConfirmationEmail({
            to: userData.user.email,
            packName,
            slug: packSlug,
          }).catch(() => {});
        }
      }
    }
  }

  return NextResponse.json({ received: true });
}
