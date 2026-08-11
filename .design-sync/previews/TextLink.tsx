import type { ReactNode } from "react";
import { Page, TextLink, Button } from "an-ui";

function Stage({ tone = "ink", children }: { tone?: string; children: ReactNode }) {
  const ink = tone === "ink";
  return (
    <Page>
      <div
        style={{
          background: ink ? "var(--an-ink)" : "var(--an-paper)",
          color: ink ? "var(--an-on-ink)" : "var(--an-ink)",
          padding: "2.5rem 2rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "1.75rem",
        }}
      >
        {children}
      </div>
    </Page>
  );
}

export function OnInk() {
  return (
    <Stage tone="ink">
      <TextLink href="mailto:atnoergaard@gmail.com" tone="on-ink" trailingIcon="↗">
        Start en samtale
      </TextLink>
    </Stage>
  );
}

export function OnPaper() {
  return (
    <Stage tone="paper">
      <TextLink href="#erfaring">Se hele forløbet</TextLink>
      <TextLink href="https://www.linkedin.com" external trailingIcon="↗">
        LinkedIn
      </TextLink>
    </Stage>
  );
}

export function BesideAButton() {
  return (
    <Stage tone="ink">
      <Button href="#projekter" trailingIcon="↓">
        Se udvalgte projekter
      </Button>
      <TextLink href="mailto:atnoergaard@gmail.com" tone="on-ink" trailingIcon="↗">
        Start en samtale
      </TextLink>
    </Stage>
  );
}
