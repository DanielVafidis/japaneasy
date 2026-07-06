import { getLesson } from "@/content/curriculum";
import { stripFurigana } from "@/lib/japanese";

/** Flashcard ids for a lesson's vocabulary entries. */
export function vocabCardIdsForLesson(lessonId: string): string[] {
  const lesson = getLesson(lessonId);
  if (!lesson?.vocabulary?.length) return [];
  return lesson.vocabulary.map((v) => `vocab:${stripFurigana(v.word)}`);
}
