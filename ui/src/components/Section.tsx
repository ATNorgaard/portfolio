import type { ReactNode } from "react";
import { cx } from "../cx.js";
import { SectionLabel } from "./SectionLabel.js";

export interface SectionProps {
  children: ReactNode;
  /** Anchor id — the header nav and MotionProvider's scroll-spy both use it. */
  id?: string;
  /**
   * Ground. The page alternates: paper, ink, paper, ink-panel. The two ink
   * tones each carry a slowly drifting outline circle.
   */
  tone?: "paper" | "paper-deep" | "ink" | "ink-panel";
  /** Left-rail ordinal, e.g. `"02"`. Renders a SectionLabel when set. */
  labelNumber?: string;
  /** Left-rail label, e.g. `"Fokus"`. */
  labelTitle?: string;
  /** Id of the heading that names this section, for `aria-labelledby`. */
  headingId?: string;
  className?: string;
}

/**
 * The page's structural unit: a two-column grid with a narrow left rail for
 * the numbered label and everything else in the body column. It collapses to
 * a single stacked column below 800px. Reuse this for every section so the
 * left edges line up down the whole page.
 */
export function Section({
  children,
  id,
  tone = "paper",
  labelNumber,
  labelTitle,
  headingId,
  className,
}: SectionProps) {
  const onInk = tone === "ink" || tone === "ink-panel";

  return (
    <section
      className={cx("an-section", `an-section--${tone}`, className)}
      id={id}
      aria-labelledby={headingId}
    >
      {labelNumber && labelTitle ? (
        <SectionLabel
          number={labelNumber}
          title={labelTitle}
          tone={onInk ? "on-ink" : "on-paper"}
        />
      ) : (
        <div />
      )}
      <div className="an-section-body">{children}</div>
    </section>
  );
}
