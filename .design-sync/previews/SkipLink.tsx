import { Page, SkipLink } from "an-ui";

/* SkipLink is parked off-screen until it takes keyboard focus, so a plain
   render is empty by design. These cells pin it into view so the treatment is
   visible; nothing about the component itself is changed. */
const pinned = `.an-preview-pin .an-skip-link { position: absolute; top: 1rem; left: 1rem; }`;

export function Focused() {
  return (
    <Page>
      <style>{pinned}</style>
      <div
        className="an-preview-pin"
        style={{
          position: "relative",
          background: "var(--an-ink)",
          height: "140px",
          padding: "1rem",
        }}
      >
        <SkipLink>Gå til indhold</SkipLink>
      </div>
    </Page>
  );
}

export function OnPaper() {
  return (
    <Page>
      <style>{pinned}</style>
      <div
        className="an-preview-pin"
        style={{
          position: "relative",
          background: "var(--an-paper)",
          height: "140px",
          padding: "1rem",
        }}
      >
        <SkipLink href="#main-content">Skip to content</SkipLink>
      </div>
    </Page>
  );
}
