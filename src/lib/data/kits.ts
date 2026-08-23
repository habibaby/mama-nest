import type { SupabaseClient } from "@supabase/supabase-js";
import type { Kit } from "@/lib/types";

export async function getActiveKit(supabase: SupabaseClient): Promise<Kit | null> {
  const { data, error } = await supabase
    .from("kits")
    .select("*")
    .eq("active", true)
    .order("created_at", { ascending: true })
    .limit(1)
    .maybeSingle();

  if (error || !data) return null;

  return {
    id: data.id,
    slug: data.slug,
    name: data.name,
    tagline: data.tagline,
    description: data.description,
    pricePence: data.price_pence,
    careKitContents: data.care_kit_contents ?? [],
    testPanel: data.test_panel ?? [],
  };
}
