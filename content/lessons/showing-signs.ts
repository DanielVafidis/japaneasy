import type { Lesson } from "../types";

export const showingSigns: Lesson = {
  id: "showing-signs",
  stage: "advanced-topics",
  order: 3,
  title: "Showing Signs",
  subtitle: "がる · げ · っぽい · んばかり · めく",
  summary:
    "Describe how others seem to feel, outward signs of a state, being on the verge (んばかり), and taking on an atmosphere (めく).",
  estMinutes: 16,
  vocabulary: [
    { word: "嬉[うれ]しい", reading: "うれしい", meaning: "happy (i-adj)" },
    { word: "怖[こわ]い", reading: "こわい", meaning: "scary; afraid" },
    { word: "欲[ほ]しい", reading: "ほしい", meaning: "want (thing)" },
    { word: "子供[こども]っぽい", reading: "こどもっぽい", meaning: "childish" },
    { word: "気配[けはい]", reading: "けはい", meaning: "sign; indication" },
    { word: "怪[あや]しい", reading: "あやしい", meaning: "suspicious" },
    { word: "結果[けっか]", reading: "けっか", meaning: "result" },
    { word: "泣[な]く", reading: "なく", meaning: "to cry (u-verb)" },
    { word: "悲[かな]しい", reading: "かなしい", meaning: "sad (i-adj)" },
  ],
  blocks: [
    {
      type: "heading",
      text: "Third-person feelings: 〜がる",
    },
    {
      type: "prose",
      text: "Some emotions are stated directly only for **yourself**. For others, attach {{がる}} to the stem of i-adjectives like {{嬉[うれ]しい}} → {{嬉しがる}} ('seem happy / act happy'), {{怖[こわ]い}} → {{怖がる}} ('act scared'). {{欲[ほ]しい}} → {{欲しがる}} ('act like they want it').",
    },
    {
      type: "rule",
      title: "Usage",
      items: [
        "Conjugates like a u-verb: {{嬉しがっている}} · {{怖がらない}}.",
        "Don't use {{嬉しい}} about someone else in neutral narration — {{彼[かれ]は嬉しがっていた}} is natural.",
        "Questions to the person still use plain adjectives: {{嬉しいですか}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "妹[いもうと]は新[あたら]しいおもちゃを欲[ほ]しがっている。", en: "My little sister is acting like she wants the new toy." },
        { jp: "犬[いぬ]が雷[かみなり]を怖[こわ]がっている。", en: "The dog is scared of thunder." },
        { jp: "彼[かれ]は試験[しけん]の結果[けっか]を嬉[うれ]しがっていた。", en: "He was visibly pleased about the exam results." },
      ],
    },
    {
      type: "heading",
      text: "Outward appearance: 〜げ",
    },
    {
      type: "prose",
      text: "Stem + {{げ}} marks **visible aura** — you can see it on their face or manner: {{悲[かな]しげ}} (looking sad), {{不思議[ふしぎ]げ}} (looking puzzled). Works as na-adjective: {{悲しげな顔[かお]}}.",
    },
    {
      type: "heading",
      text: "〜っぽい — '-ish' tendency",
    },
    {
      type: "prose",
      text: "{{っぽい}} after nouns or stems suggests **typical traits** (not always flattering): {{子供[こども]っぽい}} (childish), {{忘[わす]れっぽい}} (forgetful). Colloquial and common in speech.",
    },
    {
      type: "heading",
      text: "Signs on the horizon: 気配 · 兆し",
    },
    {
      type: "examples",
      items: [
        { jp: "雨[あめ]の気配[けはい]がする。", en: "It feels like rain is coming." },
        { jp: "春[はる]の兆[きざ]しが見[み]える。", en: "Signs of spring are visible." },
        { jp: "あの人[ひと]、怪[あや]しげだね。", en: "That person looks suspicious, huh." },
      ],
    },
    {
      type: "note",
      text: "Don't confuse {{がる}} (behaviour) with {{げ}} (appearance) or {{っぽい}} (character type). A {{怒[おこ]りっぽい}} person gets angry easily; an {{怒りげ}} face looks angry right now.",
    },
    {
      type: "heading",
      text: "On the verge: 〜んばかり",
    },
    {
      type: "prose",
      text: "**Negative stem + {{んばかり}}({{に}}／{{の}}／{{だ}})** — literally 'as if to…' — paints someone or something on the very verge of an action: {{泣[な]き出[だ]さんばかり}} 'as if about to burst into tears'. {{する}} becomes {{せんばかり}}. Literary flavour; common in novels.",
    },
    {
      type: "examples",
      items: [
        { jp: "彼女[かのじょ]は泣[な]き出[だ]さんばかりの顔[かお]で謝[あやま]った。", en: "She apologized looking as if she would burst into tears." },
        { jp: "棚[たな]は崩[くず]れんばかりに本[ほん]が積[つ]まれている。", en: "The shelf is piled with books to the point of nearly collapsing." },
      ],
    },
    {
      type: "heading",
      text: "Atmosphere: 〜めく",
    },
    {
      type: "prose",
      text: "**Noun + {{めく}}** creates a u-verb meaning 'to take on the air of': {{春[はる]めく}} 'become spring-like', {{謎[なぞ]めく}} 'be enigmatic'. The past form {{〜めいた}} works as a modifier: {{謎めいた言[い]い方[かた]}} 'a cryptic way of speaking'.",
    },
    {
      type: "examples",
      items: [
        { jp: "三月[さんがつ]に入[はい]って、日[ひ]ざしが春[はる]めいてきた。", en: "Now that March is here, the sunlight has begun to feel spring-like." },
        { jp: "彼[かれ]は皮肉[ひにく]めいた笑[わら]い方[かた]をした。", en: "He laughed in a way that had an ironic edge." },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「The dog acts scared」 — natural?",
      choices: ["犬が怖い", "犬が怖がっている", "犬が怖げ", "犬が怖っぽい"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Childish behaviour」?",
      choices: ["子供がる", "子供げ", "子供っぽい", "子供気配"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "Visible sadness on someone's face?",
      choices: ["悲しい", "悲しがる", "悲しげ", "悲しっぽい"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "雨の___がする — signs of rain?",
      choices: ["がる", "げ", "気配", "っぽい"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "日ざしが春めいてきた means…",
      choices: [
        "The sunlight has started to feel spring-like",
        "Spring has officially ended",
        "The sun looks like it will cry",
        "It's definitely still winter",
      ],
      answer: 0,
      explanation: "Noun + めく = take on the atmosphere of.",
    },
    {
      kind: "mc",
      prompt: "泣き出さんばかりの顔 describes a face that…",
      choices: [
        "looks about to burst into tears",
        "is already crying loudly",
        "just finished crying",
        "never cries",
      ],
      answer: 0,
      explanation: "んばかり = on the very verge, as if about to.",
    },
    {
      kind: "order",
      prompt: "Build: 'My little sister is acting scared of the dog'",
      tiles: ["妹[いもうと]は", "犬[いぬ]を", "怖[こわ]がっている"],
      distractors: ["怖[こわ]いでいる"],
      explanation: "Others' feelings take がる: 怖がっている.",
    },
  ],
  drills: [
    { id: "garu", prompt: "Third person feeling — '(they) show wanting it'", jp: "欲[ほ]しい", answers: ["欲[ほ]しがる"] },
    { id: "ge", prompt: "Add the 'seeming' suffix — 'with a happy look'", jp: "嬉[うれ]しい", answers: ["嬉[うれ]しげ"] },
    { id: "ppoi", prompt: "Add '-ish' — 'childish'", jp: "子供[こども]", answers: ["子供[こども]っぽい"] },
    { id: "nbakari", prompt: "Fill — literary 'all but saying…'", jp: "言[い]わ◯◯◯◯に", answers: ["んばかり"] },
    { id: "meku", prompt: "Add 'showing signs of' — 'spring-like'", jp: "春[はる]", answers: ["春[はる]めく"] },
  ],
};
