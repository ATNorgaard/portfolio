import { cx } from "../cx.js";

export interface MotionBandProps {
  /** Phrases to cycle. Rendered uppercase mono, separated by a dimmed bullet. */
  items: string[];
  /** Lime ground with ink text (default), or the inverse. */
  tone?: "accent" | "ink";
  /** Glyph between items. */
  separator?: string;
  /**
   * How many times the list is repeated inside the track. The marquee
   * translates by −50%, so the content must appear at least twice for the
   * loop to be seamless.
   */
  repeat?: number;
  className?: string;
}

/**
 * The lime marquee that breaks the page between the hero and the first
 * section — a horizontal rule with something to say. Animation stops under
 * `prefers-reduced-motion`, leaving a static band.
 */
export function MotionBand({
  items,
  tone = "accent",
  separator = "•",
  repeat = 2,
  className,
}: MotionBandProps) {
  const sequence = Array.from({ length: Math.max(repeat, 2) }, () => items).flat();

  return (
    <div
      className={cx("an-motion-band", tone === "ink" && "an-motion-band--ink", className)}
      aria-hidden="true"
    >
      <div className="an-motion-band-track">
        {sequence.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            <i> {separator} </i>
          </span>
        ))}
      </div>
    </div>
  );
}
