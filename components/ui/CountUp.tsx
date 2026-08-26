"use client";

import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number; // duration in ms
  delay?: number;
  className?: string;
}

// Ease out cubic easing function for smooth deceleration
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function CountUp({
  end,
  start = 0,
  duration = 2000,
  delay = 100,
  className = "",
}: CountUpProps) {
  const [count, setCount] = useState(start);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    let animationFrameId: number;
    let startTime: number | null = null;
    let delayTimer: NodeJS.Timeout;

    const startCounting = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      delayTimer = setTimeout(() => {
        const step = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeOutCubic(progress);
          const currentCount = Math.floor(start + (end - start) * easedProgress);

          setCount(currentCount);

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(step);
          } else {
            setCount(end);
          }
        };

        animationFrameId = requestAnimationFrame(step);
      }, delay);
    };

    // IntersectionObserver to trigger animation when scrolled into view or on mount
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (delayTimer) clearTimeout(delayTimer);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [end, start, duration, delay]);

  return (
    <span ref={elementRef} className={className}>
      {count}
    </span>
  );
}
