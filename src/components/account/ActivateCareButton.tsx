"use client";

import { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { activateBooking } from "@/app/account/actions";

export function ActivateCareButton({ bookingId }: { bookingId: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleClick() {
    setSubmitting(true);
    await activateBooking(bookingId);
    setSubmitting(false);
    setDone(true);
  }

  if (done) {
    return (
      <p className="rounded-xl bg-blush px-4 py-3 text-sm text-rose-deep">
        Congratulations! Your Mama Nest Aunty is being arranged — we&apos;ll be in touch with details. 💛
      </p>
    );
  }

  return (
    <Button size="md" icon={submitting ? Loader2 : Sparkles} onClick={handleClick} disabled={submitting}>
      {submitting ? "Activating…" : "I've Given Birth — Activate My Care"}
    </Button>
  );
}
