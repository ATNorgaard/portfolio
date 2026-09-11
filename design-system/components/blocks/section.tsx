import * as React from "react";

import { Eyebrow, Lead } from "@/design-system/components/typography/eyebrow";
import { Heading } from "@/design-system/components/typography/heading";
import { WordReveal } from "@/design-system/components/motion/word-reveal";
import { Reveal } from "@/design-system/components/motion/reveal";
import { cn } from "@/design-system/lib/utils";

export type Tone = "paper" | "ink" | "accent";

const toneClass: Record<Tone, string> = {
  paper: "tone-paper",
  ink: "dark",
  accent: "tone-accent",
};

/**
 * Section — a full-bleed band with a tone. Every component inside re-reads
 * the semantic palette, so the same Card is white on paper and dark grey on
 * ink without any prop. Grounds alternate down a page: paper → ink → paper,
 * closing on one accent or ink CTA.
 */
function Section({
  tone = "paper",
  padded = true,
  className,
  ...props
}: React.ComponentProps<"section"> & { tone?: Tone; padded?: boolean }) {
  return (
    <section
      data-slot="section"
      data-tone={tone}
      className={cn(
        "relative bg-background text-foreground",
        toneClass[tone],
        padded && "py-section",
        className,
      )}
      {...props}
    />
  );
}

/** Container — the page column. 1440px max, the fluid gutter each side. */
function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="container" className={cn("mx-auto w-full max-w-[1440px] px-gutter", className)} {...props} />;
}

/**
 * SectionHeading — eyebrow + two-tone heading, with an optional intro that
 * sits top-right in small caps, the reference's recurring opener.
 */
function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "split",
  size = "headline",
  className,
  ...props
}: Omit<React.ComponentProps<"div">, "title"> & {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "split" | "left" | "center";
  size?: "display" | "headline" | "title";
}) {
  return (
    <div
      data-slot="section-heading"
      className={cn(
        "mb-16 grid gap-8",
        align === "split" && "md:grid-cols-[1fr_minmax(0,34ch)] md:items-end",
        align === "center" && "justify-items-center text-center",
        className,
      )}
      {...props}
    >
      <div className={cn("flex flex-col items-start", align === "center" && "items-center")}>
        {eyebrow && (
          <Reveal effect="fade" duration={0.6}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <Heading size={size} className="max-w-[14ch]">
          <WordReveal>{title}</WordReveal>
        </Heading>
      </div>
      {intro && (
        <Reveal effect="up" delay={0.25} className={cn(align === "split" && "md:justify-self-end md:text-right")}>
          {typeof intro === "string" ? (
            <p className="max-w-[40ch] font-mono text-[0.68rem] uppercase leading-relaxed tracking-label text-muted-foreground">
              {intro}
            </p>
          ) : (
            <Lead className="max-w-[46ch]">{intro}</Lead>
          )}
        </Reveal>
      )}
    </div>
  );
}

export { Section, Container, SectionHeading, toneClass };
