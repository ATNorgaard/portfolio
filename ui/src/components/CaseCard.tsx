import type { ReactNode } from "react";
import { cx } from "../cx.js";

export interface CaseCardProps {
  /** Two-digit ordinal at the top-left of the card. */
  number?: string;
  /** Category at the top-right, e.g. `"Arkitektur"`. */
  tag?: string;
  /** Case title, pushed to the bottom of the card above the description. */
  title: string;
  children: ReactNode;
  /**
   * Pins the lime hover state on. Use for a featured card, or to show the
   * hover treatment in a static shot.
   */
  active?: boolean;
  className?: string;
}

/**
 * One case in a CaseGrid. The meta row sits at the top and the title is
 * pushed down to meet the description by `margin-top: auto`, so a row of
 * cards aligns on the title line. On hover the whole card flips to lime,
 * lifts 8px and casts a deep shadow over its neighbours.
 */
export function CaseCard({ number, tag, title, children, active = false, className }: CaseCardProps) {
  return (
    <article className={cx("an-case-card", active && "is-active", className)}>
      {number || tag ? (
        <div className="an-case-meta">
          <span>{number}</span>
          <span>{tag}</span>
        </div>
      ) : null}
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
