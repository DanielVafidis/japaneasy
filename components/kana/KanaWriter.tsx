"use client";

import { useState } from "react";
import { gojuon, kanaOf, type KanaScript } from "@/content/kana";
import { KANA_VIEWBOX, kanaStrokes } from "@/content/kana-strokes";
import { GlyphWriter } from "@/components/writer/GlyphWriter";

export function KanaWriter({ script }: { script: KanaScript }) {
  const [index, setIndex] = useState(0);

  const char = gojuon[index];
  const glyph = kanaOf(char, script);

  function go(delta: number) {
    setIndex((i) => (i + delta + gojuon.length) % gojuon.length);
  }

  return (
    <GlyphWriter
      glyph={glyph}
      caption={
        <span className="text-sm uppercase tracking-wide text-ink-faint">
          {char.romaji}
        </span>
      }
      paths={kanaStrokes[glyph]}
      strokeCount={char.strokes?.[script === "hira" ? 0 : 1]}
      audioText={glyph}
      viewBox={KANA_VIEWBOX}
      onPrev={() => go(-1)}
      onNext={() => go(1)}
    />
  );
}
