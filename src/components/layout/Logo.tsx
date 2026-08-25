import Link from "next/link";

export function Logo({ dark }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className={`font-heading text-2xl italic tracking-[-0.03em] ${
        dark ? "text-offwhite" : "text-[#302824]"
      }`}
    >
      Mama Nest
    </Link>
  );
}