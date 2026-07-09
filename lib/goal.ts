"use client";

import { useStore } from "@/lib/store";
import { todayStr } from "@/lib/datetime";

export interface DailyGoal {
  /** Reviews needed per day (from settings). */
  target: number;
  /** Reviews finished today. */
  reviewsDone: number;
  /** Whether any lesson was completed today. */
  lessonDoneToday: boolean;
  met: boolean;
  /** 0–100 progress; a completed lesson counts as 100. */
  pct: number;
}

/** Daily goal: finish `target` reviews or complete any lesson. */
export function useDailyGoal(): DailyGoal {
  const hasHydrated = useStore((s) => s.hasHydrated);
  const target = useStore((s) => s.dailyGoalReviews);
  const reviewsToday = useStore((s) => s.reviewsToday);
  const reviewsDate = useStore((s) => s.reviewsDate);
  const completedLessons = useStore((s) => s.completedLessons);

  const today = todayStr();
  const reviewsDone = hasHydrated && reviewsDate === today ? reviewsToday : 0;
  const lessonDoneToday =
    hasHydrated &&
    Object.values(completedLessons).some(
      (p) => todayStr(new Date(p.completedAt)) === today,
    );

  const met = lessonDoneToday || (target > 0 && reviewsDone >= target);
  const pct = lessonDoneToday
    ? 100
    : target > 0
      ? Math.min(100, (reviewsDone / target) * 100)
      : 0;

  return { target, reviewsDone, lessonDoneToday, met, pct };
}
