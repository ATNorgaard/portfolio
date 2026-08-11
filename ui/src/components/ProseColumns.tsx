import type { ReactNode } from "react";
import { cx } from "../cx.js";

export interface ProseColumnsProps {
  /** Paragraphs, one per column. Two is the intended count. */
  paragraphs?: ReactNode[];
  /** Arbitrary column content, if `paragraphs` is too rigid. */
  children?: ReactNode;
  tone?: "on-paper" | "on-ink";
  /** Applies the staggered reveal delay chain to the columns. */
  stagger?: boolean;
  className?: string;
}

/**
 * Two columns of body copy under a hairline rule — the system's way of
 * setting a couple of paragraphs without letting them run to a full-width
 * measure. Stacks below 800px.
 */
export function ProseColumns({
  paragraphs = [],
  children,
  tone = "on-paper",
  stagger = true,
  className,
}: ProseColumnsProps) {
  return (
    <div
      className={cx(
        "an-prose-columns",
        tone === "on-ink" && "an-prose-columns--on-ink",
        stagger && "an-stagger",
        className
      )}
    >
      {children ?? paragraphs.map((text, index) => <p key={index}>{text}</p>)}
    </div>
  );
}
