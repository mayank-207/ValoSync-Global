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
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3D91] mb-1 block">
          {finalEyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl pb-4 lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-[#1A1A1A] ${titleClassName}`}
      >
        {title}
      </h2>
      {finalDescription && (
        <p className="text-base sm:text-lg mb-2 leading-relaxed text-[#4A5568]">
          {finalDescription}
        </p>
      )}
    </div>
  );
}
