"use client";

import {
  gojuonRows,
  dakuten,
  yoon,
  vowelHeaders,
  kanaOf,
  type KanaChar,
  type KanaScript,
} from "@/content/kana";
import { speak } from "@/lib/speech";
import { cn } from "@/lib/cn";

export function KanaCell({
  char,
  script,
  className,
}: {
  char: KanaChar;
  script: KanaScript;
  className?: string;
}) {
  const glyph = kanaOf(char, script);
  return (
    <button
      type="button"
      onClick={() => speak(glyph, { raw: true })}
      className={cn(
        "group flex aspect-square flex-col items-center justify-center rounded-xl border border-line bg-surface transition-all hover:-translate-y-0.5 hover:border-shu/50 hover:bg-surface hover:shadow-sm active:scale-95",
        className,
      )}
      title={`${glyph} · ${char.romaji}`}
    >
      <span className="font-jp text-2xl leading-none text-ink sm:text-[1.7rem]">
        {glyph}
      </span>
      <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-wide text-ink-faint group-hover:text-shu">
        {char.romaji}
      </span>
    </button>
  );
}

export function KanaGrid({ script }: { script: KanaScript }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[20rem]">
        <div className="mb-1.5 grid grid-cols-[1.4rem_repeat(5,1fr)] gap-1.5">
          <span />
          {vowelHeaders.map((v) => (
            <span
              key={v}
              className="text-center text-[0.65rem] font-semibold uppercase tracking-widest text-ink-faint"
            >
              {v}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          {gojuonRows.map((row, ri) => (
            <div
              key={ri}
              className="grid grid-cols-[1.4rem_repeat(5,1fr)] items-center gap-1.5"
            >
              <span className="text-center text-[0.65rem] font-semibold uppercase text-ink-faint">
                {row.consonant}
              </span>
              {row.cells.map((cell, ci) =>
                cell ? (
                  <KanaCell key={ci} char={cell} script={script} />
                ) : (
                  <span key={ci} />
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function KanaChips({
  script,
  set,
}: {
  script: KanaScript;
  set: "dakuten" | "yoon";
}) {
  const chars = set === "dakuten" ? dakuten : yoon;
  return (
    <div className="grid grid-cols-5 gap-1.5 sm:grid-cols-8 md:grid-cols-10">
      {chars.map((c) => (
        <KanaCell key={c.romaji + c.hira} char={c} script={script} />
      ))}
    </div>
  );
}
