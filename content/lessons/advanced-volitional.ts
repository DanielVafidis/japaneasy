import type { Lesson } from "../types";

export const advancedVolitional: Lesson = {
  id: "advanced-volitional",
  stage: "advanced-topics",
  order: 6,
  title: "Advanced Volitional",
  subtitle: "う/よう · まい · であろう · かろう",
  summary:
    "The う／よう form for intention and attempts — plus the literary negatives and likelihoods: まい, ようが〜まいが, であろう, かろう.",
  estMinutes: 18,
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
      type: "heading",
      text: "Volitional in set phrases",
    },
    {
      type: "rule",
      title: "Common patterns",
      items: [
        "**〜ようとしない** — refuses to try: {{話[はな]そうとしない}}.",
        "**〜ようと思[おも]う** — intend to: {{もう一度[いちど]やろうと思[おも]う}}.",
        "**〜まい** — negative volitional (won't): {{二度[にど]とするまい}} — 'won't do again.'",
        "**〜ようにする** — make an effort: {{早[はや]く寝[ね]るようにする}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "毎日[まいにち]、日本語[にほんご]を話[はな]すようにしている。", en: "I make a point of speaking Japanese daily." },
        { jp: "もう二度[にど]と、あんなミスは犯[おか]すまい。", en: "I won't make a mistake like that again." },
      ],
    },
    {
      type: "tip",
      text: "{{〜ようとしない}} — 'won't even try' — is a strong complaint: {{宿題[しゅくだい]をしようとしない}}.",
    },
    {
      type: "heading",
      text: "The negative volitional まい, up close",
    },
    {
      type: "rule",
      title: "Formation & two meanings",
      items: [
        "Attach {{まい}} to the **dictionary form**: {{行[い]くまい}}. Ru-verbs also allow the stem: {{食[た]べまい}}. {{する}} → {{するまい}}／{{すまい}}.",
        "**Meaning 1 — 'probably not'** (negative {{だろう}}, written): {{彼[かれ]はもう来[く]るまい}}.",
        "**Meaning 2 — resolve 'never will'**: {{二度[にど]とするまい}}.",
        "**{{〜ようが〜まいが}}** — 'whether or not': {{雨[あめ]が降[ふ]ろうが降るまいが}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "雨[あめ]が降[ふ]ろうが降[ふ]るまいが、大会[たいかい]は行[おこな]われる。", en: "The tournament will be held whether it rains or not." },
      ],
    },
    {
      type: "heading",
      text: "Written likelihood: であろう・かろう",
    },
    {
      type: "rule",
      title: "Literary equivalents of だろう",
      items: [
        "**{{であろう}}** — formal written {{だろう}}: {{今後[こんご]も増[ふ]え続[つづ]けるであろう}} 'will likely continue to increase.'",
        "Can modify nouns directly: {{今後[こんご]必要[ひつよう]となるであろう知識[ちしき]}} 'knowledge that will likely become necessary.'",
        "**{{かろう}}** — i-adjective volitional: {{よかろう}} 'that is probably fine', {{遅[おそ]かろうが早[はや]かろうが}} 'be it late or early.' Archaic flavour.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "この傾向[けいこう]は今後[こんご]も続[つづ]くであろう。", en: "This trend will likely continue from here on. (written)" },
        { jp: "始[はじ]めるのが遅[おそ]かろうが早[はや]かろうが、続[つづ]けることが大事[だいじ]だ。", en: "Whether you start late or early, what matters is continuing." },
      ],
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
      prompt: "「Won't do that again」 — literary resolve?",
      choices: ["するまい", "しないでしょう", "しよう", "するはず"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "行こうが行くまいが means…",
      choices: [
        "whether (someone) goes or not",
        "let's definitely go",
        "(someone) probably went",
        "because (someone) won't go",
      ],
      answer: 0,
      explanation: "Volitional + が + まい + が = 'whether or not' — the outcome is unaffected.",
    },
    {
      kind: "mc",
      prompt: "であろう is the written equivalent of…",
      choices: ["だろう", "らしい", "そうだ", "はずだ"],
      answer: 0,
      explanation: "であろう = formal/literary だろう, common in essays and news analysis.",
    },
    {
      kind: "order",
      prompt: "Build: 'Never again will I be late' (literary resolve)",
      tiles: ["二度[にど]と", "遅刻[ちこく]は", "するまい"],
      distractors: ["しないまい"],
      explanation: "まい attaches to the dictionary form: するまい.",
    },
  ],
  drills: [
    { id: "volitional-u", prompt: "Make the volitional — 'let's do our best'", jp: "頑張[がんば]る", answers: ["頑張[がんば]ろう"] },
    { id: "volitional-ru", prompt: "Make the volitional — 'let's eat'", jp: "食[た]べる", answers: ["食[た]べよう"] },
    { id: "mai", prompt: "Literary negative volitional — 'shall not go'", jp: "行[い]く", answers: ["行[い]くまい"] },
    { id: "dearou", prompt: "Literary equivalent of だろう", jp: "だろう", answers: ["であろう"] },
    { id: "karou", prompt: "Literary conjecture for i-adjectives — 'is probably good'", jp: "よい", answers: ["よかろう"] },
  ],
};
