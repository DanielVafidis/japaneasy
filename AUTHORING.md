# Authoring lessons

This guide shows how to add a new lesson to JapanEasy. Lessons are plain TypeScript objects, so you get autocomplete and type-checking while you write.

## 1. Create the lesson file

Add a file under [`content/lessons/`](content/lessons/), e.g. `content/lessons/polite-form.ts`:

```ts
import type { Lesson } from "../types";

export const politeForm: Lesson = {
  id: "polite-form",          // unique, URL-safe → /lessons/polite-form
  stage: "essential-grammar", // which stage it belongs to
  order: 0,                   // position within the stage
  title: "Polite Form",
  subtitle: "〜です and 〜ます",
  summary: "Speak politely with the ます-form and です.",
  estMinutes: 15,
  vocabulary: [
    { word: "食[た]べる", reading: "たべる", meaning: "to eat" },
  ],
  blocks: [
    { type: "prose", text: "Polite speech uses ..." },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Polite form of 食べる?",
      choices: ["食べます", "食べる", "食べた", "食べない"],
      answer: 0,
    },
  ],
};
```

## 2. Register it

Add it to [`content/lessons/index.ts`](content/lessons/index.ts):

```ts
import { politeForm } from "./polite-form";

export const allLessons: Lesson[] = [
  // ...existing
  politeForm,
];
```

That's it. The lesson now appears in the curriculum (grouped by `stage`, sorted by `order`), gets its own page, and its vocabulary automatically becomes flashcards. Its `drills` (see §6) become cards in the **Grammar** deck — lessons without drills fall back to a single title→summary card until they get a drill pass.

## 3. Writing Japanese text

Two conventions are available in any Japanese string:

- **Furigana:** annotate a kanji run with its reading in square brackets — `学生[がくせい]だ`. The reader renders `<ruby>`, and derives the kana reading + romaji automatically.
- **Inline markup (in `prose`, `rule`, `note`, `tip` text):**
  - `{{...}}` renders in the Japanese font (use it for inline Japanese terms, e.g. `attach {{だ}} to the noun`).
  - `**...**` renders **bold**.

You never write romaji by hand — it's generated from the kana for the romaji toggle and from `reading`/furigana for audio.

## 4. Content block types

`blocks` is an array of `ContentBlock`. Available types:

```ts
{ type: "heading", text: "Section title" }

{ type: "prose", text: "A paragraph with {{日本語}} and **bold**." }

{ type: "rule", title: "Optional", items: ["bullet one", "bullet {{two}}"] }

{ type: "examples", title: "Optional", items: [
  { jp: "学生[がくせい]だ。", en: "Is a student.", note: "optional note" },
]}

{ type: "dialogue", title: "Optional", lines: [
  { speaker: "A", jp: "元気[げんき]？", en: "Well?" },
  { speaker: "B", jp: "元気[げんき]。", en: "Well." },
]}

{ type: "table", caption: "Optional", headers: ["A", "B"], rows: [["あ", "a"]] }

{ type: "note", text: "A blue informational callout." }

{ type: "tip", text: "A gold tip callout." }

{ type: "kana", script: "hira", caption: "Optional" }  // renders the full kana grid
```

`examples` and `dialogue` automatically get an audio button per line.

## 5. Quiz question types

`quiz` is an optional array. Scoring is one point per question; 60%+ marks the lesson complete and awards XP.

```ts
// Multiple choice (choices are shuffled at runtime)
{ kind: "mc", prompt: "…", promptJp: "き", choices: ["ki","ka"], answer: 0, explanation: "…" }

// Fill in (case/space-insensitive; any listed answer accepted)
{ kind: "fill", prompt: "Type the romaji", promptJp: "ふ", answers: ["fu","hu"], explanation: "…" }

// Matching
{ kind: "match", prompt: "Match the pairs", pairs: [{ left: "犬", right: "dog" }] }

// Sentence building (tap tiles into the right order; tiles may carry furigana)
{
  kind: "order",
  prompt: "Build: 'I am a student'",
  tiles: ["私[わたし]は", "学生[がくせい]", "だ"], // correct order
  distractors: ["じゃない"],                        // optional wrong tiles
  explanation: "Topic first, noun, then declarative だ.",
}

// Listening (TTS speaks `audio`; the learner types what they heard —
// kanji, kana, or romaji all accepted; `audio` is revealed after answering)
{
  kind: "listen",
  prompt: "Listen — type the word you hear:",
  audio: "きって",                 // may carry furigana; never shown up front
  answers: ["きって", "切手"],     // optional; defaults to the audio text
  explanation: "きって — the small っ doubles the t.",
}
```

