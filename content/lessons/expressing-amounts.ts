import type { Lesson } from "../types";

export const expressingAmounts: Lesson = {
  id: "expressing-amounts",
  stage: "special-expressions",
  order: 5,
  title: "Expressing Amounts",
  subtitle: "だけ · しか · ばかり · くらい · すぎる · ほど",
  summary:
    "Limit, approximate, or exaggerate quantities — from 'only three' to 'so much that…'.",
  estMinutes: 18,
  vocabulary: [
    { word: "だけ", reading: "だけ", meaning: "only; as much as" },
    { word: "しか", reading: "しか", meaning: "only (with negative)" },
    { word: "ばかり", reading: "ばかり", meaning: "nothing but; just (did)" },
    { word: "くらい", reading: "くらい", meaning: "about; to the extent" },
    { word: "すぎる", reading: "すぎる", meaning: "to exceed; too much" },
    { word: "ほど", reading: "ほど", meaning: "extent; so much that" },
  ],
  blocks: [
    {
      type: "heading",
      text: "Limiting: だけ vs しか…ない",
    },
    {
      type: "prose",
      text: "Both mean 'only', but **{{だけ}}** is neutral (works with positive or negative) while **{{しか}}** must pair with a **negative** verb and adds a 'no more than this' feel.",
    },
    {
      type: "examples",
      items: [
        { jp: "りんごだけ。", en: "Apples only. / Just apples." },
        { jp: "三[さん]人[にん]しか来[こ]なかった。", en: "Only three people came (and that's all)." },
        { jp: "これだけあれば十分[じゅうぶん]だ。", en: "This much is enough." },
      ],
    },
    {
      type: "heading",
      text: "ばかり — nothing but / just happened",
    },
    {
      type: "rule",
      title: "Two main uses",
      items: [
        "**Nothing but X:** {{ゲームばかりしている}} — doing nothing but games.",
        "**Just (recently) did:** {{来[き]たばかり}} — just arrived. Past tense before {{ばかり}}.",
        "Don't confuse with {{ばか}} (fool) or {{くらい}} (about).",
      ],
    },
    {
      type: "heading",
      text: "Approximating: くらい / ぐらい",
    },
    {
      type: "prose",
      text: "{{くらい}} (or {{ぐらい}}) marks **approximate amount** or **extent** — 'about ten minutes', 'to the point where…'. After numbers: {{十[じゅう]分[ふん]くらい}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "駅[えき]まで歩[ある]いて十[じゅう]分[ふん]くらい。", en: "About ten minutes on foot to the station." },
        { jp: "忙[いそが]しくて、寝[ね]る時間[じかん]がないくらい。", en: "So busy there's no time to sleep." },
      ],
    },
    {
      type: "heading",
      text: "Too much: すぎる",
    },
    {
      type: "rule",
      title: "Stem + すぎる",
      items: [
        "Attach to **ます-stem**: {{食[た]べ}} + {{すぎる}} → {{食べすぎる}} — eat too much.",
        "Also with adjectives: {{大[おお]き}} + {{すぎる}} → {{大きすぎる}}; na-adj: {{静[しず]か}} + {{すぎる}}.",
        "Conjugates as ru-verb: {{飲[の]みすぎた}} · {{高[たか]すぎない}}.",
      ],
    },
    {
      type: "heading",
      text: "Extent: ほど",
    },
    {
      type: "prose",
      text: "{{ほど}} means 'to the degree that' — often paired with negatives for 'not so much that': {{死[し]ぬほど}} (enough to die). {{〜ば〜ほど}} — 'the more X, the more Y'.",
    },
    {
      type: "examples",
      items: [
        { jp: "練習[れんしゅう]すればするほど上手[じょうず]になる。", en: "The more you practice, the better you get." },
        { jp: "見[み]たこともないほど大[おお]きい。", en: "So big I've never seen anything like it." },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Only three left (emphasis: no more)」 — natural?",
      choices: ["三つだけ", "三つしかない", "三つばかり", "三つくらい"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Just arrived (recently)」?",
      choices: ["来るばかり", "来たばかり", "来だけ", "来しかない"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Ate too much」?",
      choices: ["食べすぎる", "食べだけ", "食べほど", "食べばかり"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "しか must appear with…",
      choices: ["positive verb only", "negative verb", "past tense only", "nouns only"],
      answer: 1,
    },
  ],
};
