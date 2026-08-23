import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <Link href="/">
          <Logo />
        </Link>
        <Link
          href="/sign-in"
          className="text-sm font-semibold text-rose-deep/80 hover:text-rose-deep"
        >
          Sign in
        </Link>
      </div>
    </header>
  );
}
