import type { Lesson } from "../types";

export const quotedSpeech: Lesson = {
  id: "quoted-speech",
  stage: "essential-grammar",
  order: 12,
  title: "Quoted Speech",
  subtitle: "Direct quotes · と · って · と思う",
  summary:
    "Report what someone said or thought with と — exact quotes in 「」, or interpreted statements and thoughts.",
  estMinutes: 16,
  vocabulary: [
    { word: "言[い]う", reading: "いう", meaning: "to say" },
    { word: "聞[き]く", reading: "きく", meaning: "to hear; ask" },
    { word: "思[おも]う", reading: "おもう", meaning: "to think" },
    { word: "考[かんが]える", reading: "かんがえる", meaning: "to consider" },
    { word: "寒[さむ]い", reading: "さむい", meaning: "cold" },
    { word: "授業[じゅぎょう]", reading: "じゅぎょう", meaning: "class" },
  ],
  blocks: [
    {
      type: "heading",
      text: "Direct quote",
    },
    {
      type: "prose",
      text: "Wrap the exact words in Japanese quotation marks {{「」}}, add {{と}}, then the verb ({{言う}}, {{聞く}}, {{叫ぶ}}, etc.).",
    },
    {
      type: "examples",
      items: [
        { jp: "アリスが、「寒[さむ]い」と言[い]った。", en: 'Alice said, "It\'s cold."' },
        { jp: "「今日[きょう]は授業[じゅぎょう]がない」と先生[せんせい]から聞[き]いた。", en: 'I heard from the teacher, "There is no class today."' },
      ],
    },
    {
      type: "heading",
      text: "Interpreted quote",
    },
    {
      type: "prose",
      text: "For the **gist** of what was said or thought — not word-for-word — drop the {{「」}} and use plain form + {{と}} + {{言う/聞く/思う/考える}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "先生[せんせい]から今日[きょう]は授業[じゅぎょう]がないと聞[き]いた。", en: "I heard from the teacher that there is no class today." },
        { jp: "これは、日本語[にほんご]で何[なに]と言[い]いますか。", en: "What is this called in Japanese?" },
        { jp: "カレーを食[た]べようと思[おも]った。", en: "I thought I'd eat curry." },
      ],
    },
    {
      type: "rule",
      title: "Don't forget だ in quotes",
      items: [
        "Noun / na-adjective quotes need explicit {{だ}}: {{高校生だと聞いた}} — 'I heard he is a high school student.'",
        "Without {{だ}}: {{何と言いましたか}} — 'What did he say?' (not 'what is it?').",
      ],
    },
    {
      type: "heading",
      text: "Casual って",
    },
    {
      type: "prose",
      text: "{{って}} replaces {{と}} in casual speech for quotes and hearsay: {{来年、海外に行くって}} — 'They say they're going abroad next year.'",
    },
    {
      type: "examples",
      items: [
        { jp: "智子[ともこ]は、来年[らいねん]海外[かいがい]に行[い]くって。", en: "Tomoko says she's going abroad next year." },
        { jp: "本当[ほんとう]なの？", en: "Is that true?" },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Direct quote particle?",
      choices: ["が", "と", "を", "に"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「I heard he is a student」 — need だ?",
      choices: ["学生と聞いた", "学生だと聞いた", "学生ですと聞いた", "学生が聞いた"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Casual replacement for と in quotes?",
      choices: ["ね", "って", "よ", "の"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Express a thought about doing something?",
      choices: ["〜と言う", "〜と思う", "〜を思う", "〜が思う"],
      answer: 1,
    },
  ],
};
