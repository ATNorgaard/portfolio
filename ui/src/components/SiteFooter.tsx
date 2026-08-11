import type { ReactNode } from "react";
import { cx } from "../cx.js";
import { Wordmark } from "./Wordmark.js";

export interface SiteFooterProps {
  /** Centre line — name and role. Hidden below 800px. */
  children?: ReactNode;
  initials?: string;
  /** Right-hand back-to-top link. */
  actionLabel?: string;
  actionHref?: string;
  className?: string;
}

/**
 * Three-column ink footer: mark, one line of mono text, back-to-top. Deliberately
 * plain — the ContactBlock above it does the closing, so this only has to end
 * the page.
 */
export function SiteFooter({
  children,
  initials = "AN",
  actionLabel = "Til toppen ↑",
  actionHref = "#top",
  className,
}: SiteFooterProps) {
  return (
    <footer className={cx("an-footer", className)}>
      <Wordmark initials={initials} aria-label="Tilbage til toppen" />
      <p>{children}</p>
      <a href={actionHref}>{actionLabel}</a>
    </footer>
  );
}
