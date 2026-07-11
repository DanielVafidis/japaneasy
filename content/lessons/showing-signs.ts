import type { Lesson } from "../types";

export const showingSigns: Lesson = {
  id: "showing-signs",
  stage: "n2",
  order: 11,
  title: "Showing Signs",
  subtitle: "がる · げ · っぽい · んばかり · めく",
  summary:
    "Read subtle cues in conflict and communication — how others seem to feel, outward signs, on-the-verge んばかり, and atmospheric めく.",
  estMinutes: 16,
  vocabulary: [
    { word: "嬉[うれ]しい", reading: "うれしい", meaning: "happy" },
    { word: "怖[こわ]い", reading: "こわい", meaning: "scary; afraid" },
    { word: "欲[ほ]しい", reading: "ほしい", meaning: "want (thing)" },
    { word: "子供[こども]っぽい", reading: "こどもっぽい", meaning: "childish" },
    { word: "気配[けはい]", reading: "けはい", meaning: "sign; indication" },
    { word: "悲[かな]しい", reading: "かなしい", meaning: "sad" },
    { word: "皮肉[ひにく]", reading: "ひにく", meaning: "irony; sarcasm" },
    { word: "泣[な]く", reading: "なく", meaning: "to cry" },
  ],
  blocks: [
    {
      type: "heading",
      text: "Third-person feelings: 〜がる",
    },
    {
      type: "prose",
      text: "Some emotions are stated directly only for **yourself**. For others, stem + {{がる}}: {{嬉しがる}}, {{怖がる}}, {{欲しがる}}. Essential for subtle relationship talk — you describe behaviour, not claim their inner state as fact.",
    },
    {
      type: "examples",
      items: [
        { jp: "部下[ぶか]は昇進[しょうしん]を欲[ほ]しがっている。", en: "The subordinate is acting like they want a promotion." },
        { jp: "彼[かれ]は批判[ひはん]を怖[こわ]がっている。", en: "He's acting scared of criticism." },
        { jp: "彼女[かのじょ]は結果[けっか]を嬉[うれ]しがっていた。", en: "She was visibly pleased about the results." },
      ],
    },
    {
      type: "heading",
      text: "Outward appearance: 〜げ",
    },
    {
      type: "prose",
      text: "Stem + {{げ}} — **visible aura**: {{悲しげな顔}}, {{不思議げ}}. Soft communication: you report what you see, not what you know.",
    },
    {
      type: "heading",
      text: "〜っぽい — '-ish'",
    },
    {
      type: "prose",
      text: "{{っぽい}} after nouns/stems: {{子供っぽい}}, {{忘れっぽい}}, {{怒りっぽい}}. Colloquial — often a mild complaint about character.",
    },
    {
      type: "examples",
      items: [
        { jp: "その反論[はんろん]、子供[こども]っぽいよ。", en: "That rebuttal is childish." },
        { jp: "彼[かれ]は怒[おこ]りっぽいけど、悪[わる]い人[ひと]じゃない。", en: "He gets angry easily, but he's not a bad person." },
        { jp: "会議室[かいぎしつ]に緊張[きんちょう]の気配[けはい]がする。", en: "There's a sense of tension in the meeting room." },
      ],
    },
    {
      type: "heading",
      text: "On the verge: 〜んばかり",
    },
    {
      type: "prose",
      text: "**Negative stem + {{んばかり}}** — 'as if about to…': {{泣き出さんばかり}}. Literary flavour in novels and careful description of conflict.",
    },
    {
      type: "examples",
      items: [
        { jp: "彼女[かのじょ]は泣[な]き出[だ]さんばかりの顔[かお]で謝[あやま]った。", en: "She apologized looking as if she would burst into tears." },
        { jp: "彼[かれ]は言[い]わんばかりに肩[かた]をすくめた。", en: "He shrugged as if to say (exactly that)." },
      ],
    },
    {
      type: "heading",
      text: "Atmosphere: 〜めく",
    },
    {
      type: "prose",
      text: "**Noun + {{めく}}** — take on the air of: {{春めく}}, {{謎めく}}, {{皮肉めいた笑い方}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "彼[かれ]は皮肉[ひにく]めいた笑[わら]い方[かた]をした。", en: "He laughed in a way that had an ironic edge." },
        { jp: "議論[ぎろん]が哲学[てつがく]めいてきた。", en: "The debate has started to take on a philosophical air." },
      ],
    },
    {
      type: "note",
      text: "Don't confuse {{がる}} (behaviour), {{げ}} (appearance now), and {{っぽい}} (character type). A {{怒りっぽい}} person gets angry easily; an {{怒りげ}} face looks angry right now.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「He acts scared of criticism」 — natural?",
      choices: ["彼が怖い", "彼が怖がっている", "彼が怖げ", "彼が怖っぽい"],
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
      prompt: "緊張の___がする — signs of tension?",
      choices: ["がる", "げ", "気配", "っぽい"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "泣き出さんばかりの顔 describes a face that…",
      choices: ["looks about to burst into tears", "is already crying loudly", "just finished crying", "never cries"],
      answer: 0,
    },
    {
      kind: "order",
      prompt: "Build: 'She is acting like she wants a promotion'",
      tiles: ["彼女[かのじょ]は", "昇進[しょうしん]を", "欲[ほ]しがっている"],
      distractors: ["欲[ほ]しいでいる"],
      explanation: "Others' feelings take がる: 欲しがっている.",
    },
  ],
  drills: [
    { id: "garu", prompt: "Third person feeling — '(they) show wanting it'", jp: "欲[ほ]しい", answers: ["欲[ほ]しがる"] },
    { id: "ge", prompt: "Add the 'seeming' suffix — 'with a sad look'", jp: "悲[かな]しい", answers: ["悲[かな]しげ"] },
    { id: "ppoi", prompt: "Add '-ish' — 'childish'", jp: "子供[こども]", answers: ["子供[こども]っぽい"] },
    { id: "nbakari", prompt: "Fill — literary 'all but saying…'", jp: "言[い]わ◯◯◯◯に", answers: ["んばかり"] },
    { id: "meku", prompt: "Add 'showing signs of' — 'ironic-edged'", jp: "皮肉[ひにく]", answers: ["皮肉[ひにく]めく"] },
  ],
};
