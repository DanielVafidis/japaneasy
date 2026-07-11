import type { Lesson } from "../types";

export const politeForm: Lesson = {
  id: "polite-form",
  stage: "n5",
  order: 8,
  title: "Polite Form",
  subtitle: "です · ます — greetings & survival politeness",
  summary:
    "Meet people, order food, and answer teachers with polite です／ます — the default register with strangers and in public.",
  estMinutes: 18,
  vocabulary: [
    { word: "です", reading: "です", meaning: "polite copula (is / am / are)" },
    { word: "ます", reading: "ます", meaning: "polite verb ending" },
    { word: "食[た]べる", reading: "たべる", meaning: "to eat" },
    { word: "行[い]く", reading: "いく", meaning: "to go" },
    { word: "学生[がくせい]", reading: "がくせい", meaning: "student" },
    { word: "元気[げんき]", reading: "げんき", meaning: "healthy; fine" },
    { word: "こんにちは", reading: "こんにちは", meaning: "hello (daytime)" },
    { word: "ありがとう", reading: "ありがとう", meaning: "thank you" },
    { word: "すみません", reading: "すみません", meaning: "excuse me; sorry" },
  ],
  blocks: [
    {
      type: "prose",
      text: "With friends you can stay casual — {{だ}}, {{食べる}}, {{行った}}. With strangers, shop staff, and teachers, wrap speech in **polite form**: nouns and na-adjectives take {{です}}; verbs take {{ます}}. This is your **survival register** for greetings and everyday errands.",
    },
    {
      type: "heading",
      text: "Nouns & na-adjectives with です",
    },
    {
      type: "rule",
      title: "Polite state-of-being",
      items: [
        "**Present:** add {{です}}. {{学生だ}} → {{学生です}}.",
        "**Past:** {{でした}}. {{元気だった}} → {{元気でした}}.",
        "**Negative:** {{じゃないです}} (common) or {{ではありません}} (more formal).",
        "**Negative past:** {{じゃなかったです}} / {{ではありませんでした}}.",
      ],
    },
    {
      type: "examples",
      title: "Self-intro & small talk",
      items: [
        { jp: "学生[がくせい]です。", en: "(I) am a student." },
        { jp: "元気[げんき]です。", en: "(I) am fine." },
        { jp: "昨日[きのう]は暇[ひま]でした。", en: "Yesterday (I) was free." },
        { jp: "日本人[にほんじん]じゃないです。", en: "(I) am not Japanese." },
      ],
    },
    {
      type: "heading",
      text: "Verbs with ます",
    },
    {
      type: "prose",
      text: "Polite verbs use the **stem** + {{ます}}. (The next lesson drills stems in detail — for now, learn the four polite shapes.)",
    },
    {
      type: "rule",
      title: "ます conjugations",
      items: [
        "**Present / future:** stem + {{ます}} — {{食[た]べます}}, {{行[い]きます}}",
        "**Negative:** stem + {{ません}} — {{食[た]べません}}",
        "**Past:** stem + {{ました}} — {{食[た]べました}}",
        "**Negative past:** stem + {{ませんでした}} — {{食[た]べませんでした}}",
      ],
    },
    {
      type: "table",
      caption: "Stem reminders (how ます attaches)",
      headers: ["Dictionary", "Stem", "Polite"],
      rows: [
        ["食べる (ru)", "食べ", "食べます"],
        ["行く (u)", "行き", "行きます"],
        ["する", "し", "します"],
        ["来る", "来(き)", "来ます"],
      ],
    },
    {
      type: "examples",
      title: "Polite survival lines",
      items: [
        { jp: "水[みず]を飲[の]みます。", en: "(I) drink water. / I'll have water." },
        { jp: "学校[がっこう]に行[い]きます。", en: "(I) go / will go to school." },
        { jp: "朝[あさ]ごはんを食[た]べません。", en: "(I) don't eat breakfast." },
        { jp: "昨日[きのう]寿司[すし]を食[た]べました。", en: "Yesterday (I) ate sushi." },
        { jp: "パーティーに行[い]きませんでした。", en: "(I) didn't go to the party." },
      ],
    },
    {
      type: "dialogue",
      title: "At a café counter",
      lines: [
        { speaker: "Staff", jp: "いらっしゃいませ。", en: "Welcome." },
        { speaker: "You", jp: "すみません。コーヒーをください。", en: "Excuse me. Coffee, please." },
        { speaker: "Staff", jp: "はい、少々[しょうしょう]お待[ま]ちください。", en: "Yes — please wait a moment." },
        { speaker: "You", jp: "ありがとうございます。", en: "Thank you." },
      ],
    },
    {
      type: "dialogue",
      title: "Meeting a classmate",
      lines: [
        { speaker: "A", jp: "こんにちは。元気[げんき]ですか。", en: "Hello. How are you?" },
        { speaker: "B", jp: "はい、元気[げんき]です。Aさんは？", en: "Yes, I'm fine. And you?" },
        { speaker: "A", jp: "元気[げんき]です。今日[きょう]は学校[がっこう]に行[い]きますか。", en: "I'm fine. Are you going to school today?" },
        { speaker: "B", jp: "はい、行[い]きます。", en: "Yes, I am." },
      ],
    },
    {
      type: "tip",
      text: "{{です}} and {{ます}} already feel polite — you usually **don't** stack casual endings after them. Questions simply add {{か}}: {{行きますか}}.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Polite present of 学生だ?",
      choices: ["学生です", "学生ます", "学生でした", "学生じゃない"],
      answer: 0,
      explanation: "Nouns take です for polite present.",
    },
    {
      kind: "mc",
      prompt: "Polite past of 食べる?",
      choices: ["食べます", "食べました", "食べません", "食べたです"],
      answer: 1,
      explanation: "Stem + ました → 食べました.",
    },
    {
      kind: "mc",
      prompt: "Polite negative of 行く?",
      choices: ["行きません", "行かないです", "行きました", "行きませんでした"],
      answer: 0,
      explanation: "Stem + ません → 行きません.",
    },
    {
      kind: "fill",
      prompt: "Type the polite present of する:",
      answers: ["します"],
      explanation: "する stem is し → します.",
    },
    {
      kind: "mc",
      prompt: "Which is a natural polite greeting question?",
      choices: [
        "元気だか。",
        "元気ですか。",
        "元気ますか。",
        "元気でしたかいます。",
      ],
      answer: 1,
      explanation: "Noun/na-adj + ですか for polite questions.",
    },
    {
      kind: "order",
      prompt: "Build: 'I am a student' (polite)",
      tiles: ["私[わたし]は", "学生[がくせい]", "です"],
      distractors: ["だ", "ます"],
      explanation: "Topic + noun + です (not ます — ます is for verbs).",
    },
  ],
  drills: [
    { id: "desu", prompt: "Make it polite", jp: "学生[がくせい]だ", answers: ["学生[がくせい]です"] },
    { id: "mashita", prompt: "Make it polite past", jp: "食[た]べる", answers: ["食[た]べました"] },
    { id: "masen", prompt: "Make it polite negative", jp: "行[い]く", answers: ["行[い]きません"] },
    { id: "shimasu", prompt: "Make it polite", jp: "する", answers: ["します"] },
    { id: "deshita", prompt: "Make it polite past", jp: "元気[げんき]だった", answers: ["元気[げんき]でした"] },
    { id: "masen-deshita", prompt: "Make it polite negative past", jp: "食[た]べる", answers: ["食[た]べませんでした"] },
  ],
};
