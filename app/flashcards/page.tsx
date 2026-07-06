import type { Metadata } from "next";
import { Suspense } from "react";
import { FlashcardsView } from "@/components/flashcards/FlashcardsView";

export const metadata: Metadata = {
  title: "Flashcards",
  description:
    "Spaced-repetition review for kana, vocabulary and grammar — remember what you learn for good.",
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
          Add kana, words and grammar points to your decks. We resurface each
          card at the perfect moment so it sticks with minimal effort.
        </p>
      </header>
      <Suspense fallback={null}>
        <FlashcardsView />
      </Suspense>
    </div>
  );
}
