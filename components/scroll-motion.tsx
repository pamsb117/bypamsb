"use client";

import { useEffect } from "react";

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function ScrollMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const cleanups: Array<() => void> = [];
    const on = <K extends keyof WindowEventMap>(target: Window | HTMLElement, type: K | string, handler: EventListener, options?: AddEventListenerOptions) => {
      target.addEventListener(type, handler, options);
      cleanups.push(() => target.removeEventListener(type, handler, options));
    };

    /* ---------- Reveal on enter (staggered) ---------- */
    const revealed = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    document.querySelectorAll<HTMLElement>(".service-grid, .project-grid, .testimonial-grid").forEach((grid) => {
      Array.from(grid.children).forEach((child, index) => (child as HTMLElement).style.setProperty("--i", String(index % 3)));
    });
    if (reducedMotion.matches || typeof IntersectionObserver === "undefined") {
      revealed.forEach((el) => el.classList.add("is-in"));
    } else {
      root.classList.add("motion-ready");
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
      revealed.forEach((el) => observer.observe(el));
      cleanups.push(() => observer.disconnect());
    }

    /* ---------- Autoplay videos only while visible ---------- */
    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>("video[data-autoplay]"));
    if (!reducedMotion.matches && typeof IntersectionObserver !== "undefined" && videos.length) {
      const videoObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) video.play().catch(() => undefined);
          else video.pause();
        }
      }, { threshold: 0.35 });
      videos.forEach((video) => videoObserver.observe(video));
      cleanups.push(() => videoObserver.disconnect());
    }

    /* ---------- Scroll progress + marquee velocity ---------- */
    const contact = document.getElementById("contacto");
    const tracks = Array.from(document.querySelectorAll<HTMLElement>(".marquee-track"));
    let lastY = window.scrollY;
    let velocity = 0;
    let frame = 0;
    const tick = () => {
      frame = 0;
      const y = window.scrollY;
      const scrollable = Math.max(1, root.scrollHeight - window.innerHeight);
      root.style.setProperty("--page-progress", String(clamp(y / scrollable)));
      const contactTop = contact ? contact.getBoundingClientRect().top : Infinity;
      root.classList.toggle("show-fab", y > window.innerHeight * 0.8 && contactTop > window.innerHeight * 0.85);
      velocity = velocity * 0.85 + (y - lastY) * 0.15;
      lastY = y;
      if (!reducedMotion.matches) {
        const boost = clamp(Math.abs(velocity) / 18, 0, 3);
        tracks.forEach((track) => {
          track.getAnimations().forEach((animation) => { animation.playbackRate = (1 + boost) * (velocity < -0.5 ? -1 : 1); });
          track.style.setProperty("--skew", `${clamp(velocity * -0.25, -8, 8).toFixed(2)}deg`);
        });
        if (Math.abs(velocity) > 0.1) schedule();
      }
    };
    const schedule = () => { if (frame === 0) frame = window.requestAnimationFrame(tick); };
    schedule();
    on(window, "scroll", schedule, { passive: true });
    on(window, "resize", schedule);
    cleanups.push(() => { if (frame) window.cancelAnimationFrame(frame); });

    /* ---------- Pointer effects (desktop only) ---------- */
    if (finePointer.matches && !reducedMotion.matches) {
      // Cursor glow with easing
      const glow = document.querySelector<HTMLElement>(".cursor-glow");
      let gx = window.innerWidth / 2, gy = window.innerHeight / 3, tx = gx, ty = gy, glowFrame = 0;
      const moveGlow = () => {
        gx += (tx - gx) * 0.12; gy += (ty - gy) * 0.12;
        glow?.style.setProperty("transform", `translate3d(${gx.toFixed(1)}px, ${gy.toFixed(1)}px, 0)`);
        glowFrame = Math.abs(tx - gx) + Math.abs(ty - gy) > 0.5 ? window.requestAnimationFrame(moveGlow) : 0;
      };
      on(window, "pointermove", ((event: PointerEvent) => {
        tx = event.clientX; ty = event.clientY;
        glow?.classList.add("is-active");
        if (!glowFrame) glowFrame = window.requestAnimationFrame(moveGlow);
      }) as EventListener, { passive: true });
      cleanups.push(() => { if (glowFrame) window.cancelAnimationFrame(glowFrame); });

      // Tilt + spotlight cards
      document.querySelectorAll<HTMLElement>(".service-card, .identity-card").forEach((card) => {
        on(card, "pointermove", ((event: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          card.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
          card.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
          card.style.setProperty("--rx", `${((0.5 - y) * 8).toFixed(2)}deg`);
          card.style.setProperty("--ry", `${((x - 0.5) * 10).toFixed(2)}deg`);
        }) as EventListener);
        on(card, "pointerleave", () => { card.style.setProperty("--rx", "0deg"); card.style.setProperty("--ry", "0deg"); });
      });

      // Magnetic buttons
      document.querySelectorAll<HTMLElement>(".button, .header-contact").forEach((button) => {
        on(button, "pointermove", ((event: PointerEvent) => {
          const rect = button.getBoundingClientRect();
          const dx = event.clientX - (rect.left + rect.width / 2);
          const dy = event.clientY - (rect.top + rect.height / 2);
          button.style.setProperty("--tx", `${(dx * 0.22).toFixed(1)}px`);
          button.style.setProperty("--ty", `${(dy * 0.3).toFixed(1)}px`);
        }) as EventListener);
        on(button, "pointerleave", () => { button.style.setProperty("--tx", "0px"); button.style.setProperty("--ty", "0px"); });
      });
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      root.classList.remove("motion-ready", "show-fab");
      root.style.removeProperty("--page-progress");
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <div className="cursor-glow" aria-hidden="true" />
    </>
  );
}
