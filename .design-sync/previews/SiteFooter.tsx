import { Page, SiteFooter } from "an-ui";

export function Default() {
  return (
    <Page>
      <SiteFooter>Andreas Nørgaard · AI Solutions Architect</SiteFooter>
    </Page>
  );
}

export function CustomAction() {
  return (
    <Page>
      <SiteFooter initials="AN" actionLabel="Til toppen ↑" actionHref="#top">
        København · Aalborg · Arbejder globalt
      </SiteFooter>
    </Page>
  );
}
