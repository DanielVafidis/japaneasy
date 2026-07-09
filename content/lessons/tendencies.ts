import type { Lesson } from "../types";

export const tendencies: Lesson = {
  id: "tendencies",
  stage: "advanced-topics",
  order: 5,
  title: "Tendencies",
  subtitle: "がち · つつ · 気味 · きらいがある",
  summary:
    "Describe leaning toward a state, doing something while also doing another, a slight physical tendency, and the formal きらいがある.",
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
        "**{{つつも}}** — 'even while': {{悪[わる]いと知[し]りつつも}} — 'even while knowing it's bad.' (Attaches to **verb stems only** — for adjectives use {{ながらも}}.)",
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
        { jp: "悪[わる]いと知[し]りつつも、夜更[よふ]かししてしまう。", en: "Even while knowing it's bad, I end up staying up late." },
      ],
    },
    {
      type: "heading",
      text: "きらいがある — an (unwelcome) tendency",
    },
    {
      type: "prose",
      text: "**Dictionary form / noun + {{の}} + {{きらいがある}}** is a formal, written way to point out an undesirable tendency — usually in people's behaviour, and usually as measured criticism. It has nothing to do with {{嫌[きら]い}} 'to dislike' in meaning, despite the shared origin.",
    },
    {
      type: "examples",
      items: [
        { jp: "彼[かれ]は物事[ものごと]を大[おお]げさに言[い]うきらいがある。", en: "He has a tendency to exaggerate things." },
        { jp: "この計画[けいかく]は理想[りそう]に走[はし]るきらいがある。", en: "This plan tends to chase ideals (at the expense of realism)." },
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
    {
      kind: "mc",
      prompt: "遅刻するきらいがある means…",
      choices: [
        "has an (unwelcome) tendency to be late",
        "hates being late",
        "is never late",
        "was late just now",
      ],
      answer: 0,
      explanation: "きらいがある = formal 'has a tendency to' (criticism); unrelated to 嫌い 'dislike'.",
    },
    {
      kind: "order",
      prompt: "Build: 'In winter I tend to catch colds'",
      tiles: ["冬[ふゆ]は", "風邪[かぜ]を", "ひきがちだ"],
      distractors: ["ひくがちだ"],
      explanation: "がち attaches to the stem: ひき + がち.",
    },
  ],
  drills: [
    { id: "gachi", prompt: "Add 'prone to' — 'tends to get sick'", jp: "病気[びょうき]", answers: ["病気[びょうき]がち"] },
    { id: "tsutsu", prompt: "Add 'while / though' — ongoing", jp: "悩[なや]む", answers: ["悩[なや]みつつ"] },
    { id: "gimi", prompt: "Add 'slightly tending to' — 'a bit overweight'", jp: "太[ふと]る", answers: ["太[ふと]り気味[ぎみ]"] },
    { id: "kirai", prompt: "Fill — formal 'has a tendency to worry'", jp: "悩[なや]む◯◯◯がある", answers: ["きらい"] },
  ],
};
