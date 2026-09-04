import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  return (
    <footer className="border-t border-rose-deep/10 bg-cream py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 text-center">
        <Link href="/" aria-label="Mama Nest home">
          <Logo />
        </Link>
        <p className="text-xs text-ink/50">
          © {new Date().getFullYear()} Mama Nest. Made for mothers, by a mother.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-ink/50">
          <Link href="/care" className="hover:text-rose-deep">Postpartum Care</Link>
          <Link href="/meals" className="hover:text-rose-deep">Meals</Link>
          <Link href="/ingredients" className="hover:text-rose-deep">Ingredients</Link>
          <Link href="/products" className="hover:text-rose-deep">Products</Link>
          <Link href="/start" className="hover:text-rose-deep">Postpartum Test</Link>
          <Link href="/faq" className="hover:text-rose-deep">FAQ</Link>
          <Link href="/privacy" className="hover:text-rose-deep">Privacy</Link>
          <Link href="/terms" className="hover:text-rose-deep">Terms</Link>
        </div>
        <p className="max-w-md text-[11px] leading-5 text-ink/40">
          Mama Nest provides non-clinical postpartum support and does not replace NHS or other professional medical care.
          In an emergency, or if someone is in immediate danger, call 999 or 112.
        </p>
      </div>
    </footer>
  );
}
