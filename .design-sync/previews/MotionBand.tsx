import { Page, MotionBand } from "an-ui";

const items = ["AI-STRATEGI", "DATAARKITEKTUR", "ANSVARLIG ADOPTION", "EKSEKVERING"];

export function Accent() {
  return (
    <Page>
      <MotionBand items={items} />
    </Page>
  );
}

export function Ink() {
  return (
    <Page>
      <MotionBand tone="ink" items={items} />
    </Page>
  );
}

export function BetweenSections() {
  return (
    <Page>
      <div style={{ background: "var(--an-ink)", height: "48px" }} />
      <MotionBand items={items} />
      <div style={{ background: "var(--an-paper)", height: "48px" }} />
    </Page>
  );
}
