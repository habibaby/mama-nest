"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { completeDemoPayment } from "@/app/checkout/demo/actions";

export function DemoPaymentForm({ orderId }: { orderId: string }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handlePay() {
    setSubmitting(true);
    setError(null);
    const result = await completeDemoPayment(orderId);
    if (result.error) {
      setError(result.error);
      setSubmitting(false);
      return;
    }
    router.push(`/order/confirmation?order=${orderId}`);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-xl border border-dashed border-gold/50 bg-gold/10 px-4 py-3 text-xs text-ink/70">
        Demo checkout — no real card is charged. Real Stripe payment goes live the moment
        Stripe keys are added.
      </div>
      <div className="rounded-xl border border-rose/15 px-4 py-3 text-sm text-ink/50">
        •••• •••• •••• 4242 &nbsp;·&nbsp; 12/29 &nbsp;·&nbsp; 123
      </div>
      {error && <p className="text-sm text-rose">{error}</p>}
      <Button size="lg" icon={submitting ? Loader2 : Lock} onClick={handlePay} disabled={submitting}>
        {submitting ? "Processing…" : "Complete purchase"}
      </Button>
    </div>
  );
}
