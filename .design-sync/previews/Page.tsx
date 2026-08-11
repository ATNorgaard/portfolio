import {
  Page,
  SiteHeader,
  Hero,
  MotionBand,
  Section,
  SectionHeading,
  CapabilityList,
  ContactBlock,
  SiteFooter,
  Button,
  TextLink,
} from "an-ui";

export function WholePage() {
  return (
    <Page>
      <SiteHeader
        isStatic
        items={[
          { href: "#fokus", label: "Fokus" },
          { href: "#kontakt", label: "Kontakt" },
        ]}
      />
      <Hero
        flush
        eyebrow="AI · DATA · ARKITEKTUR"
        lines={[
          "Jeg gør AI",
          <>
            <em>anvendelig</em> i
          </>,
          "virkeligheden.",
        ]}
        intro="Jeg hjælper virksomhedsledere med at skelne mellem støj og reelle skift."
        actions={
          <>
            <Button href="#fokus" trailingIcon="↓">
              Se mit fokus
            </Button>
            <TextLink href="#kontakt" tone="on-ink" trailingIcon="↗">
              Start en samtale
            </TextLink>
          </>
        }
      />
      <MotionBand items={["AI-STRATEGI", "DATAARKITEKTUR", "EKSEKVERING"]} />
      <Section id="fokus" tone="ink" labelNumber="01" labelTitle="Fokus">
        <SectionHeading
          title="Fra ambition til drift."
          intro="Mellem ledelsesrummet og det tekniske maskinrum."
        />
        <CapabilityList
          items={[
            {
              number: "01",
              title: "AI-retning & eksekvering",
              text: "Fra vurdering af muligheder til løsninger, der virker i drift.",
            },
            {
              number: "02",
              title: "Data- & integrationsarkitektur",
              text: "Robuste dataflows, der gør nye initiativer lettere at skalere.",
            },
          ]}
        />
      </Section>
      <ContactBlock
        title={
          <>
            Skal vi gøre det komplekse <em>klart?</em>
          </>
        }
        links={[{ href: "mailto:atnoergaard@gmail.com", label: "atnoergaard@gmail.com ↗" }]}
      />
      <SiteFooter>Andreas Nørgaard · AI Solutions Architect</SiteFooter>
    </Page>
  );
}

export function GroundAndType() {
  return (
    <Page>
      <div style={{ padding: "2.5rem 2rem" }}>
        <p style={{ margin: "0 0 0.75rem", fontSize: "1.5rem" }}>
          Page sets the paper ground and the Geist stack.
        </p>
        <p style={{ margin: 0, color: "var(--an-text-body)", lineHeight: 1.7 }}>
          Everything inside inherits the type, the ink text colour, the lime selection colour and
          the accent focus ring. Without this wrapper the same markup falls back to the host page's
          defaults.
        </p>
      </div>
    </Page>
  );
}
