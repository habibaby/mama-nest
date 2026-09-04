"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { recomputeTestReminders } from "@/lib/reminders";

export async function signOutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}

/**
 * Lets a mum log her baby's real birth date once it happens. Recalculates
 * the test-window reminders off the real date instead of the original EDD —
 * babies don't arrive on schedule, so the nudges shouldn't pretend otherwise.
 */
export async function logBirth(pregnancyId: string, babyDob: string) {
  const supabase = await createClient();

  const { error: pregnancyError } = await supabase
    .from("pregnancies")
    .update({ status: "newborn", baby_dob: babyDob })
    .eq("id", pregnancyId);
  if (pregnancyError) return { error: pregnancyError.message };

  const { data: orders } = await supabase
    .from("orders")
    .select("id")
    .eq("pregnancy_id", pregnancyId)
    .eq("status", "paid");

  if (orders && orders.length > 0) {
    const schedule = recomputeTestReminders(babyDob);
    for (const order of orders) {
      // Clear unsent provisional test reminders, replace with real-date ones.
      await supabase
        .from("reminders")
        .delete()
        .eq("order_id", order.id)
        .in("type", ["test_reminder", "test_overdue"])
        .is("sent_at", null);

      await supabase.from("reminders").insert(
        schedule.map((item) => ({
          order_id: order.id,
          type: item.type,
          channel: "email",
          scheduled_for: item.scheduledFor.toISOString(),
        }))
      );
    }
  }

  revalidatePath("/account");
  return {};
}

/**
 * "I've Given Birth — Activate My Care." Flips a booking from a request
 * into something Mama Nest's ops team acts on. Deliberately simple — no
 * real caregiver-allocation system exists yet, so this only records the
 * state transition; a human on the Mama Nest side does the actual
 * matching once notified.
 */
export async function activateBooking(bookingId: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("bookings")
    .update({ status: "birth_activated", birth_activated_at: new Date().toISOString() })
    .eq("id", bookingId)
    .eq("status", "requested");

  if (error) return { error: error.message };

  revalidatePath("/account");
  return {};
}
