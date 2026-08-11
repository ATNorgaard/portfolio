import { Page, ScrollCue } from "an-ui";

/* The cue anchors itself to the bottom seam of a hero. These cells give it a
   box of its own so it sits inside the card. */
const scoped = `.an-preview-scope .an-scroll-cue { position: static; transform: none; }`;

function Stage({ label }: { label?: string }) {
  return (
    <Page>
      <style>{scoped}</style>
      <div
        className="an-preview-scope"
        style={{
          background: "var(--an-ink)",
          padding: "2.5rem 2rem",
          display: "flex",
          alignItems: "center",
          minHeight: "110px",
        }}
      >
        <ScrollCue label={label} />
      </div>
    </Page>
  );
}

export function Default() {
  return <Stage />;
}

export function CustomLabel() {
  return <Stage label="Rul ned" />;
}
