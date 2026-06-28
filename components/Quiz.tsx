"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, X, RotateCcw, Trophy } from "lucide-react";
import type { QuizQuestion } from "@/content/types";
import { JapaneseText } from "@/components/JapaneseText";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

function normalize(s: string) {
  return s.trim().toLowerCase().replace(/[\s。、.！？!?]/g, "");
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function Quiz({
  questions,
  onComplete,
}: {
  questions: QuizQuestion[];
  onComplete?: (correct: number, total: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(false);
  const [finished, setFinished] = useState(false);
  const [attempt, setAttempt] = useState(0);

  const q = questions[index];

  function handleResult(correct: boolean) {
    if (answered) return;
    setAnswered(true);
    setWasCorrect(correct);
    if (correct) setCorrectCount((c) => c + 1);
  }

  function next() {
    if (index + 1 >= questions.length) {
      setFinished(true);
      onComplete?.(correctCount, questions.length);
    } else {
      setIndex((i) => i + 1);
      setAnswered(false);
      setWasCorrect(false);
    }
  }

  function restart() {
    setIndex(0);
    setCorrectCount(0);
    setAnswered(false);
    setWasCorrect(false);
    setFinished(false);
    setAttempt((a) => a + 1);
  }

  if (finished) {
    const pct = Math.round((correctCount / questions.length) * 100);
    const perfect = pct === 100;
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-line bg-surface p-8 text-center">
        <div
          className={cn(
            "grid h-16 w-16 place-items-center rounded-full",
            perfect ? "bg-gold/15 text-gold" : "bg-shu/12 text-shu",
          )}
        >
          <Trophy className="h-8 w-8" />
        </div>
        <div>
          <p className="font-display text-3xl text-ink">{pct}%</p>
          <p className="text-ink-soft">
            {correctCount} / {questions.length} correct
            {perfect && " — flawless!"}
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={restart}>
          <RotateCcw className="h-4 w-4" /> Try again
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-widest text-ink-faint">
          Question {index + 1} of {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1.5 w-5 rounded-full transition-colors",
                i < index || (i === index && answered)
                  ? "bg-shu"
                  : i === index
                    ? "bg-shu/40"
                    : "bg-line",
              )}
            />
          ))}
        </div>
      </div>

      <div key={`${attempt}-${index}`} className="animate-fade-up">
        {q.kind === "mc" && (
          <MultipleChoice q={q} answered={answered} onResult={handleResult} />
        )}
        {q.kind === "fill" && (
          <FillIn q={q} answered={answered} onResult={handleResult} />
        )}
        {q.kind === "match" && (
          <MatchPairs q={q} answered={answered} onResult={handleResult} />
        )}
      </div>

      {answered && (
        <div className="mt-5 animate-fade-up">
          <div
            className={cn(
              "flex items-start gap-2 rounded-xl p-3 text-sm",
              wasCorrect
                ? "bg-matcha/10 text-matcha"
                : "bg-shu/10 text-shu-deep",
            )}
          >
            {wasCorrect ? (
              <Check className="mt-0.5 h-4 w-4 shrink-0" />
            ) : (
              <X className="mt-0.5 h-4 w-4 shrink-0" />
            )}
            <span className="text-ink-soft">
              <strong className={wasCorrect ? "text-matcha" : "text-shu-deep"}>
                {wasCorrect ? "Correct!" : "Not quite."}
              </strong>{" "}
              {"explanation" in q && q.explanation}
            </span>
          </div>
          <div className="mt-4 flex justify-end">
            <Button size="sm" onClick={next}>
              {index + 1 >= questions.length ? "See results" : "Next"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Prompt({ prompt, promptJp }: { prompt: string; promptJp?: string }) {
  return (
    <div className="mb-5">
      <p className="text-lg text-ink">{prompt}</p>
      {promptJp && (
        <div className="mt-3 grid place-items-center rounded-2xl bg-surface-2/70 py-6">
          <JapaneseText text={promptJp} className="text-4xl" align="center" />
        </div>
      )}
    </div>
  );
}

function MultipleChoice({
  q,
  answered,
  onResult,
}: {
  q: Extract<QuizQuestion, { kind: "mc" }>;
  answered: boolean;
  onResult: (correct: boolean) => void;
}) {
  const correctValue = q.choices[q.answer];
  // Shuffle only after mount so SSR and first client render match (no hydration mismatch).
  const [choices, setChoices] = useState<string[]>(q.choices);
  const [selected, setSelected] = useState<string | null>(null);
  useEffect(() => {
    setChoices(shuffle(q.choices));
  }, [q]);

  function choose(choice: string) {
    if (answered) return;
    setSelected(choice);
    onResult(choice === correctValue);
  }

  return (
    <>
      <Prompt prompt={q.prompt} promptJp={q.promptJp} />
      <div className="grid gap-2.5 sm:grid-cols-2">
        {choices.map((choice) => {
          const isCorrect = choice === correctValue;
          const isSelected = choice === selected;
          return (
            <button
              key={choice}
              type="button"
              disabled={answered}
              onClick={() => choose(choice)}
              className={cn(
                "flex items-center justify-between gap-2 rounded-xl border px-4 py-3 text-left transition-all",
                !answered &&
                  "border-line bg-surface hover:border-shu/50 hover:bg-surface-2 active:scale-[0.99]",
                answered && isCorrect && "border-matcha/50 bg-matcha/10",
                answered &&
                  isSelected &&
                  !isCorrect &&
                  "border-shu/50 bg-shu/10",
                answered && !isCorrect && !isSelected && "border-line opacity-50",
              )}
            >
              <span className="font-jp text-ink">{choice}</span>
              {answered && isCorrect && (
                <Check className="h-4 w-4 shrink-0 text-matcha" />
              )}
              {answered && isSelected && !isCorrect && (
                <X className="h-4 w-4 shrink-0 text-shu" />
              )}
            </button>
          );
        })}
      </div>
    </>
  );
}

function FillIn({
  q,
  answered,
  onResult,
}: {
  q: Extract<QuizQuestion, { kind: "fill" }>;
  answered: boolean;
  onResult: (correct: boolean) => void;
}) {
  const [value, setValue] = useState("");
  const accepted = useMemo(() => q.answers.map(normalize), [q]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (answered || !value.trim()) return;
    onResult(accepted.includes(normalize(value)));
  }

  return (
    <>
      <Prompt prompt={q.prompt} promptJp={q.promptJp} />
      <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
        <input
          autoFocus
          value={value}
          disabled={answered}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type your answer…"
          className="flex-1 rounded-xl border border-line bg-surface px-4 py-3 font-jp text-ink outline-none transition-colors focus:border-shu/60 disabled:opacity-60"
        />
        {!answered && (
          <Button type="submit" size="md">
            Check
          </Button>
        )}
      </form>
      {answered && (
        <p className="mt-3 text-sm text-ink-soft">
          Accepted answer:{" "}
          <span className="font-jp font-medium text-ink">{q.answers[0]}</span>
        </p>
      )}
    </>
  );
}

function MatchPairs({
  q,
  answered,
  onResult,
}: {
  q: Extract<QuizQuestion, { kind: "match" }>;
  answered: boolean;
  onResult: (correct: boolean) => void;
}) {
  const [rights, setRights] = useState<string[]>(() =>
    q.pairs.map((p) => p.right),
  );
  const [picks, setPicks] = useState<Record<number, string>>({});
  useEffect(() => {
    setRights(shuffle(q.pairs.map((p) => p.right)));
  }, [q]);

  function submit() {
    if (answered) return;
    const allCorrect = q.pairs.every((p, i) => picks[i] === p.right);
    onResult(allCorrect);
  }

  return (
    <>
      <Prompt prompt={q.prompt} />
      <div className="flex flex-col gap-2.5">
        {q.pairs.map((p, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-28 font-jp text-ink">{p.left}</span>
            <select
              disabled={answered}
              value={picks[i] ?? ""}
              onChange={(e) =>
                setPicks((prev) => ({ ...prev, [i]: e.target.value }))
              }
              className={cn(
                "flex-1 rounded-xl border bg-surface px-3 py-2.5 text-ink outline-none focus:border-shu/60",
                answered && picks[i] === p.right
                  ? "border-matcha/50 bg-matcha/10"
                  : answered
                    ? "border-shu/50 bg-shu/10"
                    : "border-line",
              )}
            >
              <option value="" disabled>
                Choose…
              </option>
              {rights.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      {!answered && (
        <div className="mt-4 flex justify-end">
          <Button
            size="sm"
            onClick={submit}
            disabled={Object.keys(picks).length < q.pairs.length}
          >
            Check
          </Button>
        </div>
      )}
    </>
  );
}
