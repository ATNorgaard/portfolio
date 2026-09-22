"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/access";
import { supabaseServer } from "@/lib/supabase/server";

export async function requestAccess(formData: FormData) {
  const slug = String(formData.get("slug") ?? "");
  const note = String(formData.get("note") ?? "");

  const user = await getUser();
  if (!user) redirect(`/log-ind?retur=${encodeURIComponent("/vaerktoejer")}`);

  const sb = await supabaseServer();
  const { error } = await sb.rpc("request_access", { p_app: slug, p_note: note || null });

  if (error) {
    console.error("request_access failed", error.message);
    redirect(`/vaerktoejer?fejl=${encodeURIComponent(slug)}`);
  }

  revalidatePath("/vaerktoejer");
  redirect(`/vaerktoejer?anmodet=${encodeURIComponent(slug)}`);
}
