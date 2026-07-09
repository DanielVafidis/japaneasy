import type { Lesson } from "../types";

export const certainty: Lesson = {
  id: "certainty",
  stage: "special-expressions",
  order: 4,
  title: "Certainty & Conjecture",
  subtitle: "かもしれない · でしょう · はず · に違いない",
  summary:
    "Express probability, polite guesswork, and varying degrees of confidence.",
  estMinutes: 18,
  vocabulary: [
    { word: "多分[たぶん]", reading: "たぶん", meaning: "probably" },
    { word: "きっと", reading: "きっと", meaning: "surely" },
    { word: "雨[あめ]", reading: "あめ", meaning: "rain" },
    { word: "遅[おく]れる", reading: "おくれる", meaning: "to be late" },
    { word: "試験[しけん]", reading: "しけん", meaning: "exam" },
    { word: "はず", reading: "はず", meaning: "should be; expected" },
    { word: "違[ちが]う", reading: "ちがう", meaning: "to differ; be wrong" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Japanese rarely states bare facts about the future. Instead you **calibrate confidence** — from 'maybe' to 'almost certainly' — with a handful of sentence-ending patterns.",
    },
    {
      type: "rule",
      title: "かもしれない — maybe / might",
      items: [
        "Attach to plain form: {{降[ふ]るかもしれない}} — 'It might rain.'",
        "Polite: {{かもしれません}}. Casual: {{かも}} alone.",
        "Low to medium confidence — you're not committing.",
      ],
    },
    {
      type: "rule",
      title: "でしょう — probably (polite conjecture)",
      items: [
        "Attach to plain form or ます-stem context: {{難[むずか]しいでしょう}}.",
        "Also seeks agreement: {{いいでしょう？}} — 'It's fine, isn't it?'",
        "Weather forecasts love {{でしょう}}: {{明日[あした]は晴[は]れるでしょう}}.",
      ],
    },
    {
      type: "rule",
      title: "だろう — probably (casual / masculine)",
      items: [
        "Plain conjecture: {{彼[かれ]は来[く]るだろう}} — 'He'll probably come.'",
        "Also rhetorical: {{そうだろう？}} — 'Right?'",
      ],
    },
    {
      type: "table",
      caption: "Confidence ladder",
      headers: ["Expression", "Confidence", "Register"],
      rows: [
        ["かもしれない", "low–medium", "neutral"],
        ["でしょう", "medium–high", "polite"],
        ["だろう", "medium–high", "casual"],
        ["きっと…だ", "high", "neutral"],
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "多分[たぶん]、試験[しけん]は難[むずか]しいかもしれない。", en: "The exam might be difficult, probably." },
        { jp: "彼[かれ]はもう帰[かえ]ったでしょう。", en: "He's probably gone home already." },
        { jp: "きっと大丈夫[だいじょうぶ]だよ。", en: "I'm sure it'll be fine." },
      ],
    },
    {
      type: "heading",
      text: "Strong expectation: はず",
    },
    {
      type: "rule",
      title: "Plain + はず(だ)",
      items: [
        "Logical expectation from evidence: {{来[く]るはず}} — 'should come / is supposed to come.'",
        "Negative expectation: {{来[く]るはずがない}} — 'no way they're coming.'",
        "After nouns / na-adj: {{学生[がくせい]のはず}} · {{暇[ひま]なはず}}.",
      ],
    },
    {
      type: "heading",
      text: "Near certainty: に違いない",
    },
    {
      type: "prose",
      text: "Plain form + {{に違[ちが]いない}} — 'must be; undoubtedly': {{彼[かれ]は知[し]っているに違いない}} — 'He must know.' Stronger than {{でしょう}}; you're committing to the inference.",
    },
    {
      type: "examples",
      items: [
        { jp: "このバスは、駅[えき]に行[い]くはずです。", en: "This bus should go to the station." },
        { jp: "彼[かれ]は来[こ]ないはずがない。", en: "There's no way he won't come." },
        { jp: "犯人[はんにん]はあの人[ひと]に違[ちが]いない。", en: "The culprit must be that person." },
        { jp: "遅[おく]れるかもしれませんが、来[き]ます。", en: "I might be late, but I'll come." },
      ],
    },
    {
      type: "note",
      text: "Adverbs tune the same endings: {{多分[たぶん]}} + {{かもしれない}} (maybe), {{おそらく}} + {{でしょう}} (likely), {{きっと}} + {{だ}} (surely). {{でしょうか}} softens a guess into a polite question: {{大丈夫でしょうか}}.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Low-confidence 'might rain'?",
      choices: ["雨だ", "雨かもしれない", "雨でしょう", "雨になる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Polite conjecture ending?",
      choices: ["だろう", "でしょう", "かも", "べき"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Attach かもしれない to which form?",
      choices: ["て-form", "Plain / dictionary", "ます-form only", "ない-form only"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「This bus should go to the station」?",
      choices: ["行くかも", "行くはず", "行くそう", "行くらしい"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Must be that person (culprit)」 — strongest?",
      choices: ["かもしれない", "でしょう", "に違いない", "みたい"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "来るはずがない means…",
      choices: ["must come", "no way they'll come", "might come", "heard they're coming"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'It might rain in the afternoon'",
      tiles: ["午後[ごご]は", "雨[あめ]が", "降[ふ]るかもしれない"],
      distractors: ["降[ふ]るはずがない"],
      explanation: "かもしれない = might; はずがない would deny the possibility.",
    },
  ],
  drills: [
    { id: "kamoshirenai", prompt: "Add 'might' — 'it might rain'", jp: "雨[あめ]が降[ふ]る", answers: ["雨[あめ]が降[ふ]るかもしれない"] },
    { id: "deshou", prompt: "Add polite conjecture — 'will probably be late'", jp: "遅[おく]れる", answers: ["遅[おく]れるでしょう"] },
    { id: "darou", prompt: "Add casual conjecture", jp: "遅[おく]れる", answers: ["遅[おく]れるだろう"] },
    { id: "hazu", prompt: "Add expectation — 'should (be expected to) come'", jp: "来[く]る", answers: ["来[く]るはずだ", "来[く]るはず"] },
    { id: "nichigainai", prompt: "Finish the conviction — 'no doubt it's rain'", jp: "雨[あめ]に◯◯◯◯", answers: ["違[ちが]いない"] },
  ],
};
