import { cx } from "../cx.js";

export interface ScrollProgressProps {
  /**
   * Fill fraction, 0–1. Normally left unset: MotionProvider drives the
   * `--an-page-progress` custom property on every frame instead. Pass a value
   * to pin the bar for a static shot.
   */
  value?: number;
  className?: string;
}

/**
 * A 3px lime rule pinned to the top of the viewport that scales with reading
 * progress. Hidden entirely under `prefers-reduced-motion`.
 */
export function ScrollProgress({ value, className }: ScrollProgressProps) {
  return (
    <div
      className={cx("an-scroll-progress", className)}
      aria-hidden="true"
      style={value === undefined ? undefined : ({ "--an-page-progress": value } as never)}
    >
      <span />
    </div>
  );
}
