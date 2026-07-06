"use client";

import Link from "next/link";
import { Check, Target } from "lucide-react";
import { useStore } from "@/lib/store";
import { todayStr } from "@/lib/datetime";
import { cn } from "@/lib/cn";

export function DailyGoalRing() {
  const hasHydrated = useStore((s) => s.hasHydrated);
  const dailyGoal = useStore((s) => s.dailyGoal);
  const xpToday = useStore((s) => s.xpToday);
  const xpDate = useStore((s) => s.xpDate);

  const todays = hasHydrated && xpDate === todayStr() ? xpToday : 0;
  const pct = dailyGoal > 0 ? Math.min(100, (todays / dailyGoal) * 100) : 0;
  const met = todays >= dailyGoal && hasHydrated;

  const R = 52;
  const C = 2 * Math.PI * R;

  return (
    <div className="flex items-center gap-4 rounded-3xl border border-line bg-surface p-4 card-shadow sm:gap-5 sm:p-5">
      <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle
            cx="60"
            cy="60"
            r={R}
            fill="none"
            strokeWidth="11"
            className="stroke-line/70"
          />
          <circle
            cx="60"
            cy="60"
            r={R}
            fill="none"
            strokeWidth="11"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={C * (1 - pct / 100)}
            className={cn(
              "transition-[stroke-dashoffset] duration-700 ease-out",
              met ? "stroke-matcha" : "stroke-shu",
            )}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          {met ? (
            <Check className="h-9 w-9 text-matcha" />
          ) : (
            <div className="text-center">
              <p className="font-display text-2xl leading-none text-ink">
                {todays}
              </p>
              <p className="text-[0.65rem] text-ink-faint">/ {dailyGoal} XP</p>
            </div>
          )}
        </div>
      </div>

      <div className="min-w-0">
        <p className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-shu">
          <Target className="h-4 w-4" /> Daily goal
        </p>
        <p className="mt-1 font-display text-xl text-ink">
          {met ? "Goal reached!" : `${Math.max(0, dailyGoal - todays)} XP to go`}
        </p>
        <p className="mt-0.5 text-sm text-ink-soft">
          {met
            ? "Wonderful — see you tomorrow."
            : "Finish a lesson or do a few reviews."}
        </p>
        <Link
          href="/settings"
          className="mt-1 inline-block text-xs text-ink-faint underline-offset-2 hover:text-shu hover:underline"
        >
          Adjust goal
        </Link>
      </div>
    </div>
  );
}
