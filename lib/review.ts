"use client";

import { useStore } from "@/lib/store";
import { useNow } from "@/lib/now";
import { isDue, isLeech, type SrsState } from "@/lib/srs";
import { cardsById, type DeckId } from "@/content/decks";
import type { StageId } from "@/content/types";

export interface ReviewableCard {
  state: SrsState;
}

/** SRS states that have backing content and are currently due. */
export function useDueStates(): SrsState[] {
  const cards = useStore((s) => s.cards);
  const now = useNow();
  return Object.values(cards).filter((c) => cardsById[c.id] && isDue(c, now));
}

export function useTotalAdded(): number {
  const cards = useStore((s) => s.cards);
  return Object.values(cards).filter((c) => cardsById[c.id]).length;
}

/** Cards failed repeatedly (leeches), most-lapsed first. */
export function useLeechStates(): SrsState[] {
  const cards = useStore((s) => s.cards);
  return Object.values(cards)
    .filter((c) => cardsById[c.id] && isLeech(c))
    .sort((a, b) => b.lapses - a.lapses);
}

export interface DeckStat {
  added: number;
  due: number;
}

export function useDeckStat(deck: DeckId): DeckStat {
  const cards = useStore((s) => s.cards);
  const now = useNow();
  let added = 0;
  let due = 0;
  for (const c of Object.values(cards)) {
    const meta = cardsById[c.id];
    if (!meta || meta.deck !== deck) continue;
    added++;
    if (isDue(c, now)) due++;
  }
  return { added, due };
}

/** Vocab-deck stats limited to one curriculum stage. */
export function useVocabStageStat(stage: StageId): DeckStat {
  const cards = useStore((s) => s.cards);
  const now = useNow();
  let added = 0;
  let due = 0;
  for (const c of Object.values(cards)) {
    const meta = cardsById[c.id];
    if (!meta || meta.deck !== "vocab" || meta.stage !== stage) continue;
    added++;
    if (isDue(c, now)) due++;
  }
  return { added, due };
}
