import type { ReactNode } from "react";
import { Page, Button } from "an-ui";

/** Preview ground. Components inherit type and colour from `.an-page`, and
 *  most of the system is designed against a specific surface — so every cell
 *  states the ground it belongs on. */
function Stage({ tone = "ink", children }: { tone?: string; children: ReactNode }) {
  const bg: Record<string, string> = {
    paper: "var(--an-paper)",
    "paper-deep": "var(--an-paper-deep)",
    ink: "var(--an-ink)",
    accent: "var(--an-accent-bright)",
  };
  return (
    <Page>
      <div
        style={{
          background: bg[tone],
          color: tone === "ink" ? "var(--an-on-ink)" : "var(--an-ink)",
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
      <Button href="#projekter" trailingIcon="↓">
        Se udvalgte projekter
      </Button>
    </Stage>
  );
}

export function Variants() {
  return (
    <Stage tone="paper">
      <Button variant="accent">Start en samtale</Button>
      <Button variant="ink">Book et møde</Button>
      <Button variant="outline">Læs mere</Button>
    </Stage>
  );
}

export function OnAccent() {
  return (
    <Stage tone="accent">
      <Button variant="ink" trailingIcon="↗">
        Skriv til mig
      </Button>
    </Stage>
  );
}

export function Disabled() {
  return (
    <Stage tone="paper">
      <Button variant="accent">Send</Button>
      <Button variant="accent" disabled>
        Sender…
      </Button>
    </Stage>
  );
}
