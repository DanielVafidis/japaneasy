"use client";

import Link from "next/link";
import { Languages } from "lucide-react";
import { useStore } from "@/lib/store";
import { cardsForDeck } from "@/content/decks";

const HIRA_TOTAL = cardsForDeck("kana-hira").length;

/**
 * Soft kana-first suggestion (never a hard gate): shown on the first few
 * grammar lessons while most of the hiragana deck is still unenrolled.
 */
export function KanaNudge() {
  const hasHydrated = useStore((s) => s.hasHydrated);
  const cards = useStore((s) => s.cards);

  const hiraAdded = Object.keys(cards).filter((id) =>
    id.startsWith("kana-hira:"),
  ).length;

  if (!hasHydrated || hiraAdded >= HIRA_TOTAL * 0.8) return null;

  return (
    <p className="mb-10 flex items-start gap-2.5 rounded-2xl border border-gold/40 bg-gold/[0.07] px-4 py-3 text-sm leading-6 text-ink-soft">
      <Languages className="mt-1 h-4 w-4 shrink-0 text-gold" />
      <span>
        Everything from here on is written in kana. If hiragana isn&apos;t
        automatic yet, a few rounds of the{" "}
        <Link href="/kana" className="font-medium text-shu hover:underline">
          kana trainer
        </Link>{" "}
        first will make this lesson far easier.
      </span>
    </p>
  );
}
