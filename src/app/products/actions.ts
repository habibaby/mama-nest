"use server";

import { createClient } from "@/lib/supabase/server";
import type { CatalogSubmitPayload } from "@/components/catalog/CatalogClient";

export async function requestProducts(payload: CatalogSubmitPayload): Promise<{ error?: string }> {
  const supabase = await createClient();
  const { error } = await supabase.from("product_orders").insert({
    name: payload.name,
    email: payload.email,
    items: payload.items,
    notes: payload.notes || null,
  });
  if (error) return { error: error.message };
  return {};
}
