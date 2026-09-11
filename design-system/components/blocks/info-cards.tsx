import * as React from "react";

import { Kicker } from "@/design-system/components/typography/eyebrow";
import { RevealGroup, RevealItem } from "@/design-system/components/motion/reveal";
import { cn } from "@/design-system/lib/utils";

/**
 * InfoCards — the contact page's 2×2 of muted tiles: a label on top, the
 * value (address, hours, phone, email) below.
 */
function InfoCards({
  items,
  className,
}: {
  items: { label: string; value: React.ReactNode; href?: string }[];
  className?: string;
}) {
  return (
    <RevealGroup stagger={0.08} className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {items.map((item) => {
        const Comp = item.href ? "a" : "div";
        return (
          <RevealItem key={item.label} effect="up">
            <Comp
              href={item.href}
              className={cn(
                "flex min-h-[140px] flex-col justify-between gap-6 rounded-md bg-muted p-5 text-foreground",
                item.href && "transition-colors hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <Kicker className="text-inherit opacity-70">{item.label}</Kicker>
              <span className="text-sm font-semibold uppercase leading-snug">{item.value}</span>
            </Comp>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}

export { InfoCards };
