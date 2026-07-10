import type { Lesson } from "../types";

export const recapBasicGrammar: Lesson = {
  id: "recap-basic-grammar",
  stage: "basic-grammar",
  order: 100,
  recap: true,
  title: "Stage Recap — Basic Grammar",
  subtitle: "Everything so far, mixed together",
  summary: "A synthesis of the core: だ, particles, adjectives, verbs, and clauses.",
  estMinutes: 10,
  blocks: [
    {
      type: "prose",
      text: "Eleven lessons in, you can already build real Japanese sentences. Before moving to polite form, take stock — everything below mixes freely from here on.",
    },
    {
      type: "rule",
      title: "What you can now say",
      items: [
        "Declare and negate states — {{学生だ・じゃない・だった・じゃなかった}}",
        "Mark topics and subjects — {{は}}, {{も}}, {{が}}, and noun links with {{の}}",
        "Conjugate both adjective types, including the {{いい → よかった}} exception",
        "Negate and past-tense every verb class ({{する・くる・行く}} exceptions included)",
        "Point verbs at the world — {{を}}, {{に}}, {{へ}}, {{で}}",
        "Describe nouns with whole clauses — {{先生が書いた本}}",
      ],
    },
    {
      type: "examples",
      title: "Putting it together",
      items: [
        {
          jp: "昨日[きのう]、静[しず]かな図書館[としょかん]へ行[い]った。",
          en: "Yesterday I went to the quiet library.",
        },
        {
          jp: "私[わたし]が買[か]った本[ほん]は高[たか]かった。",
          en: "The book I bought was expensive.",
        },
        {
          jp: "犬[いぬ]も猫[ねこ]も魚[さかな]を食[た]べなかった。",
          en: "Neither the dog nor the cat ate the fish.",
        },
        {
          jp: "ドアが開[あ]いたね。",
          en: "The door opened, didn't it?",
        },
      ],
    },
    {
      type: "tip",
      text: "Score below 60%? Revisit the lesson the missed question came from — each one maps to a single lesson in this stage.",
    },
  ],
  quiz: [
    {
      kind: "fill",
      prompt: "Fill the particle — 'eat fish':",
      promptJp: "魚[さかな]◯食[た]べる",
      answers: ["を"],
      explanation: "を marks the direct object (verb-particles).",
    },
    {
      kind: "fill",
      prompt: "Make it negative:",
      promptJp: "行[い]く",
      answers: ["行かない", "いかない"],
      explanation: "う-verbs: く → かない (negative-verbs).",
    },
    {
      kind: "mc",
      prompt: "Past tense of 飲む?",
      choices: ["飲んだ", "飲みた", "飲った", "飲んで"],
      answer: 0,
      explanation: "む → んだ (past-tense).",
    },
    {
      kind: "order",
      prompt: "Build: 'The book I bought was expensive'",
      tiles: ["私[わたし]が", "買[か]った", "本[ほん]は", "高[たか]かった"],
      distractors: ["高[たか]いだった"],
      explanation: "A relative clause (私が買った) sits directly before its noun; i-adjectives never take だった.",
    },
    {
      kind: "mc",
      prompt: "'The door opens (by itself)' — which verb?",
      choices: ["ドアが開く", "ドアが開ける", "ドアを開く", "ドアで開ける"],
      answer: 0,
      explanation: "開く is intransitive and pairs with が (transitivity).",
    },
    {
      kind: "fill",
      prompt: "Make it negative:",
      promptJp: "高[たか]い",
      answers: ["高くない", "たかくない"],
      explanation: "i-adjectives: い → くない (adjectives).",
    },
    {
      kind: "fill",
      prompt: "Connect them — 'a quiet person':",
      promptJp: "静[しず]か ＋ 人[ひと]",
      answers: ["静かな人", "しずかなひと"],
      explanation: "na-adjectives need な before a noun.",
    },
    {
      kind: "mc",
      prompt: "'Dogs and cats' as a complete list — which particle?",
      choices: ["と", "や", "の", "も"],
      answer: 0,
      explanation: "と lists exhaustively; や implies 'among others' (noun-particles).",
    },
    {
      kind: "mc",
      prompt: "寒いね vs 寒いよ — what does ね do?",
      choices: [
        "Seeks agreement — 'isn't it?'",
        "Informs the listener of something new",
        "Makes it a question",
        "Makes it polite",
      ],
      answer: 0,
      explanation: "ね invites agreement; よ asserts new information (adverbs-particles).",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "昨日[きのう]は雨[あめ]だった",
      explanation: "昨日は雨だった — past state-of-being wrapping the stage up.",
    },
  ],
};
