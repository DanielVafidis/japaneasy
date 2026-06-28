# JapanEasy 🇯🇵

**Learn Japanese the natural way** — a calm, structured course that teaches Japanese from a Japanese point of view, with the interactive tools that make learning stick.

JapanEasy is a lesson-based web app: kana first, then grammar built block by block, with spaced-repetition flashcards, audio on every sentence, quizzes, kanji browse, and a streak/XP system. Everything runs in the browser — **no account, no backend**. Progress saves privately in `localStorage`.

---

## Screenshots

| Home & dashboard | Curriculum |
| --- | --- |
| ![Home dashboard](.screenshots/home.png) | ![Lesson reader](.screenshots/lesson.png) |

| Kana trainer | Kanji browser |
| --- | --- |
| ![Kana trainer](.screenshots/kana.png) | ![Kanji grid](.screenshots/kanji.png) |

| Kanji detail | Flashcards (SRS) |
| --- | --- |
| ![Kanji detail](.screenshots/kanji-detail.png) | ![Flashcards review](.screenshots/flashcards.png) |

| Progress | Settings |
| --- | --- |
| ![Progress & stats](.screenshots/progress.png) | ![Settings](.screenshots/settings.png) |

---

## Features

- **35 lessons across 5 stages** — Foundations → Basic Grammar → Essential Grammar → Special Expressions → Advanced Topics
- **Kana Trainer** — hiragana/katakana chart, recognition quiz, and writing canvas
- **Kanji browser** — 100 common characters with readings, examples, and add-to-deck
- **Global search (⌘K)** — jump to any lesson, word, kanji, or page
- **Furigana & romaji toggles** — romaji off by default; generated from kana automatically
- **Audio everywhere** — Web Speech API on sentences, words, and kana
- **Spaced-repetition flashcards** — SM-2-style scheduler; kana, vocab, grammar, and kanji decks
- **Per-lesson quizzes** — multiple choice, fill-in, and matching; 60%+ completes the lesson
- **Progress & gamification** — streaks, XP, levels, daily goal ring, study heatmap, export/import
- **Light & dark themes** — clean, high-contrast UI

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Zustand](https://github.com/pmndrs/zustand) + `localStorage` persistence
- [lucide-react](https://lucide.dev/) · [motion](https://motion.dev/)
- Web Speech API for pronunciation

## Getting started

**Prerequisites:** Node.js 20+ and npm.

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build + type-check
npm run start    # serve production build
npm run lint
```

> Japanese TTS depends on your OS/browser voice. Audio buttons hide themselves if none is available.

## Project structure

```text
app/                     # routes (home, learn, lessons, kana, kanji, flashcards, progress, settings)
content/                 # typed lesson & kanji data
  lessons/               # one file per lesson + index.ts registry
  curriculum.ts          # stage metadata
  kana.ts, kanji.ts, decks.ts, types.ts
lib/                     # store, SRS, furigana/romaji, speech, leveling
components/              # UI by feature area
.screenshots/            # README screenshots
```

## How it works

- **Content is typed TypeScript**, not Markdown — furigana, audio, quizzes, and flashcards are derived from each `Lesson` object ([`content/types.ts`](content/types.ts)).
- **Furigana convention:** `学生[がくせい]だ` → ruby rendering + auto romaji.
- **Progress** lives in `localStorage` (`japaneasy-store-v1`). Reset via the footer link or Settings → data controls.

See **[AUTHORING.md](AUTHORING.md)** for adding or editing lessons.

## Deploy

Works on [Vercel](https://vercel.com/) or any static host that supports Next.js:

```bash
npm run build
```

Connect the repo, set framework to Next.js, deploy. No environment variables required.

## Source & attribution

Grammar content is adapted from ***A Guide to Japanese Grammar*** by Tae Kim (CC BY-NC-SA). JapanEasy is a non-commercial learning project. Prose may be rewritten over time for licensing flexibility.
