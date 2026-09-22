import { redirect } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { supabaseServer } from "./supabase/server";

export type App = {
  slug: string;
  name: string;
  tagline: string | null;
  url: string | null;
  visibility: "public" | "gated";
  auto_approve: boolean;
  trial_credits: number;
  sort_order: number;
};

export type Grant = {
  app_slug: string;
  tier: "trial" | "standard" | "client";
  status: "requested" | "active" | "revoked";
  monthly_credits: number;
  expires_at: string | null;
};

export type Budget = {
  app_slug: string;
  granted: number;
  used: number;
};

export function periodStart(): string {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)).toISOString().slice(0, 10);
}

export async function getUser(): Promise<User | null> {
  const sb = await supabaseServer();
  const { data } = await sb.auth.getUser();
  return data.user ?? null;
}

export async function requireUser(returnTo: string): Promise<User> {
  const user = await getUser();
  if (!user) redirect(`/log-ind?retur=${encodeURIComponent(returnTo)}`);
  return user;
}

/**
 * Serverside-porten foran et værktøj. Bemærk at den er en omdirigering, ikke en sikkerhedsgrænse:
 * den rigtige grænse er RLS og has_access() i databasen, så et glemt kald her ikke lækker data.
 */
export async function requireAccess(slug: string, returnTo: string): Promise<User> {
  const user = await requireUser(returnTo);
  const sb = await supabaseServer();
  const { data, error } = await sb.rpc("has_access", { p_app: slug });
  if (error || data !== true) redirect(`/vaerktoejer?adgang=${encodeURIComponent(slug)}`);
  return user;
}

export async function isAdmin(): Promise<boolean> {
  const sb = await supabaseServer();
  const { data } = await sb.rpc("is_admin");
  return data === true;
}

/** Kataloget plus brugerens egen tilstand. Uden login returneres kun kataloget. */
export async function loadToolbox(): Promise<{
  user: User | null;
  apps: App[];
  grants: Map<string, Grant>;
  budgets: Map<string, Budget>;
}> {
  const sb = await supabaseServer();

  const [{ data: apps }, { data: userData }] = await Promise.all([
    sb.from("apps").select("*").order("sort_order"),
    sb.auth.getUser(),
  ]);

  const user = userData.user ?? null;
  const grants = new Map<string, Grant>();
  const budgets = new Map<string, Budget>();

  if (user) {
    const [{ data: g }, { data: b }] = await Promise.all([
      sb.from("access_grants").select("app_slug, tier, status, monthly_credits, expires_at"),
      sb.from("usage_budgets").select("app_slug, granted, used").eq("period_start", periodStart()),
    ]);
    for (const row of (g ?? []) as Grant[]) grants.set(row.app_slug, row);
    for (const row of (b ?? []) as Budget[]) budgets.set(row.app_slug, row);
  }

  return { user, apps: (apps ?? []) as App[], grants, budgets };
}
