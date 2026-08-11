import type { ReactNode } from "react";
import { Page, Timeline, TimelineItem } from "an-ui";

const items = [
  {
    period: "2025 — nu",
    title: "Combine A/S",
    role: "AI-Lead",
    text: "Retning og levering på tværs af AI, data, arkitektur og forretningsudvikling — fra de første ledelsesdialoger til løsninger i drift.",
  },
  {
    period: "2021 — 2025",
    title: "DIS / CREADIS",
    role: "Consulting Software Engineer",
    text: "Rådgivning og udvikling af digitale løsninger inden for AI, software, cloud, IoT og automation.",
  },
  {
    period: "2018 — 2019",
    title: "Elgiganten",
    role: "Sælger, AV & IT",
    text: "Teknisk rådgivning og salg med fokus på at oversætte behov til konkrete valg for kunden.",
  },
  {
    period: "2014 — 2016",
    title: "Forsvaret",
    role: "Sanitetssoldat",
    text: "Ansvar, ro og handlekraft i situationer, hvor samarbejde og gode beslutninger er afgørende.",
  },
];

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
        {children}
      </div>
    </Page>
  );
}

export function OnPaper() {
  return (
    <Stage>
      <Timeline items={items} />
    </Stage>
  );
}

export function OnInk() {
  return (
    <Stage ink>
      <Timeline tone="on-ink" items={items.slice(0, 3)} />
    </Stage>
  );
}

export function Composed() {
  return (
    <Stage>
      <Timeline>
        <TimelineItem period="2025 — nu" title="Combine A/S" role="AI-Lead">
          Retning og levering på tværs af AI, data, arkitektur og forretningsudvikling.
        </TimelineItem>
        <TimelineItem period="2021 — 2025" title="DIS / CREADIS" role="Consulting Software Engineer">
          Rådgivning og udvikling af digitale løsninger inden for AI, cloud og automation.
        </TimelineItem>
      </Timeline>
    </Stage>
  );
}
