"use client";

import { useState } from "react";
import { Grid3x3, ListChecks, PencilLine } from "lucide-react";
import type { KanaScript } from "@/content/kana";
import { cardsForDeck } from "@/content/decks";
import { KanaGrid, KanaChips } from "@/components/kana/KanaGrid";
import { KanaQuiz } from "@/components/kana/KanaQuiz";
import { KanaWriter } from "@/components/kana/KanaWriter";
import { AddToDeckButton } from "@/components/AddToDeckButton";
import { cn } from "@/lib/cn";

type Mode = "chart" | "quiz" | "write";

export function KanaTrainer() {
  const [script, setScript] = useState<KanaScript>("hira");
  const [mode, setMode] = useState<Mode>("chart");

  const deckId = script === "hira" ? "kana-hira" : "kana-kata";
  const kanaIds = cardsForDeck(deckId).map((c) => c.id);

  return (
    <div className="flex flex-col gap-6">
      {/* top controls */}
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="inline-flex rounded-full border border-line bg-surface p-1">
          {(
            [
              { id: "hira", label: "Hiragana", jp: "ひらがな" },
              { id: "kata", label: "Katakana", jp: "カタカナ" },
            ] as const
          ).map((s) => (
            <button
              key={s.id}
              onClick={() => setScript(s.id)}
              className={cn(
                "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
                script === s.id
                  ? "bg-shu text-white shadow-sm"
                  : "text-ink-soft hover:text-ink",
              )}
            >
              <span className="font-jp text-base">{s.jp}</span>
              <span className="hidden sm:inline">{s.label}</span>
            </button>
          ))}
        </div>

        <div className="inline-flex rounded-full border border-line bg-surface p-1">
          {(
            [
              { id: "chart", label: "Chart", icon: <Grid3x3 className="h-4 w-4" /> },
              { id: "quiz", label: "Quiz", icon: <ListChecks className="h-4 w-4" /> },
              { id: "write", label: "Write", icon: <PencilLine className="h-4 w-4" /> },
            ] as const
          ).map((m) => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all",
                mode === m.id
                  ? "bg-ai text-white shadow-sm"
                  : "text-ink-soft hover:text-ink",
              )}
            >
              {m.icon}
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {mode === "chart" && (
        <div className="flex flex-col gap-8">
          <div className="flex justify-end">
            <AddToDeckButton
              ids={kanaIds}
              label={`Add ${kanaIds.length} to flashcards`}
              size="md"
            />
          </div>
          <KanaGrid script={script} />
          <Section title="Dakuten & Handakuten" subtitle="濁点・半濁点">
            <KanaChips script={script} set="dakuten" />
          </Section>
          <Section title="Combinations" subtitle="拗音 (yōon)">
            <KanaChips script={script} set="yoon" />
          </Section>
          <p className="text-center text-sm text-ink-faint">
            Tap any character to hear it pronounced.
          </p>
        </div>
      )}

      {mode === "quiz" && <KanaQuiz key={script} script={script} />}
      {mode === "write" && <KanaWriter key={script} script={script} />}
    </div>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline gap-2">
        <h3 className="font-display text-lg text-ink">{title}</h3>
        <span className="font-jp text-sm text-ink-faint">{subtitle}</span>
      </div>
      {children}
    </div>
  );
}
