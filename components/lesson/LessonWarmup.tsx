"use client";

import { useState } from "react";
import { Brain, CheckCircle2, X } from "lucide-react";
import { useStore } from "@/lib/store";
import { useDueStates } from "@/lib/review";
import { getCard } from "@/content/decks";
import { checkFlashcardAnswer } from "@/lib/flashcard-review";
import { todayStr } from "@/lib/datetime";
import { TypingFlashcard } from "@/components/flashcards/TypingFlashcard";
import { Button } from "@/components/ui/Button";

const MAX_CARDS = 5;

/**
 * Optional warm-up before a new lesson: a handful of due reviews, offered
 * at most once a day. Reviews are graded for real (good/again), so they
 * count toward the daily goal.
 */
export function LessonWarmup() {
  const hasHydrated = useStore((s) => s.hasHydrated);
  const lastWarmupDate = useStore((s) => s.lastWarmupDate);
  const markWarmupToday = useStore((s) => s.markWarmupToday);
  const reviewCard = useStore((s) => s.reviewCard);

  const due = useDueStates();

  const [phase, setPhase] = useState<"offer" | "active" | "done">("offer");
  const [dismissed, setDismissed] = useState(false);
  const [queue, setQueue] = useState<string[]>([]);
  const [pos, setPos] = useState(0);
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState<boolean | null>(null);

  const offeredToday = lastWarmupDate === todayStr();

  if (!hasHydrated || dismissed) return null;
  if (phase === "offer" && (offeredToday || due.length === 0)) return null;

  function start() {
    const ids = [...due]
      .sort((a, b) => a.due - b.due)
      .slice(0, MAX_CARDS)
      .map((c) => c.id);
    markWarmupToday();
    setQueue(ids);
    setPos(0);
    setValue("");
    setSubmitted(false);
    setCorrect(null);
    setPhase("active");
  }

  function skip() {
    markWarmupToday();
    setDismissed(true);
  }

  const card = phase === "active" ? getCard(queue[pos]) : undefined;

  function submit() {
    if (submitted || !value.trim() || !card) return;
    setSubmitted(true);
    setCorrect(checkFlashcardAnswer(card, value));
  }

  function next() {
    if (!submitted || correct === null) return;
    reviewCard(queue[pos], correct ? "good" : "again");
    if (pos + 1 >= queue.length) {
      setPhase("done");
      return;
    }
    setPos((p) => p + 1);
    setValue("");
    setSubmitted(false);
    setCorrect(null);
  }

  if (phase === "offer") {
    const count = Math.min(due.length, MAX_CARDS);
    return (
      <section className="mb-10 animate-fade-up rounded-3xl border border-ai/25 bg-ai/[0.04] p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-ai/10 text-ai">
            <Brain className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="font-display text-lg text-ink">Warm up first?</h2>
            <p className="mt-1 text-sm leading-6 text-ink-soft">
              {due.length} card{due.length === 1 ? "" : "s"} waiting — a quick{" "}
              {count}-card review before the new material helps it stick.
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <Button variant="secondary" size="sm" onClick={start} className="w-full sm:w-auto">
            <Brain className="h-4 w-4" />
            Review {count} card{count === 1 ? "" : "s"}
          </Button>
          <Button variant="ghost" size="sm" onClick={skip} className="w-full sm:w-auto">
            Skip for today
          </Button>
        </div>
      </section>
    );
  }

  if (phase === "active" && card) {
    return (
      <section className="mb-10 animate-fade-in">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest text-ink-faint">
            Warm-up · {pos + 1} / {queue.length}
          </span>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="inline-flex items-center gap-1 text-sm text-ink-faint transition-colors hover:text-shu"
          >
            <X className="h-4 w-4" /> Skip to the lesson
          </button>
        </div>
        <TypingFlashcard
          card={card}
          value={value}
          onChange={setValue}
          onSubmit={submit}
          onContinue={next}
          submitted={submitted}
          correct={correct}
        />
      </section>
    );
  }

  if (phase === "done") {
    return (
      <section className="mb-10 flex animate-fade-up items-center gap-3 rounded-2xl border border-matcha/30 bg-matcha/[0.08] px-5 py-4 text-matcha">
        <CheckCircle2 className="h-5 w-5 shrink-0" />
        <p className="text-sm font-medium">
          Warm-up done — {queue.length} card{queue.length === 1 ? "" : "s"}{" "}
          reviewed. On to the lesson.
        </p>
      </section>
    );
  }

  return null;
}
