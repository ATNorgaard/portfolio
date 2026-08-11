import type { ReactNode } from "react";
import { cx } from "../cx.js";

export interface SkipLinkProps {
  children?: ReactNode;
  /** Id of the main content region, including the `#`. */
  href?: string;
  className?: string;
}

/**
 * Off-screen bypass link that drops into view on keyboard focus. First
 * element inside the page root; every page built with this system should
 * have one.
 */
export function SkipLink({
  children = "Gå til indhold",
  href = "#main-content",
  className,
}: SkipLinkProps) {
  return (
    <a className={cx("an-skip-link", className)} href={href}>
      {children}
    </a>
  );
}
