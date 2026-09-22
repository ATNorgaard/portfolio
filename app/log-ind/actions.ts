"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { safeReturnTo } from "@/lib/return-url";
import { supabaseServer } from "@/lib/supabase/server";

/**
 * Hvor brugeren skal hen efter login. Den ligger i en cookie og ikke i selve redirect-URL'en:
 * Supabase sammenligner redirect_to med allowlisten tegn for tegn, og en query-streng gør, at
 * den ikke matcher. Så falder den tilbage til projektets Site URL — et andet sted helt.
 */
const RETUR_COOKIE = "an_retur";

/** Absolut oprindelse for det domæne, kaldet kom fra, så staging og produktion hver rammer sig selv. */
async function origin(): Promise<string> {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "anconsult.app";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

export async function sendMagicLink(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const retur = safeReturnTo(formData.get("retur"));

  if (!email || !email.includes("@")) {
    redirect(`/log-ind?fejl=email&retur=${encodeURIComponent(retur)}`);
  }

  const store = await cookies();
  store.set(RETUR_COOKIE, retur, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60, // samme levetid som linket
  });

  const sb = await supabaseServer();
  const { error } = await sb.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: `${await origin()}/auth/callback`,
    },
  });

  if (error) {
    console.error("magic link failed", error.message);
    redirect(`/log-ind?fejl=send&retur=${encodeURIComponent(retur)}`);
  }

  redirect(`/log-ind?sendt=1&retur=${encodeURIComponent(retur)}`);
}
