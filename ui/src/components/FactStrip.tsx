import type { ReactNode } from "react";
import { cx } from "../cx.js";
import { Fact } from "./Fact.js";

export interface FactEntry {
  label: string;
  value: string;
  detail?: string;
}

export interface FactStripProps {
  /** Cells to render. Ignored when `children` is provided. */
  items?: FactEntry[];
  children?: ReactNode;
  /**
   * Fixed cell count per row. Leave it unset for the responsive default —
   * two cells, stacking to one below 800px. Setting it pins that count at
   * every width.
   */
  columns?: number;
  stagger?: boolean;
  className?: string;
}

/**
 * A full-width ink panel dropped at the end of a paper section, carrying the
 * facts that would otherwise clutter the prose — education, certifications,
 * credentials. Cells are divided by hairlines and stack below 800px.
 */
export function FactStrip({
  items = [],
  children,
  columns,
  stagger = true,
  className,
}: FactStripProps) {
  return (
    <div
      className={cx("an-fact-strip", stagger && "an-stagger", className)}
      style={columns === undefined ? undefined : ({ "--an-fact-columns": columns } as never)}
    >
      {children ??
        items.map((item) => (
          <Fact key={item.label} label={item.label} value={item.value} detail={item.detail} />
        ))}
    </div>
  );
}
