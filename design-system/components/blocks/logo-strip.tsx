import * as React from "react";

import { Marquee } from "@/design-system/components/motion/marquee";
import { Kicker } from "@/design-system/components/typography/eyebrow";
import { Container, Section } from "@/design-system/components/blocks/section";
import { cn } from "@/design-system/lib/utils";

/**
 * LogoStrip — "trusted by" label on the left, an endless ticker of client
 * wordmarks on the right. Logos are plain text by default; pass nodes for
 * real marks.
 */
function LogoStrip({
  label,
  logos,
  className,
}: {
  label: React.ReactNode;
  logos: React.ReactNode[];
  className?: string;
}) {
  return (
    <Section padded={false} className={cn("border-b border-border py-8", className)}>
      <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-12">
        <Kicker className="max-w-[12ch] shrink-0 leading-relaxed">{label}</Kicker>
        <Marquee duration={36} gap="gap-20" className="flex-1">
          {logos.map((logo, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-xl font-bold uppercase tracking-tight text-foreground/40 transition-colors hover:text-foreground"
            >
              {logo}
            </span>
          ))}
        </Marquee>
      </Container>
    </Section>
  );
}

export { LogoStrip };
