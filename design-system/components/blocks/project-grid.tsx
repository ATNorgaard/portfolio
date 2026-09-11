import * as React from "react";
import { ArrowUpRight } from "lucide-react";

import { Button, ButtonTile } from "@/design-system/components/ui/button";
import { Kicker } from "@/design-system/components/typography/eyebrow";
import { ImageReveal } from "@/design-system/components/motion/mask-reveal";
import { Reveal } from "@/design-system/components/motion/reveal";
import { cn } from "@/design-system/lib/utils";

export interface ProjectItem {
  title: string;
  category: string;
  image: { src: string; alt: string };
  href?: string;
  /** `portrait` (4:5) or `landscape` (4:3). Alternates automatically if unset. */
  ratio?: "portrait" | "landscape";
}

/**
 * ProjectCard — a photograph that un-clips into view and zooms slightly on
 * hover, with a caption row: dot + title, category, arrow.
 */
function ProjectCard({ title, category, image, href = "#", ratio = "portrait", className }: ProjectItem & { className?: string }) {
  return (
    <a
      href={href}
      data-slot="project-card"
      className={cn("group/project flex flex-col gap-4", className)}
    >
      <ImageReveal className={cn("rounded-md bg-muted", ratio === "portrait" ? "aspect-[4/5]" : "aspect-[4/3]")}>
        <img
          src={image.src}
          alt={image.alt}
          className="size-full object-cover transition-transform duration-700 ease-out-expo group-hover/project:scale-[1.04]"
        />
      </ImageReveal>
      <div className="flex items-center justify-between gap-4 border-b border-border pb-3">
        <Kicker className="flex items-center gap-2 text-foreground">
          <span className="size-1.5 rounded-full bg-accent-strong" />
          {title}
        </Kicker>
        <span className="flex items-center gap-3">
          <Kicker>/{category}</Kicker>
          <ArrowUpRight className="size-4 text-muted-foreground transition-[transform,color] duration-300 ease-out-expo group-hover/project:-translate-y-0.5 group-hover/project:translate-x-0.5 group-hover/project:text-accent-strong" />
        </span>
      </div>
    </a>
  );
}

/**
 * ProjectGrid — two staggered columns, the right one dropped by a beat so
 * the pairs never line up. Ratios alternate portrait / landscape.
 */
function ProjectGrid({
  items,
  cta,
  className,
}: {
  items: ProjectItem[];
  cta?: { label: string; href: string };
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-14", className)}>
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 md:gap-x-12 [&>*:nth-child(even)]:md:translate-y-24">
        {items.map((item, i) => (
          <ProjectCard key={item.title} ratio={item.ratio ?? (i % 2 === 0 ? "portrait" : "landscape")} {...item} />
        ))}
      </div>
      {cta && (
        <Reveal effect="up" className="md:pt-24">
          <Button asChild size="lg">
            <a href={cta.href}>
              {cta.label}
              <ButtonTile />
            </a>
          </Button>
        </Reveal>
      )}
    </div>
  );
}

export { ProjectGrid, ProjectCard };
