"use client";

import { useEffect, useRef, useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Eraser,
  Eye,
  EyeOff,
  Undo2,
} from "lucide-react";
import { gojuon, kanaOf, type KanaScript } from "@/content/kana";
import { AudioButton } from "@/components/AudioButton";
import { cn } from "@/lib/cn";

type Point = { x: number; y: number };
type Stroke = Point[];

export function KanaWriter({ script }: { script: KanaScript }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const drawing = useRef(false);
  const currentStroke = useRef<Stroke>([]);

  const [index, setIndex] = useState(0);
  const [guide, setGuide] = useState(true);
  const [strokes, setStrokes] = useState<Stroke[]>([]);

  const char = gojuon[index];
  const glyph = kanaOf(char, script);
  const expected = char.strokes?.[script === "hira" ? 0 : 1];

  function getCtx(): CanvasRenderingContext2D | null {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return null;
    const size = wrap.clientWidth;
    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== size * dpr) {
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.height = `${size}px`;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = Math.max(8, size * 0.04);
    ctx.strokeStyle =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--ink")
        .trim() || "#222";
    return ctx;
  }

  function redraw(all: Stroke[], inProgress?: Stroke) {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const ctx = getCtx();
    if (!canvas || !wrap || !ctx) return;
    const size = wrap.clientWidth;
    ctx.clearRect(0, 0, size, size);
    for (const stroke of inProgress ? [...all, inProgress] : all) {
      if (stroke.length < 2) continue;
      ctx.beginPath();
      ctx.moveTo(stroke[0].x, stroke[0].y);
      for (const p of stroke.slice(1)) ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }
  }

  useEffect(() => {
    redraw(strokes);
    const ro = new ResizeObserver(() => redraw(strokes));
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strokes]);

  // reset when switching characters or script
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional reset on nav
    setStrokes([]);
  }, [index, script]);

  function pos(e: React.PointerEvent): Point {
    const rect = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function down(e: React.PointerEvent) {
    drawing.current = true;
    canvasRef.current?.setPointerCapture(e.pointerId);
    currentStroke.current = [pos(e)];
  }

  function move(e: React.PointerEvent) {
    if (!drawing.current) return;
    currentStroke.current.push(pos(e));
    redraw(strokes, currentStroke.current);
  }

  function up() {
    if (!drawing.current) return;
    drawing.current = false;
    // ignore accidental taps with no movement
    if (currentStroke.current.length >= 2) {
      setStrokes((prev) => [...prev, currentStroke.current]);
    }
    currentStroke.current = [];
  }

  function undo() {
    setStrokes((prev) => prev.slice(0, -1));
  }

  function clear() {
    setStrokes([]);
  }

  function go(delta: number) {
    setIndex((i) => (i + delta + gojuon.length) % gojuon.length);
  }

  const drawn = strokes.length;
  const verdict =
    expected === undefined || drawn === 0
      ? null
      : drawn === expected
        ? "match"
        : drawn > expected
          ? "over"
          : "under";

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

      <div
        ref={wrapRef}
        className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl border-2 border-dashed border-line bg-surface"
      >
        {/* practice grid */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-line/70" />
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-line/70" />
        </div>
        {/* guide glyph */}
        {guide && (
          <span className="pointer-events-none absolute inset-0 grid select-none place-items-center font-jp text-[14rem] leading-none text-ink/[0.08] sm:text-[16rem]">
            {glyph}
          </span>
        )}
        <canvas
          ref={canvasRef}
          onPointerDown={down}
          onPointerMove={move}
          onPointerUp={up}
          onPointerLeave={up}
          className="absolute inset-0 h-full w-full touch-none"
        />
      </div>

      {/* stroke-count feedback */}
      {expected !== undefined && (
        <p
          role="status"
          className={cn(
            "text-sm font-medium",
            verdict === "match" && "text-matcha",
            verdict === "over" && "text-shu",
            (verdict === null || verdict === "under") && "text-ink-soft",
          )}
        >
          {verdict === null && (
            <>
              {glyph} is written with {expected} stroke
              {expected === 1 ? "" : "s"}
            </>
          )}
          {verdict === "under" && (
            <>
              {drawn} / {expected} strokes
            </>
          )}
          {verdict === "match" && (
            <span className="inline-flex items-center gap-1">
              <Check className="h-4 w-4" /> {expected} stroke
              {expected === 1 ? "" : "s"} — right count!
            </span>
          )}
          {verdict === "over" && (
            <>
              That&apos;s {drawn} — {glyph} uses {expected} stroke
              {expected === 1 ? "" : "s"}
            </>
          )}
        </p>
      )}

      <div className="flex items-center gap-2">
        <button
          onClick={() => setGuide((g) => !g)}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-soft hover:text-shu"
        >
          {guide ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {guide ? "Hide guide" : "Show guide"}
        </button>
        <button
          onClick={undo}
          disabled={drawn === 0}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-soft hover:text-shu disabled:opacity-40"
        >
          <Undo2 className="h-4 w-4" /> Undo
        </button>
        <button
          onClick={clear}
          disabled={drawn === 0}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-soft hover:text-shu disabled:opacity-40"
        >
          <Eraser className="h-4 w-4" /> Clear
        </button>
      </div>
      <p className="text-center text-xs text-ink-faint">
        Trace over the faint character, then hide the guide and try from
        memory. One pen-down to pen-up counts as one stroke.
      </p>
    </div>
  );
}
