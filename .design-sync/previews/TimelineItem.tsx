import type { ReactNode } from "react";
import { Page, Timeline, TimelineItem } from "an-ui";

function Stage({ ink, children }: { ink?: boolean; children: ReactNode }) {
  return (
    <Page>
      <div
        style={{
          background: ink ? "var(--an-ink-soft)" : "var(--an-paper)",
          color: ink ? "var(--an-on-ink)" : "var(--an-ink)",
          padding: "2rem",
        }}
      >
        {/* The item draws its own bottom rule; Timeline supplies the top one. */}
        <Timeline stagger={false} tone={ink ? "on-ink" : "on-paper"}>
          {children}
        </Timeline>
      </div>
    </Page>
  );
}

export function CurrentRole() {
  return (
    <Stage>
      <TimelineItem period="2025 — nu" title="Combine A/S" role="AI-Lead">
        Retning og levering på tværs af AI, data, arkitektur og forretningsudvikling — fra de
        første ledelsesdialoger til løsninger i drift.
      </TimelineItem>
    </Stage>
  );
}

export function WithoutRole() {
  return (
    <Stage>
      <TimelineItem period="2016 — 2021" title="Aalborg Universitet">
        MSc i Biomedical Engineering & Informatics, med speciale i signalbehandling og maskinlæring.
      </TimelineItem>
    </Stage>
  );
}

export function OnInk() {
  return (
    <Stage ink>
      <TimelineItem period="2014 — 2016" title="Forsvaret" role="Sanitetssoldat">
        Ansvar, ro og handlekraft i situationer, hvor samarbejde og gode beslutninger er afgørende.
      </TimelineItem>
    </Stage>
  );
}
