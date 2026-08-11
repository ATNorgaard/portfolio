import type { ReactNode } from "react";
import { Page, SectionLabel } from "an-ui";

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
      <SectionLabel number="01" title="Om mig" />
    </Stage>
  );
}

export function OnInk() {
  return (
    <Stage ink>
      <SectionLabel number="02" title="Fokus" tone="on-ink" />
    </Stage>
  );
}

export function Sequence() {
  return (
    <Stage>
      <div style={{ display: "grid", gap: "1.5rem" }}>
        <SectionLabel number="01" title="Om mig" />
        <SectionLabel number="02" title="Fokus" />
        <SectionLabel number="03" title="Erfaring" />
        <SectionLabel number="04" title="Udvalgte projekter" />
      </div>
    </Stage>
  );
}
