"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

const slides = [
  {
    image: "/images/Mama-nest black woman.JPG",
    alt: "Mother taking a quiet moment for herself",
  },
  {
    image: "/images/Mama-nest hijabi.jpg",
    alt: "Muslim mother taking a quiet moment for herself",
  },
  {
    image: "/images/Mama-nest bathroom.jpg",
    alt: "Mother enjoying a quiet self-care moment",
  },
  {
    image: "/images/Mama-nest walking.jpg",
    alt: "Mother moving through her home",
  },
  {
    image: "/images/Mama-nest looking window.JPG",
    alt: "Mother enjoying a quiet moment at home",
  },
];

const tests = [
  {
    number: "01",
    title: "Iron",
  },
  {
    number: "02",
    title: "Thyroid",
  },
  {
    number: "03",
    title: "Vitamin D",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-[#F8F5F0] text-[#302824]">

      {/* =====================================================
          HERO — FULL SCREEN LUXURY SLIDESHOW
      ====================================================== */}

      <section className="relative h-[92vh] min-h-[680px] w-full overflow-hidden bg-[#302824]">

        {/* SLIDES */}

        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="h-full w-full object-cover"
            />

            {/* Cinematic overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#211B18]/70 via-[#211B18]/15 to-[#211B18]/20" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(30,24,21,0.2)_100%)]" />
          </div>
        ))}

        {/* HEADER */}

        <div className="absolute inset-x-0 top-0 z-30">
          <Header />
        </div>

        {/* HERO COPY */}

        <div className="absolute inset-0 z-20 flex items-end justify-center px-6 pb-20 text-center sm:pb-24 lg:pb-28">

          <div className="max-w-3xl">

            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#F8F5F0]/80">
              Mama Nest · At-home health testing
            </p>

            <h1 className="font-heading text-6xl leading-[0.92] tracking-[-0.04em] text-[#F8F5F0] sm:text-7xl lg:text-[100px]">
              Return to
              <br />
              <span className="italic">
                yourself.
              </span>
            </h1>

            <div className="mt-8">
              <Button
                href="/start"
                size="lg"
                icon={ArrowRight}
                className="rounded-full bg-[#F8F5F0] px-9 py-6 text-[#302824] shadow-[0_15px_50px_rgba(0,0,0,0.2)] transition-all hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              >
                Explore testing
              </Button>
            </div>

          </div>
        </div>

        {/* SLIDE INDICATORS */}

        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">

          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-700 ${
                index === currentSlide
                  ? "w-10 bg-[#F8F5F0]"
                  : "w-2 bg-[#F8F5F0]/50"
              }`}
            />
          ))}

        </div>

      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="bg-[#F8F5F0] px-6 py-24 lg:py-32">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#9B6664]">
            Postpartum health
          </p>

          <h2 className="mt-6 font-heading text-5xl leading-[1.05] tracking-[-0.03em] text-[#302824] sm:text-6xl">

            Everyone checks on the baby.

            <br />

            <span className="italic text-[#9B6664]">
              Who checks on you?
            </span>

          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-[#655B56]">
            Thoughtful at-home testing for three important postpartum health
            markers.
          </p>

        </div>

      </section>

      {/* =====================================================
          TESTS
      ====================================================== */}

      <section className="bg-[#302824] py-24 text-[#F8F5F0] lg:py-32">

        <div className="mx-auto max-w-6xl px-6">

          <div className="mb-16">

            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#D1A39A]">
              The Mama Nest test
            </p>

            <h2 className="mt-6 max-w-2xl font-heading text-5xl leading-[1] sm:text-6xl lg:text-7xl">

              A simple check-in

              <br />

              <span className="italic text-[#D1A39A]">
                for your body.
              </span>

            </h2>

          </div>

          <div className="grid border-t border-[#514742] md:grid-cols-3">

            {tests.map((test) => (
              <div
                key={test.number}
                className="border-b border-[#514742] px-2 py-12 md:border-b-0 md:border-r md:px-8 md:last:border-r-0"
              >

                <span className="font-mono text-[10px] tracking-[0.3em] text-[#92706C]">
                  {test.number}
                </span>

                <h3 className="mt-12 font-heading text-4xl italic sm:text-5xl">
                  {test.title}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          QUIET LIFESTYLE SECTION
      ====================================================== */}

      <section className="bg-[#EFE7E0] px-6 py-24 lg:py-32">

        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">

          <div className="overflow-hidden rounded-[32px]">

            <img
              src="/images/Mama-nest bathroom.jpg"
              alt="A quiet self-care moment"
              className="h-full w-full object-cover"
            />

          </div>

          <div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#9B6664]">
              Made for real life
            </p>

            <h2 className="mt-6 font-heading text-5xl leading-[1.03] sm:text-6xl">

              Your health deserves

              <br />

              <span className="italic text-[#9B6664]">
                a moment too.
              </span>

            </h2>

            <div className="mt-8">

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

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-[#9B6664] px-6 py-24 text-center text-[#F8F5F0] lg:py-32">

        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#EBD3CC]">
          Mama Nest
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl font-heading text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">

          Your baby isn't the only one

          <br />

          <span className="italic">
            worth checking on.
          </span>

        </h2>

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

      </section>

      <Footer />

    </main>
  );
}