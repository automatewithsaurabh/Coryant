import Stripe from "stripe";
import type { PackSlug } from "@/lib/packs-data";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2026-05-27.dahlia",
  typescript: true,
});

// Maps pack slug → Stripe Price ID from env.
// Set STRIPE_PRICE_CAREER, STRIPE_PRICE_GTM, STRIPE_PRICE_PM in .env.local
const PRICE_ID_MAP: Record<PackSlug, string | undefined> = {
  career: process.env.STRIPE_PRICE_CAREER,
  gtm:    process.env.STRIPE_PRICE_GTM,
  pm:     process.env.STRIPE_PRICE_PM,
};

export function getPriceId(slug: PackSlug): string {
  const id = PRICE_ID_MAP[slug];
  if (!id) throw new Error(`No Stripe price configured for pack: ${slug}`);
  return id;
}
