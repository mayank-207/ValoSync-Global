import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg";
};

export default function Logo({
  variant = "dark",
  className = "",
  size = "md",
}: LogoProps) {
  const isLight = variant === "light";
  const textColor = isLight ? "var(--color-text-inverse)" : "var(--brand-secondary)";

  // Size styling maps for emblem and typography
  const sizeStyles = {
    sm: {
      wrapper: "gap-2 sm:gap-2.5",
      emblem: "w-8 h-8 sm:w-9 sm:h-9",
      title: "text-lg sm:text-xl font-black tracking-tight",
      subtitle: "text-[9px] sm:text-[10px] tracking-[0.25em] mt-0.5",
      scale: "scale-105",
      imgSize: 40,
    },
    md: {
      wrapper: "gap-2.5 sm:gap-3",
      emblem: "w-10 h-10 sm:w-11 sm:h-11",
      title: "text-2xl sm:text-[25px] font-black tracking-tight",
      subtitle: "text-[10px] sm:text-[11px] tracking-[0.32em] mt-0.5",
      scale: "scale-110",
      imgSize: 50,
    },
    lg: {
      wrapper: "gap-3 sm:gap-3.5",
      emblem: "w-14 h-14 sm:w-16 sm:h-16",
      title: "text-3xl sm:text-4xl font-black tracking-tight",
      subtitle: "text-xs sm:text-sm tracking-[0.32em] mt-1",
      scale: "scale-110",
      imgSize: 72,
    },
  };

  const currentSize = sizeStyles[size] || sizeStyles.md;

  return (
    <Link
      href="/"
      className={`inline-flex items-center align-middle group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-xl transition-opacity hover:opacity-95 ${currentSize.wrapper} ${className}`}
      aria-label="ValoSync Global - Home"
    >
      {/* Official ValoSync Global Emblem Logo Mark */}
      <div
        className={`relative flex-shrink-0 flex items-center justify-center overflow-visible ${currentSize.emblem}`}
      >
        <Image
          src="/images/logo.png"
          alt="ValoSync Global Emblem Logo"
          width={currentSize.imgSize}
          height={currentSize.imgSize}
          priority
          className={`w-full h-full object-contain filter drop-shadow-sm ${currentSize.scale} group-hover:scale-115 transition-transform duration-300 ease-out`}
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center select-none">
        <span
          className={`${currentSize.title} leading-none`}
          style={{ color: textColor }}
        >
          VALOSYNC
        </span>
        <span
          className={`${currentSize.subtitle} font-extrabold uppercase text-gold leading-none`}
        >
          Global
        </span>
      </div>
    </Link>
  );
}
