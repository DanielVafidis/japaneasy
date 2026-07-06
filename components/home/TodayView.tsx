"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Flame,
  GraduationCap,
  Layers,
  Sparkles,
} from "lucide-react";
import { useStore } from "@/lib/store";
import { orderedLessons } from "@/content/curriculum";
import { todayStr } from "@/lib/datetime";
import { useDueStates, useTotalAdded } from "@/lib/review";
import { ButtonLink } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { cn } from "@/lib/cn";

export function TodayView() {
  const hasHydrated = useStore((s) => s.hasHydrated);
  const completedLessons = useStore((s) => s.completedLessons);
  const streak = useStore((s) => s.streak);
  const dailyGoal = useStore((s) => s.dailyGoal);
  const xpToday = useStore((s) => s.xpToday);
  const xpDate = useStore((s) => s.xpDate);

  const due = useDueStates().length;
  const totalAdded = useTotalAdded();
  const lessons = orderedLessons();
  const completedCount = Object.keys(completedLessons).length;

  const nextLesson = useMemo(
    () => lessons.find((l) => !completedLessons[l.id]) ?? null,
    [lessons, completedLessons],
  );

  const todaysXp = hasHydrated && xpDate === todayStr() ? xpToday : 0;
  const goalMet = todaysXp >= dailyGoal && hasHydrated;
  const goalPct =
    dailyGoal > 0 ? Math.min(100, (todaysXp / dailyGoal) * 100) : 0;
  const started = completedCount > 0 || totalAdded > 0 || todaysXp > 0;

  const primary = (() => {
    if (due > 0) {
      return {
        kind: "review" as const,
        title: `${due} card${due === 1 ? "" : "s"} due`,
        body: "Review now while the memory is fresh — it only takes a few minutes.",
        href: "/flashcards?review=1",
        cta: "Start review",
        icon: <Brain className="h-6 w-6" />,
      };
    }
    if (nextLesson) {
      return {
        kind: "lesson" as const,
        title: nextLesson.title,
        body:
          nextLesson.subtitle ??
          nextLesson.summary ??
          "Continue your path through the course.",
        href: `/lessons/${nextLesson.id}`,
        cta: started ? "Continue lesson" : "Begin lesson 1",
        icon: <GraduationCap className="h-6 w-6" />,
      };
    }
    if (totalAdded > 0) {
      return {
        kind: "caught-up" as const,
        title: "All caught up",
        body: "You've finished every lesson. Keep reviewing to hold on to what you know.",
        href: "/flashcards",
        cta: "Open flashcards",
        icon: <CheckCircle2 className="h-6 w-6" />,
      };
    }
    return {
      kind: "start" as const,
      title: "Welcome — start here",
      body: "Read the introduction, then work through lessons in order. Vocabulary joins your review deck as you go.",
      href: "/lessons/introduction",
      cta: "Start learning",
      icon: <BookOpen className="h-6 w-6" />,
    };
  })();

  return (
    <div className="flex flex-col gap-4">
      {/* header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-shu">
            今日 · Today
          </p>
          <h2 className="mt-1 font-display text-2xl text-ink sm:text-3xl">
            {goalMet ? "Nice work today" : "Your plan for today"}
          </h2>
        </div>
        {hasHydrated && streak > 0 && (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-xs font-semibold text-gold">
            <Flame className="h-3.5 w-3.5" /> {streak}d
          </span>
        )}
      </div>

      {/* primary action */}
      <div className="rounded-3xl border-2 border-shu/25 bg-surface p-5 card-shadow sm:p-6">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-shu/10 text-shu">
            {primary.icon}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-shu">
              {primary.kind === "review"
                ? "Step 1 · Review"
                : primary.kind === "lesson"
                  ? "Step 1 · Learn"
                  : "Up next"}
            </p>
            <h3 className="mt-1 text-balance font-display text-xl text-ink sm:text-2xl">
              {primary.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-soft">{primary.body}</p>
          </div>
        </div>
        <ButtonLink href={primary.href} size="lg" className="mt-5 w-full">
          {primary.cta}
          <ArrowRight className="h-4 w-4" />
        </ButtonLink>
      </div>

      {/* plan checklist */}
      <div className="overflow-hidden rounded-3xl border border-line bg-surface card-shadow">
        <PlanRow
          done={due === 0 && totalAdded > 0}
          active={due > 0}
          icon={<Brain className="h-4 w-4" />}
          label="Reviews"
          value={
            totalAdded === 0
              ? "Cards appear as you learn"
              : due > 0
                ? `${due} due now`
                : "All caught up"
          }
          href={due > 0 ? "/flashcards?review=1" : "/flashcards"}
          action={due > 0 ? "Review" : totalAdded > 0 ? "Open" : undefined}
        />
        <PlanRow
          done={!nextLesson}
          active={due === 0 && Boolean(nextLesson)}
          icon={<GraduationCap className="h-4 w-4" />}
          label="Next lesson"
          value={nextLesson?.title ?? "Course complete"}
          href={nextLesson ? `/lessons/${nextLesson.id}` : "/learn"}
          action={nextLesson ? "Open" : "Curriculum"}
        />
        <PlanRow
          done={goalMet}
          active={!goalMet && hasHydrated}
          icon={<Sparkles className="h-4 w-4" />}
          label="Daily goal"
          value={
            goalMet
              ? `${todaysXp} / ${dailyGoal} XP · done`
              : `${todaysXp} / ${dailyGoal} XP`
          }
          href="/settings"
          action="Adjust"
          footer={
            !goalMet && (
              <ProgressBar value={goalPct} tone="shu" className="mt-2" />
            )
          }
        />
      </div>

      {/* quick link when reviews aren't primary but exist */}
      {due > 0 && primary.kind !== "review" && (
        <p className="text-center text-sm text-ink-soft">
          You also have{" "}
          <Link href="/flashcards?review=1" className="font-medium text-shu hover:underline">
            {due} review{due === 1 ? "" : "s"} due
          </Link>
        </p>
      )}

      {/* progress snapshot */}
      {started && (
        <Link
          href="/learn"
          className="flex items-center justify-between gap-3 rounded-2xl border border-line/80 bg-surface-2/50 px-4 py-3 text-sm transition-colors hover:border-shu/30"
        >
          <span className="flex items-center gap-2 text-ink-soft">
            <Layers className="h-4 w-4" />
            Course progress
          </span>
          <span className="font-medium text-ink">
            {completedCount} / {lessons.length} lessons
            <ArrowRight className="ml-1 inline h-3.5 w-3.5 text-ink-faint" />
          </span>
        </Link>
      )}
    </div>
  );
}

function PlanRow({
  done,
  active,
  icon,
  label,
  value,
  href,
  action,
  footer,
}: {
  done?: boolean;
  active?: boolean;
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  action?: string;
  footer?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "border-b border-line/70 px-4 py-3.5 last:border-b-0",
        active && "bg-shu/[0.04]",
        done && !active && "bg-matcha/[0.03]",
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "grid h-9 w-9 shrink-0 place-items-center rounded-full",
            done && !active
              ? "bg-matcha/12 text-matcha"
              : active
                ? "bg-shu/12 text-shu"
                : "bg-surface-2 text-ink-soft",
          )}
        >
          {done && !active ? <CheckCircle2 className="h-4 w-4" /> : icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
            {label}
          </p>
          <p className="truncate font-medium text-ink">{value}</p>
        </div>
        {action && (
          <Link
            href={href}
            className="shrink-0 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-ink-soft transition-colors hover:border-shu/40 hover:text-shu"
          >
            {action}
          </Link>
        )}
      </div>
      {footer}
    </div>
  );
}
