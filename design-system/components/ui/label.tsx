"use client";

import * as React from "react";
import { Label as LabelPrimitive } from "radix-ui";

import { cn } from "@/design-system/lib/utils";

/** Form label — mono micro uppercase, like every caption in the system. */
function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex select-none items-center gap-2 font-mono text-micro uppercase tracking-label text-foreground",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
