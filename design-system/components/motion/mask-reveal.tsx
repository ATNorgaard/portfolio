"use client";

import * as React from "react";
import { motion, useInView } from "motion/react";

import { cn } from "@/design-system/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * MaskReveal — a line of text rises out of a clipped box, the way the hero
 * name lands in the reference. Wrap each line separately for a stagger.
 *
 * The viewport check runs on the *outer* (clipping) element: a child that is
 * translated outside its overflow-hidden parent never intersects the
 * viewport, so `whileInView` on the child would never fire.
 */
function MaskReveal({
  children,
  delay = 0,
  duration = 1.1,
  once = true,
  as: Tag = "span",
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: "span" | "div";
  className?: string;
}) {
  const ref = React.useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, amount: 0.2 });

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      data-slot="mask-reveal"
      className={cn("block overflow-hidden pb-[0.08em] -mb-[0.08em] pt-[0.06em] -mt-[0.06em]", className)}
    >
      <motion.span
        className="block will-change-transform"
        initial={{ y: "110%" }}
        animate={inView ? { y: 0 } : { y: "110%" }}
        transition={{ duration, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </Tag>
  );
}

/**
 * ImageReveal — an image that un-clips from the bottom (or a side) and
 * settles from a slight zoom. Use it around any <img>.
 */
function ImageReveal({
  children,
  from = "bottom",
  delay = 0,
  duration = 1.2,
  className,
}: {
  children: React.ReactNode;
  from?: "bottom" | "left" | "right" | "top";
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const clip = {
    bottom: "inset(100% 0 0 0)",
    top: "inset(0 0 100% 0)",
    left: "inset(0 100% 0 0)",
    right: "inset(0 0 0 100%)",
  }[from];

  return (
    <div ref={ref} data-slot="image-reveal" className={cn("overflow-hidden", className)}>
      <motion.div
        className="size-full"
        initial={{ clipPath: clip }}
        animate={{ clipPath: inView ? "inset(0 0 0 0)" : clip }}
        transition={{ duration, delay, ease: EASE }}
      >
        <motion.div
          className="size-full"
          initial={{ scale: 1.18 }}
          animate={{ scale: inView ? 1 : 1.18 }}
          transition={{ duration: duration + 0.3, delay, ease: EASE }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

export { MaskReveal, ImageReveal };
