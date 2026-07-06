import type { Lesson } from "../types";

export const tendencies: Lesson = {
  id: "tendencies",
  stage: "advanced-topics",
  order: 5,
  title: "Tendencies",
  subtitle: "がち · つつ · 気味",
  summary:
    "Describe leaning toward a state, doing something while also doing another, or a slight tendency.",
  estMinutes: 18,
  vocabulary: [
    { word: "病気[びょうき]", reading: "びょうき", meaning: "illness" },
    { word: "太[ふと]る", reading: "ふとる", meaning: "to gain weight" },
    { word: "悩[なや]む", reading: "なやむ", meaning: "to worry" },
    { word: "改善[かいぜん]", reading: "かいぜん", meaning: "improvement" },
  ],
  blocks: [
    {
      type: "prose",
      text: "These patterns describe **tendencies and simultaneous states** — softer than absolute claims, common in health, habits, and work contexts.",
    },
    {
      type: "rule",
      title: "がち — prone to / tend to",
      items: [
        "Noun + {{がち}} or stem + {{がち}}: {{病気[びょうき]がち}} — 'sickly / often ill.'",
        "{{留守[るす]がち}} — 'tends to be away.' Slightly negative skew.",
      ],
    },
    {
      type: "rule",
      title: "つつ — while (simultaneous / ongoing)",
      items: [
        "Te-form + {{つつ}} (formal/literary): {{悩[なや]みつつ}} — 'while worrying.'",
        "Same form as {{ながら}} but more written: {{改善[かいぜん]しつつ}} — 'while improving.'",
        "Also: {{つつある}} — 'in the process of': {{発展[はってん]しつつある}}.",
        "**{{つつも}}** — 'even while': {{忙[いそが]しつつも}}、手伝[てつだ]った — helped even while busy.",
      ],
    },
    {
      type: "rule",
      title: "気味 — slight tendency (physical / mental)",
      items: [
        "Stem + {{気味[ぎみ]}}: {{太[ふと]り気味}} — 'a bit overweight.'",
        "Softens concern: {{風邪[かぜ]気味}} — 'coming down with a cold.'",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "最近[さいきん]、太[ふと]りがちだ。", en: "Lately I tend to gain weight." },
        { jp: "彼[かれ]は悩[なや]みつつ、前[まえ]に進[すす]んだ。", en: "While worrying, he moved forward." },
        { jp: "ちょっと風邪[かぜ]気味[ぎみ]なので、休[やす]みます。", en: "I feel a bit under the weather, so I'll rest." },
        { jp: "経済[けいざい]は回復[かいふく]しつつある。", en: "The economy is in the process of recovering." },
        { jp: "忙[いそが]しつつも、毎日[まいにち]走[はし]っている。", en: "Even while busy, runs every day." },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Tend to be ill / sickly」?",
      choices: ["病気がち", "病気つつ", "病気気味", "病気ざる"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Formal 'while doing' (similar to ながら)?",
      choices: ["〜がち", "〜つつ", "〜べき", "〜はず"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「A bit overweight」?",
      choices: ["太りがち", "太りつつ", "太り気味", "太るはず"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "「Economy is recovering (in progress)」?",
      choices: ["回復がち", "回復しつつある", "回復気味", "回復べき"],
      answer: 1,
    },
  ],
};
