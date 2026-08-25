import { ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const tests = [
  {
    number: "01",
    title: "Iron",
    text: "Check your iron status.",
  },
  {
    number: "02",
    title: "Thyroid",
    text: "Check your thyroid health.",
  },
  {
    number: "03",
    title: "Vitamin D",
    text: "Check your vitamin D level.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#F8F5F0] text-[#302824]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-screen overflow-hidden bg-[#F8F5F0]">
        <Header />

        <Container className="relative grid min-h-screen items-center gap-12 pt-28 pb-16 lg:grid-cols-[0.8fr_1.2fr] lg:pt-24">

          {/* TEXT */}

          <div className="relative z-10 max-w-xl">

            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#9B6664]">
                Mama Nest
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-7 font-heading text-[64px] leading-[0.9] tracking-[-0.045em] text-[#302824] sm:text-7xl lg:text-[92px]">
                Your body
                <br />
                deserves
                <br />
                <span className="italic text-[#9B6664]">
                  a check-in.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-7 text-sm tracking-wide text-[#756B65]">
                Iron · Thyroid · Vitamin D
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9">
                <Button
                  href="/start"
                  size="lg"
                  icon={ArrowRight}
                  className="rounded-full bg-[#302824] px-8 text-[#F8F5F0] shadow-xl shadow-[#302824]/10 hover:bg-[#453A35]"
                >
                  Explore the test
                </Button>
              </div>
            </Reveal>

          </div>

          {/* IMAGE */}

          <Reveal delay={160}>
            <div className="relative mx-auto w-full max-w-[620px]">

              <div className="relative aspect-[4/5] overflow-hidden rounded-[260px_260px_36px_36px] bg-[#E5D6CB] shadow-[0_40px_100px_rgba(48,40,36,0.14)]">

                <img
                  src="/images/mama-hero.JPG"
                  alt="Mother resting peacefully at home"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#302824]/20 via-transparent to-transparent" />

              </div>

              {/* Small floating detail */}

              <div className="absolute bottom-6 left-6 rounded-full border border-white/60 bg-[#F8F5F0]/90 px-5 py-3 shadow-lg backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#756B65]">
                  At-home testing
                </p>
              </div>

            </div>
          </Reveal>

        </Container>
      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="bg-[#EFE7E0] py-28 lg:py-36">

        <Container>

          <div className="mx-auto max-w-4xl text-center">

            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#9B6664]">
                For Mama
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-7 font-heading text-5xl leading-[1] tracking-[-0.035em] sm:text-6xl lg:text-8xl">
                Everyone checks
                <br />
                on the baby.
                <br />
                <span className="italic text-[#9B6664]">
                  Who checks on you?
                </span>
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <p className="mx-auto mt-8 max-w-lg text-sm leading-7 text-[#756B65]">
                A simple way to check in on three important health markers
                after birth.
              </p>
            </Reveal>

          </div>

        </Container>

      </section>


      {/* =====================================================
          TEST KIT
      ====================================================== */}

      <section className="bg-[#302824] py-28 text-[#F8F5F0] lg:py-36">

        <Container>

          <div className="grid gap-20 lg:grid-cols-[0.7fr_1.3fr]">

            {/* LEFT */}

            <Reveal>

              <div className="lg:sticky lg:top-24">

                <p className="text-[11px] uppercase tracking-[0.35em] text-[#D1A39A]">
                  The test
                </p>

                <h2 className="mt-7 font-heading text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                  Three checks.
                  <br />
                  One simple
                  <br />
                  <span className="italic text-[#D1A39A]">
                    check-in.
                  </span>
                </h2>

                <div className="mt-9">
                  <Button
                    href="/start"
                    size="lg"
                    icon={ArrowRight}
                    className="rounded-full bg-[#F8F5F0] px-8 text-[#302824] hover:bg-white"
                  >
                    Explore the test
                  </Button>
                </div>

              </div>

            </Reveal>


            {/* TESTS */}

            <div className="divide-y divide-[#514742]">

              {tests.map((test, index) => (

                <Reveal
                  key={test.title}
                  delay={index * 100}
                >

                  <div className="flex items-center justify-between gap-8 py-12">

                    <div className="flex items-start gap-8">

                      <span className="pt-2 font-mono text-[10px] tracking-[0.2em] text-[#92706C]">
                        {test.number}
                      </span>

                      <div>

                        <h3 className="font-heading text-4xl italic sm:text-5xl">
                          {test.title}
                        </h3>

                        <p className="mt-3 text-sm text-[#C9BFBA]">
                          {test.text}
                        </p>

                      </div>

                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#665953]">
                      <Check
                        size={14}
                        className="text-[#D1A39A]"
                      />
                    </div>

                  </div>

                </Reveal>

              ))}

            </div>

          </div>

        </Container>

      </section>


      {/* =====================================================
          LIFESTYLE IMAGE
      ====================================================== */}

      <section className="bg-[#F8F5F0] py-28 lg:py-36">

        <Container>

          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

            <Reveal>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">

                <img
                  src="/images/mama-resting.JPG"
                  alt="Mother taking a quiet moment at home"
                  className="h-full w-full object-cover"
                />

              </div>

            </Reveal>


            <Reveal delay={120}>

              <div className="max-w-xl">

                <p className="text-[11px] uppercase tracking-[0.35em] text-[#9B6664]">
                  A moment for you
                </p>

                <h2 className="mt-7 font-heading text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                  Take a moment
                  <br />
                  to check on
                  <br />
                  <span className="italic text-[#9B6664]">
                    you.
                  </span>
                </h2>

                <div className="mt-9">
                  <Button
                    href="/start"
                    size="lg"
                    icon={ArrowRight}
                    className="rounded-full bg-[#302824] px-8 text-[#F8F5F0] hover:bg-[#453A35]"
                  >
                    Explore the test
                  </Button>
                </div>

              </div>

            </Reveal>

          </div>

        </Container>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="border-t border-[#DED6D0] bg-[#EFE7E0] py-24 lg:py-28">

        <Container>

          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">

            <Reveal>

              <div>

                <p className="text-[11px] uppercase tracking-[0.35em] text-[#9B6664]">
                  Simple by design
                </p>

                <h2 className="mt-6 font-heading text-5xl leading-none sm:text-6xl">
                  Order.
                  <br />
                  Test.
                  <br />
                  <span className="italic text-[#9B6664]">
                    Understand.
                  </span>
                </h2>

              </div>

            </Reveal>


            <Reveal delay={120}>

              <div className="flex max-w-md flex-col gap-6">

                <div className="flex items-center gap-5 border-b border-[#D5C9C0] pb-5">
                  <span className="font-mono text-[10px] text-[#9B6664]">
                    01
                  </span>

                  <span className="text-sm">
                    Order your test
                  </span>
                </div>

                <div className="flex items-center gap-5 border-b border-[#D5C9C0] pb-5">
                  <span className="font-mono text-[10px] text-[#9B6664]">
                    02
                  </span>

                  <span className="text-sm">
                    Test from home
                  </span>
                </div>

                <div className="flex items-center gap-5">
                  <span className="font-mono text-[10px] text-[#9B6664]">
                    03
                  </span>

                  <span className="text-sm">
                    Understand your results
                  </span>
                </div>

              </div>

            </Reveal>

          </div>

        </Container>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#9B6664] py-32 text-[#F8F5F0] lg:py-40">

        <Container className="text-center">

          <Reveal>

            <p className="text-[11px] uppercase tracking-[0.35em] text-[#EBD3CC]">
              Mama Nest
            </p>

          </Reveal>

          <Reveal delay={100}>

            <h2 className="mx-auto mt-7 max-w-4xl font-heading text-5xl leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:text-8xl">
              Your health
              <br />
              deserves
              <br />
              <span className="italic">
                attention too.
              </span>
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
}