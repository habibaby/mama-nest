/** A soft organic divider between sections — replaces a hard flat edge. */
export function Wave({ fill, flip = false }: { fill: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`block h-10 w-full sm:h-14 ${flip ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path
        d="M0 32c240 32 480 32 720 16s480-32 720 0v32H0Z"
        fill={fill}
      />
    </svg>
  );
}
