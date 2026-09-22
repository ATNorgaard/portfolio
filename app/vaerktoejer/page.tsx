import type { Metadata } from "next";
import Link from "next/link";
import { loadToolbox, type App, type Budget, type Grant } from "@/lib/access";
import { requestAccess } from "./actions";

export const metadata: Metadata = {
  title: "Værktøjer | Andreas Nørgaard",
  description: "Små, brugbare værktøjer til arbejdet med AI, data og arkitektur.",
};

// Adgang og kvote er personlige, så siden må aldrig caches på tværs af brugere.
export const dynamic = "force-dynamic";

type Search = { anmodet?: string; adgang?: string; fejl?: string };

function quota(app: App, grant: Grant | undefined, budget: Budget | undefined) {
  const granted = budget?.granted ?? grant?.monthly_credits ?? app.trial_credits;
  const used = budget?.used ?? 0;
  return { granted, used, left: Math.max(0, granted - used) };
}

export default async function Vaerktoejer({ searchParams }: { searchParams: Promise<Search> }) {
  const { anmodet, adgang, fejl } = await searchParams;
  const { user, apps, grants, budgets } = await loadToolbox();

  return (
    <main className="tb-page">
      <div className="tb-wide">
        <header className="tb-head">
          <Link className="tb-back" href="/">
            <span aria-hidden="true">←</span> Forsiden
          </Link>
          {user ? (
            <Link className="tb-back" href="/konto">
              {user.email} <span aria-hidden="true">→</span>
            </Link>
          ) : (
            <Link className="tb-back" href="/log-ind">
              Log ind <span aria-hidden="true">→</span>
            </Link>
          )}
        </header>

        <h1 className="tb-title">Værktøjer</h1>
        <p className="tb-lede">
          Små værktøjer, der er blevet til undervejs i arbejdet med AI, data og arkitektur.
          Nogle er frit tilgængelige. Andre koster noget at køre, og dem skal du have adgang til.
        </p>

        {adgang && (
          <div className="tb-note" role="status">
            Du har ikke adgang til <strong>{adgang}</strong> endnu. Anmod nedenfor, så kigger jeg på det.
          </div>
        )}
        {anmodet && (
          <div className="tb-note tb-note-ok" role="status">
            Tak — din anmodning om <strong>{anmodet}</strong> er registreret. Du får besked, når
            den er behandlet.
          </div>
        )}
        {fejl && (
          <div className="tb-note tb-note-err" role="alert">
            Noget gik galt med anmodningen. Prøv igen om lidt.
          </div>
        )}

        <ul className="tb-grid">
          {apps.map((app) => {
            const grant = grants.get(app.slug);
            const budget = budgets.get(app.slug);
            const q = quota(app, grant, budget);

            const isPublic = app.visibility === "public";
            const active = grant?.status === "active";
            const open = isPublic || active;

            return (
              <li className="tb-card" key={app.slug}>
                <div className="tb-card-top">
                  <span className={`tb-badge ${open ? "tb-badge-open" : ""}`}>
                    {isPublic
                      ? "Frit tilgængeligt"
                      : active
                        ? "Adgang aktiv"
                        : grant?.status === "requested"
                          ? "Afventer godkendelse"
                          : grant?.status === "revoked"
                            ? "Adgang lukket"
                            : "Kræver adgang"}
                  </span>
                  {user && open && (
                    <span className="tb-quota" title="AI-kald tilbage denne måned">
                      {q.left} af {q.granted} AI-kald tilbage
                    </span>
                  )}
                </div>

                <h2 className="tb-card-title">{app.name}</h2>
                {app.tagline && <p className="tb-card-text">{app.tagline}</p>}

                <div className="tb-card-actions">
                  {open && app.url ? (
                    <a
                      className="tb-button"
                      href={app.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Åbn {app.name} <span aria-hidden="true">↗</span>
                    </a>
                  ) : !user ? (
                    <Link
                      className="tb-button"
                      href={`/log-ind?retur=${encodeURIComponent("/vaerktoejer")}`}
                    >
                      Log ind for at anmode
                    </Link>
                  ) : grant?.status === "requested" ? (
                    <p className="tb-fine">
                      Anmodningen ligger til godkendelse. Du hører fra mig.
                    </p>
                  ) : grant?.status === "revoked" ? (
                    <p className="tb-fine">
                      Adgangen er lukket. Skriv, hvis det er en fejl.
                    </p>
                  ) : (
                    <form action={requestAccess} className="tb-inline-form">
                      <input type="hidden" name="slug" value={app.slug} />
                      <input
                        className="tb-input tb-input-sm"
                        name="note"
                        maxLength={200}
                        placeholder="Kort om hvad du vil bruge det til (valgfrit)"
                      />
                      <button className="tb-button" type="submit">
                        {app.auto_approve ? "Få adgang" : "Anmod om adgang"}
                      </button>
                    </form>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        {apps.length === 0 && (
          <p className="tb-lede">Der er ingen værktøjer offentliggjort lige nu.</p>
        )}
      </div>
    </main>
  );
}
