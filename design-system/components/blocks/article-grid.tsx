import * as React from "react";

import { Badge } from "@/design-system/components/ui/badge";
import { Button, ButtonTile } from "@/design-system/components/ui/button";
import { Kicker } from "@/design-system/components/typography/eyebrow";
import { RevealGroup, RevealItem } from "@/design-system/components/motion/reveal";
import { Reveal } from "@/design-system/components/motion/reveal";
import { cn } from "@/design-system/lib/utils";

export interface Article {
  title: string;
  category: string;
  image: { src: string; alt: string };
  author: string;
  date: string;
  href?: string;
}

/**
 * ArticleCard — a photograph with the category pinned to its top-left
 * corner, an uppercase title and a two-column meta row. `featured` makes
 * the card span two columns and two rows in the grid.
 */
function ArticleCard({
  title,
  category,
  image,
  author,
  date,
  href = "#",
  featured = false,
  labels = { author: "Skrevet af", date: "Udgivet" },
  className,
}: Article & { featured?: boolean; labels?: { author: string; date: string }; className?: string }) {
  return (
    <a
      href={href}
      data-slot="article-card"
      className={cn("group/article flex flex-col gap-4 rounded-lg border border-border bg-card p-3 transition-colors hover:border-foreground/30", className)}
    >
      <div className={cn("relative overflow-hidden rounded-md bg-muted", featured ? "aspect-[16/10]" : "aspect-[4/3]")}>
        <img
          src={image.src}
          alt={image.alt}
          className="size-full object-cover transition-transform duration-700 ease-out-expo group-hover/article:scale-[1.04]"
        />
        <Badge variant="accent" className="absolute left-3 top-3">
          {category}
        </Badge>
      </div>
      <h3
        className={cn(
          "text-balance px-1 font-semibold uppercase leading-tight tracking-tight transition-colors group-hover/article:text-accent-strong",
          featured ? "text-lg md:text-2xl" : "text-sm",
        )}
      >
        {title}
      </h3>
      <div className="mt-auto grid grid-cols-2 gap-4 border-t border-border px-1 pb-1 pt-3">
        <div className="flex flex-col gap-1">
          <Kicker className="text-[0.6rem]">{labels.author}</Kicker>
          <span className="text-xs font-medium">{author}</span>
        </div>
        <div className="flex flex-col gap-1">
          <Kicker className="text-[0.6rem]">{labels.date}</Kicker>
          <span className="text-xs font-medium">{date}</span>
        </div>
      </div>
    </a>
  );
}

/**
 * ArticleGrid — four columns with the first article featured (2×2). Pass
 * `featureFirst={false}` for a flat grid, as on an archive page.
 */
function ArticleGrid({
  items,
  featureFirst = true,
  cta,
  className,
}: {
  items: Article[];
  featureFirst?: boolean;
  cta?: { label: string; href: string };
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-12", className)}>
      <RevealGroup stagger={0.08} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((a, i) => {
          const featured = featureFirst && i === 0;
          return (
            <RevealItem key={a.title} effect="up" className={cn(featured && "sm:col-span-2 sm:row-span-2")}>
              <ArticleCard featured={featured} {...a} className="h-full" />
            </RevealItem>
          );
        })}
      </RevealGroup>
      {cta && (
        <Reveal effect="fade" className="flex justify-center">
          <Button asChild variant="outline">
            <a href={cta.href}>
              {cta.label}
              <ButtonTile className="size-6" />
            </a>
          </Button>
        </Reveal>
      )}
    </div>
  );
}

export { ArticleGrid, ArticleCard };
