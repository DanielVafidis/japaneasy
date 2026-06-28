"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import {
  gojuon,
  dakuten,
  yoon,
  kanaOf,
  type KanaChar,
  type KanaScript,
} from "@/content/kana";
import { useStore } from "@/lib/store";
import { speak } from "@/lib/speech";
import { cn } from "@/lib/cn";

type SetId = "basic" | "dakuten" | "all";
type Direction = "k2r" | "r2k"; // kana->romaji or romaji->kana

function pickPool(set: SetId): KanaChar[] {
  if (set === "basic") return gojuon;
  if (set === "dakuten") return [...gojuon, ...dakuten];
  return [...gojuon, ...dakuten, ...yoon];
}

function sample<T>(arr: T[], n: number, exclude: T): T[] {
  const out: T[] = [];
  const pool = arr.filter((x) => x !== exclude);
  while (out.length < n && pool.length) {
    const idx = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(idx, 1)[0]);
  }
  return out;
}

export function KanaQuiz({ script }: { script: KanaScript }) {
  const addXp = useStore((s) => s.addXp);
  const [set, setSet] = useState<SetId>("basic");
  const [dir, setDir] = useState<Direction>("k2r");
  const [current, setCurrent] = useState<KanaChar | null>(null);
  const [choices, setChoices] = useState<KanaChar[]>([]);
  const [picked, setPicked] = useState<KanaChar | null>(null);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);

  const pool = useMemo(() => pickPool(set), [set]);

  const newQuestion = useCallback(() => {
    const answer = pool[Math.floor(Math.random() * pool.length)];
    const distractors = sample(pool, 3, answer);
    const all = [...distractors, answer].sort(() => Math.random() - 0.5);
    setCurrent(answer);
    setChoices(all);
    setPicked(null);
  }, [pool]);

  useEffect(() => {
    newQuestion();
  }, [newQuestion]);

  function choose(choice: KanaChar) {
    if (picked || !current) return;
    setPicked(choice);
    const correct = choice === current;
    setCount((c) => c + 1);
    if (correct) {
      setScore((s) => s + 1);
      addXp(2);
    }
    if (dir === "k2r") speak(kanaOf(current, script), { raw: true });
    window.setTimeout(newQuestion, 850);
  }

  if (!current) return null;

  const promptText =
    dir === "k2r" ? kanaOf(current, script) : current.romaji;

  return (
    <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
      {/* controls */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <Segmented
            value={set}
            onChange={(v) => setSet(v as SetId)}
            options={[
              { id: "basic", label: "Basic" },
              { id: "dakuten", label: "+ Dakuten" },
              { id: "all", label: "All" },
            ]}
          />
          <Segmented
            value={dir}
            onChange={(v) => setDir(v as Direction)}
            options={[
              { id: "k2r", label: "あ → a" },
              { id: "r2k", label: "a → あ" },
            ]}
          />
        </div>
        <div className="flex items-center gap-3 text-sm text-ink-soft">
          <span>
            Score{" "}
            <strong className="text-ink">
              {score}/{count}
            </strong>
          </span>
          <button
            onClick={() => {
              setScore(0);
              setCount(0);
              newQuestion();
            }}
            className="inline-flex items-center gap-1 rounded-full border border-line px-2.5 py-1 text-xs hover:text-shu"
          >
            <RotateCcw className="h-3 w-3" /> Reset
          </button>
        </div>
      </div>

      {/* prompt */}
      <div className="mb-6 grid place-items-center rounded-2xl bg-surface-2/60 py-10">
        <span
          className={cn(
            dir === "k2r" ? "font-jp text-7xl" : "text-6xl font-display",
            "text-ink",
          )}
        >
          {promptText}
        </span>
      </div>

      {/* choices */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {choices.map((choice) => {
          const label = dir === "k2r" ? choice.romaji : kanaOf(choice, script);
          const isCorrect = choice === current;
          const isPicked = choice === picked;
          return (
            <button
              key={choice.romaji + choice.hira}
              type="button"
              disabled={!!picked}
              onClick={() => choose(choice)}
              className={cn(
                "relative flex items-center justify-center rounded-2xl border py-4 text-2xl transition-all",
                dir === "k2r" ? "font-sans" : "font-jp",
                !picked &&
                  "border-line bg-surface hover:-translate-y-0.5 hover:border-shu/50",
                picked && isCorrect && "border-matcha/50 bg-matcha/10",
                picked && isPicked && !isCorrect && "border-shu/50 bg-shu/10",
                picked && !isCorrect && !isPicked && "opacity-40",
              )}
            >
              {label}
              {picked && isCorrect && (
                <Check className="absolute right-2 top-2 h-4 w-4 text-matcha" />
              )}
              {picked && isPicked && !isCorrect && (
                <X className="absolute right-2 top-2 h-4 w-4 text-shu" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Segmented({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { id: string; label: string }[];
}) {
  return (
    <div className="inline-flex rounded-full border border-line bg-surface p-1">
      {options.map((o) => (
        <button
          key={o.id}
          onClick={() => onChange(o.id)}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-medium transition-all",
            value === o.id
              ? "bg-shu text-white shadow-sm"
              : "text-ink-soft hover:text-ink",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
