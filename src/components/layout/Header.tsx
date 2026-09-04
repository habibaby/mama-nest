import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-24 max-w-[1400px] items-center justify-between px-6 sm:px-10 lg:px-14">
        
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center"
          aria-label="Mama Nest home"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="/care"
            className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#302824]/70 transition-colors hover:text-[#302824]"
          >
            Postpartum Care
          </Link>

          <Link
            href="/how-it-works"
            className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#302824]/70 transition-colors hover:text-[#302824]"
          >
            The Test
          </Link>

          <Link
            href="/faq"
            className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#302824]/70 transition-colors hover:text-[#302824]"
          >
            FAQ
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-5">
          <Link
            href="/sign-in"
            className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-[#302824]/70 transition-colors hover:text-[#302824] sm:block"
          >
            Sign in
          </Link>

          <Link
            href="/booking"
            className="rounded-full bg-[#302824] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F8F5F0] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#463A34]"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}