import type { Card } from "@/content/decks";
import { kanjiByChar } from "@/content/kanji";
import type { KanaScript } from "@/content/kana";
import {
  convertRomajiInInput,
  fromRomaji,
  kataToHira,
  normalizeRomaji,
  stripFurigana,
  toReading,
  toRomaji,
} from "@/lib/japanese";

function normalizeJa(s: string): string {
  return s.trim().normalize("NFKC");
}

function normalizeReading(s: string): string {
  return normalizeJa(kataToHira(s).replace(/\./g, ""));
}

/** Kun variants: full reading and stem before okurigana dot (e.g. なな.つ → ななつ, なな). */
function kunReadingVariants(kun: string): string[] {
  const hira = kataToHira(kun);
  const variants = new Set<string>([normalizeReading(kun)]);
  const dot = hira.indexOf(".");
  if (dot > 0) variants.add(normalizeJa(hira.slice(0, dot)));
  return [...variants];
}

function normalizeEn(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[\s。、.！？!?'"()]/g, "");
}

export function answerScript(card: Card): KanaScript {
  if (card.deck === "kana-kata") return "kata";
  return "hira";
}

/** Grammar drill card: typed Japanese with an instruction label. */
function isDrill(card: Card): boolean {
  return card.deck === "grammar" && Boolean(card.answers?.length);
}

export function usesJapaneseInput(card: Card): boolean {
  return card.deck !== "grammar" || isDrill(card);
}

export function flashcardPrompt(card: Card): {
  label: string;
  text: string;
  jp?: boolean;
} {
  if (card.deck === "kana-hira" || card.deck === "kana-kata") {
    return { label: "Romaji", text: card.back };
  }
  if (isDrill(card)) {
    return { label: card.instruction ?? "Grammar", text: card.front, jp: true };
  }
  if (card.deck === "grammar") {
    return { label: "Recall", text: card.back };
  }
  return { label: "Meaning", text: card.back };
}

function acceptedJapaneseAnswers(card: Card): string[] {
  if (card.deck === "kana-hira" || card.deck === "kana-kata") {
    return [card.front];
  }
  if (isDrill(card)) {
    const answers = new Set<string>();
    for (const a of card.answers!) {
      const plain = stripFurigana(a);
      answers.add(normalizeJa(plain));
      const reading = toReading(a);
      if (reading !== plain) answers.add(normalizeJa(reading));
    }
    return [...answers];
  }
  if (card.deck === "kanji") {
    const answers = new Set<string>([normalizeJa(card.front)]);
    const entry = kanjiByChar[card.front];
    if (entry) {
      for (const on of entry.on) answers.add(normalizeReading(on));
      for (const kun of entry.kun) {
        for (const variant of kunReadingVariants(kun)) answers.add(variant);
      }
    }
    return [...answers];
  }
  if (card.deck === "vocab") {
    const plain = stripFurigana(card.front);
    const answers = new Set<string>([normalizeJa(plain)]);
    const fromFurigana = toReading(card.front);
    if (fromFurigana !== plain) answers.add(normalizeJa(fromFurigana));
    if (card.reading) answers.add(normalizeReading(card.reading));
    return [...answers];
  }
  return [card.front];
}

function acceptedRomajiAnswers(card: Card): string[] {
  if (card.deck === "kana-hira" || card.deck === "kana-kata") {
    return [normalizeRomaji(card.back)];
  }
  if (card.deck === "vocab" || card.deck === "kanji" || isDrill(card)) {
    const answers = acceptedJapaneseAnswers(card).filter(
      (a) => a !== normalizeJa(card.front),
    );
    const romaji = answers
      .map((a) => normalizeRomaji(toRomaji(a)))
      .filter(Boolean);
    return [...new Set(romaji)];
  }
  return [];
}

function inputJapaneseVariants(card: Card, input: string): string[] {
  const script = answerScript(card);
  const typed = input.trim();
  if (!typed) return [];

  return [
    normalizeJa(typed),
    normalizeJa(convertRomajiInInput(typed, script)),
    normalizeJa(fromRomaji(typed, script)),
  ];
}

export function prepareFlashcardInput(card: Card, input: string): string {
  if (!usesJapaneseInput(card)) return input;
  return convertRomajiInInput(input, answerScript(card));
}

export function checkFlashcardAnswer(card: Card, input: string): boolean {
  const typed = input.trim();
  if (!typed) return false;

  if (card.deck === "grammar" && !isDrill(card)) {
    const normalized = normalizeEn(typed);
    return [card.front].some((a) => normalizeEn(a) === normalized);
  }

  const jaVariants = inputJapaneseVariants(card, typed);
  const accepted = acceptedJapaneseAnswers(card).map(normalizeJa);
  if (jaVariants.some((v) => accepted.includes(v))) return true;

  const romajiTyped = normalizeRomaji(typed);
  const romajiAccepted = acceptedRomajiAnswers(card);
  return romajiAccepted.some((a) => a === romajiTyped);
}

export function flashcardAnswerDisplay(card: Card): string {
  if (isDrill(card)) return stripFurigana(card.answers![0]);
  if (card.deck === "grammar") return card.front;
  if (card.deck === "kanji" && card.reading) return card.reading;
  if (card.deck === "vocab" && card.reading) {
    const plain = stripFurigana(card.front);
    if (plain === card.front && !plain.match(/[\u3040-\u309f\u30a0-\u30ff]/)) {
      return `${plain} (${card.reading})`;
    }
  }
  if (card.frontJp) return stripFurigana(card.front);
  return card.front;
}

export function flashcardInputPlaceholder(card: Card): string {
  if (card.deck === "grammar" && !isDrill(card)) return "Type the answer…";
  if (card.deck === "kanji") return "Type the reading (romaji or kana)…";
  return "Type in romaji or Japanese…";
}
