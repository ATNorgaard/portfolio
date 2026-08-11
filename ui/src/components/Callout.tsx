import type { ReactNode } from "react";
import { cx } from "../cx.js";

export interface CalloutProps {
  /** Mono label in the narrow left column, e.g. `"Mit arbejdsprincip"`. */
  label: string;
  /** The statement itself. Keep it to one line — this is a pull quote. */
  children: ReactNode;
  tone?: "on-paper" | "on-ink";
  /** Accessible name for the aside landmark. */
  "aria-label"?: string;
  className?: string;
}

/**
 * A deeper panel with a thick olive rule down its left edge, holding one
 * short statement set larger than body copy. Used once per page at most —
 * it's the place a principle gets stated outright.
 */
export function Callout({
  label,
  children,
  tone = "on-paper",
  className,
  ...rest
}: CalloutProps) {
  return (
    <aside
      className={cx("an-callout", tone === "on-ink" && "an-callout--on-ink", className)}
      {...rest}
    >
      <span>{label}</span>
      <p>{children}</p>
    </aside>
  );
}
