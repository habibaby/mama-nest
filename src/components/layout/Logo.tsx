export function Logo({ dark }: { dark?: boolean }) {
  return (
    <span
      className={`font-heading text-[25px] font-medium tracking-[-0.04em] ${
        dark ? "text-ivory" : "text-espresso"
      }`}
    >
      Mama Nest
    </span>
  );
}