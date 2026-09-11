"use client";

import * as React from "react";
import { MotionConfig } from "motion/react";

import { TooltipProvider } from "@/design-system/components/ui/tooltip";

/**
 * MotionProvider — mount once at the root. It honours the OS reduced-motion
 * setting for every motion component below, and provides tooltip context.
 * Nothing here is required for a component to render its final state.
 */
function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
      <TooltipProvider delayDuration={150}>{children}</TooltipProvider>
    </MotionConfig>
  );
}

export { MotionProvider };
