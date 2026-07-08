import type { Lesson } from "../types";

export const nounParticles: Lesson = {
  id: "noun-particles",
  stage: "basic-grammar",
  order: 9,
  title: "Noun-related Particles",
  subtitle: "と, や, とか, and the all-purpose の",
  summary:
    "Join nouns into lists (complete or partial) and link them with the versatile possessive の.",
  estMinutes: 14,
  vocabulary: [
    { word: "犬", reading: "いぬ", meaning: "dog" },
    { word: "猫", reading: "ねこ", meaning: "cat" },
    { word: "車", reading: "くるま", meaning: "car" },
    { word: "私", reading: "わたし", meaning: "I; me" },
    { word: "先生", reading: "せんせい", meaning: "teacher" },
    { word: "本", reading: "ほん", meaning: "book" },
  ],
  blocks: [
    {
      type: "heading",
      text: "と — and (exhaustive)",
    },
    {
      type: "prose",
      text: "{{と}} joins nouns into a **complete** list — these and *only* these.",
    },
    {
      type: "examples",
      items: [{ jp: "犬[いぬ]と猫[ねこ]。", en: "A dog and a cat (and nothing else)." }],
    },
    {
      type: "heading",
      text: "や / とか — and (non-exhaustive)",
    },
    {
      type: "prose",
      text: "{{や}} (and its more casual cousin {{とか}}) makes a **partial** list — these *among other things*. It implies the list isn't complete.",
    },
    {
      type: "examples",
      items: [
        { jp: "犬[いぬ]や猫[ねこ]。", en: "Dogs and cats (among others)." },
        { jp: "犬[いぬ]とか猫[ねこ]とか。", en: "Things like dogs and cats. (casual)" },
      ],
    },
    {
      type: "heading",
      text: "の — possession & linking nouns",
    },
    {
      type: "prose",
      text: "{{の}} links two nouns, most often showing possession ('X's Y'). More broadly, the first noun describes or owns the second.",
    },
    {
      type: "examples",
      items: [
        { jp: "私[わたし]の車[くるま]。", en: "My car." },
        { jp: "先生[せんせい]の本[ほん]。", en: "The teacher's book." },
        { jp: "日本語[にほんご]の先生[せんせい]。", en: "A teacher of Japanese.", note: "日本語 = Japanese language" },
      ],
    },
    {
      type: "note",
      text: "の can also turn a verb clause into a noun-like concept and stand in for a noun you've already mentioned (e.g. 赤いの = 'the red one'). You'll meet these uses again soon.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Which particle makes a COMPLETE list ('A and B, nothing else')?",
      choices: ["や", "とか", "と", "の"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "犬や猫 implies...",
      choices: [
        "Only a dog and a cat",
        "Dogs and cats among other things",
        "A dog's cat",
        "Neither dogs nor cats",
      ],
      answer: 1,
    },
    {
      kind: "fill",
      prompt: "Say 'my car' using 私, の, 車. Type the Japanese:",
      answers: ["私の車", "わたしの車", "私の車。"],
    },
    {
      kind: "mc",
      prompt: "先生の本 means...",
      choices: ["The teacher and the book", "The teacher's book", "A book about teachers", "Teach the book"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'There is a dog and a cat'",
      tiles: ["犬[いぬ]と", "猫[ねこ]が", "いる"],
      distractors: ["猫[ねこ]の"],
      explanation: "と joins a complete list of nouns.",
    },
  ],
};
