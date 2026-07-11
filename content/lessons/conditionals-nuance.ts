import type { Lesson } from "../types";

export const conditionalsNuance: Lesson = {
  id: "conditionals-nuance",
  stage: "n3",
  order: 2,
  title: "Conditionals with Nuance",
  subtitle: "ば · なら · ても · 限り",
  summary:
    "Move past と and たら: general conditions (ば), contextual なら, even-if ても, and as-long-as 限り.",
  estMinutes: 18,
  vocabulary: [
    { word: "雨[あめ]", reading: "あめ", meaning: "rain" },
    { word: "降[ふ]る", reading: "ふる", meaning: "to fall (rain/snow)" },
    { word: "暇[ひま]", reading: "ひま", meaning: "free time" },
    { word: "忙[いそが]しい", reading: "いそがしい", meaning: "busy" },
    { word: "健康[けんこう]", reading: "けんこう", meaning: "health" },
    { word: "運動[うんどう]", reading: "うんどう", meaning: "exercise" },
    { word: "行[い]く", reading: "いく", meaning: "to go" },
    { word: "安[やす]い", reading: "やすい", meaning: "cheap; inexpensive" },
    { word: "質[しつ]", reading: "しつ", meaning: "quality" },
    { word: "東京[とうきょう]", reading: "とうきょう", meaning: "Tokyo" },
    { word: "悪[わる]い", reading: "わるい", meaning: "bad (i-adj)" },
    { word: "便利[べんり]", reading: "べんり", meaning: "convenient (na-adj)" },
    { word: "限[かぎ]り", reading: "かぎり", meaning: "as far as; as long as", note: "〜する限り — as long as …" },
  ],
  blocks: [
    {
      type: "prose",
      text: "At N4 you met {{と}} (natural result) and {{たら}} (when/if, after). N3 adds tools for **general conditions**, **context**, **even-if**, and **as long as**. Brief contrast first, then each form.",
    },
    {
      type: "rule",
      title: "Quick recap: と / たら (N4)",
      items: [
        "**{{と}}** — whenever A, B follows (habit, natural law): {{春になると暖かくなる}}.",
        "**{{たら}}** — when/if A happens, then B (one-shot, discovery, request-friendly): {{着いたら電話して}}.",
      ],
    },
    {
      type: "heading",
      text: "ば — general / hypothetical condition",
    },
    {
      type: "rule",
      title: "Forming ば",
      items: [
        "**Verbs:** e-form + {{ば}}. {{行く}} → {{行けば}}, {{食べる}} → {{食べれば}}.",
        "**I-adjectives:** {{い}} → {{ければ}}. {{安ければ}}.",
        "**Na-adjectives / nouns:** {{なら(ば)}} or {{であれば}}.",
      ],
    },
    {
      type: "prose",
      text: "{{ば}} suits **general if-then** and soft advice. Avoid stacking a strong command right after {{ば}} in careful speech — {{たら}} is friendlier for requests.",
    },
    {
      type: "examples",
      items: [
        { jp: "雨[あめ]が降[ふ]れば、家[いえ]で仕事[しごと]します。", en: "If it rains, I'll work from home." },
        { jp: "安[やす]ければ買[か]います。", en: "If it's cheap, I'll buy it." },
        { jp: "早[はや]く寝[ね]れば、朝[あさ]が楽[らく]です。", en: "If you sleep early, mornings are easier." },
      ],
    },
    {
      type: "heading",
      text: "なら — given that / if that's the case",
    },
    {
      type: "prose",
      text: "{{なら}} often reacts to **something just mentioned** or a known situation: 'if that's what we're talking about…' It can also set a topic as the condition.",
    },
    {
      type: "examples",
      items: [
        { jp: "東京[とうきょう]に行[い]くなら、電車[でんしゃ]が便利[べんり]ですよ。", en: "If you're going to Tokyo, the train is convenient." },
        { jp: "暇[ひま]なら、一緒[いっしょ]に昼[ひる]ごはんはどう？", en: "If you're free, how about lunch together?" },
        { jp: "それなら、明日[あした]にしましょう。", en: "In that case, let's do it tomorrow." },
      ],
    },
    {
      type: "heading",
      text: "ても — even if",
    },
    {
      type: "rule",
      title: "ても formation",
      items: [
        "Te-form + {{も}}: {{雨が降っても}} — even if it rains.",
        "I-adjectives: {{くても}} — {{忙しくても}}.",
        "Na / noun: {{でも}} — {{暇でも}}, {{学生でも}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "雨[あめ]が降[ふ]っても、会社[かいしゃ]に行[い]きます。", en: "Even if it rains, I'll go to the office." },
        { jp: "忙[いそが]しくても、運動[うんどう]は続[つづ]けたい。", en: "Even if I'm busy, I want to keep exercising." },
        { jp: "安[やす]くても、質[しつ]が悪[わる]ければ買[か]いません。", en: "Even if it's cheap, I won't buy it if the quality is bad." },
      ],
    },
    {
      type: "heading",
      text: "限り — as long as / to the extent that",
    },
    {
      type: "examples",
      items: [
        { jp: "健康[けんこう]である限[かぎ]り、働[はたら]き続[つづ]けたい。", en: "As long as I'm healthy, I want to keep working." },
        { jp: "私[わたし]の知[し]っている限[かぎ]り、会議[かいぎ]は来週[らいしゅう]です。", en: "As far as I know, the meeting is next week." },
        { jp: "雨[あめ]が降[ふ]らない限[かぎ]り、外[そと]で食[た]べよう。", en: "As long as it doesn't rain, let's eat outside." },
      ],
    },
    {
      type: "table",
      caption: "Conditionals map",
      headers: ["Form", "Core feel", "Example"],
      rows: [
        ["と", "Natural / habitual result", "押すと開く"],
        ["たら", "When/if (flexible)", "着いたら連絡して"],
        ["ば", "General if", "安ければ買う"],
        ["なら", "Given that / if so", "行くなら早めに"],
        ["ても", "Even if", "降っても行く"],
        ["限り", "As long as / as far as", "知る限り"],
      ],
    },
    {
      type: "tip",
      text: "Future plans: {{雨が降ったら中止}} (event-based) vs {{雨が降れば中止}} (rule-like) vs {{雨でも行く}} (defiant even-if).",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Even if it rains」?",
      choices: ["雨が降れば", "雨が降ったら only", "雨が降っても", "雨が降るなら only"],
      answer: 2,
      explanation: "ても = even if.",
    },
    {
      kind: "mc",
      prompt: "ば-form of 安い?",
      choices: ["安ば", "安ければ", "安たら", "安なら"],
      answer: 1,
      explanation: "i-adjective: い → ければ.",
    },
    {
      kind: "mc",
      prompt: "「If you're going to Tokyo…」 — natural?",
      choices: ["東京に行くと、便利ですよ (only)", "東京に行くなら、電車が便利ですよ", "東京に行っても、電車が便利", "東京に行く限り便利 only"],
      answer: 1,
      explanation: "なら fits contextual 'given that you're going…'.",
    },
    {
      kind: "fill",
      prompt: "Complete — 'as long as I'm healthy':",
      promptJp: "健康[けんこう]である◯",
      answers: ["限り", "かぎり"],
      explanation: "限り = as long as.",
    },
    {
      kind: "order",
      prompt: "Build: 'If it rains, I'll work from home'",
      tiles: ["雨[あめ]が", "降[ふ]れば", "家[いえ]で", "仕事[しごと]します"],
      distractors: ["降[ふ]っても"],
      explanation: "ば for a general if-then plan.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "雨[あめ]が降[ふ]っても行[い]きます",
      explanation: "雨が降っても行きます — Even if it rains, I'll go.",
    },
  ],
  drills: [
    { id: "ba-iku", prompt: "Make the ば form — 'if go'", jp: "行[い]く", answers: ["行[い]けば"] },
    { id: "ba-yasui", prompt: "Make the ば form — 'if cheap'", jp: "安[やす]い", answers: ["安[やす]ければ"] },
    { id: "temo-ame", prompt: "Even if — complete", jp: "雨[あめ]が降[ふ]って◯、行[い]く", answers: ["も"] },
    { id: "nara-hima", prompt: "Complete — 'if free'", jp: "暇[ひま]◯、一緒[いっしょ]に行[い]こう", answers: ["なら"] },
    { id: "kagiri", prompt: "Complete — 'as long as healthy'", jp: "健康[けんこう]である◯", answers: ["限[かぎ]り", "限り", "かぎり"] },
  ],
};
