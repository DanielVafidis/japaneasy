import { Fragment } from "react";

/**
 * Inline prose renderer.
 *   {{日本語}} -> rendered in the Japanese font
 *   **bold**   -> bold
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\{\{.*?\}\}|\*\*.*?\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("{{") && part.endsWith("}}")) {
          return (
            <span key={i} className="font-jp font-medium text-ink">
              {part.slice(2, -2)}
            </span>
          );
        }
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-ink">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
