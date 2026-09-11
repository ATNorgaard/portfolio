"use client";

import * as React from "react";

import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/design-system/components/ui/avatar";
import { Card, CardContent } from "@/design-system/components/ui/card";
import { Kicker } from "@/design-system/components/typography/eyebrow";
import { Spark, StarRating } from "@/design-system/components/typography/glyphs";
import { Stat } from "@/design-system/components/typography/stat";
import { RevealGroup, RevealItem } from "@/design-system/components/motion/reveal";
import { ParallaxImage } from "@/design-system/components/motion/parallax";
import { cn } from "@/design-system/lib/utils";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  rating?: number;
}

export interface ResultsBentoProps {
  stats: [{ value: number; suffix?: string; label: string; text?: string }, { value: number; suffix?: string; label: string; text?: string }];
  image: { src: string; alt: string };
  rating: { value: number; label: string; avatars?: string[] };
  quote: Testimonial;
  highlight: { title: string; text: string };
  className?: string;
}

/**
 * ResultsBento — the "why choose me" mosaic: two stat cards stacked on the
 * left, a tall photograph, a rating card, a quote, and a spark-marked
 * highlight card. Cards are equal-height within rows; the photograph spans
 * both rows.
 */
function ResultsBento({ stats, image, rating, quote, highlight, className }: ResultsBentoProps) {
  return (
    <RevealGroup stagger={0.08} className={cn("grid gap-4 md:grid-cols-4 md:grid-rows-2", className)}>
      <RevealItem effect="up">
        <Card className="h-full">
          <CardContent className="py-6">
            <Stat layout="stack" {...stats[0]} />
          </CardContent>
        </Card>
      </RevealItem>

      <RevealItem effect="scale" className="md:row-span-2">
        <ParallaxImage src={image.src} alt={image.alt} speed={70} className="h-full min-h-[320px] rounded-lg" />
      </RevealItem>

      <RevealItem effect="up" className="md:col-span-2">
        <Card className="h-full">
          <CardContent className="flex h-full flex-col justify-between gap-6 py-6">
            <StarRating rating={rating.value} />
            <div className="flex items-center gap-4">
              {rating.avatars && (
                <AvatarGroup>
                  {rating.avatars.map((src, i) => (
                    <Avatar key={i} className="size-9">
                      <AvatarImage src={src} alt="" />
                      <AvatarFallback>{i + 1}</AvatarFallback>
                    </Avatar>
                  ))}
                </AvatarGroup>
              )}
              <span className="text-sm font-semibold">{rating.label}</span>
            </div>
          </CardContent>
        </Card>
      </RevealItem>

      <RevealItem effect="up">
        <Card className="h-full">
          <CardContent className="py-6">
            <Stat layout="stack" {...stats[1]} />
          </CardContent>
        </Card>
      </RevealItem>

      <RevealItem effect="up">
        <Card className="h-full">
          <CardContent className="flex h-full flex-col justify-between gap-6 py-6">
            <StarRating rating={quote.rating ?? 5} />
            <p className="text-sm leading-relaxed">“{quote.quote}”</p>
            <div className="flex items-center gap-3">
              <Avatar className="size-9">
                {quote.avatar && <AvatarImage src={quote.avatar} alt="" />}
                <AvatarFallback>{quote.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-xs font-semibold">{quote.name}</span>
                <Kicker className="text-[0.6rem]">{quote.role}</Kicker>
              </div>
            </div>
          </CardContent>
        </Card>
      </RevealItem>

      <RevealItem effect="up">
        <Card className="h-full">
          <CardContent className="flex h-full flex-col justify-between gap-8 py-6">
            <Spark className="size-5 text-accent-strong" />
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold uppercase">{highlight.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{highlight.text}</p>
            </div>
          </CardContent>
        </Card>
      </RevealItem>
    </RevealGroup>
  );
}

export { ResultsBento };
