"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const heroImages = [
  "/images/mama-nest bathroom.jpg",
  "/images/mama-nest walking.jpg",
  "/images/mama-nest black woman.JPG",
  "/images/mama-nest looking window.JPG",
];

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
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((current) => (current + 1) % heroImages.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#F8F5F0] text-[#302824]">
      {/* =====================================================
          HERO — FULL-WIDTH EDITORIAL SLIDESHOW
      ====================================================== */}

      <section className="relative min-h-screen overflow-hidden">
        {/* Slideshow images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Warm editorial overlay */}
          <div className="absolute inset-0 bg-[#302824]/25" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#302824]/70 via-[#302824]/30 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#302824]/55 via-transparent to-[#302824]/10" />
        </div>

        {/* Header */}
        <Header />

        {/* Hero content */}
        <Container className="relative z-10 flex min-h-screen items-end pb-20 pt-32 lg:pb-28">
          <div className="max-w-2xl text-[#F8F5F0]">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F1D9D1]">
                For the mother, not just the baby
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 max-w-xl font-heading text-[58px] leading-[0.92] tracking-[-0.045em] sm:text-7xl lg:text-[86px]">
                Someone should
                <br />
                check on
                <br />
                <span className="italic text-[#F0C7BE]">you too.</span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-7 max-w-lg text-base leading-7 text-[#F8F5F0]/90 sm:text-lg">
                Your six-week check looks at the baby. We look at you — with
                an at-home test for iron, thyroid, and vitamin D.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Button
                  href="/start"
                  size="lg"
                  icon={ArrowRight}
                  className="rounded-full bg-[#F8F5F0] px-8 text-[#302824] shadow-xl hover:bg-white"
                >
                  Get started
                </Button>

                <a
                  href="#what-we-do"
                  className="group flex items-center gap-2 text-sm font-medium text-[#F8F5F0]"
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
              <div className="mt-8 flex items-center gap-3 text-xs text-[#F8F5F0]/75">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#F8F5F0]/50">
                  <Check size={13} />
                </span>

                Iron · Thyroid · Vitamin D
              </div>
            </Reveal>
          </div>
        </Container>

        {/* Slide indicators */}
        <div className="absolute bottom-8 right-6 z-20 flex items-center gap-2 lg:right-12">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show image ${index + 1}`}
              onClick={() => setCurrentImage(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentImage
                  ? "w-10 bg-[#F8F5F0]"
                  : "w-4 bg-[#F8F5F0]/50"
              }`}
            />
          ))}
        </div>
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
                  src="/images/mama-nest black woman.JPG"
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