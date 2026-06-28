import type { Metadata } from "next";
import { ProgressView } from "@/components/progress/ProgressView";

export const metadata: Metadata = {
  title: "Progress",
  description:
    "Track your study streak, XP and level, curriculum completion, and flashcard review stats.",
};

export default function ProgressPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:py-16">
      <header className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-shu">
          Progress · 記録
        </p>
        <h1 className="text-balance text-4xl text-ink sm:text-5xl">
          Your journey so far
        </h1>
        <p className="mt-4 text-lg leading-8 text-ink-soft">
          Consistency beats intensity. Keep the streak alive, watch your XP grow,
          and stay on top of reviews.
        </p>
      </header>
      <ProgressView />
    </div>
  );
}
