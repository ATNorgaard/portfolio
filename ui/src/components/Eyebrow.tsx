import type { ReactNode } from "react";
import { cx } from "../cx.js";

export interface EyebrowProps {
  children: ReactNode;
  /**
   * Which ground the eyebrow sits on. The accent has to darken twice over to
   * stay legible: bright lime on ink, deep on paper, near-olive on the lime
   * contact block.
   */
  tone?: "on-ink" | "on-paper" | "on-accent";
  className?: string;
}

/**
 * The uppercase mono kicker that opens a block. Widest tracking in the
 * system (0.18em) — it reads as a label, never as prose.
 */
export function Eyebrow({ children, tone = "on-ink", className }: EyebrowProps) {
  return (
    <p
      className={cx(
        "an-eyebrow",
        tone === "on-paper" && "an-eyebrow--on-paper",
        tone === "on-accent" && "an-eyebrow--on-accent",
        className
      )}
    >
      {children}
    </p>
  );
}
