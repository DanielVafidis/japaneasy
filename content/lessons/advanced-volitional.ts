import type { Lesson } from "../types";

export const advancedVolitional: Lesson = {
  id: "advanced-volitional",
  stage: "advanced-topics",
  order: 5,
  title: "Advanced Volitional",
  subtitle: "Volitional form beyond ましょう",
  summary:
    "The う／よう form for intention, suggestion, and set literary patterns.",
  estMinutes: 14,
  vocabulary: [
    { word: "頑張[がんば]る", reading: "がんばる", meaning: "to do one's best" },
    { word: "協力[きょうりょく]", reading: "きょうりょく", meaning: "cooperation" },
    { word: "一致[いっち]", reading: "いっち", meaning: "agreement; unity" },
    { word: "努力[どりょく]", reading: "どりょく", meaning: "effort" },
  ],
  blocks: [
    {
      type: "prose",
      text: "You already know {{ましょう}} for 'let's'. The **volitional form** ({{う／よう}}) is its plain backbone — and it powers several advanced patterns about intention, attempts, and literary 'let us'.",
    },
    {
      type: "rule",
      title: "Forming the volitional",
      items: [
        "**U-verbs:** final /u/ → /o/ + {{う}}: {{行[い]く}} → {{行[い]こう}}.",
        "**Ru-verbs:** {{る}} → {{よう}}: {{食[た]べる}} → {{食[た]べよう}}.",
        "**Exceptions:** {{する}} → {{しよう}}, {{来[く]る}} → {{来[こ]よう}}.",
        "Polite: {{ましょう}}. Plain: {{行[い]こう}}, {{食[た]べよう}}.",
      ],
    },
    {
      type: "rule",
      title: "Beyond 'let's'",
      items: [
        "**Intent:** {{明日[あした]から頑張[がんば]ろう}} — 'I'll try hard from tomorrow.'",
        "**〜うとする** — try to do: {{立[た]とうとした}} — 'tried to stand.'",
        "**〜うと思[おも]う** — intend to: {{来年[らいねん]留学[りゅうがく]しようと思[おも]う}}.",
        "**Literary 'let us':** {{一致[いっち]しよう}} in slogans and speeches.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "みんなで協力[きょうりょく]しよう。", en: "Let's all cooperate." },
        { jp: "もう一度[いちど]、努力[どりょく]しようと思[おも]う。", en: "I intend to make an effort once more." },
        { jp: "彼[かれ]はドアを開[あ]けようとした。", en: "He tried to open the door." },
      ],
    },
    {
      type: "tip",
      text: "{{〜ようとしない}} — 'won't even try' — is a strong complaint: {{宿題[しゅくだい]をしようとしない}}.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Volitional form of 行く?",
      choices: ["行くう", "行こう", "行いよう", "行けよう"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Volitional form of 食べる?",
      choices: ["食べう", "食べよう", "食べましょう only", "食べるう"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Tried to stand」?",
      choices: ["立った", "立とうとした", "立てよう", "立ちたい"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Intent pattern: 留学しようと＿",
      choices: ["ある", "思う", "みる", "しまう"],
      answer: 1,
    },
  ],
};
