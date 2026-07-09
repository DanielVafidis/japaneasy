import { getLesson } from "@/content/curriculum";
import { cardsById } from "@/content/decks";
import type { QuizQuestion } from "@/content/types";
import { stripFurigana } from "@/lib/japanese";

/** Flashcard ids for a lesson's vocabulary entries. */
export function vocabCardIdsForLesson(lessonId: string): string[] {
  const lesson = getLesson(lessonId);
  if (!lesson?.vocabulary?.length) return [];
  return lesson.vocabulary.map((v) => `vocab:${stripFurigana(v.word)}`);
}

/**
 * Text a question tests: prompts (which often embed the word in dictionary
 * form) and correct answers — never distractors.
 */
function questionJapanese(q: QuizQuestion): string[] {
  const parts: string[] = [q.prompt];
  if ("promptJp" in q && q.promptJp) parts.push(q.promptJp);
  switch (q.kind) {
    case "mc":
      parts.push(q.choices[q.answer]);
      break;
    case "fill":
      parts.push(...q.answers);
      break;
    case "order":
      parts.push(q.tiles.join(""));
      break;
    case "match":
      for (const p of q.pairs) parts.push(p.left, p.right);
      break;
  }
  return parts.map(stripFurigana);
}

/**
 * Cards worth reviewing after missing quiz questions: lesson vocabulary that
 * appears in the missed questions' Japanese, plus the lesson's grammar card.
 */
export function quizMissCardIds(
  lessonId: string,
  missed: QuizQuestion[],
): string[] {
  const lesson = getLesson(lessonId);
  if (!lesson || missed.length === 0) return [];

  const texts = missed.flatMap(questionJapanese);
  const ids = new Set<string>();
  for (const v of lesson.vocabulary ?? []) {
    const plain = stripFurigana(v.word);
    if (plain && texts.some((t) => t.includes(plain))) {
      ids.add(`vocab:${plain}`);
    }
  }
  ids.add(`grammar:${lessonId}`);
  return [...ids].filter((id) => cardsById[id]);
}
