import type { Lesson } from "../types";

export const hypothesizing: Lesson = {
  id: "hypothesizing",
  stage: "n3",
  order: 12,
  title: "Hypothesizing & Concluding",
  subtitle: "かどうか · とする · かと思う · わけ",
  summary:
    "Wonder whether, suppose for argument's sake, and wrap up conditional plans — without rehashing ば／なら／ても (see Conditionals with Nuance).",
  estMinutes: 16,
  vocabulary: [
    { word: "年収[ねんしゅう]", reading: "ねんしゅう", meaning: "annual income" },
    { word: "結局[けっきょく]", reading: "けっきょく", meaning: "after all; in the end" },
    { word: "試[ため]す", reading: "ためす", meaning: "to try" },
    { word: "転職[てんしょく]", reading: "てんしょく", meaning: "changing jobs" },
    { word: "鍵[かぎ]", reading: "かぎ", meaning: "key" },
    { word: "計画[けいかく]", reading: "けいかく", meaning: "plan" },
    { word: "大丈夫[だいじょうぶ]", reading: "だいじょうぶ", meaning: "OK; fine" },
    { word: "怒[おこ]る", reading: "おこる", meaning: "to get angry" },
  ],
  blocks: [
    {
      type: "prose",
      text: "For **conditional plans** and soft conclusions you need more than {{たら}} / {{ば}}. This lesson keeps the unique tools: **whether**, **suppose**, **I wonder if**, and a quick look at {{わけ}}. Full {{ても}} / {{ば}} / {{なら}} live in **Conditionals with Nuance** — we won't retread them here.",
    },
    {
      type: "heading",
      text: "Whether or not: 〜かどうか",
    },
    {
      type: "prose",
      text: "Embed a **yes/no question** with {{かどうか}} — 'whether (or not)'. Inner clause is plain; no trailing {{か}} on the embedded part.",
    },
    {
      type: "examples",
      items: [
        { jp: "転職[てんしょく]するかどうか、まだ決[き]めていない。", en: "Haven't decided yet whether to change jobs." },
        { jp: "彼[かれ]が来[く]るかどうか分[わ]からない。", en: "Don't know whether he's coming." },
        { jp: "その計画[けいかく]がうまくいくかどうか、試[ため]してみよう。", en: "Let's try and see whether that plan works." },
      ],
    },
    {
      type: "heading",
      text: "Suppose: 〜とする",
    },
    {
      type: "prose",
      text: "{{とする}} sets up a **hypothetical** for argument's sake: {{来月転職したとする}} — 'Suppose I changed jobs next month.' Also: volitional + {{とする}} = try to: {{出かけようとした}} — 'tried to leave.'",
    },
    {
      type: "examples",
      items: [
        { jp: "年収[ねんしゅう]が上[あ]がったとする。どう使[つか]う？", en: "Suppose your salary went up. How would you use it?" },
        { jp: "雨[あめ]だとしても、行[い]くつもりだ。", en: "Even supposing it's rain, I still plan to go." },
        { jp: "ドアを開[あ]けようとしたが、鍵[かぎ]がかかっていた。", en: "I tried to open the door, but it was locked." },
      ],
    },
    {
      type: "heading",
      text: "Wondering: 〜かと思う",
    },
    {
      type: "prose",
      text: "Plain + {{かと思[おも]う}} — 'I wonder if…' / 'I thought maybe…': {{もう帰ったかと思った}}. Soft way to float a guess about plans and relationships.",
    },
    {
      type: "examples",
      items: [
        { jp: "もう怒[おこ]ったかと思[おも]った。", en: "I thought maybe they'd gotten angry." },
        { jp: "今日[きょう]中[じゅう]に終[お]わるかと思[おも]う。", en: "I think / wonder if it'll finish today." },
      ],
    },
    {
      type: "heading",
      text: "Quick wrap: わけ",
    },
    {
      type: "rule",
      title: "わけ — reasoned conclusion (taste)",
      items: [
        "{{わけだ}} — 'so that means… / no wonder': {{だから遅れたわけだ}}.",
        "{{わけがない}} — 'there's no way': {{彼が忘れるわけがない}}.",
        "{{わけにはいかない}} — 'can't very well…' (social constraint): {{断るわけにはいかない}}.",
        "Deeper {{わけ}} patterns appear again at higher levels; here just recognize these three.",
      ],
    },
    {
      type: "dialogue",
      title: "Conditional career plan",
      lines: [
        { speaker: "A", jp: "転職[てんしょく]するかどうか、悩[なや]んでる。", en: "I'm stuck on whether to change jobs." },
        { speaker: "B", jp: "仮[かり]に辞[や]めたとする。次[つぎ]の仕事[しごと]は決[き]まってる？", en: "Suppose you quit. Is the next job lined up?" },
        { speaker: "A", jp: "まだ。結局[けっきょく]、今[いま]の会社[かいしゃ]に残[のこ]るわけだな…。", en: "Not yet. So that means I stay at this company after all…" },
      ],
    },
    {
      type: "tip",
      text: "Need 'even if' / 'if it's the case that' / general conditions? Use **Conditionals with Nuance** ({{ても}} · {{なら}} · {{ば}} · {{限り}}). This lesson is for whether / suppose / wonder / わけ.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Don't know whether he passed」?",
      choices: ["合格した", "合格したかどうか分からない", "合格するか", "合格したか"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Suppose / hypothetically — which ending?",
      choices: ["とする", "かも", "ばかり", "すぎる"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "「Tried to leave」?",
      choices: ["出かけた", "出かけようとした", "出かけるかどうか", "出かけるわけ"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "彼が忘れるわけがない means…",
      choices: ["he might forget", "no way he'll forget", "he forgot", "I wonder if he forgot"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「I thought maybe they'd already gone home」?",
      choices: ["帰ったと思う", "帰ったかと思った", "帰るとする", "帰るかどうか"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'Haven't decided whether to change jobs'",
      tiles: ["転職[てんしょく]するかどうか", "まだ", "決[き]めていない"],
      distractors: ["転職[てんしょく]するわけ"],
      explanation: "かどうか embeds the whether-question; わけ would be a conclusion.",
    },
  ],
  drills: [
    { id: "kadouka", prompt: "Fill — 'whether or not (I'll) change jobs'", jp: "転職[てんしょく]する◯◯◯◯", answers: ["かどうか"] },
    { id: "tosuru", prompt: "Fill — 'suppose (hypothetically) I go'", jp: "行[い]く◯する", answers: ["と"] },
    { id: "katoomou", prompt: "Fill — '(I) wondered if it was OK'", jp: "大丈夫[だいじょうぶ]◯◯思[おも]った", answers: ["かと"] },
    { id: "wakeganai", prompt: "Fill — 'no way he'll forget'", jp: "忘[わす]れる◯◯が◯◯", answers: ["わけがない"] },
  ],
};
