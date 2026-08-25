import { ArrowDown, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";

const tests = [
  {
    number: "01",
    name: "Iron",
    title: "Know your iron status.",
    description:
      "A simple way to check an important marker after pregnancy and birth.",
  },
  {
    number: "02",
    name: "Thyroid",
    title: "Check your thyroid.",
    description:
      "Understand an important part of your body's health during postpartum recovery.",
  },
  {
    number: "03",
    name: "Vitamin D",
    title: "Check your vitamin D.",
    description:
      "A convenient way to check an essential nutrient from the comfort of home.",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-ivory text-espresso">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-screen bg-ivory">

        <Header />

        <div className="grid min-h-screen lg:grid-cols-2">

          {/* LEFT — EDITORIAL COPY */}

          <div className="flex items-end px-6 pb-16 pt-36 sm:px-10 lg:px-16 lg:pb-20 lg:pt-32">
            <div className="max-w-[620px]">

              <Reveal>
                <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.32em] text-oxblood">
                  Postpartum health testing
                </p>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="font-heading text-[62px] leading-[0.94] tracking-[-0.045em] sm:text-[76px] lg:text-[86px] xl:text-[96px]">
                  Your body
                  <br />
                  changed.
                  <br />
                  <span className="italic text-oxblood">
                    We help you
                  </span>
                  <br />
                  understand it.
                </h1>
              </Reveal>

              <Reveal delay={180}>
                <p className="mt-9 max-w-[430px] text-[15px] leading-7 text-espresso-soft sm:text-base">
                  Thoughtfully designed at-home health testing for mothers
                  after birth. Because your health deserves attention too.
                </p>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-10 flex flex-wrap items-center gap-7">

                  <a
                    href="/start"
                    className="group inline-flex items-center gap-5 bg-espresso px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory transition-all duration-300 hover:bg-oxblood"
                  >
                    Explore testing

                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="#testing"
                    className="text-[10px] font-semibold uppercase tracking-[0.2em] text-espresso-soft underline decoration-sand underline-offset-8 transition-colors hover:text-oxblood"
                  >
                    Discover Mama Nest
                  </a>

                </div>
              </Reveal>

              <Reveal delay={340}>
                <div className="mt-16 flex items-center gap-4">
                  <span className="h-px w-12 bg-sand" />
                  <span className="text-[9px] uppercase tracking-[0.25em] text-espresso-soft">
                    Designed for mothers
                  </span>
                </div>
              </Reveal>

            </div>
          </div>

          {/* RIGHT — FULL HEIGHT IMAGE */}

          <div className="relative min-h-[620px] lg:min-h-screen">

            <img
              src="/images/mama-hero.JPG"
              alt="Mother resting peacefully at home after childbirth"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-ivory sm:bottom-10 sm:left-10 sm:right-10">

              <div>
                <p className="text-[9px] uppercase tracking-[0.28em]">
                  Mama Nest
                </p>
                <p className="mt-2 font-heading text-2xl italic">
                  For the mother, too.
                </p>
              </div>

              <a
                href="#intro"
                className="flex h-12 w-12 items-center justify-center border border-ivory/50 backdrop-blur-sm transition-colors hover:bg-ivory hover:text-espresso"
                aria-label="Scroll down"
              >
                <ArrowDown size={16} />
              </a>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO STATEMENT
      ====================================================== */}

      <section
        id="intro"
        className="border-b border-stone bg-paper px-6 py-28 sm:px-10 lg:px-16 lg:py-40"
      >

        <div className="mx-auto max-w-[1150px]">

          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-oxblood">
              A different kind of postpartum check-in
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-10 max-w-[1000px] font-heading text-[48px] leading-[1.02] tracking-[-0.035em] sm:text-[64px] lg:text-[78px]">
              Everyone asks how the baby is doing.
              <br />
              <span className="italic text-oxblood">
                We think someone should ask about you.
              </span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 border-t border-stone pt-10 lg:grid-cols-[1fr_1fr]">

            <p className="max-w-md text-sm leading-7 text-espresso-soft">
              Pregnancy and childbirth ask a remarkable amount of your body.
              Yet after birth, your own health can quickly become an
              afterthought.
            </p>

            <p className="max-w-md text-sm leading-7 text-espresso-soft lg:justify-self-end">
              Mama Nest gives mothers a simple, considered way to check
              important health markers from home.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          TESTING COLLECTION
      ====================================================== */}

      <section
        id="testing"
        className="bg-espresso px-6 py-28 text-ivory sm:px-10 lg:px-16 lg:py-40"
      >

        <div className="mx-auto max-w-[1250px]">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

            {/* INTRO */}

            <Reveal>
              <div className="lg:sticky lg:top-24 lg:self-start">

                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-sand">
                  The Mama Nest collection
                </p>

                <h2 className="mt-8 font-heading text-[52px] leading-[0.98] tracking-[-0.035em] sm:text-[64px]">
                  Three
                  <br />
                  markers.
                  <br />
                  <span className="italic text-[#C99C95]">
                    One clearer
                    <br />
                    picture.
                  </span>
                </h2>

                <p className="mt-8 max-w-[330px] text-sm leading-7 text-[#CFC6C0]">
                  Focused at-home testing for some of the health markers that
                  matter during postpartum recovery.
                </p>

              </div>
            </Reveal>


            {/* TESTS */}

            <div className="border-t border-white/15">

              {tests.map((test, index) => (

                <Reveal key={test.name} delay={index * 100}>

                  <article className="group border-b border-white/15 py-10 sm:py-14">

                    <div className="grid gap-6 sm:grid-cols-[90px_1fr_auto] sm:items-start">

                      <span className="font-mono text-[10px] tracking-[0.2em] text-[#AFA39C]">
                        {test.number}
                      </span>

                      <div>

                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C99C95]">
                          {test.name}
                        </p>

                        <h3 className="mt-5 font-heading text-[38px] leading-none tracking-[-0.025em] sm:text-[50px]">
                          {test.title}
                        </h3>

                        <p className="mt-5 max-w-[470px] text-sm leading-7 text-[#BFB5AE]">
                          {test.description}
                        </p>

                      </div>

                      <div className="hidden sm:block">

                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#C99C95] group-hover:bg-[#C99C95] group-hover:text-espresso">

                          <ArrowRight
                            size={15}
                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                          />

                        </div>

                      </div>

                    </div>

                  </article>

                </Reveal>

              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          IMAGE + STATEMENT
      ====================================================== */}

      <section
        id="our-approach"
        className="bg-ivory px-6 py-24 sm:px-10 lg:px-16 lg:py-36"
      >

        <div className="mx-auto grid max-w-[1250px] items-center gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-24">

          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">

              <img
                src="/images/mama-resting.JPG"
                alt="Mother taking a quiet moment for herself at home"
                className="luxury-image h-full w-full object-cover"
              />

            </div>
          </Reveal>


          <Reveal delay={120}>

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-oxblood">
                Made around you
              </p>

              <h2 className="mt-8 font-heading text-[52px] leading-[1] tracking-[-0.035em] sm:text-[65px]">
                Because
                <br />
                recovery
                <br />
                <span className="italic text-oxblood">
                  is personal.
                </span>
              </h2>

              <p className="mt-9 max-w-[430px] text-sm leading-7 text-espresso-soft">
                You shouldn't have to rearrange your life around your health.
                Mama Nest brings thoughtful testing closer to home, so you
                can make time for yourself without adding another journey to
                your day.
              </p>

              <a
                href="#how-it-works"
                className="group mt-9 inline-flex items-center gap-4 border-b border-espresso pb-3 text-[10px] font-semibold uppercase tracking-[0.22em]"
              >
                Our approach

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>

          </Reveal>

        </div>
      </section>


      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section
        id="how-it-works"
        className="border-y border-stone bg-paper px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >

        <div className="mx-auto max-w-[1250px]">

          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">

            <Reveal>

              <div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-oxblood">
                  How it works
                </p>

                <h2 className="mt-8 font-heading text-[52px] leading-none tracking-[-0.035em] sm:text-[65px]">
                  Simple.
                  <br />
                  <span className="italic text-oxblood">
                    Considered.
                  </span>
                </h2>

              </div>

            </Reveal>


            <div className="border-t border-stone">

              {[
                {
                  number: "01",
                  title: "Choose",
                  text: "Select the health test you'd like to take.",
                },
                {
                  number: "02",
                  title: "Test at home",
                  text: "Collect your sample from the comfort and privacy of home.",
                },
                {
                  number: "03",
                  title: "Understand",
                  text: "Receive your results and a clearer picture of your health.",
                },
              ].map((step, index) => (

                <Reveal key={step.number} delay={index * 100}>

                  <div className="grid gap-5 border-b border-stone py-9 sm:grid-cols-[80px_180px_1fr]">

                    <span className="font-mono text-[10px] tracking-[0.2em] text-oxblood">
                      {step.number}
                    </span>

                    <h3 className="font-heading text-2xl italic">
                      {step.title}
                    </h3>

                    <p className="max-w-md text-sm leading-6 text-espresso-soft">
                      {step.text}
                    </p>

                  </div>

                </Reveal>

              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-oxblood px-6 py-28 text-ivory sm:px-10 lg:px-16 lg:py-40">

        <div className="relative z-10 mx-auto max-w-[1100px] text-center">

          <Reveal>

            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#E8C9C3]">
              Mama Nest
            </p>

          </Reveal>

          <Reveal delay={100}>

            <h2 className="mx-auto mt-8 max-w-[900px] font-heading text-[52px] leading-[0.98] tracking-[-0.04em] sm:text-[70px] lg:text-[88px]">
              Your baby isn't the only one worth checking on.
            </h2>

          </Reveal>

          <Reveal delay={200}>

            <a
              href="/start"
              className="group mt-10 inline-flex items-center gap-6 bg-ivory px-8 py-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-espresso transition-all duration-300 hover:bg-white"
            >
              Explore testing

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </Reveal>

        </div>

      </section>


      <Footer />

    </main>
  );
}