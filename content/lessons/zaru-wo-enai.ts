import type { Lesson } from "../types";

export const zaruWoEnai: Lesson = {
  id: "zaru-wo-enai",
  stage: "n1",
  order: 1,
  title: "〜ざるを得ない",
  subtitle: "ざるを得ない · やむを得ない · かねる",
  summary:
    "Formal complaints and leadership language — 'no choice but to', 'unavoidable', and polite business かねる／かねない.",
  estMinutes: 18,
  vocabulary: [
    { word: "認[みと]める", reading: "みとめる", meaning: "to admit; recognise" },
    { word: "延期[えんき]", reading: "えんき", meaning: "postponement" },
    { word: "事態[じたい]", reading: "じたい", meaning: "situation" },
    { word: "受[う]け入[い]れる", reading: "うけいれる", meaning: "to accept" },
    { word: "事情[じじょう]", reading: "じじょう", meaning: "circumstances" },
    { word: "計画[けいかく]", reading: "けいかく", meaning: "plan" },
    { word: "決断[けつだん]", reading: "けつだん", meaning: "decision (decisive)" },
  ],
  blocks: [
    {
      type: "prose",
      text: "{{〜ざるを得[え]ない}} is **formal, written** — your hands are tied. Leadership announcements, formal complaints, and career statements lean on it: circumstances force the action.",
    },
    {
      type: "rule",
      title: "Formation",
      items: [
        "**U-verbs:** {{行かない}} → {{行かざるを得ない}}.",
        "**Ru-verbs:** {{認めない}} → {{認めざるを得ない}}.",
        "**する** → {{せざるを得ない}}; **来る** → {{来ざるを得ない}}.",
        "Compounds: {{延期せざるを得ない}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "事態[じたい]を認[みと]めざるを得[え]ない。", en: "Cannot help but acknowledge the situation." },
        { jp: "予算[よさん]不足[ぶそく]のため、計画[けいかく]を見直[みなお]さざるを得[え]なかった。", en: "Due to budget shortfalls, we had no choice but to revise the plan." },
        { jp: "彼[かれ]の功績[こうせき]は認[みと]めざるを得ない。", en: "One cannot deny his achievements." },
      ],
    },
    {
      type: "heading",
      text: "Related 'no choice' patterns",
    },
    {
      type: "rule",
      title: "Spoken and written alternatives",
      items: [
        "**{{〜ないわけにはいかない}}** — social / moral pressure.",
        "**{{〜ざるを得ない}}** — formal, external circumstances.",
        "**{{〜ないではすまない}}** — won't get away without doing (duty / apology).",
      ],
    },
    {
      type: "heading",
      text: "やむを得ない — unavoidable",
    },
    {
      type: "prose",
      text: "{{やむを得ない}} — formal cousin of {{しょうがない}}. Often modifies a noun: {{やむを得ない事情}}. Leadership tone for cancellations and absences.",
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
      text: "かねる · かねない",
    },
    {
      type: "rule",
      title: "One stem, two directions",
      items: [
        "**Stem + {{かねる}}** — polite business 'unable to': {{お答えしかねます}}.",
        "**Stem + {{かねない}}** — 'might well (undesirable)': {{事故になりかねない}}.",
        "{{かねない}} only for bad possibilities.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "その件[けん]については、お答[こた]えしかねます。", en: "I'm afraid I'm unable to answer regarding that matter." },
        { jp: "このままでは、信頼[しんらい]を失[うしな]いかねない。", en: "At this rate, we could well lose trust." },
        { jp: "苦[くる]しい決断[けつだん]だが、受[う]け入[い]れざるを得[え]ない。", en: "It's a hard decision, but we have no choice but to accept it." },
      ],
    },
    {
      type: "dialogue",
      title: "Formal complaint / leadership",
      lines: [
        { speaker: "幹部", jp: "現状[げんじょう]では、方針[ほうしん]を変[か]えざるを得[え]ない。", en: "Under present conditions, we have no choice but to change policy." },
        { speaker: "担当", jp: "詳細[しょうさい]はお答[こた]えしかねますが、やむを得[え]ない事情[じじょう]です。", en: "I can't give details, but the circumstances are unavoidable." },
      ],
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
      prompt: "する → ?",
      choices: ["しざるを得ない", "せざるを得ない", "すざるを得ない", "されざるを得ない"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "A company says 分かりかねます — meaning?",
      choices: ["We are (politely) unable to tell", "We might understand", "We fully understand", "We refuse rudely"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "遅刻しかねない implies…",
      choices: ["might well end up late (bad)", "definitely won't be late", "was late yesterday", "politely refusing to be late"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "やむを得ない事情 means…",
      choices: ["optional circumstances", "unavoidable circumstances", "happy circumstances", "unknown circumstances"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'We have no choice but to change the plan'",
      tiles: ["計画[けいかく]を", "変更[へんこう]", "せざるを得[え]ない"],
      distractors: ["しざるを得[え]ない"],
      explanation: "する is irregular: せざるを得ない.",
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
