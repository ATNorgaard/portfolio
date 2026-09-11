"use client";

import * as React from "react";

import { CountUp } from "@/design-system/components/motion/count-up";
import { Kicker } from "@/design-system/components/typography/eyebrow";
import { cn } from "@/design-system/lib/utils";

/**
 * Stat — a big figure with a dotted label and a short line of text. The
 * figure counts up when it scrolls into view. Layouts: `stack` (figure above
 * label, for a stats row) or `row` (figure left, label + text right, as in the
 * about card).
 */
function Stat({
  value,
  suffix,
  label,
  text,
  layout = "row",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  value: number;
  suffix?: string;
  label: string;
  text?: string;
  layout?: "row" | "stack";
}) {
  return (
    <div
      data-slot="stat"
      className={cn("flex gap-5", layout === "stack" ? "flex-col" : "items-start", className)}
      {...props}
    >
      <div
        className={cn(
          "font-bold leading-none tracking-tight text-foreground",
          layout === "stack" ? "text-headline" : "min-w-[3.2ch] text-title",
        )}
      >
        <CountUp value={value} suffix={suffix} />
      </div>
      <div className="flex flex-col gap-1.5 pt-1">
        <Kicker className="flex items-center gap-2 text-foreground">
          <span aria-hidden className="size-1.5 rounded-full bg-accent-strong" />
          {label}
        </Kicker>
        {text && <p className="max-w-[28ch] text-xs leading-relaxed text-muted-foreground">{text}</p>}
      </div>
    </div>
  );
}

export { Stat };
