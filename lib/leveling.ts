/** XP economy + level curve. Total XP to reach a level grows quadratically. */

export const XP = {
  lessonComplete: 40,
  quizPerCorrect: 5,
  quizPerfectBonus: 25,
  cardReviewed: 2,
  kanaLearned: 3,
} as const;

const RANKS = [
  "Beginner 初心",
  "Apprentice 見習",
  "Student 学生",
  "Adept 達人",
  "Scholar 学者",
  "Master 師範",
  "Sensei 先生",
] as const;

export function totalXpForLevel(level: number): number {
  return 50 * (level - 1) * level;
}

export interface LevelInfo {
  level: number;
  rank: string;
  into: number;
  span: number;
  pct: number;
  toNext: number;
}

export function levelInfo(xp: number): LevelInfo {
  let level = 1;
  while (totalXpForLevel(level + 1) <= xp) level++;
  const currentBase = totalXpForLevel(level);
  const nextBase = totalXpForLevel(level + 1);
  const into = xp - currentBase;
  const span = nextBase - currentBase;
  const rank = RANKS[Math.min(RANKS.length - 1, Math.floor((level - 1) / 3))];
  return {
    level,
    rank,
    into,
    span,
    pct: span ? (into / span) * 100 : 0,
    toNext: span - into,
  };
}
