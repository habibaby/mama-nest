import { NextResponse, type NextRequest } from "next/server";
import { createClient as createServiceClient } from "@supabase/supabase-js";
import { getStripe } from "@/lib/stripe";
import { computeReminderSchedule } from "@/lib/reminders";
import type { Pregnancy } from "@/lib/types";

// Real Stripe webhook handler — ready to go once STRIPE_SECRET_KEY and
// STRIPE_WEBHOOK_SECRET are both configured. Requires SUPABASE_SERVICE_ROLE_KEY
// too, since a webhook call has no logged-in user session and RLS would
// otherwise block writing the order/reminder rows.
export async function POST(request: NextRequest) {
  const stripe = getStripe();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!stripe || !webhookSecret || !serviceRoleKey) {
    return NextResponse.json(
      { error: "Stripe webhook is not configured yet." },
      { status: 501 }
    );
  }

  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature!, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as { metadata?: { order_id?: string } };
  const orderId = session.metadata?.order_id;
  if (!orderId) return NextResponse.json({ received: true });

  const supabase = createServiceClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceRoleKey);

  const { data: order } = await supabase
    .from("orders")
    .select("id, pregnancy_id, status")
    .eq("id", orderId)
    .single();
  if (!order || order.status === "paid") return NextResponse.json({ received: true });

  const paidAt = new Date();
  await supabase.from("orders").update({ status: "paid", paid_at: paidAt.toISOString() }).eq("id", orderId);

  if (order.pregnancy_id) {
    const { data: pregnancyRow } = await supabase
      .from("pregnancies")
      .select("id, status, edd, baby_dob, is_first_baby")
      .eq("id", order.pregnancy_id)
      .single();

    if (pregnancyRow) {
      const pregnancy: Pregnancy = {
        id: pregnancyRow.id,
        status: pregnancyRow.status,
        edd: pregnancyRow.edd,
        babyDob: pregnancyRow.baby_dob,
        isFirstBaby: pregnancyRow.is_first_baby,
      };
      const schedule = computeReminderSchedule(pregnancy, paidAt);
      if (schedule.length > 0) {
        await supabase.from("reminders").insert(
          schedule.map((item) => ({
            order_id: orderId,
            type: item.type,
            channel: "email",
            scheduled_for: item.scheduledFor.toISOString(),
          }))
        );
      }
    }
  }

  return NextResponse.json({ received: true });
}
