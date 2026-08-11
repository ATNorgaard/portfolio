import type { ReactNode } from "react";
import { cx } from "../cx.js";

export interface CapabilityItemProps {
  /** Two-digit ordinal in the lime left column. */
  number: string;
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * One row of a CapabilityList: ordinal, title and description across three
 * columns, divided by a hairline. Hovering nudges the whole row 12px right
 * and tints it lime — the rows behave like a list you can run a finger down.
 * Below 800px it folds to two columns with the text under the title.
 */
export function CapabilityItem({ number, title, children, className }: CapabilityItemProps) {
  return (
    <article className={cx("an-capability-item", className)}>
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
