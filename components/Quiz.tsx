"use client";

import { useEffect, useRef, useState } from "react";
import { Check, X, RotateCcw, Trophy } from "lucide-react";
import type { QuizQuestion } from "@/content/types";
import { JapaneseText } from "@/components/JapaneseText";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import {
  checkQuizFillAnswer,
  checkQuizOrderAnswer,
  fillUsesJapaneseInput,
  orderAnswerText,
  prepareQuizFillInput,
  quizFillPlaceholder,
} from "@/lib/quiz-review";

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
  onComplete?: (correct: number, total: number, missed: QuizQuestion[]) => void;
}) {
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(false);
  const [finished, setFinished] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const missedRef = useRef<QuizQuestion[]>([]);

  const q = questions[index];

  function handleResult(correct: boolean) {
    if (answered) return;
    setAnswered(true);
    setWasCorrect(correct);
    if (correct) setCorrectCount((c) => c + 1);
    else missedRef.current.push(q);
  }

  function next() {
    if (index + 1 >= questions.length) {
      setFinished(true);
      onComplete?.(correctCount, questions.length, missedRef.current);
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
    missedRef.current = [];
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
    <div className="overflow-hidden rounded-3xl border border-line bg-surface sm:overflow-visible">
      <div className="px-4 pt-4 sm:p-6 md:px-8 md:pt-8">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest text-ink-faint">
            Question {index + 1} of {questions.length}
          </span>
          <div className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1 sm:mx-0 sm:overflow-visible sm:pb-0">
            {questions.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-1.5 w-4 shrink-0 rounded-full transition-colors sm:w-5",
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
          {q.kind === "order" && (
            <OrderSentence q={q} answered={answered} onResult={handleResult} />
          )}
        </div>
      </div>

      {answered && (
        <div className="border-t border-line px-4 py-4 animate-fade-up sm:px-6 md:px-8">
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
          <div className="mt-4 flex justify-stretch sm:justify-end">
            <Button size="sm" onClick={next} className="w-full sm:w-auto">
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
          <JapaneseText text={promptJp} className="text-3xl sm:text-4xl" align="center" />
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
      {/* Mobile: full-bleed stacked choices that share borders */}
      <div className="touch-list -mx-4 sm:hidden">
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
                "flex w-full items-center justify-between gap-2 px-4 py-3.5 text-left text-sm transition-colors active:bg-surface-2",
                !answered && "bg-surface",
                answered && isCorrect && "bg-matcha/10",
                answered && isSelected && !isCorrect && "bg-shu/10",
                answered && !isCorrect && !isSelected && "opacity-50",
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
      {/* Desktop: spaced grid */}
      <div className="hidden gap-2.5 sm:grid sm:grid-cols-2">
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
                "flex min-h-11 items-center justify-between gap-2 rounded-xl border px-4 py-3 text-left text-base transition-all",
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
  const composingRef = useRef(false);
  const japaneseInput = fillUsesJapaneseInput(q);
  const display = prepareQuizFillInput(q, value);

  function appendRaw(extra: string) {
    setValue((prev) => prev + extra);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (answered || !value.trim()) return;
    onResult(checkQuizFillAnswer(q, value));
  }

  return (
    <>
      <Prompt prompt={q.prompt} promptJp={q.promptJp} />
      <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
        <input
          autoFocus
          value={display}
          disabled={answered}
          onKeyDown={(e) => {
            if (answered || composingRef.current) return;

            if (e.key === "Backspace" || e.key === "Delete") {
              e.preventDefault();
              setValue((prev) => prev.slice(0, -1));
              return;
            }

            if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
              if (japaneseInput && /[a-zA-Z]/.test(e.key)) {
                e.preventDefault();
                appendRaw(e.key);
              }
            }
          }}
          onCompositionStart={() => {
            composingRef.current = true;
          }}
          onCompositionEnd={(e) => {
            composingRef.current = false;
            if (e.data) appendRaw(e.data);
          }}
          onPaste={(e) => {
            if (answered) return;
            e.preventDefault();
            const text = e.clipboardData.getData("text");
            if (text) appendRaw(text);
          }}
          onChange={(e) => {
            if (answered || composingRef.current) return;
            if (!japaneseInput) setValue(e.target.value);
          }}
          placeholder={quizFillPlaceholder(q)}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          lang={japaneseInput ? "ja" : undefined}
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

function OrderSentence({
  q,
  answered,
  onResult,
}: {
  q: Extract<QuizQuestion, { kind: "order" }>;
  answered: boolean;
  onResult: (correct: boolean) => void;
}) {
  // Stable ids so duplicate tile texts stay distinguishable; shuffle after mount.
  const [bank, setBank] = useState<{ id: number; text: string }[]>(() =>
    [...q.tiles, ...(q.distractors ?? [])].map((text, id) => ({ id, text })),
  );
  const [picked, setPicked] = useState<number[]>([]);
  useEffect(() => {
    // Same post-mount shuffle idiom as MultipleChoice: SSR and first client render must match.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBank(
      shuffle(
        [...q.tiles, ...(q.distractors ?? [])].map((text, id) => ({
          id,
          text,
        })),
      ),
    );
    setPicked([]);
  }, [q]);

  const pickedTiles = picked.map((id) => bank.find((b) => b.id === id)!);
  const wasCorrect =
    answered && checkQuizOrderAnswer(q, pickedTiles.map((t) => t.text));

  function add(id: number) {
    if (answered || picked.includes(id)) return;
    setPicked((p) => [...p, id]);
  }

  function remove(id: number) {
    if (answered) return;
    setPicked((p) => p.filter((x) => x !== id));
  }

  function submit() {
    if (answered || picked.length !== q.tiles.length) return;
    onResult(checkQuizOrderAnswer(q, pickedTiles.map((t) => t.text)));
  }

  return (
    <>
      <Prompt prompt={q.prompt} />
      <div
        className={cn(
          "flex min-h-[3.75rem] flex-wrap items-center gap-2 rounded-xl border border-dashed p-2.5",
          answered && wasCorrect && "border-matcha/50 bg-matcha/5",
          answered && !wasCorrect && "border-shu/50 bg-shu/5",
          !answered && "border-line-strong bg-surface-2/40",
        )}
      >
        {pickedTiles.length === 0 && (
          <span className="px-2 text-sm text-ink-faint">
            Tap the tiles below in order…
          </span>
        )}
        {pickedTiles.map((t) => (
          <button
            key={t.id}
            type="button"
            disabled={answered}
            onClick={() => remove(t.id)}
            className="rounded-lg border border-shu/30 bg-surface px-3 py-2 transition-all active:scale-95"
          >
            <JapaneseText text={t.text} className="text-lg" />
          </button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {bank.map((t) => {
          const used = picked.includes(t.id);
          return (
            <button
              key={t.id}
              type="button"
              disabled={answered || used}
              onClick={() => add(t.id)}
              className={cn(
                "rounded-lg border px-3 py-2 transition-all",
                used
                  ? "border-line/50 bg-surface-2/50 opacity-35"
                  : "border-line bg-surface hover:border-shu/50 active:scale-95",
              )}
            >
              <JapaneseText text={t.text} className="text-lg" />
            </button>
          );
        })}
      </div>
      {!answered && (
        <div className="mt-4 flex justify-stretch sm:justify-end">
          <Button
            size="sm"
            onClick={submit}
            disabled={picked.length !== q.tiles.length}
            className="w-full sm:w-auto"
          >
            Check
          </Button>
        </div>
      )}
      {answered && !wasCorrect && (
        <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-ink-soft">
          Correct sentence:{" "}
          <JapaneseText
            text={orderAnswerText(q)}
            className="text-lg text-ink"
          />
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
          <div key={i} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <span className="font-jp text-ink sm:w-28">{p.left}</span>
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
