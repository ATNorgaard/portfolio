import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/design-system/lib/utils";

/**
 * Heading — heavy, uppercase, tight. The reference's headings are two-tone:
 * the first words in full ink, the rest dropped to a muted grey. Wrap the
 * muted part in `<Muted>`:
 *
 *   <Heading size="headline">My impact <Muted>through user experience</Muted></Heading>
 *
 * `<em>` still works inside a heading and renders italic serif in the accent,
 * for the rare editorial flourish.
 */
const headingVariants = cva("text-balance font-bold uppercase text-foreground", {
  variants: {
    size: {
      "display-xl": "text-display-xl",
      display: "text-display",
      headline: "text-headline",
      title: "text-title",
      subtitle: "text-xl leading-tight tracking-tight",
    },
    weight: {
      black: "font-black",
      bold: "font-bold",
      semibold: "font-semibold",
    },
  },
  defaultVariants: {
    size: "headline",
    weight: "bold",
  },
});

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "p" | "div" | "span";

function Heading({
  as: Tag = "h2",
  size,
  weight,
  className,
  ...props
}: React.ComponentProps<"h2"> & VariantProps<typeof headingVariants> & { as?: HeadingTag }) {
  return <Tag data-slot="heading" className={cn(headingVariants({ size, weight }), className)} {...props} />;
}

/** The muted half of a two-tone heading. */
function Muted({ className, ...props }: React.ComponentProps<"span">) {
  return <span data-slot="heading-muted" className={cn("text-heading-muted", className)} {...props} />;
}

/** The accent half — the service titles that go lime on hover. */
function Accented({ className, ...props }: React.ComponentProps<"span">) {
  return <span data-slot="heading-accent" className={cn("text-accent-strong", className)} {...props} />;
}

export { Heading, Muted, Accented, headingVariants };
