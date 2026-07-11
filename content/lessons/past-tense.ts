import type { Lesson } from "../types";

export const pastTense: Lesson = {
  id: "past-tense",
  stage: "n5",
  order: 7,
  title: "Past Tense of Verbs",
  subtitle: "Yesterday · routines · the た-form",
  summary:
    "Talk about yesterday and past routines — ate sushi, went to school, didn't sleep — with the た-form for every verb class.",
  estMinutes: 16,
  vocabulary: [
    { word: "昨日[きのう]", reading: "きのう", meaning: "yesterday" },
    { word: "寿司[すし]", reading: "すし", meaning: "sushi" },
    { word: "食[た]べる", reading: "たべる", meaning: "to eat (ru-verb)" },
    { word: "聞[き]く", reading: "きく", meaning: "to listen; to ask (u-verb)" },
    { word: "泳[およ]ぐ", reading: "およぐ", meaning: "to swim (u-verb)" },
    { word: "話[はな]す", reading: "はなす", meaning: "to speak (u-verb)" },
    { word: "飲[の]む", reading: "のむ", meaning: "to drink (u-verb)" },
    { word: "待[ま]つ", reading: "まつ", meaning: "to wait (u-verb)" },
    { word: "行[い]く", reading: "いく", meaning: "to go (exception in past)" },
    { word: "する", reading: "する", meaning: "to do" },
    { word: "来[く]る", reading: "くる", meaning: "to come" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Talking about **yesterday** and past habits means conjugating verbs to the **た-form**. Same idea as English '-ed' — but Japanese groups verbs by ending, and one famous exception ({{行く}}) breaks the pattern.",
    },
    {
      type: "heading",
      text: "Ru-verbs",
    },
    {
      type: "rule",
      title: "Drop る, add た",
      items: [
        "{{食[た]べる}} → {{食[た]べた}} (ate)",
        "{{見[み]る}} → {{見[み]た}} (saw / watched)",
        "{{起[お]きる}} → {{起[お]きた}} (got up)",
      ],
    },
    {
      type: "examples",
      title: "Yesterday with ru-verbs",
      items: [
        { jp: "昨日[きのう]寿司[すし]を食[た]べた。", en: "Yesterday (I) ate sushi." },
        { jp: "昨日[きのう]映画[えいが]を見[み]た。", en: "Yesterday (I) watched a movie." },
      ],
    },
    {
      type: "heading",
      text: "U-verbs (group by ending)",
    },
    {
      type: "prose",
      text: "U-verbs change the final sound, then take {{た}} or {{だ}}. Learn the groups — they match the te-form later.",
    },
    {
      type: "table",
      caption: "U-verb past endings",
      headers: ["Ending", "Past", "Example"],
      rows: [
        ["う・つ・る", "った", "待つ → 待った"],
        ["む・ぶ・ぬ", "んだ", "飲む → 飲んだ"],
        ["く", "いた", "聞く → 聞いた"],
        ["ぐ", "いだ", "泳ぐ → 泳いだ"],
        ["す", "した", "話す → 話した"],
      ],
    },
    {
      type: "examples",
      title: "Past routines",
      items: [
        { jp: "昨日[きのう]友達[ともだち]を待[ま]った。", en: "Yesterday (I) waited for a friend." },
        { jp: "コーヒーを飲[の]んだ。", en: "(I) drank coffee." },
        { jp: "音楽[おんがく]を聞[き]いた。", en: "(I) listened to music." },
        { jp: "海[うみ]で泳[およ]いだ。", en: "(I) swam in the sea." },
        { jp: "先生[せんせい]と話[はな]した。", en: "(I) talked with the teacher." },
      ],
    },
    {
      type: "note",
      text: "**Exception:** {{行[い]く}} should follow the く→いた pattern, but its past is {{行[い]った}} — not {{行いた}}. Memorise it.",
    },
    {
      type: "heading",
      text: "Irregular verbs",
    },
    {
      type: "rule",
      title: "する and 来る",
      items: [
        "{{する}} → {{した}} (did)",
        "{{来[く]る}} → {{来[き]た}} (came — reading shifts to き)",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "昨日[きのう]宿題[しゅくだい]をした。", en: "Yesterday (I) did homework." },
        { jp: "友達[ともだち]が来[き]た。", en: "A friend came." },
        { jp: "学校[がっこう]に行[い]った。", en: "(I) went to school." },
      ],
    },
    {
      type: "heading",
      text: "Negative past — なかった",
    },
    {
      type: "rule",
      title: "From the negative",
      items: [
        "Start from the {{ない}} form, drop the final {{い}}, add {{かった}}.",
        "{{食[た]べない}} → {{食[た]べなかった}} (did not eat)",
        "{{行[い]かない}} → {{行[い]かなかった}} (did not go)",
        "{{しない}} → {{しなかった}} / {{来[こ]ない}} → {{来[こ]なかった}}",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "昨日[きのう]は寝[ね]なかった。", en: "Yesterday (I) didn't sleep." },
        { jp: "朝[あさ]ごはんを食[た]べなかった。", en: "(I) didn't eat breakfast." },
        { jp: "パーティーに行[い]かなかった。", en: "(I) didn't go to the party." },
      ],
    },
    {
      type: "dialogue",
      title: "Catching up about yesterday",
      lines: [
        { speaker: "A", jp: "昨日[きのう]何[なに]をした？", en: "What did you do yesterday?" },
        { speaker: "B", jp: "寿司[すし]を食[た]べた。映画[えいが]も見[み]た。", en: "(I) ate sushi. (I) also watched a movie." },
        { speaker: "A", jp: "泳[およ]いだ？", en: "Did you swim?" },
        { speaker: "B", jp: "ううん、泳[およ]がなかった。", en: "Nope, (I) didn't swim." },
      ],
    },
    {
      type: "tip",
      text: "Past tense sits at the **end** of the clause (SOV). Time words like {{昨日}} usually come early: {{昨日寿司を食べた}}.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Past tense of 食べる?",
      choices: ["食べた", "食べない", "食べます", "食べて"],
      answer: 0,
      explanation: "Ru-verb: drop る, add た → 食べた.",
    },
    {
      kind: "mc",
      prompt: "Past tense of 飲む?",
      choices: ["飲いた", "飲んだ", "飲った", "飲みた"],
      answer: 1,
      explanation: "む・ぶ・ぬ → んだ: 飲む → 飲んだ.",
    },
    {
      kind: "mc",
      prompt: "Past tense of 行く (the exception)?",
      choices: ["行いた", "行った", "行きった", "行だ"],
      answer: 1,
      explanation: "行く → 行った (not 行いた).",
    },
    {
      kind: "fill",
      prompt: "Type the past of する:",
      answers: ["した"],
      explanation: "する → した.",
    },
    {
      kind: "mc",
      prompt: "How do you say 'did not eat'?",
      choices: ["食べない", "食べなかった", "食べた", "食べません"],
      answer: 1,
      explanation: "ない → drop い + かった → 食べなかった.",
    },
    {
      kind: "order",
      prompt: "Build: 'Yesterday I ate sushi'",
      tiles: ["昨日[きのう]", "寿司[すし]を", "食[た]べた"],
      distractors: ["食[た]べる", "行[い]った"],
      explanation: "Time early, object with を, past verb last.",
    },
  ],
  drills: [
    { id: "ru-past", prompt: "Make it past", jp: "食[た]べる", answers: ["食[た]べた"] },
    { id: "u-past-mu", prompt: "Make it past", jp: "飲[の]む", answers: ["飲[の]んだ"] },
    { id: "u-past-ku", prompt: "Make it past", jp: "聞[き]く", answers: ["聞[き]いた"] },
    { id: "iku-past", prompt: "Make it past (exception)", jp: "行[い]く", answers: ["行[い]った"] },
    { id: "neg-past", prompt: "Make it negative past", jp: "食[た]べる", answers: ["食[た]べなかった"] },
    { id: "suru-past", prompt: "Make it past", jp: "する", answers: ["した"] },
  ],
};
