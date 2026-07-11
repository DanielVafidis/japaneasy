import type { Lesson } from "../types";

export const quotedSpeech: Lesson = {
  id: "quoted-speech",
  stage: "n3",
  order: 6,
  title: "Quoted Speech",
  subtitle: "Direct quotes · と · って · と思う",
  summary:
    "Report what friends and coworkers said — and soft-pedal your own opinions — with と, casual って, and と思う.",
  estMinutes: 16,
  vocabulary: [
    { word: "言[い]う", reading: "いう", meaning: "to say" },
    { word: "聞[き]く", reading: "きく", meaning: "to hear; ask" },
    { word: "思[おも]う", reading: "おもう", meaning: "to think" },
    { word: "考[かんが]える", reading: "かんがえる", meaning: "to consider" },
    { word: "意見[いけん]", reading: "いけん", meaning: "opinion" },
    { word: "会議[かいぎ]", reading: "かいぎ", meaning: "meeting" },
    { word: "部長[ぶちょう]", reading: "ぶちょう", meaning: "section chief; manager" },
    { word: "不満[ふまん]", reading: "ふまん", meaning: "dissatisfaction" },
  ],
  blocks: [
    {
      type: "heading",
      text: "Direct quote",
    },
    {
      type: "prose",
      text: "Wrap the exact words in {{「」}}, add {{と}}, then the verb ({{言う}}, {{聞く}}, {{叫ぶ}}, etc.). Essential when you relay a complaint or an opinion word-for-word.",
    },
    {
      type: "examples",
      items: [
        { jp: "同僚[どうりょう]が、「もう疲[つか]れた」と言[い]った。", en: 'A coworker said, "I\'m exhausted already."' },
        { jp: "「明日[あした]の会議[かいぎ]は中止[ちゅうし]だ」と部長[ぶちょう]から聞[き]いた。", en: 'I heard from the manager, "Tomorrow\'s meeting is cancelled."' },
      ],
    },
    {
      type: "heading",
      text: "Interpreted quote & opinions",
    },
    {
      type: "prose",
      text: "For the **gist** — not word-for-word — drop the {{「」}} and use plain form + {{と}} + {{言う／聞く／思う／考える}}. {{〜と思う}} softens **your** opinion: {{それは無理だと思う}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "部長[ぶちょう]から明日[あした]は休[やす]みだと聞[き]いた。", en: "I heard from the manager that tomorrow is a day off." },
        { jp: "その意見[いけん]は正[ただ]しいと思[おも]う。", en: "I think that opinion is right." },
        { jp: "彼[かれ]は不満[ふまん]だと言[い]っていた。", en: "He was saying he was dissatisfied." },
      ],
    },
    {
      type: "rule",
      title: "Don't forget だ in quotes",
      items: [
        "Noun / na-adjective quotes need explicit {{だ}}: {{彼は部長だと聞いた}}.",
        "Without {{だ}}: {{何と言いましたか}} — 'What did he say?' (not 'what is it?').",
      ],
    },
    {
      type: "heading",
      text: "Casual って",
    },
    {
      type: "prose",
      text: "{{って}} replaces {{と}} in casual speech for quotes and hearsay: {{来月、大阪に転勤するって}} — 'They say they're transferring to Osaka next month.'",
    },
    {
      type: "examples",
      items: [
        { jp: "兄[あに]は、来月[らいげつ]大阪[おおさか]に行[い]くって。", en: "My brother says he's going to Osaka next month." },
        { jp: "彼女[かのじょ]、もう怒[おこ]ってないって。", en: "She says she's not angry anymore." },
      ],
    },
    {
      type: "dialogue",
      title: "Passing on a complaint",
      lines: [
        { speaker: "A", jp: "田中[たなか]さん、何[なに]か言[い]ってた？", en: "Did Tanaka-san say something?" },
        { speaker: "B", jp: "納期[のうき]がきついって。無理[むり]だと思[おも]う、とも言[い]ってた。", en: "Said the deadline is tight. Also said they think it's impossible." },
        { speaker: "A", jp: "そうか。部長[ぶちょう]に伝[つた]えよう。", en: "Got it. I'll tell the manager." },
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
      prompt: "「I heard he is the manager」 — need だ?",
      choices: ["部長と聞いた", "部長だと聞いた", "部長ですと聞いた", "部長が聞いた"],
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
      prompt: "Softening your opinion?",
      choices: ["〜と言う", "〜と思う", "〜を思う", "〜が思う"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「She says she's not angry」 — casual?",
      choices: ["怒ってないと", "怒ってないって", "怒ってないを", "怒ってないが"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'I think that plan is impossible'",
      tiles: ["その計画[けいかく]は", "無理[むり]だと", "思[おも]う"],
      distractors: ["無理[むり]を"],
      explanation: "Thoughts and opinions are quoted with と: 無理だと思う.",
    },
  ],
  drills: [
    { id: "to-quote", prompt: "Fill the quote particle — '…said they're dissatisfied'", jp: "不満[ふまん]だ◯言[い]った", answers: ["と"] },
    { id: "to-omou", prompt: "Say 'I think it's impossible'", jp: "無理[むり]だ", answers: ["無理[むり]だと思[おも]う"] },
    { id: "tte", prompt: "Fill the casual quote — '(they) said they won't go'", jp: "行[い]かない◯◯言[い]ってた", answers: ["って"] },
    { id: "da-in-quote", prompt: "Fill — quoting a noun needs it: 'said (he) is the manager'", jp: "部長[ぶちょう]◯と言[い]った", answers: ["だ"] },
  ],
};
