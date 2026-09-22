import type { Metadata } from "next";
import Link from "next/link";
import { isAdmin, loadToolbox, requireUser } from "@/lib/access";
import { supabaseServer } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Min konto | Andreas Nørgaard",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const TIER: Record<string, string> = {
  trial: "Prøve",
  standard: "Standard",
  client: "Kunde",
};

export default async function Konto() {
  await requireUser("/konto");

  const [{ user, apps, grants, budgets }, admin] = await Promise.all([loadToolbox(), isAdmin()]);
  const sb = await supabaseServer();
  const { data: events } = await sb
    .from("usage_events")
    .select("at, app_slug, model, input_tokens, output_tokens")
    .order("at", { ascending: false })
    .limit(10);

  const byName = new Map(apps.map((a) => [a.slug, a.name]));
  const fmt = new Intl.DateTimeFormat("da-DK", { dateStyle: "short", timeStyle: "short" });

  return (
    <main className="tb-page">
      <div className="tb-wide">
        <header className="tb-head">
          <Link className="tb-back" href="/vaerktoejer">
            <span aria-hidden="true">←</span> Værktøjer
          </Link>
          <form action="/auth/log-ud" method="post">
            <button className="tb-link-button" type="submit">
              Log ud
            </button>
          </form>
        </header>

        <h1 className="tb-title">Min konto</h1>
        <p className="tb-lede">{user?.email}</p>

        {admin && (
          <p className="tb-note">
            Du er administrator. <Link href="/admin">Åbn administration →</Link>
          </p>
        )}

        <h2 className="tb-h2">Adgange</h2>
        {grants.size === 0 ? (
          <p className="tb-fine">
            Du har ingen adgange endnu. <Link href="/vaerktoejer">Se værktøjerne</Link>.
          </p>
        ) : (
          <table className="tb-table">
            <thead>
              <tr>
                <th>Værktøj</th>
                <th>Type</th>
                <th>Status</th>
                <th>Forbrug denne måned</th>
              </tr>
            </thead>
            <tbody>
              {[...grants.values()].map((g) => {
                const b = budgets.get(g.app_slug);
                return (
                  <tr key={g.app_slug}>
                    <td>{byName.get(g.app_slug) ?? g.app_slug}</td>
                    <td>{TIER[g.tier] ?? g.tier}</td>
                    <td>
                      {g.status === "active"
                        ? "Aktiv"
                        : g.status === "requested"
                          ? "Afventer"
                          : "Lukket"}
                    </td>
                    <td>
                      {b ? `${b.used} af ${b.granted}` : `0 af ${g.monthly_credits}`} kald
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        <h2 className="tb-h2">Seneste AI-kald</h2>
        {!events || events.length === 0 ? (
          <p className="tb-fine">Ingen registrerede kald endnu.</p>
        ) : (
          <table className="tb-table">
            <thead>
              <tr>
                <th>Tidspunkt</th>
                <th>Værktøj</th>
                <th>Model</th>
                <th>Tokens</th>
              </tr>
            </thead>
            <tbody>
              {events.map((e, i) => (
                <tr key={i}>
                  <td>{fmt.format(new Date(e.at as string))}</td>
                  <td>{byName.get(e.app_slug as string) ?? e.app_slug}</td>
                  <td>{(e.model as string) ?? "—"}</td>
                  <td>
                    {(e.input_tokens ?? 0) as number} ind / {(e.output_tokens ?? 0) as number} ud
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}
