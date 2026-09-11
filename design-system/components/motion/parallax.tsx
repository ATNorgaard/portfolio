"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

import { cn } from "@/design-system/lib/utils";

/**
 * Parallax — moves its content vertically at a fraction of scroll speed while
 * it crosses the viewport. `speed` is the distance in px travelled over the
 * full pass; negative values move against the scroll. Inside an
 * `overflow-hidden` frame this gives the reference's drifting photographs.
 */
function Parallax({
  speed = 60,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { speed?: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-speed / 2, speed / 2]);

  return (
    <div ref={ref} data-slot="parallax" className={cn("relative", className)} {...props}>
      <motion.div style={{ y: reduce ? 0 : y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

/**
 * ParallaxImage — an image in an overflow-hidden frame that travels slightly
 * inside it. The image is oversized so the edges never show.
 */
function ParallaxImage({
  src,
  alt,
  speed = 80,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  imgClassName?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-speed / 2, speed / 2]);

  return (
    <div ref={ref} data-slot="parallax-image" className={cn("relative overflow-hidden", className)}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y: reduce ? 0 : y }}
        className={cn("absolute inset-0 size-full object-cover will-change-transform", imgClassName)}
        // oversize so the drift never reveals the frame edge
        initial={false}
        animate={{ scale: 1 + Math.abs(speed) / 400 }}
      />
    </div>
  );
}

export { Parallax, ParallaxImage };
