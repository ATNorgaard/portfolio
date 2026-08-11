import type { ReactNode } from "react";
import { Page, CapabilityList, CapabilityItem } from "an-ui";

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
        {/* CapabilityItem draws its own dividing rules, so it is only ever
            correct inside the list that supplies the top rule and context. */}
        <CapabilityList stagger={false} tone={ink ? "on-ink" : "on-paper"}>
          {children}
        </CapabilityList>
      </div>
    </Page>
  );
}

export function OnInk() {
  return (
    <Stage>
      <CapabilityItem number="01" title="AI-retning & eksekvering">
        Fra nøgtern vurdering af muligheder til løsninger, der virker i den daglige drift. Jeg
        forbinder strategi, prioritering og teknisk eksekvering.
      </CapabilityItem>
    </Stage>
  );
}

export function OnPaper() {
  return (
    <Stage ink={false}>
      <CapabilityItem number="03" title="Governance & ansvarlighed">
        Klare rammer for ejerskab, kvalitet, sikkerhed og sporbarhed, så innovation kan ske med
        tillid og uden at miste kontrollen.
      </CapabilityItem>
    </Stage>
  );
}

export function Stacked() {
  return (
    <Stage>
      <CapabilityItem number="01" title="AI-retning & eksekvering">
        Fra nøgtern vurdering af muligheder til løsninger, der virker i drift.
      </CapabilityItem>
      <CapabilityItem number="02" title="Data- & integrationsarkitektur">
        Robuste dataflows og integrationsmønstre, der reducerer kompleksitet.
      </CapabilityItem>
    </Stage>
  );
}
