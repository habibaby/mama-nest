"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Loader2,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn, formatGBP } from "@/lib/utils";
import type { Kit } from "@/lib/types";
import { submitIntake } from "@/app/start/actions";

type Stage = "pregnant" | "newborn";

const STEP_LABELS = [
  "You",
  "A few details",
  "Your account",
  "Delivery",
  "Your check",
];

export function StartWizard({ kit }: { kit: Kit | null }) {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [stage, setStage] = useState<Stage | null>(null);
  const [edd, setEdd] = useState("");
  const [babyDob, setBabyDob] = useState("");
  const [isFirstBaby, setIsFirstBaby] = useState<boolean | null>(null);

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
      return stage === "pregnant"
        ? Boolean(edd)
        : stage === "newborn"
          ? Boolean(babyDob)
          : false;
    }

    if (step === 1) {
      return isFirstBaby !== null;
    }

    if (step === 2) {
      return Boolean(fullName && email && password.length >= 8);
    }

    if (step === 3) {
      return Boolean(addressLine1 && city && postcode);
    }

    return true;
  }, [
    step,
    stage,
    edd,
    babyDob,
    isFirstBaby,
    fullName,
    email,
    password,
    addressLine1,
    city,
    postcode,
  ]);

  async function handleSubmit() {
    if (!kit || !stage) return;

    setSubmitting(true);
    setError(null);

    const result = await submitIntake({
      status: stage,
      edd: stage === "pregnant" ? edd : undefined,
      babyDob: stage === "newborn" ? babyDob : undefined,
      isFirstBaby: Boolean(isFirstBaby),
      fullName,
      email,
      password,
      phone: phone || undefined,
      addressLine1,
      addressLine2: addressLine2 || undefined,
      city,
      postcode,
      kitId: kit.id,
      pricePence: kit.pricePence,
    });

    if (result.error) {
      setError(result.error);
      setSubmitting(false);
      return;
    }

    if (result.checkoutUrl) {
      router.push(result.checkoutUrl);
    }
  }

  return (
    <div className="w-full max-w-lg rounded-3xl border border-rose/10 bg-offwhite p-8 shadow-xl shadow-rose-deep/5 sm:p-10">
      {/* Progress */}

      <div className="mb-8 flex items-center justify-center gap-2">
        {STEP_LABELS.map((label, i) => (
          <div
            key={label}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === step
                ? "w-8 bg-rose"
                : i < step
                  ? "w-4 bg-rose/40"
                  : "w-4 bg-rose/15"
            )}
          />
        ))}
      </div>

      {/* STEP 1 */}

      {step === 0 && (
        <div className="flex flex-col gap-5">
          <h2 className="text-center font-heading text-2xl italic text-rose-deep">
            Where are you right now?
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setStage("pregnant")}
              className={cn(
                "rounded-2xl border-2 p-5 text-left transition-colors",
                stage === "pregnant"
                  ? "border-rose bg-blush"
                  : "border-rose/15 hover:border-rose/40"
              )}
            >
              <p className="font-heading text-lg italic text-rose-deep">
                I&apos;m expecting
              </p>

              <p className="mt-1 text-xs text-ink/60">
                We&apos;ll time your health check to your due date.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setStage("newborn")}
              className={cn(
                "rounded-2xl border-2 p-5 text-left transition-colors",
                stage === "newborn"
                  ? "border-rose bg-blush"
                  : "border-rose/15 hover:border-rose/40"
              )}
            >
              <p className="font-heading text-lg italic text-rose-deep">
                I&apos;ve just had my baby
              </p>

              <p className="mt-1 text-xs text-ink/60">
                Tell us when your baby was born.
              </p>
            </button>
          </div>

          {stage === "pregnant" && (
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-ink/80">
                Your due date
              </span>

              <input
                type="date"
                value={edd}
                onChange={(e) => setEdd(e.target.value)}
                className="rounded-xl border border-rose/20 bg-offwhite px-4 py-2.5 outline-none focus:border-rose"
              />
            </label>
          )}

          {stage === "newborn" && (
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-ink/80">
                Baby&apos;s date of birth
              </span>

              <input
                type="date"
                value={babyDob}
                onChange={(e) => setBabyDob(e.target.value)}
                className="rounded-xl border border-rose/20 bg-offwhite px-4 py-2.5 outline-none focus:border-rose"
              />
            </label>
          )}
        </div>
      )}

      {/* STEP 2 */}

      {step === 1 && (
        <div className="flex flex-col gap-5">
          <h2 className="text-center font-heading text-2xl italic text-rose-deep">
            Just one quick question.
          </h2>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setIsFirstBaby(true)}
              className={cn(
                "rounded-2xl border-2 p-4 text-center transition-colors",
                isFirstBaby === true
                  ? "border-rose bg-blush"
                  : "border-rose/15 hover:border-rose/40"
              )}
            >
              First baby
            </button>

            <button
              type="button"
              onClick={() => setIsFirstBaby(false)}
              className={cn(
                "rounded-2xl border-2 p-4 text-center transition-colors",
                isFirstBaby === false
                  ? "border-rose bg-blush"
                  : "border-rose/15 hover:border-rose/40"
              )}
            >
              Not my first
            </button>
          </div>
        </div>
      )}

      {/* STEP 3 */}

      {step === 2 && (
        <div className="flex flex-col gap-4">
          <h2 className="text-center font-heading text-2xl italic text-rose-deep">
            Create your account
          </h2>

          <Field
            label="Your name"
            value={fullName}
            onChange={setFullName}
          />

          <Field
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
          />

          <Field
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            hint="At least 8 characters"
          />

          <Field
            label="Phone (optional)"
            value={phone}
            onChange={setPhone}
            required={false}
          />
        </div>
      )}

      {/* STEP 4 */}

      {step === 3 && (
        <div className="flex flex-col gap-4">
          <h2 className="text-center font-heading text-2xl italic text-rose-deep">
            Where should it go?
          </h2>

          <Field
            label="Address line 1"
            value={addressLine1}
            onChange={setAddressLine1}
          />

          <Field
            label="Address line 2 (optional)"
            value={addressLine2}
            onChange={setAddressLine2}
            required={false}
          />

          <div className="grid grid-cols-2 gap-3">
            <Field
              label="City"
              value={city}
              onChange={setCity}
            />

            <Field
              label="Postcode"
              value={postcode}
              onChange={setPostcode}
            />
          </div>
        </div>
      )}

      {/* STEP 5 */}

      {step === 4 && kit && (
        <div className="flex flex-col gap-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose">
              Mama Nest
            </p>

            <h2 className="mt-3 font-heading text-3xl italic text-rose-deep">
              Your health check is ready.
            </h2>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-ink/60">
              We&apos;ll time your test kit around your sixth week, so it&apos;s
              ready when you need it.
            </p>
          </div>

          <div className="rounded-2xl bg-blush p-6">
            <p className="font-heading text-xl italic text-rose-deep">
              Your postpartum health check
            </p>

            <p className="mt-2 text-sm leading-6 text-ink/65">
              A simple at-home check for important health markers after birth.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {["Iron", "Thyroid", "Vitamin D"].map((test) => (
                <div
                  key={test}
                  className="flex items-center gap-3 text-sm text-ink/75"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-offwhite">
                    <Check size={13} className="text-rose" />
                  </span>

                  {test}
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-rose/10 pt-5">
              <p className="text-xs leading-5 text-ink/55">
                Your sample is collected from home and reviewed by a
                qualified clinician before your results and next steps are
                provided.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-rose/15 px-5 py-4">
            <span className="text-sm font-medium text-ink/70">
              Total, one-off
            </span>

            <span className="font-heading text-2xl italic text-rose-deep">
              {formatGBP(kit.pricePence)}
            </span>
          </div>

          {error && (
            <p className="text-center text-sm text-rose">
              {error}
            </p>
          )}
        </div>
      )}

      {/* NAVIGATION */}

      <div className="mt-8 flex items-center justify-between">
        {step > 0 ? (
          <Button
            variant="ghost"
            size="md"
            icon={ArrowLeft}
            onClick={() => setStep((s) => s - 1)}
          >
            Back
          </Button>
        ) : (
          <span />
        )}

        {step < 4 ? (
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
          <Button
            size="md"
            icon={submitting ? Loader2 : ArrowRight}
            iconPosition="right"
            onClick={handleSubmit}
            disabled={submitting}
          >
            {submitting
              ? "Just a moment…"
              : "Continue to payment"}
          </Button>
        )}
      </div>
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

        {required && (
          <span className="text-rose"> *</span>
        )}
      </span>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-rose/20 bg-offwhite px-4 py-2.5 outline-none focus:border-rose"
      />

      {hint && (
        <span className="text-xs text-ink/40">
          {hint}
        </span>
      )}
    </label>
  );
}