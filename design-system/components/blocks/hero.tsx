"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/design-system/components/ui/avatar";
import { Kicker } from "@/design-system/components/typography/eyebrow";
import { GhostText } from "@/design-system/components/typography/glyphs";
import { MaskReveal } from "@/design-system/components/motion/mask-reveal";
import { Reveal } from "@/design-system/components/motion/reveal";
import { Container, toneClass, type Tone } from "@/design-system/components/blocks/section";
import { cn } from "@/design-system/lib/utils";

export interface HeroProps {
  /** The display name — one word reads best at this size. */
  name: string;
  tagline: React.ReactNode;
  year?: string;
  portrait: { src: string; alt: string };
  /** The small tilted "polaroid" top-right: a featured project. */
  polaroid?: { src: string; alt: string; title: string; category: string; href?: string };
  /** The ink "let's talk" card bottom-right. */
  talkCard?: { avatarSrc?: string; name: string; role: string; label: string; href: string };
  tone?: Tone;
  /** Re-colour the portrait into the ground's hue (default on). */
  blend?: boolean;
  className?: string;
}

/**
 * Hero — full-viewport, on the accent ground. A faint grid, the name as a
 * huge watermark behind the portrait, the tagline top-left, the name again
 * bottom-left rising out of a mask, and two floating cards on the right.
 * The portrait and watermark drift at different speeds as the page scrolls.
 */
function Hero({ name, tagline, year, portrait, polaroid, talkCard, tone = "accent", blend = true, className }: HeroProps) {
  const ref = React.useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const ghostY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      data-slot="hero"
      className={cn(
        "grid-overlay relative flex min-h-svh flex-col overflow-hidden bg-background text-foreground",
        toneClass[tone],
        className,
      )}
      style={{ "--grid-size": "25%", "--grid-size-y": "33.333%" } as React.CSSProperties}
    >
      <motion.div style={{ y: reduce ? 0 : ghostY }} className="absolute inset-x-0 top-[6%] flex justify-center">
        <GhostText className="relative text-[24vw] leading-none">{name}</GhostText>
      </motion.div>

      <motion.div
        style={{ y: reduce ? 0 : portraitY, opacity: reduce ? 1 : fade }}
        // the blend mode lives on this wrapper: the transformed/faded group is
        // what composites against the hero ground, an <img> inside it would
        // only blend against the (transparent) wrapper itself
        className={cn("pointer-events-none absolute inset-x-0 bottom-0 flex justify-center", blend && "mix-blend-luminosity")}
      >
        <motion.img
          src={portrait.src}
          alt={portrait.alt}
          initial={{ opacity: 0, y: 60, scale: 1.04 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          // luminosity blend re-colours any photograph into the ground's hue, so
          // a B/W or warm portrait reads as part of the palette; the mask fades
          // the rectangular frame out at the foot and the sides
          className={cn(
            "h-[78svh] w-auto max-w-[min(90vw,720px)] object-cover object-top",
            "[mask-image:linear-gradient(to_bottom,black_70%,transparent_100%),linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [mask-composite:intersect]",
          )}
        />
      </motion.div>

      <Container className="relative z-10 flex flex-1 flex-col justify-between pb-10 pt-28">
        <div className="flex items-start justify-between gap-8">
          <Reveal effect="blur" delay={0.3} className="max-w-[30ch]">
            <p className="font-mono text-[0.68rem] uppercase leading-relaxed tracking-label text-foreground/80">
              {tagline}
            </p>
          </Reveal>

          {polaroid && (
            <Reveal effect="scale" delay={0.6} className="hidden sm:block">
              <a
                href={polaroid.href ?? "#"}
                className="tone-paper group/polaroid block w-[clamp(150px,16vw,220px)] rotate-3 rounded-md bg-card p-2 text-card-foreground shadow-lift transition-transform duration-500 ease-out-expo hover:rotate-0 hover:scale-[1.03]"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src={polaroid.src}
                    alt={polaroid.alt}
                    className="size-full object-cover transition-transform duration-700 ease-out-expo group-hover/polaroid:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 px-1 pb-1 pt-2.5">
                  <Kicker className="flex items-center gap-1.5 text-foreground">
                    <span className="size-1.5 rounded-full bg-accent-strong" />
                    {polaroid.title}
                  </Kicker>
                  <Kicker>/{polaroid.category}</Kicker>
                </div>
              </a>
            </Reveal>
          )}
        </div>

        <div className="flex items-end justify-between gap-8">
          <div className="flex flex-col gap-3">
            {year && (
              <Reveal effect="fade" delay={0.5}>
                <Kicker className="text-foreground/70">©{year}</Kicker>
              </Reveal>
            )}
            <h1 className="text-display-xl font-black uppercase text-foreground">
              <MaskReveal delay={0.15}>{name}</MaskReveal>
            </h1>
          </div>

          {talkCard && (
            <Reveal effect="up" delay={0.8} className="hidden md:block">
              <a
                href={talkCard.href}
                className="dark group/talk flex w-[clamp(220px,18vw,280px)] flex-col gap-4 rounded-md bg-background p-4 text-foreground shadow-lift transition-transform duration-500 ease-out-expo hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <Avatar className="size-11">
                    {talkCard.avatarSrc && <AvatarImage src={talkCard.avatarSrc} alt="" />}
                    <AvatarFallback>{talkCard.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <Kicker className="text-foreground/60">{talkCard.label}</Kicker>
                </div>
                <div className="flex items-end justify-between gap-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold">{talkCard.name}</span>
                    <span className="font-mono text-[0.62rem] uppercase tracking-label text-foreground/60">
                      {talkCard.role}
                    </span>
                  </div>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-paper text-ink transition-colors duration-300 group-hover/talk:bg-lime">
                    <ArrowUpRight className="size-4" strokeWidth={2.25} />
                  </span>
                </div>
              </a>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}

export { Hero };
