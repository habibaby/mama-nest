import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { formatGBP } from "@/lib/utils";
import { Logo } from "@/components/layout/Logo";
import { DemoPaymentForm } from "@/components/checkout/DemoPaymentForm";

export default async function DemoCheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>;
}) {
  const { order: orderId } = await searchParams;
  if (!orderId) notFound();

  const supabase = await createClient();
  const { data: order } = await supabase
    .from("orders")
    .select("id, amount_pence, status")
    .eq("id", orderId)
    .single();

  if (!order) notFound();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 py-16">
      <div className="mb-8">
        <Link href="/" aria-label="Mama Nest home">
          <Logo />
        </Link>
      </div>
      <div className="w-full max-w-md rounded-3xl border border-rose/10 bg-offwhite p-8 shadow-xl shadow-rose-deep/5">
        <h1 className="text-center font-heading text-2xl italic text-rose-deep">Almost there</h1>
        <div className="mt-5 flex items-center justify-between rounded-xl bg-blush px-4 py-3 text-sm">
          <span className="text-ink/70">The Mama Nest Kit</span>
          <span className="font-semibold text-rose-deep">{formatGBP(order.amount_pence)}</span>
        </div>
        <div className="mt-6">
          <DemoPaymentForm orderId={order.id} />
        </div>
      </div>
    </div>
  );
}
