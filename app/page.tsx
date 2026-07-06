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
import { Dashboard } from "@/components/home/Dashboard";
import { Reveal } from "@/components/Reveal";

const FEATURES = [
  {
    icon: <Route className="h-5 w-5" />,
    title: "A Japanese-first path",
    body: "Lessons follow the order that makes sense in Japanese — not forced translations of English phrases.",
  },
  {
    icon: <Languages className="h-5 w-5" />,
    title: "Kana before everything",
    body: "Master hiragana and katakana with an interactive trainer and audio. We never lean on romaji.",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "Remember it for good",
    body: "Add any word, kana, or grammar point to a spaced-repetition deck that schedules reviews for you.",
  },
  {
    icon: <Headphones className="h-5 w-5" />,
    title: "Hear every sentence",
    body: "A tap plays natural Japanese pronunciation on any example, so you train your ear from day one.",
  },
  {
    icon: <BookOpenCheck className="h-5 w-5" />,
    title: "Read at your level",
    body: "Toggle furigana and romaji on or off per your comfort, and wean off the training wheels over time.",
  },
  {
    icon: <Search className="h-5 w-5" />,
    title: "Find anything instantly",
    body: "Press ⌘K (or Ctrl+K) to jump to any lesson, vocabulary word, kanji, or page without leaving your keyboard.",
  },
  {
    icon: <Shapes className="h-5 w-5" />,
    title: "Kanji at a glance",
    body: "Browse N5 kanji by category, inspect readings and examples, and add characters straight to your review deck.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Stay motivated",
    body: "Daily streaks, XP and levels turn consistent practice into a habit that's genuinely satisfying.",
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section>
        <div className="page-x mx-auto max-w-6xl pb-10 pt-12 sm:pt-24">
          <div className="max-w-2xl">
            <p
              className="mb-4 inline-flex animate-fade-up items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink-soft"
              style={{ animationDelay: "40ms" }}
            >
              <Sparkles className="h-3.5 w-3.5 text-shu" /> 日本語 · learn the
              natural way
            </p>
            <h1
              className="animate-fade-up text-balance text-3xl font-bold leading-[1.08] text-ink sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ animationDelay: "100ms" }}
            >
              Read Japanese, the way it{" "}
              <span className="brush-underline text-shu">actually works</span>.
            </h1>
            <p
              className="mt-6 max-w-xl animate-fade-up text-lg leading-8 text-ink-soft"
              style={{ animationDelay: "180ms" }}
            >
              A calm, structured course that teaches Japanese from a Japanese
              point of view — kana first, then grammar built block by block, with
              spaced-repetition flashcards, audio, and quizzes to make it stick.
            </p>
            <div
              className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              style={{ animationDelay: "260ms" }}
            >
              <ButtonLink href="/lessons/introduction" size="lg" className="w-full sm:w-auto">
                Start learning — it's free
              </ButtonLink>
              <ButtonLink href="/learn" variant="outline" size="lg" className="w-full sm:w-auto">
                See the curriculum
              </ButtonLink>
            </div>
            <p
              className="mt-4 animate-fade-up text-sm text-ink-faint"
              style={{ animationDelay: "320ms" }}
            >
              No account needed · your progress saves privately in this browser.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="page-x mx-auto max-w-6xl py-8">
        <h2 className="mb-4 flex items-center gap-3 font-display text-2xl text-ink">
          <span className="h-6 w-1 rounded-full bg-shu" /> Your dashboard
        </h2>
        <Dashboard />
      </section>

      {/* Features */}
      <section className="page-x mx-auto max-w-6xl py-12">
        <div className="mb-8 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-shu">
            Why it works
          </p>
          <h2 className="text-balance text-3xl text-ink sm:text-4xl">
            Built around how people actually learn Japanese
          </h2>
          <p className="mt-3 text-ink-soft">
            Every feature reflects hard-won community wisdom: foundations first,
            review often, and immerse with comprehensible input.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <Feature icon={f.icon} title={f.title} body={f.body} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="page-x mx-auto max-w-4xl pb-8">
        <Reveal>
        <figure className="rounded-3xl border border-line bg-surface p-6 text-center sm:p-8 md:p-12">
          <blockquote className="font-display text-xl leading-relaxed text-ink sm:text-2xl md:text-3xl">
            Language is not a math problem. Practice from real Japanese, learn by
            example, and the patterns become second nature.
          </blockquote>
          <figcaption className="mt-4 text-sm text-ink-faint">
            — the guiding idea behind every lesson
          </figcaption>
        </figure>
        </Reveal>
      </section>
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
  body: string;
}) {
  return (
    <div className="group rounded-3xl border border-line bg-surface p-6 transition-colors hover:border-shu/30 card-shadow">
      <span className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-shu/10 text-shu transition-transform group-hover:scale-110">
        {icon}
      </span>
      <h3 className="mb-1.5 font-display text-lg text-ink">{title}</h3>
      <p className="text-sm leading-6 text-ink-soft">{body}</p>
    </div>
  );
}
