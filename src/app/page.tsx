import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const tests = [
  {
    number: "01",
    title: "Iron",
    description:
      "Understand your iron status after pregnancy and childbirth.",
  },
  {
    number: "02",
    title: "Thyroid",
    description:
      "Check important thyroid markers that can change during the postpartum period.",
  },
  {
    number: "03",
    title: "Vitamin D",
    description:
      "Check an essential nutrient that supports your body through recovery.",
  },
];

const steps = [
  {
    number: "01",
    title: "Order",
    text: "Choose the postpartum health test designed around your stage of recovery.",
  },
  {
    number: "02",
    title: "Collect",
    text: "Collect your sample from home, at a time that works for you.",
  },
  {
    number: "03",
    title: "Understand",
    text: "Receive your results and a clearer picture of what your body may need.",
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

        {/* Soft luxury background */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-[#D9B8A5]/20 blur-[110px]"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#B97978]/15 blur-[120px]"
        />

        <Container className="relative grid min-h-[calc(100vh-80px)] items-center gap-16 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
          {/* HERO TEXT */}

          <div className="relative z-10 max-w-xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8D5D5B]">
                Maternal health · From home
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-7 font-heading text-[62px] leading-[0.94] tracking-[-0.04em] text-[#302824] sm:text-7xl lg:text-[88px]">
                Know what
                <br />
                your body
                <br />
                <span className="italic text-[#9B6664]">needs.</span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-8 max-w-md text-lg leading-8 text-[#655B56]">
                Thoughtfully designed at-home health testing for the
                postpartum mother — because your recovery deserves to be
                understood too.
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
                  Explore testing
                </Button>

                <a
                  href="#how-it-works"
                  className="group flex items-center gap-2 text-sm font-medium text-[#4F4540]"
                >
                  How it works
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

              {/* Floating product card */}

              <div className="absolute -bottom-8 left-4 w-[245px] rounded-2xl border border-white/70 bg-[#F8F5F0]/95 p-6 shadow-[0_25px_70px_rgba(48,40,36,0.14)] backdrop-blur-md sm:-left-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#92706C]">
                  Mama Nest
                </p>

                <p className="mt-3 font-heading text-2xl leading-tight text-[#302824]">
                  Postpartum
                  <br />
                  <span className="italic">Health Test</span>
                </p>

                <div className="my-4 h-px bg-[#DED4CC]" />

                <p className="text-xs leading-5 text-[#746963]">
                  A thoughtful health check, designed to fit around your life.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="border-y border-[#DED6D0] bg-[#F8F5F0] py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9B6664]">
                The postpartum check-in
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-7 font-heading text-5xl leading-[1.05] tracking-[-0.02em] text-[#302824] sm:text-6xl lg:text-7xl">
                Everyone checks on the baby.
                <br />
                <span className="italic text-[#9B6664]">
                  Who checks on you?
                </span>
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#655B56]">
                Pregnancy and birth can leave your body depleted and
                transformed. Mama Nest gives you a simple way to check in on
                important health markers from the comfort of home.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* =====================================================
          TESTING
      ====================================================== */}

      <section className="bg-[#302824] py-24 text-[#F8F5F0] lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
            <Reveal>
              <div className="lg:sticky lg:top-24">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D1A39A]">
                  What we test
                </p>

                <h2 className="mt-7 font-heading text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
                  A clearer
                  <br />
                  picture of
                  <br />
                  <span className="italic text-[#D1A39A]">you.</span>
                </h2>

                <p className="mt-8 max-w-sm text-sm leading-7 text-[#C9BFBA]">
                  Focused testing for important health markers during the
                  postpartum period.
                </p>
              </div>
            </Reveal>

            <div className="divide-y divide-[#514742]">
              {tests.map((test, index) => (
                <Reveal key={test.title} delay={index * 100}>
                  <div className="grid gap-6 py-12 sm:grid-cols-[90px_1fr]">
                    <span className="font-mono text-xs tracking-[0.2em] text-[#92706C]">
                      {test.number}
                    </span>

                    <div>
                      <h3 className="font-heading text-4xl italic text-[#F8F5F0] sm:text-5xl">
                        {test.title}
                      </h3>

                      <p className="mt-4 max-w-lg text-sm leading-7 text-[#C9BFBA]">
                        {test.description}
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
          HOW IT WORKS
      ====================================================== */}

      <section
        id="how-it-works"
        className="bg-[#EFE7E0] py-24 lg:py-32"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8D5D5B]">
                Simple by design
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-6 font-heading text-5xl leading-tight text-[#302824] sm:text-6xl lg:text-7xl">
                Three steps.
                <br />
                <span className="italic text-[#9B6664]">One less thing</span>
                <br />
                to worry about.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid overflow-hidden rounded-[28px] border border-[#D5C9C0] md:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 100}>
                <div className="h-full border-b border-[#D5C9C0] bg-[#F8F5F0] p-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-10">
                  <span className="font-mono text-xs tracking-[0.2em] text-[#A47A75]">
                    {step.number}
                  </span>

                  <h3 className="mt-14 font-heading text-3xl italic text-[#302824]">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#716660]">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
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
                  Made for real life
                </p>

                <h2 className="mt-7 font-heading text-5xl leading-[1.03] text-[#302824] sm:text-6xl">
                  Your health
                  <br />
                  deserves
                  <br />
                  <span className="italic text-[#9B6664]">a moment too.</span>
                </h2>

                <p className="mt-8 max-w-lg text-base leading-8 text-[#655B56]">
                  No waiting room. No complicated journey. Just a thoughtful
                  way to understand more about what is happening inside your
                  body after birth.
                </p>

                <div className="mt-9">
                  <Button
                    href="/start"
                    size="lg"
                    icon={ArrowRight}
                    className="rounded-full bg-[#302824] px-8 text-[#F8F5F0] hover:bg-[#453A35]"
                  >
                    Explore testing
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
              Your baby isn't the only one worth checking on.
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10">
              <Button
                href="/start"
                size="lg"
                icon={ArrowRight}
                className="rounded-full bg-[#F8F5F0] px-9 text-[#302824] hover:bg-white"
              >
                Start your health check
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
