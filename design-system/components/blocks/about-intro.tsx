"use client";

import * as React from "react";

import { Card, CardContent } from "@/design-system/components/ui/card";
import { Separator } from "@/design-system/components/ui/separator";
import { Eyebrow } from "@/design-system/components/typography/eyebrow";
import { Heading } from "@/design-system/components/typography/heading";
import { Asterisk } from "@/design-system/components/typography/glyphs";
import { Stat } from "@/design-system/components/typography/stat";
import { WordReveal } from "@/design-system/components/motion/word-reveal";
import { Reveal } from "@/design-system/components/motion/reveal";
import { Parallax } from "@/design-system/components/motion/parallax";
import { Container, Section, type Tone } from "@/design-system/components/blocks/section";

export interface AboutIntroProps {
  id?: string;
  eyebrow: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  stats: { value: number; suffix?: string; label: string; text?: string }[];
  images: [{ src: string; alt: string }, { src: string; alt: string }];
  tone?: Tone;
}

/**
 * AboutIntro — the "my impact" composition: two-tone heading top-left, a
 * slowly turning asterisk beside it, two photographs floating at different
 * depths, and a stats card on the right.
 */
function AboutIntro({ id, eyebrow, title, intro, stats, images, tone = "paper" }: AboutIntroProps) {
  return (
    <Section id={id} tone={tone}>
      <Container className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <Reveal effect="fade" duration={0.6}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <div className="flex items-start gap-8">
            <Heading size="headline" className="max-w-[12ch]">
              <WordReveal>{title}</WordReveal>
            </Heading>
            <Reveal effect="scale" delay={0.5} className="hidden shrink-0 pt-4 md:block">
              <Asterisk spin className="size-14 text-heading-muted" />
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 md:mt-20">
            <Parallax speed={-40} className="relative">
              <Frame>
                <Reveal effect="scale" className="aspect-[4/5]">
                  <img src={images[0].src} alt={images[0].alt} className="size-full object-cover" />
                </Reveal>
              </Frame>
            </Parallax>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:col-span-5 md:pt-6">
          <Parallax speed={60} className="self-end">
            <Reveal effect="scale" delay={0.2} className="w-[clamp(110px,10vw,150px)] rotate-2 overflow-hidden rounded-sm">
              <img src={images[1].src} alt={images[1].alt} className="aspect-[4/5] size-full object-cover" />
            </Reveal>
          </Parallax>

          <Reveal effect="up" delay={0.1}>
            <p className="max-w-[40ch] font-mono text-[0.68rem] uppercase leading-relaxed tracking-label text-muted-foreground">
              {intro}
            </p>
          </Reveal>

          <Reveal effect="up" delay={0.2}>
            <Card>
              <CardContent className="flex flex-col gap-6 py-6">
                {stats.map((s, i) => (
                  <React.Fragment key={s.label}>
                    {i > 0 && <Separator />}
                    <Stat {...s} />
                  </React.Fragment>
                ))}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/** Corner-marked frame — the crop marks around a photograph. */
function Frame({ children }: { children: React.ReactNode }) {
  const corner = "absolute size-3 border-foreground/40";
  return (
    <div className="relative p-3">
      <span aria-hidden className={`${corner} left-0 top-0 border-l border-t`} />
      <span aria-hidden className={`${corner} right-0 top-0 border-r border-t`} />
      <span aria-hidden className={`${corner} bottom-0 left-0 border-b border-l`} />
      <span aria-hidden className={`${corner} bottom-0 right-0 border-b border-r`} />
      {children}
    </div>
  );
}

export { AboutIntro, Frame };
