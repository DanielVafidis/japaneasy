"use client";

import { CalendarDays, Flame, Layers, Star, Trophy } from "lucide-react";
import { useStore } from "@/lib/store";
import { levelInfo } from "@/lib/leveling";
import { stages, lessonsForStage } from "@/content/curriculum";
import { deckMeta, cardsById } from "@/content/decks";
import { useDeckStat, useDueStates, useTotalAdded } from "@/lib/review";
import { StudyHeatmap } from "@/components/progress/StudyHeatmap";
import { DataControls } from "@/components/DataControls";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

const DAY = 24 * 60 * 60 * 1000;

export function ProgressView() {
  const hasHydrated = useStore((s) => s.hasHydrated);
  const streak = useStore((s) => s.streak);
  const longestStreak = useStore((s) => s.longestStreak);
  const xp = useStore((s) => s.xp);
  const studyDays = useStore((s) => s.studyDays);
  const completedLessons = useStore((s) => s.completedLessons);
  const cards = useStore((s) => s.cards);

  const totalAdded = useTotalAdded();
  const dueNow = useDueStates().length;
  const level = levelInfo(xp);

  const totalLessons = stages.reduce(
    (n, st) => n + lessonsForStage(st.id).length,
    0,
  );
  const completedCount = Object.keys(completedLessons).length;

  // 7-day due forecast (overdue lumped into today) — client-only dates
  const forecast = Array.from({ length: 7 }, () => 0);
  if (hasHydrated) {
    const todayMid = new Date();
    todayMid.setHours(0, 0, 0, 0);
    for (const c of Object.values(cards)) {
      if (!cardsById[c.id]) continue;
      const dueMid = new Date(c.due);
      dueMid.setHours(0, 0, 0, 0);
      let idx = Math.round((dueMid.getTime() - todayMid.getTime()) / DAY);
      if (idx < 0) idx = 0;
      if (idx <= 6) forecast[idx]++;
    }
  }
  const forecastMax = Math.max(1, ...forecast);
  const dayLabels = ["Today", "+1", "+2", "+3", "+4", "+5", "+6"];

  const val = (n: number) => (hasHydrated ? String(n) : "—");

  return (
    <div className="flex flex-col gap-6">
      {/* top stats */}
      <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        <Stat icon={<Flame className="h-5 w-5" />} tone="gold" label="Current streak" value={hasHydrated ? `${streak} ${streak === 1 ? "day" : "days"}` : "—"} />
        <Stat icon={<Trophy className="h-5 w-5" />} tone="shu" label="Longest streak" value={hasHydrated ? `${longestStreak} ${longestStreak === 1 ? "day" : "days"}` : "—"} />
        <Stat icon={<Star className="h-5 w-5" />} tone="ai" label={`Level ${level.level} · ${level.rank}`} value={hasHydrated ? `${xp} XP` : "—"} progress={level.pct} />
        <Stat icon={<Layers className="h-5 w-5" />} tone="matcha" label="Lessons complete" value={`${val(completedCount)} / ${totalLessons}`} />
      </div>

      {/* heatmap */}
      <section className="rounded-3xl border border-line bg-surface p-4 card-shadow sm:p-6">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="flex items-center gap-2 font-display text-xl text-ink">
            <CalendarDays className="h-5 w-5 text-ink-soft" /> Study activity
          </h2>
          <span className="text-sm text-ink-soft">
            {studyDays.length} active {studyDays.length === 1 ? "day" : "days"}
          </span>
        </div>
        <StudyHeatmap />
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* per-stage */}
        <section className="rounded-3xl border border-line bg-surface p-4 card-shadow sm:p-6">
          <h2 className="mb-5 font-display text-xl text-ink">Curriculum progress</h2>
          <div className="flex flex-col gap-4">
            {stages.map((st) => {
              const lessons = lessonsForStage(st.id);
              const total = lessons.length;
              const done = lessons.filter((l) => completedLessons[l.id]).length;
              const pct = total ? (done / total) * 100 : 0;
              return (
                <div key={st.id}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-ink">
                      <span className="font-jp text-ink-faint">{st.jpTitle}</span>
                      {st.title}
                    </span>
                    <span className="text-ink-faint">
                      {total ? `${done}/${total}` : "soon"}
                    </span>
                  </div>
                  <ProgressBar value={pct} tone="matcha" />
                </div>
              );
            })}
          </div>
        </section>

        {/* flashcards */}
        <section className="rounded-3xl border border-line bg-surface p-4 card-shadow sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-display text-xl text-ink">Flashcards</h2>
            {dueNow > 0 && <Badge tone="shu">{dueNow} due now</Badge>}
          </div>

          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-faint">
              7-day forecast
            </p>
            <div className="flex items-end gap-2" style={{ height: 80 }}>
              {forecast.map((n, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <div className="flex w-full flex-1 items-end">
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-shu to-shu-deep transition-all"
                      style={{ height: `${(n / forecastMax) * 100}%`, minHeight: n > 0 ? 4 : 0 }}
                      title={`${n} due`}
                    />
                  </div>
                  <span className="text-[0.6rem] text-ink-faint">{dayLabels[i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {deckMeta.map((d) => (
              <DeckRow key={d.id} id={d.id} title={d.title} jp={d.jp} />
            ))}
          </div>
          <p className="mt-4 text-sm text-ink-soft">
            {totalAdded} card{totalAdded === 1 ? "" : "s"} in your decks.
          </p>
        </section>
      </div>

      {/* data management */}
      <section className="rounded-3xl border border-line bg-surface p-4 card-shadow sm:p-6">
        <h2 className="mb-1 font-display text-xl text-ink">Your data</h2>
        <p className="mb-5 text-sm text-ink-soft">
          Progress lives only in this browser. Export a backup, restore it on
          another device, or start fresh.
        </p>
        <DataControls />
      </section>
    </div>
  );
}

function Stat({
  icon,
  tone,
  label,
  value,
  progress,
}: {
  icon: React.ReactNode;
  tone: "gold" | "shu" | "ai" | "matcha";
  label: string;
  value: string;
  progress?: number;
}) {
  const tones = {
    gold: "text-gold bg-gold/12",
    shu: "text-shu bg-shu/12",
    ai: "text-ai bg-ai/12",
    matcha: "text-matcha bg-matcha/12",
  }[tone];
  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-line bg-surface p-5 card-shadow">
      <span className={cn("grid h-10 w-10 place-items-center rounded-full", tones)}>
        {icon}
      </span>
      <div>
        <p className="text-xs text-ink-soft">{label}</p>
        <p className="font-display text-2xl text-ink">{value}</p>
        {progress !== undefined && (
          <ProgressBar value={progress} tone={tone} className="mt-2" />
        )}
      </div>
    </div>
  );
}

function DeckRow({ id, title, jp }: { id: typeof deckMeta[number]["id"]; title: string; jp: string }) {
  const stat = useDeckStat(id);
  return (
    <div className="flex items-center gap-3">
      <span className="w-8 font-jp text-lg text-ink-faint">{jp.slice(0, 1)}</span>
      <span className="flex-1 text-sm text-ink">{title}</span>
      <span className="text-sm text-ink-faint">{stat.added} added</span>
      {stat.due > 0 && (
        <span className="text-sm font-medium text-shu">{stat.due} due</span>
      )}
    </div>
  );
}
