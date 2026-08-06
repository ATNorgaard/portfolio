"use client";

import { useEffect } from "react";

export function ScrollExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>(".site-header");
    const hero = document.querySelector<HTMLElement>(".hero");
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const parallaxItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]")
    );
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('.site-header nav a[href^="#"]')
    );
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    root.classList.add("motion-ready");

    if (prefersReducedMotion) {
      reveals.forEach((element) => element.classList.add("is-visible"));
      root.classList.add("page-ready");
      return () => {
        root.classList.remove("motion-ready", "page-ready");
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
      const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(scrollTop / scrollable, 0), 1);
      root.style.setProperty("--page-progress", progress.toFixed(4));
      header?.classList.toggle("is-scrolled", scrollTop > 40);

      if (hero) {
        const heroProgress = Math.min(Math.max(scrollTop / hero.offsetHeight, 0), 1);
        hero.style.setProperty("--hero-scroll", heroProgress.toFixed(4));
      }

      parallaxItems.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
        const speed = Number(element.dataset.parallax || "30");
        const centerDelta = window.innerHeight / 2 - (rect.top + rect.height / 2);
        const offset = (centerDelta / window.innerHeight) * speed;
        element.style.setProperty("--parallax-offset", `${offset.toFixed(2)}px`);
      });

      const marker = scrollTop + window.innerHeight * 0.34;
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
      window.requestAnimationFrame(() => root.classList.add("page-ready"));
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
      root.classList.remove("motion-ready", "page-ready");
      root.style.removeProperty("--page-progress");
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span />
    </div>
  );
}
