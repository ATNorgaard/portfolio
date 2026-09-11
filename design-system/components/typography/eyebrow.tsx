import * as React from "react";

import { Badge } from "@/design-system/components/ui/badge";
import { cn } from "@/design-system/lib/utils";

/**
 * Eyebrow — the dotted pill that sits above every section heading
 * ("◉ BETTER DIGITAL JOURNEYS"). A Badge with the dot on and the muted
 * variant, kept as its own component so sections read consistently.
 */
function Eyebrow({ className, ...props }: React.ComponentProps<typeof Badge>) {
  return <Badge data-slot="eyebrow" dot variant="default" className={cn("mb-6", className)} {...props} />;
}

/**
 * Kicker — a bare mono micro label with no pill, for captions, section
 * ordinals ("001"), the "©2026" marks and meta rows.
 */
function Kicker({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="kicker"
      className={cn("font-mono text-micro uppercase tracking-label text-muted-foreground", className)}
      {...props}
    />
  );
}

/** Body copy tuned for the system: the lead paragraph under a heading. */
function Lead({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="lead" className={cn("text-pretty text-lead text-muted-foreground", className)} {...props} />;
}

export { Eyebrow, Kicker, Lead };
