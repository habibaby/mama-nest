import { createClient } from "@/lib/supabase/server";
import { getActiveKit } from "@/lib/data/kits";
import { StartWizard } from "@/components/start/StartWizard";
import { Logo } from "@/components/layout/Logo";
import Link from "next/link";

export default async function StartPage() {
  const supabase = await createClient();
  const kit = await getActiveKit(supabase);

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <header className="px-6 py-6">
        <Link href="/">
          <Logo />
        </Link>
      </header>
      <main className="flex flex-1 items-center justify-center px-6 pb-16">
        <StartWizard kit={kit} />
      </main>
    </div>
  );
}
