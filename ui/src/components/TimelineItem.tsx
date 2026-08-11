import type { ReactNode } from "react";
import { cx } from "../cx.js";

export interface TimelineItemProps {
  /** Date range, e.g. `"2025 — nu"`. Uppercase mono. */
  period: string;
  /** Organisation — the entry's headline. */
  title: string;
  /** Role held there. */
  role?: string;
  children: ReactNode;
  className?: string;
}

/**
 * One entry in a Timeline: period, organisation and role, then the
 * description, across three columns under a hairline.
 */
export function TimelineItem({ period, title, role, children, className }: TimelineItemProps) {
  return (
    <article className={cx("an-timeline-item", className)}>
      <p className="an-timeline-period">{period}</p>
      <div>
        <h3>{title}</h3>
        {role ? <p className="an-timeline-role">{role}</p> : null}
      </div>
      <p className="an-timeline-text">{children}</p>
    </article>
  );
}
