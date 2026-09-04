import { notFound } from "next/navigation";
import Link from "next/link";
import { Heart } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";

const SERVICE_LABELS: Record<string, string> = {
  care_7: "7-Day Care",
  care_14: "14-Day Care",
  care_30: "30-Day Care",
  custom: "Custom Care",
  overnight: "Overnight Care",
};

export default async function BookingConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ booking?: string }>;
}) {
  const { booking: bookingId } = await searchParams;
  if (!bookingId) notFound();

  const supabase = await createClient();
  const { data: booking } = await supabase
    .from("bookings")
    .select("id, service, add_test, status")
    .eq("id", bookingId)
    .single();

  if (!booking) notFound();

  return (
    <div className="flex min-h-screen flex-col items-center bg-cream px-6 py-16">
      <div className="mb-8">
        <Link href="/" aria-label="Mama Nest home">
          <Logo />
        </Link>
      </div>
      <div className="w-full max-w-lg rounded-3xl border border-rose/10 bg-offwhite p-8 text-center shadow-xl shadow-rose-deep/5 sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blush text-rose-deep">
          <Heart size={26} />
        </div>
        <h1 className="mt-5 font-heading text-3xl italic text-rose-deep">Your care is booked, Mama.</h1>
        <p className="mt-2 text-sm text-ink/60">
          {SERVICE_LABELS[booking.service] ?? booking.service}
          {booking.add_test ? " + the postpartum test" : ""} — we&apos;ll be in touch directly to confirm payment and next steps.
        </p>

        <div className="mt-8 rounded-2xl bg-blush/60 px-5 py-4 text-left text-sm text-ink/70">
          Once your baby arrives, come back to your dashboard and select <strong className="text-rose-deep">&quot;I&apos;ve Given Birth&quot;</strong> — that&apos;s what starts arranging your Mama Nest Aunty. You don&apos;t need to book again.
        </div>

        <div className="mt-8">
          <Button href="/account" size="md">
            Go to your dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
