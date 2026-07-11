"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { JlptLevel } from "@/content/jlpt";
import { lessonsById } from "@/content/lessons";
import {
  jlptGrammarProgress,
  jlptKanjiProgress,
  SOLID_INTERVAL_DAYS,
} from "@/lib/jlpt";
import { useStore } from "@/lib/store";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";

export function JlptProgress() {
  return (
    <section className="rounded-3xl border border-line bg-surface p-4 card-shadow sm:p-6">
      <div className="mb-1 flex items-center justify-between">
        <h2 className="font-display text-xl text-ink">JLPT coverage</h2>
        <span className="font-jp text-sm text-ink-faint">日本語能力試験</span>
      </div>
      <p className="mb-5 text-sm text-ink-soft">
        How far the course has taken you through the N5 and N4 study lists —
        grammar counts lessons you have completed; kanji counts characters in
        your review decks.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <LevelCard level={5} />
        <LevelCard level={4} />
      </div>
    </section>
  );
}

function LevelCard({ level }: { level: JlptLevel }) {
  const hasHydrated = useStore((s) => s.hasHydrated);
  const completedLessons = useStore((s) => s.completedLessons);
  const cards = useStore((s) => s.cards);

  const grammar = jlptGrammarProgress(
    level,
    hasHydrated ? completedLessons : {},
  );
  const kanji = jlptKanjiProgress(level, hasHydrated ? cards : {});

  const grammarPct = (grammar.covered / grammar.points.length) * 100;
  const kanjiPct = (kanji.inDeck / kanji.total) * 100;
  const val = (n: number) => (hasHydrated ? String(n) : "—");

  return (
    <div className="rounded-2xl border border-line/70 bg-surface-2 p-4">
      <div className="mb-3 flex items-center gap-2">
        <Badge tone={level === 5 ? "matcha" : "ai"}>N{level}</Badge>
        <span className="text-sm text-ink-soft">
          {level === 5 ? "The essentials" : "Lower intermediate"}
        </span>
      </div>

      <div className="mb-1.5 flex items-baseline justify-between text-sm">
        <span className="text-ink">Grammar</span>
        <span className="text-ink-faint">
          {val(grammar.covered)} / {grammar.points.length} points
        </span>
      </div>
      <ProgressBar value={hasHydrated ? grammarPct : 0} tone="matcha" />

      <div className="mb-1.5 mt-4 flex items-baseline justify-between text-sm">
        <span className="text-ink">Kanji</span>
        <span className="text-ink-faint">
          {val(kanji.inDeck)} / {kanji.total} in your decks
        </span>
      </div>
      <ProgressBar value={hasHydrated ? kanjiPct : 0} tone="ai" />
      <p className="mt-1.5 text-xs text-ink-faint">
        {val(kanji.solid)} solid — reviewed out to {SOLID_INTERVAL_DAYS}+ days
      </p>

      {hasHydrated && grammar.missing.length > 0 && (
        <details className="group mt-4">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-1 text-sm font-medium text-ink-soft transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
            <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
            What&rsquo;s left ({grammar.missing.length})
          </summary>
          <ul className="mt-2 flex flex-col divide-y divide-line/60">
            {grammar.missing.map((p) => (
              <li
                key={p.jp}
                className="flex min-h-11 items-center gap-2 py-1.5 text-sm"
              >
                <span className="font-jp text-ink">{p.jp}</span>
                <span className="min-w-0 flex-1 truncate text-ink-faint">
                  {p.en}
                </span>
                {p.lessonId ? (
                  <Link
                    href={`/lessons/${p.lessonId}`}
                    className="shrink-0 font-medium text-shu hover:underline"
                  >
                    {lessonsById[p.lessonId]?.title ?? "Lesson"}
                  </Link>
                ) : (
                  <span className="shrink-0 text-xs text-ink-faint">
                    not in the course yet
                  </span>
                )}
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}
