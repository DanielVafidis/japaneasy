"use client";

import { useState } from "react";
import { Grid3x3, ListChecks, PencilLine } from "lucide-react";
import type { KanaScript } from "@/content/kana";
import { cardsForDeck } from "@/content/decks";
import { KanaGrid, KanaChips } from "@/components/kana/KanaGrid";
import { KanaQuiz } from "@/components/kana/KanaQuiz";
import { KanaWriter } from "@/components/kana/KanaWriter";
import { AddToDeckButton } from "@/components/AddToDeckButton";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { cn } from "@/lib/cn";

type Mode = "chart" | "quiz" | "write";

const SCRIPTS = [
  { id: "hira" as const, jp: "ひらがな", en: "Hiragana" },
  { id: "kata" as const, jp: "カタカナ", en: "Katakana" },
];

export function KanaTrainer() {
  const [script, setScript] = useState<KanaScript>("hira");
  const [mode, setMode] = useState<Mode>("chart");

  const deckId = script === "hira" ? "kana-hira" : "kana-kata";
  const kanaIds = cardsForDeck(deckId).map((c) => c.id);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5 sm:gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-4">
            {SCRIPTS.map((s) => (
              <ScriptButton
                key={s.id}
                active={script === s.id}
                jp={s.jp}
                en={s.en}
                onClick={() => setScript(s.id)}
              />
            ))}
          </div>

          <SegmentedControl
            aria-label="Study mode"
            value={mode}
            onChange={setMode}
            className="w-full sm:w-auto sm:min-w-[18rem]"
            options={[
              {
                value: "chart",
                label: "Chart",
                icon: <Grid3x3 className="h-4 w-4 shrink-0" />,
              },
              {
                value: "quiz",
                label: "Quiz",
                icon: <ListChecks className="h-4 w-4 shrink-0" />,
              },
              {
                value: "write",
                label: "Write",
                icon: <PencilLine className="h-4 w-4 shrink-0" />,
              },
            ]}
          />
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

function ScriptButton({
  active,
  jp,
  en,
  onClick,
}: {
  active: boolean;
  jp: string;
  en: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "flex min-h-[4.25rem] flex-col items-center justify-center gap-1.5 rounded-2xl border px-4 py-3 transition-all sm:min-w-[8.5rem] sm:px-5",
        active
          ? "border-shu/35 bg-surface text-ink card-shadow"
          : "border-line bg-surface-2/40 text-ink-soft hover:border-line-strong hover:bg-surface hover:text-ink",
      )}
    >
      <span className="font-jp text-xl leading-none sm:text-2xl">{jp}</span>
      <span
        className={cn(
          "text-xs font-medium tracking-wide",
          active ? "text-ink-soft" : "text-ink-faint",
        )}
      >
        {en}
      </span>
    </button>
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
