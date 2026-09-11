"use client";

import * as React from "react";
import { ArrowUpRight, Clock, FileType, RefreshCw } from "lucide-react";

import { Badge } from "@/design-system/components/ui/badge";
import { Button, ButtonTile } from "@/design-system/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/design-system/components/ui/tabs";
import { Spark } from "@/design-system/components/typography/glyphs";
import { Reveal } from "@/design-system/components/motion/reveal";
import { cn } from "@/design-system/lib/utils";

export interface Plan {
  packageLabel: string;
  packageName: string;
  details: { label: string; value: string; icon?: React.ReactNode }[];
  priceLabel: string;
  price: string;
  per: string;
  features: string[];
  guarantee: { title: string; text: string };
  cta: { label: string; href: string };
}

export interface PricingOption {
  id: string;
  label: string;
  plan: Plan;
}

const defaultIcons = [<Clock key="c" className="size-3.5" />, <RefreshCw key="r" className="size-3.5" />, <FileType key="f" className="size-3.5" />];

/**
 * Pricing — a toggle (monthly / project) above two ink cards: the package
 * summary on the left, the price and feature list on the right, closing on
 * a full-width lime call to action.
 */
function Pricing({ options, className }: { options: PricingOption[]; className?: string }) {
  return (
    <Tabs defaultValue={options[0]?.id} className={cn("gap-8", className)}>
      <Reveal effect="fade" className="flex justify-end">
        <TabsList>
          {options.map((o) => (
            <TabsTrigger key={o.id} value={o.id}>
              {o.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Reveal>

      {options.map((o) => (
        <TabsContent key={o.id} value={o.id}>
          <PlanCards plan={o.plan} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

function PlanCards({ plan }: { plan: Plan }) {
  return (
    <div className="dark grid gap-4 md:grid-cols-[minmax(0,0.38fr)_1fr]">
      <Reveal effect="up" className="flex h-full flex-col justify-between gap-16 rounded-lg bg-background p-6 text-foreground">
        <div className="flex flex-col items-start gap-4">
          <Badge variant="outline" className="border-foreground/20 text-foreground/70">
            {plan.packageLabel}
          </Badge>
          <h3 className="text-base font-semibold uppercase">{plan.packageName}</h3>
        </div>
        <ul className="flex flex-col">
          {plan.details.map((d, i) => (
            <li
              key={d.label}
              className="flex items-center justify-between gap-4 border-t border-border py-3 font-mono text-[0.62rem] uppercase tracking-label"
            >
              <span className="flex items-center gap-2 text-foreground/60">
                {d.icon ?? defaultIcons[i % defaultIcons.length]}
                {d.label}
              </span>
              <span className="text-foreground">{d.value}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal effect="up" delay={0.1} className="flex h-full flex-col gap-10 rounded-lg bg-background p-6 text-foreground">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col items-start gap-4">
            <Badge variant="outline" className="border-foreground/20 text-foreground/70">
              {plan.priceLabel}
            </Badge>
            <div className="flex items-baseline gap-1">
              <span className="text-headline font-black leading-none tracking-tight">{plan.price}</span>
              <span className="font-mono text-micro uppercase tracking-label text-foreground/60">/{plan.per}</span>
            </div>
          </div>
          <ul className="flex flex-col gap-2.5 md:pt-2">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs leading-snug">
                <ArrowUpRight className="mt-px size-3.5 shrink-0 text-accent" strokeWidth={2.5} />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Spark className="size-4 text-accent" />
            <h4 className="pt-2 text-xs font-semibold uppercase tracking-tight">{plan.guarantee.title}</h4>
            <p className="max-w-[48ch] text-xs leading-relaxed text-foreground/60">{plan.guarantee.text}</p>
          </div>
          <Button asChild variant="accent" size="lg" className="w-full justify-between">
            <a href={plan.cta.href}>
              {plan.cta.label}
              <ButtonTile tone="contrast" />
            </a>
          </Button>
        </div>
      </Reveal>
    </div>
  );
}

export { Pricing, PlanCards };
