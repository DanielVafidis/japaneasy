"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { createCard, schedule, type Grade, type SrsState } from "@/lib/srs";
import { todayStr, daysBetween } from "@/lib/datetime";
import { XP } from "@/lib/leveling";
import { vocabCardIdsForLesson } from "@/lib/lesson-cards";

export interface LessonProgress {
  completedAt: number;
}

export interface ProgressExport {
  app: "japaneasy";
  version: number;
  exportedAt: string;
  showFurigana: boolean;
  showRomaji: boolean;
  dailyGoal: number;
  autoAddVocabOnComplete: boolean;
  xpToday: number;
  xpDate: string | null;
  completedLessons: Record<string, LessonProgress>;
  quizScores: Record<string, number>;
  xp: number;
  streak: number;
  longestStreak: number;
  lastStudyDate: string | null;
  studyDays: string[];
  cards: Record<string, SrsState>;
  reviewsToday: number;
  reviewsDate: string | null;
}

interface AppState {
  hasHydrated: boolean;

  // settings
  showFurigana: boolean;
  showRomaji: boolean;
  dailyGoal: number;
  autoAddVocabOnComplete: boolean;

  // daily activity
  xpToday: number;
  xpDate: string | null;

  // progress
  completedLessons: Record<string, LessonProgress>;
  quizScores: Record<string, number>; // lessonId -> best % (0..100)

  // gamification
  xp: number;
  streak: number;
  longestStreak: number;
  lastStudyDate: string | null;
  studyDays: string[];

  // srs
  cards: Record<string, SrsState>;
  reviewsToday: number;
  reviewsDate: string | null;

  // ---- actions ----
  setHasHydrated: (v: boolean) => void;
  setShowFurigana: (v: boolean) => void;
  setShowRomaji: (v: boolean) => void;
  setDailyGoal: (n: number) => void;
  setAutoAddVocabOnComplete: (v: boolean) => void;

  markStudiedToday: () => void;
  addXp: (amount: number) => void;

  completeLesson: (lessonId: string) => { newlyAddedVocab: number };
  recordQuiz: (lessonId: string, scorePct: number) => void;

  hasCard: (id: string) => boolean;
  addCards: (ids: string[]) => number; // returns # newly added
  reviewCard: (id: string, grade: Grade) => void;

  exportProgress: () => ProgressExport;
  importProgress: (data: Partial<ProgressExport>) => boolean;

  resetAll: () => void;
}

