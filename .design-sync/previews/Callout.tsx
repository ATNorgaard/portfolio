import type { ReactNode } from "react";
import { Page, Callout } from "an-ui";

function Stage({ ink, children }: { ink?: boolean; children: ReactNode }) {
  return (
    <Page>
      <div
        style={{
          background: ink ? "var(--an-ink-soft)" : "var(--an-paper)",
          color: ink ? "var(--an-on-ink)" : "var(--an-ink)",
          padding: "2.5rem 2rem",
        }}
      >
        {children}
      </div>
    </Page>
  );
}

export function OnPaper() {
  return (
    <Stage>
      <Callout label="Mit arbejdsprincip">
        Forretningen først. Teknologien med. Ingen hype.
      </Callout>
    </Stage>
  );
}

export function OnInk() {
  return (
    <Stage ink>
      <Callout tone="on-ink" label="Udgangspunkt">
        Det, der ikke kan forklares, kan ikke skaleres.
      </Callout>
    </Stage>
  );
}
