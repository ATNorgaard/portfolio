import type { ReactNode } from "react";
import { cx } from "../cx.js";
import { DisplayHeading } from "./DisplayHeading.js";

export interface SectionHeadingProps {
  /** The headline. Use `<em>` for the italic serif accent. */
  title: ReactNode;
  /** Supporting paragraph in the narrow right column, capped at 500px. */
  intro?: ReactNode;
  tone?: "on-ink" | "on-paper";
  size?: "md" | "sm";
  id?: string;
  className?: string;
}

/**
 * Opens a section body: an oversized headline on the left, bottom-aligned
 * against a short paragraph on the right. The baselines meeting at the
 * bottom of the row is what makes the pairing work — it stacks below 800px.
 */
export function SectionHeading({
  title,
  intro,
  tone = "on-ink",
  size = "sm",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cx(
        "an-section-heading",
        tone === "on-paper" && "an-section-heading--on-paper",
        className
      )}
    >
      <DisplayHeading as="h2" size={size} tone={tone} id={id}>
        {title}
      </DisplayHeading>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}
