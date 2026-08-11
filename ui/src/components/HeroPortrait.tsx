import { cx } from "../cx.js";

export interface HeroPortraitProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** Left-hand caption line — the subject's name. */
  captionStart?: string;
  /** Right-hand caption line — the subject's role. */
  captionEnd?: string;
  className?: string;
}

/**
 * The right half of the hero: a full-bleed portrait, slightly over-scaled so
 * it can drift as the page scrolls, with an ink gradient washing up the
 * bottom third and a mono caption split across the frame. It wipes in from
 * the right on load.
 */
export function HeroPortrait({
  src,
  alt,
  width,
  height,
  captionStart,
  captionEnd,
  className,
}: HeroPortraitProps) {
  return (
    <figure className={cx("an-portrait", className)}>
      <img src={src} alt={alt} width={width} height={height} />
      {captionStart || captionEnd ? (
        <figcaption>
          <span>{captionStart}</span>
          <span>{captionEnd}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
