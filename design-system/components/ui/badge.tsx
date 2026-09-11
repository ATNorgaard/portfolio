import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/design-system/lib/utils";

/**
 * Badge — the reference's small pill: a muted capsule, mono uppercase text and
 * an accent dot in front. Used as the eyebrow above every section heading, as
 * the category tag on an article card, and as the skill chips in a service row.
 */
const badgeVariants = cva(
  [
    "inline-flex w-fit shrink-0 items-center gap-2 whitespace-nowrap rounded-sm",
    "px-2.5 py-1.5 font-mono text-[0.62rem] uppercase tracking-label leading-none",
    "transition-colors [&>svg]:pointer-events-none [&>svg]:size-3",
  ],
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground",
        outline: "border border-border text-foreground",
        accent: "bg-accent text-accent-foreground",
        ink: "bg-ink text-paper",
        chip: "border border-border bg-card text-muted-foreground normal-case tracking-normal text-[0.72rem] font-sans",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  dot = false,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean; dot?: boolean }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && (
        <span
          aria-hidden
          className={cn(
            "size-1.5 rounded-full",
            variant === "accent" ? "bg-ink" : "bg-accent-strong",
          )}
        />
      )}
      {children}
    </Comp>
  );
}

export { Badge, badgeVariants };
