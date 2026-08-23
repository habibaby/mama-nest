import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export default function TermsPage() {
  return (
    <>
      <div className="relative bg-blush/40 pb-6 pt-28">
        <Header />
      </div>
      <Container className="max-w-2xl py-16">
        <h1 className="font-heading text-3xl italic text-rose-deep">Terms</h1>
        <p className="mt-4 text-sm leading-relaxed text-ink/65">
          Placeholder — replace with real terms of sale before taking real payment, including
          delivery, refund policy, and the exact scope of what the test can and can&apos;t tell you.
        </p>
      </Container>
      <Footer />
    </>
  );
}
