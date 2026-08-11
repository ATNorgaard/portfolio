import { Page, MotionProvider, SiteHeader, Section, SectionHeading, CapabilityList, MotionBand } from "an-ui";

/* MotionProvider renders nothing of its own — what it does is drive the
   scroll-linked state of everything around it. These cells mount it over real
   compositions to show that the page renders identically with it in place;
   the difference only appears once the reader scrolls.

   Both compositions deliberately leave out the Hero and any Reveal: those
   play a timed entrance the moment the provider arms them, which a static
   capture would catch mid-animation. */

export function OverASection() {
  return (
    <Page>
      <MotionProvider />
      <Section tone="ink" labelNumber="02" labelTitle="Fokus">
        <SectionHeading
          title="Fra ambition til drift."
          intro="Med MotionProvider monteret følger cirklen i baggrunden læserens position på siden."
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

export function WrappingThePage() {
  return (
    <MotionProvider headerOffset={40}>
      <Page>
        <SiteHeader
          isStatic
          items={[
            { href: "#om", label: "Om" },
            { href: "#fokus", label: "Fokus" },
          ]}
        />
        <MotionBand items={["AI-STRATEGI", "DATAARKITEKTUR", "EKSEKVERING"]} />
      </Page>
    </MotionProvider>
  );
}
