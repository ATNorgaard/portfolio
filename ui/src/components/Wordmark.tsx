import { cx } from "../cx.js";

export interface WordmarkProps {
  /** The letterforms, e.g. `"AN"`. */
  initials?: string;
  /** The accent glyph that closes the mark. Always rendered in lime. */
  mark?: string;
  href?: string;
  "aria-label"?: string;
  className?: string;
}

/**
 * The identity mark: tight mono initials followed by a lime slash. Sits at
 * the left of the header and centred in the footer.
 */
export function Wordmark({
  initials = "AN",
  mark = "/",
  href = "#top",
  className,
  ...rest
}: WordmarkProps) {
  return (
    <a className={cx("an-wordmark", className)} href={href} {...rest}>
      {initials}
      <span>{mark}</span>
    </a>
  );
}
