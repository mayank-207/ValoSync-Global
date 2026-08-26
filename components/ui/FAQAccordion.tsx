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
                ? "bg-white dark:bg-[#0F172A] border-cyan-500/40 dark:border-cyan-500/40 shadow-sm"
                : "bg-slate-50/80 dark:bg-[#0F172A]/50 border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(idx)}
              className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-2xl cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={`accordion-answer-${idx}`}
            >
              <span className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white pr-6 select-none leading-snug">
                {item.question}
              </span>

              {/* Plus / Minus Indicator */}
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  isOpen
                    ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50"
                    : "text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60"
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
                <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 mt-1">
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
