import type { Lesson } from "../types";

export const potentialForm: Lesson = {
  id: "potential-form",
  stage: "essential-grammar",
  order: 7,
  title: "Potential Form",
  subtitle: "Can / be able to",
  summary:
    "Express ability with the potential verb form — and learn how が marks what you can do.",
  estMinutes: 14,
  vocabulary: [
    { word: "食[た]べる", reading: "たべる", meaning: "to eat" },
    { word: "見[み]る", reading: "みる", meaning: "to see" },
    { word: "話[はな]す", reading: "はなす", meaning: "to speak" },
    { word: "書[か]く", reading: "かく", meaning: "to write" },
    { word: "泳[およ]ぐ", reading: "およぐ", meaning: "to swim" },
    { word: "日本語[にほんご]", reading: "にほんご", meaning: "Japanese language" },
  ],
  blocks: [
    {
      type: "prose",
      text: "The **potential form** answers 'can you…?' For ru-verbs it's effortless: swap {{る}} for {{られる}}. U-verbs change their final syllable to the /e/ row and add {{る}}. Only two verbs stay irregular: {{する}} → {{できる}}, {{来る}} → {{来られる}}.",
    },
    {
      type: "rule",
      title: "Conjugation",
      items: [
        "**Ru-verbs:** {{見る}} → {{見られる}} ('can see'). In casual speech, {{見れる}} is very common.",
        "**U-verbs:** {{話す}} → {{話せる}}, {{書く}} → {{書ける}}, {{泳ぐ}} → {{泳げる}}.",
        "**Exceptions:** {{する}} → {{できる}}, {{来る}} → {{来られる}}.",
      ],
    },
    {
      type: "heading",
      text: "Particles: を → が",
    },
    {
      type: "prose",
      text: "When the verb becomes about **ability**, the object often takes {{が}} instead of {{を}} — because you're highlighting what is doable, not what you're acting on.",
    },
    {
      type: "examples",
      items: [
        { jp: "日本語[にほんご]が話[はな]せます。", en: "I can speak Japanese." },
        { jp: "漢字[かんじ]が読[よ]める。", en: "Can read kanji." },
        { jp: "ここで泳[およ]げる。", en: "Can swim here." },
        { jp: "ピアノが弾[ひ]ける？", en: "Can you play piano?" },
      ],
    },
    {
      type: "note",
      text: "Using {{を}} with potential is still heard: {{日本語を話せる}}. Both are acceptable; {{が}} emphasises ability.",
    },
    {
      type: "tip",
      text: "{{できる}} also works as a standalone helper: {{日本語ができる}} = 'can do Japanese' = speaks Japanese.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Potential form of 食べる?",
      choices: ["食べられる", "食べれる", "Both are common", "食べ可能"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "Potential form of する?",
      choices: ["すれる", "できる", "しられる", "せる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「I can speak Japanese」 — natural particle?",
      choices: ["日本語を話せる", "日本語が話せる", "日本語に話せる", "日本語で話せる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Potential form of 書く?",
      choices: ["書ける", "書られる", "書いてる", "書かれる"],
      answer: 0,
    },
  ],
};
