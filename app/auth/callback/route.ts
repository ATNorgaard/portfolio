import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

const RETUR_COOKIE = "an_retur";

/**
 * Supabase sender brugeren hertil efter et klik på login-linket. Her byttes koden til en
 * session, og cookien sættes på .anconsult.app, så den gælder alle værktøjer.
 *
 * URL'en holdes fri for query-parametre: Supabase matcher redirect_to mod allowlisten tegn for
 * tegn, og et match, der fejler, sender brugeren til projektets Site URL i stedet. Målet læses
 * derfor fra en cookie sat, da linket blev bestilt.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  const store = await cookies();
  const retur = store.get(RETUR_COOKIE)?.value ?? "/vaerktoejer";
  store.delete(RETUR_COOKIE);

  // Kun relative stier videre; ellers kan cookien bruges til at sende folk til et fremmed domæne.
  const target = retur.startsWith("/") && !retur.startsWith("//") ? retur : "/vaerktoejer";

  if (!code) {
    return NextResponse.redirect(new URL("/log-ind?fejl=link", url.origin));
  }

  const sb = await supabaseServer();
  const { error } = await sb.auth.exchangeCodeForSession(code);

  if (error) {
    console.error("code exchange failed", error.message);
    return NextResponse.redirect(new URL("/log-ind?fejl=link", url.origin));
  }

  return NextResponse.redirect(new URL(target, url.origin));
}
