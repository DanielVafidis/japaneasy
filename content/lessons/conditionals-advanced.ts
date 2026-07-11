import type { Lesson } from "../types";

export const conditionalsAdvanced: Lesson = {
  id: "conditionals-advanced",
  stage: "n2",
  order: 7,
  title: "Advanced Conditionals",
  subtitle: "ばよかった · たらいい · たとしても · 限り · としたら",
  summary:
    "Regret, advice, extreme hypotheticals, and 'supposing that…' — conditionals for adult conversation.",
  estMinutes: 18,
  vocabulary: [
    { word: "相談[そうだん]", reading: "そうだん", meaning: "consultation; advice-seeking" },
    { word: "失敗[しっぱい]", reading: "しっぱい", meaning: "failure" },
    { word: "採用[さいよう]", reading: "さいよう", meaning: "hiring; adoption" },
    { word: "仮[かり]に", reading: "かりに", meaning: "supposing; if (hypothetically)" },
    { word: "続[つづ]ける", reading: "つづける", meaning: "to continue" },
    { word: "諦[あきら]める", reading: "あきらめる", meaning: "to give up" },
    { word: "傘[かさ]", reading: "かさ", meaning: "umbrella" },
    { word: "転職[てんしょく]", reading: "てんしょく", meaning: "job change" },
    { word: "予算[よさん]", reading: "よさん", meaning: "budget" },
    { word: "健康[けんこう]", reading: "けんこう", meaning: "health" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Beyond basic if-then, N2 conditionals handle **regret**, **suggestions**, **even if X**, and **pure hypotheticals**. You'll recognize pieces from N3 ({{限り}}, {{ても}}) and push them further.",
    },
    {
      type: "heading",
      text: "ばよかった — I wish I had…",
    },
    {
      type: "rule",
      title: "Counterfactual regret",
      items: [
        "ば-form + {{よかった}}: {{行けばよかった}} — 'I should have gone / wish I had gone.'",
        "Negative: {{行かなければよかった}} — 'I wish I hadn't gone.'",
        "Common spoken: {{行けばよかったのに}} (extra emotion).",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "もっと早[はや]く相談[そうだん]すればよかった。", en: "I should have consulted (someone) sooner." },
        { jp: "あの仕事[しごと]を受[う]けなければよかった。", en: "I wish I hadn't taken that job." },
        { jp: "傘[かさ]を持[も]ってくればよかったのに。", en: "I should have brought an umbrella (regret)." },
      ],
    },
    {
      type: "heading",
      text: "たらいい — it would be good if…",
    },
    {
      type: "prose",
      text: "{{〜たらいい}} gives **advice** or hopes: 'you should…' / 'it would be nice if…'. Related: {{〜ばいい}}, {{〜といい}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "疲[つか]れたら、休[やす]んだらいいよ。", en: "If you're tired, you should rest." },
        { jp: "採用[さいよう]されたらいいね。", en: "It would be great if you get hired." },
        { jp: "分[わ]からなかったら、聞[き]いたらいい。", en: "If you don't understand, you should ask." },
      ],
    },
    {
      type: "heading",
      text: "たとしても — even if (that were the case)",
    },
    {
      type: "examples",
      items: [
        { jp: "失敗[しっぱい]したとしても、諦[あきら]めない。", en: "Even if I fail, I won't give up." },
        { jp: "少[すこ]し高[たか]かったとしても、質[しつ]が良[よ]ければ買[か]う。", en: "Even if it's a bit expensive, I'll buy it if the quality is good." },
        { jp: "彼[かれ]が来[こ]なかったとしても、会議[かいぎ]は進[すす]める。", en: "Even if he doesn't come, we'll proceed with the meeting." },
      ],
    },
    {
      type: "heading",
      text: "限り — review",
    },
    {
      type: "examples",
      items: [
        { jp: "健康[けんこう]が許[ゆる]す限[かぎ]り、働[はたら]き続[つづ]ける。", en: "I'll keep working as long as my health allows." },
        { jp: "私[わたし]の知[し]る限[かぎ]り、問題[もんだい]はない。", en: "As far as I know, there's no problem." },
      ],
    },
    {
      type: "heading",
      text: "としたら / とすれば — supposing that…",
    },
    {
      type: "prose",
      text: "{{〜としたら}} / {{〜とすれば}} set a **hypothetical premise**: 'if we assume that…' Often with {{仮に}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "仮[かり]に明日[あした]転職[てんしょく]するとしたら、何[なに]を準備[じゅんび]する？", en: "Supposing you changed jobs tomorrow, what would you prepare?" },
        { jp: "予算[よさん]が半分[はんぶん]だとすれば、計画[けいかく]を見直[みなお]す必要がある。", en: "If we assume the budget is half, we need to rework the plan." },
        { jp: "それが本当[ほんとう]だとしたら、大[おお]きな問題[もんだい]だ。", en: "If that were true, it would be a big problem." },
      ],
    },
    {
      type: "table",
      caption: "Advanced conditional kit",
      headers: ["Pattern", "Use", "Example"],
      rows: [
        ["ばよかった", "Regret", "言えばよかった"],
        ["たらいい", "Advice / hope", "休んだらいい"],
        ["たとしても", "Even if (strong)", "失敗したとしても"],
        ["限り", "As long as / as far as", "知る限り"],
        ["としたら／とすれば", "Supposing that", "仮に行くとしたら"],
      ],
    },
    {
      type: "tip",
      text: "{{たとしても}} often feels more formal or emphatic than plain {{ても}}. Use it in essays and careful speech when you concede a point but hold your conclusion.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「I should have gone」?",
      choices: ["行ったらいい", "行けばよかった", "行くとしたら", "行く限り"],
      answer: 1,
      explanation: "ばよかった = regret / should have.",
    },
    {
      kind: "mc",
      prompt: "Advice: 'you should rest'?",
      choices: ["休めばよかった", "休んだらいい", "休むとしたら", "休む限り"],
      answer: 1,
      explanation: "たらいい for advice/suggestion.",
    },
    {
      kind: "mc",
      prompt: "「Even if I fail」 (emphatic)?",
      choices: ["失敗したら", "失敗したとしても", "失敗すればよかった", "失敗するらしい"],
      answer: 1,
      explanation: "たとしても = even if that were so.",
    },
    {
      kind: "fill",
      prompt: "Complete — 'supposing that':",
      promptJp: "仮[かり]に行[い]く◯、何[なに]を持[も]っていく？",
      answers: ["としたら", "とすれば"],
      explanation: "としたら / とすれば for hypothetical premise.",
    },
    {
      kind: "order",
      prompt: "Build: 'I should have consulted sooner'",
      tiles: ["もっと", "早[はや]く", "相談[そうだん]すれば", "よかった"],
      distractors: ["たらいい"],
      explanation: "ばよかった for past regret.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "失敗[しっぱい]したとしても諦[あきら]めない",
      explanation: "失敗したとしても諦めない — Even if I fail, I won't give up.",
    },
  ],
  drills: [
    { id: "ba-yokatta", prompt: "Regret — complete 'should have gone'", jp: "行[い]けば◯", answers: ["よかった"] },
    { id: "ba-yokatta-neg", prompt: "Regret negative — 'wish I hadn't'", jp: "行[い]かなければ◯", answers: ["よかった"] },
    { id: "tara-ii", prompt: "Advice — 'should rest'", jp: "休[やす]んだら◯", answers: ["いい", "いいよ"] },
    { id: "toshitemo", prompt: "Even if fail — fill", jp: "失敗[しっぱい]した◯諦[あきら]めない", answers: ["としても"] },
    { id: "toshitara", prompt: "Supposing — fill", jp: "仮[かり]に転職[てんしょく]する◯", answers: ["としたら", "とすれば"] },
  ],
};
