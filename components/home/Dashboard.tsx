"use client";

import Link from "next/link";
import {
  ArrowRight,
  Flame,
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
import { TodayView } from "@/components/home/TodayView";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { cn } from "@/lib/cn";

export function Dashboard() {
  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      <TodayView />
      <DashboardStatsPanel />
    </div>
  );
}

export function DashboardStatsPanel() {
  return (
    <>
      <div className="hidden lg:block">
        <DashboardStats />
      </div>

      <details className="group lg:hidden">
        <summary className="cursor-pointer list-none rounded-2xl border border-line bg-surface-2/40 px-4 py-3 text-sm font-medium text-ink-soft transition-colors hover:border-shu/30 [&::-webkit-details-marker]:hidden">
          <span className="flex items-center justify-between">
            Progress details
            <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
          </span>
        </summary>
        <div className="mt-4">
          <DashboardStats />
        </div>
      </details>
    </>
  );
}

function DashboardStats() {
  const hasHydrated = useStore((s) => s.hasHydrated);
  const completedLessons = useStore((s) => s.completedLessons);
  const streak = useStore((s) => s.streak);
  const xp = useStore((s) => s.xp);
  const due = useDueStates().length;
  const totalAdded = useTotalAdded();
  const lessons = orderedLessons();
  const completedCount = Object.keys(completedLessons).length;
  const level = levelInfo(xp);

  return (
    <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 lg:grid-cols-4 lg:gap-4">
      <StatTile
        icon={<Flame className="h-5 w-5" />}
        tone="gold"
        label="Day streak"
        value={hasHydrated ? String(streak) : "—"}
        hint={streak > 0 ? "Study today to keep it" : "Open a lesson to begin"}
      />
      <StatTile
        icon={<Star className="h-5 w-5" />}
        tone="ai"
        label={`Level ${level.level} · ${level.rank}`}
        value={hasHydrated ? `${xp} XP` : "—"}
        progress={level.pct}
      />
      <MiniStat
        href="/learn"
        icon={<Layers className="h-5 w-5" />}
        label="Lessons complete"
        value={`${completedCount} / ${lessons.length}`}
        tone="matcha"
      />
      <MiniStat
        href={due > 0 ? "/flashcards?review=1" : "/flashcards"}
        icon={<Sparkles className="h-5 w-5" />}
        label={totalAdded > 0 ? "Cards to review" : "Flashcards"}
        value={totalAdded > 0 ? `${due} due` : "Add cards"}
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
    <div className="flex flex-col justify-between rounded-3xl border border-line bg-surface p-4 card-shadow sm:p-5">
      <div className="flex items-center gap-2 sm:gap-2.5">
        <span
          className={cn(
            "grid h-9 w-9 shrink-0 place-items-center rounded-full sm:h-10 sm:w-10",
            tones,
          )}
        >
          {icon}
        </span>
        <span className="min-w-0 text-sm leading-snug text-ink-soft">{label}</span>
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
        "group flex items-center gap-3 rounded-3xl border bg-surface p-4 transition-colors card-shadow sm:p-5",
        highlight ? "border-shu/40" : "border-line hover:border-shu/30",
      )}
    >
      <span
        className={cn(
          "grid h-11 w-11 shrink-0 place-items-center rounded-full",
          tones,
        )}
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm leading-snug text-ink-soft">{label}</p>
        <p className="font-display text-lg text-ink sm:text-xl">{value}</p>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-shu" />
    </Link>
  );
}
