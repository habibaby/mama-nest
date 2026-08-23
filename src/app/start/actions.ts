"use server";

import { createClient } from "@/lib/supabase/server";
import { getStripe, stripeConfigured } from "@/lib/stripe";

export type IntakeInput = {
  status: "pregnant" | "newborn";
  edd?: string;
  babyDob?: string;
  isFirstBaby: boolean;
  fullName: string;
  email: string;
  password: string;
  phone?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postcode: string;
  kitId: string;
  pricePence: number;
};

export async function submitIntake(
  input: IntakeInput
): Promise<{ checkoutUrl?: string; error?: string }> {
  const supabase = await createClient();

  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email: input.email,
    password: input.password,
  });

  if (signUpError || !signUpData.user) {
    return { error: signUpError?.message ?? "We couldn't create your account. Please try again." };
  }

  const userId = signUpData.user.id;

  const { error: profileError } = await supabase.from("profiles").insert({
    id: userId,
    full_name: input.fullName,
    phone: input.phone ?? null,
    address_line1: input.addressLine1,
    address_line2: input.addressLine2 ?? null,
    city: input.city,
    postcode: input.postcode,
  });
  if (profileError) return { error: profileError.message };

  const { data: pregnancy, error: pregnancyError } = await supabase
    .from("pregnancies")
    .insert({
      user_id: userId,
      status: input.status,
      edd: input.status === "pregnant" ? input.edd : null,
      baby_dob: input.status === "newborn" ? input.babyDob : null,
      is_first_baby: input.isFirstBaby,
    })
    .select()
    .single();
  if (pregnancyError || !pregnancy) {
    return { error: pregnancyError?.message ?? "We couldn't save your details." };
  }

  const { data: order, error: orderError } = await supabase
    .from("orders")
    .insert({
      user_id: userId,
      pregnancy_id: pregnancy.id,
      kit_id: input.kitId,
      amount_pence: input.pricePence,
      shipping_address: {
        fullName: input.fullName,
        addressLine1: input.addressLine1,
        addressLine2: input.addressLine2 ?? null,
        city: input.city,
        postcode: input.postcode,
        phone: input.phone ?? null,
      },
    })
    .select()
    .single();
  if (orderError || !order) {
    return { error: orderError?.message ?? "We couldn't start your order." };
  }

  // Real Stripe Checkout once STRIPE_SECRET_KEY is configured. Until then, a
  // clearly-labelled demo payment step keeps the full journey clickable.
  if (stripeConfigured) {
    const stripe = getStripe()!;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: { name: "The Sixth Week Kit" },
            unit_amount: input.pricePence,
          },
          quantity: 1,
        },
      ],
      metadata: { order_id: order.id },
      success_url: `${appUrl}/order/confirmation?order=${order.id}`,
      cancel_url: `${appUrl}/start`,
    });
    return { checkoutUrl: session.url ?? undefined };
  }

  return { checkoutUrl: `/checkout/demo?order=${order.id}` };
}
