import { cx } from "../cx.js";

export interface ScrollCueProps {
  label?: string;
  className?: string;
}

/**
 * Rotated mono label with a hairline that a lime segment sweeps along, sat in
 * the bottom seam of the hero. Purely decorative — hidden below 800px and
 * frozen under `prefers-reduced-motion`.
 */
export function ScrollCue({ label = "Scroll", className }: ScrollCueProps) {
  return (
    <div className={cx("an-scroll-cue", className)} aria-hidden="true">
      <span>{label}</span>
      <i />
    </div>
  );
}
