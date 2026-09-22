/**
 * Hvor brugeren sendes hen efter login.
 *
 * Relative stier er altid i orden. Absolutte URL'er accepteres kun på anconsult.app og dets
 * underdomæner, så et værktøj kan sende brugeren til login og få dem tilbage samme sted — uden
 * at parameteren kan bruges til at sende folk videre til et fremmed domæne.
 */
const HOST = "anconsult.app";

export const DEFAULT_RETURN = "/vaerktoejer";

export function safeReturnTo(value: unknown): string {
  const raw = typeof value === "string" ? value.trim() : "";
  if (!raw) return DEFAULT_RETURN;

  // Relativ sti. "//" er en protokolrelativ URL til et andet domæne og afvises.
  if (raw.startsWith("/") && !raw.startsWith("//")) return raw;

  try {
    const url = new URL(raw);
    if (url.protocol !== "https:") return DEFAULT_RETURN;
    // Punktet er vigtigt: ".anconsult.app" matcher ikke "ondtanconsult.app".
    if (url.hostname === HOST || url.hostname.endsWith(`.${HOST}`)) return url.toString();
  } catch {
    // ikke en gyldig URL
  }

  return DEFAULT_RETURN;
}
