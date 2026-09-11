import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge needs to know the system's custom type scale, otherwise
 * `text-headline` is mistaken for a colour and silently drops `text-foreground`
 * (and vice versa). Keep this list in sync with the --text-* tokens in
 * styles/globals.css.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["micro", "lead", "title", "headline", "display", "display-xl"] }],
      "tracking": [{ tracking: ["label", "label-wide"] }],
      "shadow": [{ shadow: ["lift", "header"] }],
    },
  },
});

/** shadcn's class merger: clsx for conditionals, tailwind-merge for conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
