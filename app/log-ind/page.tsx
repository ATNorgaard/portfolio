import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/access";
import { DEFAULT_RETURN, safeReturnTo } from "@/lib/return-url";
import { sendMagicLink } from "./actions";

export const metadata: Metadata = {
  title: "Log ind | Andreas Nørgaard",
  robots: { index: false, follow: false },
};

type Search = { retur?: string; sendt?: string; fejl?: string };

export default async function LogInd({ searchParams }: { searchParams: Promise<Search> }) {
  const { retur: returRaw, sendt, fejl } = await searchParams;
  const retur = safeReturnTo(returRaw ?? DEFAULT_RETURN);

  const user = await getUser();
  if (user) redirect(retur);

  return (
    <main className="tb-page">
      <div className="tb-narrow">
        <Link className="tb-back" href="/">
          <span aria-hidden="true">←</span> Forsiden
        </Link>

        <h1 className="tb-title">Log ind</h1>
        <p className="tb-lede">
          Du får et link på mail. Ingen adgangskode — og har du ikke en konto i forvejen,
          bliver den oprettet, når du klikker på linket.
        </p>

        {sendt ? (
          <div className="tb-note tb-note-ok" role="status">
            <strong>Tjek din mail.</strong> Vi har sendt et login-link. Det virker i én time og
            kan kun bruges én gang.
          </div>
        ) : (
          <form className="tb-form" action={sendMagicLink}>
            <input type="hidden" name="retur" value={retur} />
            <label className="tb-label" htmlFor="email">
              Mailadresse
            </label>
            <input
              className="tb-input"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="dig@firma.dk"
            />
            {fejl === "email" && (
              <p className="tb-error">Indtast en gyldig mailadresse.</p>
            )}
            {fejl === "send" && (
              <p className="tb-error">
                Linket kunne ikke sendes lige nu. Prøv igen om et øjeblik.
              </p>
            )}
            <button className="tb-button" type="submit">
              Send login-link
            </button>
          </form>
        )}

        <p className="tb-fine">
          Vi gemmer kun din mailadresse og hvilke værktøjer du har adgang til. Skriv til{" "}
          <a href="mailto:atnoergaard@gmail.com">atnoergaard@gmail.com</a>, hvis du vil have
          din konto slettet.
        </p>
      </div>
    </main>
  );
}
