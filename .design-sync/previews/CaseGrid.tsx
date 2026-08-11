import type { ReactNode } from "react";
import { Page, CaseGrid, CaseCard } from "an-ui";

const cases = [
  {
    tag: "Arkitektur",
    title: "En fælles integrationsrygrad",
    text: "Et fragmenteret systemlandskab blev samlet omkring fælles datamodeller, tydelige kontrakter og genbrugelige integrationsmønstre.",
  },
  {
    tag: "Adoption",
    title: "AI fra eksperiment til praksis",
    text: "En organisation blev hjulpet fra spredte enkeltforsøg til en fælles, ansvarlig AI-praksis med guardrails og løbende fokus på effekt.",
  },
  {
    tag: "Computer vision",
    title: "Maskinsyn i bevægelse",
    text: "Computer vision og robotstyring blev kombineret, så varierende objekter kunne identificeres og håndteres adaptivt.",
  },
  {
    tag: "Modernisering",
    title: "Nyt liv til kritiske systemer",
    text: "Ældre forretningskritiske løsninger blev moderniseret med en klarere arkitektur og bedre brugeroplevelse.",
  },
];

function Stage({ children }: { children: ReactNode }) {
  return (
    <Page>
      <div style={{ background: "var(--an-ink-panel)", color: "var(--an-on-ink)", padding: "2rem" }}>
        {children}
      </div>
    </Page>
  );
}

// Four entries fill the responsive grid without ending on an orphan card at
// either of the breakpoints the default steps through.
export function Grid() {
  return (
    <Stage>
      <CaseGrid items={cases} />
    </Stage>
  );
}

export function TwoUp() {
  return (
    <Stage>
      <CaseGrid items={cases.slice(0, 2)} columns={2} />
    </Stage>
  );
}

export function HoverState() {
  return (
    <Stage>
      <CaseGrid columns={2}>
        <CaseCard number="01" tag="Arkitektur" title="En fælles integrationsrygrad">
          Et fragmenteret systemlandskab blev samlet omkring fælles datamodeller og tydelige
          kontrakter.
        </CaseCard>
        <CaseCard number="02" tag="Optimering" title="Data, energi og bedre timing" active>
          En kompleks optimeringsmodel blev gjort mere anvendelig ved at koble energipriser,
          vejrdata og drift sammen.
        </CaseCard>
      </CaseGrid>
    </Stage>
  );
}
