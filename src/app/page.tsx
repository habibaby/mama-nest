import { Heart, PackageCheck, TestTube, BellRing } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const highlights = [
  {
    icon: PackageCheck,
    label: "Your recovery kit",
    detail: "Sent to arrive before she does.",
  },
  {
    icon: TestTube,
    label: "Your at-home test",
    detail: "Iron, thyroid, vitamin D — done in the sixth week.",
  },
  {
    icon: BellRing,
    label: "We check on you",
    detail: "Reminders timed to when you actually need them.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — one line, one feeling, one action */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blush via-cream to-offwhite">
        <Header />

        {/* Decorative blooms — purely CSS, no external images to break */}
        <div
          aria-hidden
          className="animate-float pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
        />
        <div
          aria-hidden
          className="animate-float pointer-events-none absolute -right-10 top-52 h-72 w-72 rounded-full bg-rose/25 blur-3xl"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          aria-hidden
          className="animate-float pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-sage/15 blur-3xl"
          style={{ animationDelay: "3s" }}
        />

        <div className="relative">
          <Container className="flex flex-col items-center py-32 text-center sm:py-40">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              For the mother, not just the baby
            </p>
            <h1 className="mt-5 max-w-2xl text-balance font-heading text-5xl italic leading-tight text-rose-deep sm:text-6xl">
              Welcome, Mama.
            </h1>
            <p className="mt-5 max-w-md text-lg text-ink/70">
              Tell us your due date. We&apos;ll send your care kit to arrive before she does.
            </p>
            <div className="mt-9">
              <Button href="/start" size="lg" icon={Heart}>
                Begin your Sixth Week
              </Button>
            </div>
          </Container>
        </div>
      </section>

      {/* Three quiet facts — no essays */}
      <section className="bg-offwhite py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.label} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blush text-rose-deep">
                  <h.icon size={24} />
                </div>
                <p className="mt-4 font-heading text-lg italic text-rose-deep">{h.label}</p>
                <p className="mt-1 text-sm text-ink/60">{h.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Single closing invitation */}
      <section className="bg-rose-deep py-16 text-offwhite">
        <Container className="flex flex-col items-center gap-5 text-center">
          <p className="max-w-md text-balance font-heading text-2xl italic">
            Someone should ask how you&apos;re doing too.
          </p>
          <Button href="/start" variant="primary" size="lg" className="bg-gold text-rose-deep hover:bg-gold/90">
            Begin your Sixth Week
          </Button>
        </Container>
      </section>

      <Footer />
    </>
  );
}
