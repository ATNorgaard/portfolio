import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { DEFAULT_RETURN, safeReturnTo } from "@/lib/return-url";
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
  const target = safeReturnTo(store.get(RETUR_COOKIE)?.value ?? DEFAULT_RETURN);
  store.delete(RETUR_COOKIE);

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
