import * as React from "react";

import { cn } from "@/design-system/lib/utils";

/**
 * Marquee — an endless horizontal ticker for logo strips and testimonial
 * rails. Pure CSS: children are rendered twice and the track translates by
 * half its width, so it loops seamlessly. Pauses on hover by default.
 */
function Marquee({
  children,
  duration = 40,
  reverse = false,
  pauseOnHover = true,
  fade = true,
  gap = "gap-16",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  duration?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  fade?: boolean;
  gap?: string;
}) {
  return (
    <div
      data-slot="marquee"
      className={cn("group/marquee flex w-full overflow-hidden", fade && "mask-fade-x", className)}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      {...props}
    >
      <div
        className={cn(
          "flex w-max shrink-0 items-center",
          gap,
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "group-hover/marquee:[animation-play-state:paused]",
        )}
      >
        <div className={cn("flex shrink-0 items-center", gap)}>{children}</div>
        <div className={cn("flex shrink-0 items-center", gap)} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

export { Marquee };
