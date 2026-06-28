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

That's it. The lesson now appears in the curriculum (grouped by `stage`, sorted by `order`), gets its own page, and its vocabulary automatically becomes flashcards. A review card for the lesson is added to the **Grammar** deck too.

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
```

## 6. Stages

Stage IDs live in [`content/types.ts`](content/types.ts) and metadata in [`content/curriculum.ts`](content/curriculum.ts):

| Stage ID | Title | Source PDF (in `docs/`) |
| --- | --- | --- |
| `foundations` | Writing System | pages 1–24 |
| `basic-grammar` | Basic Grammar | pages 25–94 |
| `essential-grammar` | Essential Grammar | pages 95–253 |
| `special-expressions` | Special Expressions | pages 254–363 |
| `advanced-topics` | Advanced Topics | pages 364–436 |

A stage shows as "coming soon" (with its `teaser` topic list) until it has at least one registered lesson. To flesh out Stages 2–4, work through the matching PDF and add lesson files exactly like the examples above — no UI or component changes needed.

## 7. Conventions & tips

- Keep `id` stable once shipped — it's the lesson's URL and the key for saved progress.
- Reuse vocabulary words verbatim across lessons; the flashcard deck de-duplicates by word.
- Prefer many short `examples` over long prose — the source guide's philosophy is "learn by example".
- Run `npm run build` to type-check your content before committing.
```
