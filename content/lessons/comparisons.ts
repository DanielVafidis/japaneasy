import type { Lesson } from "../types";

export const comparisons: Lesson = {
  id: "comparisons",
  stage: "essential-grammar",
  order: 10,
  title: "Comparisons",
  subtitle: "の方が · より · 一番 · によって · によると",
  summary:
    "Say one thing beats another with 方 and より, crown a winner with 一番, and pick up the よる family — 'depending on' and 'according to'.",
  estMinutes: 18,
  vocabulary: [
    { word: "紅茶[こうちゃ]", reading: "こうちゃ", meaning: "black tea" },
    { word: "自転車[じてんしゃ]", reading: "じてんしゃ", meaning: "bicycle" },
    { word: "値段[ねだん]", reading: "ねだん", meaning: "price" },
    { word: "切符[きっぷ]", reading: "きっぷ", meaning: "ticket" },
    { word: "健康[けんこう]", reading: "けんこう", meaning: "health" },
    { word: "一番[いちばん]", reading: "いちばん", meaning: "number one; the most" },
    { word: "天気予報[てんきよほう]", reading: "てんきよほう", meaning: "weather forecast" },
    { word: "違[ちが]う", reading: "ちがう", meaning: "to differ; to be wrong" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Japanese has no '-er' or '-est'. Instead, the noun {{方[ほう]}} ('side, direction') points at the winning side of a comparison, and {{より}} marks the losing side. Both work with plain grammar you already know.",
    },
    {
      type: "rule",
      title: "Xの方が… — X is more…",
      items: [
        "**Noun + {{の方が}}**: {{猫[ねこ]の方が好[す]き}} 'I like cats more.'",
        "**Na-adjective + {{な方}}**: {{静[しず]かな方がいい}} 'quieter is better.'",
        "**Verb (plain) + {{方}}**: {{歩[ある]く方が健康[けんこう]にいい}} 'walking is healthier.'",
        "**Negative verb + {{方}}**: {{見[み]ない方がいい}} 'better not to look.'",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "バスより電車[でんしゃ]の方[ほう]が速[はや]いよ。", en: "The train is faster than the bus." },
        { jp: "コーヒーより紅茶[こうちゃ]の方[ほう]が好[す]きだ。", en: "I like black tea more than coffee." },
        { jp: "窓側[まどがわ]の席[せき]の方[ほう]がいいな。", en: "A window seat would be better." },
      ],
    },
    {
      type: "heading",
      text: "Suggestions: 〜た方がいい",
    },
    {
      type: "prose",
      text: "For advice, positive verbs go in the **past tense** — {{寝[ね]た方がいい}} sounds more confident and direct than plain {{寝る方がいい}}. Negative advice stays in plain non-past: {{しない方がいい}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "明日[あした]は早[はや]いから、もう寝[ね]た方[ほう]がいいよ。", en: "You're up early tomorrow — better go to sleep already." },
        { jp: "熱[ねつ]があるなら、無理[むり]しない方[ほう]がいい。", en: "If you have a fever, better not to push yourself." },
      ],
    },
    {
      type: "heading",
      text: "より — rather than",
    },
    {
      type: "prose",
      text: "{{より}} attaches straight to the thing that loses the comparison — no particle needed. It often pairs with {{の方が}}, but context can carry it alone. Whatever stands before {{より}} stays in plain **non-past** form, even in past-tense sentences.",
    },
    {
      type: "examples",
      items: [
        { jp: "今日[きょう]は昨日[きのう]より寒[さむ]い。", en: "Today is colder than yesterday." },
        { jp: "歩[ある]くより自転車[じてんしゃ]の方[ほう]が早[はや]かった。", en: "Going by bike was quicker than walking.", note: "歩く stays non-past before より even though the sentence is past." },
      ],
    },
    {
      type: "note",
      text: "The proverb {{花[はな]より団子[だんご]}} — 'dumplings over blossoms' — uses this exact grammar: substance beats appearances.",
    },
    {
      type: "heading",
      text: "Superlatives: 誰よりも and 一番",
    },
    {
      type: "prose",
      text: "Put a question word before {{より}}(+{{も}}) and you've compared against everything at once: {{誰[だれ]よりも}} 'more than anyone'. Everyday Japanese also loves {{一番[いちばん]}} ('number one') in front of an adjective — the simplest superlative there is.",
    },
    {
      type: "examples",
      items: [
        { jp: "姉[あね]は家族[かぞく]の誰[だれ]よりも早[はや]く起[お]きる。", en: "My big sister gets up earlier than anyone in the family." },
        { jp: "健康[けんこう]が何[なに]より大切[たいせつ]だ。", en: "Health matters more than anything." },
        { jp: "クラスの中[なか]で一番[いちばん]背[せ]が高[たか]いのは誰[だれ]？", en: "Who's the tallest in the class?" },
      ],
    },
    {
      type: "heading",
      text: "Stem + 方（かた） — how to do",
    },
    {
      type: "prose",
      text: "Read as {{かた}}, {{方}} attaches to a verb stem to make a noun meaning 'the way of doing': {{読[よ]み方}} 'how to read'. Because the result is a noun, the verb's original particles switch to {{の}}: {{駅[えき]に行く}} → {{駅への行き方}} or simply {{駅の行き方}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "この漢字[かんじ]の読[よ]み方[かた]が分[わ]からない。", en: "I don't know how to read this kanji." },
        { jp: "切符[きっぷ]の買[か]い方[かた]を教[おし]えてください。", en: "Please show me how to buy a ticket." },
      ],
    },
    {
      type: "heading",
      text: "によって・によると",
    },
    {
      type: "prose",
      text: "{{によって}} — the te-form of {{よる}} 'to depend' — means **'depending on'**: results vary with X. Plain {{による}} ends a sentence: 'it depends on X'. With the {{と}} conditional you get {{によると}} — **'according to'** — which marks a source of information and usually pairs with hearsay ({{そうだ}}・{{らしい}} — covered properly later, in Similarity & Hearsay).",
    },
    {
      type: "examples",
      items: [
        { jp: "値段[ねだん]は店[みせ]によって違[ちが]う。", en: "Prices differ depending on the store." },
        { jp: "行[い]くかどうかは天気[てんき]によるね。", en: "Whether we go depends on the weather." },
        { jp: "天気予報[てんきよほう]によると、明日[あした]は雪[ゆき]が降[ふ]るらしい。", en: "According to the forecast, it's apparently going to snow tomorrow." },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「The bus is cheaper than the taxi」?",
      choices: [
        "タクシーよりバスの方が安い",
        "バスよりタクシーの方が安い",
        "タクシーの方がバスより高い",
        "バスはタクシーが安い",
      ],
      answer: 0,
      explanation: "より marks the loser (taxi), の方が marks the winner (bus).",
    },
    {
      kind: "mc",
      prompt: "Giving advice — 「You'd better rest」?",
      choices: ["休んだ方がいい", "休むの方がいい", "休みた方がいい", "休んで方がいい"],
      answer: 0,
      explanation: "Positive suggestions use the past tense: 休んだ方がいい.",
    },
    {
      kind: "mc",
      prompt: "「Better not to go」?",
      choices: ["行かない方がいい", "行かなかった方がいい", "行くない方がいい", "行きない方がいい"],
      answer: 0,
      explanation: "Negative advice stays non-past: ない方がいい.",
    },
    {
      kind: "fill",
      prompt: "「I don't know how to use this computer」 — fill the gap",
      promptJp: "このパソコンの使い（　）が分からない。",
      answers: ["方", "かた"],
      explanation: "Verb stem + 方（かた） = the way of doing.",
    },
    {
      kind: "mc",
      prompt: "「According to the news, …」?",
      choices: ["ニュースによると", "ニュースによって", "ニュースにとって", "ニュースによる"],
      answer: 0,
      explanation: "によると marks a source of information; によって is 'depending on'.",
    },
    {
      kind: "mc",
      prompt: "味は人によって違う means…",
      choices: [
        "Taste differs depending on the person",
        "Taste is decided by one person",
        "Everyone has the same taste",
        "According to people, it tastes good",
      ],
      answer: 0,
      explanation: "によって = depending on.",
    },
    {
      kind: "order",
      prompt: "Build: 'The train is faster than the bus'",
      tiles: ["バスより", "電車[でんしゃ]の方[ほう]が", "速[はや]い"],
      distractors: ["バスの方[ほう]が"],
      explanation: "より marks the loser, の方が the winner; the adjective comes last.",
    },
  ],
};
