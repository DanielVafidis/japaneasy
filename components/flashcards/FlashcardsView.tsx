"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Layers,
  Sparkles,
  X,
} from "lucide-react";
import {
  deckMeta,
  cardsForDeck,
  getCard,
  vocabStageLabels,
  vocabCardsForStage,
  type DeckId,
} from "@/content/decks";
import type { StageId } from "@/content/types";
import { useStore } from "@/lib/store";
import { isDue, type Grade } from "@/lib/srs";
import { useDeckStat, useLeechStates, useTotalAdded, useVocabStageStat } from "@/lib/review";
import { LEECH_LAPSES } from "@/lib/srs";
import { TypingFlashcard } from "@/components/flashcards/TypingFlashcard";
import { checkFlashcardAnswer } from "@/lib/flashcard-review";
import { Button, ButtonLink } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";

export function FlashcardsView() {
  const searchParams = useSearchParams();
  const autoStarted = useRef(false);
  const cards = useStore((s) => s.cards);
  const reviewCard = useStore((s) => s.reviewCard);
  const totalAdded = useTotalAdded();
  const leeches = useLeechStates();

  const [mode, setMode] = useState<"overview" | "review" | "done">("overview");
  const [queue, setQueue] = useState<string[]>([]);
  const [pos, setPos] = useState(0);
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [reviewed, setReviewed] = useState(0);

  function buildDue(deck?: DeckId, stage?: StageId): string[] {
    const now = Date.now();
    return Object.values(cards)
      .filter((c) => {
        const meta = getCard(c.id);
        if (!meta) return false;
        if (deck && meta.deck !== deck) return false;
        if (stage && meta.stage !== stage) return false;
        return isDue(c, now);
      })
      .sort((a, b) => a.due - b.due)
      .map((c) => c.id);
  }

  const resetCardState = useCallback(() => {
    setInput("");
    setSubmitted(false);
    setCorrect(null);
  }, []);

  function start(deck?: DeckId, stage?: StageId) {
    startQueue(buildDue(deck, stage));
  }

  /** Start a session over an explicit card list (e.g. struggling cards). */
  function startQueue(ids: string[]) {
    if (ids.length === 0) return;
    setQueue(ids);
    setPos(0);
    resetCardState();
    setReviewed(0);
    setMode("review");
  }

  useEffect(() => {
    if (autoStarted.current) return;
    if (searchParams.get("review") !== "1") return;
    const q = buildDue();
    if (q.length === 0) return;
    autoStarted.current = true;
    start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, cards]);

  const advance = useCallback(
    (grade: Grade) => {
      const id = queue[pos];
      reviewCard(id, grade);
      setReviewed((r) => r + 1);
      if (pos + 1 >= queue.length) {
        setMode("done");
      } else {
        setPos((p) => p + 1);
        resetCardState();
      }
    },
    [queue, pos, reviewCard, resetCardState],
  );

  function submitAnswer() {
    if (submitted) return;
    const id = queue[pos];
    const card = getCard(id);
    if (!card) return;

    const trimmed = input.trim();
    if (!trimmed) return;

    const ok = checkFlashcardAnswer(card, trimmed);
    setSubmitted(true);
    setCorrect(ok);
  }

  const continueReview = useCallback(() => {
    if (!submitted || correct === null) return;
    advance(correct ? "good" : "again");
  }, [submitted, correct, advance]);

  useEffect(() => {
    if (mode !== "review") return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMode("overview");
        return;
      }
      if (submitted && e.key === "Enter") {
        e.preventDefault();
        continueReview();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mode, submitted, continueReview]);

  // ---- Review session ----
  if (mode === "review") {
    const id = queue[pos];
    const card = getCard(id);
    if (!card || !cards[id]) {
      setMode("overview");
      return null;
    }
    return (
      <div className="mx-auto max-w-lg">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-sm text-ink-soft">
            {pos + 1} / {queue.length}
          </span>
          <button
            onClick={() => setMode("overview")}
            className="inline-flex min-h-11 items-center gap-1 text-sm text-ink-faint hover:text-shu"
          >
            <X className="h-4 w-4" /> End session
          </button>
        </div>
        <ProgressBar value={((pos + 1) / queue.length) * 100} className="mb-6" />

        <TypingFlashcard
          card={card}
          value={input}
          onChange={setInput}
          onSubmit={submitAnswer}
          onContinue={continueReview}
          submitted={submitted}
          correct={correct}
        />

        <p className="mt-4 text-center text-xs text-ink-faint">
          {submitted
            ? "Press Enter or Continue for the next card · Esc to end"
            : "Type the answer · romaji converts to kana · kanji decks accept readings · Enter to check · Esc to end"}
        </p>
      </div>
    );
  }

  // ---- Done ----
  if (mode === "done") {
    return (
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-matcha/12 text-matcha">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h2 className="font-display text-3xl text-ink">Review complete</h2>
        <p className="mt-2 text-ink-soft">
          You reviewed {reviewed} card{reviewed === 1 ? "" : "s"}. Come back
          tomorrow to keep them fresh.
        </p>
        <Button className="mt-6" onClick={() => setMode("overview")}>
          Back to decks
        </Button>
      </div>
    );
  }

  // ---- Overview ----
  const totalDue = buildDue().length;

  return (
    <div className="flex flex-col gap-8">
      {totalAdded === 0 ? (
        <EmptyState />
      ) : (
        <div className="rounded-3xl border border-line bg-surface p-5 card-shadow sm:p-7">
          <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-shu">
                <Brain className="h-4 w-4" /> Spaced repetition
              </p>
              <h2 className="mt-1 font-display text-3xl text-ink">
                {totalDue > 0
                  ? `${totalDue} card${totalDue === 1 ? "" : "s"} due`
                  : "All caught up!"}
              </h2>
              <p className="mt-1 text-ink-soft">
                {totalDue > 0
                  ? "Type each answer from memory — correct cards move forward, misses come back soon."
                  : "Nothing to review right now. Keep learning — new material lands here automatically."}
              </p>
            </div>
            {totalDue > 0 && (
              <Button size="lg" onClick={() => start()}>
                Start review <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      )}

      {leeches.length > 0 && (
        <div className="flex flex-col items-start gap-3 rounded-3xl border border-gold/40 bg-gold/[0.07] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <h3 className="font-display text-lg text-ink">
              {leeches.length} struggling card{leeches.length === 1 ? "" : "s"}
            </h3>
            <p className="mt-1 text-sm text-ink-soft">
              Missed {LEECH_LAPSES}+ times each — a short focused pass helps
              more than meeting them scattered through reviews.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => startQueue(leeches.map((c) => c.id))}
            className="w-full shrink-0 sm:w-auto"
          >
            Practice {leeches.length}
          </Button>
        </div>
      )}

      <div>
        <h3 className="flex items-center gap-2 font-display text-xl text-ink">
          <Layers className="h-5 w-5 text-ink-soft" /> Review by deck
        </h3>
        <p className="mb-4 mt-1 text-sm text-ink-soft">
          Each deck fills up as you learn — review one on its own whenever you
          want a focused session.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {deckMeta.map((deck) =>
            deck.id === "vocab" ? (
              <VocabDeckCard key={deck.id} deck={deck} onReview={start} />
            ) : (
              <DeckCard key={deck.id} deck={deck} onReview={() => start(deck.id)} />
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function DeckCard({
  deck,
  onReview,
}: {
  deck: (typeof deckMeta)[number];
  onReview: () => void;
}) {
  const stat = useDeckStat(deck.id);
  const all = cardsForDeck(deck.id);
  const pct = all.length ? (stat.added / all.length) * 100 : 0;

  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-line bg-surface p-5 card-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-jp text-3xl text-shu/70">{deck.jp}</span>
          <div>
            <h4 className="font-display text-lg text-ink">{deck.title}</h4>
            <p className="text-xs text-ink-faint">{deck.description}</p>
          </div>
        </div>
        {stat.due > 0 && <Badge tone="shu">{stat.due} due</Badge>}
      </div>

      <div>
        <div className="mb-1.5 flex justify-between text-xs text-ink-soft">
          <span>
            {stat.added} / {all.length} learned
          </span>
          <span>{Math.round(pct)}%</span>
        </div>
        <ProgressBar value={pct} tone={deck.tone} />
      </div>

      {stat.due > 0 ? (
        <Button size="sm" onClick={onReview} className="w-full">
          Review {stat.due} due
        </Button>
      ) : stat.added > 0 ? (
        <div className="flex h-9 items-center justify-center gap-1.5 rounded-full border border-dashed border-line text-xs text-ink-faint">
          <CheckCircle2 className="h-3.5 w-3.5 text-matcha" /> All caught up
        </div>
      ) : (
        <ButtonLink
          href={deck.learnHref}
          variant="outline"
          size="sm"
          className="w-full"
        >
          {deck.learnLabel} <ArrowRight className="h-3.5 w-3.5" />
        </ButtonLink>
      )}
    </div>
  );
}

function VocabDeckCard({
  deck,
  onReview,
}: {
  deck: (typeof deckMeta)[number];
  onReview: (deck: DeckId, stage?: StageId) => void;
}) {
  const stat = useDeckStat("vocab");
  const all = cardsForDeck("vocab");
  const pct = all.length ? (stat.added / all.length) * 100 : 0;
  const stagesWithCards = vocabStageLabels.filter(
    (s) => vocabCardsForStage(s.id).length > 0,
  );

  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-line bg-surface p-5 card-shadow sm:col-span-2">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="font-jp text-3xl text-shu/70">{deck.jp}</span>
          <div>
            <h4 className="font-display text-lg text-ink">{deck.title}</h4>
            <p className="text-xs text-ink-faint">
              Words from each stage — review one level or the whole deck.
            </p>
          </div>
        </div>
        {stat.due > 0 && <Badge tone="shu">{stat.due} due</Badge>}
      </div>

      <div>
        <div className="mb-1.5 flex justify-between text-xs text-ink-soft">
          <span>
            {stat.added} / {all.length} learned
          </span>
          <span>{Math.round(pct)}%</span>
        </div>
        <ProgressBar value={pct} tone={deck.tone} />
      </div>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {stagesWithCards.map((s) => (
          <VocabStageRow
            key={s.id}
            stage={s.id}
            label={s.label}
            onReview={() => onReview("vocab", s.id)}
          />
        ))}
      </div>

      {stat.due > 0 ? (
        <Button size="sm" onClick={() => onReview("vocab")} className="w-full">
          Review all vocab ({stat.due} due)
        </Button>
      ) : stat.added > 0 ? (
        <div className="flex h-9 items-center justify-center gap-1.5 rounded-full border border-dashed border-line text-xs text-ink-faint">
          <CheckCircle2 className="h-3.5 w-3.5 text-matcha" /> All caught up
        </div>
      ) : (
        <ButtonLink
          href={deck.learnHref}
          variant="outline"
          size="sm"
          className="w-full"
        >
          {deck.learnLabel} <ArrowRight className="h-3.5 w-3.5" />
        </ButtonLink>
      )}
    </div>
  );
}

function VocabStageRow({
  stage,
  label,
  onReview,
}: {
  stage: StageId;
  label: string;
  onReview: () => void;
}) {
  const stat = useVocabStageStat(stage);
  const total = vocabCardsForStage(stage).length;

  return (
    <div className="flex items-center justify-between gap-2 rounded-2xl border border-line bg-surface-2/60 px-3 py-2.5">
      <div className="min-w-0">
        <p className="text-sm font-medium text-ink">{label}</p>
        <p className="text-xs text-ink-faint">
          {stat.added}/{total}
          {stat.due > 0 ? ` · ${stat.due} due` : ""}
        </p>
      </div>
      {stat.due > 0 ? (
        <Button size="sm" variant="outline" onClick={onReview} className="shrink-0">
          Review
        </Button>
      ) : (
        <span className="shrink-0 text-xs text-ink-faint">
          {stat.added > 0 ? "✓" : "—"}
        </span>
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-3xl border border-dashed border-line-strong bg-surface-2 p-10 text-center">
      <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-shu/10 text-shu">
        <Sparkles className="h-7 w-7" />
      </div>
      <h2 className="font-display text-2xl text-ink">Nothing to review yet</h2>
      <p className="mx-auto mt-2 max-w-md text-ink-soft">
        Your review pile builds itself from the learning path: finish lessons,
        study kana and kanji, and every new word or character comes back here
        on a spaced-repetition schedule.
      </p>
      <ButtonLink href="/learn" className="mt-6">
        Start learning <ArrowRight className="h-4 w-4" />
      </ButtonLink>
    </div>
  );
}
