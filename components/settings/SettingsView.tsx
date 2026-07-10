"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useStore } from "@/lib/store";
import { setThemeMode, useThemeMode, type ThemeMode } from "@/lib/theme";
import { DataControls } from "@/components/DataControls";
import { cn } from "@/lib/cn";

const GOAL_PRESETS = [5, 10, 20, 30];

export function SettingsView() {
  const hasHydrated = useStore((s) => s.hasHydrated);
  const showFurigana = useStore((s) => s.showFurigana);
  const showRomaji = useStore((s) => s.showRomaji);
  const dailyGoalReviews = useStore((s) => s.dailyGoalReviews);
  const autoAddVocabOnComplete = useStore((s) => s.autoAddVocabOnComplete);
  const setShowFurigana = useStore((s) => s.setShowFurigana);
  const setShowRomaji = useStore((s) => s.setShowRomaji);
  const setDailyGoalReviews = useStore((s) => s.setDailyGoalReviews);
  const setAutoAddVocabOnComplete = useStore((s) => s.setAutoAddVocabOnComplete);

  return (
    <div className="flex flex-col gap-6">
      <Section
        title="Reading preferences"
        desc="Defaults for how Japanese is shown across lessons. You can also toggle these per lesson."
      >
        <ToggleRow
          label="Furigana by default"
          desc="Show kana readings above kanji."
          checked={showFurigana}
          disabled={!hasHydrated}
          onChange={setShowFurigana}
        />
        <ToggleRow
          label="Romaji by default"
          desc="Show romanized readings. Best left off once you know kana."
          checked={showRomaji}
          disabled={!hasHydrated}
          onChange={setShowRomaji}
        />
      </Section>

      <Section
        title="Review preferences"
        desc="How spaced-repetition flashcards stay in sync with your lessons."
      >
        <ToggleRow
          label="Add lesson vocabulary on complete"
          desc="When you finish a lesson, its words are added to your review deck automatically."
          checked={autoAddVocabOnComplete}
          disabled={!hasHydrated}
          onChange={setAutoAddVocabOnComplete}
        />
      </Section>

      <Section
        title="Daily goal"
        desc="Reviews to finish each day. Completing any lesson also counts."
      >
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          {GOAL_PRESETS.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setDailyGoalReviews(g)}
              disabled={!hasHydrated}
              className={cn(
                "rounded-2xl border px-4 py-3 text-center transition-all sm:px-5",
                dailyGoalReviews === g
                  ? "border-shu bg-shu/10"
                  : "border-line bg-surface hover:border-shu/40",
                !hasHydrated && "pointer-events-none",
              )}
            >
              <span className="block font-display text-xl text-ink">{g}</span>
              <span className="text-xs text-ink-faint">reviews / day</span>
            </button>
          ))}
        </div>
      </Section>

      <Section title="Appearance" desc="Choose your theme.">
        <ThemeChooser />
      </Section>

      <Section
        title="Your data"
        desc="Everything is stored locally in this browser. Back it up or move it to another device."
      >
        <DataControls />
      </Section>
    </div>
  );
}

function Section({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-line bg-surface p-4 card-shadow sm:p-6">
      <h2 className="font-display text-xl text-ink">{title}</h2>
      {desc && <p className="mb-5 mt-1 text-sm text-ink-soft">{desc}</p>}
      <div className={desc ? "" : "mt-5"}>{children}</div>
    </section>
  );
}

function ToggleRow({
  label,
  desc,
  checked,
  disabled = false,
  onChange,
}: {
  label: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-line/60 py-3 last:border-0 sm:items-center sm:gap-4">
      <div>
        <p className="font-medium text-ink">{label}</p>
        <p className="text-sm text-ink-faint">{desc}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={cn(
          "inline-flex h-6 w-11 shrink-0 items-center rounded-full p-0.5 transition-colors disabled:pointer-events-none",
          checked ? "justify-end bg-shu" : "justify-start bg-line-strong",
        )}
      >
        <span
          aria-hidden
          className="block h-5 w-5 shrink-0 rounded-full bg-white shadow-sm ring-1 ring-black/5"
        />
      </button>
    </div>
  );
}

function ThemeChooser() {
  // null until hydrated, so no option is highlighted during server render
  const mode = useThemeMode();

  const options: { id: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { id: "light", label: "Light", icon: <Sun className="h-4 w-4" /> },
    { id: "dark", label: "Dark", icon: <Moon className="h-4 w-4" /> },
    { id: "system", label: "System", icon: <Monitor className="h-4 w-4" /> },
  ];

  return (
    <div className="grid w-full grid-cols-3 gap-0 rounded-2xl border border-line bg-surface p-0.5 sm:inline-flex sm:w-auto sm:gap-1 sm:p-1">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => setThemeMode(o.id)}
          className={cn(
            "flex items-center justify-center gap-1.5 rounded-xl px-2 py-2.5 text-sm font-medium transition-all sm:gap-2 sm:px-4 sm:py-2",
            mode === o.id
              ? "bg-shu text-white shadow-sm"
              : "text-ink-soft hover:text-ink",
          )}
        >
          {o.icon}
          {o.label}
        </button>
      ))}
    </div>
  );
}
