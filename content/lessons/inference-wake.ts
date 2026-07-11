import type { Lesson } from "../types";

export const inferenceWake: Lesson = {
  id: "inference-wake",
  stage: "n2",
  order: 8,
  title: "Inference & わけ",
  subtitle: "わけだ · わけではない · わけにはいかない · に違いない · はずがない · ものだ",
  summary:
    "Draw conclusions, push back on implications, refuse on principle, and state what is natural or inevitable.",
  estMinutes: 18,
  vocabulary: [
    { word: "責任[せきにん]", reading: "せきにん", meaning: "responsibility" },
    { word: "礼儀[れいぎ]", reading: "れいぎ", meaning: "manners; etiquette" },
    { word: "約束[やくそく]", reading: "やくそく", meaning: "promise" },
    { word: "電車[でんしゃ]", reading: "でんしゃ", meaning: "train" },
    { word: "鍵[かぎ]", reading: "かぎ", meaning: "key" },
    { word: "失敗[しっぱい]", reading: "しっぱい", meaning: "failure" },
    { word: "辞[や]める", reading: "やめる", meaning: "to quit; to resign" },
    { word: "断[ことわ]る", reading: "ことわる", meaning: "to refuse; to decline" },
    { word: "議論[ぎろん]", reading: "ぎろん", meaning: "discussion; debate" },
    { word: "嘘[うそ]", reading: "うそ", meaning: "lie" },
  ],
  blocks: [
    {
      type: "prose",
      text: "These patterns are about **what follows from evidence** — conclusions, denials of implication, moral can'ts, and 'that's just how things are.'",
    },
    {
      type: "heading",
      text: "わけだ — so that means…",
    },
    {
      type: "examples",
      items: [
        { jp: "電車[でんしゃ]が止[と]まった。遅[おく]れたわけだ。", en: "The train stopped. So that's why I was late." },
        { jp: "三[みっ]つもバイトをしている。忙[いそが]しいわけだ。", en: "He has three part-time jobs. No wonder he's busy." },
      ],
    },
    {
      type: "heading",
      text: "わけではない — it's not that…",
    },
    {
      type: "prose",
      text: "{{〜わけではない}} softens or denies a strong implication: 'it's not the case that…' / 'I don't mean…'",
    },
    {
      type: "examples",
      items: [
        { jp: "行[い]きたくないわけではない。ただ時間[じかん]がない。", en: "It's not that I don't want to go — I just don't have time." },
        { jp: "彼[かれ]が悪[わる]いわけではないと思う。", en: "I don't think it's that he's entirely at fault." },
      ],
    },
    {
      type: "heading",
      text: "わけにはいかない — can't very well…",
    },
    {
      type: "examples",
      items: [
        { jp: "責任[せきにん]があるから、今[いま]辞[や]めるわけにはいかない。", en: "I have responsibility, so I can't very well quit now." },
        { jp: "約束[やくそく]した以上[いじょう]、断[ことわ]るわけにはいかない。", en: "Having promised, I can't really refuse." },
      ],
    },
    {
      type: "heading",
      text: "に違いない · はずがない",
    },
    {
      type: "rule",
      title: "Strong certainty vs strong denial",
      items: [
        "**{{に違いない}}** — must be; no doubt: {{彼がやったに違いない}}.",
        "**{{はずがない}}** — there's no way: {{嘘のはずがない}} / {{彼が来るはずがない}}.",
        "Related: {{はずだ}} (should be) from the similar-points lesson.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "鍵[かぎ]がない。どこかに落[お]としたに違[ちが]いない。", en: "The key's gone. I must have dropped it somewhere." },
        { jp: "彼[かれ]がそんなことを言[い]うはずがない。", en: "There's no way he would say such a thing." },
        { jp: "この結果[けっか]は計算[けいさん]ミスのはずがない。", en: "This result can't be a calculation error (no way)." },
      ],
    },
    {
      type: "heading",
      text: "ものだ — natural / used to",
    },
    {
      type: "rule",
      title: "ものだ senses",
      items: [
        "**Natural tendency:** {{人は間違えるものだ}} — people make mistakes (that's life).",
        "**Used to (past):** {{子供のころはよく川で遊んだものだ}}.",
        "**Exclamation / deep feeling:** {{懐かしいものだ}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "若[わか]いときは失敗[しっぱい]するものだ。", en: "When you're young, you fail — that's natural." },
        { jp: "学生[がくせい]のころは、夜[よる]まで議論[ぎろん]したものだ。", en: "Back in my student days, we used to debate until night." },
        { jp: "礼儀[れいぎ]は守[まも]るものだ。", en: "Manners are something one observes (ought to)." },
      ],
    },
    {
      type: "table",
      caption: "Inference toolkit",
      headers: ["Pattern", "Meaning", "Example"],
      rows: [
        ["わけだ", "So that explains…", "だから遅れたわけだ"],
        ["わけではない", "It's not that…", "嫌なわけではない"],
        ["わけにはいかない", "Can't (on principle)", "断るわけにはいかない"],
        ["に違いない", "Must be", "彼だに違いない"],
        ["はずがない", "No way", "来るはずがない"],
        ["ものだ", "Natural / used to", "失敗するものだ"],
      ],
    },
    {
      type: "tip",
      text: "{{わけにはいかない}} is about social/moral impossibility, not physical can't ({{できない}}). 'I can't leave early' as duty → {{わけにはいかない}}.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「It's not that I don't want to go」?",
      choices: ["行きたくないわけだ", "行きたくないわけではない", "行きたくないに違いない", "行きたくないものだ"],
      answer: 1,
      explanation: "わけではない denies the implication.",
    },
    {
      kind: "mc",
      prompt: "Can't quit on principle?",
      choices: ["辞めるわけだ", "辞めるわけにはいかない", "辞めるはずがない only", "辞めたものだ"],
      answer: 1,
      explanation: "わけにはいかない = can't very well…",
    },
    {
      kind: "mc",
      prompt: "「There's no way he would say that」?",
      choices: ["言うに違いない", "言うはずがない", "言うわけだ", "言うものだ only"],
      answer: 1,
      explanation: "はずがない = no way / impossible expectation.",
    },
    {
      kind: "fill",
      prompt: "Complete — 'must have dropped it':",
      promptJp: "落[お]としたに◯",
      answers: ["違いない", "ちがいない"],
      explanation: "に違いない = must be.",
    },
    {
      kind: "order",
      prompt: "Build: 'So that's why I was late'",
      tiles: ["だから", "遅[おく]れた", "わけだ"],
      distractors: ["ものだ"],
      explanation: "わけだ draws the logical conclusion.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "断[ことわ]るわけにはいかない",
      explanation: "断るわけにはいかない — I can't very well refuse.",
    },
  ],
  drills: [
    { id: "wake-da", prompt: "Conclusion — fill", jp: "だから忙[いそが]しい◯だ", answers: ["わけ"] },
    { id: "wake-dewanai", prompt: "Deny implication — fill", jp: "嫌[いや]なわけ◯、時間[じかん]がないだけだ", answers: ["ではない", "じゃない"] },
    { id: "wake-niwa-ikanai", prompt: "Principle can't — complete", jp: "辞[や]めるわけには◯", answers: ["いかない"] },
    { id: "chigainai", prompt: "Must be — fill", jp: "彼[かれ]がやったに◯", answers: ["違[ちが]いない", "違いない", "ちがいない"] },
    { id: "hazu-ga-nai", prompt: "No way — fill", jp: "来[く]るはず◯", answers: ["がない"] },
  ],
};
