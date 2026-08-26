import React from "react";
import Button from "./Button";
import { ArrowRightIcon, CheckCircleIcon } from "./Icons";

export type IndustryCardProps = {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  keyFeatures: string[];
  metrics: string;
  techStack: string[];
  highlight?: boolean;
};

export default function IndustryCard({
  title,
  category,
  description,
  icon,
  keyFeatures,
  metrics,
  techStack,
  highlight = false,
}: IndustryCardProps) {
  return (
    <article
      className={`group relative flex flex-col h-full rounded-2xl p-6 sm:p-8 transition-all duration-300 border ${
        highlight
          ? "bg-gradient-to-b from-[#0B1B3D]/90 to-[#0F172A] border-cyan-500/40 text-white shadow-xl shadow-cyan-500/10"
          : "bg-white dark:bg-[#0F172A] border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:shadow-xl hover:-translate-y-1"
      }`}
    >
      {/* Category Tag & Icon */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
              highlight
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                : "bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-900/40"
            }`}
          >
            {icon}
          </div>
          <span
            className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
              highlight
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            }`}
          >
            {category}
          </span>
        </div>

        {metrics && (
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            {metrics}
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        className={`text-xl font-bold mb-3 transition-colors duration-200 group-hover:text-cyan-500 ${
          highlight ? "text-white" : "text-slate-900 dark:text-white"
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed mb-6 flex-grow ${
          highlight ? "text-slate-300" : "text-slate-600 dark:text-slate-400"
        }`}
      >
        {description}
      </p>

      {/* Key Features List */}
      <div className="mb-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
        <h4
          className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
            highlight ? "text-cyan-400" : "text-slate-400 dark:text-slate-500"
          }`}
        >
          Core Industry Solutions
        </h4>
        <ul className="space-y-2">
          {keyFeatures.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs">
              <CheckCircleIcon
                size={16}
                className={`mt-0.5 flex-shrink-0 ${
                  highlight ? "text-cyan-400" : "text-cyan-500"
                }`}
              />
              <span
                className={
                  highlight
                    ? "text-slate-200"
                    : "text-slate-700 dark:text-slate-300"
                }
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {techStack.map((tech, idx) => (
          <span
            key={idx}
            className={`text-[11px] font-medium px-2.5 py-0.5 rounded-md ${
              highlight
                ? "bg-slate-800 text-slate-300 border border-slate-700"
                : "bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800"
            }`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA Button */}
      <div className="pt-2">
        <Button
          as="link"
          href="/contact"
          variant={highlight ? "primary" : "secondary"}
          size="sm"
          fullWidth
          rightIcon={<ArrowRightIcon size={14} />}
        >
          Request Industry Solution
        </Button>
      </div>
    </article>
  );
}
