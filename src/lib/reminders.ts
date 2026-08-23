import type { Pregnancy } from "@/lib/types";

export type ReminderPlanItem = {
  type: "congratulations" | "care_kit_nudge" | "test_reminder" | "test_overdue";
  scheduledFor: Date;
};

const DAY = 1000 * 60 * 60 * 24;

/**
 * Builds the messaging schedule for a paid order.
 *
 * Pregnant at checkout: a congratulations message lands on her EDD, then a
 * every-other-day nudge to actually use the care kit (completion, not
 * sign-up, is the real risk in this business), until she logs her baby's
 * real birth date. The test reminder is anchored to that real date, not the
 * original estimate — babies don't arrive on schedule.
 *
 * Already a new mum at checkout: skip straight to the test-window reminders,
 * anchored to her real baby DOB.
 */
export function computeReminderSchedule(pregnancy: Pregnancy, paidAt: Date): ReminderPlanItem[] {
  const items: ReminderPlanItem[] = [];

  if (pregnancy.status === "pregnant" && pregnancy.edd) {
    const edd = new Date(pregnancy.edd);
    items.push({ type: "congratulations", scheduledFor: edd });

    // Every-other-day nudges for two weeks after the EDD, in case she hasn't
    // logged the birth yet — these stop once she confirms baby's real DOB.
    for (let i = 1; i <= 7; i++) {
      items.push({ type: "care_kit_nudge", scheduledFor: new Date(edd.getTime() + i * 2 * DAY) });
    }

    // Provisional test window, based on the estimate — recalculated once the
    // real birth date is logged (see recomputeTestReminders below).
    items.push({ type: "test_reminder", scheduledFor: new Date(edd.getTime() + 28 * DAY) });
    items.push({ type: "test_overdue", scheduledFor: new Date(edd.getTime() + 42 * DAY) });
  } else if (pregnancy.status === "newborn" && pregnancy.babyDob) {
    const dob = new Date(pregnancy.babyDob);
    items.push({ type: "test_reminder", scheduledFor: new Date(dob.getTime() + 28 * DAY) });
    items.push({ type: "test_overdue", scheduledFor: new Date(dob.getTime() + 42 * DAY) });
  }

  return items.filter((item) => item.scheduledFor.getTime() >= paidAt.getTime());
}

/** Recalculates the test-window reminders once a real baby DOB is logged. */
export function recomputeTestReminders(babyDob: string): ReminderPlanItem[] {
  const dob = new Date(babyDob);
  return [
    { type: "test_reminder", scheduledFor: new Date(dob.getTime() + 28 * DAY) },
    { type: "test_overdue", scheduledFor: new Date(dob.getTime() + 42 * DAY) },
  ];
}