const initial = {
  hasHydrated: false,
  showFurigana: true,
  showRomaji: false,
  dailyGoal: 50,
  autoAddVocabOnComplete: true,
  xpToday: 0,
  xpDate: null as string | null,
  completedLessons: {} as Record<string, LessonProgress>,
  quizScores: {} as Record<string, number>,
  xp: 0,
  streak: 0,
  longestStreak: 0,
  lastStudyDate: null as string | null,
  studyDays: [] as string[],
  cards: {} as Record<string, SrsState>,
  reviewsToday: 0,
  reviewsDate: null as string | null,
};

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      ...initial,

      setHasHydrated: (v) => set({ hasHydrated: v }),
      setShowFurigana: (v) => set({ showFurigana: v }),
      setShowRomaji: (v) => set({ showRomaji: v }),
      setDailyGoal: (n) =>
        set({ dailyGoal: Math.max(10, Math.min(1000, Math.round(n))) }),
      setAutoAddVocabOnComplete: (v) => set({ autoAddVocabOnComplete: v }),

      markStudiedToday: () => {
        const today = todayStr();
        const { lastStudyDate, streak, longestStreak, studyDays } = get();
        if (lastStudyDate === today) return;

        let nextStreak = 1;
        if (lastStudyDate && daysBetween(lastStudyDate, today) === 1) {
          nextStreak = streak + 1;
        }
        set({
          lastStudyDate: today,
          streak: nextStreak,
          longestStreak: Math.max(longestStreak, nextStreak),
          studyDays: studyDays.includes(today)
            ? studyDays
            : [...studyDays, today].slice(-400),
        });
      },

      addXp: (amount) => {
        if (amount <= 0) return;
        const today = todayStr();
        set((s) => ({
          xp: s.xp + amount,
          xpToday: (s.xpDate === today ? s.xpToday : 0) + amount,
          xpDate: today,
        }));
        get().markStudiedToday();
      },

      completeLesson: (lessonId) => {
        const already = get().completedLessons[lessonId];
        set((s) => ({
          completedLessons: {
            ...s.completedLessons,
            [lessonId]: { completedAt: Date.now() },
          },
        }));
        if (!already) get().addXp(XP.lessonComplete);
        else get().markStudiedToday();

        let newlyAddedVocab = 0;
        if (get().autoAddVocabOnComplete) {
          newlyAddedVocab = get().addCards(vocabCardIdsForLesson(lessonId));
        }
        return { newlyAddedVocab };
      },

      recordQuiz: (lessonId, scorePct) => {
        const prev = get().quizScores[lessonId] ?? -1;
        if (scorePct > prev) {
          set((s) => ({
            quizScores: { ...s.quizScores, [lessonId]: scorePct },
          }));
        }
        get().markStudiedToday();
      },

      hasCard: (id) => Boolean(get().cards[id]),

      addCards: (ids) => {
        const cards = { ...get().cards };
        let added = 0;
        const now = Date.now();
        for (const id of ids) {
          if (!cards[id]) {
            cards[id] = createCard(id, now);
            added++;
          }
        }
        if (added > 0) set({ cards });
        return added;
      },

      reviewCard: (id, grade) => {
        const card = get().cards[id];
        if (!card) return;
        const next = schedule(card, grade);

        const today = todayStr();
        const sameDay = get().reviewsDate === today;
        set((s) => ({
          cards: { ...s.cards, [id]: next },
          reviewsDate: today,
          reviewsToday: sameDay ? s.reviewsToday + 1 : 1,
        }));
        get().addXp(XP.cardReviewed);
      },

      exportProgress: () => {
        const s = get();
        return {
          app: "japaneasy",
          version: 1,
          exportedAt: new Date().toISOString(),
          showFurigana: s.showFurigana,
          showRomaji: s.showRomaji,
          dailyGoal: s.dailyGoal,
          autoAddVocabOnComplete: s.autoAddVocabOnComplete,
          xpToday: s.xpToday,
          xpDate: s.xpDate,
          completedLessons: s.completedLessons,
          quizScores: s.quizScores,
          xp: s.xp,
          streak: s.streak,
          longestStreak: s.longestStreak,
          lastStudyDate: s.lastStudyDate,
          studyDays: s.studyDays,
          cards: s.cards,
          reviewsToday: s.reviewsToday,
          reviewsDate: s.reviewsDate,
        };
      },

      importProgress: (data) => {
        if (!data || typeof data !== "object") return false;
        const s = get();
        const num = (v: unknown, fallback: number) =>
          typeof v === "number" && Number.isFinite(v) ? v : fallback;
        set({
          showFurigana:
            typeof data.showFurigana === "boolean"
              ? data.showFurigana
              : s.showFurigana,
          showRomaji:
            typeof data.showRomaji === "boolean"
              ? data.showRomaji
              : s.showRomaji,
          dailyGoal: num(data.dailyGoal, s.dailyGoal),
          autoAddVocabOnComplete:
            typeof data.autoAddVocabOnComplete === "boolean"
              ? data.autoAddVocabOnComplete
              : s.autoAddVocabOnComplete,
          xpToday: num(data.xpToday, s.xpToday),
          xpDate:
            data.xpDate === null || typeof data.xpDate === "string"
              ? data.xpDate
              : s.xpDate,
          completedLessons: data.completedLessons ?? s.completedLessons,
          quizScores: data.quizScores ?? s.quizScores,
          xp: num(data.xp, s.xp),
          streak: num(data.streak, s.streak),
          longestStreak: num(data.longestStreak, s.longestStreak),
          lastStudyDate:
            data.lastStudyDate === null || typeof data.lastStudyDate === "string"
              ? data.lastStudyDate
              : s.lastStudyDate,
          studyDays: Array.isArray(data.studyDays)
            ? data.studyDays
            : s.studyDays,
          cards: data.cards ?? s.cards,
          reviewsToday: num(data.reviewsToday, s.reviewsToday),
          reviewsDate:
            data.reviewsDate === null || typeof data.reviewsDate === "string"
              ? data.reviewsDate
              : s.reviewsDate,
        });
        return true;
      },

      resetAll: () => set({ ...initial, hasHydrated: true }),
    }),
    {
      name: "japaneasy-store-v1",
      version: 1,
      storage: createJSONStorage(() =>
        typeof window !== "undefined"
          ? window.localStorage
          : {
              getItem: () => null,
              setItem: () => {},
              removeItem: () => {},
            },
      ),
      skipHydration: true,
      partialize: (s) => ({
        showFurigana: s.showFurigana,
        showRomaji: s.showRomaji,
        dailyGoal: s.dailyGoal,
        autoAddVocabOnComplete: s.autoAddVocabOnComplete,
        xpToday: s.xpToday,
        xpDate: s.xpDate,
        completedLessons: s.completedLessons,
        quizScores: s.quizScores,
        xp: s.xp,
        streak: s.streak,
        longestStreak: s.longestStreak,
        lastStudyDate: s.lastStudyDate,
        studyDays: s.studyDays,
        cards: s.cards,
        reviewsToday: s.reviewsToday,
        reviewsDate: s.reviewsDate,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
