import type { Lesson } from "../types";

export const politeForm: Lesson = {
  id: "polite-form",
  stage: "essential-grammar",
  order: 1,
  title: "Polite Form",
  subtitle: "〜です and 〜ます",
  summary:
    "Switch from casual plain speech to the polite です／ます forms used with strangers, teachers, and in most service settings.",
  estMinutes: 18,
  vocabulary: [
    { word: "食[た]べる", reading: "たべる", meaning: "to eat" },
    { word: "行[い]く", reading: "いく", meaning: "to go" },
    { word: "学生[がくせい]", reading: "がくせい", meaning: "student" },
    { word: "元気[げんき]", reading: "げんき", meaning: "healthy; fine" },
    { word: "昨日[きのう]", reading: "きのう", meaning: "yesterday" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Plain Japanese — {{だ}}, {{食べる}}, {{行った}} — is fine among friends. Everywhere else, you wrap statements in **polite form**: nouns and na-adjectives take {{です}}, verbs take {{ます}}.",
    },
    {
      type: "rule",
      title: "Nouns & na-adjectives",
      items: [
        "Present polite: add {{です}}. {{学生だ}} → {{学生です}}.",
        "Past polite: replace {{だ}} with {{でした}}. {{元気だった}} → {{元気でした}}.",
        "Negative polite: {{じゃない}} → {{じゃないです}} or {{ではありません}} (more formal).",
        "**I-adjectives:** keep the {{い}}, add {{です}} — {{暑[あつ]い}} → {{暑いです}}. Past: {{暑かったです}}.",
      ],
    },
    {
      type: "examples",
      title: "Nouns",
      items: [
        { jp: "学生[がくせい]です。", en: "I am a student. / (They) are a student." },
        { jp: "元気[げんき]でした。", en: "Was fine (polite past)." },
        { jp: "学生[がくせい]じゃないです。", en: "Is not a student (polite)." },
      ],
    },
    {
      type: "heading",
      text: "Verbs: the ます-form",
    },
    {
      type: "rule",
      title: "How to make ます",
      items: [
        "**Ru-verbs:** drop {{る}}, add {{ます}}. {{食べる}} → {{食べます}}.",
        "**U-verbs:** change the final /u/ vowel to /i/, add {{ます}}. {{行く}} → {{行きます}}.",
        "**Exceptions:** {{する}} → {{します}}, {{来る}} → {{来ます}}.",
        "**Past polite:** change {{ます}} to {{ました}}. {{食べます}} → {{食べました}}.",
        "**Negative polite:** {{ません}} / {{ませんでした}}.",
      ],
    },
    {
      type: "table",
      caption: "食べる — full polite paradigm",
      headers: ["Form", "Polite"],
      rows: [
        ["Present", "食べます"],
        ["Past", "食べました"],
        ["Negative", "食べません"],
        ["Past negative", "食べませんでした"],
      ],
    },
    {
      type: "examples",
      title: "Verbs",
      items: [
        { jp: "毎日[まいにち]、ご飯[ごはん]を食[た]べます。", en: "I eat rice every day (polite)." },
        { jp: "昨日[きのう]、学校[がっこう]へ行[い]きました。", en: "Went to school yesterday (polite past)." },
        { jp: "今日[きょう]は行[い]きません。", en: "Won't go today (polite negative)." },
      ],
    },
    {
      type: "note",
      text: "{{ではありません}} is more formal than {{じゃないです}} — use on signs, in speeches, and with strangers in very polite settings.",
    },
    {
      type: "tip",
      text: "In real conversation, {{です}} and {{ます}} often drop at the end of long sentences — but when in doubt, keep them. They signal respect and distance.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Polite present of 食べる?",
      choices: ["食べる", "食べます", "食べた", "食べない"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Polite past of 行く?",
      choices: ["行きます", "行きました", "行った", "行きません"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Polite form of 学生だ?",
      choices: ["学生です", "学生ます", "学生でした", "学生い"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Polite present of 暑い?",
      choices: ["暑いです", "暑います", "暑です", "暑いでした"],
      answer: 0,
    },
    {
      kind: "order",
      prompt: "Build: 'I will meet a friend tomorrow (polite)'",
      tiles: ["明日[あした]", "友達[ともだち]に", "会[あ]います"],
      distractors: ["会[あ]う"],
      explanation: "Polite sentences end in the ます form: 会います, not plain 会う.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the polite sentence you hear:",
      audio: "行[い]きます",
      explanation: "行きます — (I) go / will go, politely.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the polite sentence you hear:",
      audio: "学生[がくせい]です",
      explanation: "学生です — (I) am a student, politely.",
    },
  ],
  drills: [
    { id: "masu", prompt: "Make it polite", jp: "食[た]べる", answers: ["食[た]べます"] },
    { id: "masu-u", prompt: "Make it polite", jp: "行[い]く", answers: ["行[い]きます"] },
    { id: "masen", prompt: "Make it polite negative", jp: "食[た]べる", answers: ["食[た]べません"] },
    { id: "mashita", prompt: "Make it polite past", jp: "行[い]く", answers: ["行[い]きました"] },
    { id: "desu", prompt: "Make it polite", jp: "学生[がくせい]だ", answers: ["学生[がくせい]です"] },
    { id: "negative-desu", prompt: "Make it polite negative", jp: "元気[げんき]だ", answers: ["元気[げんき]じゃないです", "元気[げんき]ではありません"] },
  ],
};
