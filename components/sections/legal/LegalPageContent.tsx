"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Button from "@/components/ui/Button";
import { ArrowRightIcon, LayersIcon } from "@/components/ui/Icons";

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  summary: string;
  content: React.ReactNode;
}

export interface LegalHelpBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

interface LegalPageContentProps {
  sections: LegalSection[];
  helpBox: LegalHelpBoxProps;
}

export default function LegalPageContent({
  sections,
  helpBox,
}: LegalPageContentProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const isUserClickRef = useRef<boolean>(false);

  // Smoothly scroll window to target section with header offset
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      setActiveId(id);
      isUserClickRef.current = true;

      const target = document.getElementById(id);
      if (target) {
        const navOffset = 100; // Header offset
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Re-enable scroll spy after smooth animation finishes
        setTimeout(() => {
          isUserClickRef.current = false;
        }, 800);
      }
    },
    []
  );

  // Active section scroll spy tracking window scroll position
  useEffect(() => {
    const handleWindowScroll = () => {
      if (isUserClickRef.current) return;

      const scrollPosition = window.scrollY + 130;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        const el = document.getElementById(sec.id);
        if (el) {
          if (scrollPosition >= el.offsetTop) {
            setActiveId(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, [sections]);

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
      {/* Left Column: Sticky Table of Contents & Contact Box */}
      <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-6">
        {/* Navigation Card */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#D9E1EC] shadow-sm">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B3D91] mb-4 flex items-center gap-2">
            <LayersIcon size={18} />
            <span>Table of Contents</span>
          </h3>

          <nav className="space-y-1.5" aria-label="Table of Contents">
            {sections.map((sec) => {
              const isActive = activeId === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => handleNavClick(e, sec.id)}
                  className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0B3D91] text-white shadow-md shadow-[#0B3D91]/20 font-bold translate-x-1"
                      : "text-[#4A5568] hover:text-[#0B3D91] hover:bg-[#F7F9FC]"
                  }`}
                >
                  <span className="truncate pr-2">{sec.title}</span>
                  <span
                    className={`text-[11px] font-mono flex-shrink-0 ${
                      isActive
                        ? "text-[#D4AF37]"
                        : "text-[#718096] group-hover:text-[#0B3D91]"
                    }`}
                  >
                    {sec.number}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Assistance / Contact Box */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#071A33] text-white border border-white/10 shadow-lg">
          <div className="flex items-center gap-4 mb-3">
            <span className="p-3 rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] inline-block">
              {helpBox.icon}
            </span>
            <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
              {helpBox.title}
            </h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-5">
            {helpBox.description}
          </p>
          <Button
            as="link"
            href={helpBox.buttonHref}
            variant="primary"
            size="sm"
            className="w-full justify-center"
            rightIcon={<ArrowRightIcon size={14} />}
          >
            {helpBox.buttonText}
          </Button>
        </div>
      </aside>

      {/* Right Column: Normal Full-Height Content Flow (No Inner Scrollbar) */}
      <div className="lg:col-span-8 space-y-8">
        {sections.map((sec) => (
          <article
            key={sec.id}
            id={sec.id}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-[#D9E1EC] shadow-sm transition-all duration-300 hover:shadow-md scroll-mt-28"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-[#D9E1EC]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B3D91]/10 text-[#0B3D91] flex items-center justify-center font-bold text-lg border border-[#0B3D91]/20 flex-shrink-0">
                  {sec.number}
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A1A]">
                    {sec.title}
                  </h2>
                  <p className="text-xs text-[#718096] mt-1 font-medium">
                    {sec.summary}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="prose max-w-none text-[#4A5568]">
              {sec.content}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
