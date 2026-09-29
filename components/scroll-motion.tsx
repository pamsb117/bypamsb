"use client";

import { useEffect } from "react";

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function ScrollMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollableHeight = Math.max(1, root.scrollHeight - window.innerHeight);
      root.style.setProperty("--page-progress", String(clamp(window.scrollY / scrollableHeight)));

      if (reducedMotion.matches) return;

      const start = window.innerHeight * 0.92;
      const distance = window.innerHeight * 0.3;
      for (const section of sections) {
        const progress = clamp((start - section.getBoundingClientRect().top) / distance);
        section.style.setProperty("--reveal-opacity", (0.2 + progress * 0.8).toFixed(3));
        section.style.setProperty("--reveal-offset", `${Math.round((1 - progress) * 28)}px`);
      }
    };

    const schedule = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };

    root.classList.add("scroll-motion-active");
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reducedMotion.addEventListener("change", schedule);
    const resizeObserver = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(schedule);
    resizeObserver?.observe(root);

    return () => {
      if (frame !== 0) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reducedMotion.removeEventListener("change", schedule);
      resizeObserver?.disconnect();
      root.classList.remove("scroll-motion-active");
      root.style.removeProperty("--page-progress");
      sections.forEach((section) => {
        section.style.removeProperty("--reveal-opacity");
        section.style.removeProperty("--reveal-offset");
      });
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true"><span /></div>;
}
