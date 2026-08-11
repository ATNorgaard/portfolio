import type { ReactNode } from "react";
import { cx } from "../cx.js";

export interface PageProps {
  children: ReactNode;
  className?: string;
}

/**
 * The root wrapper. It sets the paper ground, the Geist type stack, the lime
 * selection colour and the accent focus ring for everything inside it.
 *
 * Wrap every page in this. Components styled for the paper ground assume
 * these defaults are in place — without it they inherit whatever the host
 * page happens to define, which is the usual cause of an otherwise-correct
 * layout rendering in Times New Roman on a white background.
 */
export function Page({ children, className }: PageProps) {
  return <main className={cx("an-page", className)}>{children}</main>;
}
