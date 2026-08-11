import type { ElementType, ReactNode } from "react";
import { cx } from "../cx.js";

export interface RevealProps {
  children: ReactNode;
  /**
   * Which entrance the element uses:
   * `up` rises 48px, `left` slides in from −58px, `scale` settles from 0.94,
   * `card` arrives from 74px with a half-degree rotation, `headline` wipes
   * upward with a clip-path, `line` wipes in from the left edge.
   */
  variant?: "up" | "left" | "scale" | "card" | "headline" | "line";
  /**
   * Parallax strength in px. The element drifts against the scroll by this
   * much while it is in view. Around 14–18 is the usual amount; higher reads
   * as a gimmick.
   */
  parallax?: number;
  /** Element to render. Defaults to a `div`. */
  as?: ElementType;
  /**
   * Renders in the revealed state immediately. Reveals are already visible
   * without MotionProvider, so this only matters when one is mounted.
   */
  visible?: boolean;
  className?: string;
}

/**
 * Marks an element for scroll-triggered entrance. It does nothing on its own:
 * the styles only bind once MotionProvider has set `.an-motion-ready`, and
 * the observer it installs adds `.is-visible` as each element enters view.
 * That ordering is deliberate — with no JavaScript, or in a static render,
 * the content is simply visible.
 *
 * Wrap the direct children of a list in these and put `an-stagger` on the
 * parent (every list component does this already) to get the 90ms cascade.
 */
export function Reveal({
  children,
  variant = "up",
  parallax,
  as,
  visible = false,
  className,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      className={cx(visible && "is-visible", className)}
      data-an-reveal={variant}
      data-an-parallax={parallax === undefined ? undefined : String(parallax)}
    >
      {children}
    </Tag>
  );
}
