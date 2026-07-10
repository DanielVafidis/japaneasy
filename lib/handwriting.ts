/**
 * Geometry helpers for grading a hand-drawn stroke against a reference
 * stroke (a KanjiVG path sampled to evenly spaced points). Pure math so it
 * can be unit-tested without a DOM.
 */

export type Point = { x: number; y: number };

export interface StrokeGrade {
  pass: boolean;
  /** Mean pointwise deviation after resampling, in board units. */
  meanDist: number;
  startDist: number;
  endDist: number;
  /** Drawn length ÷ reference length. */
  lengthRatio: number;
  /** True when the stroke was drawn in roughly the opposite direction. */
  backwards: boolean;
}

/** Tolerances as fractions of the board size. */
export const STROKE_TOLERANCE = {
  mean: 0.12,
  end: 0.15,
  lengthMin: 0.5,
  lengthMax: 2.0,
} as const;

function dist(a: Point, b: Point): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export function strokeLength(pts: Point[]): number {
  let len = 0;
  for (let i = 1; i < pts.length; i++) len += dist(pts[i - 1], pts[i]);
  return len;
}

/** Resample a polyline to n points spaced evenly along its arc length. */
export function resample(pts: Point[], n: number): Point[] {
  if (pts.length === 0 || n < 2) return pts.slice(0, n).map((p) => ({ ...p }));
  const total = strokeLength(pts);
  if (total === 0) return Array.from({ length: n }, () => ({ ...pts[0] }));

  const out: Point[] = [{ ...pts[0] }];
  const step = total / (n - 1);
  let need = step;
  let prev = pts[0];
  for (let i = 1; i < pts.length && out.length < n; i++) {
    const cur = pts[i];
    let seg = dist(prev, cur);
    while (seg >= need && out.length < n) {
      const t = need / seg;
      const p = {
        x: prev.x + (cur.x - prev.x) * t,
        y: prev.y + (cur.y - prev.y) * t,
      };
      out.push(p);
      prev = p;
      seg -= need;
      need = step;
    }
    need -= seg;
    prev = cur;
  }
  while (out.length < n) out.push({ ...pts[pts.length - 1] });
  return out;
}

/**
 * Grade a drawn stroke against reference points. Both are resampled to the
 * same count, so the comparison is position-by-position along each stroke —
 * a stroke drawn far away, badly misshapen, or in the wrong direction fails.
 */
export function gradeStroke(
  user: Point[],
  expected: Point[],
  size: number,
): StrokeGrade {
  const n = Math.max(expected.length, 2);
  const e = resample(expected, n);
  const u = resample(user, n);

  let sum = 0;
  for (let i = 0; i < n; i++) sum += dist(u[i], e[i]);
  const meanDist = sum / n;
  const startDist = dist(u[0], e[0]);
  const endDist = dist(u[n - 1], e[n - 1]);
  const lengthRatio =
    strokeLength(user) / Math.max(strokeLength(e), Number.EPSILON);

  // Chord-direction check catches short strokes drawn backwards, where the
  // endpoint distances alone stay within tolerance.
  const uChord = { x: u[n - 1].x - u[0].x, y: u[n - 1].y - u[0].y };
  const eChord = { x: e[n - 1].x - e[0].x, y: e[n - 1].y - e[0].y };
  const chordsMeaningful =
    Math.hypot(uChord.x, uChord.y) > 1 && Math.hypot(eChord.x, eChord.y) > 1;
  const backwards =
    chordsMeaningful && uChord.x * eChord.x + uChord.y * eChord.y < 0;

  const pass =
    !backwards &&
    meanDist <= size * STROKE_TOLERANCE.mean &&
    startDist <= size * STROKE_TOLERANCE.end &&
    endDist <= size * STROKE_TOLERANCE.end &&
    lengthRatio >= STROKE_TOLERANCE.lengthMin &&
    lengthRatio <= STROKE_TOLERANCE.lengthMax;

  return { pass, meanDist, startDist, endDist, lengthRatio, backwards };
}
