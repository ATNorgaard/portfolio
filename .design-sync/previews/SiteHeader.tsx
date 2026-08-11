import { Page, SiteHeader } from "an-ui";

const items = [
  { href: "#om", label: "Om" },
  { href: "#fokus", label: "Fokus" },
  { href: "#erfaring", label: "Erfaring" },
  { href: "#projekter", label: "Projekter" },
];

export function Default() {
  return (
    <Page>
      <div style={{ background: "var(--an-ink-soft)" }}>
        <SiteHeader isStatic items={items} />
      </div>
    </Page>
  );
}

export function Scrolled() {
  return (
    <Page>
      <div style={{ background: "var(--an-ink-soft)" }}>
        <SiteHeader isStatic scrolled items={items} />
      </div>
    </Page>
  );
}

export function MarkAndActionOnly() {
  return (
    <Page>
      <div style={{ background: "var(--an-ink-soft)" }}>
        <SiteHeader isStatic actionLabel="Sig hej" />
      </div>
    </Page>
  );
}
