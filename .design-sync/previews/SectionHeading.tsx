import type { ReactNode } from "react";
import { Page, SectionHeading } from "an-ui";

function Stage({ ink = true, children }: { ink?: boolean; children: ReactNode }) {
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

export function OnInk() {
  return (
    <Stage>
      <SectionHeading
        title="Fra ambition til drift."
        intro="Jeg bevæger mig mellem ledelsesrummet og det tekniske maskinrum — med blik for både retning, realisme og eksekvering."
      />
    </Stage>
  );
}

export function OnPaper() {
  return (
    <Stage ink={false}>
      <SectionHeading
        tone="on-paper"
        title="Teknisk dybde. Forretningsmæssigt udsyn."
        intro="En baggrund fra rådgivning, softwareudvikling og Forsvaret har lært mig at gøre komplekse situationer håndterbare."
      />
    </Stage>
  );
}

export function WithEmphasis() {
  return (
    <Stage>
      <SectionHeading
        size="md"
        title={
          <>
            Komplekse problemer.
            <br />
            Klare <em>bevægelser</em>.
          </>
        }
        intro="Et udvalg af anonymiserede opgaver. Mønstret er det samme: forstå problemet, skab retning."
      />
    </Stage>
  );
}

export function HeadlineOnly() {
  return (
    <Stage>
      <SectionHeading title="Fra ambition til drift." />
    </Stage>
  );
}
