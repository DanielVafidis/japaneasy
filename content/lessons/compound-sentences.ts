import type { Lesson } from "../types";

export const compoundSentences: Lesson = {
  id: "compound-sentences",
  stage: "n4",
  order: 11,
  title: "Compound Sentences",
  subtitle: "Chaining · けど · し · light から · のに",
  summary:
    "Chain descriptions and actions for simple storytelling — plus but (けど), listing reasons (し), light because (から), and despite (のに).",
  estMinutes: 18,
  vocabulary: [
    { word: "静[しず]か", reading: "しずか", meaning: "quiet" },
    { word: "狭[せま]い", reading: "せまい", meaning: "narrow; cramped" },
    { word: "忙[いそが]しい", reading: "いそがしい", meaning: "busy" },
    { word: "遅[おく]れる", reading: "おくれる", meaning: "to be late" },
    { word: "疲[つか]れる", reading: "つかれる", meaning: "to get tired" },
    { word: "時間[じかん]", reading: "じかん", meaning: "time" },
    { word: "安[やす]い", reading: "やすい", meaning: "cheap" },
    { word: "美味[おい]しい", reading: "おいしい", meaning: "delicious" },
    { word: "図書館[としょかん]", reading: "としょかん", meaning: "library" },
    { word: "顔[かお]", reading: "かお", meaning: "face" },
    { word: "長[なが]い", reading: "ながい", meaning: "long (i-adj)" },
    { word: "急[いそ]ぐ", reading: "いそぐ", meaning: "to hurry (u-verb)" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Stories need **chaining**: several descriptions or steps in one breath. Nouns/na-adjectives use {{で}}; i-adjectives use {{くて}}; verbs use the **te-form**. Then add soft linkers like {{けど}}, {{し}}, light {{から}}, and {{のに}}.",
    },
    {
      type: "rule",
      title: "Chaining states",
      items: [
        "Na-adj / noun: {{静かで}} · {{学生で}}.",
        "I-adj: {{狭くて}} · {{安くて}} ({{いい}} → {{よくて}}).",
        "Negative: {{じゃなくて}} · {{狭くなくて}}.",
      ],
    },
    {
      type: "examples",
      title: "Describing a place",
      items: [
        { jp: "このカフェは静[しず]かで、安[やす]くて、好[す]きだ。", en: "This café is quiet, cheap, and I like it." },
        { jp: "今日[きょう]の会議[かいぎ]は長[なが]くて、疲[つか]れた。", en: "Today's meeting was long, and I got tired." },
      ],
    },
    {
      type: "heading",
      text: "Chaining verbs (sequence)",
    },
    {
      type: "prose",
      text: "Te-form sequences read as 'did X, then Y'. **Final** verb sets the tense for the chain.",
    },
    {
      type: "examples",
      items: [
        { jp: "駅[えき]に行[い]って、切符[きっぷ]を買[か]って、乗[の]った。", en: "I went to the station, bought a ticket, and boarded." },
        { jp: "図書館[としょかん]に行[い]って、宿題[しゅくだい]をして、帰[かえ]る。", en: "Go to the library, do homework, and head home." },
      ],
    },
    {
      type: "heading",
      text: "けど · が — but / although",
    },
    {
      type: "prose",
      text: "{{けど}} (casual) / {{が}} (politer) softens contrast: {{行きたいけど、時間がない}}. Great for complaints that stay polite.",
    },
    {
      type: "examples",
      items: [
        { jp: "電車[でんしゃ]は速[はや]いけど、今日[きょう]は遅[おく]れた。", en: "Trains are fast, but today it was late." },
        { jp: "手伝[てつだ]いたいですが、今[いま]はちょっと忙[いそが]しいです。", en: "I'd like to help, but I'm a bit busy right now." },
      ],
    },
    {
      type: "heading",
      text: "し — listing reasons",
    },
    {
      type: "prose",
      text: "{{し}} stacks reasons (often unfinished list): {{安いし、近いし、…}} — 'it's cheap, and close, and…'.",
    },
    {
      type: "examples",
      items: [
        { jp: "この店[みせ]、美味[おい]しいし、安[やす]いし、また来[き]たい。", en: "This place is tasty and cheap — I want to come again." },
        { jp: "今日[きょう]は雨[あめ]だし、疲[つか]れてるし、帰[かえ]る。", en: "It's raining, and I'm tired, so I'm heading home." },
      ],
    },
    {
      type: "heading",
      text: "Light から · のに",
    },
    {
      type: "rule",
      title: "Because (light) & despite",
      items: [
        "**{{から}}** — because / so (your reason): {{時間がないから、行かない}}.",
        "**{{のに}}** — despite / even though (frustration): {{急いだのに、遅れた}}.",
        "Deeper reason stack (ので, ため, せいで…) is in Reasons & Causes (N3).",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "遅[おく]れたから、会議[かいぎ]に入[はい]れなかった。", en: "Because I was late, I couldn't join the meeting." },
        { jp: "早[はや]く出[で]たのに、電車[でんしゃ]が来[こ]なかった。", en: "Even though I left early, the train didn't come." },
      ],
    },
    {
      type: "dialogue",
      title: "Simple story of a bad morning",
      lines: [
        { speaker: "A", jp: "今朝[けさ]、どうしたの？顔[かお]が疲[つか]れてるよ。", en: "What happened this morning? You look wiped." },
        { speaker: "B", jp: "アラームが鳴[な]らなかったし、雨[あめ]だったし…。", en: "The alarm didn't go off, and it was raining…" },
        { speaker: "A", jp: "急[いそ]いだのに遅[おく]れた感じ？", en: "Rushed but still late?" },
        { speaker: "B", jp: "うん。駅[えき]まで走[はし]って、乗[の]ったけど、結局[けっきょく]遅[おく]れた。", en: "Yeah. Ran to the station, got on, but was late anyway." },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Chain 静か (na-adj)?",
      choices: ["静かくて", "静かで", "静かに", "静かだて"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Chain 安い (i-adj)?",
      choices: ["安いで", "安くて", "安いく", "安まって"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「tasty and cheap (listing)」 linker?",
      choices: ["から", "し", "のに", "たら"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Even though I hurried, I was late」?",
      choices: ["急いだから遅れた", "急いだのに遅れた", "急いだし遅れた", "急いでけど遅れた"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Soft 'but' casual?",
      choices: ["から", "けど", "のに", "し"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'It's a cheap and tasty shop'",
      tiles: ["安[やす]くて", "美味[おい]しい", "店[みせ]だ"],
      distractors: ["安[やす]いで"],
      explanation: "I-adj chains with くて.",
    },
  ],
  drills: [
    { id: "na-chain", prompt: "Chain — 'quiet and cheap'", jp: "静[しず]か ＋ 安[やす]い", answers: ["静[しず]かで安[やす]い"] },
    { id: "i-chain", prompt: "Chain — 'cheap and quiet'", jp: "安[やす]い ＋ 静[しず]か", answers: ["安[やす]くて静[しず]か"] },
    { id: "kedo", prompt: "Fill — soft but", jp: "行[い]きたい◯◯、時間[じかん]がない", answers: ["けど", "けれど", "けれども"] },
    { id: "shi", prompt: "Fill — listing reason", jp: "安[やす]い◯、近[ちか]い…", answers: ["し"] },
    { id: "kara", prompt: "Fill — light because", jp: "時間[じかん]がない◯◯、行[い]かない", answers: ["から"] },
    { id: "noni", prompt: "Fill — despite", jp: "早[はや]く出[で]た◯◯、遅[おく]れた", answers: ["のに"] },
  ],
};
