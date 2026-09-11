import * as React from "react";

import { Spark } from "@/design-system/components/typography/glyphs";
import { RevealGroup, RevealItem } from "@/design-system/components/motion/reveal";
import { cn } from "@/design-system/lib/utils";

export interface ProcessStep {
  title: string;
  text: string;
  icon?: React.ReactNode;
}

/**
 * ProcessCards — four ink cards in a row, each with a lime spark, an
 * uppercase title and a line of text. Always ink, whatever the section tone.
 */
function ProcessCards({ steps, className }: { steps: ProcessStep[]; className?: string }) {
  return (
    <RevealGroup stagger={0.1} className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {steps.map((step, i) => (
        <RevealItem key={step.title} effect="up">
          <div className="dark group/step flex h-full min-h-[280px] flex-col justify-between gap-10 rounded-lg bg-background p-6 text-foreground transition-transform duration-500 ease-out-expo hover:-translate-y-1">
            <div className="flex items-start justify-between">
              <span className="text-accent transition-transform duration-500 ease-out-expo group-hover/step:rotate-90">
                {step.icon ?? <Spark className="size-5" />}
              </span>
              <span className="font-mono text-[0.62rem] tracking-label text-foreground/40">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-tight">{step.title}</h3>
              <p className="text-xs leading-relaxed text-foreground/60">{step.text}</p>
            </div>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export { ProcessCards };
