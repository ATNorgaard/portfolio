import { cx } from "../cx.js";

export interface SectionLabelProps {
  /** Two-digit ordinal, e.g. `"01"`. Numbering the sections is the point. */
  number: string;
  /** Short label, e.g. `"Om mig"`. */
  title: string;
  tone?: "on-paper" | "on-ink";
  className?: string;
}

/**
 * The left-rail marker: a dimmed ordinal beside a mono label. It is what
 * gives the page its table-of-contents feel — Section renders one for you,
 * so reach for this directly only in a custom layout.
 */
export function SectionLabel({ number, title, tone = "on-paper", className }: SectionLabelProps) {
  return (
    <div
      className={cx("an-section-label", tone === "on-ink" && "an-section-label--on-ink", className)}
    >
      <span>{number}</span>
      <p>{title}</p>
    </div>
  );
}
