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
      "Check thyroid markers that can change during the postpartum period.",
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
    text: "Choose the postpartum test designed around your stage of recovery.",
  },
  {
    number: "02",
    title: "Collect",
    text: "Collect your sample from home, at a time that works for you.",
  },
  {
    number: "03",
    title: "Understand",
    text: "Receive your results and a clearer picture of what your body needs.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#F8F5F0] text-[#302824]">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <Header />

        {/* Soft editorial background shapes */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-32 h-[420px] w-[420px] rounded-full bg-[#D9B8A5]/25 blur-[100px]"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-[#B97978]/15 blur-[120px]"
        />

        <Container className="relative grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          {/* HERO COPY */}
          <div className="max-w-xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8D5D5B]">
                Maternal health · From home
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 font-heading text-6xl leading-[0.95] tracking-[-0.03em] text-[#302824] sm:text-7xl lg:text-[88px]">
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
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button
                  href="/start"
                  size="lg"
                  icon={ArrowRight}
                  className="rounded-full bg-[#302824] px-7 text-[#F8F5F0] hover:bg-[#453A35]"
                >
                  Explore testing
                </Button>

                <a
                  href="#how-it-works"
                  className="group flex items-center gap-2 px-2 text-sm font-medium text-[#4F4540]"
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
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#C8BDB5]">
                  <Check size={13} />
                </span>
                Designed specifically for postpartum women
              </div>
            </Reveal>
          </div>

          {/* HERO IMAGE / PRODUCT */}
          <Reveal delay={180}>
            <div className="relative mx-auto w-full max-w-[620px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[240px_240px_24px_24px] bg-[#E5D6CB]">
                <img
                  src="/images/mama-hero.jpg"
                  alt="Mother resting peacefully at home after childbirth"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#302824]/25 via-transparent to-transparent" />
              </div>

              {/* Floating product card */}
              <div className="absolute -bottom-7 left-5 w-[230px] rounded-2xl border border-white/60 bg-[#F8F5F0]/95 p-5 shadow-[0_20px_60px_rgba(48,40,36,0.12)] backdrop-blur-md sm:left-[-30px]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#92706C]">
                  Mama Nest
                </p>

                <p className="mt-2 font-heading text-2xl text-[#302824]">
                  Postpartum
                  <br />
                  <span className="italic">Health Test</span>
                </p>

                <div className="mt-4 h-px bg-[#DED4CC]" />

                <p className="mt-3 text-xs leading-5 text-[#746963]">
                  Simple. Private. Designed around you.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* INTRO */}
      <section className="border-y border-[#DED6D0] bg-[#F8F5F0] py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9B6664]">
                The postpartum check-in
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-6 font-heading text-4xl leading-tight text-[#302824] sm:text-5xl lg:text-6xl">
                Everyone checks on the baby.
                <br />
                <span className="italic text-[#9B6664]">
                  Who checks on you?
                </span>
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#655B56]">
                Pregnancy and birth can leave your body depleted and
                transformed. Mama Nest gives you a simple way to check in on
                important health markers from the comfort of home.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* TESTS */}
      <section className="bg-[#302824] py-24 text-[#F8F5F0] lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
            <Reveal>
              <div className="lg:sticky lg:top-24">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D1A39A]">
                  What we look at
                </p>

                <h2 className="mt-6 font-heading text-5xl leading-tight sm:text-6xl">
                  A clearer
                  <br />
                  picture of
                  <br />
                  <span className="italic text-[#D1A39A]">you.</span>
                </h2>

                <p className="mt-7 max-w-sm text-sm leading-7 text-[#C9BFBA]">
                  Our testing focuses on important markers that can help you
                  understand your body during the postpartum period.
                </p>
              </div>
            </Reveal>

            <div className="divide-y divide-[#514742]">
              {tests.map((test, index) => (
                <Reveal key={test.title} delay={index * 100}>
                  <div className="grid gap-6 py-10 sm:grid-cols-[90px_1fr] sm:items-start">
                    <span className="font-mono text-xs tracking-[0.2em] text-[#92706C]">
                      {test.number}
                    </span>

                    <div>
                      <h3 className="font-heading text-4xl italic text-[#F8F5F0]">
                        {test.title}
                      </h3>

                      <p className="mt-3 max-w-lg text-sm leading-7 text-[#C9BFBA]">
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

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="bg-[#EFE7E0] py-24 lg:py-32"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8D5D5B]">
                Simple by design
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-5 font-heading text-5xl text-[#302824] sm:text-6xl">
                Three steps.
                <br />
                <span className="italic text-[#9B6664]">One less thing</span>
                <br />
                to worry about.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[#D5C9C0] bg-[#D5C9C0] md:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 100}>
                <div className="h-full bg-[#F8F5F0] p-8 lg:p-10">
                  <span className="font-mono text-xs tracking-[0.2em] text-[#A47A75]">
                    {step.number}
                  </span>

                  <h3 className="mt-12 font-heading text-3xl italic text-[#302824]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#716660]">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* LIFESTYLE MOMENT */}
      <section className="relative overflow-hidden bg-[#F8F5F0] py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">
                <img
                  src="/images/mama-resting.jpg"
                  alt="Mother taking a quiet moment for herself"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="max-w-lg lg:pl-10">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9B6664]">
                  Made for real life
                </p>

                <h2 className="mt-6 font-heading text-5xl leading-tight text-[#302824] sm:text-6xl">
                  Your health
                  <br />
                  deserves
                  <br />
                  <span className="italic text-[#9B6664]">a moment too.</span>
                </h2>

                <p className="mt-7 text-base leading-8 text-[#655B56]">
                  No waiting room. No complicated journey. Just a thoughtful
                  way to understand more about what is happening inside your
                  body after birth.
                </p>

                <div className="mt-8">
                  <Button
                    href="/start"
                    size="lg"
                    icon={ArrowRight}
                    className="rounded-full bg-[#302824] text-[#F8F5F0] hover:bg-[#453A35]"
                  >
                    Explore testing
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#9B6664] py-24 text-[#F8F5F0] lg:py-32">
        <Container className="text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#EBD3CC]">
              Mama Nest
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mx-auto mt-6 max-w-3xl font-heading text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Your baby isn't the only one worth checking on.
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-9">
              <Button
                href="/start"
                size="lg"
                icon={ArrowRight}
                className="rounded-full bg-[#F8F5F0] px-8 text-[#302824] hover:bg-white"
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
}