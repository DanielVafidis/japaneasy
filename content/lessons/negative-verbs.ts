import type { Lesson } from "../types";

export const negativeVerbs: Lesson = {
  id: "negative-verbs",
  stage: "basic-grammar",
  order: 4,
  title: "Negative Verbs",
  subtitle: "Turning verbs into 'do not ~' with ない",
  summary:
    "One clean rule for ru-verbs, one vowel-shift rule for u-verbs, and the irregular ある.",
  estMinutes: 14,
  vocabulary: [
    { word: "食べる", reading: "たべる", meaning: "to eat (ru-verb)" },
    { word: "飲む", reading: "のむ", meaning: "to drink (u-verb)" },
    { word: "買う", reading: "かう", meaning: "to buy (u-verb)" },
    { word: "ある", reading: "ある", meaning: "to exist (inanimate)" },
    { word: "する", reading: "する", meaning: "to do" },
    { word: "来る", reading: "くる", meaning: "to come" },
  ],
  blocks: [
    {
      type: "prose",
      text: "To say a verb is **not** done, we conjugate it to the negative, which ends in {{ない}}. The rule depends on the verb class you just learned.",
    },
    {
      type: "rule",
      title: "Ru-verbs",
      items: ["Drop {{る}}, add {{ない}}.", "{{食べる}} → {{食べない}} (does not eat)"],
    },
    {
      type: "rule",
      title: "U-verbs",
      items: [
        "Change the last /u/ sound to its /a/ sound, then add {{ない}}.",
        "{{飲む}} (no**mu**) → {{飲まない}} (no**ma**nai)",
        "Special case: verbs ending in {{う}} become {{わ}} (not あ). {{買う}} → {{買わない}}",
      ],
    },
    {
      type: "rule",
      title: "Exceptions",
      items: [
        "{{する}} → {{しない}}",
        "{{来る}} → {{来ない}} (こない)",
        "{{ある}} (to exist) is irregular: its negative is simply {{ない}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "食[た]べない。", en: "Do not eat." },
        { jp: "飲[の]まない。", en: "Do not drink." },
        { jp: "買[か]わない。", en: "Do not buy." },
        { jp: "しない。", en: "Do not do." },
        { jp: "来[こ]ない。", en: "Do not come." },
      ],
    },
    {
      type: "tip",
      text: "Negative verbs ending in ない behave exactly like i-adjectives. That's a preview — it means you'll be able to make them past (なかった) using the i-adjective rule.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Negative of the ru-verb 食べる?",
      choices: ["食べらない", "食べない", "食べあない", "食べわない"],
      answer: 1,
    },
    {
      kind: "fill",
      prompt: "Make 飲む negative. Type the Japanese:",
      answers: ["飲まない", "のまない"],
      explanation: "mu → ma, then ない: 飲まない.",
    },
    {
      kind: "mc",
      prompt: "買う ends in う. Its negative is...",
      choices: ["買あない", "買らない", "買わない", "買いない"],
      answer: 2,
      explanation: "う-ending verbs use わ (not あ): 買わない.",
    },
    {
      kind: "mc",
      prompt: "What is the negative of ある (to exist)?",
      choices: ["あらない", "ない", "あるない", "あれない"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'Today nobody comes'",
      tiles: ["今日[きょう]は", "誰[だれ]も", "来[こ]ない"],
      distractors: ["来[く]る"],
      explanation: "誰も pairs with a negative verb: 来ない.",
    },
  ],
};
