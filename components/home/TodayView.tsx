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
import { useDailyGoal } from "@/lib/goal";
import { useDueStates, useTotalAdded } from "@/lib/review";
import { ButtonLink } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { FirstRunOnboarding } from "@/components/home/FirstRunOnboarding";
import { cn } from "@/lib/cn";

export function TodayView() {
  const hasHydrated = useStore((s) => s.hasHydrated);
  const completedLessons = useStore((s) => s.completedLessons);
  const streak = useStore((s) => s.streak);
  const xpToday = useStore((s) => s.xpToday);
  const xpDate = useStore((s) => s.xpDate);
  const onboardingDismissed = useStore((s) => s.onboardingDismissed);

  const due = useDueStates().length;
  const totalAdded = useTotalAdded();
  const lessons = orderedLessons();
  const completedCount = Object.keys(completedLessons).length;

  const nextLesson = useMemo(
    () => lessons.find((l) => !completedLessons[l.id]) ?? null,
    [lessons, completedLessons],
  );

  const goal = useDailyGoal();
  const todaysXp = hasHydrated && xpDate === todayStr() ? xpToday : 0;
  const started = completedCount > 0 || totalAdded > 0 || todaysXp > 0;
  const showOnboarding = hasHydrated && !started && !onboardingDismissed;

  const primary = (() => {
    if (due > 0) {
      return {
        kind: "review" as const,
        title: `${due} card${due === 1 ? "" : "s"} waiting`,
        body: "Reviewing now takes a few minutes and saves you from relearning these later.",
        href: "/flashcards?review=1",
        cta: "Review now",
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
          "Pick up where you left off in the course.",
        href: `/lessons/${nextLesson.id}`,
        cta: started ? "Continue" : "Start here",
        icon: <GraduationCap className="h-6 w-6" />,
      };
    }
    if (totalAdded > 0) {
      return {
        kind: "caught-up" as const,
        title: "Lessons finished",
        body: "You've worked through the course. Keep reviewing so the vocabulary doesn't fade.",
        href: "/flashcards",
        cta: "Open flashcards",
        icon: <CheckCircle2 className="h-6 w-6" />,
      };
    }
    return {
      kind: "start" as const,
      title: "Start with the introduction",
      body: "A short overview of how the course works, then hiragana and grammar in order. New words go into your review deck as you meet them.",
      href: "/lessons/introduction",
      cta: "Read introduction",
      icon: <BookOpen className="h-6 w-6" />,
    };
  })();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-shu">
            <span className="font-jp normal-case tracking-normal">今日</span>
            <span className="font-sans"> · Today</span>
          </p>
          <h2 className="mt-1 font-display text-xl text-ink sm:text-2xl">
            {goal.met ? "Daily goal done" : "What to do next"}
          </h2>
        </div>
        {hasHydrated && streak > 0 && (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-xs font-semibold text-gold">
            <Flame className="h-3.5 w-3.5" /> {streak}d
          </span>
        )}
      </div>

      {showOnboarding ? (
        <FirstRunOnboarding />
      ) : (
        <div className="rounded-3xl border-2 border-shu/25 bg-surface p-5 card-shadow sm:p-6">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-shu/10 text-shu">
              {primary.icon}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-shu">
                {primary.kind === "review"
                  ? "Reviews first"
                  : primary.kind === "lesson"
                    ? "Next up"
                    : "Suggested"}
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
      )}

      <div className="overflow-hidden rounded-3xl border border-line bg-surface card-shadow">
        <PlanRow
          done={due === 0 && totalAdded > 0}
          active={due > 0}
          icon={<Brain className="h-4 w-4" />}
          label="Reviews"
          value={
            totalAdded === 0
              ? "Added as you study"
              : due > 0
                ? `${due} due`
                : "Nothing due"
          }
          href={due > 0 ? "/flashcards?review=1" : "/flashcards"}
          action={due > 0 ? "Review" : totalAdded > 0 ? "Open" : undefined}
        />
        <PlanRow
          done={!nextLesson}
          active={due === 0 && Boolean(nextLesson)}
          icon={<GraduationCap className="h-4 w-4" />}
          label="Lesson"
          value={nextLesson?.title ?? "All done"}
          href={nextLesson ? `/lessons/${nextLesson.id}` : "/learn"}
          action={nextLesson ? "Open" : "Lessons"}
        />
        <PlanRow
          done={goal.met}
          active={!goal.met && hasHydrated}
          icon={<Sparkles className="h-4 w-4" />}
          label="Today's goal"
          value={
            goal.lessonDoneToday && goal.reviewsDone < goal.target
              ? "Lesson finished today"
              : `${goal.reviewsDone} / ${goal.target} reviews${goal.met ? "" : " · or 1 lesson"}`
          }
          href="/settings"
          action="Change"
          footer={
            !goal.met && (
              <ProgressBar value={goal.pct} tone="shu" className="mt-2" />
            )
          }
        />
      </div>

      {due > 0 && primary.kind !== "review" && (
        <p className="text-center text-sm text-ink-soft">
          Also{" "}
          <Link href="/flashcards?review=1" className="font-medium text-shu hover:underline">
            {due} review{due === 1 ? "" : "s"} due
          </Link>
        </p>
      )}

      {started && (
        <Link
          href="/learn"
          className="flex items-center justify-between gap-3 rounded-2xl border border-line/80 bg-surface-2/50 px-4 py-3 text-sm transition-colors hover:border-shu/30"
        >
          <span className="flex items-center gap-2 text-ink-soft">
            <Layers className="h-4 w-4" />
            Lessons completed
          </span>
          <span className="font-medium text-ink">
            {completedCount} / {lessons.length}
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
