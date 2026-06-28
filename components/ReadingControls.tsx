"use client";

import { useStore } from "@/lib/store";
import { cn } from "@/lib/cn";

function Toggle({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full px-3 py-1 text-xs font-medium transition-all",
        active
          ? "bg-shu text-white shadow-sm"
          : "text-ink-soft hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}

export function ReadingControls({ className }: { className?: string }) {
  const showFurigana = useStore((s) => s.showFurigana);
  const showRomaji = useStore((s) => s.showRomaji);
  const setShowFurigana = useStore((s) => s.setShowFurigana);
  const setShowRomaji = useStore((s) => s.setShowRomaji);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-line bg-surface p-1",
        className,
      )}
    >
      <span className="px-2 text-[0.7rem] font-medium uppercase tracking-wide text-ink-faint">
        Readings
      </span>
      <Toggle active={showFurigana} onClick={() => setShowFurigana(!showFurigana)}>
        ふりがな
      </Toggle>
      <Toggle active={showRomaji} onClick={() => setShowRomaji(!showRomaji)}>
        Romaji
      </Toggle>
    </div>
  );
}
