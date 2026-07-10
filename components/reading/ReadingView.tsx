"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock,
  GraduationCap,
} from "lucide-react";
import type { Reading } from "@/content/types";
import { useStore } from "@/lib/store";
import { stageMeta } from "@/content/curriculum";
import { stripFurigana } from "@/lib/japanese";
import { JapaneseText } from "@/components/JapaneseText";
import { AudioButton } from "@/components/AudioButton";
import { AddToDeckButton } from "@/components/AddToDeckButton";
import { ReadingControls } from "@/components/ReadingControls";
import { Quiz } from "@/components/Quiz";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function ReadingView({ reading }: { reading: Reading }) {
  const completed = useStore((s) => Boolean(s.completedReadings[reading.id]));
  const completeReading = useStore((s) => s.completeReading);

  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [justCompleted, setJustCompleted] = useState(false);

  const stage = stageMeta(reading.stage);
  const vocabIds = (reading.vocabulary ?? []).map(
    (v) => `vocab:${stripFurigana(v.word)}`,
  );

  function toggle(i: number) {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  function finish() {
    completeReading(reading.id, vocabIds);
    setJustCompleted(true);
  }

  function handleQuizComplete(correct: number, total: number) {
    const pct = Math.round((correct / total) * 100);
    if (pct >= 60 && !completed) finish();
  }

  return (
    <article className="page-x mx-auto w-full max-w-3xl py-8 sm:py-14">
      <div className="mb-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/readings"
          className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-shu"
        >
          <ArrowLeft className="h-4 w-4" /> Readings
        </Link>
        <ReadingControls />
      </div>

      <header className="mb-10 animate-fade-up">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge tone="shu">
            <GraduationCap className="h-3 w-3" /> {stage.title}
          </Badge>
          {reading.estMinutes && (
            <Badge tone="neutral">
              <Clock className="h-3 w-3" /> {reading.estMinutes} min
            </Badge>
          )}
          {completed && (
            <Badge tone="matcha">
              <CheckCircle2 className="h-3 w-3" /> Read
            </Badge>
          )}
        </div>
        <h1 className="text-balance leading-tight">
          <JapaneseText
            text={reading.jpTitle}
            className="text-3xl sm:text-4xl md:text-5xl"
          />
        </h1>
        <p className="mt-3 text-lg text-ink-soft">{reading.title}</p>
      </header>

      {/* passage */}
      <section className="mb-10 flex animate-fade-up flex-col gap-3">
        <p className="text-sm text-ink-faint">
          Read each line, then tap <em>English</em> to check yourself.
        </p>
        {reading.body.map((p, i) => (
          <div
            key={i}
            className="rounded-2xl border border-line bg-surface p-4 sm:p-5"
          >
            {p.speaker && (
              <span className="mb-1.5 inline-block rounded-full bg-ai/10 px-2.5 py-0.5 font-jp text-xs font-medium text-ai">
                {stripFurigana(p.speaker)}
              </span>
            )}
            <div className="flex items-start justify-between gap-3">
              <JapaneseText text={p.jp} className="text-xl leading-loose sm:text-2xl" />
              <AudioButton text={p.jp} size="sm" className="mt-1 shrink-0" />
            </div>
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={revealed.has(i)}
              className="mt-2 inline-flex min-h-9 items-center gap-1 text-sm text-ink-faint transition-colors hover:text-shu"
            >
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  revealed.has(i) && "rotate-180",
                )}
              />
              English
            </button>
            {revealed.has(i) && (
              <p className="mt-1 animate-fade-in text-sm leading-6 text-ink-soft">
                {p.en}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* key phrases (situation modules) */}
      {reading.phrases && reading.phrases.length > 0 && (
        <section className="mb-10 animate-fade-up rounded-3xl border border-ai/25 bg-ai/[0.04] p-4 sm:p-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-ai">
            Key phrases — worth memorising
          </h2>
          <ul className="flex flex-col gap-3">
            {reading.phrases.map((ph, i) => (
              <li key={i} className="flex items-start gap-3">
                <AudioButton text={ph.jp} size="sm" className="mt-1 shrink-0" />
                <div className="min-w-0">
                  <JapaneseText text={ph.jp} className="text-lg" />
                  <p className="text-sm text-ink-soft">{ph.en}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* glossary */}
      {reading.vocabulary && reading.vocabulary.length > 0 && (
        <section className="mb-10 animate-fade-up rounded-3xl border border-line bg-surface p-4 sm:p-6">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-ink-faint">
              <BookOpen className="h-4 w-4" /> New words
            </h2>
            <AddToDeckButton
              ids={vocabIds}
              label={`Add all ${vocabIds.length}`}
              className="w-full sm:w-auto"
            />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {reading.vocabulary.map((v, i) => (
              <li
                key={i}
                className="flex items-center gap-3 rounded-2xl border border-line/70 bg-surface px-4 py-3"
              >
                <AudioButton text={v.reading ?? v.word} size="sm" className="shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-jp text-xl text-ink">
                      <JapaneseText text={v.word} showFurigana={false} />
                    </span>
                    {v.reading && stripFurigana(v.word) !== v.reading && (
                      <span className="truncate font-jp text-sm text-ink-faint">
                        {v.reading}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-ink-soft">{v.meaning}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* comprehension quiz */}
      <section className="mt-14">
        <h2 className="mb-5 flex items-center gap-3 font-display text-2xl text-ink">
          <span className="h-6 w-1 rounded-full bg-shu" />
          Did you follow it?
        </h2>
        <Quiz questions={reading.quiz} onComplete={handleQuizComplete} />
      </section>

      {/* completion */}
      <section className="mt-12">
        {completed ? (
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-matcha/30 bg-matcha/[0.08] px-5 py-4 text-center text-matcha">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              <span className="font-medium">
                {justCompleted ? "Nicely read!" : "Already read"}
              </span>
            </div>
            <ButtonLink href="/readings" variant="outline" size="sm">
              More readings
            </ButtonLink>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-surface px-6 py-6 text-center">
            <p className="text-ink-soft">Finished the passage?</p>
            <Button onClick={finish}>
              <CheckCircle2 className="h-4 w-4" /> Mark as read
            </Button>
          </div>
        )}
      </section>
    </article>
  );
}
