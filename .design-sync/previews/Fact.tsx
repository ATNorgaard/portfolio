import type { ReactNode } from "react";
import { Page, FactStrip, Fact } from "an-ui";

function Stage({ columns = 1, children }: { columns?: number; children: ReactNode }) {
  return (
    <Page>
      <div style={{ background: "var(--an-paper)", padding: "2rem" }}>
        {/* Fact takes its ink ground and dividing rules from FactStrip. */}
        <FactStrip columns={columns} stagger={false}>
          {children}
        </FactStrip>
      </div>
    </Page>
  );
}

export function WithDetail() {
  return (
    <Stage>
      <Fact
        label="Uddannelse"
        value="MSc, Biomedical Engineering & Informatics"
        detail="Aalborg Universitet · 2016 — 2021"
      />
    </Stage>
  );
}

export function LabelAndValue() {
  return (
    <Stage>
      <Fact label="Base" value="Aalborg, Danmark" />
    </Stage>
  );
}

export function AlignedPair() {
  return (
    <Stage columns={2}>
      <Fact label="Felt" value="AI, data og arkitektur" detail="Fra strategi til drift" />
      <Fact
        label="Udvalgte certificeringer"
        value="Azure AI Fundamentals · Azure Fundamentals"
        detail="Suppleret med Scrum Master"
      />
    </Stage>
  );
}
