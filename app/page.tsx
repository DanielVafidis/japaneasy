import {
  BookOpenCheck,
  Brain,
  Headphones,
  Languages,
  Route,
  Search,
  Shapes,
  Sparkles,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { DashboardStatsPanel } from "@/components/home/Dashboard";
import { TodayView } from "@/components/home/TodayView";
import { Reveal } from "@/components/Reveal";

const STUDY_FEATURES = [
  {
    icon: <Route className="h-5 w-5" />,
    title: "Grammar in Japanese order",
    body: (
      <>
        Textbooks often explain <span className="font-jp">です</span> through
        English sentence logic. These lessons follow how the language is actually
        put together.
      </>
    ),
  },
  {
    icon: <Languages className="h-5 w-5" />,
    title: "Hiragana and katakana first",
    body: "Romaji feels easier until it isn't. A trainer with audio gets you reading real script before anything else.",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "Words that actually stick",
    body: (
      <>
        You&apos;ll forget <span className="font-jp">食べる</span> by tomorrow
        without review. Add anything to a spaced-repetition deck — it schedules
        when to look again.
      </>
    ),
  },
  {
    icon: <Headphones className="h-5 w-5" />,
    title: "Audio on every example",
    body: "Reading alone won't help you follow a conversation. Tap any sentence to hear how it's pronounced.",
  },
  {
    icon: <BookOpenCheck className="h-5 w-5" />,
    title: "Furigana when you need it",
    body: "Kanji-heavy text is overwhelming early on. Turn furigana and romaji on or off, and drop them as readings stick.",
  },
];

const TOOL_FEATURES = [
  {
    icon: <Search className="h-5 w-5" />,
    title: "Jump anywhere",
    body: "Looking for that one particle lesson? ⌘K (or Ctrl+K) finds lessons, vocabulary, and kanji without digging through menus.",
  },
  {
    icon: <Shapes className="h-5 w-5" />,
    title: "N5 kanji, grouped",
    body: "Kanji piles up fast. Browse by category, check readings in context, and send words straight to your review deck.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Streaks and daily goals",
    body: "Consistency beats cramming. A simple daily target and streak counter — nothing flashy, just something to come back to.",
  },
];

export default function HomePage() {
  return (
    <div className="relative flex flex-col">
      <section className="page-x mx-auto w-full max-w-6xl pb-6 pt-10 sm:pt-14 lg:pb-8 lg:pt-16">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-x-14">
          <div className="max-w-xl lg:sticky lg:top-24">
            <p
              className="mb-4 inline-flex animate-fade-up items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink-soft"
              style={{ animationDelay: "40ms" }}
            >
              <Sparkles className="h-3.5 w-3.5 text-shu" />
              Free · saves progress in this browser
            </p>
            <h1
              className="animate-fade-up max-w-md text-[1.625rem] font-medium leading-snug text-ink sm:text-[1.875rem]"
              style={{ animationDelay: "100ms" }}
            >
              <span className="font-jp text-shu">日本語</span> from kana to
              sentences.
            </h1>
            <p
              className="mt-4 max-w-lg animate-fade-up text-base leading-7 text-ink-soft sm:text-lg sm:leading-8"
              style={{ animationDelay: "180ms" }}
            >
              Particles that never quite click. Kanji you saw yesterday and
              can&apos;t recall today. Textbook sentences that sound fine in
              English but wrong in Japanese. This course works through those
              problems in order — kana, then grammar, with review built in.
            </p>
            <div
              className="mt-7 flex animate-fade-up flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              style={{ animationDelay: "260ms" }}
            >
              <ButtonLink href="/lessons/introduction" size="lg" className="w-full sm:w-auto">
                Open lesson 1
              </ButtonLink>
              <ButtonLink href="/learn" variant="outline" size="lg" className="w-full sm:w-auto">
                Browse lessons
              </ButtonLink>
            </div>
          </div>

          <div className="min-w-0">
            <TodayView />
          </div>
        </div>

        <div className="mt-8 lg:mt-10">
          <DashboardStatsPanel />
        </div>
      </section>

      <section className="page-x mx-auto w-full max-w-6xl border-t border-line/60 py-14 sm:py-16">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-shu">
            What&apos;s here
          </p>
          <h2 className="text-balance text-2xl text-ink sm:text-3xl">
            For the parts of Japanese that actually trip people up
          </h2>
          <p className="mt-3 max-w-xl text-ink-soft">
            Not a feature list for its own sake — each tool addresses something
            you&apos;ll run into within the first few months of studying.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          <FeatureGroup label="Study" features={STUDY_FEATURES} startIndex={0} />
          <FeatureGroup
            label="Reference & habits"
            features={TOOL_FEATURES}
            startIndex={STUDY_FEATURES.length}
          />
        </div>
      </section>

      <section className="page-x mx-auto max-w-3xl pb-12 pt-2 sm:pb-16">
        <Reveal>
          <figure className="rounded-3xl border border-line bg-surface px-6 py-8 text-center sm:px-10 sm:py-10">
            <blockquote className="font-display text-lg leading-relaxed text-ink sm:text-xl md:text-2xl">
              Patterns stick when you meet them in sentences, not in charts.
              These lessons show real usage first and explain after.
            </blockquote>
            <figcaption className="mt-4 text-sm text-ink-faint">
              — how the lessons are structured
            </figcaption>
          </figure>
        </Reveal>
      </section>
    </div>
  );
}

function FeatureGroup({
  label,
  features,
  startIndex,
}: {
  label: string;
  features: { icon: React.ReactNode; title: string; body: React.ReactNode }[];
  startIndex: number;
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink-faint">
        {label}
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(startIndex + i) * 0.05}>
            <Feature icon={f.icon} title={f.title} body={f.body} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="group h-full rounded-3xl border border-line bg-surface p-6 transition-colors hover:border-shu/30 card-shadow">
      <span className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-shu/10 text-shu transition-transform group-hover:scale-110">
        {icon}
      </span>
      <h3 className="mb-1.5 font-display text-lg text-ink">{title}</h3>
      <p className="text-sm leading-6 text-ink-soft">{body}</p>
    </div>
  );
}
