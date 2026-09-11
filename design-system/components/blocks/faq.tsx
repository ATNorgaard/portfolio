"use client";

import * as React from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/design-system/components/ui/accordion";
import { Eyebrow } from "@/design-system/components/typography/eyebrow";
import { Heading } from "@/design-system/components/typography/heading";
import { WordReveal } from "@/design-system/components/motion/word-reveal";
import { Reveal } from "@/design-system/components/motion/reveal";
import { Container, Section, type Tone } from "@/design-system/components/blocks/section";

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

/**
 * Faq — sticky heading on the left, a numbered accordion on the right.
 */
function Faq({
  id,
  eyebrow,
  title,
  items,
  tone = "paper",
  defaultOpen = "0",
}: {
  id?: string;
  eyebrow: string;
  title: React.ReactNode;
  items: FaqItem[];
  tone?: Tone;
  defaultOpen?: string;
}) {
  return (
    <Section id={id} tone={tone}>
      <Container className="grid gap-12 md:grid-cols-[minmax(0,0.42fr)_1fr] md:gap-16">
        <div className="md:sticky md:top-28 md:self-start">
          <Reveal effect="fade">
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Heading size="headline" className="max-w-[10ch]">
            <WordReveal>{title}</WordReveal>
          </Heading>
        </div>
        <Reveal effect="up" delay={0.15}>
          <Accordion type="single" collapsible defaultValue={defaultOpen}>
            {items.map((item, i) => (
              <AccordionItem key={i} value={String(i)}>
                <AccordionTrigger>
                  <span className="flex gap-3">
                    <span className="text-muted-foreground">{i + 1}.</span>
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </Section>
  );
}

export { Faq };
