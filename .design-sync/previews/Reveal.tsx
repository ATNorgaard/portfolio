import { Page, Reveal, DisplayHeading, CaseGrid, SectionLabel, Callout } from "an-ui";

/* Reveals render in their final visible state unless MotionProvider is
   mounted, which is exactly what these cells show: marking content up for
   entrance never risks it being invisible. */

export function HeadlineWipe() {
  return (
    <Page>
      <div style={{ background: "var(--an-ink)", color: "var(--an-on-ink)", padding: "2.5rem 2rem" }}>
        <Reveal variant="headline">
          <DisplayHeading size="sm">
            Fra ambition til <em>drift</em>.
          </DisplayHeading>
        </Reveal>
      </div>
    </Page>
  );
}

export function SlideInLabel() {
  return (
    <Page>
      <div style={{ background: "var(--an-paper)", padding: "2.5rem 2rem" }}>
        <Reveal variant="left">
          <SectionLabel number="01" title="Om mig" />
        </Reveal>
      </div>
    </Page>
  );
}

export function ScaleWithParallax() {
  return (
    <Page>
      <div style={{ background: "var(--an-paper)", padding: "2.5rem 2rem" }}>
        <Reveal variant="scale" parallax={18}>
          <Callout label="Mit arbejdsprincip">
            Forretningen først. Teknologien med. Ingen hype.
          </Callout>
        </Reveal>
      </div>
    </Page>
  );
}

export function StaggeredCards() {
  return (
    <Page>
      <div style={{ background: "var(--an-ink-panel)", color: "var(--an-on-ink)", padding: "2rem" }}>
        <CaseGrid
          columns={2}
          items={[
            {
              tag: "Arkitektur",
              title: "En fælles integrationsrygrad",
              text: "Fælles datamodeller, tydelige kontrakter og genbrugelige mønstre.",
            },
            {
              tag: "Adoption",
              title: "AI fra eksperiment til praksis",
              text: "Fra spredte enkeltforsøg til en fælles, ansvarlig AI-praksis.",
            },
          ]}
        />
      </div>
    </Page>
  );
}
