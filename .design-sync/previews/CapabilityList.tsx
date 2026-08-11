import type { ReactNode } from "react";
import { Page, CapabilityList, CapabilityItem } from "an-ui";

const items = [
  {
    number: "01",
    title: "AI-retning & eksekvering",
    text: "Fra nøgtern vurdering af muligheder til løsninger, der virker i den daglige drift. Jeg forbinder strategi, prioritering og teknisk eksekvering.",
  },
  {
    number: "02",
    title: "Data- & integrationsarkitektur",
    text: "Robuste dataflows og integrationsmønstre, der reducerer kompleksitet og gør nye digitale initiativer lettere at skalere.",
  },
  {
    number: "03",
    title: "Governance & ansvarlighed",
    text: "Klare rammer for ejerskab, kvalitet, sikkerhed og sporbarhed, så innovation kan ske med tillid.",
  },
  {
    number: "04",
    title: "Modernisering & automation",
    text: "Pragmatiske forbedringer af processer og systemlandskaber med fokus på mindre friktion og bedre beslutninger.",
  },
];

function Stage({ ink = true, children }: { ink?: boolean; children: ReactNode }) {
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

export function OnInk() {
  return (
    <Stage>
      <CapabilityList items={items} />
    </Stage>
  );
}

export function OnPaper() {
  return (
    <Stage ink={false}>
      <CapabilityList tone="on-paper" items={items.slice(0, 3)} />
    </Stage>
  );
}

export function Composed() {
  return (
    <Stage>
      <CapabilityList>
        <CapabilityItem number="01" title="AI-retning & eksekvering">
          Fra nøgtern vurdering af muligheder til løsninger, der virker i den daglige drift.
        </CapabilityItem>
        <CapabilityItem number="02" title="Data- & integrationsarkitektur">
          Robuste dataflows og integrationsmønstre, der reducerer kompleksitet.
        </CapabilityItem>
      </CapabilityList>
    </Stage>
  );
}
