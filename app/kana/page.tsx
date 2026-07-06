import type { Metadata } from "next";
import { KanaTrainer } from "@/components/kana/KanaTrainer";

export const metadata: Metadata = {
  title: "Kana Trainer",
  description:
    "Learn and drill hiragana and katakana — interactive chart with audio, a recognition quiz, and a writing canvas.",
};

export default function KanaPage() {
  return (
    <div className="page-x mx-auto w-full max-w-4xl py-10 sm:py-16">
      <header className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-shu">
          Kana Trainer · 仮名
        </p>
        <h1 className="text-balance text-3xl text-ink sm:text-4xl md:text-5xl">
          Master the two alphabets
        </h1>
        <p className="mt-4 text-lg leading-8 text-ink-soft">
          Hiragana and katakana are the gateway to everything else. Study the
          chart with audio, test yourself, and practise writing by hand.
        </p>
      </header>
      <KanaTrainer />
    </div>
  );
}
