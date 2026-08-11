import { Page, Hero, HeroPortrait, Button, TextLink, ScrollCue } from "an-ui";

// A self-contained stand-in for the portrait: preview cards render offline in
// headless chromium, so a remote image would resolve to a broken frame.
const portraitSrc =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800">
       <defs><linearGradient id="g" x1="0" y1="0" x2="0.6" y2="1">
         <stop offset="0" stop-color="#3a4340"/><stop offset="0.55" stop-color="#8e918a"/>
         <stop offset="1" stop-color="#cfcdc6"/></linearGradient></defs>
       <rect width="600" height="800" fill="url(#g)"/>
       <circle cx="300" cy="300" r="132" fill="#2b3331" opacity="0.55"/>
       <path d="M120 800c0-118 80-196 180-196s180 78 180 196z" fill="#2b3331" opacity="0.55"/>
     </svg>`
  );

const lines = [
  "Jeg gør AI",
  <>
    <em>anvendelig</em> i
  </>,
  "virkeligheden.",
];

const actions = (
  <>
    <Button href="#projekter" trailingIcon="↓">
      Se udvalgte projekter
    </Button>
    <TextLink href="mailto:atnoergaard@gmail.com" tone="on-ink" trailingIcon="↗">
      Start en samtale
    </TextLink>
  </>
);

export function WithPortrait() {
  return (
    <Page>
      <Hero
        flush
        eyebrow="AI · DATA · ARKITEKTUR"
        lines={lines}
        intro="Jeg hjælper virksomhedsledere med at skelne mellem støj og reelle skift — og omsætter beslutninger til data, arkitektur og løsninger, der kan drives."
        actions={actions}
        portrait={
          <HeroPortrait
            src={portraitSrc}
            alt="Portræt"
            captionStart="Andreas Nørgaard"
            captionEnd="AI Solutions Architect"
          />
        }
      >
        <ScrollCue />
      </Hero>
    </Page>
  );
}

export function SingleColumn() {
  return (
    <Page>
      <Hero
        flush
        eyebrow="AI · DATA · ARKITEKTUR"
        lines={lines}
        intro="Jeg hjælper virksomhedsledere med at skelne mellem støj og reelle skift."
        actions={actions}
        meta="Aalborg · Danmark · Arbejder globalt"
      />
    </Page>
  );
}

export function HeadlineOnly() {
  return (
    <Page>
      <Hero flush lines={["Teknologi skal kunne", <><em>forklares</em>,</>, "før den kan skaleres."]} />
    </Page>
  );
}
