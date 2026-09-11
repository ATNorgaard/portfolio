"use client";

import * as React from "react";
import { motion, type HTMLMotionProps, type Variants } from "motion/react";

import { cn } from "@/design-system/lib/utils";

type RevealEffect = "up" | "blur" | "fade" | "scale" | "left" | "right";

/** The system's one expressive curve (matches --an-ease / --ease-out-expo). */
export const EASE = [0.22, 1, 0.36, 1] as const;

const effects: Record<RevealEffect, Variants> = {
  up: { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } },
  blur: { hidden: { opacity: 0, y: 18, filter: "blur(10px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
  left: { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } },
};

/**
 * Reveal — plays an entrance the first time the element scrolls into view.
 * `blur` is the reference's signature: content resolves from a soft blur as
 * it lifts into place. Wrap a group in `<RevealGroup>` to stagger children.
 */
function Reveal({
  effect = "blur",
  delay = 0,
  duration = 0.9,
  once = true,
  amount = 0.3,
  className,
  children,
  ...props
}: HTMLMotionProps<"div"> & {
  effect?: RevealEffect;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number | "some" | "all";
}) {
  return (
    <motion.div
      data-slot="reveal"
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={effects[effect]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("will-change-[transform,opacity,filter]", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * RevealGroup — a container whose direct `<RevealItem>` children enter one
 * after another.
 */
function RevealGroup({
  stagger = 0.08,
  delay = 0,
  once = true,
  amount = 0.2,
  className,
  children,
  ...props
}: HTMLMotionProps<"div"> & { stagger?: number; delay?: number; once?: boolean; amount?: number }) {
  return (
    <motion.div
      data-slot="reveal-group"
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

function RevealItem({
  effect = "blur",
  duration = 0.9,
  className,
  children,
  ...props
}: HTMLMotionProps<"div"> & { effect?: RevealEffect; duration?: number }) {
  return (
    <motion.div
      data-slot="reveal-item"
      variants={effects[effect]}
      transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
      className={cn("will-change-[transform,opacity,filter]", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { Reveal, RevealGroup, RevealItem, effects as revealEffects };
export type { RevealEffect };
