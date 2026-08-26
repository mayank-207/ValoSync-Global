import type { ReactNode } from "react";

type StatCardProps = {
  value: string;
  label: string;
  icon?: ReactNode;
  suffix?: string;
  className?: string;
};

export default function StatCard({
  value,
  label,
  icon,
  suffix,
  className = "",
}: StatCardProps) {
  return (
    <div
      className={`relative flex flex-col items-center sm:items-start gap-2 p-6 sm:p-8 rounded-2xl overflow-hidden ${className}`}
    >
      {icon && (
        <div
          className="absolute top-6 right-6 opacity-10"
          style={{ color: "var(--accent-color)" }}
        >
          {icon}
        </div>
      )}
      <div className="flex items-baseline gap-1">
        <span
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          style={{ color: "var(--text-light)" }}
        >
          {value}
        </span>
        {suffix && (
          <span
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold"
            style={{ color: "var(--accent-color)" }}
          >
            {suffix}
          </span>
        )}
      </div>
      <p
        className="text-sm sm:text-base font-medium"
        style={{ color: "rgb(203 213 225 / 0.85)" }}
      >
        {label}
      </p>
    </div>
  );
}
