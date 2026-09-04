"use client";

import { useState } from "react";
import Link from "next/link";
import { CULTURE_LIST } from "@/lib/data/cultures";

export function CultureSelector() {
  const [active, setActive] = useState<string | null>(null);
  const culture = CULTURE_LIST.find((c) => c.key === active) ?? null;

  return (
    <div className="mt-16 text-center">
      <h3 className="font-heading text-2xl italic text-[#9B6664]">Choose your culture</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-[#655B56]">
        See the meals, ingredients and care routine matched to your background.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {CULTURE_LIST.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setActive(c.key)}
            className={`rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
              active === c.key
                ? "border-[#302824] bg-[#302824] text-[#F8F5F0]"
                : "border-[#DED6D0] text-[#655B56] hover:border-[#9B6664]"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {culture && (
        <div className="mx-auto mt-6 max-w-md rounded-3xl border border-rose/10 bg-offwhite p-6 text-left shadow-xl shadow-rose-deep/5">
          <p className="font-heading text-xl italic text-rose-deep">{culture.label}</p>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm text-ink/70">
            {culture.checklist.slice(0, 3).map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
            <Link href={`/meals?culture=${culture.key}`} className="text-rose-deep hover:underline">
              See {culture.label} meals →
            </Link>
            <Link href={`/ingredients?culture=${culture.key}`} className="text-rose-deep hover:underline">
              See {culture.label} ingredients →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
