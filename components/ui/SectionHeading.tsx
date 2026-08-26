type SectionHeadingProps = {
  eyebrow?: string;
  badge?: string;
  title: string;
  description?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  center?: boolean;
  className?: string;
  titleClassName?: string;
  maxWidth?: string;
};

export default function SectionHeading({
  eyebrow,
  badge,
  title,
  description,
  subtitle,
  align,
  center,
  className = "",
  titleClassName = "",
  maxWidth = "3xl",
}: SectionHeadingProps) {
  const finalEyebrow = eyebrow || badge;
  const finalDescription = description || subtitle;
  const finalAlign = align || (center ? "center" : "left");

  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const maxWidthClass =
    maxWidth === "2xl"
      ? "max-w-2xl"
      : maxWidth === "4xl"
        ? "max-w-4xl"
        : maxWidth === "5xl"
          ? "max-w-5xl"
          : "max-w-3xl";

  return (
    <div
      className={`flex flex-col gap-4 ${alignClasses[finalAlign]} ${maxWidthClass} ${className}`}
    >
      {finalEyebrow && (
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
        >
          <span
            className="w-2 h-2 rounded-full bg-cyan-500"
          />
          {finalEyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900 dark:text-white ${titleClassName}`}
      >
        {title}
      </h2>
      {finalDescription && (
        <p
          className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
        >
          {finalDescription}
        </p>
      )}
    </div>
  );
}
