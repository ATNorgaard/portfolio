import type { ReactNode } from "react";
import { cx } from "../cx.js";
import { Wordmark } from "./Wordmark.js";

export interface SiteHeaderNavItem {
  /** In-page anchor, e.g. `"#fokus"`. */
  href: string;
  label: string;
}

export interface SiteHeaderProps {
  /** Nav items. Hidden below 800px, where the header collapses to two columns. */
  items?: SiteHeaderNavItem[];
  /** Letterforms for the mark at the left. */
  initials?: string;
  /** Right-hand call to action. */
  actionLabel?: string;
  actionHref?: string;
  /** Accessible name for the nav landmark. */
  navLabel?: string;
  /**
   * Renders in normal flow instead of fixed to the viewport. Use inside
   * previews and embedded layouts; leave off for a real page.
   */
  isStatic?: boolean;
  /** Forces the compact, shadowed scrolled state. MotionProvider sets this
   * automatically on a real page once the user scrolls past 40px. */
  scrolled?: boolean;
  children?: ReactNode;
  className?: string;
}

/**
 * Fixed translucent header: mark on the left, centred mono nav, contact link
 * on the right. It blurs whatever is behind it and shrinks by 10px once the
 * page scrolls. The active nav item is underlined by a rule that wipes in
 * from the left — MotionProvider maintains that state.
 */
export function SiteHeader({
  items = [],
  initials = "AN",
  actionLabel = "Sig hej",
  actionHref = "#kontakt",
  navLabel = "Primær navigation",
  isStatic = false,
  scrolled = false,
  children,
  className,
}: SiteHeaderProps) {
  return (
    <header
      className={cx(
        "an-header",
        isStatic && "an-header--static",
        scrolled && "is-scrolled",
        className
      )}
    >
      <Wordmark initials={initials} />
      <nav className="an-header-nav" aria-label={navLabel}>
        {items.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      {children ?? (
        <a className="an-header-action" href={actionHref}>
          {actionLabel} <span aria-hidden="true">↗</span>
        </a>
      )}
    </header>
  );
}
