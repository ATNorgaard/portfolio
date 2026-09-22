import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isAdmin, requireUser } from "@/lib/access";
import { supabaseServer } from "@/lib/supabase/server";
import { approve, revoke } from "./actions";

export const metadata: Metadata = {
  title: "Administration | Andreas Nørgaard",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type GrantRow = {
  user_id: string;
  email: string;
  app_slug: string;
  tier: string;
  status: string;
  monthly_credits: number;
  used: number;
  requested_at: string;
  note: string | null;
};

type SpendRow = {
  app_slug: string;
  calls: number;
  cost_micros: number;
  cap_micros: number | null;
};

const usd = (micros: number) => `$${(micros / 1_000_000).toFixed(2)}`;

export default async function Admin() {
  await requireUser("/admin");
  // Ikke-administratorer skal ikke kunne se, at siden findes.
  if (!(await isAdmin())) notFound();

  const sb = await supabaseServer();
  const [{ data: grants }, { data: spend }] = await Promise.all([
    sb.rpc("admin_grants"),
    sb.rpc("admin_spend"),
  ]);

  const rows = (grants ?? []) as GrantRow[];
  const spendRows = (spend ?? []) as SpendRow[];
  const pending = rows.filter((r) => r.status === "requested");
  const decided = rows.filter((r) => r.status !== "requested");
  const fmt = new Intl.DateTimeFormat("da-DK", { dateStyle: "short", timeStyle: "short" });

  return (
    <main className="tb-page">
      <div className="tb-wide">
        <header className="tb-head">
          <Link className="tb-back" href="/konto">
            <span aria-hidden="true">←</span> Min konto
          </Link>
        </header>

        <h1 className="tb-title">Administration</h1>

        <h2 className="tb-h2">Forbrug denne måned</h2>
        <table className="tb-table">
          <thead>
            <tr>
              <th>Værktøj</th>
              <th>Kald</th>
              <th>Omkostning</th>
              <th>Loft</th>
            </tr>
          </thead>
          <tbody>
            {spendRows.map((s) => (
              <tr key={s.app_slug}>
                <td>{s.app_slug}</td>
                <td>{s.calls}</td>
                <td>{usd(s.cost_micros)}</td>
                <td>{s.cap_micros === null ? "intet loft" : usd(s.cap_micros)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="tb-h2">Venter på godkendelse ({pending.length})</h2>
        {pending.length === 0 ? (
          <p className="tb-fine">Ingen anmodninger lige nu.</p>
        ) : (
          <ul className="tb-list">
            {pending.map((r) => (
              <li className="tb-row" key={`${r.user_id}-${r.app_slug}`}>
                <div>
                  <strong>{r.email}</strong> → {r.app_slug}
                  <div className="tb-fine">
                    {fmt.format(new Date(r.requested_at))}
                    {r.note ? ` · „${r.note}”` : ""}
                  </div>
                </div>
                <form action={approve} className="tb-inline-form">
                  <input type="hidden" name="user_id" value={r.user_id} />
                  <input type="hidden" name="slug" value={r.app_slug} />
                  <select className="tb-input tb-input-sm" name="tier" defaultValue="standard">
                    <option value="trial">Prøve</option>
                    <option value="standard">Standard</option>
                    <option value="client">Kunde</option>
                  </select>
                  <input
                    className="tb-input tb-input-sm"
                    name="credits"
                    type="number"
                    min={0}
                    defaultValue={50}
                    aria-label="Kald pr. måned"
                  />
                  <button className="tb-button" type="submit">
                    Godkend
                  </button>
                </form>
              </li>
            ))}
          </ul>
        )}

        <h2 className="tb-h2">Adgange</h2>
        {decided.length === 0 ? (
          <p className="tb-fine">Ingen adgange endnu.</p>
        ) : (
          <table className="tb-table">
            <thead>
              <tr>
                <th>Bruger</th>
                <th>Værktøj</th>
                <th>Type</th>
                <th>Status</th>
                <th>Forbrug</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {decided.map((r) => (
                <tr key={`${r.user_id}-${r.app_slug}`}>
                  <td>{r.email}</td>
                  <td>{r.app_slug}</td>
                  <td>{r.tier}</td>
                  <td>{r.status === "active" ? "Aktiv" : "Lukket"}</td>
                  <td>
                    {r.used} af {r.monthly_credits}
                  </td>
                  <td>
                    {r.status === "active" && (
                      <form action={revoke}>
                        <input type="hidden" name="user_id" value={r.user_id} />
                        <input type="hidden" name="slug" value={r.app_slug} />
                        <button className="tb-link-button" type="submit">
                          Tilbagekald
                        </button>
                      </form>
                    )}
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
