// Deliberately not a Link — callers wrap this in their own <Link href="/">
// where the logo should be clickable. Two nested <a> tags is invalid HTML
// (the browser silently un-nests them, which breaks hydration and layout),
// so Logo must never link itself.
export function Logo({ dark }: { dark?: boolean }) {
  return (
    <span
      className={`font-heading text-2xl italic tracking-[-0.03em] ${
        dark ? "text-offwhite" : "text-[#302824]"
      }`}
    >
      Mama Nest
    </span>
  );
}
