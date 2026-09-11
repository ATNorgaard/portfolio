import * as React from "react";
import { Star } from "lucide-react";

import { cn } from "@/design-system/lib/utils";

/**
 * Asterisk — the eight-spoked mark the reference scatters through its
 * sections. Drawn as strokes so it scales cleanly; add `spin` to rotate
 * slowly, which is how it behaves in the about section.
 */
function Asterisk({
  className,
  spin = false,
  ...props
}: React.ComponentProps<"svg"> & { spin?: boolean }) {
  return (
    <svg
      data-slot="asterisk"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      aria-hidden
      className={cn("size-8", spin && "animate-spin-slow", className)}
      {...props}
    >
      <path d="M24 4v40M4 24h40M9.9 9.9l28.2 28.2M38.1 9.9 9.9 38.1" />
    </svg>
  );
}

/** Four-point spark — the small marker on process and award cards. */
function Spark({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      data-slot="spark"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={cn("size-5", className)}
      {...props}
    >
      <path d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.6 11.4 11.4 6.6 12 0Z" />
    </svg>
  );
}

/** A "+" cross-hair marker — the menu overlay's row terminator. */
function Cross({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      data-slot="cross"
      viewBox="0 0 16 16"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
      className={cn("size-4", className)}
      {...props}
    >
      <path d="M8 1v14M1 8h14" />
    </svg>
  );
}

/** Five stars, filled in the accent. `rating` may be fractional. */
function StarRating({
  rating = 5,
  className,
  ...props
}: React.ComponentProps<"div"> & { rating?: number }) {
  return (
    <div
      data-slot="star-rating"
      role="img"
      aria-label={`${rating} af 5 stjerner`}
      className={cn("flex items-center gap-0.5 text-accent-strong", className)}
      {...props}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn("size-3.5", i + 1 <= Math.round(rating) ? "fill-current" : "fill-transparent opacity-40")}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

/**
 * Wordmark — the name with a registered mark, as in the reference's logo and
 * giant footer signature. `size="giant"` is the footer.
 */
function Wordmark({
  children,
  mark = "®",
  size = "default",
  className,
  ...props
}: React.ComponentProps<"span"> & { mark?: string; size?: "default" | "giant" }) {
  return (
    <span
      data-slot="wordmark"
      className={cn(
        "inline-flex items-start font-bold tracking-tight text-foreground",
        size === "default" && "text-base",
        size === "giant" && "text-display-xl leading-[0.95]",
        className,
      )}
      {...props}
    >
      {children}
      {/* top-0 cancels preflight's -0.5em superscript shift, which would
          otherwise push the mark out of a clipping mask-reveal box */}
      <sup className={cn("relative top-0 font-medium leading-none", size === "giant" ? "mt-[0.2em] text-[0.18em]" : "ml-0.5 text-[0.55em]")}>
        {mark}
      </sup>
    </span>
  );
}

/**
 * GhostText — an enormous, nearly transparent watermark behind a hero or a
 * menu item ("MICHAEL" behind the portrait). Absolutely positioned; the
 * parent must be `relative` and `overflow-hidden`.
 */
function GhostText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="ghost-text"
      className={cn(
        "pointer-events-none absolute select-none whitespace-nowrap font-black uppercase leading-none tracking-tight text-ghost",
        className,
      )}
      {...props}
    />
  );
}

export { Asterisk, Spark, Cross, StarRating, Wordmark, GhostText };
