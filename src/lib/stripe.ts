import Stripe from "stripe";

// Real Stripe integration — fully wired, but only active once STRIPE_SECRET_KEY
// is configured. Until then, the checkout flow falls back to a clearly-labelled
// demo payment step so the whole journey stays clickable end to end.
export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

export const stripeConfigured = Boolean(process.env.STRIPE_SECRET_KEY);
