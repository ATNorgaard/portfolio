"use client";

import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/design-system/lib/utils";

/**
 * Button.
 *
 * Labels are uppercase mono micro-type, the way every call to action in the
 * reference reads. The signature shape is `default` + `<ButtonTile>`: an ink
 * bar with a small lime square holding the arrow at its right end.
 */
const buttonVariants = cva(
  [
    "group/button inline-flex shrink-0 items-center justify-center gap-3 whitespace-nowrap",
    "rounded-md font-mono text-micro uppercase tracking-label font-medium",
    "transition-[background-color,color,border-color,transform,box-shadow] duration-300 ease-out-expo",
    "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    "has-[[data-slot=button-tile]]:pr-1.5",
  ],
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90",
        outline: "border border-border bg-transparent text-foreground hover:bg-muted",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-foreground hover:bg-muted",
        link: "h-auto gap-1.5 rounded-none px-0 py-0 text-foreground underline-offset-4 hover:underline has-[[data-slot=button-tile]]:pr-0",
      },
      size: {
        sm: "h-9 px-4 has-[[data-slot=button-tile]]:pl-4",
        default: "h-11 px-5 has-[[data-slot=button-tile]]:pl-5",
        lg: "h-13 px-6 text-[0.78rem] has-[[data-slot=button-tile]]:pl-6",
        icon: "size-11 has-[[data-slot=button-tile]]:pr-0",
        "icon-sm": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

/**
 * The accent square at the end of a button. Defaults to an arrow that nudges
 * up-and-right on hover. Pass children to swap the icon.
 */
function ButtonTile({
  className,
  children,
  tone = "accent",
  ...props
}: React.ComponentProps<"span"> & { tone?: "accent" | "contrast" }) {
  return (
    <span
      data-slot="button-tile"
      className={cn(
        "inline-flex size-8 items-center justify-center rounded-sm transition-transform duration-300 ease-out-expo",
        tone === "accent" && "bg-lime text-ink",
        tone === "contrast" && "bg-primary-foreground text-primary",
        "group-hover/button:[&_svg]:-translate-y-px group-hover/button:[&_svg]:translate-x-px [&_svg]:transition-transform [&_svg]:duration-300",
        className,
      )}
      {...props}
    >
      {children ?? <ArrowUpRight className="size-4" strokeWidth={2.25} />}
    </span>
  );
}

export { Button, ButtonTile, buttonVariants };
