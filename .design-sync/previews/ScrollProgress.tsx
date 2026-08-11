import { Page, ScrollProgress } from "an-ui";

/* The bar is fixed to the viewport on a real page. These cells scope it to a
   box so the fill level is visible inside the card. */
const scoped = `.an-preview-scope .an-scroll-progress { position: absolute; }`;

function Stage({ value, children }: { value: number; children?: string }) {
  return (
    <Page>
      <style>{scoped}</style>
      <div
        className="an-preview-scope"
        style={{
          position: "relative",
          background: "var(--an-ink)",
          color: "var(--an-on-ink-muted)",
          height: "120px",
          padding: "2rem 1.5rem",
          fontFamily: "var(--an-font-mono)",
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        <ScrollProgress value={value} />
        {children}
      </div>
    </Page>
  );
}

export function Quarter() {
  return <Stage value={0.25}>25% læst</Stage>;
}

export function Half() {
  return <Stage value={0.5}>50% læst</Stage>;
}

export function Complete() {
  return <Stage value={1}>100% læst</Stage>;
}
