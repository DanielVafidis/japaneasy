import type { Metadata } from "next";
import { Suspense } from "react";
import { FlashcardsView } from "@/components/flashcards/FlashcardsView";

export const metadata: Metadata = {
  title: "Review",
  description:
    "Spaced-repetition review of everything you learn on the path — kana, vocabulary, grammar and kanji.",
};

export default function FlashcardsPage() {
  return (
    <div className="page-x mx-auto w-full max-w-4xl py-10 sm:py-16">
      <header className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-shu">
          Review · 復習
        </p>
        <h1 className="text-balance text-3xl text-ink sm:text-4xl md:text-5xl">
          Flashcards that schedule themselves
        </h1>
        <p className="mt-4 text-lg leading-8 text-ink-soft">
          Everything you pick up on the learning path — kana, words, grammar,
          kanji — collects here, and we resurface each card at the perfect
          moment so it sticks.
        </p>
      </header>
      <Suspense fallback={null}>
        <FlashcardsView />
      </Suspense>
    </div>
  );
}
