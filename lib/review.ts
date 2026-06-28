"use client";

import { useStore } from "@/lib/store";
import { isDue, type SrsState } from "@/lib/srs";
import { cardsById, type DeckId } from "@/content/decks";

export interface ReviewableCard {
  state: SrsState;
}

/** SRS states that have backing content and are currently due. */
export function useDueStates(): SrsState[] {
  const cards = useStore((s) => s.cards);
  const now = Date.now();
  return Object.values(cards).filter((c) => cardsById[c.id] && isDue(c, now));
}

export function useTotalAdded(): number {
  const cards = useStore((s) => s.cards);
  return Object.values(cards).filter((c) => cardsById[c.id]).length;
}

export interface DeckStat {
  added: number;
  due: number;
}

export function useDeckStat(deck: DeckId): DeckStat {
  const cards = useStore((s) => s.cards);
  const now = Date.now();
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
