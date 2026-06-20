import Stripe from "stripe";
import type { PackSlug } from "@/lib/packs-data";

// Lazy singleton — instantiated on first call so the build succeeds even
// when STRIPE_SECRET_KEY is not yet set in the deployment environment.
let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (_stripe) return _stripe;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  _stripe = new Stripe(key, { apiVersion: "2026-05-27.dahlia", typescript: true });
  return _stripe;
}

export function getPriceId(slug: PackSlug): string {
  const map: Record<PackSlug, string | undefined> = {
    career: process.env.STRIPE_PRICE_CAREER,
    gtm:    process.env.STRIPE_PRICE_GTM,
    pm:     process.env.STRIPE_PRICE_PM,
  };
  const id = map[slug];
  if (!id) throw new Error(`No Stripe price configured for pack: ${slug}`);
  return id;
}
