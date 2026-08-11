import type { ReactNode } from "react";
import { cx } from "../cx.js";
import { CaseCard } from "./CaseCard.js";

export interface CaseEntry {
  tag?: string;
  title: string;
  text: string;
}

export interface CaseGridProps {
  /**
   * Cases to render. Ordinals are generated from position — `01`, `02`, … —
   * so the grid stays numbered when entries are reordered.
   */
  items?: CaseEntry[];
  children?: ReactNode;
  /**
   * Fixed column count. Leave it unset for the responsive default, which is
   * what the page uses: 3 columns, stepping to 2 at 1080px and 1 at 560px.
   * Setting it pins that count at every width.
   */
  columns?: number;
  stagger?: boolean;
  className?: string;
}

/**
 * The project grid: cards separated by shared hairlines rather than gaps, so
 * the whole block reads as one ruled table until a card is hovered and lifts
 * out of it.
 */
export function CaseGrid({
  items = [],
  children,
  columns,
  stagger = true,
  className,
}: CaseGridProps) {
  return (
    <div
      className={cx("an-case-grid", stagger && "an-stagger", className)}
      style={columns === undefined ? undefined : ({ "--an-case-columns": columns } as never)}
    >
      {children ??
        items.map((item, index) => (
          <CaseCard
            key={item.title}
            number={String(index + 1).padStart(2, "0")}
            tag={item.tag}
            title={item.title}
          >
            {item.text}
          </CaseCard>
        ))}
    </div>
  );
}
