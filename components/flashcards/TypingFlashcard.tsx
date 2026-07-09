"use client";

import { useEffect, useRef } from "react";
import { Check, X } from "lucide-react";
import type { Card } from "@/content/decks";
import {
  flashcardAnswerDisplay,
  flashcardInputPlaceholder,
  flashcardPrompt,
  prepareFlashcardInput,
  usesJapaneseInput,
} from "@/lib/flashcard-review";
import { stripFurigana, toReading } from "@/lib/japanese";
import { JapaneseText } from "@/components/JapaneseText";
import { AudioButton } from "@/components/AudioButton";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function TypingFlashcard({
  card,
  value,
  onChange,
  onSubmit,
  onContinue,
  submitted,
  correct,
}: {
  card: Card;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onContinue: () => void;
  submitted: boolean;
  correct: boolean | null;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const composingRef = useRef(false);
  const prompt = flashcardPrompt(card);
  const answer = flashcardAnswerDisplay(card);
  const japaneseInput = usesJapaneseInput(card);
  const display = japaneseInput ? prepareFlashcardInput(card, value) : value;
  const plainFront = stripFurigana(card.front);
  const showVocabReading =
    card.deck === "vocab" &&
    card.reading &&
    plainFront === toReading(card.front);

  useEffect(() => {
    inputRef.current?.focus();
  }, [card.id, submitted]);

  function appendRaw(extra: string) {
    onChange(value + extra);
  }

  return (
    <div
      className={cn(
        "rounded-3xl border bg-surface p-6 card-shadow sm:p-8",
        submitted && correct === true && "border-matcha/40",
        submitted && correct === false && "border-shu/40",
        !submitted && "border-line",
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-ink-faint">
        {prompt.label}
      </p>
      <div className="mt-3 min-h-[4.5rem]">
        {prompt.jp ? (
          <JapaneseText
            text={prompt.text}
            showFurigana={false}
            className="text-2xl sm:text-3xl"
          />
        ) : (
          <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">
            {prompt.text}
          </p>
        )}
      </div>

      <form
        className="mt-6"
        onSubmit={(e) => {
          e.preventDefault();
          if (submitted) onContinue();
          else onSubmit();
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={display}
          disabled={submitted}
          onKeyDown={(e) => {
            if (submitted || composingRef.current) return;

            if (e.key === "Backspace" || e.key === "Delete") {
              e.preventDefault();
              onChange(value.slice(0, -1));
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
            if (submitted) return;
            e.preventDefault();
            const text = e.clipboardData.getData("text");
            if (text) appendRaw(text);
          }}
          onChange={(e) => {
            if (submitted || composingRef.current) return;
            if (!japaneseInput) onChange(e.target.value);
          }}
          placeholder={flashcardInputPlaceholder(card)}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          lang="ja"
          className={cn(
            "w-full rounded-2xl border bg-surface-2/40 px-4 py-3.5 font-jp text-xl text-ink outline-none transition-colors placeholder:font-sans placeholder:text-base placeholder:text-ink-faint focus:border-shu/50 disabled:opacity-70",
            submitted && correct === true && "border-matcha/40",
            submitted && correct === false && "border-shu/40",
            !submitted && "border-line",
          )}
        />
      </form>

      {submitted && correct !== null && (
        <div
          className={cn(
            "mt-4 rounded-2xl px-4 py-3 text-sm",
            correct ? "bg-matcha/10 text-matcha" : "bg-shu/10 text-shu",
          )}
        >
          <div className="flex items-start gap-3">
            {correct ? (
              <Check className="mt-0.5 h-4 w-4 shrink-0" />
            ) : (
              <X className="mt-0.5 h-4 w-4 shrink-0" />
            )}
            <div className="min-w-0 flex-1">
              <p className="font-semibold">{correct ? "Correct" : "Not quite"}</p>
              {!correct && (
                <p className="mt-1 flex flex-wrap items-center gap-2 text-ink">
                  <span className="text-ink-soft">Answer:</span>
                  {card.deck === "grammar" && card.answers?.length ? (
                    <JapaneseText
                      text={card.answers[0]}
                      showFurigana={false}
                      className="text-lg"
                    />
                  ) : card.deck === "kanji" ? (
                    <>
                      <span className="font-jp text-lg">{card.front}</span>
                      <span className="text-ink-soft">({answer})</span>
                    </>
                  ) : card.frontJp ? (
                    <>
                      <JapaneseText
                        text={card.front}
                        showFurigana={false}
                        className="text-lg"
                      />
                      {showVocabReading && (
                        <span className="font-jp text-ink-soft">
                          ({card.reading})
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="font-display text-lg">{answer}</span>
                  )}
                  {card.speak && <AudioButton text={card.speak} size="sm" />}
                </p>
              )}
            </div>
          </div>
          <Button
            type="button"
            onClick={onContinue}
            autoFocus
            size="sm"
            className="mt-3 w-full"
            variant={correct ? "primary" : "outline"}
          >
            Continue
          </Button>
        </div>
      )}
    </div>
  );
}
