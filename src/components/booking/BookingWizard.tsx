"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { CULTURE_LIST } from "@/lib/data/cultures";
import type { ServiceType } from "@/lib/types";
import { submitBooking } from "@/app/booking/actions";

type Stage = "pregnant" | "newborn";

const STEP_LABELS = ["You", "Culture", "Language", "Service", "Preferences", "Account", "Address", "Review"];

const SERVICE_OPTIONS: { value: ServiceType; label: string; blurb: string }[] = [
  { value: "care_7", label: "7-Day Care", blurb: "Seven consecutive days of daily support." },
  { value: "care_14", label: "14-Day Care", blurb: "Fourteen consecutive days — full two weeks." },
  { value: "care_30", label: "30-Day Care", blurb: "Two weeks daily, then reduced-frequency support." },
  { value: "custom", label: "Custom Care", blurb: "Tell us what you need — we'll quote you." },
  { value: "overnight", label: "Overnight Care", blurb: "Extended or overnight support, by request." },
];

const SERVICE_LABELS: Record<ServiceType, string> = {
  care_7: "7-Day Care",
  care_14: "14-Day Care",
  care_30: "30-Day Care",
  custom: "Custom Care",
  overnight: "Overnight Care",
};

export function BookingWizard() {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [stage, setStage] = useState<Stage | null>(null);
  const [edd, setEdd] = useState("");
  const [babyDob, setBabyDob] = useState("");
  const [isFirstBaby, setIsFirstBaby] = useState<boolean | null>(null);

  const [culture, setCulture] = useState<string>("");
  const [preferredLanguage, setPreferredLanguage] = useState("");

  const [service, setService] = useState<ServiceType | null>(null);
  const [addTest, setAddTest] = useState(false);

  const [babyBath, setBabyBath] = useState(true);
  const [dietary, setDietary] = useState("");
  const [notes, setNotes] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");

  const canContinue = useMemo(() => {
    if (step === 0) {
      return (
        (stage === "pregnant" ? Boolean(edd) : stage === "newborn" ? Boolean(babyDob) : false) &&
        isFirstBaby !== null
      );
    }
    if (step === 1) return Boolean(culture);
    if (step === 3) return Boolean(service);
    if (step === 5) return Boolean(fullName && email && password.length >= 8);
    if (step === 6) return Boolean(addressLine1 && city && postcode);
    return true;
  }, [step, stage, edd, babyDob, isFirstBaby, culture, service, fullName, email, password, addressLine1, city, postcode]);

  async function handleSubmit() {
    if (!service || !stage) return;
    setSubmitting(true);
    setError(null);

    const result = await submitBooking({
      status: stage,
      edd: stage === "pregnant" ? edd : undefined,
      babyDob: stage === "newborn" ? babyDob : undefined,
      isFirstBaby: Boolean(isFirstBaby),
      culture: culture || "none",
      preferredLanguage: preferredLanguage || undefined,
      service,
      addTest,
      babyBath,
      dietary: dietary || undefined,
      notes: notes || undefined,
      fullName,
      email,
      password,
      phone: phone || undefined,
      addressLine1,
      addressLine2: addressLine2 || undefined,
      city,
      postcode,
    });

    if (result.error) {
      setError(result.error);
      setSubmitting(false);
      return;
    }

    if (result.bookingId) {
      router.push(`/booking/confirmation?booking=${result.bookingId}`);
    }
  }

  return (
    <div className="w-full max-w-lg rounded-3xl border border-rose/10 bg-offwhite p-8 shadow-xl shadow-rose-deep/5 sm:p-10">
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {STEP_LABELS.map((label, i) => (
          <div
            key={label}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === step ? "w-8 bg-rose" : i < step ? "w-4 bg-rose/40" : "w-4 bg-rose/15"
            )}
          />
        ))}
      </div>

      {step === 0 && (
        <div className="flex flex-col gap-5">
          <h2 className="text-center font-heading text-2xl italic text-rose-deep">Where are you right now?</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setStage("pregnant")}
              className={cn(
                "rounded-2xl border-2 p-5 text-left transition-colors",
                stage === "pregnant" ? "border-rose bg-blush" : "border-rose/15 hover:border-rose/40"
              )}
            >
              <p className="font-heading text-lg italic text-rose-deep">I&apos;m expecting</p>
              <p className="mt-1 text-xs text-ink/60">We&apos;ll arrange your care around your due date.</p>
            </button>
            <button
              type="button"
              onClick={() => setStage("newborn")}
              className={cn(
                "rounded-2xl border-2 p-5 text-left transition-colors",
                stage === "newborn" ? "border-rose bg-blush" : "border-rose/15 hover:border-rose/40"
              )}
            >
              <p className="font-heading text-lg italic text-rose-deep">I&apos;ve just had my baby</p>
              <p className="mt-1 text-xs text-ink/60">Tell us when your baby was born.</p>
            </button>
          </div>

          {stage === "pregnant" && (
            <Field label="Your due date" type="date" value={edd} onChange={setEdd} />
          )}
          {stage === "newborn" && (
            <Field label="Baby's date of birth" type="date" value={babyDob} onChange={setBabyDob} />
          )}

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setIsFirstBaby(true)}
              className={cn(
                "rounded-2xl border-2 p-4 text-center text-sm transition-colors",
                isFirstBaby === true ? "border-rose bg-blush" : "border-rose/15 hover:border-rose/40"
              )}
            >
              First baby
            </button>
            <button
              type="button"
              onClick={() => setIsFirstBaby(false)}
              className={cn(
                "rounded-2xl border-2 p-4 text-center text-sm transition-colors",
                isFirstBaby === false ? "border-rose bg-blush" : "border-rose/15 hover:border-rose/40"
              )}
            >
              Not my first
            </button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="flex flex-col gap-5">
          <h2 className="text-center font-heading text-2xl italic text-rose-deep">
            What is your cultural pathway?
          </h2>
          <p className="text-center text-xs text-ink/60">
            We match your meals, ingredients and care routine to it.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {CULTURE_LIST.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setCulture(c.key)}
                className={cn(
                  "rounded-2xl border-2 p-4 text-center text-sm transition-colors",
                  culture === c.key ? "border-rose bg-blush" : "border-rose/15 hover:border-rose/40"
                )}
              >
                {c.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setCulture("none")}
              className={cn(
                "rounded-2xl border-2 p-4 text-center text-sm transition-colors",
                culture === "none" ? "border-rose bg-blush" : "border-rose/15 hover:border-rose/40"
              )}
            >
              No preference
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-5">
          <h2 className="text-center font-heading text-2xl italic text-rose-deep">Language &amp; preferences</h2>
          <Field
            label="Preferred language (optional)"
            value={preferredLanguage}
            onChange={setPreferredLanguage}
            required={false}
            hint="e.g. Yoruba spoken at home"
          />
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col gap-4">
          <h2 className="text-center font-heading text-2xl italic text-rose-deep">Choose your service</h2>
          <div className="flex flex-col gap-2.5">
            {SERVICE_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setService(opt.value)}
                className={cn(
                  "rounded-2xl border-2 p-4 text-left transition-colors",
                  service === opt.value ? "border-rose bg-blush" : "border-rose/15 hover:border-rose/40"
                )}
              >
                <p className="font-heading text-lg italic text-rose-deep">{opt.label}</p>
                <p className="mt-0.5 text-xs text-ink/60">{opt.blurb}</p>
              </button>
            ))}
          </div>
          <label className="mt-1 flex items-center gap-2.5 rounded-xl border border-rose/15 px-4 py-3 text-sm text-ink/75">
            <input
              type="checkbox"
              checked={addTest}
              onChange={(e) => setAddTest(e.target.checked)}
              className="h-4 w-4 accent-rose"
            />
            Add the postpartum test — thyroid, vitamin D &amp; iron (£99)
          </label>
        </div>
      )}

      {step === 4 && (
        <div className="flex flex-col gap-4">
          <h2 className="text-center font-heading text-2xl italic text-rose-deep">Care preferences</h2>
          <label className="flex items-center gap-2.5 rounded-xl border border-rose/15 px-4 py-3 text-sm text-ink/75">
            <input
              type="checkbox"
              checked={babyBath}
              onChange={(e) => setBabyBath(e.target.checked)}
              className="h-4 w-4 accent-rose"
            />
            Include baby bathing support
          </label>
          <Field label="Dietary notes (optional)" value={dietary} onChange={setDietary} required={false} />
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-ink/80">Anything else we should know? (optional)</span>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="rounded-xl border border-rose/20 bg-offwhite px-4 py-2.5 outline-none focus:border-rose"
            />
          </label>
        </div>
      )}

      {step === 5 && (
        <div className="flex flex-col gap-4">
          <h2 className="text-center font-heading text-2xl italic text-rose-deep">Create your account</h2>
          <Field label="Your name" value={fullName} onChange={setFullName} />
          <Field label="Email" type="email" value={email} onChange={setEmail} />
          <Field label="Password" type="password" value={password} onChange={setPassword} hint="At least 8 characters" />
          <Field label="Phone (optional)" value={phone} onChange={setPhone} required={false} />
        </div>
      )}

      {step === 6 && (
        <div className="flex flex-col gap-4">
          <h2 className="text-center font-heading text-2xl italic text-rose-deep">Where should your Aunty come to?</h2>
          <Field label="Address line 1" value={addressLine1} onChange={setAddressLine1} />
          <Field label="Address line 2 (optional)" value={addressLine2} onChange={setAddressLine2} required={false} />
          <div className="grid grid-cols-2 gap-3">
            <Field label="City" value={city} onChange={setCity} />
            <Field label="Postcode" value={postcode} onChange={setPostcode} />
          </div>
        </div>
      )}

      {step === 7 && (
        <div className="flex flex-col gap-5">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose">Mama Nest</p>
            <h2 className="mt-3 font-heading text-3xl italic text-rose-deep">Review &amp; confirm</h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-ink/60">
              This confirms your booking request. We&apos;ll be in touch directly to arrange payment.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-rose/10 rounded-2xl border border-rose/15 px-5">
            <SummaryRow label="Due date / DOB" value={stage === "pregnant" ? edd || "—" : babyDob || "—"} />
            <SummaryRow
              label="Culture"
              value={culture === "none" || !culture ? "No preference" : CULTURE_LIST.find((c) => c.key === culture)?.label ?? "—"}
            />
            <SummaryRow label="Language" value={preferredLanguage || "—"} />
            <SummaryRow label="Service" value={service ? SERVICE_LABELS[service] : "—"} />
            <SummaryRow label="Postpartum test" value={addTest ? "Included" : "Not included"} />
            <SummaryRow label="Address" value={`${city || "—"}, ${postcode || "—"}`} />
          </div>

          {error && <p className="text-center text-sm text-rose">{error}</p>}
        </div>
      )}

      <div className="mt-8 flex items-center justify-between">
        {step > 0 ? (
          <Button variant="ghost" size="md" icon={ArrowLeft} onClick={() => setStep((s) => s - 1)}>
            Back
          </Button>
        ) : (
          <span />
        )}

        {step < 7 ? (
          <Button
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            disabled={!canContinue}
            className={!canContinue ? "opacity-40" : ""}
            onClick={() => setStep((s) => s + 1)}
          >
            Continue
          </Button>
        ) : (
          <Button size="md" icon={submitting ? Loader2 : ArrowRight} iconPosition="right" onClick={handleSubmit} disabled={submitting}>
            {submitting ? "Just a moment…" : "Confirm booking"}
          </Button>
        )}
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 py-3 text-sm">
      <span className="text-ink/60">{label}</span>
      <span className="font-medium text-rose-deep">{value}</span>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  hint,
  required = true,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  hint?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="font-medium text-ink/80">
        {label}
        {required && <span className="text-rose"> *</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-rose/20 bg-offwhite px-4 py-2.5 outline-none focus:border-rose"
      />
      {hint && <span className="text-xs text-ink/40">{hint}</span>}
    </label>
  );
}
