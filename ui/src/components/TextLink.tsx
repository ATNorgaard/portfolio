import type { ReactNode } from "react";
import { cx } from "../cx.js";

export interface TextLinkProps {
  children: ReactNode;
  href: string;
  /** `on-ink` lightens the rule and text for use on a dark ground. */
  tone?: "default" | "on-ink";
  /** Opens in a new tab and adds `rel="noreferrer"`. */
  external?: boolean;
  /** Trailing glyph — `↗` for outbound, `↓` for in-page. */
  trailingIcon?: ReactNode;
  className?: string;
}

/**
 * The quiet secondary action: body-sized text with a 1px underline rule that
 * sits on the baseline box rather than the glyphs. Pairs with Button in a
 * hero's action row.
 */
export function TextLink({
  children,
  href,
  tone = "default",
  external = false,
  trailingIcon,
  className,
}: TextLinkProps) {
  return (
    <a
      className={cx("an-text-link", tone === "on-ink" && "an-text-link--on-ink", className)}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
      {trailingIcon ? <span aria-hidden="true"> {trailingIcon}</span> : null}
    </a>
  );
}
