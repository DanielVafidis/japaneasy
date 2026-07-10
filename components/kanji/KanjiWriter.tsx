"use client";

import { useState } from "react";
import type { Kanji } from "@/content/kanji";
import { KANJI_VIEWBOX, kanjiStrokes } from "@/content/kanji-strokes";
import { GlyphWriter } from "@/components/writer/GlyphWriter";

export function KanjiWriter({
  list,
  initialChar,
}: {
  list: Kanji[];
  initialChar?: string;
}) {
  const [index, setIndex] = useState(() => {
    const at = initialChar ? list.findIndex((k) => k.char === initialChar) : 0;
    return at >= 0 ? at : 0;
  });

  if (list.length === 0) return null;
  const k = list[Math.min(index, list.length - 1)];

  function go(delta: number) {
    setIndex((i) => (i + delta + list.length) % list.length);
  }

  return (
    <GlyphWriter
      glyph={k.char}
      caption={
        <span className="text-sm text-ink-faint">{k.meaning.split(";")[0]}</span>
      }
      paths={kanjiStrokes[k.char]}
      strokeCount={k.strokes}
      audioText={k.char}
      viewBox={KANJI_VIEWBOX}
      onPrev={() => go(-1)}
      onNext={() => go(1)}
    />
  );
}
