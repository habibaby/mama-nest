"use server";

import { createClient } from "@/lib/supabase/server";
import { computeReminderSchedule } from "@/lib/reminders";
import type { Pregnancy } from "@/lib/types";

/**
 * DEMO payment completion — stands in for a real Stripe webhook until
 * STRIPE_SECRET_KEY is configured. Marks the order paid and generates its
 * reminder schedule, exactly as the real webhook handler does.
 */
export async function completeDemoPayment(orderId: string): Promise<{ error?: string }> {
  const supabase = await createClient();

  const { data: order, error: orderError } = await supabase
    .from("orders")
    .select("id, pregnancy_id, status")
    .eq("id", orderId)
    .single();
  if (orderError || !order) return { error: "We couldn't find that order." };
  if (order.status === "paid") return {};

  const paidAt = new Date();

  const { error: updateError } = await supabase
    .from("orders")
    .update({ status: "paid", paid_at: paidAt.toISOString() })
    .eq("id", orderId);
  if (updateError) return { error: updateError.message };

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

  return {};
}
