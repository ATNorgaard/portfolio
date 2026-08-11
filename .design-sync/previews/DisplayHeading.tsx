import type { ReactNode } from "react";
import { Page, DisplayHeading } from "an-ui";

function Stage({ bg, fg, children }: { bg: string; fg: string; children: ReactNode }) {
  return (
    <Page>
      <div style={{ background: bg, color: fg, padding: "2.5rem 2rem" }}>{children}</div>
    </Page>
  );
}

export function WithSerifEmphasis() {
  return (
    <Stage bg="var(--an-ink)" fg="var(--an-on-ink)">
      <DisplayHeading as="h1">
        Jeg gør AI <em>anvendelig</em> i virkeligheden.
      </DisplayHeading>
    </Stage>
  );
}

export function OnPaper() {
  return (
    <Stage bg="var(--an-paper)" fg="var(--an-ink)">
      <DisplayHeading size="md" tone="on-paper">
        Teknologi skal kunne
        <br />
        <em>forklares</em>, før den kan skaleres.
      </DisplayHeading>
    </Stage>
  );
}

export function OnAccent() {
  return (
    <Stage bg="var(--an-accent-bright)" fg="var(--an-ink)">
      <DisplayHeading size="lg" tone="on-accent">
        Skal vi gøre det komplekse <em>klart?</em>
      </DisplayHeading>
    </Stage>
  );
}

export function Sizes() {
  return (
    <Stage bg="var(--an-ink)" fg="var(--an-on-ink)">
      <DisplayHeading size="sm">Fra ambition til drift.</DisplayHeading>
      <div style={{ height: "1.5rem" }} />
      <DisplayHeading size="lg">Komplekse problemer.</DisplayHeading>
    </Stage>
  );
}
