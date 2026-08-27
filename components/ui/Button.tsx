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
  primary: "button-primary",
  secondary: "button-secondary",
  outline: "button-outline",
  ghost: "button-ghost",
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
    button
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
