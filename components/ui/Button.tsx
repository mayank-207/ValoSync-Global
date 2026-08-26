import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & {
  as?: "link";
  href: string;
  target?: string;
  rel?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type ButtonAsAnchor = ButtonBaseProps & {
  as?: "a";
  href: string;
  target?: string;
  rel?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-accent to-accent-hover text-text-light shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:ring-accent/40",
  secondary:
    "bg-primary text-text-light hover:bg-primary-light focus:ring-primary/40",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-text-light focus:ring-primary/40 bg-transparent",
  ghost:
    "text-primary hover:bg-primary/5 focus:ring-primary/20 bg-transparent",
};

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    children,
    className = "",
    leftIcon,
    rightIcon,
    disabled = false,
    fullWidth = false,
    as,
    ...rest
  } = props;

  const baseClasses = `
    inline-flex items-center justify-center font-semibold rounded-xl
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-4 focus:ring-offset-2
    active:scale-[0.98]
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `.trim();

  const content = (
    <>
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </>
  );

  if (as === "link") {
    const { href, target, rel, ...linkRest } = rest as unknown as ButtonAsLink;
    return (
      <Link
        href={href}
        className={baseClasses}
        target={target}
        rel={rel}
        {...linkRest}
      >
        {content}
      </Link>
    );
  }

  if (as === "a") {
    const { href, target, rel, ...aRest } = rest as unknown as ButtonAsAnchor;
    return (
      <a
        href={href}
        className={baseClasses}
        target={target}
        rel={rel}
        {...aRest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      disabled={disabled}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
