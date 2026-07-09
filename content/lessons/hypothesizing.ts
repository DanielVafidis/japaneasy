import type { Lesson } from "../types";

export const hypothesizing: Lesson = {
  id: "hypothesizing",
  stage: "special-expressions",
  order: 8,
  title: "Hypothesizing & Concluding",
  subtitle: "かどうか · ても · とする · かと思う",
  summary:
    "Wonder whether, suppose something for argument's sake, and say 'even if' without giving up.",
  estMinutes: 16,
  vocabulary: [
    { word: "留学[りゅうがく]", reading: "りゅうがく", meaning: "study abroad" },
    { word: "結局[けっきょく]", reading: "けっきょく", meaning: "after all; in the end" },
    { word: "試[ため]す", reading: "ためす", meaning: "to try" },
    { word: "遅[おく]れる", reading: "おくれる", meaning: "to be late" },
    { word: "大丈夫[だいじょうぶ]", reading: "だいじょうぶ", meaning: "OK; fine" },
  ],
  blocks: [
    {
      type: "heading",
      text: "Whether or not: 〜かどうか",
    },
    {
      type: "prose",
      text: "Embed a **yes/no question** inside a larger sentence with {{かどうか}} — 'whether (or not)'. The inner clause is plain form; no {{か}} at the end of the embedded part.",
    },
    {
      type: "examples",
      items: [
        { jp: "留学[りゅうがく]するかどうか、まだ決[き]めていない。", en: "Haven't decided yet whether to study abroad." },
        { jp: "彼[かれ]が来[く]るかどうか分[わ]からない。", en: "Don't know whether he's coming." },
        { jp: "おいしいかどうか、食[た]べてみて。", en: "Try it and see whether it's good." },
      ],
    },
    {
      type: "heading",
      text: "Even if: 〜ても / 〜でも",
    },
    {
      type: "rule",
      title: "Formation",
      items: [
        "Verbs: **te-form + {{も}}** — {{雨[あめ]が降[ふ]っても}} (even if it rains).",
        "Nouns / na-adjectives: **{{でも}}** — {{子供[こども]でも}} · {{暇[ひま]でも}}.",
        "Casual emphasis: {{〜たって}} — {{行[い]きたくないって言[い]われたって}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "遅[おく]れても、大丈夫[だいじょうぶ]ですか。", en: "Is it OK even if I'm late?" },
        { jp: "子供[こども]でも分[わ]かる。", en: "Even a child can understand." },
        { jp: "結局[けっきょく]、行[い]かないと決[き]めた。", en: "In the end, decided not to go." },
      ],
    },
    {
      type: "heading",
      text: "Suppose: 〜とする",
    },
    {
      type: "prose",
      text: "{{とする}} means 'suppose' or 'pretend' — setting up a hypothetical: {{100万円[まんえん]もらったとする}} — 'Suppose you got a million yen.' Volitional + {{とする}}: {{行[い]こうとする}} — 'try to go'.",
    },
    {
      type: "heading",
      text: "Wondering: 〜かと思う",
    },
    {
      type: "prose",
      text: "Plain form + {{かと思[おも]う}} — 'I wonder if…' Softer than a direct question: {{雨[あめ]が降[ふ]るかと思[おも]った}} — 'I thought it might rain.'",
    },
    {
      type: "examples",
      items: [
        { jp: "もう帰[かえ]ったかと思[おも]った。", en: "I wondered if they'd already gone home." },
        { jp: "試[ため]してみようと思[おも]う。", en: "I think I'll try it." },
      ],
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
      prompt: "「Even if it rains」?",
      choices: ["雨が降る", "雨が降っても", "雨が降ると", "雨が降った"],
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
      prompt: "Even a student (noun) — pattern?",
      choices: ["学生ても", "学生でも", "学生だけ", "学生しか"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'There's no way he's not coming'",
      tiles: ["彼[かれ]が", "来[こ]ないわけが", "ない"],
      distractors: ["来[こ]ないこと"],
      explanation: "わけがない = no way that…",
    },
  ],
  drills: [
    { id: "kadouka", prompt: "Fill — 'whether or not (I'll) study abroad'", jp: "留学[りゅうがく]する◯◯◯◯", answers: ["かどうか"] },
    { id: "temo", prompt: "Add 'even if' — 'even if (I'm) late'", jp: "遅[おく]れる", answers: ["遅[おく]れても"] },
    { id: "tosuru", prompt: "Fill — 'suppose (hypothetically) I go'", jp: "行[い]く◯する", answers: ["と"] },
    { id: "katoomou", prompt: "Fill — '(I) wondered if it was OK'", jp: "大丈夫[だいじょうぶ]◯◯思[おも]った", answers: ["かと"] },
  ],
};
