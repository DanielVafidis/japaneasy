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
      className={cn("segment-item", active && "segment-item-active")}
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
    <div className={cn("segment-track w-full sm:w-auto", className)}>
      <span className="hidden items-center px-2 text-[0.7rem] font-medium uppercase tracking-wide text-ink-faint sm:inline-flex">
        Readings
      </span>
      <Toggle active={showFurigana} onClick={() => setShowFurigana(!showFurigana)}>
        <span className="font-jp">ふりがな</span>
      </Toggle>
      <Toggle active={showRomaji} onClick={() => setShowRomaji(!showRomaji)}>
        Romaji
      </Toggle>
    </div>
  );
}
