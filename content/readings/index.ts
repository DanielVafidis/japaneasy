import type { Reading, StageId } from "../types";
import { myDog } from "./my-dog";
import { theLibrary } from "./the-library";
import { aTextFromAFriend } from "./a-text-from-a-friend";

export const allReadings: Reading[] = [myDog, theLibrary, aTextFromAFriend];

export function getReading(id: string): Reading | undefined {
  return allReadings.find((r) => r.id === id);
}

/** Readings sorted by stage order, then their own order. */
export function orderedReadings(stageIndex: (s: StageId) => number): Reading[] {
  return [...allReadings].sort(
    (a, b) => stageIndex(a.stage) - stageIndex(b.stage) || a.order - b.order,
  );
}
