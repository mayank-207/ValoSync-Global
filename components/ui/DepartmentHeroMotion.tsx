"use client";

import { useEffect, useRef, useState } from "react";

/** Keep background motion off mobile, reduced-motion devices and off-screen. */
export default function DepartmentHeroMotion() {
  const [canAnimate, setCanAnimate] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    const update = () => setCanAnimate(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canAnimate) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    }, { threshold: 0.05 });

    observer.observe(video);
    return () => observer.disconnect();
  }, [canAnimate]);

  if (!canAnimate) return null;

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster="/images/departments/overview-poster.webp"
      aria-hidden="true"
      tabIndex={-1}
      disablePictureInPicture
    >
      <source src="/media/departments-overview.mp4" type="video/mp4" />
    </video>
  );
}
