import type { ReactNode } from "react";
import { cx } from "../cx.js";
import { Eyebrow } from "./Eyebrow.js";
import { DisplayHeading } from "./DisplayHeading.js";

export interface ContactLink {
  href: string;
  label: string;
  external?: boolean;
}

export interface ContactBlockProps {
  /** Mono kicker above the headline. */
  eyebrow?: string;
  /** The closing headline. Use `<em>` for the italic serif accent. */
  title: ReactNode;
  /** Standfirst under the headline. */
  intro?: ReactNode;
  /** Links laid out two-up under a hairline. */
  links?: ContactLink[];
  children?: ReactNode;
  id?: string;
  headingId?: string;
  className?: string;
}

/**
 * The closer: a full-bleed lime block carrying the largest headline on the
 * page and the ways to get in touch. It is the only section on the accent
 * ground, which is what makes it read as the end of the page — so use it
 * once, last.
 */
export function ContactBlock({
  eyebrow,
  title,
  intro,
  links = [],
  children,
  id = "kontakt",
  headingId = "contact-title",
  className,
}: ContactBlockProps) {
  return (
    <section className={cx("an-contact", className)} id={id} aria-labelledby={headingId}>
      {eyebrow ? <Eyebrow tone="on-accent">{eyebrow}</Eyebrow> : null}
      <DisplayHeading as="h2" size="lg" tone="on-accent" id={headingId}>
        {title}
      </DisplayHeading>
      {intro ? <p className="an-contact-intro">{intro}</p> : null}
      {children ??
        (links.length ? (
          <div className="an-contact-links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null)}
    </section>
  );
}
