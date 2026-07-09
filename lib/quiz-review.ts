import type { QuizQuestion } from "@/content/types";
import {
  convertRomajiInInput,
  fromRomaji,
  kataToHira,
  normalizeRomaji,
  stripFurigana,
  toReading,
  toRomaji,
} from "@/lib/japanese";

const JA_RE = /[\u3040-\u309f\u30a0-\u30ff\u3400-\u9fff\u3005]/;

type FillQuestion = Extract<QuizQuestion, { kind: "fill" }>;
type OrderQuestion = Extract<QuizQuestion, { kind: "order" }>;
type ListenQuestion = Extract<QuizQuestion, { kind: "listen" }>;

/** Accepted transcriptions for a listening question (kanji + reading forms). */
export function listenAnswers(q: ListenQuestion): string[] {
  const raw = q.answers?.length ? q.answers : [q.audio];
  const out = new Set<string>();
  for (const a of raw) {
    out.add(stripFurigana(a));
    out.add(toReading(a));
  }
  return [...out];
}

/** A listening question checks exactly like a fill with the audio as answer. */
export function listenAsFill(q: ListenQuestion): FillQuestion {
  return { kind: "fill", prompt: q.prompt, answers: listenAnswers(q) };
}

export function checkQuizListenAnswer(q: ListenQuestion, input: string): boolean {
  return checkQuizFillAnswer(listenAsFill(q), input);
}

export function checkQuizOrderAnswer(q: OrderQuestion, picked: string[]): boolean {
  return (
    picked.length === q.tiles.length && picked.every((t, i) => t === q.tiles[i])
  );
}

/** The correct sentence, tiles joined, furigana markup preserved. */
export function orderAnswerText(q: OrderQuestion): string {
  return q.tiles.join("");
}

function normalizeJa(s: string): string {
  return s.trim().normalize("NFKC").replace(/[\s。、.！？!?'"()]/g, "");
}

export function fillUsesJapaneseInput(q: FillQuestion): boolean {
  return q.answers.some((a) => JA_RE.test(a));
}

function inputJaVariants(raw: string): string[] {
  const typed = raw.trim();
  if (!typed) return [];

  return [
    normalizeJa(typed),
    normalizeJa(convertRomajiInInput(typed)),
    normalizeJa(fromRomaji(typed)),
    normalizeJa(kataToHira(typed)),
  ];
}

function acceptedJaAnswers(answers: string[]): string[] {
  const set = new Set<string>();
  for (const a of answers) {
    set.add(normalizeJa(a));
    set.add(normalizeJa(kataToHira(a)));
    const reading = toReading(a);
    if (reading !== a) set.add(normalizeJa(reading));
  }
  return [...set];
}

function acceptedRomajiAnswers(answers: string[]): string[] {
  const set = new Set<string>();
  for (const a of answers) {
    set.add(normalizeRomaji(a));
    if (JA_RE.test(a)) {
      const romaji = normalizeRomaji(toRomaji(a));
      if (romaji) set.add(romaji);
    }
  }
  return [...set];
}

export function prepareQuizFillInput(q: FillQuestion, raw: string): string {
  if (!fillUsesJapaneseInput(q)) return raw;
  return convertRomajiInInput(raw);
}

export function quizFillPlaceholder(q: FillQuestion): string {
  if (fillUsesJapaneseInput(q)) return "Type in romaji or Japanese…";
  return "Type the romaji…";
}

export function checkQuizFillAnswer(q: FillQuestion, input: string): boolean {
  const typed = input.trim();
  if (!typed) return false;

  if (fillUsesJapaneseInput(q)) {
    const jaAccepted = acceptedJaAnswers(q.answers);
    if (inputJaVariants(typed).some((v) => jaAccepted.includes(v))) return true;

    const romajiAccepted = acceptedRomajiAnswers(q.answers);
    return romajiAccepted.includes(normalizeRomaji(typed));
  }

  const romajiAccepted = new Set(q.answers.map((a) => normalizeRomaji(a)));
  if (romajiAccepted.has(normalizeRomaji(typed))) return true;

  if (JA_RE.test(typed)) {
    return romajiAccepted.has(normalizeRomaji(toRomaji(typed)));
  }

  return false;
}
