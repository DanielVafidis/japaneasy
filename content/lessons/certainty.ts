import type { Lesson } from "../types";

export const certainty: Lesson = {
  id: "certainty",
  stage: "n3",
  order: 5,
  title: "Certainty & Conjecture",
  subtitle: "かもしれない · でしょう · はず · に違いない",
  summary:
    "Calibrate confidence when you give opinions on delays, work problems, and relationship drama — from 'maybe' to 'must be'.",
  estMinutes: 18,
  vocabulary: [
    { word: "多分[たぶん]", reading: "たぶん", meaning: "probably" },
    { word: "きっと", reading: "きっと", meaning: "surely" },
    { word: "遅[おく]れる", reading: "おくれる", meaning: "to be late" },
    { word: "失敗[しっぱい]", reading: "しっぱい", meaning: "failure" },
    { word: "はず", reading: "はず", meaning: "should be; expected" },
    { word: "違[ちが]う", reading: "ちがう", meaning: "to differ; be wrong" },
    { word: "原因[げんいん]", reading: "げんいん", meaning: "cause; reason" },
    { word: "誤解[ごかい]", reading: "ごかい", meaning: "misunderstanding" },
  ],
  blocks: [
    {
      type: "prose",
      text: "When you share an **opinion** about why someone is late, whether a plan will work, or who caused a problem, Japanese **calibrates confidence** — from soft {{かもしれない}} to firm {{に違いない}}.",
    },
    {
      type: "rule",
      title: "かもしれない — maybe / might",
      items: [
        "Attach to plain form: {{遅れるかもしれない}} — 'Might be late.'",
        "Polite: {{かもしれません}}. Casual: {{かも}} alone.",
        "Low to medium confidence — useful for soft complaints and hedged opinions.",
      ],
    },
    {
      type: "rule",
      title: "でしょう / だろう — probably",
      items: [
        "**{{でしょう}}** — polite conjecture: {{原因はそこでしょう}}.",
        "**{{だろう}}** — casual / written: {{失敗するだろう}}.",
        "Also seeks agreement: {{大丈夫でしょう？}}.",
      ],
    },
    {
      type: "table",
      caption: "Confidence ladder (opinions & problems)",
      headers: ["Expression", "Confidence", "Typical use"],
      rows: [
        ["かもしれない", "low–medium", "soft guess / hedge"],
        ["でしょう / だろう", "medium–high", "polite or casual guess"],
        ["きっと…だ", "high", "reassurance"],
        ["はずだ", "logical expectation", "based on evidence"],
        ["に違いない", "near certainty", "strong inference"],
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "電車[でんしゃ]の遅[おく]れが原因[げんいん]かもしれない。", en: "The train delay might be the cause." },
        { jp: "彼[かれ]はもう帰[かえ]ったでしょう。", en: "He's probably gone home already." },
        { jp: "きっと誤解[ごかい]だよ。", en: "I'm sure it's a misunderstanding." },
      ],
    },
    {
      type: "heading",
      text: "はず — logical expectation",
    },
    {
      type: "rule",
      title: "Plain + はず(だ)",
      items: [
        "Expectation from evidence: {{今日届くはず}} — 'should arrive today.'",
        "Denial: {{来るはずがない}} — 'no way they're coming.'",
        "After nouns / na-adj: {{彼のせいのはず}} · {{暇なはず}}.",
      ],
    },
    {
      type: "heading",
      text: "に違いない — must be",
    },
    {
      type: "prose",
      text: "Plain form + {{に違[ちが]いない}} — 'must be; no doubt': {{原因はそこにあるに違いない}}. Stronger than {{でしょう}}; you're committing to the inference — useful in detailed problem-solving talk.",
    },
    {
      type: "examples",
      items: [
        { jp: "このバスは駅[えき]に行[い]くはずです。", en: "This bus should go to the station." },
        { jp: "彼[かれ]が忘[わす]れたはずがない。", en: "There's no way he forgot." },
        { jp: "失敗[しっぱい]の原因[げんいん]は連絡[れんらく]不足[ぶそく]に違[ちが]いない。", en: "The cause of the failure must be poor communication." },
        { jp: "遅[おく]れるかもしれませんが、行[い]きます。", en: "I might be late, but I'll come." },
      ],
    },
    {
      type: "dialogue",
      title: "Diagnosing a work problem",
      lines: [
        { speaker: "A", jp: "クライアントが怒[おこ]ってるみたい。", en: "The client seems angry." },
        { speaker: "B", jp: "納期[のうき]の遅[おく]れが原因[げんいん]でしょう。", en: "The delayed deadline is probably the cause." },
        { speaker: "A", jp: "うん。説明[せつめい]不足[ぶそく]だったに違[ちが]いない。", en: "Yeah. It must have been a lack of explanation." },
      ],
    },
    {
      type: "note",
      text: "Adverbs tune the same endings: {{多分}} + {{かもしれない}}, {{おそらく}} + {{でしょう}}, {{きっと}} + {{だ}}. {{でしょうか}} softens a guess into a polite question.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Low-confidence 'might be late'?",
      choices: ["遅刻だ", "遅刻かもしれない", "遅刻でしょう", "遅刻になる"],
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
      prompt: "「The package should arrive today」?",
      choices: ["届くかも", "届くはず", "届くそう", "届くらしい"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Must be a misunderstanding」 — strongest?",
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
      prompt: "Build: 'The cause might be a delay'",
      tiles: ["原因[げんいん]は", "遅[おく]れ", "かもしれない"],
      distractors: ["はずがない"],
      explanation: "かもしれない = might; はずがない would deny the possibility.",
    },
  ],
  drills: [
    { id: "kamoshirenai", prompt: "Add 'might' — 'might be late'", jp: "遅[おく]れる", answers: ["遅[おく]れるかもしれない"] },
    { id: "deshou", prompt: "Add polite conjecture — 'will probably fail'", jp: "失敗[しっぱい]する", answers: ["失敗[しっぱい]するでしょう"] },
    { id: "darou", prompt: "Add casual conjecture", jp: "遅[おく]れる", answers: ["遅[おく]れるだろう"] },
    { id: "hazu", prompt: "Add expectation — 'should (be expected to) arrive'", jp: "届[とど]く", answers: ["届[とど]くはずだ", "届[とど]くはず"] },
    { id: "nichigainai", prompt: "Finish the conviction — 'no doubt it's a misunderstanding'", jp: "誤解[ごかい]に◯◯◯◯", answers: ["違[ちが]いない"] },
  ],
};
