import type { ReactNode } from "react";
import { Page, CaseGrid, CaseCard } from "an-ui";

function Stage({ columns = 1, children }: { columns?: number; children: ReactNode }) {
  return (
    <Page>
      <div style={{ background: "var(--an-ink-panel)", color: "var(--an-on-ink)", padding: "2rem" }}>
        {/* The card relies on CaseGrid for its outer rules. */}
        <CaseGrid columns={columns} stagger={false}>
          {children}
        </CaseGrid>
      </div>
    </Page>
  );
}

export function Default() {
  return (
    <Stage>
      <CaseCard number="01" tag="Arkitektur" title="En fælles integrationsrygrad">
        Et fragmenteret systemlandskab blev samlet omkring fælles datamodeller, tydelige kontrakter
        og genbrugelige integrationsmønstre.
      </CaseCard>
    </Stage>
  );
}

export function Active() {
  return (
    <Stage>
      <CaseCard number="05" tag="Optimering" title="Data, energi og bedre timing" active>
        En kompleks optimeringsmodel blev gjort mere anvendelig ved at koble energipriser, vejrdata
        og drift sammen.
      </CaseCard>
    </Stage>
  );
}

export function DefaultAndActive() {
  return (
    <Stage columns={2}>
      <CaseCard number="01" tag="Arkitektur" title="En fælles integrationsrygrad">
        Et fragmenteret systemlandskab blev samlet omkring fælles datamodeller.
      </CaseCard>
      <CaseCard number="02" tag="Adoption" title="AI fra eksperiment til praksis" active>
        Fra spredte enkeltforsøg til en fælles, ansvarlig AI-praksis.
      </CaseCard>
    </Stage>
  );
}

export function WithoutMeta() {
  return (
    <Stage>
      <CaseCard title="Nyt liv til kritiske systemer">
        Ældre forretningskritiske løsninger blev moderniseret med en klarere arkitektur og et
        fundament, der kunne udvikles videre.
      </CaseCard>
    </Stage>
  );
}
