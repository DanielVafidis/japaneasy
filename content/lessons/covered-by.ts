import type { Lesson } from "../types";

export const coveredBy: Lesson = {
  id: "covered-by",
  stage: "n1",
  order: 3,
  title: "Covered By & Split-Second Events",
  subtitle: "だらけ · まみれ · ずくめ · や否や · あげく",
  summary:
    "Abstract and literary polish — covered in, the instant that, and leftover endings for life reflection and formal narrative.",
  estMinutes: 20,
  vocabulary: [
    { word: "泥[どろ]", reading: "どろ", meaning: "mud" },
    { word: "汗[あせ]", reading: "あせ", meaning: "sweat" },
    { word: "間違[まちが]い", reading: "まちがい", meaning: "mistake" },
    { word: "矛盾[むじゅん]", reading: "むじゅん", meaning: "contradiction" },
    { word: "靴[くつ]", reading: "くつ", meaning: "shoes" },
    { word: "散歩[さんぽ]", reading: "さんぽ", meaning: "walk; stroll" },
    { word: "黒[くろ]", reading: "くろ", meaning: "black" },
    { word: "油[あぶら]", reading: "あぶら", meaning: "oil" },
    { word: "議論[ぎろん]", reading: "ぎろん", meaning: "discussion; debate" },
    { word: "報告書[ほうこくしょ]", reading: "ほうこくしょ", meaning: "written report" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Recognition grammar for novels, news, and N1: three **covered-in** suffixes, literary **instant** patterns, and leftovers ({{思いきや}} · {{がてら}} · {{あげく}}) for abstract life reflection and formal narrative.",
    },
    {
      type: "rule",
      title: "だらけ — riddled with",
      items: [
        "**Noun + {{だらけ}}** — full of / riddled with, usually negative.",
        "Abstract or scattered: {{矛盾だらけ}}, {{誤字だらけ}}, {{傷だらけ}}.",
        "Modify with {{の}}: {{泥だらけの靴}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "この報告書[ほうこくしょ]は矛盾[むじゅん]だらけだ。", en: "This report is riddled with contradictions." },
        { jp: "泥[どろ]だらけの靴[くつ]で家[いえ]に上[あ]がらないで。", en: "Don't come into the house in those mud-covered shoes." },
      ],
    },
    {
      type: "rule",
      title: "まみれ — coated in",
      items: [
        "**Noun + {{まみれ}}** — physically smeared: {{汗まみれ}}, {{油まみれ}}.",
        "Only things that stick to a surface — no {{間違いまみれ}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "議論[ぎろん]の末[すえ]、頭[あたま]が汗[あせ]まみれになった。", en: "After the debate, my head was soaked in sweat." },
        { jp: "手[て]が油[あぶら]まみれになった。", en: "My hands got covered in oil." },
      ],
    },
    {
      type: "rule",
      title: "ずくめ — entirely",
      items: [
        "**Noun + {{ずくめ}}** — through-and-through: {{黒ずくめ}}, {{いいことずくめ}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "黒[くろ]ずくめの男[おとこ]が静[しず]かに入[はい]ってきた。", en: "A man dressed entirely in black came in quietly." },
        { jp: "今月[こんげつ]はいいことずくめだった。", en: "This month was nothing but good news." },
      ],
    },
    {
      type: "heading",
      text: "The instant: が早いか · や否や · そばから",
    },
    {
      type: "prose",
      text: "Literary cousins of {{とたん}}. **{{が早いか}}** / **{{や否や}}** — no sooner X than Y. **{{そばから}}** — Y undoes X *every time*.",
    },
    {
      type: "examples",
      items: [
        { jp: "発表[はっぴょう]が終[お]わるが早[はや]いか、質問[しつもん]が飛[と]び交[か]った。", en: "The presentation had barely ended before questions flew." },
        { jp: "方針[ほうしん]を示[しめ]すや否[いな]や、反対[はんたい]の声[こえ]が上[あ]がった。", en: "No sooner was the policy announced than opposition rose." },
        { jp: "決[き]めたそばから、条件[じょうけん]が変[か]わっていく。", en: "The conditions change the moment I decide — every time." },
      ],
    },
    {
      type: "heading",
      text: "Loose ends: 思いきや · がてら · あげく",
    },
    {
      type: "rule",
      items: [
        "**{{思いきや}}** — 'or so I thought…' (expectation reversed).",
        "**Stem/noun + {{がてら}}** — while at it: {{散歩がてら}}.",
        "**Past + {{あげく}}** — after a long ordeal, usually a heavy ending.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "簡単[かんたん]だと思[おも]いきや、議論[ぎろん]は難航[なんこう]した。", en: "I thought it would be simple — but the debate stalled hard." },
        { jp: "散歩[さんぽ]がてら、郵便局[ゆうびんきょく]に寄[よ]ってきた。", en: "I stopped by the post office while out on a walk." },
        { jp: "さんざん悩[なや]んだあげく、辞表[じひょう]を出[だ]した。", en: "After agonizing forever, I submitted my resignation." },
      ],
    },
    {
      type: "tip",
      text: "These endings are recognition grammar — common in novels, news, and JLPT N1, rare in small talk. Reading volume beats drilling.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "A report full of contradictions — which suffix?",
      choices: ["矛盾だらけ", "矛盾まみれ", "矛盾ずくめ", "矛盾がてら"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "「Dressed all in black」?",
      choices: ["黒ずくめ", "黒だらけ", "黒まみれ", "黒ばかり"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "簡単だと思いきや… means?",
      choices: [
        "I thought it was simple — but unexpectedly it wasn't",
        "Because I thought it was simple",
        "The instant it was simple",
        "After it was simple for a long time",
      ],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "決めたそばから変わる — nuance of そばから?",
      choices: [
        "It changes again every single time I decide",
        "It changed just once, immediately",
        "It stays decided while I watch",
        "Deciding is better than changing",
      ],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "悩んだあげく、辞表を出した — feeling of あげく?",
      choices: [
        "After a long, draining deliberation, (I) resigned",
        "Without thinking at all, (I) resigned",
        "The instant I worried, (I) resigned",
        "While worrying, (I) also resigned",
      ],
      answer: 0,
    },
    {
      kind: "order",
      prompt: "Build: 'This report is riddled with mistakes'",
      tiles: ["この報告書[ほうこくしょ]は", "間違[まちが]いだらけ", "だ"],
      distractors: ["間違[まちが]いずくめ"],
      explanation: "Scattered mistakes → だらけ; ずくめ is 'entirely (dressed in / nothing but)'.",
    },
  ],
  drills: [
    { id: "darake", prompt: "Add 'riddled with' — 'full of contradictions'", jp: "矛盾[むじゅん]", answers: ["矛盾[むじゅん]だらけ"] },
    { id: "mamire", prompt: "Add 'coated in' — 'covered in sweat'", jp: "汗[あせ]", answers: ["汗[あせ]まみれ"] },
    { id: "zukume", prompt: "Add 'entirely in' — 'all in black'", jp: "黒[くろ]", answers: ["黒[くろ]ずくめ"] },
    { id: "yainaya", prompt: "Fill — literary 'the moment (he) announced…'", jp: "示[しめ]す◯◯◯、…", answers: ["や否[いな]や"] },
    { id: "ageku", prompt: "Fill — 'after all that worrying, (heavy end)'", jp: "悩[なや]んだ◯◯◯、…", answers: ["あげく"] },
  ],
};
