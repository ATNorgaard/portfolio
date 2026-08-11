"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";

export interface MotionProviderProps {
  /**
   * Page content. Optional — the provider renders nothing of its own, so it
   * can equally be dropped in as a bare sibling near the top of the page.
   */
  children?: ReactNode;
  /**
   * Scroll distance in px before the header takes its compact state.
   */
  headerOffset?: number;
  /**
   * Fraction of the viewport height used as the scroll-spy marker when
   * deciding which section is current. 0.34 puts it a third of the way down.
   */
  spyMarker?: number;
}

/**
 * Drives every scroll-linked effect in the system, for the whole page at
 * once. Mount it once, near the top of the tree.
 *
 * It sets `.an-motion-ready` on `<html>` — which is what arms the reveal and
 * hero entrance styles — then on each frame writes `--an-page-progress`,
 * `--an-hero-scroll` and per-element `--an-parallax-offset`, toggles the
 * header's `is-scrolled` state, and marks the current section's nav link
 * `is-active`. An IntersectionObserver adds `.is-visible` to each Reveal as
 * it enters view.
 *
 * Nothing depends on it: without it every component renders in its final
 * state. Under `prefers-reduced-motion` it reveals everything immediately and
 * installs no scroll listeners at all.
 */
export function MotionProvider({
  children,
  headerOffset = 40,
  spyMarker = 0.34,
}: MotionProviderProps) {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>(".an-header");
    const hero = document.querySelector<HTMLElement>(".an-hero");
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-an-reveal]"));
    const parallaxItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-an-parallax]")
    );
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('.an-header-nav a[href^="#"]')
    );
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    root.classList.add("an-motion-ready");

    if (prefersReducedMotion) {
      reveals.forEach((element) => element.classList.add("is-visible"));
      root.classList.add("an-page-ready");
      return () => {
        root.classList.remove("an-motion-ready", "an-page-ready");
      };
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    reveals.forEach((element) => revealObserver.observe(element));

    let frame = 0;
    const updateScrollEffects = () => {
      const scrollTop = window.scrollY;
      const scrollable = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = Math.min(Math.max(scrollTop / scrollable, 0), 1);
      root.style.setProperty("--an-page-progress", progress.toFixed(4));
      header?.classList.toggle("is-scrolled", scrollTop > headerOffset);

      if (hero) {
        const heroProgress = Math.min(Math.max(scrollTop / hero.offsetHeight, 0), 1);
        hero.style.setProperty("--an-hero-scroll", heroProgress.toFixed(4));
      }

      parallaxItems.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
        const speed = Number(element.dataset.anParallax || "30");
        const centerDelta = window.innerHeight / 2 - (rect.top + rect.height / 2);
        const offset = (centerDelta / window.innerHeight) * speed;
        element.style.setProperty("--an-parallax-offset", `${offset.toFixed(2)}px`);
      });

      const marker = scrollTop + window.innerHeight * spyMarker;
      let activeId = sections[0]?.id;
      sections.forEach((section) => {
        if (section.offsetTop <= marker) activeId = section.id;
      });
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${activeId}`;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });

      frame = 0;
    };

    const queueScrollUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollEffects);
    };

    const readyFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => root.classList.add("an-page-ready"));
    });

    updateScrollEffects();
    window.addEventListener("scroll", queueScrollUpdate, { passive: true });
    window.addEventListener("resize", queueScrollUpdate);

    return () => {
      revealObserver.disconnect();
      window.cancelAnimationFrame(readyFrame);
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", queueScrollUpdate);
      window.removeEventListener("resize", queueScrollUpdate);
      root.classList.remove("an-motion-ready", "an-page-ready");
      root.style.removeProperty("--an-page-progress");
    };
  }, [headerOffset, spyMarker]);

  return <>{children}</>;
}
