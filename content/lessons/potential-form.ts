import type { Lesson } from "../types";

export const potentialForm: Lesson = {
  id: "potential-form",
  stage: "essential-grammar",
  order: 7,
  title: "Potential Form",
  subtitle: "Can / be able to",
  summary:
    "Express ability with the potential verb form — and learn how が marks what you can do.",
  estMinutes: 18,
  vocabulary: [
    { word: "食[た]べる", reading: "たべる", meaning: "to eat" },
    { word: "見[み]る", reading: "みる", meaning: "to see" },
    { word: "話[はな]す", reading: "はなす", meaning: "to speak" },
    { word: "書[か]く", reading: "かく", meaning: "to write" },
    { word: "泳[およ]ぐ", reading: "およぐ", meaning: "to swim" },
    { word: "日本語[にほんご]", reading: "にほんご", meaning: "Japanese language" },
    { word: "山[やま]", reading: "やま", meaning: "mountain" },
    { word: "声[こえ]", reading: "こえ", meaning: "voice" },
    { word: "音[おと]", reading: "おと", meaning: "sound" },
    { word: "弾[ひ]く", reading: "ひく", meaning: "to play (an instrument) (u-verb)" },
    { word: "ピアノ", reading: "ピアノ", meaning: "piano" },
  ],
  blocks: [
    {
      type: "prose",
      text: "The **potential form** answers 'can you…?' For ru-verbs it's effortless: swap {{る}} for {{られる}}. U-verbs change their final syllable to the /e/ row and add {{る}}. Only two verbs stay irregular: {{する}} → {{できる}}, {{来る}} → {{来られる}}.",
    },
    {
      type: "rule",
      title: "Conjugation",
      items: [
        "**Ru-verbs:** {{見る}} → {{見られる}} ('can see'). In casual speech, {{見れる}} is very common.",
        "**U-verbs:** {{話す}} → {{話せる}}, {{書く}} → {{書ける}}, {{泳ぐ}} → {{泳げる}}.",
        "**Exceptions:** {{する}} → {{できる}}, {{来る}} → {{来られる}}.",
      ],
    },
    {
      type: "heading",
      text: "Particles: を → が",
    },
    {
      type: "prose",
      text: "When the verb becomes about **ability**, the object often takes {{が}} instead of {{を}} — because you're highlighting what is doable, not what you're acting on.",
    },
    {
      type: "examples",
      items: [
        { jp: "日本語[にほんご]が話[はな]せます。", en: "I can speak Japanese." },
        { jp: "漢字[かんじ]が読[よ]める。", en: "Can read kanji." },
        { jp: "ここで泳[およ]げる。", en: "Can swim here." },
        { jp: "ピアノが弾[ひ]ける？", en: "Can you play piano?" },
      ],
    },
    {
      type: "note",
      text: "Using {{を}} with potential is still heard: {{日本語を話せる}}. Both are acceptable; {{が}} emphasises ability.",
    },
    {
      type: "heading",
      text: "見える vs 見られる · 聞こえる vs 聞ける",
    },
    {
      type: "rule",
      title: "Natural ability vs potential form",
      items: [
        "**{{見[み]える}}** — visible / can see (spontaneous): {{山[やま]が見える}}.",
        "**{{見[み]られる}}** — can watch / able to see (potential): {{映画[えいが]が見られる}}.",
        "**{{聞[き]こえる}}** — audible: {{音[おと]が聞こえる}}.",
        "**{{聞[き]ける}}** — can listen / able to hear (effort): {{ラジオが聞ける}}.",
      ],
    },
    {
      type: "heading",
      text: "Negative & polite",
    },
    {
      type: "examples",
      items: [
        { jp: "日本語[にほんご]の新聞[しんぶん]は、まだ読[よ]めません。", en: "Can't read Japanese newspapers yet (polite)." },
        { jp: "ここでは泳[およ]げない。", en: "Can't swim here." },
        { jp: "彼[かれ]の声[こえ]が聞[き]こえない。", en: "Can't hear his voice." },
      ],
    },
    {
      type: "tip",
      text: "{{できる}} also works as a standalone helper: {{日本語ができる}} = 'can do Japanese' = speaks Japanese.",
    },
    {
      type: "note",
      text: "Ru-verb {{食[た]べられる}} can mean **potential** or **passive** — context decides. U-verbs avoid this: {{読[よ]まれる}} = passive only; {{読める}} = potential.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Potential form of 食べる?",
      choices: ["食べられる", "食べれる", "Both are common", "食べ可能"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "Potential form of する?",
      choices: ["すれる", "できる", "しられる", "せる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「I can speak Japanese」 — natural particle?",
      choices: ["日本語を話せる", "日本語が話せる", "日本語に話せる", "日本語で話せる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「The mountain is visible」?",
      choices: ["山が見られる", "山が見える", "山を見える", "山が見えられる"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'I can read a little kanji'",
      tiles: ["漢字[かんじ]が", "少[すこ]し", "読[よ]める"],
      distractors: ["読[よ]まれる"],
      explanation: "読める is potential; 読まれる is passive.",
    },
  ],
  drills: [
    { id: "ru-potential", prompt: "Make the potential — 'can eat'", jp: "食[た]べる", answers: ["食[た]べられる"] },
    { id: "su-potential", prompt: "Make the potential — 'can speak'", jp: "話[はな]す", answers: ["話[はな]せる"] },
    { id: "ku-potential", prompt: "Make the potential — 'can write'", jp: "書[か]く", answers: ["書[か]ける"] },
    { id: "gu-potential", prompt: "Make the potential — 'can swim'", jp: "泳[およ]ぐ", answers: ["泳[およ]げる"] },
    { id: "suru-potential", prompt: "Make the potential — exception", jp: "する", answers: ["できる"] },
    { id: "miru-potential", prompt: "Make the potential — 'can see'", jp: "見[み]る", answers: ["見[み]られる", "見[み]れる"] },
  ],
};
