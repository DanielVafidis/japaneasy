import type { Lesson } from "../types";

export const introduction: Lesson = {
  id: "introduction",
  stage: "foundations",
  order: 0,
  title: "Introduction",
  subtitle: "A JLPT-aligned path from the writing system to N1",
  summary:
    "How this curriculum is organized, the themes you will revisit, and the habits that make Japanese stick.",
  estMinutes: 5,
  blocks: [
    {
      type: "prose",
      text: "JapanEasy is a **JLPT-aligned spiral curriculum**. You start with the writing system and core sentence patterns, then climb through N5 → N4 → N3 → N2 → N1. Each stage reuses familiar situations with richer grammar, so you keep building on what you already know instead of starting from zero every time.",
    },
    {
      type: "heading",
      text: "The path ahead",
    },
    {
      type: "rule",
      title: "Stages at a glance",
      items: [
        "**Writing System** — hiragana, katakana, and a first look at kanji. Reading comes before grammar.",
        "**N5 — Foundations** — everyday sentences: state-of-being, particles, basic verbs, and polite forms.",
        "**N4 — Expansion** — more verb forms, adjectives, and useful conversation patterns.",
        "**N3 — Nuance** — connecting ideas, softer speech, and more natural expression.",
        "**N2 — Naturalness** — complex sentences and real-world reading.",
        "**N1 — Mastery** — precision, style, and near-native control.",
      ],
    },
    {
      type: "prose",
      text: "Japanese is consistent once the core patterns click. Learn how a sentence is built, how particles assign roles, and how verbs conjugate — then most new grammar reuses those same moves.",
    },
    {
      type: "heading",
      text: "Recurring themes",
    },
    {
      type: "prose",
      text: "Throughout the levels you will meet the same real-life situations again and again, each time with more tools:",
    },
    {
      type: "rule",
      title: "Themes you will revisit",
      items: [
        "**Commuting** — stations, trains, directions, schedules.",
        "**Food** — ordering, preferences, cooking, restaurants.",
        "**Social situations** — self-introductions, friends, invitations, small talk.",
        "**Daily routines** — morning to night, work, school, and free time.",
      ],
    },
    {
      type: "heading",
      text: "What comes next",
    },
    {
      type: "prose",
      text: "Your first real task is the writing system. **Hiragana** is the foundation for everything that follows; then **katakana** for loanwords and names; then a gentle **kanji** preview so characters stop looking like decoration. Only after that do we dive into N5 grammar.",
    },
    {
      type: "heading",
      text: "Four habits that work",
    },
    {
      type: "rule",
      title: "Practice this way",
      items: [
        "**Learn kana first.** Don't lean on romaji — it quietly slows your reading forever.",
        "**Learn by example.** Don't convert English word-by-word; absorb how ideas are actually expressed in Japanese.",
        "**Review little and often.** A few minutes daily beats marathon sessions. Spaced repetition does the heavy lifting.",
        "**Listen from day one.** Mimic native pitch and rhythm with the audio button next to every sentence.",
      ],
    },
    {
      type: "tip",
      text: "See the 「」 brackets in examples? Those are Japanese quotation marks. You will meet them constantly.",
    },
    {
      type: "note",
      text: "Throughout the lessons you can toggle furigana (the small reading above kanji) and romaji on or off using the reading controls. Try to wean yourself off romaji as soon as you can.",
    },
    {
      type: "prose",
      text: "Ready? Let's start with **hiragana**.",
    },
  ],
};
