import { describe, expect, it } from "vitest";
import {
  gradeStroke,
  resample,
  strokeLength,
  type Point,
} from "@/lib/handwriting";

const SIZE = 109;

function line(a: Point, b: Point, n = 16): Point[] {
  return Array.from({ length: n }, (_, i) => ({
    x: a.x + ((b.x - a.x) * i) / (n - 1),
    y: a.y + ((b.y - a.y) * i) / (n - 1),
  }));
}

function jitter(pts: Point[], amount: number): Point[] {
  return pts.map((p, i) => ({
    x: p.x + Math.sin(i * 2.1) * amount,
    y: p.y + Math.cos(i * 1.3) * amount,
  }));
}

describe("resample", () => {
  it("returns the requested number of evenly spaced points", () => {
    const pts = resample(line({ x: 0, y: 0 }, { x: 90, y: 0 }, 7), 32);
    expect(pts).toHaveLength(32);
    expect(pts[0]).toEqual({ x: 0, y: 0 });
    expect(pts[31].x).toBeCloseTo(90, 3);
    const gaps = pts.slice(1).map((p, i) => strokeLength([pts[i], p]));
    for (const g of gaps) expect(g).toBeCloseTo(90 / 31, 3);
  });

  it("handles uneven input spacing", () => {
    const pts = resample(
      [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 80, y: 0 },
      ],
      9,
    );
    expect(pts).toHaveLength(9);
    expect(pts[4].x).toBeCloseTo(40, 3);
  });
});

describe("gradeStroke", () => {
  const reference = line({ x: 20, y: 30 }, { x: 85, y: 40 });

  it("passes a slightly wobbly trace", () => {
    const grade = gradeStroke(jitter(reference, 4), reference, SIZE);
    expect(grade.pass).toBe(true);
  });

  it("passes a modest parallel offset", () => {
    const offset = reference.map((p) => ({ x: p.x + 6, y: p.y + 6 }));
    expect(gradeStroke(offset, reference, SIZE).pass).toBe(true);
  });

  it("fails a stroke drawn far away", () => {
    const far = reference.map((p) => ({ x: p.x, y: p.y + 40 }));
    const grade = gradeStroke(far, reference, SIZE);
    expect(grade.pass).toBe(false);
    expect(grade.meanDist).toBeGreaterThan(SIZE * 0.12);
  });

  it("fails a long stroke drawn backwards", () => {
    const grade = gradeStroke([...reference].reverse(), reference, SIZE);
    expect(grade.pass).toBe(false);
  });

  it("fails a short stroke drawn backwards via the direction check", () => {
    const short = line({ x: 50, y: 50 }, { x: 58, y: 50 });
    const grade = gradeStroke([...short].reverse(), short, SIZE);
    expect(grade.backwards).toBe(true);
    expect(grade.pass).toBe(false);
  });

  it("fails a scribble much longer than the reference", () => {
    const zigzag: Point[] = [];
    for (let i = 0; i < 16; i++) {
      zigzag.push({ x: 20 + i * 4, y: i % 2 === 0 ? 10 : 60 });
    }
    const grade = gradeStroke(zigzag, reference, SIZE);
    expect(grade.lengthRatio).toBeGreaterThan(2);
    expect(grade.pass).toBe(false);
  });
});
