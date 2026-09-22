"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabase/server";

/** Absolut oprindelse for det domæne, kaldet kom fra, så staging og produktion hver rammer sig selv. */
async function origin(): Promise<string> {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "anconsult.app";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

function safeReturnTo(value: FormDataEntryValue | null): string {
  const raw = typeof value === "string" ? value : "/vaerktoejer";
  // Kun relative stier. Ellers kan et login-link sende brugeren videre til et fremmed domæne.
  if (!raw.startsWith("/") || raw.startsWith("//")) return "/vaerktoejer";
  return raw;
}

export async function sendMagicLink(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const retur = safeReturnTo(formData.get("retur"));

  if (!email || !email.includes("@")) {
    redirect(`/log-ind?fejl=email&retur=${encodeURIComponent(retur)}`);
  }

  const sb = await supabaseServer();
  const { error } = await sb.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: `${await origin()}/auth/callback?retur=${encodeURIComponent(retur)}`,
    },
  });

  if (error) {
    console.error("magic link failed", error.message);
    redirect(`/log-ind?fejl=send&retur=${encodeURIComponent(retur)}`);
  }

  redirect(`/log-ind?sendt=1&retur=${encodeURIComponent(retur)}`);
}
