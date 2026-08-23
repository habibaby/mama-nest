import { notFound } from "next/navigation";
import { Heart, CalendarHeart } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";

const REMINDER_COPY: Record<string, string> = {
  congratulations: "A congratulations message, and a reminder your kit is on its way",
  care_kit_nudge: "A gentle nudge to open and use your care kit",
  test_reminder: "Time to do your at-home test and send it back",
  test_overdue: "A last reminder if your test hasn't been sent back yet",
};

export default async function OrderConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>;
}) {
  const { order: orderId } = await searchParams;
  if (!orderId) notFound();

  const supabase = await createClient();
  const { data: order } = await supabase
    .from("orders")
    .select("id, status, amount_pence")
    .eq("id", orderId)
    .single();

  if (!order) notFound();

  const { data: reminders } = await supabase
    .from("reminders")
    .select("type, scheduled_for")
    .eq("order_id", orderId)
    .order("scheduled_for", { ascending: true });

  return (
    <div className="flex min-h-screen flex-col items-center bg-cream px-6 py-16">
      <div className="mb-8">
        <Logo />
      </div>
      <div className="w-full max-w-lg rounded-3xl border border-rose/10 bg-offwhite p-8 text-center shadow-xl shadow-rose-deep/5 sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blush text-rose-deep">
          <Heart size={26} />
        </div>
        <h1 className="mt-5 font-heading text-3xl italic text-rose-deep">
          {order.status === "paid" ? "You're all set, Mama." : "Almost there."}
        </h1>
        <p className="mt-2 text-sm text-ink/60">
          {order.status === "paid"
            ? "Your kit is confirmed. We'll take it from here."
            : "Your order is saved — complete payment to confirm your kit."}
        </p>

        {reminders && reminders.length > 0 && (
          <div className="mt-8 text-left">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink/50">
              <CalendarHeart size={14} /> What happens next
            </p>
            <ul className="mt-3 flex flex-col gap-2.5">
              {reminders.map((r, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between rounded-xl bg-blush/60 px-4 py-2.5 text-sm"
                >
                  <span className="text-ink/70">{REMINDER_COPY[r.type] ?? r.type}</span>
                  <span className="shrink-0 text-xs font-medium text-rose-deep">
                    {new Date(r.scheduled_for).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8">
          <Button href="/account" size="md">
            Go to your account
          </Button>
        </div>
      </div>
    </div>
  );
}
