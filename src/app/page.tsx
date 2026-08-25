"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/mama-nest-bathroom.jpg",
    alt: "Mother taking a quiet moment at home",
  },
  {
    src: "/images/mama-nest-walking.jpg",
    alt: "Mother walking peacefully outdoors",
  },
  {
    src: "/images/mama-nest-black-woman.JPG",
    alt: "Mother taking a peaceful moment for herself",
  },
  {
    src: "/images/mama-nest-looking-window.JPG",
    alt: "Mother looking thoughtfully through a window",
  },
];

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#302824]">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="h-full w-full object-cover"
          />

          {/* Warm editorial overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#302824]/65 via-[#302824]/20 to-transparent" />

          <div className="absolute inset-0 bg-black/10" />
        </div>
      ))}

      {/* HERO COPY */}

      <div className="relative z-10 flex h-full items-end">
        <div className="w-full px-6 pb-20 sm:px-10 lg:px-20 lg:pb-24">
          <div className="max-w-xl">

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#F3DDD7]">
              Mama Nest
            </p>

            <h1 className="font-heading text-5xl leading-[0.95] tracking-[-0.04em] text-[#F8F5F0] sm:text-6xl lg:text-8xl">
              Return to
              <br />
              <span className="italic text-[#E7BEB4]">
                yourself.
              </span>
            </h1>

            <div className="mt-8">
              <a
                href="/start"
                className="inline-flex items-center rounded-full bg-[#F8F5F0] px-7 py-3.5 text-sm font-semibold text-[#302824] transition-transform duration-300 hover:scale-[1.03]"
              >
                Get started
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* SLIDE INDICATORS */}

      <div className="absolute bottom-7 right-6 z-20 flex gap-2 sm:right-10 lg:right-20">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === current
                ? "w-10 bg-[#F8F5F0]"
                : "w-3 bg-[#F8F5F0]/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
} 