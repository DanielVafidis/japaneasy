import type { Lesson } from "../types";

export const tendencies: Lesson = {
  id: "tendencies",
  stage: "n3",
  order: 11,
  title: "Tendencies",
  subtitle: "がち · つつ · 気味 · きらいがある",
  summary:
    "Talk about work habits, relationship patterns, and soft complaints — prone to, while doing, a bit…, and formal きらいがある.",
  estMinutes: 18,
  vocabulary: [
    { word: "遅刻[ちこく]", reading: "ちこく", meaning: "lateness; being late" },
    { word: "悩[なや]む", reading: "なやむ", meaning: "to worry" },
    { word: "改善[かいぜん]", reading: "かいぜん", meaning: "improvement" },
    { word: "風邪[かぜ]", reading: "かぜ", meaning: "a cold" },
    { word: "忙[いそが]しい", reading: "いそがしい", meaning: "busy" },
    { word: "批判[ひはん]", reading: "ひはん", meaning: "criticism" },
    { word: "太[ふと]る", reading: "ふとる", meaning: "to gain weight" },
  ],
  blocks: [
    {
      type: "prose",
      text: "These patterns describe **tendencies** — softer than absolute claims. Perfect for work problems ('tends to be late'), health, and measured criticism of habits.",
    },
    {
      type: "rule",
      title: "がち — prone to / tend to",
      items: [
        "Noun + {{がち}} or stem + {{がち}}: {{病気がち}} — 'sickly / often ill.'",
        "{{遅刻がち}} — 'tends to be late.' Slightly negative skew — common in soft complaints.",
      ],
    },
    {
      type: "rule",
      title: "つつ — while (simultaneous / ongoing)",
      items: [
        "Stem + {{つつ}} (formal/written): {{悩みつつ}} — 'while worrying.'",
        "More written than {{ながら}}: {{改善しつつ}} — 'while improving.'",
        "{{つつある}} — 'in the process of': {{回復しつつある}}.",
        "**{{つつも}}** — 'even while': {{悪いと知りつつも}} — 'even while knowing it's bad.'",
      ],
    },
    {
      type: "rule",
      title: "気味 — slight tendency",
      items: [
        "Stem + {{気味[ぎみ]}}: {{太り気味}} — 'a bit overweight.'",
        "Softens concern: {{風邪気味}} — 'coming down with a cold.' {{忙し気味}} — 'a bit on the busy side.'",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "最近[さいきん]、遅刻[ちこく]がちだ。反省[はんせい]している。", en: "Lately I tend to be late. I'm reflecting on it." },
        { jp: "彼[かれ]は悩[なや]みつつ、前[まえ]に進[すす]んだ。", en: "While worrying, he moved forward." },
        { jp: "ちょっと風邪[かぜ]気味[ぎみ]なので、早退[そうたい]します。", en: "I feel a bit under the weather, so I'll leave early." },
        { jp: "チームの雰囲気[ふんいき]は改善[かいぜん]しつつある。", en: "The team's atmosphere is in the process of improving." },
        { jp: "悪[わる]いと知[し]りつつも、夜更[よふ]かししてしまう。", en: "Even while knowing it's bad, I end up staying up late." },
      ],
    },
    {
      type: "heading",
      text: "きらいがある — an (unwelcome) tendency",
    },
    {
      type: "prose",
      text: "**Dictionary form / noun + {{の}} + {{きらいがある}}** is a formal, written way to point out an undesirable tendency — measured criticism of behaviour. Not the same meaning as {{嫌い}} 'dislike'.",
    },
    {
      type: "examples",
      items: [
        { jp: "彼[かれ]は物事[ものごと]を大[おお]げさに言[い]うきらいがある。", en: "He has a tendency to exaggerate things." },
        { jp: "この案[あん]は理想[りそう]に走[はし]るきらいがある。", en: "This proposal tends to chase ideals (at the expense of realism)." },
        { jp: "批判[ひはん]ばかりするきらいがある同僚[どうりょう]だ。", en: "A coworker who has a tendency to do nothing but criticize." },
      ],
    },
    {
      type: "dialogue",
      title: "Soft work complaint",
      lines: [
        { speaker: "A", jp: "田中[たなか]さん、最近[さいきん]遅刻[ちこく]がちだよね。", en: "Tanaka-san tends to be late lately, huh." },
        { speaker: "B", jp: "うん。忙[いそが]し気味[ぎみ]らしいけど、改善[かいぜん]してほしい。", en: "Yeah. Seems a bit busy, but I want them to improve." },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Tend to be late」?",
      choices: ["遅刻がち", "遅刻つつ", "遅刻気味", "遅刻ざる"],
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
      prompt: "「A bit under the weather」?",
      choices: ["風邪がち", "風邪つつ", "風邪気味", "風邪はず"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "「Atmosphere is improving (in progress)」?",
      choices: ["改善がち", "改善しつつある", "改善気味", "改善べき"],
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
    { id: "gachi", prompt: "Add 'prone to' — 'tends to be late'", jp: "遅刻[ちこく]", answers: ["遅刻[ちこく]がち"] },
    { id: "tsutsu", prompt: "Add 'while / though' — ongoing", jp: "悩[なや]む", answers: ["悩[なや]みつつ"] },
    { id: "gimi", prompt: "Add 'slightly tending to' — 'a bit busy'", jp: "忙[いそが]しい", answers: ["忙[いそが]し気味[ぎみ]"] },
    { id: "kirai", prompt: "Fill — formal 'has a tendency to worry'", jp: "悩[なや]む◯◯◯がある", answers: ["きらい"] },
  ],
};
