import Image from "next/image";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

// Figma "Button" (UI page, 288:863): Property × Size × Color.
// Flattened to one variant; CTA variants are only designed at size lg.
type ButtonVariant = "navy" | "lavender" | "ctaNavy" | "ctaCream";
type ButtonSize = "lg" | "md" | "sm";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// Height, padding, radius, text style and icon size per Figma size.
const sizeStyles: Record<ButtonSize, string> = {
  lg: "h-14 px-6 rounded-full text-button-lg [&_svg]:size-6",
  // Figma md uses 16px Regular / 1.5, which is the Form Input style.
  md: "h-12 px-6 rounded-full text-input [&_svg]:size-5",
  sm: "h-10 px-4 rounded-lg text-button [&_svg]:size-4",
};

const ctaStyle = "shadow-[inset_0_4px_4px_0_rgba(219,188,245,0.25)]";

const variantStyles: Record<ButtonVariant, string> = {
  navy: "bg-neon-navy text-plain-cream",
  // shortcut: cream on lavender is ~1.4:1 contrast, as designed; flag for UX/UI.
  lavender: "bg-plain-lavender text-plain-cream",
  ctaNavy: cn("bg-background-900 text-plain-cream", ctaStyle),
  ctaCream: cn("bg-plain-cream text-background-900", ctaStyle),
};

// Figma has no hover/disabled states; disabled dims like WebPromote's Button.
const baseStyle =
  "relative inline-flex items-center justify-center gap-2 overflow-hidden transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-cyan disabled:pointer-events-none disabled:opacity-50";

/** Button classes without the <button>, for links that look like buttons. */
export function buttonClassName({
  variant = "navy",
  size = "lg",
  className,
}: Pick<ButtonProps, "variant" | "size" | "className">) {
  return cn(baseStyle, sizeStyles[size], variantStyles[variant], className);
}

/**
 * Sparkle artwork on CTA buttons: a crop of one illustration, placed
 * top-left on navy and rotated on the right edge on cream (per Figma).
 */
function Sparkle({ variant }: { variant: "ctaNavy" | "ctaCream" }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute h-[132px] w-[130px] overflow-hidden",
        variant === "ctaNavy"
          ? "top-[-35px] left-[-35px]"
          : "top-[-35px] right-[-42px] rotate-90",
      )}
    >
      <Image
        src="/images/sparkle.png"
        alt=""
        width={1080}
        height={1350}
        className="absolute top-[-67.47%] left-[-22.55%] h-[360%] w-[293.48%] max-w-none"
      />
    </span>
  );
}

export function Button({
  variant = "navy",
  size = "lg",
  // Default to "button" so it never submits a form by accident.
  type = "button",
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClassName({ variant, size, className })}
      {...props}
    >
      {(variant === "ctaNavy" || variant === "ctaCream") && (
        <Sparkle variant={variant} />
      )}
      {leftIcon}
      <span className="relative">{children}</span>
      {rightIcon}
    </button>
  );
}
