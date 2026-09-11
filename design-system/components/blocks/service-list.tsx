"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";

import { Badge } from "@/design-system/components/ui/badge";
import { Button, ButtonTile } from "@/design-system/components/ui/button";
import { Kicker } from "@/design-system/components/typography/eyebrow";
import { Heading } from "@/design-system/components/typography/heading";
import { RevealGroup, RevealItem } from "@/design-system/components/motion/reveal";
import { cn } from "@/design-system/lib/utils";

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  tags?: string[];
  image: { src: string; alt: string };
  href?: string;
}

/**
 * ServiceList — the numbered service rows. Hovering a row turns its title
 * lime and swaps the photograph on the right; the first row is active by
 * default so the list never looks empty. Below `md` every row shows its
 * own image.
 */
function ServiceList({
  items,
  ctaLabel,
  className,
}: {
  items: ServiceItem[];
  ctaLabel?: string;
  className?: string;
}) {
  const [active, setActive] = React.useState(0);

  return (
    <RevealGroup stagger={0.1} className={cn("flex flex-col border-t border-border", className)}>
      {items.map((item, i) => {
        const isActive = i === active;
        const Title = item.href ? "a" : "div";
        return (
          <RevealItem key={item.number} effect="up">
            <div
              onMouseEnter={() => setActive(i)}
              onFocusCapture={() => setActive(i)}
              data-active={isActive || undefined}
              className="group/row grid gap-6 border-b border-border py-8 md:grid-cols-[120px_1fr_minmax(240px,0.32fr)] md:gap-10 md:py-10"
            >
              <Kicker className="flex items-center gap-2 self-start pt-2">
                <span className={cn("size-1.5 rounded-full transition-colors", isActive ? "bg-accent-strong" : "bg-border")} />
                {item.number}
              </Kicker>

              <div className="flex flex-col gap-4">
                <Title
                  href={item.href}
                  className={cn(
                    "block w-fit transition-colors duration-300",
                    isActive ? "text-accent-strong" : "text-foreground",
                  )}
                >
                  <Heading as="h3" size="title" className="text-inherit">
                    {item.title}
                  </Heading>
                </Title>
                <p className="max-w-[48ch] text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                {item.tags && (
                  <ul className="flex flex-wrap gap-2 pt-1">
                    {item.tags.map((t) => (
                      <li key={t}>
                        <Badge variant="chip">{t}</Badge>
                      </li>
                    ))}
                  </ul>
                )}
                {ctaLabel && item.href && (
                  <Button asChild size="sm" variant="outline" className="mt-2 w-fit">
                    <a href={item.href}>
                      {ctaLabel}
                      <ButtonTile className="size-6" />
                    </a>
                  </Button>
                )}
              </div>

              {/* mobile: every image; desktop: only the active one */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-muted md:hidden">
                <img src={item.image.src} alt={item.image.alt} className="size-full object-cover" />
              </div>
              <div className="relative hidden aspect-[4/3] md:block">
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key={item.number}
                      initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 overflow-hidden rounded-md bg-muted"
                    >
                      <img src={item.image.src} alt={item.image.alt} className="size-full object-cover" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}

export { ServiceList };
