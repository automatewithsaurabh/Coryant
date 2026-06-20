import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createAdminClient } from "@/lib/supabase/server";
import type Stripe from "stripe";

export const runtime = "nodejs";

// Disable body parsing — Stripe signature verification requires the raw body.
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const sig = request.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not configured");
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  let event: Stripe.Event;
  try {
    const rawBody = await request.text();
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    // Signature mismatch — reject immediately. Do not log the body.
    console.error("Webhook signature verification failed:", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Only handle the events we care about — ignore everything else silently.
  if (event.type === "checkout.session.completed") {
    await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
  }

  // Always return 200 so Stripe stops retrying.
  return NextResponse.json({ received: true });
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const userId = session.client_reference_id;
  const packSlug = session.metadata?.pack_slug;

  if (!userId || !packSlug) {
    console.error("Webhook: missing client_reference_id or pack_slug metadata", {
      sessionId: session.id,
    });
    return;
  }

  const supabase = createAdminClient();

  // Insert idempotently — if the webhook fires twice, the unique constraint on
  // stripe_checkout_session_id prevents a double-grant.
  const { error } = await supabase.from("purchases").insert({
    user_id: userId,
    pack_slug: packSlug,
    stripe_checkout_session_id: session.id,
    stripe_customer_id: typeof session.customer === "string" ? session.customer : null,
    stripe_payment_intent_id:
      typeof session.payment_intent === "string" ? session.payment_intent : null,
    amount_total: session.amount_total,
    currency: session.currency,
  });

  if (error) {
    // Unique constraint violation (duplicate webhook) — safe to ignore.
    if (error.code === "23505") return;
    console.error("Webhook: failed to record purchase", {
      sessionId: session.id,
      error: error.message,
    });
  }
}
