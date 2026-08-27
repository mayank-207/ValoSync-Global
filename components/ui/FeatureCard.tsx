import type { ReactNode } from "react";

type FeatureCardProps = {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
  number?: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
  className = "",
  number,
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col gap-3 p-6 rounded-2xl border border-[#D9E1EC] bg-white shadow-sm transition-all duration-300 hover:border-[#0D47A1]/40 hover:shadow-md ${className}`}
    >
      {number && (
        <span className="text-4xl font-extrabold text-[#D4AF37]/40 select-none">
          {number}
        </span>
      )}
      {icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0D47A1]/10 text-[#0D47A1] border border-[#0D47A1]/20">
          {icon}
        </div>
      )}
      <h4 className="text-lg font-bold text-[#1A1A1A]">
        {title}
      </h4>
      <p className="text-sm leading-relaxed text-[#4A5568]">
        {description}
      </p>
    </div>
  );
}
