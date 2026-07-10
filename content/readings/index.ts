import type { Reading, StageId } from "../types";
import { myDog } from "./my-dog";
import { theLibrary } from "./the-library";
import { morning } from "./morning";
import { myTown } from "./my-town";
import { aTextFromAFriend } from "./a-text-from-a-friend";
import { aRainyDay } from "./a-rainy-day";
import { iWantToGoToJapan } from "./i-want-to-go-to-japan";
import { theDayIForgot } from "./the-day-i-forgot";
import { workingTooMuch } from "./working-too-much";
import { theReport } from "./the-report";
import { atTheKonbini } from "./at-the-konbini";
import { atTheStation } from "./at-the-station";
import { askingDirections } from "./asking-directions";

export const allReadings: Reading[] = [
  myDog,
  theLibrary,
  morning,
  myTown,
  aTextFromAFriend,
  aRainyDay,
  iWantToGoToJapan,
  atTheKonbini,
  atTheStation,
  askingDirections,
  theDayIForgot,
  workingTooMuch,
  theReport,
];

export function getReading(id: string): Reading | undefined {
  return allReadings.find((r) => r.id === id);
}

/** Readings sorted by stage order, then their own order. */
export function orderedReadings(stageIndex: (s: StageId) => number): Reading[] {
  return [...allReadings].sort(
    (a, b) => stageIndex(a.stage) - stageIndex(b.stage) || a.order - b.order,
  );
}
