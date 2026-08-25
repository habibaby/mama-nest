"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn, formatGBP } from "@/lib/utils";
import type { Kit } from "@/lib/types";
import { submitIntake } from "@/app/start/actions";

type Stage = "pregnant" | "newborn";

const STEPS = [
  "Stage",
  "About you",
  "Account",
  "Delivery",
  "Review",
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
      if (stage === "pregnant") return Boolean(edd);
      if (stage === "newborn") return Boolean(babyDob);
      return false;
    }

    if (step === 1) {
      return isFirstBaby !== null;
    }

    if (step === 2) {
      return Boolean(
        fullName.trim() &&
          email.trim() &&
          password.length >= 8
      );
    }

    if (step === 3) {
      return Boolean(
        addressLine1.trim() &&
          city.trim() &&
          postcode.trim()
      );
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
    <div className="mx-auto w-full max-w-xl">

      {/* Progress */}

      <div className="mb-10 flex items-center justify-between">

        <div className="flex items-center gap-2">
          {STEPS.map((label, index) => (
            <div
              key={label}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                index === step
                  ? "w-10 bg-[#9B6664]"
                  : index < step
                    ? "w-5 bg-[#9B6664]/50"
                    : "w-5 bg-[#D8CEC7]"
              )}
            />
          ))}
        </div>

        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9B6664]">
          {step + 1} / {STEPS.length}
        </span>

      </div>

      {/* Main content */}

      <div className="rounded-[32px] border border-[#DED6D0] bg-[#FFFCF9] p-7 shadow-[0_25px_80px_rgba(48,40,36,0.07)] sm:p-10">

        {/* STEP 1 */}

        {step === 0 && (
          <div className="space-y-8">

            <StepHeading
              eyebrow="Let's begin"
              title="Where are you right now?"
              description="We'll use this to make sure your test reaches you at the right time."
            />

            <div className="grid gap-3 sm:grid-cols-2">

              <Choice
                selected={stage === "pregnant"}
                onClick={() => setStage("pregnant")}
                title="I'm expecting"
                description="I'm still pregnant."
              />

              <Choice
                selected={stage === "newborn"}
                onClick={() => setStage("newborn")}
                title="I've had my baby"
                description="I'm in my postpartum period."
              />

            </div>

            {stage === "pregnant" && (
              <Field
                label="Your due date"
                type="date"
                value={edd}
                onChange={setEdd}
              />
            )}

            {stage === "newborn" && (
              <Field
                label="Baby's date of birth"
                type="date"
                value={babyDob}
                onChange={setBabyDob}
              />
            )}

          </div>
        )}

        {/* STEP 2 */}

        {step === 1 && (
          <div className="space-y-8">

            <StepHeading
              eyebrow="A little about you"
              title="One quick question."
              description="This helps us understand where you are in your motherhood journey."
            />

            <div className="grid grid-cols-2 gap-3">

              <Choice
                selected={isFirstBaby === true}
                onClick={() => setIsFirstBaby(true)}
                title="First baby"
              />

              <Choice
                selected={isFirstBaby === false}
                onClick={() => setIsFirstBaby(false)}
                title="Not my first"
              />

            </div>

          </div>
        )}

        {/* STEP 3 */}

        {step === 2 && (
          <div className="space-y-7">

            <StepHeading
              eyebrow="Your details"
              title="Let's get to know you."
              description="We'll use these details to create your secure Mama Nest account."
            />

            <div className="space-y-4">

              <Field
                label="Full name"
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
                label="Phone"
                value={phone}
                onChange={setPhone}
                required={false}
              />

            </div>

          </div>
        )}

        {/* STEP 4 */}

        {step === 3 && (
          <div className="space-y-7">

            <StepHeading
              eyebrow="Delivery"
              title="Where should we send it?"
              description="Your test will be delivered discreetly to your chosen address."
            />

            <div className="space-y-4">

              <Field
                label="Address"
                value={addressLine1}
                onChange={setAddressLine1}
              />

              <Field
                label="Address line 2"
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

          </div>
        )}

        {/* STEP 5 — REVIEW */}

        {step === 4 && kit && (
          <div className="space-y-8">

            <StepHeading
              eyebrow="Your Mama Nest test"
              title="A simple check-in for your body."
              description="Three important health markers, brought together in one at-home test."
            />

            {/* TEST PANEL */}

            <div className="overflow-hidden rounded-[24px] border border-[#DED6D0]">

              <div className="bg-[#302824] px-6 py-5 text-[#F8F5F0]">

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D1A39A]">
                  Your health test
                </p>

                <h3 className="mt-2 font-heading text-2xl italic">
                  {kit.name}
                </h3>

              </div>

              <div className="divide-y divide-[#E5DDD7] bg-[#F8F5F0]">

                {kit.testPanel.map((test, index) => (
                  <div
                    key={test}
                    className="flex items-center gap-4 px-6 py-5"
                  >

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#9B6664]/10 text-[#9B6664]">
                      <Check size={14} />
                    </span>

                    <span className="font-medium text-[#403630]">
                      {test}
                    </span>

                  </div>
                ))}

              </div>

            </div>

            {/* PRICE */}

            <div className="flex items-end justify-between border-t border-[#DED6D0] pt-6">

              <div>
                <p className="text-xs text-[#756B65]">
                  One-off payment
                </p>

                <p className="mt-1 text-xs text-[#9A8F89]">
                  No subscription
                </p>
              </div>

              <p className="font-heading text-3xl italic text-[#302824]">
                {formatGBP(kit.pricePence)}
              </p>

            </div>

            {error && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-center text-sm text-red-700">
                {error}
              </p>
            )}

          </div>
        )}

        {/* NAVIGATION */}

        <div className="mt-10 flex items-center justify-between border-t border-[#E5DDD7] pt-6">

          {step > 0 ? (
            <Button
              variant="ghost"
              size="md"
              icon={ArrowLeft}
              onClick={() => setStep((current) => current - 1)}
              disabled={submitting}
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
              className={cn(
                "rounded-full bg-[#302824] px-7 text-[#F8F5F0] hover:bg-[#453A35]",
                !canContinue && "cursor-not-allowed opacity-35"
              )}
              onClick={() => setStep((current) => current + 1)}
            >
              Continue
            </Button>
          ) : (
            <Button
              size="md"
              icon={submitting ? Loader2 : ArrowRight}
              iconPosition="right"
              disabled={submitting}
              className="rounded-full bg-[#302824] px-7 text-[#F8F5F0] hover:bg-[#453A35]"
              onClick={handleSubmit}
            >
              {submitting ? "Preparing…" : "Continue to payment"}
            </Button>
          )}

        </div>

      </div>

    </div>
  );
}

