"use client";

import { useStore } from "@/lib/store";
import { todayStr } from "@/lib/datetime";
import { cn } from "@/lib/cn";

const WEEKS = 18;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

interface Day {
  key: string;
  studied: boolean;
  future: boolean;
  month: number;
}

export function StudyHeatmap() {
  const studyDays = useStore((s) => s.studyDays);
  const studied = new Set(studyDays);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayKey = todayStr(today);

  const start = new Date(today);
  start.setDate(start.getDate() - (WEEKS * 7 - 1));
  start.setDate(start.getDate() - start.getDay()); // align to Sunday

  const end = new Date(today);
  end.setDate(end.getDate() + (6 - end.getDay())); // align to Saturday

  const weeks: Day[][] = [];
  const cursor = new Date(start);
  while (cursor <= end) {
    const week: Day[] = [];
    for (let d = 0; d < 7; d++) {
      const key = todayStr(cursor);
      week.push({
        key,
        studied: studied.has(key),
        future: cursor > today,
        month: cursor.getMonth(),
      });
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }

  return (
    <div className="overflow-x-auto">
      <div className="inline-flex min-w-full flex-col gap-1.5">
        {/* month labels */}
        <div className="flex gap-1 pl-7">
          {weeks.map((week, i) => {
            const first = week[0];
            const prev = weeks[i - 1]?.[0];
            const showLabel = i === 0 || (prev && prev.month !== first.month);
            return (
              <div key={i} className="w-3 text-[0.6rem] text-ink-faint">
                {showLabel ? MONTHS[first.month] : ""}
              </div>
            );
          })}
        </div>

        <div className="flex gap-2">
          {/* weekday labels */}
          <div className="flex flex-col justify-between py-px text-[0.6rem] text-ink-faint">
            <span>Sun</span>
            <span>Wed</span>
            <span>Sat</span>
          </div>

          {/* grid */}
          <div className="flex gap-1">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1">
                {week.map((day) => (
                  <div
                    key={day.key}
                    title={day.future ? "" : `${day.key}${day.studied ? " · studied" : ""}`}
                    className={cn(
                      "h-3 w-3 rounded-[3px] transition-colors",
                      day.future
                        ? "bg-transparent"
                        : day.studied
                          ? "bg-matcha"
                          : "bg-line/60",
                      day.key === todayKey &&
                        "ring-1 ring-shu ring-offset-1 ring-offset-paper",
                    )}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* legend */}
        <div className="flex items-center gap-2 pl-7 pt-1 text-[0.65rem] text-ink-faint">
          <span>Less</span>
          <span className="h-3 w-3 rounded-[3px] bg-line/60" />
          <span className="h-3 w-3 rounded-[3px] bg-matcha/40" />
          <span className="h-3 w-3 rounded-[3px] bg-matcha/70" />
          <span className="h-3 w-3 rounded-[3px] bg-matcha" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
