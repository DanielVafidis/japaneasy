"use client";

import Link from "next/link";
import { Check, Clock, Lock, Sparkles } from "lucide-react";
import { stages, lessonsForStage } from "@/content/curriculum";
import { useStore } from "@/lib/store";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { cn } from "@/lib/cn";

export function CurriculumView() {
  const completedLessons = useStore((s) => s.completedLessons);

  return (
    <div className="flex flex-col gap-6">
      {stages.map((stage) => {
        const lessons = lessonsForStage(stage.id);
        const total = lessons.length;
        const done = lessons.filter((l) => completedLessons[l.id]).length;
        const pct = total ? (done / total) * 100 : 0;
        const locked = total === 0;

        return (
          <section
            key={stage.id}
            className={cn(
              "overflow-hidden rounded-3xl border bg-surface card-shadow",
              locked ? "border-line/70" : "border-line",
            )}
          >
            <div className="flex flex-col gap-4 border-b border-line/70 bg-surface-2/40 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="font-jp text-4xl text-shu/70">
                  {stage.jpTitle}
                </span>
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-ink-faint">
                    Stage {stage.index}
                  </p>
                  <h2 className="font-display text-2xl text-ink">
                    {stage.title}
                  </h2>
                </div>
              </div>
              {!locked ? (
                <div className="min-w-44">
                  <div className="mb-1.5 flex items-center justify-between text-xs text-ink-soft">
                    <span>{done} / {total} lessons</span>
                    <span>{Math.round(pct)}%</span>
                  </div>
                  <ProgressBar value={pct} tone="matcha" />
                </div>
              ) : (
                <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-faint sm:self-auto">
                  <Sparkles className="h-3.5 w-3.5" /> Coming soon
                </span>
              )}
            </div>

            <div className="p-4 sm:p-5">
              <p className="mb-4 px-2 text-sm leading-6 text-ink-soft">
                {stage.blurb}
              </p>

              {!locked ? (
                <ol className="flex flex-col gap-1.5">
                  {lessons.map((lesson, i) => {
                    const isDone = Boolean(completedLessons[lesson.id]);
                    return (
                      <li key={lesson.id}>
                        <Link
                          href={`/lessons/${lesson.id}`}
                          className="group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-all hover:border-line hover:bg-surface-2/60"
                        >
                          <span
                            className={cn(
                              "grid h-9 w-9 shrink-0 place-items-center rounded-full border text-sm font-semibold transition-colors",
                              isDone
                                ? "border-matcha/40 bg-matcha/15 text-matcha"
                                : "border-line bg-surface text-ink-faint group-hover:border-shu/40 group-hover:text-shu",
                            )}
                          >
                            {isDone ? <Check className="h-4 w-4" /> : i + 1}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate font-medium text-ink">
                              {lesson.title}
                            </p>
                            {lesson.subtitle && (
                              <p className="truncate text-sm text-ink-faint">
                                {lesson.subtitle}
                              </p>
                            )}
                          </div>
                          {lesson.estMinutes && (
                            <span className="hidden shrink-0 items-center gap-1 text-xs text-ink-faint sm:flex">
                              <Clock className="h-3 w-3" /> {lesson.estMinutes}m
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ol>
              ) : (
                <div className="flex flex-wrap gap-2 px-2 pb-2">
                  {stage.teaser?.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 font-jp text-sm text-ink-faint"
                    >
                      <Lock className="h-3 w-3" /> {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
