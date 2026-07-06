"use client";

import type { Card } from "@/content/decks";
import { JapaneseText } from "@/components/JapaneseText";
import { AudioButton } from "@/components/AudioButton";
import { cn } from "@/lib/cn";

export function Flashcard({
  card,
  flipped,
  onFlip,
}: {
  card: Card;
  flipped: boolean;
  onFlip: () => void;
}) {
  return (
    <div className="[perspective:1400px]">
      <button
        type="button"
        onClick={onFlip}
        aria-label={flipped ? "Hide answer" : "Show answer"}
        className="relative block h-56 w-full text-left sm:h-64 md:h-72"
      >
        <div
          className={cn(
            "relative h-full w-full rounded-3xl transition-transform duration-500 [transform-style:preserve-3d]",
            flipped && "[transform:rotateY(180deg)]",
          )}
        >
          {/* front */}
          <div className="absolute inset-0 grid place-items-center rounded-3xl border border-line bg-surface card-shadow [backface-visibility:hidden]">
            <div className="flex flex-col items-center gap-3">
              {card.frontJp ? (
                <JapaneseText
                  text={card.front}
                  showFurigana={false}
                  className="text-4xl sm:text-5xl md:text-6xl"
                  align="center"
                />
              ) : (
                <span className="px-4 text-center font-display text-2xl text-ink sm:px-6 sm:text-3xl">
                  {card.front}
                </span>
              )}
              <span className="text-xs uppercase tracking-widest text-ink-faint">
                tap to reveal
              </span>
            </div>
          </div>

          {/* back */}
          <div className="absolute inset-0 grid place-items-center rounded-3xl border border-shu/30 bg-surface-2 card-shadow [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="flex flex-col items-center gap-2 px-6 text-center">
              {card.frontJp && (
                <div className="flex items-center gap-2">
                  <JapaneseText
                    text={card.front}
                    showFurigana={false}
                    className="text-3xl"
                  />
                  {card.speak && <AudioButton text={card.speak} size="sm" />}
                </div>
              )}
              {card.reading && (
                <span className="font-jp text-lg text-ink-soft">
                  {card.reading}
                </span>
              )}
              <span className="font-display text-2xl text-ink">{card.back}</span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
