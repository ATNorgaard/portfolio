"use client";

import * as React from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

import { Button, ButtonTile } from "@/design-system/components/ui/button";
import { Wordmark } from "@/design-system/components/typography/glyphs";
import { MenuOverlay, type MenuOverlayProps } from "@/design-system/components/blocks/menu-overlay";
import { Container, toneClass, type Tone } from "@/design-system/components/blocks/section";
import { cn } from "@/design-system/lib/utils";

export interface NavItem {
  label: string;
  href: string;
}

/**
 * SiteHeader — fixed over the hero, transparent at the top so it takes the
 * hero's tone, then compacts onto a translucent paper bar once the page
 * scrolls. Wordmark left, nav centre, a CTA and the menu button right.
 */
function SiteHeader({
  brand,
  items,
  cta,
  menu,
  tone = "accent",
  className,
}: {
  brand: React.ReactNode;
  items: NavItem[];
  cta?: { label: string; href: string };
  menu?: Omit<MenuOverlayProps, "trigger">;
  /** The tone of the section the header initially sits on. */
  tone?: Tone;
  className?: string;
}) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = React.useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 32));

  return (
    <header
      data-slot="site-header"
      data-scrolled={scrolled || undefined}
      className={cn(
        "fixed inset-x-0 top-0 z-40 text-foreground transition-[background-color,height,box-shadow,border-color] duration-500 ease-out-expo",
        scrolled
          ? "tone-paper h-16 border-b border-border bg-background/85 shadow-header backdrop-blur-md"
          : cn("h-20 border-b border-transparent bg-transparent", toneClass[tone]),
        className,
      )}
    >
      <Container className="flex h-full items-center justify-between gap-6">
        <a href="#top" className="shrink-0">
          {typeof brand === "string" ? <Wordmark>{brand}</Wordmark> : brand}
        </a>

        <nav aria-label="Primær" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group/nav relative font-mono text-micro uppercase tracking-label text-foreground/80 transition-colors hover:text-foreground"
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-accent-strong transition-transform duration-300 ease-out-expo group-hover/nav:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {cta && (
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href={cta.href}>
                {cta.label}
                <ButtonTile className="size-6" />
              </a>
            </Button>
          )}
          {menu && (
            <MenuOverlay
              {...menu}
              trigger={
                <button
                  type="button"
                  aria-label="Åbn menu"
                  className="group/burger flex size-11 flex-col items-end justify-center gap-1.5 rounded-md text-foreground transition-colors hover:bg-foreground/5"
                >
                  <span className="h-0.5 w-6 bg-current transition-all duration-300 ease-out-expo group-hover/burger:w-4" />
                  <span className="h-0.5 w-4 bg-current transition-all duration-300 ease-out-expo group-hover/burger:w-6" />
                </button>
              }
            />
          )}
        </div>
      </Container>
    </header>
  );
}

export { SiteHeader };
