import * as React from "react";
import { Plus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/design-system/components/ui/avatar";
import { Card, CardContent } from "@/design-system/components/ui/card";
import { Kicker } from "@/design-system/components/typography/eyebrow";
import { StarRating } from "@/design-system/components/typography/glyphs";
import { Marquee } from "@/design-system/components/motion/marquee";
import type { Testimonial } from "@/design-system/components/blocks/results-bento";
import { cn } from "@/design-system/lib/utils";

/**
 * TestimonialCard — author row, stars with a `+`, then the quote. Two
 * layouts: `author-first` (author on top) and `quote-first`, alternated by
 * the rail so the cards read as a mosaic.
 */
function TestimonialCard({
  quote,
  name,
  role,
  avatar,
  rating = 5,
  layout = "author-first",
  className,
}: Testimonial & { layout?: "author-first" | "quote-first"; className?: string }) {
  const author = (
    <div className="flex items-center gap-3 border-border py-4">
      <Avatar className="size-9">
        {avatar && <AvatarImage src={avatar} alt="" />}
        <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-xs font-semibold">{name}</span>
        <Kicker className="text-[0.6rem]">{role}</Kicker>
      </div>
    </div>
  );
  const stars = (
    <div className="flex items-center justify-between border-y border-border py-4">
      <StarRating rating={rating} />
      <Plus className="size-3.5 text-muted-foreground" />
    </div>
  );
  const body = <p className="py-5 text-sm leading-relaxed">“{quote}”</p>;

  return (
    <Card data-slot="testimonial-card" className={cn("w-[300px] shrink-0 gap-0 sm:w-[340px]", className)}>
      <CardContent className="flex h-full flex-col px-5 py-1">
        {layout === "author-first" ? (
          <>
            {author}
            {stars}
            {body}
          </>
        ) : (
          <>
            {stars}
            {body}
            <div className="mt-auto border-t border-border">{author}</div>
          </>
        )}
      </CardContent>
    </Card>
  );
}

/** TestimonialMarquee — the slow rail of quote cards, pausing on hover. */
function TestimonialMarquee({ items, className }: { items: Testimonial[]; className?: string }) {
  return (
    <Marquee duration={60} gap="gap-4" fade={false} className={cn("py-2", className)}>
      {items.map((t, i) => (
        <TestimonialCard key={t.name + i} layout={i % 2 === 0 ? "author-first" : "quote-first"} {...t} />
      ))}
    </Marquee>
  );
}

export { TestimonialCard, TestimonialMarquee };
