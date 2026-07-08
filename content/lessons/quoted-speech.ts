import type { Lesson } from "../types";

export const quotedSpeech: Lesson = {
  id: "quoted-speech",
  stage: "essential-grammar",
  order: 14,
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
        { jp: "妹[いもうと]が、「眠[ねむ]い」と言[い]った。", en: 'My little sister said, "I\'m sleepy."' },
        { jp: "「明日[あした]は休[やす]みだ」と店長[てんちょう]から聞[き]いた。", en: 'I heard from the manager, "Tomorrow is a day off."' },
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
        { jp: "店長[てんちょう]から明日[あした]は休[やす]みだと聞[き]いた。", en: "I heard from the manager that tomorrow is a day off." },
        { jp: "これは、英語[えいご]で何[なに]と言[い]いますか。", en: "What is this called in English?" },
        { jp: "ラーメンを作[つく]ろうと思[おも]った。", en: "I thought I'd make ramen." },
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
      text: "{{って}} replaces {{と}} in casual speech for quotes and hearsay: {{来月、大阪に行くって}} — 'They say they're going to Osaka next month.'",
    },
    {
      type: "examples",
      items: [
        { jp: "兄[あに]は、来月[らいげつ]大阪[おおさか]に行[い]くって。", en: "My brother says he's going to Osaka next month." },
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
    {
      kind: "order",
      prompt: "Build: 'I think it will clear up tomorrow'",
      tiles: ["明日[あした]は", "晴[は]れると", "思[おも]う"],
      distractors: ["晴[は]れるを"],
      explanation: "Thoughts are quoted with と: 晴れると思う.",
    },
  ],
};
