import type { Lesson } from "../types";

export const coveredEvents: Lesson = {
  id: "covered-events",
  stage: "n1",
  order: 2,
  title: "Coverage & Timing",
  subtitle: "上で · うちに · 最中 · 際 · にわたって · 次第",
  summary:
    "Leadership and career timing — upon confirming, while you still can, in the midst, on the occasion, throughout, and as soon as.",
  estMinutes: 18,
  vocabulary: [
    { word: "確認[かくにん]", reading: "かくにん", meaning: "confirmation" },
    { word: "最中[さいちゅう]", reading: "さいちゅう", meaning: "midst; height of" },
    { word: "際[さい]", reading: "さい", meaning: "occasion; when (formal)" },
    { word: "提案[ていあん]", reading: "ていあん", meaning: "proposal" },
    { word: "次第[しだい]", reading: "しだい", meaning: "as soon as; depending on" },
    { word: "報告[ほうこく]", reading: "ほうこく", meaning: "report" },
    { word: "就任[しゅうにん]", reading: "しゅうにん", meaning: "assumption of office" },
    { word: "停電[ていでん]", reading: "ていでん", meaning: "power outage" },
    { word: "会議[かいぎ]", reading: "かいぎ", meaning: "meeting" },
    { word: "方針[ほうしん]", reading: "ほうしん", meaning: "policy; course" },
  ],
  blocks: [
    {
      type: "prose",
      text: "These patterns cluster in **business Japanese**, announcements, and leadership prose. They pin deliberate timing: after due diligence, while a window lasts, mid-crisis, on formal occasions, across spans, and as soon as ready.",
    },
    {
      type: "heading",
      text: "Upon / after: 〜上で",
    },
    {
      type: "prose",
      text: "Ta-form + {{上[うえ]で}} — **after doing X as a prerequisite**, then Y: {{確認した上で、決断します}} — deliberate leadership tone.",
    },
    {
      type: "heading",
      text: "While still: 〜うちに",
    },
    {
      type: "prose",
      text: "Plain + {{うちに}} — **before the situation changes**: {{若いうちに挑戦する}} · {{忘れないうちに記録する}}. Life reflection and urgent career windows.",
    },
    {
      type: "examples",
      items: [
        { jp: "明[あ]るいうちに帰[かえ]ろう。", en: "Let's head home while it's still light." },
        { jp: "機[き]会[かい]を逃[のが]さないうちに、提案[ていあん]する。", en: "Propose before we miss the chance." },
      ],
    },
    {
      type: "heading",
      text: "In the midst: 〜最中に",
    },
    {
      type: "rule",
      title: "Formation",
      items: [
        "{{ている}} / noun + {{最中に}} — right in the middle.",
        "{{改革の最中に}}危機が起きた — a crisis mid-reform.",
        "{{報告している最中}} — while reporting (mid-action emphasis).",
      ],
    },
    {
      type: "heading",
      text: "Formal 'when': 〜際に · 〜にあたって",
    },
    {
      type: "prose",
      text: "{{際に}} and {{にあたって}} in notices and speeches: {{ご不明な点がございました際には}} · {{就任にあたって}}.",
    },
    {
      type: "heading",
      text: "Spanning: 〜にわたって",
    },
    {
      type: "prose",
      text: "{{にわたって}} — **throughout / across**: {{三年間にわたって調査した}} · {{全国にわたる改革}}.",
    },
    {
      type: "heading",
      text: "As soon as: 〜次第",
    },
    {
      type: "prose",
      text: "Stem + {{次第}} — **as soon as** (formal): {{準備ができ次第、連絡します}}. Also {{次第で}} — 'depending on'.",
    },
    {
      type: "examples",
      items: [
        { jp: "詳[くわ]しく調[しら]べた上[うえ]で、報告[ほうこく]します。", en: "I'll report after investigating in detail." },
        { jp: "会議[かいぎ]の最中[さいちゅう]に停電[ていでん]した。", en: "The power went out right in the middle of the meeting." },
        { jp: "着[つ]き次第[しだい]、お電話[でんわ]します。", en: "I'll call as soon as I arrive." },
        { jp: "就任[しゅうにん]にあたって、方針[ほうしん]を示[しめ]す。", en: "On taking office, I will set out the policy." },
        { jp: "二週間[しゅうかん]にわたって、協議[きょうぎ]が続[つづ]いた。", en: "Negotiations continued over two weeks." },
      ],
    },
    {
      type: "tip",
      text: "In casual chat, simpler forms ({{…たら}}, {{…てる間}}) usually suffice. Reach for these when the genre is leadership, HR, or formal reporting.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Before I forget」 — natural?",
      choices: ["忘れるうちに", "忘れないうちに", "忘れた上で", "忘れ最中に"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Formal: report after confirming?",
      choices: ["確認してから", "確認した上で", "確認したうちに", "確認した次第"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Right in the middle of reporting?",
      choices: ["報告している間", "報告している最中に", "報告した上で", "報告するうちに"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "準備ができ___、連絡します — as soon as ready?",
      choices: ["うちに", "次第", "際に", "にわたって"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "三年間___調査した — throughout?",
      choices: ["うちに", "上で", "にわたって", "次第"],
      answer: 2,
    },
    {
      kind: "order",
      prompt: "Build: 'I'll report after confirming'",
      tiles: ["確認[かくにん]した", "上[うえ]で", "報告[ほうこく]します"],
      distractors: ["うちに"],
      explanation: "上で = after doing as a prerequisite; うちに = while still.",
    },
  ],
  drills: [
    { id: "uede", prompt: "Fill — 'upon (after) confirming…'", jp: "確認[かくにん]した◯◯で", answers: ["上[うえ]"] },
    { id: "uchini", prompt: "Fill — 'while the chance still lasts'", jp: "機[き]会[かい]がある◯◯に", answers: ["うち"] },
    { id: "saichuu", prompt: "Fill — 'in the very middle of the meeting'", jp: "会議[かいぎ]の◯◯◯◯", answers: ["最中[さいちゅう]"] },
    { id: "sai", prompt: "Fill — formal 'on the occasion of'", jp: "就任[しゅうにん]の◯◯", answers: ["際[さい]"] },
    { id: "shidai", prompt: "Fill — 'as soon as it's confirmed'", jp: "確認[かくにん]◯◯◯", answers: ["次第[しだい]"] },
  ],
};
