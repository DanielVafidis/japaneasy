import { describe, expect, it } from "vitest";
import {
  createCard,
  dueCount,
  isDue,
  previewInterval,
  schedule,
} from "@/lib/srs";

const NOW = 1_750_000_000_000;

describe("createCard", () => {
  it("is due immediately with starting ease", () => {
    const c = createCard("vocab:水", NOW);
    expect(c.due).toBe(NOW);
    expect(c.ease).toBe(2.5);
    expect(c.reps).toBe(0);
    expect(isDue(c, NOW)).toBe(true);
  });
});

describe("schedule", () => {
  it("again: lapses, resets reps, drops ease, due in ~1 minute", () => {
    const c = { ...createCard("x", NOW), reps: 3, intervalDays: 10 };
    const next = schedule(c, "again", NOW);
    expect(next.lapses).toBe(1);
    expect(next.reps).toBe(0);
    expect(next.ease).toBe(2.3);
    expect(next.due).toBe(NOW + 60_000);
    expect(next.intervalDays).toBe(0);
  });

  it("ease never drops below 1.3", () => {
    let c = createCard("x", NOW);
    for (let i = 0; i < 20; i++) c = schedule(c, "again", NOW);
    expect(c.ease).toBe(1.3);
  });

  it("first good review schedules 1 day out", () => {
    const next = schedule(createCard("x", NOW), "good", NOW);
    expect(next.intervalDays).toBe(1);
    expect(next.reps).toBe(1);
    expect(next.due).toBe(NOW + 24 * 60 * 60 * 1000);
  });

  it("graduating steps: 1d then 4d then interval × ease", () => {
    let c = schedule(createCard("x", NOW), "good", NOW);
    c = schedule(c, "good", NOW);
    expect(c.intervalDays).toBe(4);
    c = schedule(c, "good", NOW);
    expect(c.intervalDays).toBe(10); // 4 × 2.5
  });

  it("hard shortens growth and drops ease", () => {
    let c = { ...createCard("x", NOW), reps: 5, intervalDays: 10 };
    c = schedule(c, "hard", NOW);
    expect(c.intervalDays).toBe(12); // 10 × 1.2
    expect(c.ease).toBe(2.35);
  });

  it("easy grows faster and raises ease", () => {
    const first = schedule(createCard("x", NOW), "easy", NOW);
    expect(first.intervalDays).toBe(3);
    expect(first.ease).toBe(2.65);
  });

  it("keeps a minimum half-day interval", () => {
    const next = schedule(createCard("x", NOW), "hard", NOW);
    expect(next.intervalDays).toBe(0.5);
  });
});

describe("previewInterval / dueCount", () => {
  it("labels the again path as one minute", () => {
    expect(previewInterval(createCard("x", NOW), "again")).toBe("1m");
  });

  it("labels day-scale intervals", () => {
    expect(previewInterval(createCard("x", NOW), "good")).toBe("1d");
  });

  it("counts only due cards", () => {
    const due = createCard("a", NOW - 1000);
    const future = { ...createCard("b", NOW), due: NOW + 1000 };
    expect(dueCount([due, future], NOW)).toBe(1);
  });
});
