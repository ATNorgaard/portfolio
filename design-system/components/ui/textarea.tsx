import * as React from "react";

import { cn } from "@/design-system/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-32 w-full rounded-md border border-input bg-card px-4 py-3 text-sm text-foreground",
        "placeholder:text-muted-foreground field-sizing-content",
        "transition-[border-color,box-shadow] duration-200 outline-none",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/25",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/25",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
