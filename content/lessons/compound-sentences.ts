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
    { word: "食堂[しょくどう]", reading: "しょくどう", meaning: "cafeteria" },
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
        { jp: "私[わたし]の部屋[へや]は、きれいで、静[しず]かで、とても好[す]き。", en: "My room is clean, quiet, and I like it a lot." },
        { jp: "田中[たなか]さんは、お金[かね]持[も]ちで、かっこよくて、魅力的[みりょくてき]ですね。", en: "Tanaka is rich, handsome, and charming, isn't he?" },
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
        { jp: "食堂[しょくどう]に行[い]って、昼[ひる]ご飯[はん]を食[た]べて、昼寝[ひるね]をする。", en: "Go to the cafeteria, eat lunch, and take a nap." },
        { jp: "食堂[しょくどう]に行[い]って、昼[ひる]ご飯[はん]を食[た]べて、昼寝[ひるね]をした。", en: "Went to the cafeteria, ate lunch, and took a nap." },
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
        { jp: "時間[じかん]がないから、パーティーに行[い]かない。", en: "Because there's no time, (I) won't go to the party." },
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
  ],
};
