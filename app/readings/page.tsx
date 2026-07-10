import type { Metadata } from "next";
import { BookOpenText } from "lucide-react";
import { ReadingsView } from "@/components/reading/ReadingsView";

export const metadata: Metadata = {
  title: "Graded readings",
  description:
    "Short Japanese passages written with only the grammar and vocabulary taught so far, each with a comprehension quiz.",
};

export default function ReadingsPage() {
  return (
    <div className="page-x mx-auto w-full max-w-4xl py-8 sm:py-14">
      <header className="mb-10">
        <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-shu">
          <BookOpenText className="h-4 w-4" />
          <span className="font-jp normal-case tracking-normal">読み物</span>
          <span> · Reading</span>
        </p>
        <h1 className="text-3xl text-ink sm:text-4xl">Graded readings</h1>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Short passages that only use what the course has taught so far —
          real reading volume without dictionary detours. Tap any line to hear
          it, check yourself against the English, then take the quiz.
        </p>
      </header>
      <ReadingsView />
    </div>
  );
}
