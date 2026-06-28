"use client";

import { useStore } from "@/lib/store";

export function ResetProgress() {
  const resetAll = useStore((s) => s.resetAll);

  function handle() {
    const ok = window.confirm(
      "Reset all progress? This clears your streak, XP, completed lessons and flashcards on this device. This cannot be undone.",
    );
    if (ok) resetAll();
  }

  return (
    <button
      type="button"
      onClick={handle}
      className="text-ink-faint underline-offset-4 transition-colors hover:text-shu hover:underline"
    >
      Reset progress
    </button>
  );
}
