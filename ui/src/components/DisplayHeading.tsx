import type { ReactNode } from "react";
import { cx } from "../cx.js";

export interface DisplayHeadingProps {
  /**
   * Heading content. Wrap the emphasised words in `<em>` — the stylesheet
   * swaps them to italic Georgia in the accent colour, which is the single
   * most recognisable move in this design system.
   */
  children: ReactNode;
  /** Heading level. Defaults to `h2`; use `h1` once per page. */
  as?: "h1" | "h2" | "h3";
  /** Size step. `lg` is the contact block, `default` the hero. */
  size?: "lg" | "default" | "md" | "sm";
  /** Recolours the `<em>` so it stays legible off the ink ground. */
  tone?: "on-ink" | "on-paper" | "on-accent";
  id?: string;
  className?: string;
}

/**
 * The oversized editorial headline: fluid clamp sizing, 0.91 line-height and
 * tight −0.065em tracking so the lines pack into a solid block. Set it with
 * explicit line breaks rather than letting it wrap wherever it lands.
 */
export function DisplayHeading({
  children,
  as = "h2",
  size = "default",
  tone = "on-ink",
  id,
  className,
}: DisplayHeadingProps) {
  const Tag = as;
  return (
    <Tag
      id={id}
      className={cx(
        "an-display",
        size !== "default" && `an-display--${size}`,
        tone === "on-paper" && "an-display--on-paper",
        tone === "on-accent" && "an-display--on-accent",
        className
      )}
    >
      {children}
    </Tag>
  );
}
