import type { Lesson } from "../types";

export const compoundSentences: Lesson = {
  id: "compound-sentences",
  stage: "essential-grammar",
  order: 4,
  title: "Compound Sentences",
  subtitle: "Chaining states with で · verbs with the te-form · から and ので",
  summary:
    "Combine adjectives, nouns, and verbs into one sentence — and express reason with から and ので.",
  estMinutes: 18,
  vocabulary: [
    { word: "静[しず]か", reading: "しずか", meaning: "quiet (na-adj)" },
    { word: "狭[せま]い", reading: "せまい", meaning: "narrow; cramped" },
    { word: "図書館[としょかん]", reading: "としょかん", meaning: "library" },
    { word: "昼[ひる]ご飯[はん]", reading: "ひるごはん", meaning: "lunch" },
    { word: "忙[いそが]しい", reading: "いそがしい", meaning: "busy" },
    { word: "時間[じかん]", reading: "じかん", meaning: "time" },
  ],
  blocks: [
    {
      type: "prose",
      text: "When several descriptions share the same subject, Japanese **chains** them instead of repeating full sentences. Nouns and na-adjectives use {{で}}; i-adjectives change {{い}} → {{くて}}; verbs use the **te-form**.",
    },
    {
      type: "rule",
      title: "Chaining nouns & na-adjectives",
      items: [
        "Attach {{で}}: {{静か}} → {{静かで}}.",
        "Last item keeps normal ending: {{静かで、きれいで、好き}}.",
        "Think of {{で}} as chained {{だ}} — not the location particle {{で}}.",
      ],
    },
    {
      type: "rule",
      title: "Chaining i-adjectives & negatives",
      items: [
        "Replace {{い}} with {{くて}}: {{狭い}} → {{狭くて}}.",
        "{{いい}} → {{よくて}}; {{かっこいい}} → {{かっこよくて}}.",
        "Negative noun/na: {{じゃない}} → {{じゃなくて}}.",
      ],
    },
    {
      type: "examples",
      title: "Chaining states",
      items: [
        { jp: "この喫茶店[きっさてん]は、静[しず]かで、おしゃれで、とても好[す]き。", en: "This café is quiet, stylish, and I like it a lot." },
        { jp: "山田[やまだ]さんは、親切[しんせつ]で、明[あか]るくて、頼[たよ]りになりますね。", en: "Yamada is kind, cheerful, and dependable, isn't she?" },
      ],
    },
    {
      type: "heading",
      text: "Chaining verbs (sequence)",
    },
    {
      type: "prose",
      text: "Verbs chain with the **te-form** (or {{で}} from past {{だ}}). The sequence reads as 'did X, then Y, then Z'. Tense is fixed by the **final** verb.",
    },
    {
      type: "examples",
      items: [
        { jp: "図書館[としょかん]に行[い]って、宿題[しゅくだい]をして、家[いえ]に帰[かえ]る。", en: "Go to the library, do homework, and head home." },
        { jp: "図書館[としょかん]に行[い]って、宿題[しゅくだい]をして、家[いえ]に帰[かえ]った。", en: "Went to the library, did homework, and headed home." },
      ],
    },
    {
      type: "heading",
      text: "Reason: から vs ので",
    },
    {
      type: "rule",
      title: "Because / so",
      items: [
        "**{{から}}** — subjective reason; sounds like your excuse or opinion. {{時間がないから、行かない}}.",
        "**{{ので}}** — softer, more objective; polite {{ます}} → {{ので}} (not {{から}} after ます). {{時間がないので、行きません}}.",
        "Both attach to plain form (or な-adj + {{な}} / noun + {{な}} before ので in casual).",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "お金[かね]がないから、旅行[りょこう]に行[い]かない。", en: "Because there's no money, (I) won't go on the trip." },
        { jp: "ちょっと忙[いそが]しいので、失礼[しつれい]します。", en: "I'm a little busy, so excuse me. (polite)" },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Chain 静か (na-adj)?",
      choices: ["静かくて", "静かで", "静かに", "静かだて"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Chain 狭い (i-adj)?",
      choices: ["狭いで", "狭くて", "狭いく", "狭まって"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Softer, objective 'because' in polite speech?",
      choices: ["から", "ので", "のに", "けど"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Verb sequence: eat then go?",
      choices: ["食べる、行く", "食べて、行く", "食べ、行って", "食べた、行く"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'It's a cheap and tasty restaurant'",
      tiles: ["安[やす]くて", "おいしい", "店[みせ]だ"],
      distractors: ["安[やす]いで"],
      explanation: "I-adjectives chain with くて: 安い → 安くて. 安いで is a common error.",
    },
  ],
  drills: [
    { id: "na-chain", prompt: "Chain them — 'quiet and cramped'", jp: "静[しず]か ＋ 狭[せま]い", answers: ["静[しず]かで狭[せま]い"] },
    { id: "i-chain", prompt: "Chain them — 'cramped and quiet'", jp: "狭[せま]い ＋ 静[しず]か", answers: ["狭[せま]くて静[しず]か"] },
    { id: "negative-chain", prompt: "Chain the negative — 'not cramped, and…'", jp: "狭[せま]くない", answers: ["狭[せま]くなくて"] },
    { id: "node", prompt: "Fill the soft 'because' — 'since I'm busy…'", jp: "忙[いそが]しい◯◯、…", answers: ["ので"] },
    { id: "kara", prompt: "Fill the direct 'because' — 'as there's no time…'", jp: "時間[じかん]がない◯◯、…", answers: ["から"] },
  ],
};
