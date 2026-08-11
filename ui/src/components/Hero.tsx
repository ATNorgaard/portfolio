import type { ReactNode } from "react";
import { cx } from "../cx.js";
import { Eyebrow } from "./Eyebrow.js";
import { DisplayHeading } from "./DisplayHeading.js";

export interface HeroProps {
  /** Mono kicker above the headline. */
  eyebrow?: string;
  /**
   * Headline, one entry per rendered line. Each becomes a block that clips
   * and skews into place in sequence — so break the sentence deliberately
   * rather than letting it wrap. Use `<em>` inside an entry for the italic
   * serif accent.
   */
  lines: ReactNode[];
  /** Standfirst under the headline. Capped at 680px. */
  intro?: ReactNode;
  /** Action row — a Button plus a TextLink is the house pattern. */
  actions?: ReactNode;
  /** Mono line pinned to the bottom-left, e.g. a location. */
  meta?: string;
  /** A HeroPortrait for the right column. Omit for a single-column hero. */
  portrait?: ReactNode;
  /** Renders a ScrollCue in the bottom seam. */
  children?: ReactNode;
  id?: string;
  /** Id the SkipLink targets. */
  contentId?: string;
  headingId?: string;
  /**
   * Drops the 100svh floor and the header offset, so the hero sizes to its
   * own content. Use inside previews and embedded layouts.
   */
  flush?: boolean;
  className?: string;
}

/**
 * The opening statement: an ink-ground split with the headline stack on the
 * left and a portrait on the right, sized to the viewport and offset by the
 * fixed header. A faint outline circle bleeds off the left edge, and under
 * MotionProvider the copy lifts as the page scrolls while the portrait
 * drifts the other way.
 */
export function Hero({
  eyebrow,
  lines,
  intro,
  actions,
  meta,
  portrait,
  children,
  id = "top",
  contentId = "main-content",
  headingId = "hero-title",
  flush = false,
  className,
}: HeroProps) {
  return (
    <section
      className={cx(
        "an-hero",
        flush && "an-hero--flush",
        !portrait && "an-hero--single",
        className
      )}
      id={id}
      aria-labelledby={headingId}
    >
      <div className="an-hero-copy" id={contentId}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <DisplayHeading as="h1" id={headingId}>
          {lines.map((line, index) => (
            <span className="an-hero-line" key={index}>
              {line}
            </span>
          ))}
        </DisplayHeading>
        {intro ? <p className="an-hero-intro">{intro}</p> : null}
        {actions ? <div className="an-hero-actions">{actions}</div> : null}
        {meta ? <p className="an-hero-meta">{meta}</p> : null}
      </div>
      {portrait}
      {children}
    </section>
  );
}
