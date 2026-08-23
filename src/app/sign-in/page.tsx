import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { SignInForm } from "@/components/auth/SignInForm";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 py-16">
      <div className="mb-8">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="w-full max-w-sm rounded-3xl border border-rose/10 bg-offwhite p-8 shadow-xl shadow-rose-deep/5">
        <h1 className="text-center font-heading text-2xl italic text-rose-deep">Welcome back, Mama.</h1>
        <div className="mt-6">
          <SignInForm />
        </div>
        <p className="mt-6 text-center text-sm text-ink/50">
          New here?{" "}
          <Link href="/start" className="font-semibold text-rose-deep hover:underline">
            Get started
          </Link>
        </p>
      </div>
    </div>
  );
}
