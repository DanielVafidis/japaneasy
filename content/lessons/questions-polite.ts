import type { Lesson } from "../types";

export const questionsPolite: Lesson = {
  id: "questions-polite",
  stage: "n5",
  order: 12,
  title: "Questions & か",
  subtitle: "何 · どこ · いつ · だれ — commuting & directions",
  summary:
    "Ask what, where, when, and who without reshuffling word order — add か, keep です／ます, and survive station small talk.",
  estMinutes: 16,
  vocabulary: [
    { word: "何[なに/なん]", reading: "なに", meaning: "what" },
    { word: "どこ", reading: "どこ", meaning: "where" },
    { word: "いつ", reading: "いつ", meaning: "when" },
    { word: "誰[だれ]", reading: "だれ", meaning: "who" },
    { word: "駅[えき]", reading: "えき", meaning: "station" },
    { word: "電車[でんしゃ]", reading: "でんしゃ", meaning: "train" },
    { word: "道[みち]", reading: "みち", meaning: "road; way" },
    { word: "右[みぎ]", reading: "みぎ", meaning: "right" },
    { word: "左[ひだり]", reading: "ひだり", meaning: "left" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Japanese questions keep the **same word order** as statements. Don't invert subject and verb — just add {{か}} at the end. In polite speech, keep {{です}} or {{ます}} before {{か}}. Perfect for commuting: where is the station, when is the train, who is that?",
    },
    {
      type: "heading",
      text: "The question marker か",
    },
    {
      type: "rule",
      title: "Statement → question",
      items: [
        "Add {{か}} at the end. Rising intonation helps in speech.",
        "Polite: {{駅ですか}} / {{行きますか}} — keep {{です}}/{{ます}}.",
        "Casual talk often drops {{か}} and uses {{？}} alone: {{駅？}}",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "学生[がくせい]です。", en: "(I) am a student." },
        { jp: "学生[がくせい]ですか。", en: "Are (you) a student?" },
        { jp: "電車[でんしゃ]に乗[の]ります。", en: "(I) take the train." },
        { jp: "電車[でんしゃ]に乗[の]りますか。", en: "Do (you) take the train?" },
      ],
    },
    {
      type: "heading",
      text: "Question words — 何どこいつだれ",
    },
    {
      type: "table",
      caption: "Core question words",
      headers: ["Word", "Meaning", "Tip"],
      rows: [
        ["何 (なに/なん)", "what", "なん before counters & です often"],
        ["どこ", "where", "place"],
        ["いつ", "when", "time"],
        ["誰 (だれ)", "who", "people"],
      ],
    },
    {
      type: "rule",
      title: "Where they sit",
      items: [
        "Question words usually replace the unknown piece — same slot as the answer would take.",
        "{{何を食べますか}} — What do you eat? → {{寿司を食べます}}",
        "{{どこに行きますか}} — Where do you go? → {{駅に行きます}}",
      ],
    },
    {
      type: "examples",
      title: "Commuting & directions",
      items: [
        { jp: "駅[えき]はどこですか。", en: "Where is the station?" },
        { jp: "電車[でんしゃ]はいつ来[き]ますか。", en: "When does the train come?" },
        { jp: "これは何[なん]ですか。", en: "What is this?" },
        { jp: "あの人[ひと]は誰[だれ]ですか。", en: "Who is that person?" },
        { jp: "道[みち]は右[みぎ]ですか、左[ひだり]ですか。", en: "Is the way right, or left?" },
      ],
    },
    {
      type: "dialogue",
      title: "Asking the way",
      lines: [
        { speaker: "You", jp: "すみません。駅[えき]はどこですか。", en: "Excuse me. Where is the station?" },
        { speaker: "Local", jp: "まっすぐ行[い]って、右[みぎ]です。", en: "Go straight, (it's on the) right." },
        { speaker: "You", jp: "電車[でんしゃ]はいつですか。", en: "When is the train?" },
        { speaker: "Local", jp: "十[じゅう]分[ぷん]後[ご]です。", en: "In ten minutes." },
      ],
    },
    {
      type: "note",
      text: "{{何}} is often read {{なん}} before {{です}}, {{の}}, and counters ({{何人}}, {{何分}}). {{なに}} is common before particles like {{を}} / {{が}}: {{何を食べますか}}.",
    },
    {
      type: "tip",
      text: "Yes/no answers often reuse the verb: {{行きますか}} → {{はい、行きます}} / {{いいえ、行きません}}. You don't need a separate 'do' word.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "How do you turn 学生です into a polite question?",
      choices: ["学生ですか。", "学生かです。", "です学生か。", "学生ますか。"],
      answer: 0,
      explanation: "Add か after です — word order stays the same.",
    },
    {
      kind: "mc",
      prompt: "Which word means 'where'?",
      choices: ["いつ", "どこ", "だれ", "なに"],
      answer: 1,
      explanation: "どこ = where.",
    },
    {
      kind: "mc",
      prompt: "駅はどこですか means…",
      choices: [
        "When is the station?",
        "Where is the station?",
        "Who is at the station?",
        "What is the station?",
      ],
      answer: 1,
      explanation: "どこ = where.",
    },
    {
      kind: "fill",
      prompt: "Type the Japanese for 'who':",
      answers: ["誰", "だれ"],
      explanation: "誰 (だれ).",
    },
    {
      kind: "mc",
      prompt: "電車はいつ来ますか asks about…",
      choices: ["What the train is", "Where the train is", "When the train comes", "Who takes the train"],
      answer: 2,
      explanation: "いつ = when.",
    },
    {
      kind: "order",
      prompt: "Build: 'Where is the station?'",
      tiles: ["駅[えき]は", "どこ", "ですか"],
      distractors: ["いつ", "だれ"],
      explanation: "Topic 駅は + どこ + ですか.",
    },
  ],
  drills: [
    { id: "ka-desu", prompt: "Make it a question", jp: "学生[がくせい]です", answers: ["学生[がくせい]ですか"] },
    { id: "ka-masu", prompt: "Make it a question", jp: "行[い]きます", answers: ["行[い]きますか"] },
    { id: "doko", prompt: "Ask where — 'Where is the station?'", jp: "駅[えき]", answers: ["駅[えき]はどこですか"] },
    { id: "itsu", prompt: "Ask when — fill ◯", jp: "電車[でんしゃ]は◯来[き]ますか", answers: ["いつ"] },
    { id: "nani", prompt: "Ask what — fill ◯", jp: "これは◯ですか", answers: ["何[なん]", "なん"] },
    { id: "dare", prompt: "Ask who — fill ◯", jp: "あの人[ひと]は◯ですか", answers: ["誰[だれ]", "だれ"] },
  ],
};
