import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

/**
 * Supabase sender brugeren hertil efter et klik på login-linket. Her byttes koden til en
 * session, og cookien sættes på .anconsult.app, så den gælder alle værktøjer.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const retur = url.searchParams.get("retur") ?? "/vaerktoejer";

  // Kun relative stier videre; ellers kan linket bruges til at sende folk til et fremmed domæne.
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