/* ============================================================
   STEP HEADING
============================================================ */

function StepHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9B6664]">
        {eyebrow}
      </p>

      <h2 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.02em] text-[#302824] sm:text-4xl">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-[#756B65]">
        {description}
      </p>
    </div>
  );
}

/* ============================================================
   CHOICE
============================================================ */

function Choice({
  selected,
  onClick,
  title,
  description,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  description?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group rounded-[20px] border p-5 text-left transition-all duration-300",
        selected
          ? "border-[#9B6664] bg-[#EFE2DD] shadow-sm"
          : "border-[#DED6D0] bg-[#FFFCF9] hover:border-[#B99A91] hover:bg-[#FAF5F1]"
      )}
    >
      <div className="flex items-start justify-between gap-4">

        <div>

          <p className="font-heading text-xl italic text-[#302824]">
            {title}
          </p>

          {description && (
            <p className="mt-1 text-xs leading-5 text-[#756B65]">
              {description}
            </p>
          )}

        </div>

        <span
          className={cn(
            "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all",
            selected
              ? "border-[#9B6664] bg-[#9B6664] text-white"
              : "border-[#CFC4BD] text-transparent"
          )}
        >
          <Check size={12} />
        </span>

      </div>
    </button>
  );
}

/* ============================================================
   FIELD
============================================================ */

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
  onChange: (value: string) => void;
  type?: string;
  hint?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">

      <span className="font-medium text-[#403630]">
        {label}
        {required && (
          <span className="ml-1 text-[#9B6664]">*</span>
        )}
      </span>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-xl border border-[#D9CFC8] bg-[#FFFCF9] px-4 text-sm text-[#302824] outline-none transition-all placeholder:text-[#A79C96] focus:border-[#9B6664] focus:ring-2 focus:ring-[#9B6664]/10"
      />

      {hint && (
        <span className="text-[11px] text-[#9A8F89]">
          {hint}
        </span>
      )}

    </label>
  );
}