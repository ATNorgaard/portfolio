"use client";

import * as React from "react";
import { motion, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/design-system/components/ui/sheet";
import { Cross, GhostText } from "@/design-system/components/typography/glyphs";
import { Kicker } from "@/design-system/components/typography/eyebrow";
import { cn } from "@/design-system/lib/utils";

export interface MenuOverlayProps {
  trigger: React.ReactNode;
  items: { label: string; href: string }[];
  contact?: { label: string; value: string; href?: string }[];
  hours?: { label: string; value: string };
  socials?: { label: string; href: string }[];
  /** Optional dimmed photograph behind the left half. */
  backdropSrc?: string;
  title?: string;
}

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * MenuOverlay — the full-height ink menu that slides in from the right.
 * Giant uppercase links on the left, each ending in a `+`; on hover the link
 * turns lime and a ghost of its own label swells behind it. Contact details,
 * opening hours and socials sit in the right column.
 */
function MenuOverlay({ trigger, items, contact, hours, socials, backdropSrc, title = "Menu" }: MenuOverlayProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-none gap-0 border-l-0 p-0 sm:max-w-none md:w-[min(100vw,1180px)]"
      >
        <SheetTitle className="sr-only">{title}</SheetTitle>
        <SheetDescription className="sr-only">Navigation og kontakt</SheetDescription>

        {backdropSrc && (
          <img
            src={backdropSrc}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-[46%] object-cover opacity-20 grayscale md:block"
          />
        )}
        <div className="relative grid h-full grid-cols-1 gap-10 overflow-y-auto px-gutter pb-10 pt-24 md:grid-cols-[1fr_minmax(260px,0.42fr)] md:gap-16">
          <motion.nav
            aria-label="Menu"
            initial="hidden"
            animate="visible"
            variants={listVariants}
            className="flex flex-col"
          >
            {items.map((item) => (
              <motion.div key={item.href} variants={itemVariants}>
                <SheetClose asChild>
                  <a
                    href={item.href}
                    className="group/item relative flex items-center justify-between gap-6 border-b border-border py-2 md:py-3"
                  >
                    <GhostText className="left-0 top-1/2 -translate-y-1/2 text-[2.6em] opacity-0 transition-[opacity,transform] duration-500 ease-out-expo group-hover/item:opacity-100 group-hover/item:translate-x-6">
                      {item.label}
                    </GhostText>
                    <span className="relative text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-none tracking-tight text-foreground transition-[color,transform] duration-500 ease-out-expo group-hover/item:translate-x-3 group-hover/item:text-accent">
                      {item.label}
                    </span>
                    <Cross className="relative size-4 shrink-0 text-foreground/50 transition-transform duration-500 ease-out-expo group-hover/item:rotate-90 group-hover/item:text-accent" />
                  </a>
                </SheetClose>
              </motion.div>
            ))}
          </motion.nav>

          <motion.aside
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } } }}
            className="flex flex-col gap-8 md:pt-6"
          >
            {contact?.map((c) => (
              <motion.div key={c.label} variants={itemVariants} className="flex flex-col gap-2">
                <Kicker>{c.label}</Kicker>
                {c.href ? (
                  <a href={c.href} className="text-lg font-medium text-foreground transition-colors hover:text-accent">
                    {c.value}
                  </a>
                ) : (
                  <span className="text-lg font-medium text-foreground">{c.value}</span>
                )}
              </motion.div>
            ))}
            {hours && (
              <motion.div variants={itemVariants} className="mt-auto flex flex-col gap-2 border-t border-border pt-8">
                <Kicker>{hours.label}</Kicker>
                <span className="text-base font-medium text-foreground">{hours.value}</span>
              </motion.div>
            )}
            {socials && (
              <motion.ul variants={itemVariants} className="flex flex-wrap gap-x-5 gap-y-2">
                {socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-micro uppercase tracking-label text-foreground/70 transition-colors hover:text-accent"
                    >
                      {s.label}
                      <ArrowUpRight className="size-3" />
                    </a>
                  </li>
                ))}
              </motion.ul>
            )}
          </motion.aside>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export { MenuOverlay };
