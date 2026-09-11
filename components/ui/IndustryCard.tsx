import React from "react";
import Link from "next/link";
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
  id,
  title,
  category,
  description,
  icon,
  keyFeatures,
  metrics: _metrics,
  techStack,
  highlight = false,
}: IndustryCardProps) {
  const detailUrl = `/industries/${id}`;

  return (
    <article
      className={`group relative flex flex-col h-full rounded-2xl p-6 sm:p-8 transition-all duration-300 border ${
        highlight
          ? "bg-gradient-to-b from-[#071A3D] to-[#041026] border-[#0D47A1]/50 text-white shadow-xl"
          : "bg-white border-[#D9E1EC] hover:border-[#0B3D91] hover:shadow-xl hover:-translate-y-1"
      }`}
    >
      {/* Category Tag & Icon */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <Link
            href={detailUrl}
            className={`w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
              highlight
                ? "bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30"
                : "bg-[#0B3D91]/10 text-[#0B3D91] border border-[#0B3D91]/20"
            }`}
          >
            {icon}
          </Link>
          <span
            className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
              highlight
                ? "bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30"
                : "bg-[#F7F9FC] text-[#4A5568] border border-[#D9E1EC]"
            }`}
          >
            {category}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3">
        <Link
          href={detailUrl}
          className={`transition-colors duration-200 ${
            highlight
              ? "text-white group-hover:text-[#D4AF37]"
              : "text-[#1A1A1A] group-hover:text-[#0B3D91]"
          }`}
        >
          {title}
        </Link>
      </h3>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed mb-6 flex-grow ${
          highlight ? "text-slate-300" : "text-[#4A5568]"
        }`}
      >
        {description}
      </p>

      {/* Key Features List */}
      <div className="mb-6 pt-4 border-t border-[#F0F4FA]">
        <h4
          className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
            highlight ? "text-[#D4AF37]" : "text-[#718096]"
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
                  highlight ? "text-[#D4AF37]" : "text-[#0B3D91]"
                }`}
              />
              <span className={highlight ? "text-slate-200" : "text-[#1A1A1A]"}>
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
                ? "bg-[#041026] text-slate-300 border border-slate-700"
                : "bg-[#F7F9FC] text-[#4A5568] border border-[#D9E1EC]"
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
          href={detailUrl}
          variant={highlight ? "gold" : "primary"}
          size="sm"
          fullWidth
          rightIcon={<ArrowRightIcon size={14} />}
        >
          Explore Industry Solutions
        </Button>
      </div>
    </article>
  );
}
