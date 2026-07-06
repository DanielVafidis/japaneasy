import type { Metadata } from "next";
import { CurriculumView } from "@/components/curriculum/CurriculumView";

export const metadata: Metadata = {
  title: "Curriculum",
  description:
    "A structured path from the writing system through grammar — lessons in the order that makes sense in Japanese.",
};

export default function LearnPage() {
  return (
    <div className="page-x mx-auto w-full max-w-4xl py-10 sm:py-16">
      <header className="mb-10 max-w-2xl animate-fade-up">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-shu">
          Curriculum · 道のり
        </p>
        <h1 className="text-balance text-3xl text-ink sm:text-4xl md:text-5xl">
          Your path to reading Japanese
        </h1>
        <p className="mt-4 text-lg leading-8 text-ink-soft">
          Work top to bottom. Each lesson builds on the last, exactly the way the
          language itself is layered. Finish a lesson (or score 60%+ on its quiz)
          to mark it complete.
        </p>
      </header>
      <CurriculumView />
    </div>
  );
}
