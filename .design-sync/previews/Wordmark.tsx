import { Page, Wordmark } from "an-ui";

export function OnInk() {
  return (
    <Page>
      <div
        style={{
          background: "var(--an-ink)",
          color: "var(--an-on-ink)",
          padding: "2.5rem 2rem",
        }}
      >
        <Wordmark initials="AN" />
      </div>
    </Page>
  );
}

/* The mark is only ever set on ink — the lime slash has too little contrast
   against paper to carry the identity, so both cells stay on the dark ground
   the header and footer actually use. */
export function CustomInitials() {
  return (
    <Page>
      <div
        style={{
          background: "var(--an-ink-soft)",
          color: "var(--an-on-ink)",
          padding: "2.5rem 2rem",
          display: "flex",
          gap: "3rem",
        }}
      >
        <Wordmark initials="AN" />
        <Wordmark initials="ATN" mark="." />
      </div>
    </Page>
  );
}
