import type { ReactNode } from "react";
import { Page, Eyebrow, DisplayHeading } from "an-ui";

function Stage({ bg, fg, children }: { bg: string; fg: string; children: ReactNode }) {
  return (
    <Page>
      <div style={{ background: bg, color: fg, padding: "2.5rem 2rem" }}>{children}</div>
    </Page>
  );
}

export function OnInk() {
  return (
    <Stage bg="var(--an-ink)" fg="var(--an-on-ink)">
      <Eyebrow>AI · DATA · ARKITEKTUR</Eyebrow>
    </Stage>
  );
}

export function OnPaper() {
  return (
    <Stage bg="var(--an-paper)" fg="var(--an-ink)">
      <Eyebrow tone="on-paper">UDVALGTE PROJEKTER</Eyebrow>
    </Stage>
  );
}

export function OnAccent() {
  return (
    <Stage bg="var(--an-accent-bright)" fg="var(--an-ink)">
      <Eyebrow tone="on-accent">EN GOD SAMTALE ER ET GODT STED AT STARTE</Eyebrow>
    </Stage>
  );
}

export function AboveAHeadline() {
  return (
    <Stage bg="var(--an-ink)" fg="var(--an-on-ink)">
      <Eyebrow>AI · DATA · ARKITEKTUR</Eyebrow>
      <DisplayHeading size="sm">
        Fra ambition til <em>drift</em>.
      </DisplayHeading>
    </Stage>
  );
}
