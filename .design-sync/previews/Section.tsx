import { Page, Section, SectionHeading, ProseColumns, CapabilityList, Callout } from "an-ui";

export function PaperWithProse() {
  return (
    <Page>
      <Section id="om" tone="paper" labelNumber="01" labelTitle="Om mig" headingId="om-title">
        <SectionHeading
          id="om-title"
          tone="on-paper"
          size="md"
          title={
            <>
              Teknologi skal kunne
              <br />
              <em>forklares</em>, før den kan skaleres.
            </>
          }
        />
        <ProseColumns
          paragraphs={[
            "Der sker utroligt meget inden for AI. Det meste fortjener hverken hypen eller frygten.",
            "Min rolle er at skabe det overblik, ledere har brug for — og bygge bro mellem behov, data og de teams, der skal få forandringen til at fungere.",
          ]}
        />
        <Callout label="Mit arbejdsprincip">
          Forretningen først. Teknologien med. Ingen hype.
        </Callout>
      </Section>
    </Page>
  );
}

export function InkWithList() {
  return (
    <Page>
      <Section id="fokus" tone="ink" labelNumber="02" labelTitle="Fokus" headingId="fokus-title">
        <SectionHeading
          id="fokus-title"
          title="Fra ambition til drift."
          intro="Jeg bevæger mig mellem ledelsesrummet og det tekniske maskinrum."
        />
        <CapabilityList
          items={[
            {
              number: "01",
              title: "AI-retning & eksekvering",
              text: "Fra nøgtern vurdering af muligheder til løsninger, der virker i den daglige drift.",
            },
            {
              number: "02",
              title: "Data- & integrationsarkitektur",
              text: "Robuste dataflows og integrationsmønstre, der reducerer kompleksitet.",
            },
          ]}
        />
      </Section>
    </Page>
  );
}

export function Grounds() {
  return (
    <Page>
      <Section tone="paper" labelNumber="01" labelTitle="Paper">
        <p style={{ margin: 0, color: "var(--an-text-body)" }}>
          Den lyse grund — brødtekst, erfaring og fakta.
        </p>
      </Section>
      <Section tone="ink" labelNumber="02" labelTitle="Ink">
        <p style={{ margin: 0, color: "var(--an-on-ink-muted)" }}>
          Den mørke grund — kompetencer og lister.
        </p>
      </Section>
      <Section tone="ink-panel" labelNumber="03" labelTitle="Ink panel">
        <p style={{ margin: 0, color: "var(--an-on-ink-muted)" }}>
          Den dybeste grund — udvalgte projekter.
        </p>
      </Section>
    </Page>
  );
}
