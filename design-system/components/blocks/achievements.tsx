import * as React from "react";

import { Kicker } from "@/design-system/components/typography/eyebrow";
import { Asterisk, Spark } from "@/design-system/components/typography/glyphs";
import { RevealGroup, RevealItem } from "@/design-system/components/motion/reveal";
import { cn } from "@/design-system/lib/utils";

export interface Achievement {
  title: string;
  meta: { label: string; value: string }[];
  icon?: React.ReactNode;
}

/**
 * AchievementCard — an award: a large icon tile on the left, the award title
 * and its meta rows (achievement, year) on the right. Designed for an ink
 * section, where the tile is one step lighter than the card.
 */
function AchievementCard({ title, meta, icon, className }: Achievement & { className?: string }) {
  return (
    <div
      data-slot="achievement-card"
      className={cn("group/award grid gap-6 rounded-lg border border-border bg-card p-4 text-card-foreground sm:grid-cols-[120px_1fr]", className)}
    >
      <div className="flex aspect-square items-center justify-center rounded-md bg-muted text-foreground/50 transition-colors duration-500 group-hover/award:text-accent">
        {icon ?? <Asterisk className="size-8 transition-transform duration-700 ease-out-expo group-hover/award:rotate-45" />}
      </div>
      <div className="flex flex-col justify-between gap-6 py-1">
        <h3 className="max-w-[20ch] text-sm font-semibold uppercase leading-snug">{title}</h3>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-3">
          {meta.map((m) => (
            <div key={m.label} className="flex flex-col gap-1 border-t border-border pt-2">
              <dt>
                <Kicker className="text-[0.6rem]">{m.label}</Kicker>
              </dt>
              <dd className="text-xs font-medium">{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

/** Achievements — the two-column grid of award cards. */
function Achievements({ items, className }: { items: Achievement[]; className?: string }) {
  const icons = [<Asterisk key="a" className="size-8" />, <Spark key="s" className="size-7" />];
  return (
    <RevealGroup stagger={0.1} className={cn("grid gap-4 md:grid-cols-2", className)}>
      {items.map((item, i) => (
        <RevealItem key={item.title} effect="up">
          <AchievementCard icon={item.icon ?? icons[i % icons.length]} {...item} className="h-full" />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export { Achievements, AchievementCard };
