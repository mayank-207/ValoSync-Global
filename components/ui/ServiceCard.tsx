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
      className={`group relative h-full p-8 rounded-2xl border transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden bg-white hover:shadow-2xl ${className}`}
      style={{
        borderColor: "var(--border-color)",
        animationDelay,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgb(6 182 212 / 0.05) 0%, rgb(11 27 61 / 0.03) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col gap-5">
        <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
          style={{
            background:
              "linear-gradient(135deg, rgb(6 182 212 / 0.1) 0%, rgb(30 58 138 / 0.1) 100%)",
            color: "var(--accent-color)",
          }}
        >
          {icon}
        </div>

        <div>
          <h3
            className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-accent"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h3>
          <p
            className="leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {description}
          </p>
        </div>

        <div className="mt-auto pt-2">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
            style={{ color: "var(--accent-color)" }}
          >
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
