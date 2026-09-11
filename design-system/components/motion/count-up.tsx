"use client";

import * as React from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

/**
 * CountUp — a number that counts from 0 to `value` when it enters the
 * viewport. Renders the final value immediately if motion is reduced or JS
 * has not run yet, so it is never wrong, only sometimes static.
 */
function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 1.6,
  decimals = 0,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = React.useState(value);
  const armed = React.useRef(false);

  React.useEffect(() => {
    if (reduce || !inView || armed.current) return;
    armed.current = true;
    setDisplay(0);
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Number(v.toFixed(decimals))),
    });
    return () => controls.stop();
  }, [inView, reduce, value, duration, decimals]);

  return (
    <span ref={ref} data-slot="count-up" className={className}>
      {prefix}
      {display.toLocaleString("da-DK", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

export { CountUp };
