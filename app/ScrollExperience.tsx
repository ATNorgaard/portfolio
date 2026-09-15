"use client";

import { useEffect } from "react";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const lerp = (from: number, to: number, t: number) => from + (to - from) * t;

export function ScrollExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>(".site-header");
    const hero = document.querySelector<HTMLElement>(".hero");
    const bandWrap = document.querySelector<HTMLElement>(".motion-band");
    const band = document.querySelector<HTMLElement>(".motion-band > div");
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const spotlights = Array.from(document.querySelectorAll<HTMLElement>("[data-spotlight]"));
    const tiltItems = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    const magnets = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".site-header nav a[href^='#']")
    );
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    root.classList.add("motion-ready");

    if (prefersReducedMotion) {
      reveals.forEach((element) => element.classList.add("is-visible"));
      root.classList.add("page-ready");
      return () => {
        root.classList.remove("motion-ready", "page-ready");
      };
    }

    // Reveal elements once they enter the viewport.
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

    // Scroll state.
    let scrollDirty = true;
    let lastScrollY = window.scrollY;
    let lastScrollTime = performance.now();
    let velocityTarget = 0;
    let velocity = 0;
    let marqueeOffset = 0;

    // Pointer state.
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let pointerActive = false;
    let heroTargetX = 0;
    let heroTargetY = 0;
    let heroX = 0;
    let heroY = 0;
    let magnetsSettled = true;
    const magnetPos = new Map<HTMLElement, { x: number; y: number }>();

    // Visibility of the elements that need continuous frames.
    let bandVisible = false;
    let heroVisible = true;

    // Frame loop bookkeeping. The loop sleeps whenever nothing is moving.
    let frame = 0;
    let running = false;
    let lastFrameTime = performance.now();
    let lastVelocityValue = "";

    const wake = () => {
      if (running) return;
      running = true;
      lastFrameTime = performance.now();
      frame = window.requestAnimationFrame(tick);
    };

    const visibilityObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === bandWrap) bandVisible = entry.isIntersecting;
        if (entry.target === hero) heroVisible = entry.isIntersecting;
      });
      wake();
    });
    if (bandWrap) visibilityObserver.observe(bandWrap);
    if (hero) visibilityObserver.observe(hero);

    const onScroll = () => {
      scrollDirty = true;
      wake();
    };

    const updateScrollEffects = (now: number) => {
      const scrollTop = window.scrollY;
      const dt = Math.max(now - lastScrollTime, 1);
      velocityTarget = clamp((scrollTop - lastScrollY) / dt / 2.4, -1, 1);
      lastScrollY = scrollTop;
      lastScrollTime = now;

      const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = clamp(scrollTop / scrollable, 0, 1);
      root.style.setProperty("--page-progress", progress.toFixed(4));

      if (header) {
        header.classList.toggle("is-scrolled", scrollTop > 40);
        if (velocityTarget > 0.18 && scrollTop > 320) header.classList.add("is-hidden");
        else if (velocityTarget < -0.04 || scrollTop < 320) header.classList.remove("is-hidden");
      }

      if (hero) {
        const heroProgress = clamp(scrollTop / hero.offsetHeight, 0, 1);
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
    };

    // Pointer handlers.
    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      pointerActive = true;
      wake();
    };
    const onPointerLeave = () => {
      pointerActive = false;
      wake();
    };

    const onHeroMove = (event: PointerEvent) => {
      heroTargetX = (event.clientX / window.innerWidth - 0.5) * 2;
      heroTargetY = (event.clientY / window.innerHeight - 0.5) * 2;
      wake();
    };
    const onHeroLeave = () => {
      heroTargetX = 0;
      heroTargetY = 0;
      wake();
    };

    const spotlightHandlers = spotlights.map((section) => {
      const move = (event: PointerEvent) => {
        const rect = section.getBoundingClientRect();
        section.style.setProperty("--mx", `${(event.clientX - rect.left).toFixed(0)}px`);
        section.style.setProperty("--my", `${(event.clientY - rect.top).toFixed(0)}px`);
        section.style.setProperty("--spot", "1");
      };
      const leave = () => section.style.setProperty("--spot", "0");
      section.addEventListener("pointermove", move);
      section.addEventListener("pointerleave", leave);
      return () => {
        section.removeEventListener("pointermove", move);
        section.removeEventListener("pointerleave", leave);
      };
    });

    const tiltHandlers = tiltItems.map((card) => {
      const move = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        const px = clamp((event.clientX - rect.left) / rect.width, 0, 1);
        const py = clamp((event.clientY - rect.top) / rect.height, 0, 1);
        card.style.setProperty("--rx", `${((0.5 - py) * 9).toFixed(2)}deg`);
        card.style.setProperty("--ry", `${((px - 0.5) * 11).toFixed(2)}deg`);
        card.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
        card.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
      };
      const leave = () => {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      };
      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", leave);
      return () => {
        card.removeEventListener("pointermove", move);
        card.removeEventListener("pointerleave", leave);
      };
    });

    const updateMagnets = () => {
      let settled = true;
      magnets.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const dx = pointerX - (rect.left + rect.width / 2);
        const dy = pointerY - (rect.top + rect.height / 2);
        const radius = Math.max(rect.width, rect.height) * 0.9 + 36;
        const distance = Math.hypot(dx, dy);
        const strength = pointerActive && distance < radius ? (1 - distance / radius) * 0.45 : 0;
        const current = magnetPos.get(element) ?? { x: 0, y: 0 };
        const next = {
          x: lerp(current.x, dx * strength, 0.18),
          y: lerp(current.y, dy * strength, 0.18),
        };
        magnetPos.set(element, next);
        const idle = strength === 0 && Math.abs(next.x) < 0.05 && Math.abs(next.y) < 0.05;
        if (idle) {
          if (element.style.transform) element.style.transform = "";
          magnetPos.set(element, { x: 0, y: 0 });
        } else {
          settled = false;
          element.style.transform = `translate3d(${next.x.toFixed(2)}px, ${next.y.toFixed(2)}px, 0)`;
        }
      });
      magnetsSettled = settled;
    };

    // One frame: smooth velocity, drive the marquee, hero parallax, magnetic buttons.
    function tick(now: number) {
      const dt = Math.min(now - lastFrameTime, 64);
      lastFrameTime = now;

      if (scrollDirty) {
        scrollDirty = false;
        updateScrollEffects(now);
      } else if (now - lastScrollTime > 80) {
        velocityTarget = 0;
      }

      velocity = lerp(velocity, velocityTarget, 0.1);
      if (Math.abs(velocity) < 0.002) velocity = 0;
      const velocityValue = velocity.toFixed(3);
      if (velocityValue !== lastVelocityValue) {
        root.style.setProperty("--velocity", velocityValue);
        lastVelocityValue = velocityValue;
      }

      if (band && bandVisible) {
        const loop = band.scrollWidth / 2 || 1;
        marqueeOffset = (marqueeOffset + dt * (0.05 + Math.abs(velocity) * 0.55)) % loop;
        const skew = (velocity * -12).toFixed(2);
        band.style.transform = `translate3d(${(-marqueeOffset).toFixed(2)}px, 0, 0) skewX(${skew}deg)`;
      }

      let heroSettled = true;
      if (finePointer) {
        if (hero && heroVisible) {
          heroX = lerp(heroX, heroTargetX, 0.06);
          heroY = lerp(heroY, heroTargetY, 0.06);
          if (Math.abs(heroX - heroTargetX) < 0.001) heroX = heroTargetX;
          if (Math.abs(heroY - heroTargetY) < 0.001) heroY = heroTargetY;
          hero.style.setProperty("--px", heroX.toFixed(3));
          hero.style.setProperty("--py", heroY.toFixed(3));
          heroSettled = heroX === heroTargetX && heroY === heroTargetY;
        }
        updateMagnets();
      }

      const busy =
        scrollDirty ||
        velocity !== 0 ||
        velocityTarget !== 0 ||
        bandVisible ||
        !heroSettled ||
        !magnetsSettled;

      if (busy) {
        frame = window.requestAnimationFrame(tick);
      } else {
        running = false;
      }
    }

    const readyFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => root.classList.add("page-ready"));
    });

    wake();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    if (finePointer) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onPointerLeave);
      hero?.addEventListener("pointermove", onHeroMove, { passive: true });
      hero?.addEventListener("pointerleave", onHeroLeave);
    }

    return () => {
      revealObserver.disconnect();
      visibilityObserver.disconnect();
      window.cancelAnimationFrame(readyFrame);
      window.cancelAnimationFrame(frame);
      running = false;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      hero?.removeEventListener("pointermove", onHeroMove);
      hero?.removeEventListener("pointerleave", onHeroLeave);
      spotlightHandlers.forEach((dispose) => dispose());
      tiltHandlers.forEach((dispose) => dispose());
      root.classList.remove("motion-ready", "page-ready");
      root.style.removeProperty("--page-progress");
      root.style.removeProperty("--velocity");
    };
  }, []);

  return (
    <>
      <div className="intro-veil" aria-hidden="true">
        <span>
          AN<i>/</i>
        </span>
      </div>
      <div className="scroll-progress" aria-hidden="true">
        <span />
      </div>
    </>
  );
}
