"use client";

import { useState } from "react";
import { Baby, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { logBirth } from "@/app/account/actions";

export function BirthAnnouncementForm({ pregnancyId }: { pregnancyId: string }) {
  const [dob, setDob] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!dob) return;
    setSubmitting(true);
    await logBirth(pregnancyId, dob);
    setSubmitting(false);
    setDone(true);
  }

  if (done) {
    return (
      <p className="rounded-xl bg-blush px-4 py-3 text-sm text-rose-deep">
        Congratulations! We&apos;ve updated your test reminder for your real dates. 💛
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 rounded-xl border border-gold/30 bg-gold/5 p-4">
      <p className="flex items-center gap-2 text-sm font-medium text-rose-deep">
        <Baby size={16} /> Has she arrived?
      </p>
      <p className="text-xs text-ink/60">
        Let us know her real birth date so we can time your test reminder correctly.
      </p>
      <div className="flex gap-2">
        <input
          type="date"
          required
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="flex-1 rounded-xl border border-rose/20 bg-offwhite px-3 py-2 text-sm outline-none focus:border-rose"
        />
        <Button size="md" disabled={submitting} icon={submitting ? Loader2 : undefined}>
          Save
        </Button>
      </div>
    </form>
  );
}
