import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useStore } from "@/lib/store";
import { grammarCardIdsForLesson, vocabCardIdsForLesson } from "@/lib/lesson-cards";

const DAY1 = new Date("2026-07-09T10:00:00");

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(DAY1);
  useStore.getState().resetAll();
});

afterEach(() => {
  vi.useRealTimers();
});

const s = () => useStore.getState();

describe("streak", () => {
  it("increments on consecutive days and resets after a gap", () => {
    s().markStudiedToday();
    expect(s().streak).toBe(1);

    vi.setSystemTime(new Date("2026-07-10T09:00:00"));
    s().markStudiedToday();
    expect(s().streak).toBe(2);
    expect(s().longestStreak).toBe(2);

    vi.setSystemTime(new Date("2026-07-13T09:00:00"));
    s().markStudiedToday();
    expect(s().streak).toBe(1);
    expect(s().longestStreak).toBe(2);
  });

  it("is idempotent within a day", () => {
    s().markStudiedToday();
    s().markStudiedToday();
    expect(s().streak).toBe(1);
    expect(s().studyDays).toHaveLength(1);
  });
});

describe("xp", () => {
  it("accumulates and rolls the daily counter on a new day", () => {
    s().addXp(30);
    expect(s().xp).toBe(30);
    expect(s().xpToday).toBe(30);

    vi.setSystemTime(new Date("2026-07-10T09:00:00"));
    s().addXp(5);
    expect(s().xp).toBe(35);
    expect(s().xpToday).toBe(5);
  });
});

describe("cards", () => {
  it("addCards dedupes", () => {
    expect(s().addCards(["vocab:学校", "vocab:学校"])).toBe(1);
    expect(s().addCards(["vocab:学校"])).toBe(0);
  });

  it("boostCards spawns missing cards and pulls scheduled ones forward without penalty", () => {
    const future = Date.now() + 5 * 86400000;
    s().addCards(["vocab:学校"]);
    useStore.setState((state) => ({
      cards: {
        ...state.cards,
        "vocab:学校": {
          ...state.cards["vocab:学校"],
          due: future,
          reps: 3,
          ease: 2.7,
        },
      },
    }));

    const res = s().boostCards(["vocab:学校", "kana-hira:あ"]);
    expect(res).toEqual({ added: 1, boosted: 1 });
    expect(s().cards["vocab:学校"].due).toBeLessThanOrEqual(Date.now());
    expect(s().cards["vocab:学校"].reps).toBe(3);
    expect(s().cards["vocab:学校"].ease).toBe(2.7);

    // already due → untouched
    expect(s().boostCards(["vocab:学校"])).toEqual({ added: 0, boosted: 0 });
  });

  it("reviewCard counts daily reviews and grants XP", () => {
    s().addCards(["kana-hira:あ"]);
    s().reviewCard("kana-hira:あ", "good");
    expect(s().reviewsToday).toBe(1);
    expect(s().xp).toBeGreaterThan(0);

    vi.setSystemTime(new Date("2026-07-10T09:00:00"));
    s().addCards(["kana-hira:い"]);
    s().reviewCard("kana-hira:い", "good");
    expect(s().reviewsToday).toBe(1);
  });
});

describe("completeLesson", () => {
  it("auto-adds vocabulary and grammar drills", () => {
    const { newlyAddedVocab } = s().completeLesson("past-tense");
    expect(newlyAddedVocab).toBe(vocabCardIdsForLesson("past-tense").length);
    for (const id of grammarCardIdsForLesson("past-tense")) {
      expect(s().cards[id]).toBeDefined();
    }
  });

  it("respects the opt-out and does not double-award XP", () => {
    s().setAutoAddVocabOnComplete(false);
    s().completeLesson("past-tense");
    expect(Object.keys(s().cards)).toHaveLength(0);

    const xpAfterFirst = s().xp;
    s().completeLesson("past-tense");
    expect(s().xp).toBe(xpAfterFirst);
  });
});

describe("quiz scores", () => {
  it("keeps the best score", () => {
    s().recordQuiz("past-tense", 60);
    s().recordQuiz("past-tense", 40);
    expect(s().quizScores["past-tense"]).toBe(60);
    s().recordQuiz("past-tense", 80);
    expect(s().quizScores["past-tense"]).toBe(80);
  });
});

describe("export / import", () => {
  it("round-trips state", () => {
    s().addCards(["vocab:学校"]);
    s().addXp(10);
    s().dismissOnboarding();
    s().setDailyGoalReviews(20);
    const exported = s().exportProgress();

    s().resetAll();
    expect(s().importProgress(exported)).toBe(true);
    expect(s().cards["vocab:学校"]).toBeDefined();
    expect(s().xp).toBe(10);
    expect(s().onboardingDismissed).toBe(true);
    expect(s().dailyGoalReviews).toBe(20);
  });

  it("ignores the legacy XP dailyGoal field", () => {
    const legacy = { app: "japaneasy", version: 1, dailyGoal: 150, xp: 5 };
    expect(s().importProgress(legacy as never)).toBe(true);
    expect(s().dailyGoalReviews).toBe(10);
    expect(s().xp).toBe(5);
  });

  it("rejects non-objects", () => {
    expect(s().importProgress(null as never)).toBe(false);
  });
});

describe("settings", () => {
  it("clamps the daily review goal", () => {
    s().setDailyGoalReviews(0);
    expect(s().dailyGoalReviews).toBe(1);
    s().setDailyGoalReviews(9999);
    expect(s().dailyGoalReviews).toBe(200);
  });
});
