import { redirect } from "next/navigation";
import Link from "next/link";
import { CalendarHeart, LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { Logo } from "@/components/layout/Logo";
import { formatGBP } from "@/lib/utils";
import { BirthAnnouncementForm } from "@/components/account/BirthAnnouncementForm";
import { ActivateCareButton } from "@/components/account/ActivateCareButton";
import { signOutAction } from "@/app/account/actions";
import { CULTURES, type CultureKey } from "@/lib/data/cultures";

const SERVICE_LABELS: Record<string, string> = {
  care_7: "7-Day Care",
  care_14: "14-Day Care",
  care_30: "30-Day Care",
  custom: "Custom Care",
  overnight: "Overnight Care",
};

const BOOKING_STATUS_LABELS: Record<string, string> = {
  requested: "Booking requested",
  birth_activated: "Care being arranged",
  care_scheduled: "Care scheduled",
  care_active: "Care in progress",
  care_completed: "Care completed",
  cancelled: "Cancelled",
};

const REMINDER_COPY: Record<string, string> = {
  congratulations: "Congratulations message",
  care_kit_nudge: "Care kit reminder",
  test_reminder: "Your at-home test is due",
  test_overdue: "Final test reminder",
};

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/sign-in");

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .maybeSingle();

  const { data: pregnancy } = await supabase
    .from("pregnancies")
    .select("id, status, edd, baby_dob, culture, preferred_language")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  const { data: order } = await supabase
    .from("orders")
    .select("id, status, amount_pence")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  const { data: reminders } = order
    ? await supabase
        .from("reminders")
        .select("type, scheduled_for, sent_at")
        .eq("order_id", order.id)
        .order("scheduled_for", { ascending: true })
    : { data: null };

  const { data: bookings } = await supabase
    .from("bookings")
    .select("id, service, add_test, location, status")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  const cultureLabel =
    pregnancy?.culture && pregnancy.culture in CULTURES
      ? CULTURES[pregnancy.culture as CultureKey].label
      : null;

  return (
    <div className="min-h-screen bg-cream px-6 py-10">
      <div className="mx-auto flex max-w-lg flex-col gap-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <form action={signOutAction}>
            <button
              type="submit"
              className="flex items-center gap-1.5 text-sm text-ink/50 hover:text-rose-deep"
            >
              <LogOut size={14} /> Sign out
            </button>
          </form>
        </div>

        <div className="rounded-3xl border border-rose/10 bg-offwhite p-7 shadow-xl shadow-rose-deep/5">
          <h1 className="font-heading text-2xl italic text-rose-deep">
            Hello, {profile?.full_name?.split(" ")[0] ?? "Mama"}.
          </h1>

          {pregnancy?.status === "pregnant" && (
            <p className="mt-1 text-sm text-ink/60">Due {new Date(pregnancy.edd!).toLocaleDateString("en-GB")}</p>
          )}
          {pregnancy?.status === "newborn" && (
            <p className="mt-1 text-sm text-ink/60">
              Baby born {new Date(pregnancy.baby_dob!).toLocaleDateString("en-GB")}
            </p>
          )}
          {cultureLabel && <p className="mt-1 text-xs text-rose">{cultureLabel} pathway</p>}

          {bookings && bookings.length > 0 && (
            <div className="mt-5 flex flex-col gap-3">
              {bookings.map((b) => (
                <div key={b.id} className="rounded-xl bg-blush/40 px-4 py-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink/70">
                      {SERVICE_LABELS[b.service] ?? b.service}
                      {b.add_test ? " + test" : ""}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-rose-deep">
                      {BOOKING_STATUS_LABELS[b.status] ?? b.status}
                    </span>
                  </div>
                  {b.status === "requested" && (
                    <div className="mt-3">
                      <ActivateCareButton bookingId={b.id} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {(!bookings || bookings.length === 0) && (
            <div className="mt-5 rounded-xl border border-dashed border-rose/25 px-4 py-3 text-sm text-ink/60">
              No postpartum care booked yet.{" "}
              <Link href="/booking" className="font-semibold text-rose-deep hover:underline">
                Book your care
              </Link>
            </div>
          )}

          {order && (
            <div className="mt-5 flex items-center justify-between rounded-xl bg-blush/60 px-4 py-3 text-sm">
              <span className="text-ink/70">The Mama Nest Kit</span>
              <span className="font-semibold text-rose-deep">
                {order.status === "paid" ? "Paid" : "Payment pending"} · {formatGBP(order.amount_pence)}
              </span>
            </div>
          )}

          {pregnancy?.status === "pregnant" && (
            <div className="mt-5">
              <BirthAnnouncementForm pregnancyId={pregnancy.id} />
            </div>
          )}

          {reminders && reminders.length > 0 && (
            <div className="mt-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink/50">
                <CalendarHeart size={14} /> Your schedule
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {reminders.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between rounded-xl bg-blush/40 px-4 py-2.5 text-sm"
                  >
                    <span className="text-ink/70">{REMINDER_COPY[r.type] ?? r.type}</span>
                    <span className="shrink-0 text-xs font-medium text-rose-deep">
                      {new Date(r.scheduled_for).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                      {r.sent_at ? " · sent" : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
