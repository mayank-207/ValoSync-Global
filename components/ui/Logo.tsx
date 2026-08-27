import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";
  const textColor = isLight ? "#FFFFFF" : "#1A1A1A";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3D91]/40 rounded-lg ${className}`}
      aria-label="VeloSync Global - Home"
    >
      {/* Official VeloSync Global Emblem Logo Mark */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center">
        <Image
          src="/images/logo.png"
          alt="VeloSync Global Emblem Logo"
          width={48}
          height={48}
          priority
          className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span
          className="text-lg sm:text-xl font-extrabold tracking-tight leading-none"
          style={{ color: textColor }}
        >
          VELOSYNC
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] mt-0.5 text-[#D4AF37]">
          Global
        </span>
      </div>
    </Link>
  );
}
