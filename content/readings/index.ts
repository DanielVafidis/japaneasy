import type { Reading, StageId } from "../types";
import { myDog } from "./my-dog";
import { theLibrary } from "./the-library";
import { morning } from "./morning";
import { myTown } from "./my-town";
import { buyingFruit } from "./buying-fruit";
import { atTheCafe } from "./at-the-cafe";
import { aTextFromAFriend } from "./a-text-from-a-friend";
import { aRainyDay } from "./a-rainy-day";
import { iWantToGoToJapan } from "./i-want-to-go-to-japan";
import { weekendPlans } from "./weekend-plans";
import { theDayIForgot } from "./the-day-i-forgot";
import { workingTooMuch } from "./working-too-much";
import { madeToWait } from "./made-to-wait";
import { atTheHotel } from "./at-the-hotel";
import { evenSo } from "./even-so";
import { alwaysLate } from "./always-late";
import { theReport } from "./the-report";
import { thatIsWhy } from "./that-is-why";
import { despiteEverything } from "./despite-everything";
import { leftAsIs } from "./left-as-is";
import { lookingTired } from "./looking-tired";
import { whetherOrNot } from "./whether-or-not";
import { unavoidable } from "./unavoidable";
import { inThatInstant } from "./in-that-instant";
import { atTheKonbini } from "./at-the-konbini";
import { atTheStation } from "./at-the-station";
import { askingDirections } from "./asking-directions";

export const allReadings: Reading[] = [
  myDog,
  theLibrary,
  morning,
  myTown,
  buyingFruit,
  atTheCafe,
  aTextFromAFriend,
  aRainyDay,
  iWantToGoToJapan,
  weekendPlans,
  atTheKonbini,
  atTheStation,
  askingDirections,
  theDayIForgot,
  workingTooMuch,
  madeToWait,
  atTheHotel,
  evenSo,
  alwaysLate,
  theReport,
  thatIsWhy,
  despiteEverything,
  leftAsIs,
  lookingTired,
  whetherOrNot,
  unavoidable,
  inThatInstant,
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
