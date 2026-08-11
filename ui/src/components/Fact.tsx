import type { ReactNode } from "react";
import { cx } from "../cx.js";

export interface FactProps {
  /** Lime mono label pinned to the top of the cell. */
  label: string;
  /** The fact itself, set large. */
  value: ReactNode;
  /** Supporting detail under the value — institution, dates, caveat. */
  detail?: ReactNode;
  className?: string;
}

/**
 * One cell of a FactStrip. The label sits at the top and the value is pushed
 * to the bottom by `margin-bottom: auto`, so a row of cells aligns on the
 * value line no matter how long each label runs.
 */
export function Fact({ label, value, detail, className }: FactProps) {
  return (
    <div className={cx("an-fact", className)}>
      <span>{label}</span>
      <strong>{value}</strong>
      {detail ? <p>{detail}</p> : null}
    </div>
  );
}
