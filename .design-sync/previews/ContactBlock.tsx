import { Page, ContactBlock, SiteFooter } from "an-ui";

export function Default() {
  return (
    <Page>
      <ContactBlock
        eyebrow="EN GOD SAMTALE ER ET GODT STED AT STARTE"
        title={
          <>
            Skal vi gøre det
            <br />
            komplekse <em>klart?</em>
          </>
        }
        intro="Jeg er altid åben for en nysgerrig samtale om AI, data, arkitektur og det, der skal til for at skabe reel bevægelse."
        links={[
          { href: "mailto:atnoergaard@gmail.com", label: "atnoergaard@gmail.com ↗" },
          { href: "https://www.linkedin.com", label: "LinkedIn ↗", external: true },
        ]}
      />
    </Page>
  );
}

export function HeadlineAndLinks() {
  return (
    <Page>
      <ContactBlock
        title={
          <>
            Lad os <em>tale sammen</em>.
          </>
        }
        links={[
          { href: "mailto:atnoergaard@gmail.com", label: "atnoergaard@gmail.com ↗" },
          { href: "tel:+4500000000", label: "+45 00 00 00 00 ↗" },
        ]}
      />
    </Page>
  );
}

export function ClosingThePage() {
  return (
    <Page>
      <ContactBlock
        eyebrow="EN GOD SAMTALE ER ET GODT STED AT STARTE"
        title={
          <>
            Skal vi gøre det komplekse <em>klart?</em>
          </>
        }
        intro="Jeg er altid åben for en nysgerrig samtale om AI, data og arkitektur."
        links={[{ href: "mailto:atnoergaard@gmail.com", label: "atnoergaard@gmail.com ↗" }]}
      />
      <SiteFooter>Andreas Nørgaard · AI Solutions Architect</SiteFooter>
    </Page>
  );
}
