import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

// Figma "Icon Button" (UI page, 402:477): 48px round target, 32px icon.
export type IconButtonProps = {
  /** Required: the button has no visible text. */
  label: string;
  icon: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export function IconButton({
  label,
  icon,
  type = "button",
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={cn(
        "text-neon-navy focus-visible:outline-neon-cyan inline-flex size-12 shrink-0 items-center justify-center rounded-full p-2 transition focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-8",
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  );
}
