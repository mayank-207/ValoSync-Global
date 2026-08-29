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
  const textColor = isLight ? "#FFFFFF" : "#071A33";

  // Size styling maps for emblem and typography
  const sizeStyles = {
    sm: {
      wrapper: "gap-2.5",
      emblem: "w-9 h-9 sm:w-10 sm:h-10",
      title: "text-lg sm:text-xl font-black tracking-tight",
      subtitle: "text-[9px] sm:text-[10px] tracking-[0.25em] mt-0.5",
      scale: "scale-115",
      imgSize: 44,
    },
    md: {
      wrapper: "gap-3 sm:gap-3.5",
      emblem: "w-11 h-11 sm:w-12 sm:h-12",
      title: "text-2xl sm:text-[25px] font-black tracking-tight",
      subtitle: "text-[10px] sm:text-[11px] tracking-[0.32em] mt-0.5",
      scale: "scale-125",
      imgSize: 58,
    },
    lg: {
      wrapper: "gap-4",
      emblem: "w-16 h-16 sm:w-20 sm:h-20",
      title: "text-3xl sm:text-4xl font-black tracking-tight",
      subtitle: "text-xs sm:text-sm tracking-[0.32em] mt-1",
      scale: "scale-125",
      imgSize: 84,
    },
  };

  const currentSize = sizeStyles[size] || sizeStyles.md;

  return (
    <Link
      href="/"
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3D91]/40 rounded-xl transition-opacity hover:opacity-95 ${currentSize.wrapper} ${className}`}
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
          className={`w-full h-full object-contain filter drop-shadow-sm ${currentSize.scale} group-hover:scale-130 transition-transform duration-300 ease-out`}
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
          className={`${currentSize.subtitle} font-extrabold uppercase text-[#D4AF37] leading-none`}
        >
          Global
        </span>
      </div>
    </Link>
  );
}
