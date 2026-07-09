"use client";

import { ArrowRight, X } from "lucide-react";
import { useStore } from "@/lib/store";
import { ButtonLink } from "@/components/ui/Button";

const STEPS = [
  {
    numeral: "一",
    title: "Read a lesson",
    body: "Short, plain-language grammar with real Japanese from the first line. Tap any sentence to hear it.",
  },
  {
    numeral: "二",
    title: "Pass the short quiz",
    body: "A few questions at the end check what stuck and mark the lesson complete.",
  },
  {
    numeral: "三",
    title: "Review to remember",
    body: "New words become flashcards, scheduled to come back right before you'd forget them. A few minutes a day is enough.",
  },
];

/** First-run explainer shown on the Today view until dismissed or the course is started. */
export function FirstRunOnboarding() {
  const dismissOnboarding = useStore((s) => s.dismissOnboarding);

  return (
    <section
      aria-label="How the course works"
      className="relative animate-fade-up rounded-3xl border-2 border-shu/25 bg-surface p-5 card-shadow sm:p-6"
    >
      <button
        type="button"
        onClick={dismissOnboarding}
        aria-label="Dismiss introduction"
        className="absolute right-2.5 top-2.5 grid h-10 w-10 place-items-center rounded-full text-ink-faint transition-colors hover:bg-surface-2 hover:text-ink"
      >
        <X className="h-4 w-4" />
      </button>

      <p className="text-xs font-semibold uppercase tracking-wide text-shu">
        <span className="font-jp normal-case tracking-normal">はじめに</span>
        <span className="font-sans"> · Welcome</span>
      </p>
      <h3 className="mt-1 pr-10 font-display text-xl text-ink sm:text-2xl">
        How the course works
      </h3>

      <ol className="mt-5 flex flex-col gap-4">
        {STEPS.map((step) => (
          <li key={step.numeral} className="flex items-start gap-3.5">
            <span
              aria-hidden
              className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-shu/10 font-jp text-base leading-none text-shu"
            >
              {step.numeral}
            </span>
            <div className="min-w-0">
              <p className="font-medium text-ink">{step.title}</p>
              <p className="mt-0.5 text-sm leading-6 text-ink-soft">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <ButtonLink href="/lessons/introduction" size="lg" className="mt-6 w-full">
        Start lesson 1
        <ArrowRight className="h-4 w-4" />
      </ButtonLink>
      <p className="mt-3 text-center text-xs text-ink-faint">
        Free · progress saves in this browser — no account needed
      </p>
    </section>
  );
}
