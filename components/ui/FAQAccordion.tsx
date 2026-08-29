"use client";

import React, { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number | null;
  className?: string;
}

export default function FAQAccordion({
  items,
  defaultOpenIndex = 0,
  className = "",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl transition-all duration-300 border ${
              isOpen
                ? "bg-white border-[#0D47A1]/40 shadow-md"
                : "bg-white border-[#D9E1EC] hover:border-slate-300"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(idx)}
              className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D47A1] rounded-2xl cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={`accordion-answer-${idx}`}
            >
              <span className="text-base sm:text-lg font-bold text-[#1A1A1A] pr-6 select-none leading-snug">
                {item.question}
              </span>

              {/* Plus / Minus Indicator */}
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  isOpen
                    ? "text-[#0D47A1] bg-[#0D47A1]/10 border border-[#0D47A1]/30"
                    : "text-[#4A5568] bg-[#F7F9FC] border border-[#D9E1EC]"
                }`}
                aria-hidden="true"
              >
                {isOpen ? (
                  // Minus sign (—)
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  </svg>
                ) : (
                  // Plus sign (+)
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                  </svg>
                )}
              </span>
            </button>

            {/* Smooth expanding / collapsing body */}
            <div
              id={`accordion-answer-${idx}`}
              role="region"
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#4A5568] leading-relaxed border-t border-[#F0F4FA] mt-1">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
