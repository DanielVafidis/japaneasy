"use client";

import { useState } from "react";
import { Dumbbell, RotateCcw } from "lucide-react";
import type { VocabEntry } from "@/content/types";
import type { Card } from "@/content/decks";
import { stripFurigana } from "@/lib/japanese";
import { checkFlashcardAnswer } from "@/lib/flashcard-review";
import { TypingFlashcard } from "@/components/flashcards/TypingFlashcard";
import { Button } from "@/components/ui/Button";

const MAX_WORDS = 4;

function toCard(v: VocabEntry): Card {
  const plain = stripFurigana(v.word);
  return {
    id: `practice:${plain}`,
    deck: "vocab",
    front: v.word,
    back: v.meaning,
    reading: v.reading,
    frontJp: true,
    speak: v.reading ?? plain,
  };
}

function sample(vocabulary: VocabEntry[]): Card[] {
  const pool = [...vocabulary];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, MAX_WORDS).map(toCard);
}

/**
 * Inline, non-scoring practice drill over a lesson's vocabulary:
 * shows the meaning, you type the Japanese (romaji auto-converts).
 */
export function VocabCheck({ vocabulary }: { vocabulary: VocabEntry[] }) {
  const [cards, setCards] = useState<Card[] | null>(null);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  function start() {
    setCards(sample(vocabulary));
    setIndex(0);
    setValue("");
    setSubmitted(false);
    setCorrect(null);
    setScore(0);
    setDone(false);
  }

  if (!cards) {
    return (
      <div className="mt-4 flex justify-center border-t border-line/70 pt-4">
        <Button variant="outline" size="sm" onClick={start}>
          <Dumbbell className="h-4 w-4" />
          Practice these words
        </Button>
      </div>
    );
  }

  if (done) {
    return (
      <div className="mt-4 flex flex-col items-center gap-2 border-t border-line/70 pt-4 text-center">
        <p className="text-sm text-ink-soft">
          {score} / {cards.length} — {score === cards.length ? "all correct!" : "worth another look."}
        </p>
        <Button variant="outline" size="sm" onClick={start}>
          <RotateCcw className="h-4 w-4" /> Practice again
        </Button>
      </div>
    );
  }

  const card = cards[index];

  function submit() {
    if (submitted || !value.trim()) return;
    const ok = checkFlashcardAnswer(card, value);
    setSubmitted(true);
    setCorrect(ok);
    if (ok) setScore((s) => s + 1);
  }

  function next() {
    if (index + 1 >= cards!.length) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setValue("");
    setSubmitted(false);
    setCorrect(null);
  }

  return (
    <div className="mt-4 border-t border-line/70 pt-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-faint">
        Practice · {index + 1} / {cards.length}
      </p>
      <TypingFlashcard
        card={card}
        value={value}
        onChange={setValue}
        onSubmit={submit}
        onContinue={next}
        submitted={submitted}
        correct={correct}
      />
    </div>
  );
}
