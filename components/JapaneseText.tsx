"use client";

import { useStore } from "@/lib/store";
import { parseFurigana, toRomaji } from "@/lib/japanese";
import { cn } from "@/lib/cn";

export function JapaneseText({
  text,
  className,
  romajiClassName,
  showFurigana,
  showRomaji,
  align = "start",
}: {
  text: string;
  className?: string;
  romajiClassName?: string;
  showFurigana?: boolean;
  showRomaji?: boolean;
  align?: "start" | "center";
}) {
  const storeFuri = useStore((s) => s.showFurigana);
  const storeRomaji = useStore((s) => s.showRomaji);

  const furi = showFurigana ?? storeFuri;
  const romaji = showRomaji ?? storeRomaji;

  const tokens = parseFurigana(text);

  return (
    <span
      className={cn(
        "inline-flex flex-col gap-0.5",
        align === "center" ? "items-center" : "items-start",
      )}
    >
      <span lang="ja" className={cn("font-jp leading-relaxed", className)}>
        {tokens.map((t, i) =>
          t.rt && furi ? (
            <ruby key={i} className="mx-px">
              {t.base}
              <rt className="font-sans text-[0.55em] font-normal text-ink-faint">
                {t.rt}
              </rt>
            </ruby>
          ) : (
            <span key={i}>{t.base}</span>
          ),
        )}
      </span>
      {romaji && (
        <span
          className={cn(
            "font-sans text-sm italic text-ink-faint",
            romajiClassName,
          )}
        >
          {toRomaji(text)}
        </span>
      )}
    </span>
  );
}
