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
        <div className="flex gap-4 text-xs text-ink/50">
          <Link href="/how-it-works" className="hover:text-rose-deep">
            How it works
          </Link>
          <Link href="/privacy" className="hover:text-rose-deep">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-rose-deep">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
