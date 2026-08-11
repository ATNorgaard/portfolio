import { Page, FactStrip, Fact } from "an-ui";

export function TwoUp() {
  return (
    <Page>
      <div style={{ background: "var(--an-paper)", padding: "2rem" }}>
        <FactStrip
          items={[
            {
              label: "Uddannelse",
              value: "MSc, Biomedical Engineering & Informatics",
              detail: "Aalborg Universitet · 2016 — 2021",
            },
            {
              label: "Udvalgte certificeringer",
              value: "Azure AI Fundamentals · Azure Fundamentals",
              detail: "Suppleret med Scrum Master og cybersikkerhed",
            },
          ]}
        />
      </div>
    </Page>
  );
}

export function ThreeUp() {
  return (
    <Page>
      <div style={{ background: "var(--an-paper)", padding: "2rem" }}>
        <FactStrip columns={3}>
          <Fact label="Base" value="Aalborg, Danmark" detail="Arbejder globalt" />
          <Fact label="Felt" value="AI, data og arkitektur" detail="Fra strategi til drift" />
          <Fact label="Sprog" value="Dansk · Engelsk" detail="Rådgivning på begge" />
        </FactStrip>
      </div>
    </Page>
  );
}

export function Single() {
  return (
    <Page>
      <div style={{ background: "var(--an-paper)", padding: "2rem" }}>
        <FactStrip
          columns={1}
          items={[
            {
              label: "Uddannelse",
              value: "MSc, Biomedical Engineering & Informatics",
              detail: "Aalborg Universitet · 2016 — 2021",
            },
          ]}
        />
      </div>
    </Page>
  );
}
