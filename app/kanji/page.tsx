import type { Metadata } from "next";
import { Suspense } from "react";
import { KanjiView } from "@/components/kanji/KanjiView";

export const metadata: Metadata = {
  title: "Kanji",
  description:
    "Browse common kanji with meanings, on'yomi and kun'yomi readings, stroke counts and example words — and add them to your flashcards.",
};

export default function KanjiPage() {
  return (
    <div className="page-x mx-auto w-full max-w-5xl py-10 sm:py-16">
      <header className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-shu">
          Kanji · 漢字
        </p>
        <h1 className="text-balance text-3xl text-ink sm:text-4xl md:text-5xl">
          Build your character
        </h1>
        <p className="mt-4 text-lg leading-8 text-ink-soft">
          Learn the most common kanji a little at a time. Tap any character for
          its readings and an example word, then add it to your review deck.
        </p>
      </header>
      <Suspense fallback={<p className="text-ink-faint">Loading kanji…</p>}>
        <KanjiView />
      </Suspense>
    </div>
  );
}
