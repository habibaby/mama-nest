import { Flower2 } from "lucide-react";

export function Logo({ dark }: { dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-heading text-xl italic ${
        dark ? "text-offwhite" : "text-rose-deep"
      }`}
    >
      <Flower2 size={20} className="text-gold" />
      Mama Nest
    </span>
  );
}
