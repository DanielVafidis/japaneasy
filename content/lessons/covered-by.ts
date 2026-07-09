import type { Lesson } from "../types";

export const coveredBy: Lesson = {
  id: "covered-by",
  stage: "advanced-topics",
  order: 8,
  title: "Covered By & Split-Second Events",
  subtitle: "だらけ · まみれ · ずくめ · や否や · あげく",
  summary:
    "Literary polish: three ways to say something is covered in something, three 'the instant that' patterns, and three leftover endings — 思いきや, がてら, あげく.",
  estMinutes: 20,
  vocabulary: [
    { word: "泥[どろ]", reading: "どろ", meaning: "mud" },
    { word: "汗[あせ]", reading: "あせ", meaning: "sweat" },
    { word: "油[あぶら]", reading: "あぶら", meaning: "oil" },
    { word: "間違[まちが]い", reading: "まちがい", meaning: "mistake" },
    { word: "作文[さくぶん]", reading: "さくぶん", meaning: "composition; essay" },
    { word: "満席[まんせき]", reading: "まんせき", meaning: "fully seated; no seats free" },
    { word: "散歩[さんぽ]", reading: "さんぽ", meaning: "walk; stroll" },
    { word: "郵便局[ゆうびんきょく]", reading: "ゆうびんきょく", meaning: "post office" },
  ],
  blocks: [
    {
      type: "prose",
      text: "This final lesson gathers the guide's remaining expressions: three suffixes for being **covered in** something ({{だらけ}}・{{まみれ}}・{{ずくめ}}), three literary patterns for **the instant** something happens ({{が早[はや]いか}}・{{や否[いな]や}}・{{そばから}}), and three loose ends ({{思[おも]いきや}}・{{がてら}}・{{あげく}}). These lean toward written Japanese — aim to recognize them when reading.",
    },
    {
      type: "rule",
      title: "だらけ — riddled with",
      items: [
        "**Noun + {{だらけ}}** — full of / riddled with, almost always negative in tone.",
        "Works for abstract or scattered things: {{誤字[ごじ]だらけ}}, {{ほこりだらけ}}, {{傷[きず]だらけ}}.",
        "Acts like a noun — modify with {{の}}: {{泥[どろ]だらけの靴[くつ]}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "この作文[さくぶん]は間違[まちが]いだらけだ。", en: "This essay is riddled with mistakes." },
        { jp: "泥[どろ]だらけの靴[くつ]で家[いえ]に上[あ]がらないで。", en: "Don't come into the house in those mud-covered shoes." },
      ],
    },
    {
      type: "rule",
      title: "まみれ — coated in",
      items: [
        "**Noun + {{まみれ}}** — physically smeared or soaked: {{汗[あせ]まみれ}}, {{血[ち]まみれ}}, {{油[あぶら]まみれ}}.",
        "Only for things that literally stick to a surface — liquids, dust. No {{間違いまみれ}}, no {{傷まみれ}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "自転車[じてんしゃ]を直[なお]して、手[て]が油[あぶら]まみれになった。", en: "I fixed the bike and my hands got covered in oil." },
        { jp: "汗[あせ]まみれのシャツを急[いそ]いで洗[あら]った。", en: "I hurriedly washed the sweat-soaked shirt." },
      ],
    },
    {
      type: "rule",
      title: "ずくめ — entirely, nothing but",
      items: [
        "**Noun + {{ずくめ}}** — head-to-toe, through-and-through; neutral or positive.",
        "Mostly set phrases: {{黒[くろ]ずくめ}} 'all in black', {{いいことずくめ}} 'nothing but good things'.",
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
      text: "The instant that: が早いか・や否や・そばから",
    },
    {
      type: "prose",
      text: "Three literary cousins of {{とたん}}. **{{が早いか}}** and **{{や否[いな]や}}** attach to the dictionary form: no sooner had X happened than Y. **{{そばから}}** adds a twist — Y undoes X *every time*, repeatedly.",
    },
    {
      type: "examples",
      items: [
        { jp: "チャイムが鳴[な]るが早[はや]いか、生徒[せいと]たちは教室[きょうしつ]を飛[と]び出[だ]した。", en: "The chime had barely rung before the students burst out of the classroom." },
        { jp: "店[みせ]が開[ひら]くや否[いな]や、客[きゃく]がなだれ込[こ]んだ。", en: "No sooner had the shop opened than customers poured in." },
        { jp: "習[なら]ったそばから、単語[たんご]が抜[ぬ]けていく。", en: "The words slip away the moment I learn them — every time." },
      ],
    },
    {
      type: "note",
      text: "{{や否や}} is read {{やいなや}}; in older or very literary prose you may see bare {{や}} doing the same job.",
    },
    {
      type: "heading",
      text: "Loose ends: 思いきや・がてら・あげく",
    },
    {
      type: "rule",
      items: [
        "**{{思[おも]いきや}}** — 'or so I thought…': sets up an expectation that turns out wrong.",
        "**Stem/noun + {{がてら}}** — while at it, killing two birds: {{散歩[さんぽ]がてら}}.",
        "**Past + {{あげく}}（挙句）** — after a long ordeal, ending in a (usually bad) result.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "空[す]いていると思[おも]いきや、店[みせ]は満席[まんせき]だった。", en: "I assumed it would be empty — but the place was packed." },
        { jp: "散歩[さんぽ]がてら、郵便局[ゆうびんきょく]に寄[よ]ってきた。", en: "I stopped by the post office while out on a walk." },
        { jp: "さんざん迷[まよ]ったあげく、何[なに]も買[か]わずに帰[かえ]った。", en: "After agonizing forever, I went home without buying anything." },
      ],
    },
    {
      type: "tip",
      text: "These endings are recognition grammar — common in novels, news and JLPT N1, rare in small talk. Reading volume, not drilling, is what makes them stick.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "A car covered in scratches — which suffix?",
      choices: ["傷だらけ", "傷まみれ", "傷ずくめ", "傷がてら"],
      answer: 0,
      explanation: "まみれ only works for things that coat a surface (liquids, dust); scratches take だらけ.",
    },
    {
      kind: "mc",
      prompt: "「Dressed all in black」?",
      choices: ["黒ずくめ", "黒だらけ", "黒まみれ", "黒ばかり"],
      answer: 0,
      explanation: "ずくめ = entirely, through-and-through — the set phrase for clothing.",
    },
    {
      kind: "mc",
      prompt: "雨だと思いきや… means?",
      choices: [
        "I thought it was rain — but unexpectedly it wasn't",
        "Because I thought it would rain",
        "The instant it rained",
        "After it rained for a long time",
      ],
      answer: 0,
      explanation: "思いきや flags an expectation that turned out wrong.",
    },
    {
      kind: "mc",
      prompt: "片付けるそばから散らかされる — the nuance of そばから?",
      choices: [
        "It gets messed up again every single time I tidy",
        "It got messed up just once, immediately",
        "It stays tidy while I watch it",
        "Tidying is better than messing up",
      ],
      answer: 0,
      explanation: "そばから marks an immediate undoing that happens repeatedly.",
    },
    {
      kind: "mc",
      prompt: "考えたあげく、断った — the feeling of あげく?",
      choices: [
        "After a long, draining deliberation, (I) turned it down",
        "Without thinking at all, (I) turned it down",
        "The instant I thought of it, (I) turned it down",
        "While thinking, (I) also turned it down",
      ],
      answer: 0,
      explanation: "あげく = after a drawn-out process, with a heavy or negative ending.",
    },
    {
      kind: "order",
      prompt: "Build: 'I got covered in mud on the way home'",
      tiles: ["帰[かえ]り道[みち]で", "泥[どろ]だらけに", "なった"],
      distractors: ["泥[どろ]ずくめに"],
      explanation: "Mud coats and scatters → だらけ (or まみれ); ずくめ is for 'entirely (dressed in / nothing but)'.",
    },
  ],
  drills: [
    { id: "darake", prompt: "Add 'riddled with' — 'full of mistakes'", jp: "間違[まちが]い", answers: ["間違[まちが]いだらけ"] },
    { id: "mamire", prompt: "Add 'coated in' — 'covered in sweat'", jp: "汗[あせ]", answers: ["汗[あせ]まみれ"] },
    { id: "zukume", prompt: "Add 'entirely in' — 'all in black'", jp: "黒[くろ]", answers: ["黒[くろ]ずくめ"] },
    { id: "yainaya", prompt: "Fill — literary 'the moment (he) arrived…'", jp: "着[つ]く◯◯◯、…", answers: ["や否[いな]や"] },
    { id: "ageku", prompt: "Fill — 'after all that worrying, (bad end)'", jp: "悩[なや]んだ◯◯◯、…", answers: ["あげく"] },
  ],
};
