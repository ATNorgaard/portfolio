"use client";

import * as React from "react";
import { motion } from "motion/react";

import { cn } from "@/design-system/lib/utils";

/**
 * WordReveal — the heading entrance from the reference: each word resolves
 * from a blur, a beat after the one before it. Works on plain strings and on
 * mixed children, so a two-tone heading keeps its `<Muted>` styling per word:
 *
 *   <Heading><WordReveal>Focused on design <Muted>that delivers results</Muted></WordReveal></Heading>
 */
function WordReveal({
  children,
  stagger = 0.06,
  delay = 0,
  duration = 0.8,
  once = true,
  amount = 0.5,
  className,
}: {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  className?: string;
}) {
  const words = React.useMemo(() => splitWords(children), [children]);

  return (
    <motion.span
      data-slot="word-reveal"
      className={cn("inline", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <motion.span
            className="inline-block will-change-[transform,opacity,filter]"
            variants={{
              hidden: { opacity: 0, y: "0.35em", filter: "blur(8px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </motion.span>
  );
}

/**
 * Flattens React children into word tokens. Strings split on whitespace;
 * an element with string content is cloned around each of its words so its
 * styling survives; `<br>` becomes a line break token.
 */
function splitWords(node: React.ReactNode): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  React.Children.forEach(node, (child) => {
    if (child == null || typeof child === "boolean") return;
    if (typeof child === "string" || typeof child === "number") {
      String(child)
        .split(/\s+/)
        .filter(Boolean)
        .forEach((w) => out.push(w));
      return;
    }
    if (React.isValidElement(child)) {
      const el = child as React.ReactElement<{ children?: React.ReactNode }>;
      if (el.type === "br") {
        out.push(<br />);
        return;
      }
      const inner = splitWords(el.props.children);
      inner.forEach((w, i) => out.push(React.cloneElement(el, { key: `${i}` }, w)));
      return;
    }
  });
  return out;
}

export { WordReveal, splitWords };
