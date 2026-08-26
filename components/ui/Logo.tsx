import Link from "next/link";
/* 
  =============================================================================
  TEMPORARY LOGO PLACEHOLDER FOR VELOSYNC GLOBAL
  =============================================================================
  HOW TO REPLACE WITH FINAL LOGO:
  1. Save your final logo SVG or PNG in `public/images/logo.svg` or `public/images/logo.png`.
  2. Import Image from "next/image".
  3. Replace the SVG icon mark below with:
     <Image src="/images/logo.svg" alt="Velosync Global" width={160} height={40} priority />
  =============================================================================
*/

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";
  const textColor = isLight ? "var(--text-light)" : "var(--text-primary)";
  const subTextColor = isLight ? "var(--accent-color)" : "var(--accent-hover)";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-lg ${className}`}
      aria-label="Velosync Global - Home"
    >
      {/* Temporary Logo Icon Emblem */}
      <span className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B1B3D] via-[#1E3A8A] to-[#06B6D4] p-0.5 shadow-md transition-transform duration-300 group-hover:scale-105">
        <span className="w-full h-full bg-[#0B1B3D] rounded-[10px] flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-accent"
            aria-hidden="true"
          >
            <path
              d="M12 2L3 7V12C3 17.52 6.84 22.74 12 24C17.16 22.74 21 17.52 21 12V7L12 2Z"
              stroke="#06B6D4"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 12.5L11 15L15.5 9.5"
              stroke="#06B6D4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span
          className="text-lg sm:text-xl font-extrabold tracking-tight leading-none"
          style={{ color: textColor }}
        >
          VELOSYNC
          <span style={{ color: "var(--accent-color)" }}>.</span>
        </span>
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.2em] mt-0.5"
          style={{ color: subTextColor }}
        >
          Global
        </span>
      </div>
    </Link>
  );
}
