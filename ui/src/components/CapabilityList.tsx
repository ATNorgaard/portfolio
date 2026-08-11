import type { ReactNode } from "react";
import { cx } from "../cx.js";
import { CapabilityItem } from "./CapabilityItem.js";

export interface CapabilityEntry {
  number: string;
  title: string;
  text: string;
}

export interface CapabilityListProps {
  /** Rows to render. Ignored when `children` is provided. */
  items?: CapabilityEntry[];
  /** CapabilityItem children, when you need more than plain text per row. */
  children?: ReactNode;
  tone?: "on-ink" | "on-paper";
  /** Applies the staggered reveal delay chain to the rows. */
  stagger?: boolean;
  className?: string;
}

/**
 * A numbered, rule-separated list of capabilities — the system's answer to a
 * card grid. Rules top and bottom of every row make it read as one continuous
 * table rather than a set of boxes.
 */
export function CapabilityList({
  items = [],
  children,
  tone = "on-ink",
  stagger = true,
  className,
}: CapabilityListProps) {
  return (
    <div
      className={cx(
        "an-capability-list",
        tone === "on-paper" && "an-capability-list--on-paper",
        stagger && "an-stagger",
        className
      )}
    >
      {children ??
        items.map((item) => (
          <CapabilityItem key={item.number} number={item.number} title={item.title}>
            {item.text}
          </CapabilityItem>
        ))}
    </div>
  );
}
