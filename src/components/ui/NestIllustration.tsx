/** A soft, hand-drawn-feeling nest — woven twig strokes, two eggs, a leaf
 * sprig. Pure inline SVG so it never depends on an external image loading. */
export function NestIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 220"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* Leaf sprig */}
      <path
        d="M46 150c-6-22-2-42 14-58"
        stroke="var(--sage)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M44 128c-10-4-16-14-15-27 12 2 20 11 21 22z"
        fill="var(--sage)"
        opacity="0.5"
      />
      <path
        d="M56 108c-3-11 1-22 11-30 5 11 2 23-6 30z"
        fill="var(--sage)"
        opacity="0.65"
      />

      {/* Woven nest — overlapping arcs */}
      <path
        d="M20 158c8 26 40 42 92 42s84-16 92-42"
        stroke="var(--gold)"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M14 150c10 30 46 48 98 48s88-18 98-48"
        stroke="var(--rose-deep)"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M28 168c6 20 34 32 84 32s78-12 84-32"
        stroke="var(--rose)"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.5"
      />
      <ellipse cx="112" cy="180" rx="98" ry="26" stroke="var(--gold)" strokeWidth="3" opacity="0.35" />

      {/* Two eggs, nestled */}
      <ellipse cx="96" cy="156" rx="20" ry="24" fill="var(--offwhite)" stroke="var(--rose-deep)" strokeWidth="2" opacity="0.9" />
      <ellipse cx="132" cy="162" rx="17" ry="21" fill="var(--blush)" stroke="var(--rose-deep)" strokeWidth="2" opacity="0.9" />
    </svg>
  );
}
