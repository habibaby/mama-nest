import { createClient } from "@/lib/supabase/server";
import { getActiveKit } from "@/lib/data/kits";
import { StartWizard } from "@/components/start/StartWizard";
import { Logo } from "@/components/layout/Logo";
import Link from "next/link";

export default async function StartPage() {
  const supabase = await createClient();
  const kit = await getActiveKit(supabase);

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#302824]">

      {/* HEADER */}

      <header className="border-b border-[#DED6D0]/70 bg-[#F8F5F0]/95 px-6 py-5 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between">

          <Link
            href="/"
            aria-label="Mama Nest home"
            className="transition-opacity hover:opacity-75"
          >
            <Logo />
          </Link>

          <Link
            href="/"
            className="text-xs font-medium tracking-wide text-[#756B65] transition-colors hover:text-[#302824]"
          >
            Back to home
          </Link>

        </div>
      </header>

      {/* MAIN */}

      <section className="relative overflow-hidden">

        {/* Soft background shapes */}

        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#D9B8A5]/15 blur-[120px]"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#B97978]/10 blur-[130px]"
        />

        <div className="relative mx-auto flex min-h-[calc(100vh-81px)] max-w-6xl flex-col items-center px-6 py-12 sm:py-16 lg:py-20">

          {/* INTRO */}

          <div className="mb-10 max-w-xl text-center">

            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#9B6664]">
              Mama Nest
            </p>

            <h1 className="mt-4 font-heading text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">
              Your health check,
              <br />
              <span className="italic text-[#9B6664]">
                starts here.
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#716660]">
              A simple at-home check of iron, thyroid and vitamin D.
            </p>

          </div>

          {/* WIZARD */}

          <div className="w-full max-w-2xl">

            <StartWizard kit={kit} />

          </div>

        </div>

      </section>

    </main>
  );
}