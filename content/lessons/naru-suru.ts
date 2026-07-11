import type { Lesson } from "../types";

export const naruSuru: Lesson = {
  id: "naru-suru",
  stage: "essential-grammar",
  order: 8,
  title: "Becoming and Deciding",
  subtitle: "になる · にする · ようになる · ことにする",
  summary:
    "Describe change with なる and make choices with する — then unlock ようになる and ことにする to do the same with whole verbs.",
  estMinutes: 16,
  vocabulary: [
    { word: "なる", reading: "なる", meaning: "to become" },
    { word: "決[き]める", reading: "きめる", meaning: "to decide" },
    { word: "医者[いしゃ]", reading: "いしゃ", meaning: "doctor" },
    { word: "発音[はつおん]", reading: "はつおん", meaning: "pronunciation" },
    { word: "引[ひ]っ越[こ]す", reading: "ひっこす", meaning: "to move (house)" },
    { word: "野菜[やさい]", reading: "やさい", meaning: "vegetable" },
    { word: "運動[うんどう]", reading: "うんどう", meaning: "exercise" },
    { word: "甘[あま]い", reading: "あまい", meaning: "sweet" },
    { word: "来月[らいげつ]", reading: "らいげつ", meaning: "next month" },
    { word: "大阪[おおさか]", reading: "おおさか", meaning: "Osaka" },
    { word: "妹[いもうと]", reading: "いもうと", meaning: "younger sister" },
    { word: "弟[おとうと]", reading: "おとうと", meaning: "younger brother" },
    { word: "長[なが]い", reading: "ながい", meaning: "long (i-adj)" },
    { word: "ニュース", reading: "ニュース", meaning: "the news" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Two of the very first verbs you met — {{なる}} 'to become' and {{する}} 'to do' — team up with the {{に}} particle to express **change** ({{になる}}) and **choice** ({{にする}}). Once you can use them with nouns and adjectives, a small trick with generic nouns lets you use them with entire verbs, too.",
    },
    {
      type: "rule",
      title: "なる with nouns and na-adjectives",
      items: [
        "**Noun + {{になる}}** — {{医者[いしゃ]になる}} 'become a doctor'.",
        "**Na-adjective + {{になる}}** — {{静[しず]かになる}} 'become quiet'.",
        "Past tense for completed change: {{になった}}.",
      ],
    },
    {
      type: "rule",
      title: "なる with i-adjectives",
      items: [
        "Drop {{い}}, add {{く}}: {{暑[あつ]い}} → {{暑くなる}} 'get hot'.",
        "{{いい}} conjugates from {{よ}}: {{よくなる}} 'get better'.",
        "Negatives work the same way: {{食[た]べない}} → {{食べなくなる}} 'stop eating'.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "妹[いもうと]は医者[いしゃ]になった。", en: "My little sister became a doctor." },
        { jp: "夜[よる]になって、街[まち]が静[しず]かになった。", en: "Night fell and the town got quiet." },
        { jp: "六月[ろくがつ]から日[ひ]が長[なが]くなるね。", en: "The days get longer from June, don't they?" },
        { jp: "毎日[まいにち]練習[れんしゅう]して、発音[はつおん]がきれいになった。", en: "I practiced every day and my pronunciation got clean." },
      ],
    },
    {
      type: "heading",
      text: "Deciding with にする",
    },
    {
      type: "prose",
      text: "{{する}} with the {{に}} particle means **'decide on' / 'go with'** — literally 'do toward X'. It's the standard way to order food, pick a colour, or settle any choice.",
    },
    {
      type: "examples",
      items: [
        { jp: "私[わたし]はカレーにします。", en: "I'll go with the curry." },
        { jp: "色[いろ]は青[あお]にした。", en: "I went with blue for the colour." },
        { jp: "どれにする？", en: "Which one are you going with? (casual)" },
      ],
    },
    {
      type: "heading",
      text: "ようになる・ようにする — change and effort with verbs",
    },
    {
      type: "prose",
      text: "Verbs can't take {{に}} directly, so Japanese bridges the gap with a generic noun: {{よう}} (manner) or {{こと}} (event). **Verb + {{ようになる}}** = things reached the point where the verb happens; **verb + {{ようにする}}** = you see to it that it happens (an ongoing effort).",
    },
    {
      type: "rule",
      items: [
        "**{{〜ようになる}}** — came to be that…: {{朝早[あさはや]く起[お]きるようになった}} 'I've started waking up early.'",
        "**{{〜ようにする}}** — make an effort to: {{毎日[まいにち]運動[うんどう]するようにしている}} 'I make a point of exercising daily.'",
        "**Potential + {{ようになる}}** — became able to: {{泳[およ]げるようになった}}.",
        "**Negative change** usually skips よう: {{来[こ]なくなった}} 'stopped coming'.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "練習[れんしゅう]して、漢字[かんじ]が書[か]けるようになった。", en: "After practicing, I became able to write kanji." },
        { jp: "毎朝[まいあさ]六時[ろくじ]に起[お]きるようにしている。", en: "I make it a point to get up at six every morning." },
        { jp: "弟[おとうと]は野菜[やさい]を食[た]べなくなった。", en: "My little brother stopped eating vegetables." },
      ],
    },
    {
      type: "tip",
      text: "Potential form + {{ようになる}} is the classic 'progress' pattern — perfect for talking about your Japanese: {{ニュースが分[わ]かるようになった}} 'I've become able to follow the news.'",
    },
    {
      type: "heading",
      text: "ことになる・ことにする — decisions as events",
    },
    {
      type: "prose",
      text: "Swap {{よう}} for {{こと}} and the nuance shifts from *manner* to *event*. **{{ことになる}}** — it's been decided/arranged (by circumstances, not you). **{{ことにする}}** — you decide it yourself.",
    },
    {
      type: "examples",
      items: [
        { jp: "来月[らいげつ]、大阪[おおさか]に引[ひ]っ越[こ]すことになりました。", en: "It's been arranged that I move to Osaka next month." },
        { jp: "甘[あま]い物[もの]をやめることにした。", en: "I've decided to quit sweets." },
      ],
    },
    {
      type: "note",
      text: "{{ことになっている}} describes a standing arrangement or rule: {{ゴミは朝[あさ]出[だ]すことになっている}} 'The rule is that garbage goes out in the morning.'",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「The days got longer」?",
      choices: ["日が長くなった", "日が長いなった", "日が長になった", "日が長くした"],
      answer: 0,
      explanation: "I-adjectives drop い and take く before なる: 長い → 長くなる.",
    },
    {
      kind: "mc",
      prompt: "Ordering at a restaurant — 「I'll have the ramen」?",
      choices: ["ラーメンにします", "ラーメンをします", "ラーメンがなります", "ラーメンでします"],
      answer: 0,
      explanation: "にする = decide on / go with.",
    },
    {
      kind: "fill",
      prompt: "「I practiced and became able to swim」 — fill the gap",
      promptJp: "練習して、泳げる（　）なった。",
      answers: ["ように"],
      explanation: "Potential + ようになる = became able to.",
    },
    {
      kind: "mc",
      prompt: "引っ越すことになった vs 引っ越すことにした — the difference?",
      choices: [
        "になった = arranged by circumstances · にした = my own decision",
        "になった = my own decision · にした = arranged by circumstances",
        "They are identical",
        "になった is future · にした is past",
      ],
      answer: 0,
      explanation: "なる = things became that way; する = you did the deciding.",
    },
    {
      kind: "mc",
      prompt: "彼はコーヒーを飲まなくなった means…",
      choices: [
        "He stopped drinking coffee",
        "He started drinking coffee",
        "He can't drink coffee",
        "He decided on coffee",
      ],
      answer: 0,
      explanation: "Negative + くなる = reached the state of not doing — 'stopped'.",
    },
    {
      kind: "order",
      prompt: "Build: 'I became able to read kanji'",
      tiles: ["漢字[かんじ]が", "読[よ]めるように", "なった"],
      distractors: ["読[よ]むことに"],
      explanation: "Potential 読める + ようになる = became able to read.",
    },
  ],
  drills: [
    { id: "noun-naru", prompt: "Become — 'become a doctor'", jp: "医者[いしゃ] ＋ なる", answers: ["医者[いしゃ]になる"] },
    { id: "i-naru", prompt: "Become — 'get early/fast'", jp: "早[はや]い ＋ なる", answers: ["早[はや]くなる"] },
    { id: "ni-suru", prompt: "Decide on it — ordering", jp: "野菜[やさい] ＋ する", answers: ["野菜[やさい]にする"] },
    { id: "you-ni-naru", prompt: "Fill — 'reached the point of speaking'", jp: "話[はな]せる◯◯になる", answers: ["よう"] },
    { id: "koto-ni-suru", prompt: "Fill — 'decided to move'", jp: "引[ひ]っ越[こ]すこと◯する", answers: ["に"] },
  ],
};
