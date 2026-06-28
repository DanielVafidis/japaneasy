"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Eraser, Eye, EyeOff } from "lucide-react";
import { gojuon, kanaOf, type KanaScript } from "@/content/kana";
import { AudioButton } from "@/components/AudioButton";
import { cn } from "@/lib/cn";

export function KanaWriter({ script }: { script: KanaScript }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const drawing = useRef(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const [index, setIndex] = useState(0);
  const [guide, setGuide] = useState(true);

  const char = gojuon[index];
  const glyph = kanaOf(char, script);

  function setupCanvas() {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const size = wrap.clientWidth;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.height = `${size}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = Math.max(8, size * 0.04);
    ctx.strokeStyle =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--ink")
        .trim() || "#222";
    ctxRef.current = ctx;
  }

  useEffect(() => {
    setupCanvas();
    const ro = new ResizeObserver(() => setupCanvas());
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function clear() {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (canvas && ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // clear when switching characters
  useEffect(() => {
    clear();
  }, [index, script]);

  function pos(e: React.PointerEvent) {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function down(e: React.PointerEvent) {
    const ctx = ctxRef.current;
    if (!ctx) return;
    drawing.current = true;
    canvasRef.current?.setPointerCapture(e.pointerId);
    ctx.strokeStyle =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--ink")
        .trim() || "#222";
    const { x, y } = pos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  function move(e: React.PointerEvent) {
    if (!drawing.current) return;
    const ctx = ctxRef.current;
    if (!ctx) return;
    const { x, y } = pos(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  function up() {
    drawing.current = false;
  }

  function go(delta: number) {
    setIndex((i) => (i + delta + gojuon.length) % gojuon.length);
  }

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

      <div className="flex items-center gap-2">
        <button
          onClick={() => setGuide((g) => !g)}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-soft hover:text-shu"
        >
          {guide ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {guide ? "Hide guide" : "Show guide"}
        </button>
        <button
          onClick={clear}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-soft hover:text-shu"
        >
          <Eraser className="h-4 w-4" /> Clear
        </button>
      </div>
      <p className="text-center text-xs text-ink-faint">
        Trace over the faint character, then hide the guide and try from memory.
      </p>
    </div>
  );
}
