import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  {
    number: "01",
    title: "Your at-home test",
    description:
      "Iron, thyroid, vitamin D. Done around week six, from home.",
  },
  {
    number: "02",
    title: "A plan, not just numbers",
    description:
      "Results come with a clear next step: reassurance, or exactly what to raise with your GP.",
  },
  {
    number: "03",
    title: "We check on you",
    description:
      "Reminders timed to when you actually need them, not a generic countdown.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#F8F5F0] text-[#302824]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-screen overflow-hidden">
        <Header />

        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-[#D9B8A5]/20 blur-[110px]"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#B97978]/15 blur-[120px]"
        />

        <Container className="relative grid min-h-[calc(100vh-80px)] items-center gap-14 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
          {/* HERO TEXT */}

          <div className="relative z-10 max-w-xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8D5D5B]">
                For the mother, not just the baby
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-7 font-heading text-[58px] leading-[0.95] tracking-[-0.04em] text-[#302824] sm:text-7xl lg:text-[82px]">
                Someone should
                <br />
                check on
                <br />
                <span className="italic text-[#9B6664]">you too.</span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-8 max-w-md text-lg leading-8 text-[#655B56]">
                Your six-week check looks at the baby. We look at you — with
                an at-home test for iron, thyroid, and vitamin D, sent right
                when you need it.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Button
                  href="/start"
                  size="lg"
                  icon={ArrowRight}
                  className="rounded-full bg-[#302824] px-8 text-[#F8F5F0] shadow-lg shadow-[#302824]/10 hover:bg-[#453A35]"
                >
                  Get started
                </Button>

                <a
                  href="#what-we-do"
                  className="group flex items-center gap-2 text-sm font-medium text-[#4F4540]"
                >
                  See how it works
                  <ChevronDown
                    size={16}
                    className="transition-transform group-hover:translate-y-1"
                  />
                </a>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-12 flex items-center gap-3 text-xs text-[#756B65]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C8BDB5]">
                  <Check size={13} />
                </span>

                Designed specifically for postpartum women
              </div>
            </Reveal>
          </div>

          {/* HERO IMAGE */}

          <Reveal delay={180}>
            <div className="relative mx-auto w-full max-w-[610px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[240px_240px_30px_30px] bg-[#E5D6CB] shadow-[0_30px_100px_rgba(48,40,36,0.12)]">
                <img
                  src="/images/mama-hero.JPG"
                  alt="Mother resting peacefully at home after childbirth"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#302824]/25 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-8 left-4 w-[245px] rounded-2xl border border-white/70 bg-[#F8F5F0]/95 p-6 shadow-[0_25px_70px_rgba(48,40,36,0.14)] backdrop-blur-md sm:-left-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#92706C]">
                  Mama Nest
                </p>

                <p className="mt-3 font-heading text-2xl leading-tight text-[#302824]">
                  Postpartum
                  <br />
                  <span className="italic">Health Check</span>
                </p>

                <div className="my-4 h-px bg-[#DED4CC]" />

                <p className="text-xs leading-5 text-[#746963]">
                  Iron · Thyroid · Vitamin D
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section
        id="what-we-do"
        className="border-y border-[#DED6D0] bg-[#F8F5F0] py-24 lg:py-32"
      >
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9B6664]">
                Your six-week check
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-7 font-heading text-5xl leading-[1.05] tracking-[-0.02em] text-[#302824] sm:text-6xl lg:text-7xl">
                Everyone checks on the baby.
                <br />
                <span className="italic text-[#9B6664]">
                  We check on you.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#655B56]">
                A simple at-home health check designed around the postpartum
                mother — with testing, clinical review, and a clear next step.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* =====================================================
          THREE POINT SECTION
      ====================================================== */}

      <section className="bg-[#302824] py-24 text-[#F8F5F0] lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
            <Reveal>
              <div className="lg:sticky lg:top-24">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D1A39A]">
                  What Mama Nest does
                </p>

                <h2 className="mt-7 font-heading text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
                  A check
                  <br />
                  designed
                  <br />
                  <span className="italic text-[#D1A39A]">for you.</span>
                </h2>

                <p className="mt-8 max-w-sm text-sm leading-7 text-[#C9BFBA]">
                  Not just a test. A simple way to understand what your body
                  may need after birth.
                </p>
              </div>
            </Reveal>

            <div className="divide-y divide-[#514742]">
              {features.map((feature, index) => (
                <Reveal key={feature.number} delay={index * 100}>
                  <div className="grid gap-6 py-12 sm:grid-cols-[90px_1fr]">
                    <span className="font-mono text-xs tracking-[0.2em] text-[#92706C]">
                      {feature.number}
                    </span>

                    <div>
                      <h3 className="font-heading text-4xl italic text-[#F8F5F0] sm:text-5xl">
                        {feature.title}
                      </h3>

                      <p className="mt-4 max-w-lg text-sm leading-7 text-[#C9BFBA]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          LIFESTYLE
      ====================================================== */}

      <section className="bg-[#F8F5F0] py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">
                <img
                  src="/images/mama-resting.JPG"
                  alt="Mother taking a quiet moment for herself at home"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9B6664]">
                  Made for mothers
                </p>

                <h2 className="mt-7 font-heading text-5xl leading-[1.03] text-[#302824] sm:text-6xl">
                  Your health
                  <br />
                  deserves
                  <br />
                  <span className="italic text-[#9B6664]">
                    checking too.
                  </span>
                </h2>

                <p className="mt-8 max-w-lg text-base leading-8 text-[#655B56]">
                  No complicated journey. Just a thoughtful way to understand
                  more about what is happening inside your body after birth.
                </p>

                <div className="mt-9">
                  <Button
                    href="/start"
                    size="lg"
                    icon={ArrowRight}
                    className="rounded-full bg-[#302824] px-8 text-[#F8F5F0] hover:bg-[#453A35]"
                  >
                    Get started
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-[#9B6664] py-24 text-[#F8F5F0] lg:py-32">
        <Container className="text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#EBD3CC]">
              Mama Nest
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mx-auto mt-7 max-w-4xl font-heading text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              For the mother, not just the baby.
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#F3DDD7]">
              Made for mothers, by a mother.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10">
              <Button
                href="/start"
                size="lg"
                icon={ArrowRight}
                className="rounded-full bg-[#F8F5F0] px-9 text-[#302824] hover:bg-white"
              >
                Get started
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}