import type { Lesson } from "../types";

export const genericNouns: Lesson = {
  id: "generic-nouns",
  stage: "n2",
  order: 3,
  title: "Generic Nouns",
  subtitle: "こと · の · ところ · もの",
  summary:
    "Package subtle communication — facts, observed actions, timing snapshots, and excuses — with こと, の, ところ, and もの.",
  estMinutes: 17,
  vocabulary: [
    { word: "こと", reading: "こと", meaning: "thing (abstract); matter; event" },
    { word: "失敗[しっぱい]", reading: "しっぱい", meaning: "failure" },
    { word: "意見[いけん]", reading: "いけん", meaning: "opinion" },
    { word: "苦手[にがて]", reading: "にがて", meaning: "poor at; dislike" },
    { word: "交渉[こうしょう]", reading: "こうしょう", meaning: "negotiation" },
    { word: "夕飯[ゆうはん]", reading: "ゆうはん", meaning: "dinner" },
    { word: "海外[かいがい]", reading: "かいがい", meaning: "overseas; abroad" },
    { word: "会議[かいぎ]", reading: "かいぎ", meaning: "meeting" },
  ],
  blocks: [
    {
      type: "prose",
      text: "{{の}} and {{こと}} nominalize clauses. In subtle talk — soft opinions, career reflection, conflict avoidance — the choice often marks whether you mean an **abstract matter** ({{こと}}) or something **observable** ({{の}}).",
    },
    {
      type: "rule",
      title: "Rough split",
      items: [
        "**{{こと}}** — events, experiences, matters: {{転職すること}} · {{話すこと}}.",
        "**{{の}}** — things you perceive: {{怒っているのを見た}} · {{言うのが苦手}}.",
        "Ability: {{話すことができる}} is the usual experience/ability frame.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "意見[いけん]を言[い]うのが苦手[にがて]だ。", en: "I'm bad at stating opinions. (skill / habit — often の)" },
        { jp: "交渉[こうしょう]を続[つづ]けることにした。", en: "I decided to continue the negotiation. (matter)" },
        { jp: "彼[かれ]が黙[だま]っているのを見[み]た。", en: "I saw him staying silent. (observed)" },
        { jp: "海外[かいがい]で働[はたら]いたことがある。", en: "I have worked abroad before. (experience)" },
      ],
    },
    {
      type: "heading",
      text: "こと for rules and packaged facts",
    },
    {
      type: "prose",
      text: "Use {{こと}} for **rules, instructions, or hearsay as fact**: {{ここで喫煙しないこと}}. Soft communication often packages a request as a {{こと}}.",
    },
    {
      type: "heading",
      text: "ところ — point in the action",
    },
    {
      type: "rule",
      title: "Three snapshots",
      items: [
        "**Dictionary + {{ところ}}** — about to: {{出かけるところ}}.",
        "**{{ている}} + {{ところ}}** — mid-action: {{交渉しているところ}}.",
        "**Past + {{ところ}}** — just finished: {{着いたところ}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "ごめん、今[いま]から会議[かいぎ]に入[はい]るところなんだ。", en: "Sorry — I'm just about to go into a meeting." },
        { jp: "今[いま]、夕飯[ゆうはん]を作[つく]っているところ。", en: "I'm right in the middle of making dinner." },
        { jp: "たった今[いま]、結論[けつろん]が出[で]たところです。", en: "A conclusion just came out this moment." },
      ],
    },
    {
      type: "note",
      text: "{{〜たところ}} pins the exact moment; {{〜たばかり}} says it still *feels* recent — {{先月転職したばかり}} works; {{先月転職したところ}} does not.",
    },
    {
      type: "heading",
      text: "もの — excuses and general truths",
    },
    {
      type: "prose",
      text: "Sentence-final {{（だ）もの}}／{{（だ）もん}} gives a plaintive excuse; {{ものだ}} states a **general truth** about how life or work simply is.",
    },
    {
      type: "examples",
      items: [
        { jp: "だって、疲[つか]れてるんだもん。", en: "But I'm tired! (excuse)" },
        { jp: "人[ひと]は失敗[しっぱい]から学[まな]ぶものだ。", en: "People learn from failure — that's how it is." },
      ],
    },
    {
      type: "dialogue",
      title: "Subtle pushback",
      lines: [
        { speaker: "A", jp: "今日[きょう]中[じゅう]に決[き]めること、できる？", en: "Can we make deciding today a thing?" },
        { speaker: "B", jp: "今[いま]、調[しら]べているところなんだ。急[いそ]ぐのは難[むずか]しいと思う。", en: "I'm right in the middle of looking into it. I think rushing is hard." },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Have worked abroad before」 — natural?",
      choices: ["海外で働いたのがある", "海外で働いたことがある", "海外で働くのがある", "both A and B"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Saw him staying silent」?",
      choices: ["黙っていることを見た", "黙っているのを見た", "黙ったこと", "黙るのが見た"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Written rule: 「Don't enter here」?",
      choices: ["入るの", "入ること", "入ったの", "入るもの"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "交渉しているところ means…",
      choices: ["right in the middle of negotiating", "about to negotiate", "just finished negotiating", "a place to negotiate"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "だって、疲れてるんだもん — the もん adds…",
      choices: ["a childlike 'because…!' excuse", "a formal conclusion", "a question", "past tense"],
      answer: 0,
    },
    {
      kind: "order",
      prompt: "Build: 'I have negotiated overseas before'",
      tiles: ["海外[かいがい]で", "交渉[こうしょう]したことが", "ある"],
      distractors: ["交渉[こうしょう]することが"],
      explanation: "Experience = past + ことがある.",
    },
  ],
  drills: [
    { id: "nominalize", prompt: "Fill the nominalizer — 'I'm bad at saying'", jp: "言[い]う◯が苦手[にがて]", answers: ["の", "こと"] },
    { id: "tokoro", prompt: "Fill — 'just about to decide'", jp: "決[き]める◯◯◯だ", answers: ["ところ"] },
    { id: "mono", prompt: "Fill — general truth: 'people make mistakes'", jp: "人[ひと]は失敗[しっぱい]する◯◯だ", answers: ["もの"] },
    { id: "koto", prompt: "Fill — abstract matter: 'talk about the opinion'", jp: "意見[いけん]の◯◯を話[はな]す", answers: ["こと"] },
  ],
};
