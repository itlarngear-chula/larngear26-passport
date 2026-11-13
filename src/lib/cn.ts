import { extendTailwindMerge } from "tailwind-merge";

/**
 * Teach tailwind-merge our custom text-* style utilities (globals.css).
 * Without this it treats them as text colors, so
 * cn("text-body", "text-neon-cyan") would drop the font style.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "th-display",
            "th-accent",
            "th-h1",
            "th-h2",
            "th-h3",
            "th-h4",
            "body-lg",
            "body",
            "body-sm",
            "input",
            "button-lg",
            "button",
            "caption",
            "en-display",
            "en-accent",
            "en-h1",
            "en-h2",
          ],
        },
      ],
    },
  },
});

/** Join class names, dropping falsy ones; later classes win on conflict. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return twMerge(classes.filter(Boolean).join(" "));
}
