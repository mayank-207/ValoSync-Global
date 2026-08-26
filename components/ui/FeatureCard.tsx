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
      className={`flex flex-col gap-3 p-6 rounded-xl border transition-all duration-300 hover:border-accent/30 hover:shadow-lg ${className}`}
      style={{
        background: "var(--surface-color)",
        borderColor: "var(--border-color)",
      }}
    >
      {number && (
        <span
          className="text-4xl font-extrabold opacity-10 select-none"
          style={{ color: "var(--accent-color)" }}
        >
          {number}
        </span>
      )}
      {icon && (
        <div
          className="inline-flex items-center justify-center w-12 h-12 rounded-lg"
          style={{
            background: "rgb(6 182 212 / 0.1)",
            color: "var(--accent-color)",
          }}
        >
          {icon}
        </div>
      )}
      <h4
        className="text-lg font-bold"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h4>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </p>
    </div>
  );
}
