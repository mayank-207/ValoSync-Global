import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "./Icons";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  className?: string;
  index?: number;
};

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  className = "",
  index = 0,
}: ServiceCardProps) {
  const animationDelay = `${100 + index * 100}ms`;

  const content = (
    <article
      className={`group relative h-full p-8 rounded-2xl border border-[#D9E1EC] bg-white shadow-sm hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1.5 overflow-hidden ${className}`}
      style={{
        animationDelay,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(13, 71, 161, 0.04) 0%, rgba(7, 26, 61, 0.02) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col gap-5">
        <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#0D47A1]/10 text-[#0D47A1] border border-[#0D47A1]/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0D47A1] group-hover:text-white"
        >
          {icon}
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3 text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#0D47A1]">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-[#4A5568]">
            {description}
          </p>
        </div>

        <div className="mt-auto pt-2">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0D47A1] transition-all duration-300 group-hover:gap-3 group-hover:text-[#0D47A1]">
            Explore More
            <ArrowRightIcon size={16} />
          </span>
        </div>
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-2xl">
        {content}
      </Link>
    );
  }

  return content;
}
