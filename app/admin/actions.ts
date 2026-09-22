"use server";

import { revalidatePath } from "next/cache";
import { supabaseServer } from "@/lib/supabase/server";

// Begge kald går til funktioner, der selv kontrollerer is_admin() i databasen.
// Kontrollen her er kun for brugerfladen — grænsen ligger i Postgres.

export async function approve(formData: FormData) {
  const sb = await supabaseServer();
  const { error } = await sb.rpc("approve_access", {
    p_user: String(formData.get("user_id")),
    p_app: String(formData.get("slug")),
    p_tier: String(formData.get("tier") || "standard"),
    p_credits: Number(formData.get("credits") || 50),
  });
  if (error) console.error("approve_access failed", error.message);
  revalidatePath("/admin");
}

export async function revoke(formData: FormData) {
  const sb = await supabaseServer();
  const { error } = await sb.rpc("revoke_access", {
    p_user: String(formData.get("user_id")),
    p_app: String(formData.get("slug")),
    p_reason: String(formData.get("reason") || ""),
  });
  if (error) console.error("revoke_access failed", error.message);
  revalidatePath("/admin");
}
