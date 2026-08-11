import type { ReactNode } from "react";
import { cx } from "../cx.js";
import { TimelineItem } from "./TimelineItem.js";

export interface TimelineEntry {
  period: string;
  title: string;
  role?: string;
  text: string;
}

export interface TimelineProps {
  /** Entries, newest first. Ignored when `children` is provided. */
  items?: TimelineEntry[];
  children?: ReactNode;
  tone?: "on-paper" | "on-ink";
  stagger?: boolean;
  className?: string;
}

/**
 * A chronology set as a rule-divided table rather than a decorated spine:
 * period, organisation, description. Reads as a CV without looking like one.
 */
export function Timeline({
  items = [],
  children,
  tone = "on-paper",
  stagger = true,
  className,
}: TimelineProps) {
  return (
    <div
      className={cx(
        "an-timeline",
        tone === "on-ink" && "an-timeline--on-ink",
        stagger && "an-stagger",
        className
      )}
    >
      {children ??
        items.map((item) => (
          <TimelineItem
            key={item.period + item.title}
            period={item.period}
            title={item.title}
            role={item.role}
          >
            {item.text}
          </TimelineItem>
        ))}
    </div>
  );
}
