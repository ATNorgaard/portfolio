"use client";

import * as React from "react";

import { Kicker } from "@/design-system/components/typography/eyebrow";
import { Wordmark } from "@/design-system/components/typography/glyphs";
import { MaskReveal } from "@/design-system/components/motion/mask-reveal";
import { Reveal } from "@/design-system/components/motion/reveal";
import { ParallaxImage } from "@/design-system/components/motion/parallax";
import { Container, Section, type Tone } from "@/design-system/components/blocks/section";
import { cn } from "@/design-system/lib/utils";

/**
 * PageHero — the inner-page opener: the brand in small caps, the page title
 * enormous, a "©year · scroll to explore" note, and an optional strip of
 * four photographs that drift as you scroll past.
 */
function PageHero({
  brand,
  title,
  year,
  note,
  images,
  tone = "paper",
  className,
}: {
  brand: string;
  title: string;
  year?: string;
  note?: string;
  images?: { src: string; alt: string }[];
  tone?: Tone;
  className?: string;
}) {
  return (
    <Section tone={tone} padded={false} className={cn("pt-32 md:pt-40", className)}>
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Reveal effect="fade">
            <Wordmark className="font-mono text-micro font-medium uppercase tracking-label">{brand}</Wordmark>
          </Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h1 className="max-w-full break-words text-display font-black uppercase leading-none">
              <MaskReveal>{title}</MaskReveal>
            </h1>
            {(year || note) && (
              <Reveal effect="fade" delay={0.5} className="pb-[0.4em]">
                <Kicker>
                  {year && <>©{year}</>}
                  {year && note && " "}
                  {note && <span className="text-foreground/50">({note})</span>}
                </Kicker>
              </Reveal>
            )}
          </div>
        </div>
      </Container>
      {images && images.length > 0 && (
        <div className="mt-10 grid grid-cols-2 gap-2 px-2 md:grid-cols-4">
          {images.map((img, i) => (
            <Reveal key={i} effect="scale" delay={i * 0.08} className="aspect-[4/3]">
              <ParallaxImage src={img.src} alt={img.alt} speed={50 + i * 15} className="size-full rounded-md" />
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}

export { PageHero };
