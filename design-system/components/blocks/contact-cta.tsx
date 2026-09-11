"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

import { Button, ButtonTile } from "@/design-system/components/ui/button";
import { Card, CardContent } from "@/design-system/components/ui/card";
import { Input } from "@/design-system/components/ui/input";
import { Label } from "@/design-system/components/ui/label";
import { Textarea } from "@/design-system/components/ui/textarea";
import { Eyebrow } from "@/design-system/components/typography/eyebrow";
import { Heading } from "@/design-system/components/typography/heading";
import { Spark, Wordmark } from "@/design-system/components/typography/glyphs";
import { WordReveal } from "@/design-system/components/motion/word-reveal";
import { Reveal } from "@/design-system/components/motion/reveal";
import { Container, Section } from "@/design-system/components/blocks/section";
import { cn } from "@/design-system/lib/utils";

export interface ContactCtaProps {
  id?: string;
  brand: string;
  eyebrow: string;
  title: React.ReactNode;
  highlight: { title: string; text: string };
  form: {
    heading: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    action?: string;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
  };
  className?: string;
}

/**
 * Aurora — the blurred colour-field behind the closing CTA. Three soft blobs
 * in the palette drift slowly; on reduced motion they hold still.
 */
function Aurora({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const drift = (dx: number, dy: number, dur: number) =>
    reduce
      ? undefined
      : { x: [0, dx, 0], y: [0, dy, 0], transition: { duration: dur, repeat: Infinity, ease: "easeInOut" as const } };
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <motion.div
        animate={drift(80, 40, 18)}
        className="absolute -left-[10%] top-[10%] size-[55vw] rounded-full bg-lime/35 blur-3xl"
      />
      <motion.div
        animate={drift(-60, 70, 22)}
        className="absolute right-[-15%] top-[-10%] size-[50vw] rounded-full bg-lime-deep/45 blur-3xl"
      />
      <motion.div
        animate={drift(40, -50, 26)}
        className="absolute bottom-[-25%] left-[30%] size-[45vw] rounded-full bg-ink-soft blur-3xl"
      />
    </div>
  );
}

/**
 * ContactCta — the "let's create together" band: an ink section with an
 * aurora behind it, a paper form card on the left and the invitation on the
 * right. The form posts to `action` or calls `onSubmit`.
 */
function ContactCta({ id, brand, eyebrow, title, highlight, form, className }: ContactCtaProps) {
  return (
    <Section id={id} tone="ink" className={cn("overflow-hidden", className)}>
      <Aurora />
      <Container className="relative grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal effect="up" className="tone-paper">
          <Card className="mx-auto w-full max-w-md gap-0 shadow-lift">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <Wordmark>{brand}</Wordmark>
              <span className="text-xs font-medium">{form.heading}</span>
            </div>
            <CardContent className="py-6">
              <form
                action={form.action}
                onSubmit={form.onSubmit}
                method={form.action ? "post" : undefined}
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-2">
                  <Label htmlFor="cta-name">{form.name}</Label>
                  <Input id="cta-name" name="name" autoComplete="name" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="cta-email">{form.email}</Label>
                  <Input id="cta-email" name="email" type="email" autoComplete="email" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="cta-message">{form.message}</Label>
                  <Textarea id="cta-message" name="message" required />
                </div>
                <Button type="submit" size="lg" className="w-full justify-between">
                  {form.submit}
                  <ButtonTile />
                </Button>
              </form>
            </CardContent>
          </Card>
        </Reveal>

        <div className="flex flex-col items-start gap-10">
          <div>
            <Reveal effect="fade">
              <Eyebrow variant="outline" className="border-foreground/25 text-foreground">
                {eyebrow}
              </Eyebrow>
            </Reveal>
            <Heading size="display" className="max-w-[10ch]">
              <WordReveal>{title}</WordReveal>
            </Heading>
          </div>
          <Reveal effect="up" delay={0.3} className="flex flex-col gap-3">
            <Spark className="size-5 text-accent" />
            <h3 className="pt-2 text-xs font-semibold uppercase tracking-tight">{highlight.title}</h3>
            <p className="max-w-[40ch] text-xs leading-relaxed text-foreground/60">{highlight.text}</p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export { ContactCta, Aurora };
