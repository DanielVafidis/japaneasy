"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Clock,
  GraduationCap,
  SquareArrowOutUpRight,
} from "lucide-react";
import type { Lesson } from "@/content/types";
import { useStore } from "@/lib/store";
import { useDueStates } from "@/lib/review";
import { XP } from "@/lib/leveling";
import { stageMeta } from "@/content/curriculum";
import { stripFurigana } from "@/lib/japanese";
import { JapaneseText } from "@/components/JapaneseText";
import { AudioButton } from "@/components/AudioButton";
import { AddToDeckButton } from "@/components/AddToDeckButton";
import { ReadingControls } from "@/components/ReadingControls";
import { LessonBlocks } from "@/components/lesson/LessonBlocks";
import { VocabCheck } from "@/components/lesson/VocabCheck";
import { Quiz } from "@/components/Quiz";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";

export function LessonView({
  lesson,
  prev,
  next,
}: {
  lesson: Lesson;
  prev: { id: string; title: string } | null;
  next: { id: string; title: string } | null;
}) {
  const completed = useStore((s) => Boolean(s.completedLessons[lesson.id]));
  const completeLesson = useStore((s) => s.completeLesson);
  const recordQuiz = useStore((s) => s.recordQuiz);
  const addXp = useStore((s) => s.addXp);
  const quizScores = useStore((s) => s.quizScores);

  const [justCompleted, setJustCompleted] = useState(false);
  const [addedVocabCount, setAddedVocabCount] = useState(0);

  const dueCount = useDueStates().length;

  const stage = stageMeta(lesson.stage);
  const vocabIds = (lesson.vocabulary ?? []).map(
    (v) => `vocab:${stripFurigana(v.word)}`,
  );

  function finishLesson() {
    const { newlyAddedVocab } = completeLesson(lesson.id);
    setAddedVocabCount(newlyAddedVocab);
    setJustCompleted(true);
  }

  function handleQuizComplete(correct: number, total: number) {
    const pct = Math.round((correct / total) * 100);
    const firstTime = quizScores[lesson.id] === undefined;
    recordQuiz(lesson.id, pct);
    if (firstTime) {
      addXp(correct * XP.quizPerCorrect + (pct === 100 ? XP.quizPerfectBonus : 0));
    }
    if (pct >= 60 && !completed) {
      finishLesson();
    }
  }

  function handleManualComplete() {
    finishLesson();
  }

  return (
    <article className="page-x mx-auto w-full max-w-3xl py-8 sm:py-14">
      {/* top bar */}
      <div className="mb-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-shu"
        >
          <ArrowLeft className="h-4 w-4" /> Curriculum
        </Link>
        <ReadingControls />
      </div>

      {/* header */}
      <header className="mb-10 animate-fade-up">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge tone="shu">
            <GraduationCap className="h-3 w-3" /> {stage.title}
          </Badge>
          {lesson.estMinutes && (
            <Badge tone="neutral">
              <Clock className="h-3 w-3" /> {lesson.estMinutes} min
            </Badge>
          )}
          {completed && (
            <Badge tone="matcha">
              <CheckCircle2 className="h-3 w-3" /> Completed
            </Badge>
          )}
        </div>
        <h1 className="text-balance text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
          {lesson.title}
        </h1>
        {lesson.subtitle && (
          <p className="mt-3 text-lg text-ink-soft">{lesson.subtitle}</p>
        )}
      </header>

      {/* vocabulary */}
      {lesson.vocabulary && lesson.vocabulary.length > 0 && (
        <section className="mb-10 animate-fade-up rounded-3xl border border-line bg-surface p-4 sm:p-6">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-ink-faint">
              <BookOpen className="h-4 w-4" /> Vocabulary
            </h2>
            <AddToDeckButton
              ids={vocabIds}
              label={`Add all ${vocabIds.length}`}
              className="w-full sm:w-auto"
            />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {lesson.vocabulary.map((v, i) => (
              <li
                key={i}
                className="flex flex-col gap-3 rounded-2xl border border-line/70 bg-surface px-4 py-3 sm:flex-row sm:items-center"
              >
                <AudioButton
                  text={v.reading ?? v.word}
                  size="sm"
                  className="shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2 min-w-0">
                    <span className="font-jp text-xl text-ink">
                      <JapaneseText text={v.word} showFurigana={false} />
                    </span>
                    {v.reading && (
                      <span className="truncate font-jp text-sm text-ink-faint">
                        {v.reading}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-ink-soft">{v.meaning}</p>
                  {v.note && (
                    <p className="text-xs italic text-ink-faint">{v.note}</p>
                  )}
                </div>
                <a
                  href={`https://jisho.org/search/${encodeURIComponent(
                    stripFurigana(v.word),
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  title="Look up on Jisho"
                  className="self-start shrink-0 text-ink-faint transition-colors hover:text-shu sm:mt-0.5"
                >
                  <SquareArrowOutUpRight className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
          {lesson.vocabulary.length >= 3 && (
            <VocabCheck vocabulary={lesson.vocabulary} />
          )}
        </section>
      )}

      {/* body */}
      <div className="animate-fade-up">
        <LessonBlocks blocks={lesson.blocks} />
      </div>

      {/* quiz */}
      {lesson.quiz && lesson.quiz.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-5 flex items-center gap-3 font-display text-2xl text-ink">
            <span className="h-6 w-1 rounded-full bg-shu" />
            Check yourself
          </h2>
          <Quiz questions={lesson.quiz} onComplete={handleQuizComplete} />
        </section>
      )}

      {/* completion */}
      <section className="mt-12">
        {completed ? (
          <div className="rounded-2xl border border-matcha/30 bg-matcha/[0.08] px-5 py-4 sm:px-6">
            <div className="flex flex-col items-center gap-2 text-center text-matcha">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span className="font-medium">
                  {justCompleted ? "Nice work — lesson complete!" : "Lesson complete"}
                </span>
              </div>
              {justCompleted && (addedVocabCount > 0 || vocabIds.length > 0 || dueCount > 0) && (
                <p className="text-sm text-matcha/90">
                  {addedVocabCount > 0
                    ? `${addedVocabCount} word${addedVocabCount === 1 ? "" : "s"} added to your review deck`
                    : vocabIds.length > 0
                      ? "Vocabulary is already in your review deck"
                      : null}
                  {dueCount > 0 && (
                    <>
                      {(addedVocabCount > 0 || vocabIds.length > 0) && " · "}
                      {dueCount} card{dueCount === 1 ? "" : "s"} waiting to review
                    </>
                  )}
                </p>
              )}
            </div>
            {justCompleted && (dueCount > 0 || next) && (
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                {dueCount > 0 && (
                  <ButtonLink
                    href="/flashcards?review=1"
                    className="w-full flex-1"
                  >
                    <Brain className="h-4 w-4" />
                    Review {dueCount} card{dueCount === 1 ? "" : "s"}
                  </ButtonLink>
                )}
                {next && (
                  <ButtonLink
                    href={`/lessons/${next.id}`}
                    variant={dueCount > 0 ? "outline" : "primary"}
                    className="w-full flex-1"
                  >
                    <span className="truncate">Next: {next.title}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </ButtonLink>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-surface px-6 py-6 text-center">
            <p className="text-ink-soft">Finished reading this lesson?</p>
            <Button onClick={handleManualComplete}>
              <CheckCircle2 className="h-4 w-4" /> Mark as complete
            </Button>
          </div>
        )}
      </section>

      {/* nav */}
      <nav className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-stretch">
        {prev ? (
          <ButtonLink
            href={`/lessons/${prev.id}`}
            variant="outline"
            className="w-full flex-1 justify-start sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="truncate text-left">
              <span className="block text-[0.65rem] uppercase tracking-wide text-ink-faint">
                Previous
              </span>
              <span className="truncate">{prev.title}</span>
            </span>
          </ButtonLink>
        ) : (
          <span className="hidden flex-1 sm:block" />
        )}
        {next ? (
          <ButtonLink href={`/lessons/${next.id}`} className="w-full flex-1 justify-end sm:w-auto">
            <span className="truncate text-right">
              <span className="block text-[0.65rem] uppercase tracking-wide text-white/70">
                Next
              </span>
              <span className="truncate">{next.title}</span>
            </span>
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        ) : (
          <span className="hidden flex-1 sm:block" />
        )}
      </nav>
    </article>
  );
}
