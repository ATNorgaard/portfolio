import * as React from "react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/design-system/components/ui/button";
import { Input } from "@/design-system/components/ui/input";
import { Kicker } from "@/design-system/components/typography/eyebrow";
import { Wordmark } from "@/design-system/components/typography/glyphs";
import { Reveal } from "@/design-system/components/motion/reveal";
import { MaskReveal } from "@/design-system/components/motion/mask-reveal";
import { Container, Section } from "@/design-system/components/blocks/section";
import { cn } from "@/design-system/lib/utils";

export interface FooterColumn {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}

export interface SiteFooterProps {
  description: React.ReactNode;
  phone?: { label: string; href: string };
  email?: { label: string; href: string };
  newsletter?: { title: string; placeholder: string; button: string; action?: string };
  columns: FooterColumn[];
  brand: string;
  copyright: React.ReactNode;
  className?: string;
}

/**
 * SiteFooter — description and contact top-left, newsletter card top-right,
 * link columns bottom-left and the brand as a giant signature bottom-right,
 * closed by a thin ink bar carrying the copyright.
 */
function SiteFooter({ description, phone, email, newsletter, columns, brand, copyright, className }: SiteFooterProps) {
  return (
    <footer
      data-slot="site-footer"
      // the explicit display/type resets defend against host stylesheets that
      // style bare <footer> elements (the site's own globals.css does)
      className={cn("tone-paper block min-h-0 bg-background p-0 font-sans text-base normal-case tracking-normal text-foreground", className)}
    >
      <Section padded={false} className="pt-section">
        <Container className="flex flex-col gap-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal effect="up" className="flex flex-col gap-8">
              <p className="max-w-[40ch] text-pretty text-sm leading-relaxed text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground">
                {description}
              </p>
              <div className="flex flex-col gap-1">
                {phone && (
                  <a href={phone.href} className="font-mono text-micro tracking-label text-muted-foreground hover:text-foreground">
                    {phone.label}
                  </a>
                )}
                {email && (
                  <a href={email.href} className="text-lg font-semibold hover:text-accent-strong">
                    {email.label}
                  </a>
                )}
              </div>
            </Reveal>

            {newsletter && (
              <Reveal effect="up" delay={0.1} className="md:justify-self-end">
                <form
                  action={newsletter.action}
                  method={newsletter.action ? "post" : undefined}
                  className="flex w-full max-w-sm flex-col gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <span className="text-sm font-semibold">{newsletter.title}</span>
                  <Input type="email" name="email" placeholder={newsletter.placeholder} required aria-label={newsletter.placeholder} />
                  <Button type="submit" className="w-full">
                    {newsletter.button}
                  </Button>
                </form>
              </Reveal>
            )}
          </div>

          <div className="grid items-end gap-12 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {columns.map((col) => (
                <div key={col.title} className="flex flex-col gap-3">
                  <Kicker>{col.title}</Kicker>
                  <ul className="flex flex-col gap-2">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          target={l.external ? "_blank" : undefined}
                          rel={l.external ? "noreferrer" : undefined}
                          className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-accent-strong"
                        >
                          {l.label}
                          {l.external && <ArrowUpRight className="size-3" />}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="md:justify-self-end">
              <MaskReveal as="div" duration={1.3}>
                <Wordmark size="giant">{brand}</Wordmark>
              </MaskReveal>
            </div>
          </div>
        </Container>
      </Section>
      <div className="dark mt-10 bg-background py-4 text-foreground">
        <Container>
          <Kicker className="block text-center text-foreground/60">{copyright}</Kicker>
        </Container>
      </div>
    </footer>
  );
}

export { SiteFooter };
