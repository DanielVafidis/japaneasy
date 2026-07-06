"use client";

import { useStore } from "@/lib/store";
import { cn } from "@/lib/cn";

function Toggle({
  active,
  onClick,
  children,
  className,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "px-3 py-1.5 text-xs font-medium transition-all sm:py-1",
        active
          ? "bg-shu text-white shadow-sm"
          : "text-ink-soft hover:text-ink active:bg-surface-2",
        className,
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
    <div className={cn("touch-segment w-full sm:w-auto", className)}>
      <span className="hidden px-2 text-[0.7rem] font-medium uppercase tracking-wide text-ink-faint sm:inline">
        Readings
      </span>
      <Toggle
        active={showFurigana}
        onClick={() => setShowFurigana(!showFurigana)}
        className="flex-1 sm:flex-none"
      >
        ふりがな
      </Toggle>
      <Toggle
        active={showRomaji}
        onClick={() => setShowRomaji(!showRomaji)}
        className="flex-1 sm:flex-none"
      >
        Romaji
      </Toggle>
    </div>
  );
}
