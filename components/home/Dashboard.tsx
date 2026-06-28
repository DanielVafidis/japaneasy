"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Flame,
  GraduationCap,
  Layers,
  Shapes,
  Sparkles,
  Star,
} from "lucide-react";
import { useStore } from "@/lib/store";
import { orderedLessons } from "@/content/curriculum";
import { kanji } from "@/content/kanji";
import { levelInfo } from "@/lib/leveling";
import { useDueStates, useTotalAdded } from "@/lib/review";
import { DailyGoalRing } from "@/components/home/DailyGoalRing";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Dashboard() {
  const hasHydrated = useStore((s) => s.hasHydrated);
  const completedLessons = useStore((s) => s.completedLessons);
  const streak = useStore((s) => s.streak);
  const xp = useStore((s) => s.xp);
  const due = useDueStates().length;
  const totalAdded = useTotalAdded();

  const lessons = orderedLessons();
  const completedCount = Object.keys(completedLessons).length;
  const level = levelInfo(xp);

  const nextLesson = useMemo(
    () => lessons.find((l) => !completedLessons[l.id]) ?? null,
    [lessons, completedLessons],
  );

  const started = completedCount > 0 || xp > 0;

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {/* Continue / start */}
      <div className="lg:col-span-2">
        <div className="h-full rounded-3xl border border-line bg-surface p-7 card-shadow">
          <div>
            <p className="mb-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-shu">
              <GraduationCap className="h-4 w-4" />
              {started ? "Continue learning" : "Start your journey"}
            </p>
            {nextLesson ? (
              <>
                <h2 className="mt-2 text-balance font-display text-3xl text-ink">
                  {nextLesson.title}
                </h2>
                {nextLesson.subtitle && (
                  <p className="mt-2 max-w-lg text-ink-soft">
                    {nextLesson.subtitle}
                  </p>
                )}
                <ButtonLink
                  href={`/lessons/${nextLesson.id}`}
                  className="mt-6"
                  size="lg"
                >
                  {started ? "Resume" : "Begin lesson 1"}
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </>
            ) : (
              <>
                <h2 className="mt-2 font-display text-3xl text-ink">
                  You finished every lesson! 🎉
                </h2>
                <p className="mt-2 max-w-lg text-ink-soft">
                  Keep your knowledge sharp with spaced-repetition review.
                </p>
                <ButtonLink href="/flashcards" className="mt-6" size="lg">
                  Review flashcards <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-4">
        <DailyGoalRing />
        <div className="grid grid-cols-2 gap-4">
          <StatTile
            icon={<Flame className="h-5 w-5" />}
            tone="gold"
            label="Day streak"
            value={hasHydrated ? String(streak) : "—"}
            hint={streak > 0 ? "Keep it alive!" : "Study today to start"}
          />
          <StatTile
            icon={<Star className="h-5 w-5" />}
            tone="ai"
            label={`Level ${level.level} · ${level.rank}`}
            value={hasHydrated ? `${xp} XP` : "—"}
            progress={level.pct}
          />
        </div>
      </div>

      {/* secondary row */}
      <div className="grid grid-cols-2 gap-4 lg:col-span-3 lg:grid-cols-4">
      <MiniStat
        href="/learn"
        icon={<Layers className="h-5 w-5" />}
        label="Lessons complete"
        value={`${completedCount} / ${lessons.length}`}
        tone="matcha"
      />
      <MiniStat
        href="/flashcards"
        icon={<Sparkles className="h-5 w-5" />}
        label={totalAdded > 0 ? "Cards to review" : "Flashcards"}
        value={
          totalAdded > 0 ? `${due} due` : "Add cards"
        }
        tone="shu"
        highlight={due > 0}
      />
      <MiniStat
        href="/kana"
        icon={<span className="font-jp text-lg leading-none">あ</span>}
        label="Kana Trainer"
        value="Practice"
        tone="ai"
      />
      <MiniStat
        href="/kanji"
        icon={<Shapes className="h-5 w-5" />}
        label="Kanji"
        value={`${kanji.length} chars`}
        tone="gold"
      />
      </div>
    </div>
  );
}

function StatTile({
  icon,
  tone,
  label,
  value,
  hint,
  progress,
}: {
  icon: React.ReactNode;
  tone: "gold" | "ai" | "matcha" | "shu";
  label: string;
  value: string;
  hint?: string;
  progress?: number;
}) {
  const tones = {
    gold: "text-gold bg-gold/12",
    ai: "text-ai bg-ai/12",
    matcha: "text-matcha bg-matcha/12",
    shu: "text-shu bg-shu/12",
  }[tone];
  return (
    <div className="flex flex-col justify-between rounded-3xl border border-line bg-surface p-5 card-shadow">
      <div className="flex items-center gap-2.5">
        <span className={cn("grid h-10 w-10 place-items-center rounded-full", tones)}>
          {icon}
        </span>
        <span className="text-sm text-ink-soft">{label}</span>
      </div>
      <div className="mt-3">
        <p className="font-display text-2xl text-ink">{value}</p>
        {hint && <p className="text-xs text-ink-faint">{hint}</p>}
        {progress !== undefined && (
          <ProgressBar value={progress} tone={tone} className="mt-2" />
        )}
      </div>
    </div>
  );
}

function MiniStat({
  href,
  icon,
  label,
  value,
  tone,
  highlight,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  tone: "gold" | "ai" | "matcha" | "shu";
  highlight?: boolean;
}) {
  const tones = {
    gold: "text-gold bg-gold/12",
    ai: "text-ai bg-ai/12",
    matcha: "text-matcha bg-matcha/12",
    shu: "text-shu bg-shu/12",
  }[tone];
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-3 rounded-3xl border bg-surface p-5 transition-colors hover:border-shu/30 card-shadow",
        highlight ? "border-shu/40" : "border-line hover:border-shu/30",
      )}
    >
      <span className={cn("grid h-11 w-11 shrink-0 place-items-center rounded-full", tones)}>
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-ink-soft">{label}</p>
        <p className="font-display text-xl text-ink">{value}</p>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-shu" />
    </Link>
  );
}
