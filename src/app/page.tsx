import { Heart, PackageCheck, TestTube, BellRing } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { NestIllustration } from "@/components/ui/NestIllustration";
import { Wave } from "@/components/ui/Wave";

const highlights = [
  {
    icon: PackageCheck,
    ring: "text-rose bg-rose/10",
    label: "Your recovery kit",
    detail: "Sent to arrive before baby does.",
  },
  {
    icon: TestTube,
    ring: "text-gold bg-gold/15",
    label: "Your at-home test",
    detail: "Iron, thyroid, vitamin D — done in the sixth week.",
  },
  {
    icon: BellRing,
    ring: "text-sage bg-sage/15",
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
          className="animate-float pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full bg-gold/25 blur-3xl"
        />
        <div
          aria-hidden
          className="animate-float pointer-events-none absolute -right-10 top-52 h-72 w-72 rounded-full bg-rose/30 blur-3xl"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          aria-hidden
          className="animate-float pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-sage/20 blur-3xl"
          style={{ animationDelay: "3s" }}
        />

        {/* Large nest motif, soft in the background */}
        <NestIllustration className="pointer-events-none absolute -right-16 top-20 h-64 w-64 opacity-70 sm:h-80 sm:w-80 lg:-right-6" />

        <div className="relative">
          <Container className="flex flex-col items-center py-28 text-center sm:py-36">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                For the mother, not just the baby
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 max-w-2xl text-balance font-heading text-5xl italic leading-tight text-rose-deep sm:text-6xl">
                Welcome, Mama.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-md text-lg text-ink/70">
                Tell us your due date. We&apos;ll send your care kit to arrive before baby does.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9">
                <Button href="/start" size="lg" icon={Heart}>
                  Get started
                </Button>
              </div>
            </Reveal>
          </Container>
        </div>
      </section>

      <Wave fill="var(--blush)" />

      {/* Three quiet facts — no essays */}
      <section className="bg-blush py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 100}>
                <div className="flex flex-col items-center text-center">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-full ${h.ring}`}>
                    <h.icon size={24} />
                  </div>
                  <p className="mt-4 font-heading text-lg italic text-rose-deep">{h.label}</p>
                  <p className="mt-1 text-sm text-ink/60">{h.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Wave fill="var(--rose-deep)" />

      {/* Single closing invitation */}
      <section className="bg-rose-deep py-16 text-offwhite">
        <Container className="flex flex-col items-center gap-5 text-center">
          <Reveal>
            <p className="max-w-md text-balance font-heading text-2xl italic">
              Someone should ask how you&apos;re doing too.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Button href="/start" variant="primary" size="lg" className="bg-gold text-rose-deep hover:bg-gold/90">
              Get started
            </Button>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </>
  );
}
