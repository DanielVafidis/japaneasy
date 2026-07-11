import type { Lesson } from "../types";

export const potentialForm: Lesson = {
  id: "potential-form",
  stage: "n4",
  order: 5,
  title: "Potential Form",
  subtitle: "Can / be able to",
  summary:
    "Talk about ability at work, school, and on the commute — conjugation, が vs を, and 見える / 聞こえる.",
  estMinutes: 18,
  vocabulary: [
    { word: "話[はな]す", reading: "はなす", meaning: "to speak" },
    { word: "書[か]く", reading: "かく", meaning: "to write" },
    { word: "読[よ]む", reading: "よむ", meaning: "to read" },
    { word: "乗[の]る", reading: "のる", meaning: "to ride; to board" },
    { word: "日本語[にほんご]", reading: "にほんご", meaning: "Japanese language" },
    { word: "漢字[かんじ]", reading: "かんじ", meaning: "kanji" },
    { word: "残業[ざんぎょう]", reading: "ざんぎょう", meaning: "overtime" },
    { word: "山[やま]", reading: "やま", meaning: "mountain" },
    { word: "声[こえ]", reading: "こえ", meaning: "voice" },
    { word: "終電[しゅうでん]", reading: "しゅうでん", meaning: "last train" },
    { word: "進[すす]む", reading: "すすむ", meaning: "to advance; go forward" },
    { word: "引[ひ]く", reading: "ひく", meaning: "to pull" },
  ],
  blocks: [
    {
      type: "prose",
      text: "The **potential form** answers 'can you…?' — speak Japanese, read the board, catch the last train. Ru-verbs swap {{る}} for {{られる}}; u-verbs shift to the /e/ row + {{る}}. Irregulars: {{する}} → {{できる}}, {{来る}} → {{来られる}}.",
    },
    {
      type: "rule",
      title: "Conjugation",
      items: [
        "**Ru-verbs:** {{食べる}} → {{食べられる}} (casual {{食べれる}} is common).",
        "**U-verbs:** {{話す}} → {{話せる}}, {{書く}} → {{書ける}}, {{読む}} → {{読める}}, {{乗る}} → {{乗れる}}.",
        "**Exceptions:** {{する}} → {{できる}}, {{来る}} → {{来られる}}.",
      ],
    },
    {
      type: "heading",
      text: "Particles: を → が",
    },
    {
      type: "prose",
      text: "With potential, the thing you **can do** often takes {{が}} instead of {{を}} — you're highlighting ability, not a normal object.",
    },
    {
      type: "examples",
      items: [
        { jp: "日本語[にほんご]が話[はな]せます。", en: "I can speak Japanese." },
        { jp: "漢字[かんじ]が少[すこ]し読[よ]める。", en: "I can read a little kanji." },
        { jp: "終電[しゅうでん]に乗[の]れますか。", en: "Can you catch the last train?" },
        { jp: "今日[きょう]は残業[ざんぎょう]できない。", en: "I can't do overtime today." },
      ],
    },
    {
      type: "dialogue",
      title: "At school / work",
      lines: [
        { speaker: "A", jp: "この漢字[かんじ]、読[よ]める？", en: "Can you read this kanji?" },
        { speaker: "B", jp: "うーん、まだ読[よ]めない。教[おし]えて？", en: "Hmm, I still can't. Teach me?" },
        { speaker: "A", jp: "会議[かいぎ]の資料[しりょう]、一人[ひとり]で書[か]ける？", en: "Can you write the meeting materials alone?" },
        { speaker: "B", jp: "時間[じかん]があれば書[か]けるよ。", en: "If there's time, I can." },
      ],
    },
    {
      type: "heading",
      text: "見える vs 見られる · 聞こえる vs 聞ける",
    },
    {
      type: "rule",
      title: "Spontaneous vs ability",
      items: [
        "**{{見える}}** — is visible: {{山が見える}}.",
        "**{{見られる}}** — can watch / able to see: {{映画が見られる}}.",
        "**{{聞こえる}}** — is audible: {{声が聞こえる}}.",
        "**{{聞ける}}** — can listen: {{ラジオが聞ける}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "窓[まど]から富士山[ふじさん]が見[み]える日[ひ]がある。", en: "Some days you can see Mt. Fuji from the window." },
        { jp: "騒[さわ]がしくて、アナウンスが聞[き]こえない。", en: "It's so noisy I can't hear the announcement." },
        { jp: "今夜[こんや]は試合[しあい]が見[み]られる。", en: "I can watch the match tonight." },
      ],
    },
    {
      type: "tip",
      text: "{{できる}} also stands alone: {{日本語ができる}} ≈ 'can do Japanese' / speaks Japanese.",
    },
    {
      type: "note",
      text: "Ru-verb {{食べられる}} can be potential **or** passive — context decides. U-verbs split: {{読まれる}} passive, {{読める}} potential.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Potential of 話す?",
      choices: ["話される", "話せる", "話しれる", "話できる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Potential of する?",
      choices: ["すれる", "できる", "しられる", "せる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「I can speak Japanese」 — natural particle?",
      choices: ["日本語を話せる", "日本語が話せる", "日本語に話せる", "日本語で話せる (ability)"],
      answer: 1,
      explanation: "が commonly marks the skill/object of ability.",
    },
    {
      kind: "mc",
      prompt: "「The mountain is visible」?",
      choices: ["山が見られる", "山が見える", "山を見える", "山が見えられる"],
      answer: 1,
    },
    {
      kind: "fill",
      prompt: "Potential of 読む — 'can read':",
      answers: ["読める", "よめる"],
      explanation: "む → める.",
    },
    {
      kind: "order",
      prompt: "Build: 'I can read a little kanji'",
      tiles: ["漢字[かんじ]が", "少[すこ]し", "読[よ]める"],
      distractors: ["読[よ]まれる"],
      explanation: "読める = potential; 読まれる = passive.",
    },
  ],
  drills: [
    { id: "ru-potential", prompt: "Potential — 'can eat'", jp: "食[た]べる", answers: ["食[た]べられる", "食[た]べれる"] },
    { id: "su-potential", prompt: "Potential — 'can speak'", jp: "話[はな]す", answers: ["話[はな]せる"] },
    { id: "ku-potential", prompt: "Potential — 'can write'", jp: "書[か]く", answers: ["書[か]ける"] },
    { id: "mu-potential", prompt: "Potential — 'can read'", jp: "読[よ]む", answers: ["読[よ]める"] },
    { id: "suru-potential", prompt: "Potential — exception", jp: "する", answers: ["できる"] },
    { id: "noru-potential", prompt: "Potential — 'can board/ride'", jp: "乗[の]る", answers: ["乗[の]れる"] },
  ],
};
