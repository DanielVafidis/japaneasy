import type { Lesson } from "../types";

export const zaruWoEnai: Lesson = {
  id: "zaru-wo-enai",
  stage: "advanced-topics",
  order: 4,
  title: "〜ざるを得ない",
  subtitle: "ざるを得ない · やむを得ない · かねる",
  summary:
    "Formal ways to say your hands are tied — 'can't not do', 'unavoidable', and the polite business 'unable to' かねる (plus its ominous twin かねない).",
  estMinutes: 18,
  vocabulary: [
    { word: "認[みと]める", reading: "みとめる", meaning: "to admit; recognise" },
    { word: "延期[えんき]", reading: "えんき", meaning: "postponement" },
    { word: "事態[じたい]", reading: "じたい", meaning: "situation" },
    { word: "受[う]け入[い]れる", reading: "うけいれる", meaning: "to accept" },
  ],
  blocks: [
    {
      type: "prose",
      text: "{{〜ざるを得[え]ない}} is a **formal, written** pattern meaning you have **no choice** but to do something. It combines classical negative {{〜ざる}} with {{を得ない}} ('cannot obtain / cannot manage otherwise').",
    },
    {
      type: "rule",
      title: "Formation",
      items: [
        "**U-verbs:** replace final {{ない}} stem with {{ざる}}: {{行[い]かない}} → {{行[い]かざるを得[え]ない}}.",
        "**Ru-verbs:** {{食[た]べない}} → {{食[た]べざるを得[え]ない}}.",
        "**Exceptions:** {{しない}} → {{せざるを得[え]ない}}, {{来[こ]ない}} → {{来[こ]ざるを得[え]ない}}.",
        "**Suru compounds:** {{延期[えんき]せざるを得[え]ない}} — 'Cannot avoid postponing.'",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "事態[じたい]を認[みと]めざるを得[え]ない。", en: "Cannot help but acknowledge the situation." },
        { jp: "雨[あめ]のため、試合[しあい]を延期[えんき]せざるを得[え]なかった。", en: "Due to rain, we had no choice but to postpone the match." },
        { jp: "彼[かれ]の能力[のうりょく]は認[みと]めざるを得ない。", en: "One cannot deny his ability." },
      ],
    },
    {
      type: "heading",
      text: "Other 'no choice' patterns",
    },
    {
      type: "rule",
      title: "Spoken and written alternatives",
      items: [
        "**{{〜ないわけにはいかない}}** — social / moral pressure: {{行[い]かないわけにはいかない}}.",
        "**{{〜ざるを得ない}}** — formal, external circumstances: {{延期[えんき]せざるを得[え]ない}}.",
        "**{{〜ないではすまない}}** — won't get away without doing (apology, duty).",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "親[おや]の期待[きたい]に応[こた]えないわけにはいかない。", en: "I can't not live up to my parents' expectations." },
      ],
    },
    {
      type: "heading",
      text: "やむを得ない — it can't be helped",
    },
    {
      type: "prose",
      text: "{{やむを得[え]ない}} is a set phrase — literally 'cannot obtain a stopping' — meaning **unavoidable**. It's the formal cousin of {{しょうがない}}／{{仕方[しかた]がない}} and often modifies a noun directly: {{やむを得ない事情[じじょう]}} 'unavoidable circumstances'.",
    },
    {
      type: "examples",
      items: [
        { jp: "台風[たいふう]だから、中止[ちゅうし]もやむを得[え]ない。", en: "With the typhoon, cancelling is unavoidable." },
        { jp: "やむを得[え]ない事情[じじょう]で欠席[けっせき]します。", en: "I will be absent due to unavoidable circumstances." },
      ],
    },
    {
      type: "heading",
      text: "〜かねる・〜かねない — politely can't / might just",
    },
    {
      type: "rule",
      title: "One stem, two directions",
      items: [
        "**Stem + {{かねる}}** — 'find it difficult / unable to' — the standard **polite business refusal**: {{お答[こた]えしかねます}}.",
        "**Stem + {{かねない}}** — the negative flips the meaning: 'might well (do something bad)': {{事故[じこ]になりかねない}}.",
        "{{かねない}} is only for **undesirable** possibilities — no happy endings.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "その件[けん]については、お答[こた]えしかねます。", en: "I'm afraid I'm unable to answer regarding that matter." },
        { jp: "寝不足[ねぶそく]が続[つづ]くと、体[からだ]を壊[こわ]しかねない。", en: "If the lack of sleep continues, you could well ruin your health." },
      ],
    },
    {
      type: "note",
      text: "You'll see {{ざるを得ない}} and {{お〜しかねます}} in news headlines and business emails. Recognise them on sight first; active use can wait.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "ざるを得ない expresses…",
      choices: ["optional action", "no choice but to act", "past regret", "ability"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Negative of 行く in this pattern?",
      choices: ["行かざる", "行きざる", "行くざる", "行かないざる"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "する → ?",
      choices: ["しざるを得ない", "せざるを得ない", "すざるを得ない", "されざるを得ない"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Casual spoken alternative?",
      choices: ["〜ないわけにはいかない", "〜てしまう", "〜かもしれない", "〜べき"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "A company says 分かりかねます — meaning?",
      choices: [
        "We are (politely) unable to tell",
        "We might understand",
        "We fully understand",
        "We refuse rudely",
      ],
      answer: 0,
      explanation: "Stem + かねる = polite business 'unable to'.",
    },
    {
      kind: "mc",
      prompt: "遅刻しかねない implies…",
      choices: [
        "might well end up late (bad possibility)",
        "definitely won't be late",
        "was late yesterday",
        "is politely refusing to be late",
      ],
      answer: 0,
      explanation: "かねない warns of an undesirable possibility.",
    },
    {
      kind: "order",
      prompt: "Build: 'We have no choice but to change the plan'",
      tiles: ["計画[けいかく]を", "変更[へんこう]", "せざるを得[え]ない"],
      distractors: ["しざるを得[え]ない"],
      explanation: "する is irregular here: せざるを得ない, not しざる.",
    },
  ],
  drills: [
    { id: "zaruwoenai", prompt: "Formal 'no choice but to admit'", jp: "認[みと]める", answers: ["認[みと]めざるを得[え]ない"] },
    { id: "sezaru", prompt: "The する version — irregular", jp: "する", answers: ["せざるを得[え]ない"] },
    { id: "yamuwoenai", prompt: "Type the set phrase — 'unavoidable'", jp: "？", answers: ["やむを得[え]ない"] },
    { id: "kaneru", prompt: "Formal 'cannot (bring oneself to) accept'", jp: "受[う]け入[い]れる", answers: ["受[う]け入[い]れかねる"] },
    { id: "kanenai", prompt: "Flip it — 'might well happen'", jp: "かねる", answers: ["かねない"] },
  ],
};
