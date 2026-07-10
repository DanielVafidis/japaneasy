"use client";

import Link from "next/link";
import { BookOpenText, CheckCircle2, Clock } from "lucide-react";
import { useStore } from "@/lib/store";
import { allReadings } from "@/content/readings";
import { stages } from "@/content/curriculum";
import { JapaneseText } from "@/components/JapaneseText";
import { Badge } from "@/components/ui/Badge";

export function ReadingsView() {
  const hasHydrated = useStore((s) => s.hasHydrated);
  const completedReadings = useStore((s) => s.completedReadings);

  const byStage = stages
    .map((stage) => ({
      stage,
      readings: allReadings
        .filter((r) => r.stage === stage.id)
        .sort((a, b) => a.order - b.order),
    }))
    .filter((g) => g.readings.length > 0);

  return (
    <div className="flex flex-col gap-10">
      {byStage.map(({ stage, readings }) => (
        <section key={stage.id}>
          <h2 className="mb-1 flex items-center gap-2 font-display text-xl text-ink">
            {stage.title}
            <span className="font-jp text-base text-ink-faint">
              {stage.jpTitle}
            </span>
          </h2>
          <p className="mb-4 text-sm text-ink-soft">
            Written with the grammar and words taught up to this stage.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {readings.map((r) => {
              const done = hasHydrated && Boolean(completedReadings[r.id]);
              return (
                <Link
                  key={r.id}
                  href={`/readings/${r.id}`}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-5 transition-all card-shadow hover:-translate-y-0.5 hover:border-shu/40 sm:p-6"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <Badge tone={done ? "matcha" : "shu"}>
                      {done ? (
                        <>
                          <CheckCircle2 className="h-3 w-3" /> Read
                        </>
                      ) : (
                        <>
                          <BookOpenText className="h-3 w-3" /> Reading
                        </>
                      )}
                    </Badge>
                    {r.estMinutes && (
                      <Badge tone="neutral">
                        <Clock className="h-3 w-3" /> {r.estMinutes} min
                      </Badge>
                    )}
                  </div>
                  <JapaneseText
                    text={r.jpTitle}
                    className="text-2xl group-hover:text-shu"
                  />
                  <p className="mt-0.5 font-display text-lg text-ink-soft">
                    {r.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">
                    {r.summary}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
