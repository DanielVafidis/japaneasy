"use client";

import { useState } from "react";
import { ArrowRight, BookOpenCheck, CheckCircle2, X } from "lucide-react";
import type { VocabEntry } from "@/content/types";
import { useStore } from "@/lib/store";
import { checkFlashcardAnswer } from "@/lib/flashcard-review";
import { practiceCard } from "@/lib/lesson-cards";
import { stripFurigana } from "@/lib/japanese";
import { JapaneseText } from "@/components/JapaneseText";
import { AudioButton } from "@/components/AudioButton";
import { TypingFlashcard } from "@/components/flashcards/TypingFlashcard";
import { Button } from "@/components/ui/Button";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Guided learn mode for a lesson's vocabulary: meet each word (reading,
 * meaning, audio), then type them all from recall — misses show the answer
 * and come back until they stick. Words join the review deck at the end.
 */
export function LearnVocab({
  vocabulary,
  onClose,
}: {
  vocabulary: VocabEntry[];
  onClose: () => void;
}) {
  const addCards = useStore((s) => s.addCards);

  const [phase, setPhase] = useState<"intro" | "drill" | "done">("intro");
  const [introIdx, setIntroIdx] = useState(0);
  const [queue, setQueue] = useState<VocabEntry[]>([]);
  const [pos, setPos] = useState(0);
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [missedWords, setMissedWords] = useState<Set<string>>(new Set());
  const [addedCount, setAddedCount] = useState(0);

  function startDrill() {
    setQueue(shuffle(vocabulary));
    setPos(0);
    setValue("");
    setSubmitted(false);
    setCorrect(null);
    setPhase("drill");
  }

  function finish() {
    const ids = vocabulary.map((v) => `vocab:${stripFurigana(v.word)}`);
    setAddedCount(addCards(ids));
    setPhase("done");
  }

  const entry = queue[pos];

  function submitDrill() {
    if (submitted || !value.trim() || !entry) return;
    const ok = checkFlashcardAnswer(practiceCard(entry), value);
    setSubmitted(true);
    setCorrect(ok);
    if (!ok) {
      setMissedWords((m) => new Set(m).add(stripFurigana(entry.word)));
    }
  }

  function continueDrill() {
    if (!submitted || !entry) return;
    const nextQueue = correct ? queue : [...queue, entry];
    if (pos + 1 >= nextQueue.length) {
      finish();
      return;
    }
    setQueue(nextQueue);
    setPos((p) => p + 1);
    setValue("");
    setSubmitted(false);
    setCorrect(null);
  }

  const closeLink = (
    <button
      type="button"
      onClick={onClose}
      className="inline-flex items-center gap-1 text-sm text-ink-faint transition-colors hover:text-shu"
    >
      <X className="h-4 w-4" /> Back to word list
    </button>
  );

  if (phase === "intro") {
    const v = vocabulary[introIdx];
    const last = introIdx + 1 >= vocabulary.length;
    return (
      <div className="animate-fade-in">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest text-ink-faint">
            New word · {introIdx + 1} / {vocabulary.length}
          </span>
          {closeLink}
        </div>
        <div
          key={introIdx}
          className="flex animate-fade-up flex-col items-center gap-3 rounded-3xl border border-line bg-surface px-6 py-8 text-center card-shadow"
        >
          <JapaneseText text={v.word} className="text-4xl sm:text-5xl" />
          {v.reading && stripFurigana(v.word) !== v.reading && (
            <p className="font-jp text-ink-faint">{v.reading}</p>
          )}
          <p className="text-lg text-ink">{v.meaning}</p>
          {v.note && <p className="text-sm italic text-ink-faint">{v.note}</p>}
          <AudioButton text={v.reading ?? stripFurigana(v.word)} />
          <Button
            onClick={() => (last ? startDrill() : setIntroIdx((i) => i + 1))}
            className="mt-2 w-full sm:w-auto sm:min-w-48"
          >
            {last ? "Practice them all" : "Next word"}
            <ArrowRight className="h-4 w-4" />
          </Button>
          {!last && (
            <button
              type="button"
              onClick={startDrill}
              className="text-sm text-ink-faint transition-colors hover:text-shu"
            >
              Skip ahead to practice
            </button>
          )}
        </div>
      </div>
    );
  }

  if (phase === "drill" && entry) {
    const remaining = queue.length - pos;
    return (
      <div className="animate-fade-in">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest text-ink-faint">
            Type the word · {remaining} to go
          </span>
          {closeLink}
        </div>
        <TypingFlashcard
          card={practiceCard(entry)}
          value={value}
          onChange={setValue}
          onSubmit={submitDrill}
          onContinue={continueDrill}
          submitted={submitted}
          correct={correct}
        />
      </div>
    );
  }

  const learned = vocabulary.length - missedWords.size;
  return (
    <div className="flex animate-fade-up flex-col items-center gap-3 rounded-3xl border border-matcha/30 bg-matcha/[0.06] px-6 py-8 text-center">
      <CheckCircle2 className="h-8 w-8 text-matcha" />
      <div>
        <p className="font-display text-xl text-ink">
          {vocabulary.length} word{vocabulary.length === 1 ? "" : "s"} learned
        </p>
        <p className="mt-1 text-sm text-ink-soft">
          {learned} / {vocabulary.length} on the first try
          {addedCount > 0
            ? ` · ${addedCount} added to your review deck`
            : " · already in your review deck"}
        </p>
      </div>
      <Button onClick={onClose} variant="outline" size="sm">
        <BookOpenCheck className="h-4 w-4" /> Back to the lesson
      </Button>
    </div>
  );
}
