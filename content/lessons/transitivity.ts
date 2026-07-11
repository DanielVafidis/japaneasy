import type { Lesson } from "../types";

export const transitivity: Lesson = {
  id: "transitivity",
  stage: "n4",
  order: 13,
  title: "Transitive & Intransitive Verbs",
  subtitle: "開ける／開く · 消す／消える · pairs",
  summary:
    "Describe who does what at home, school, and on the train — transitive (を) vs intransitive (が) verb pairs.",
  estMinutes: 14,
  vocabulary: [
    { word: "開[あ]ける", reading: "あける", meaning: "to open (something) — transitive" },
    { word: "開[あ]く", reading: "あく", meaning: "(something) opens — intransitive" },
    { word: "閉[し]める", reading: "しめる", meaning: "to close (something)" },
    { word: "閉[し]まる", reading: "しまる", meaning: "(something) closes" },
    { word: "消[け]す", reading: "けす", meaning: "to turn off / erase" },
    { word: "消[き]える", reading: "きえる", meaning: "to go out / disappear" },
    { word: "出[だ]す", reading: "だす", meaning: "to take out; to submit" },
    { word: "出[で]る", reading: "でる", meaning: "to leave; to come out" },
    { word: "電気[でんき]", reading: "でんき", meaning: "electricity; light" },
    { word: "ドア", reading: "ドア", meaning: "door" },
  ],
  blocks: [
    {
      type: "prose",
      text: "A **transitive** verb needs an actor doing something to an object ({{ドアを開ける}}). An **intransitive** verb describes something happening on its own ({{ドアが開く}}). Japanese loves matched pairs for the same event.",
    },
    {
      type: "rule",
      title: "The key difference",
      items: [
        "**Transitive** — object with {{を}}: someone does it.",
        "**Intransitive** — subject with {{が}}: it happens / changes by itself.",
        "Pairs ending in {{す}} are often transitive ({{出す}}, {{消す}}); partners ({{出る}}, {{消える}}) intransitive.",
      ],
    },
    {
      type: "examples",
      title: "Same scene, two viewpoints",
      items: [
        { jp: "窓[まど]を開[あ]けてください。", en: "Please open the window. — transitive" },
        { jp: "風[かぜ]で窓[まど]が開[あ]いた。", en: "The window opened in the wind. — intransitive" },
        { jp: "電気[でんき]を消[け]して。", en: "Turn off the light." },
        { jp: "急[きゅう]に電気[でんき]が消[き]えた。", en: "The lights suddenly went out." },
        { jp: "宿題[しゅくだい]を出[だ]した。", en: "I submitted the homework." },
        { jp: "駅[えき]を出[で]たら、雨[あめ]が降[ふ]っていた。", en: "When I left the station, it was raining." },
      ],
    },
    {
      type: "table",
      caption: "Common pairs",
      headers: ["Transitive (を)", "Intransitive (が)"],
      rows: [
        ["開ける — open it", "開く — it opens"],
        ["閉める — close it", "閉まる — it closes"],
        ["消す — turn it off", "消える — it goes out"],
        ["出す — take out / submit", "出る — leave / come out"],
        ["始める — start it", "始まる — it starts"],
        ["付ける — attach / turn on", "付く — it attaches / turns on"],
      ],
    },
    {
      type: "dialogue",
      title: "Classroom / office",
      lines: [
        { speaker: "A", jp: "ドア、閉[し]めてくれる？", en: "Can you close the door for me?" },
        { speaker: "B", jp: "あ、もう閉[し]まってるよ。", en: "Oh — it's already closed." },
        { speaker: "A", jp: "電気[でんき]は？まだ付[つ]いてる？", en: "What about the lights? Still on?" },
        { speaker: "B", jp: "消[け]しておくね。", en: "I'll turn them off (in advance)." },
      ],
    },
    {
      type: "tip",
      text: "If you want to put {{を}} before a verb and it feels wrong, you probably need the **transitive** partner — or you're describing a state with the intransitive + {{ている}} ({{開いている}}).",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「The door opens (by itself)」?",
      choices: ["ドアを開ける。", "ドアが開く。", "ドアを開く。", "ドアに開ける。"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Transitive object particle?",
      choices: ["が", "を", "に", "で"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Which is intransitive?",
      choices: ["開ける", "出す", "消える", "消す"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "「Turn off the light」?",
      choices: ["電気が消える", "電気を消す", "電気が消す", "電気を消える"],
      answer: 1,
    },
    {
      kind: "fill",
      prompt: "Intransitive partner of 開ける:",
      answers: ["開く", "あく"],
      explanation: "開ける (open it) ↔ 開く (it opens).",
    },
    {
      kind: "order",
      prompt: "Build: 'The door opened from the wind'",
      tiles: ["風[かぜ]で", "ドアが", "開[あ]いた"],
      distractors: ["開[あ]けた"],
      explanation: "Intransitive 開く — 開けた needs an agent + を.",
    },
  ],
  drills: [
    { id: "intransitive-partner", prompt: "Intransitive partner — 'opens'", jp: "開[あ]ける → ？", answers: ["開[あ]く"] },
    { id: "transitive-partner", prompt: "Transitive partner — 'take out'", jp: "出[で]る → ？", answers: ["出[だ]す"] },
    { id: "transitive-wo", prompt: "Particle — open the door", jp: "ドア◯開[あ]ける", answers: ["を"] },
    { id: "intransitive-ga", prompt: "Particle — the door opens", jp: "ドア◯開[あ]く", answers: ["が"] },
    { id: "kesu-kieru", prompt: "Intransitive — 'the light goes out'", jp: "電気[でんき]が◯", answers: ["消[き]える"] },
  ],
};
