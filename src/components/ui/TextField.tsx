"use client";

import { Eye, EyeClosed, X } from "lucide-react";
import { useId, useState, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

// Figma "Frame 7" + "Text Field" (UI page, 210:335 / 204:1447):
// label, 48px field, hint below. Error text replaces the hint.
export type TextFieldProps = {
  label: string;
  hint?: string;
  error?: string;
  /** Shows the clear (x) button while the field has a value. */
  onClear?: () => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "className">;

export function TextField({
  label,
  hint,
  error,
  onClear,
  type = "text",
  placeholder,
  id,
  value,
  ...props
}: TextFieldProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const messageId = `${inputId}-message`;
  const message = error ?? hint;
  const isPassword = type === "password";
  const [showPassword, setShowPassword] = useState(false);
  const hasValue = value !== undefined && value !== "";

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={inputId} className="text-th-h3 text-background-900">
        {label}
      </label>
      <div className="flex flex-col gap-1">
        {/* Empty field: sky border; filled: navy (Figma Placeholder vs Input). */}
        <div
          className={cn(
            "border-neon-navy bg-base-white focus-within:outline-neon-cyan has-[input:placeholder-shown]:border-plain-sky flex h-12 items-center gap-2 rounded-lg border px-4 focus-within:outline-2 focus-within:outline-offset-2",
            error &&
              "border-status-error has-[input:placeholder-shown]:border-status-error",
          )}
        >
          <input
            id={inputId}
            type={isPassword && showPassword ? "text" : type}
            // placeholder-shown only matches with a placeholder; " " keeps it working.
            placeholder={placeholder ?? " "}
            value={value}
            aria-invalid={error ? true : undefined}
            aria-describedby={message ? messageId : undefined}
            className="text-input text-base-black placeholder:text-base-muted min-w-0 flex-1 bg-transparent outline-none"
            {...props}
          />
          {onClear && hasValue && !isPassword && (
            <button
              type="button"
              aria-label="ล้างข้อความ"
              onClick={onClear}
              className="flex size-6 shrink-0 items-center justify-center"
            >
              <span className="bg-background-400 text-base-white flex size-4 items-center justify-center rounded-full">
                <X className="size-3" aria-hidden />
              </span>
            </button>
          )}
          {isPassword && (
            <button
              type="button"
              aria-label={showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
              aria-pressed={showPassword}
              onClick={() => setShowPassword((shown) => !shown)}
              className="text-background-400 shrink-0"
            >
              {/* Figma: eye-closed while the text is visible, eye while hidden. */}
              {showPassword ? (
                <EyeClosed className="size-6" aria-hidden />
              ) : (
                <Eye className="size-6" aria-hidden />
              )}
            </button>
          )}
        </div>
        {message && (
          <p
            id={messageId}
            className={cn(
              "text-button",
              error ? "text-status-error" : "text-background-900/60",
            )}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
