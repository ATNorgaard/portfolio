"use client";

import * as React from "react";

import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/design-system/components/ui/avatar";
import { StarRating } from "@/design-system/components/typography/glyphs";
import { Stat } from "@/design-system/components/typography/stat";
import { RevealGroup, RevealItem } from "@/design-system/components/motion/reveal";
import { cn } from "@/design-system/lib/utils";

/**
 * StatsRow — three counting figures in a row, with an optional trust cluster
 * (overlapping avatars + stars + label) at the left.
 */
function StatsRow({
  stats,
  trust,
  className,
}: {
  stats: { value: number; suffix?: string; label: string; text?: string }[];
  trust?: { avatars: string[]; label: string; rating?: number };
  className?: string;
}) {
  return (
    <RevealGroup
      stagger={0.1}
      className={cn("grid items-end gap-10 border-t border-border pt-10 md:grid-cols-[minmax(0,0.3fr)_1fr]", className)}
    >
      {trust && (
        <RevealItem effect="up" className="flex items-center gap-4">
          <AvatarGroup>
            {trust.avatars.map((src, i) => (
              <Avatar key={i} className="size-10">
                <AvatarImage src={src} alt="" />
                <AvatarFallback>{i + 1}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
          <div className="flex flex-col gap-1">
            <StarRating rating={trust.rating ?? 5} />
            <span className="text-xs font-semibold">{trust.label}</span>
          </div>
        </RevealItem>
      )}
      <div className={cn("grid gap-8 sm:grid-cols-3", !trust && "md:col-span-2")}>
        {stats.map((s) => (
          <RevealItem key={s.label} effect="up">
            <Stat layout="stack" {...s} />
          </RevealItem>
        ))}
      </div>
    </RevealGroup>
  );
}

export { StatsRow };