Fill-in questions with Japanese answers accept romaji — the input converts to kana live.

Lessons with 3+ vocabulary entries automatically get a **"Practice these words"** typed
drill under the vocabulary list (non-scoring; reuses the flashcard answer checker).

## 6. Grammar drills (SRS pattern cards)

`drills` is an optional array of typed pattern drills. Each drill becomes a card in the
**Grammar** flashcard deck (id `grammar:<lessonId>:<drillId>`), auto-enrolled when the
lesson is completed and boosted when its quiz is missed.

```ts
drills: [
  // The learner sees the prompt (small label) + jp (large), and types an answer.
  { id: "negative", prompt: "Make it negative", jp: "元気[げんき]だ", answers: ["元気[げんき]じゃない"] },
  // Use ◯ in jp for fill-the-particle gaps.
  { id: "topic-wa", prompt: "Fill the particle — 'as for today…'", jp: "今日[きょう]◯雨[あめ]だ", answers: ["は"] },
]
```

- Keep `id` stable once shipped — it's part of the saved SRS card id.
- Carry furigana in `answers`: the checker then accepts the kanji form, the kana reading,
  and romaji (converted live). List several `answers` when more than one is right (e.g. `["へ", "に"]`);
  the first is displayed as *the* answer and used for audio.
- Drills must be original sentences — same policy as examples (see C.3 in ROADMAP.md).

## 7. Graded readings

Readings live in [`content/readings/`](content/readings/) (registered in its `index.ts`)
and appear at `/readings`. A `Reading` is a short passage written **only with grammar and
vocabulary taught up to its `stage`**, plus a comprehension quiz:

```ts
export const myStory: Reading = {
  id: "my-story",            // → /readings/my-story
  stage: "basic-grammar",
  order: 0,
  title: "My Story",
  jpTitle: "私[わたし]の話[はなし]",
  summary: "One-line teaser shown in the library.",
  estMinutes: 3,
  body: [{ jp: "…", en: "…" }],          // one entry per line/paragraph
  vocabulary: [ /* new words — become flashcards like lesson vocab */ ],
  quiz: [ /* comprehension questions; ≥60% marks it read */ ],
};
```

Keep the passage original and the sentences short; the reader shows each line with
audio and a tap-to-reveal English translation.

## 8. Stages

Stage IDs live in [`content/types.ts`](content/types.ts) and metadata in [`content/curriculum.ts`](content/curriculum.ts):

| Stage ID | Title | Source PDF (in `docs/`) |
| --- | --- | --- |
| `foundations` | Writing System | pages 1–24 |
| `basic-grammar` | Basic Grammar | pages 25–94 |
| `essential-grammar` | Essential Grammar | pages 95–253 |
| `special-expressions` | Special Expressions | pages 254–363 |
| `advanced-topics` | Advanced Topics | pages 364–436 |

A stage shows as "coming soon" (with its `teaser` topic list) until it has at least one registered lesson. To flesh out Stages 2–4, work through the matching PDF and add lesson files exactly like the examples above — no UI or component changes needed.

## 9. Conventions & tips

- Keep `id` stable once shipped — it's the lesson's URL and the key for saved progress.
- Reuse vocabulary words verbatim across lessons; the flashcard deck de-duplicates by word.
- Prefer many short `examples` over long prose — the source guide's philosophy is "learn by example".
- Run `npm run build` to type-check your content before committing.

## 10. Audio manifest (natural-audio groundwork)

[`content/audio-manifest.json`](content/audio-manifest.json) lists every line
the app speaks — kana, kanji, vocabulary, example sentences, dialogues,
grammar-drill answers, dictation audio, readings, and key phrases. Regenerate
it after any content change:

```sh
npm run audio:manifest
```

Each entry has a stable `id` (a hash of the spoken text — reordering content
never changes it, editing a sentence does), the exact `speak` string the
speech engine receives, the `display` form and `en` translation where they
exist, and every `source` location that speaks the line. Texts that sound
identical (e.g. あ and ア, or the same word in two lessons) share one id and
therefore one future clip. Recorded audio is planned to live at
`public/audio/<id>.mp3` with TTS as fallback; a test fails when the committed
manifest drifts from the content.
