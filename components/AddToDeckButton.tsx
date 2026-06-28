"use client";

import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/cn";

export function AddToDeckButton({
  ids,
  label = "Add to flashcards",
  className,
  size = "sm",
}: {
  ids: string[];
  label?: string;
  className?: string;
  size?: "sm" | "md";
}) {
  const addCards = useStore((s) => s.addCards);
  const cards = useStore((s) => s.cards);
  const [justAdded, setJustAdded] = useState(false);

  const allPresent = ids.length > 0 && ids.every((id) => cards[id]);
  const added = allPresent || justAdded;

  function handle() {
    addCards(ids);
    setJustAdded(true);
  }

  return (
    <button
      type="button"
      onClick={handle}
      disabled={added}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium transition-all active:scale-95 disabled:active:scale-100",
        size === "sm" ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm",
        added
          ? "border-matcha/40 bg-matcha/10 text-matcha"
          : "border-line bg-surface text-ink-soft hover:border-shu/40 hover:text-shu",
        className,
      )}
    >
      {added ? (
        <>
          <Check className="h-3.5 w-3.5" /> Added
        </>
      ) : (
        <>
          <Plus className="h-3.5 w-3.5" /> {label}
        </>
      )}
    </button>
  );
}
