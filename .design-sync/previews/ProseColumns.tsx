import type { ReactNode } from "react";
import { Page, ProseColumns } from "an-ui";

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
      <ProseColumns
        paragraphs={[
          "Der sker utroligt meget inden for AI. Det meste fortjener hverken hypen eller frygten. Jeg arbejder tæt nok på teknologien til at se forskel på et reelt skift og endnu en bølge af støj.",
          "Min rolle er at skabe det overblik, ledere har brug for — og bygge bro mellem forretningsbehov, data, arkitektur og de teams, der skal få forandringen til at fungere i praksis.",
        ]}
      />
    </Stage>
  );
}

export function OnInk() {
  return (
    <Stage ink>
      <ProseColumns
        tone="on-ink"
        paragraphs={[
          "Arkitektur er ikke et diagram. Det er de beslutninger, der stadig holder, når systemet er i drift og kravene har flyttet sig.",
          "Derfor starter jeg med at forstå, hvad der faktisk skal kunne ændre sig — og bygger fladerne omkring det.",
        ]}
      />
    </Stage>
  );
}
