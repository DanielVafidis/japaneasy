"use client";

import { useEffect, useRef, useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Eraser,
  Eye,
  EyeOff,
  Play,
  Square,
  Undo2,
} from "lucide-react";
import { gojuon, kanaOf, type KanaScript } from "@/content/kana";
import { KANA_VIEWBOX, kanaStrokes } from "@/content/kana-strokes";
import { AudioButton } from "@/components/AudioButton";
import { gradeStroke, strokeLength, type Point } from "@/lib/handwriting";
import { cn } from "@/lib/cn";

const VB = KANA_VIEWBOX;
const SAMPLE_POINTS = 32;
const HINT_AFTER_MISSES = 2;
const INK_WIDTH = 4;

type Feedback = { kind: "miss" } | { kind: "order"; looksLike: number };

function toPointsAttr(pts: Point[]): string {
  return pts.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ");
}

/** KanjiVG paths always open with an absolute moveto. */
function pathStart(d: string): Point | null {
  const m = /^[Mm]\s*(-?[\d.]+)[\s,]+(-?[\d.]+)/.exec(d);
  return m ? { x: Number(m[1]), y: Number(m[2]) } : null;
}

export function KanaWriter({ script }: { script: KanaScript }) {
  const boardRef = useRef<SVGSVGElement | null>(null);
  const liveRef = useRef<SVGPolylineElement | null>(null);
  const tipRef = useRef<SVGCircleElement | null>(null);
  const measureRefs = useRef<(SVGPathElement | null)[]>([]);
  const playRefs = useRef<(SVGPathElement | null)[]>([]);
  const drawing = useRef(false);
  const livePts = useRef<Point[]>([]);
  const wrongTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const [index, setIndex] = useState(0);
  const [guide, setGuide] = useState(true);
  const [done, setDone] = useState(0);
  const [misses, setMisses] = useState(0);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [wrongPts, setWrongPts] = useState<Point[] | null>(null);
  const [freeStrokes, setFreeStrokes] = useState<Point[][]>([]);
  const [playing, setPlaying] = useState(false);

  const char = gojuon[index];
  const glyph = kanaOf(char, script);
  const paths: string[] | undefined = kanaStrokes[glyph];
  const expected = paths?.length ?? char.strokes?.[script === "hira" ? 0 : 1];
  const complete = paths !== undefined && done >= paths.length;

  // reset when switching characters or script
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional reset on nav
    setDone(0);
    setMisses(0);
    setFeedback(null);
    setWrongPts(null);
    setFreeStrokes([]);
    setPlaying(false);
    clearTimeout(wrongTimer.current);
    drawing.current = false;
    livePts.current = [];
    liveRef.current?.setAttribute("points", "");
  }, [index, script]);

  useEffect(() => () => clearTimeout(wrongTimer.current), []);

  // stroke-order playback: drive the dash offsets from a rAF timeline
  useEffect(() => {
    if (!playing || !paths) return;
    const els = paths.map((_, i) => measureRefs.current[i]!);
    const lens = els.map((el) => el.getTotalLength());
    const durations = lens.map((l) => 300 + l * 6);
    const LEAD = 350;
    const GAP = 260;
    const HOLD = 700;
    const starts: number[] = [];
    let acc = LEAD;
    for (const d of durations) {
      starts.push(acc);
      acc += d + GAP;
    }
    const end = acc - GAP + HOLD;
    const ease = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - 2 * (1 - t) * (1 - t);
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = now - t0;
      let tip: Point | null = null;
      for (let i = 0; i < els.length; i++) {
        const raw = Math.min(1, Math.max(0, (t - starts[i]) / durations[i]));
        const p = ease(raw);
        const el = playRefs.current[i];
        el?.setAttribute("stroke-dashoffset", String(1 - p));
        // rounded line caps paint a dot at the dash boundary even at zero
        // progress, so keep strokes hidden until they start
        el?.setAttribute("visibility", raw > 0 ? "visible" : "hidden");
        if (raw > 0 && raw < 1) {
          const at = els[i].getPointAtLength(p * lens[i]);
          tip = { x: at.x, y: at.y };
        }
      }
      const dot = tipRef.current;
      if (dot) {
        dot.setAttribute("opacity", tip ? "1" : "0");
        if (tip) {
          dot.setAttribute("cx", String(tip.x));
          dot.setAttribute("cy", String(tip.y));
        }
      }
      if (t >= end) {
        setPlaying(false);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, paths]);

  function toBoard(e: React.PointerEvent): Point {
    const rect = boardRef.current!.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * VB,
      y: ((e.clientY - rect.top) / rect.height) * VB,
    };
  }

  function syncLive() {
    liveRef.current?.setAttribute("points", toPointsAttr(livePts.current));
  }

  function down(e: React.PointerEvent) {
    if (playing || complete) return;
    drawing.current = true;
    boardRef.current?.setPointerCapture(e.pointerId);
    livePts.current = [toBoard(e)];
    syncLive();
  }

  function move(e: React.PointerEvent) {
    if (!drawing.current) return;
    livePts.current.push(toBoard(e));
    syncLive();
  }

  function cancel() {
    drawing.current = false;
    livePts.current = [];
    syncLive();
  }

  function up() {
    if (!drawing.current) return;
    drawing.current = false;
    const pts = livePts.current;
    livePts.current = [];
    syncLive();
    // ignore accidental taps with no real movement
    if (pts.length < 2 || strokeLength(pts) < 2) return;
    if (!paths) {
      setFreeStrokes((prev) => [...prev, pts]);
      return;
    }
    gradeAttempt(pts);
  }

  function samplePath(el: SVGPathElement): Point[] {
    const len = el.getTotalLength();
    return Array.from({ length: SAMPLE_POINTS }, (_, i) => {
      const p = el.getPointAtLength((len * i) / (SAMPLE_POINTS - 1));
      return { x: p.x, y: p.y };
    });
  }

  function gradeAttempt(pts: Point[]) {
    if (!paths) return;
    const el = measureRefs.current[done];
    if (!el) return;
    if (gradeStroke(pts, samplePath(el), VB).pass) {
      clearTimeout(wrongTimer.current);
      setDone(done + 1);
      setMisses(0);
      setFeedback(null);
      setWrongPts(null);
      return;
    }
    // close to a later stroke instead? then it's an order mistake
    let looksLike: number | null = null;
    for (let j = done + 1; j < paths.length; j++) {
      const other = measureRefs.current[j];
      if (other && gradeStroke(pts, samplePath(other), VB).pass) {
        looksLike = j;
        break;
      }
    }
    setWrongPts(pts);
    setMisses(misses + 1);
    setFeedback(looksLike === null ? { kind: "miss" } : { kind: "order", looksLike });
    clearTimeout(wrongTimer.current);
    wrongTimer.current = setTimeout(() => setWrongPts(null), 700);
  }

  function undo() {
    if (paths) setDone((d) => Math.max(0, d - 1));
    else setFreeStrokes((prev) => prev.slice(0, -1));
    setMisses(0);
    setFeedback(null);
    setWrongPts(null);
  }

  function clear() {
    if (paths) setDone(0);
    else setFreeStrokes([]);
    setMisses(0);
    setFeedback(null);
    setWrongPts(null);
  }

  function go(delta: number) {
    setIndex((i) => (i + delta + gojuon.length) % gojuon.length);
  }

  const hasInk = paths ? done > 0 : freeStrokes.length > 0;
  const startDot =
    paths && !complete && !playing && (guide || misses > 0)
      ? pathStart(paths[done])
      : null;
  const freeDrawn = freeStrokes.length;

  return (
    <div className="flex flex-col items-center gap-5 rounded-3xl border border-line bg-surface p-6 sm:p-8">
      <div className="flex w-full max-w-sm items-center justify-between">
        <button
          onClick={() => go(-1)}
          aria-label="Previous character"
          className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink-soft hover:text-shu"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3 text-center">
          <span className="font-jp text-3xl text-ink">{glyph}</span>
          <span className="text-sm uppercase tracking-wide text-ink-faint">
            {char.romaji}
          </span>
          <AudioButton text={glyph} size="sm" />
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next character"
          className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink-soft hover:text-shu"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl border-2 border-dashed border-line bg-surface">
        {/* practice grid */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-line/70" />
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-line/70" />
        </div>
        {/* fallback guide glyph when no stroke data exists */}
        {!paths && guide && (
          <span className="pointer-events-none absolute inset-0 grid select-none place-items-center font-jp text-[14rem] leading-none text-ink/[0.08] sm:text-[16rem]">
            {glyph}
          </span>
        )}
        <svg
          ref={boardRef}
          viewBox={`0 0 ${VB} ${VB}`}
          aria-label={`Writing practice area for ${glyph}`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onPointerDown={down}
          onPointerMove={move}
          onPointerUp={up}
          onPointerCancel={cancel}
          className="absolute inset-0 h-full w-full touch-none cursor-crosshair"
        >
          {/* guide strokes; always mounted so they can be measured for grading */}
          {paths && (
            <g
              stroke="var(--ink)"
              strokeWidth={INK_WIDTH}
              className={cn(
                "transition-opacity",
                playing
                  ? "opacity-[0.07]"
                  : guide
                    ? "opacity-[0.14]"
                    : "opacity-0",
              )}
            >
              {paths.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  ref={(el) => {
                    measureRefs.current[i] = el;
                  }}
                />
              ))}
            </g>
          )}

          {/* expected-stroke hint after repeated misses */}
          {paths && !playing && !complete && misses >= HINT_AFTER_MISSES && (
            <path
              d={paths[done]}
              stroke="var(--shu)"
              strokeWidth={2.5}
              strokeDasharray="4 4"
              opacity={0.8}
            />
          )}

          {/* completed strokes, snapped to the reference shapes */}
          {paths && (
            <g
              stroke="var(--ink)"
              strokeWidth={INK_WIDTH}
              className={cn(playing && "hidden")}
            >
              {paths.slice(0, done).map((d, i) => (
                <path key={i} d={d} pathLength={1} className="kana-draw-in" />
              ))}
            </g>
          )}

          {/* freehand strokes for characters without stroke data */}
          {!paths && (
            <g stroke="var(--ink)" strokeWidth={INK_WIDTH}>
              {freeStrokes.map((pts, i) => (
                <polyline key={i} points={toPointsAttr(pts)} />
              ))}
            </g>
          )}

          {/* rejected stroke, flashed briefly */}
          {wrongPts && !playing && (
            <polyline
              key={misses}
              points={toPointsAttr(wrongPts)}
              stroke="var(--shu)"
              strokeWidth={INK_WIDTH}
              className="kana-stroke-wrong"
            />
          )}

          {/* in-progress stroke, updated imperatively while drawing */}
          <polyline
            ref={liveRef}
            points=""
            stroke="var(--ink-soft)"
            strokeWidth={INK_WIDTH}
            opacity={0.9}
          />

          {/* where the next stroke begins */}
          {startDot && (
            <circle
              cx={startDot.x}
              cy={startDot.y}
              r={3.2}
              fill="var(--shu)"
              stroke="none"
              className="kana-start-dot"
            />
          )}

          {/* stroke-order playback */}
          {paths && playing && (
            <g stroke="var(--ink)" strokeWidth={INK_WIDTH + 0.5}>
              {paths.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  pathLength={1}
                  strokeDasharray={1}
                  strokeDashoffset={1}
                  visibility="hidden"
                  ref={(el) => {
                    playRefs.current[i] = el;
                  }}
                />
              ))}
              <circle ref={tipRef} r={3.5} fill="var(--shu)" stroke="none" opacity={0} />
            </g>
          )}
        </svg>
      </div>

      {/* stroke feedback */}
      {paths ? (
        <p
          role="status"
          className={cn(
            "min-h-5 text-sm font-medium",
            complete
              ? "text-matcha"
              : feedback && !playing
                ? "text-shu"
                : "text-ink-soft",
          )}
        >
          {playing ? (
            <>Watch the stroke order…</>
          ) : complete ? (
            <span className="inline-flex items-center gap-1">
              <Check className="h-4 w-4" /> All {paths.length} strokes in the
              right order!
            </span>
          ) : feedback?.kind === "order" ? (
            <>
              That looks like stroke {feedback.looksLike + 1} — stroke{" "}
              {done + 1} comes first.
            </>
          ) : feedback?.kind === "miss" ? (
            <>
              Not quite — start at the dot and follow stroke {done + 1}.
            </>
          ) : done > 0 ? (
            <>
              {done} / {paths.length} strokes
            </>
          ) : (
            <>
              {glyph} is written with {paths.length} stroke
              {paths.length === 1 ? "" : "s"} — trace them in order.
            </>
          )}
        </p>
      ) : (
        expected !== undefined && (
          <p role="status" className="min-h-5 text-sm font-medium text-ink-soft">
            {freeDrawn === 0 ? (
              <>
                {glyph} is written with {expected} stroke
                {expected === 1 ? "" : "s"}
              </>
            ) : (
              <>
                {freeDrawn} / {expected} strokes
              </>
            )}
          </p>
        )
      )}

      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setPlaying((p) => !p)}
          disabled={!paths}
          aria-label={playing ? "Stop playback" : "Play stroke order"}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-soft hover:text-shu disabled:opacity-40"
        >
          {playing ? (
            <Square className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
          {playing ? "Stop" : "Stroke order"}
        </button>
        <button
          onClick={() => setGuide((g) => !g)}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-soft hover:text-shu"
        >
          {guide ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {guide ? "Hide guide" : "Show guide"}
        </button>
        <button
          onClick={undo}
          disabled={!hasInk || playing}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-soft hover:text-shu disabled:opacity-40"
        >
          <Undo2 className="h-4 w-4" /> Undo
        </button>
        <button
          onClick={clear}
          disabled={!hasInk || playing}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-soft hover:text-shu disabled:opacity-40"
        >
          <Eraser className="h-4 w-4" /> Clear
        </button>
      </div>
      <p className="text-center text-xs text-ink-faint">
        Trace the faint character stroke by stroke — a close-enough stroke
        snaps into place. Press play to watch the order, then hide the guide
        and write from memory.
      </p>
    </div>
  );
}
