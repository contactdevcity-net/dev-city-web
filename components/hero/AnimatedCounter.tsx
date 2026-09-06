"use client";

import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export function AnimatedCounter({ end, suffix = "", label, delay = 0 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || started.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          setTimeout(() => animateValue(el, 0, end, 1800), delay);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, delay]);

  function animateValue(el: HTMLSpanElement, start: number, finish: number, duration: number) {
    const startTime = performance.now();

    function update(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * (finish - start) + start);
      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = finish + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  return (
    <div className="group relative text-center">
      <div className="relative">
        <span
          ref={ref}
          className="block text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
        >
          0{suffix}
        </span>
        {/* Subtle glow under number */}
        <div className="absolute -bottom-1 left-1/2 h-3 w-2/3 -translate-x-1/2 rounded-full bg-primary/10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <span className="mt-2 block text-xs font-medium tracking-wider text-muted uppercase sm:text-sm">
        {label}
      </span>
    </div>
  );
}
