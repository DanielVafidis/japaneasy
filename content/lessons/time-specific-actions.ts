import type { Lesson } from "../types";

export const timeSpecificActions: Lesson = {
  id: "time-specific-actions",
  stage: "special-expressions",
  order: 9,
  title: "Time-Specific Actions",
  subtitle: "たばかり · とたんに · ながら · まくる",
  summary:
    "Pin actions to a moment: something you just did, something that happened the instant something else did, two things at once, and doing something non-stop.",
  estMinutes: 16,
  vocabulary: [
    { word: "起[お]きる", reading: "おきる", meaning: "to wake up; to get up" },
    { word: "着[つ]く", reading: "つく", meaning: "to arrive" },
    { word: "傘[かさ]", reading: "かさ", meaning: "umbrella" },
    { word: "皿[さら]", reading: "さら", meaning: "plate; dish" },
    { word: "洗[あら]う", reading: "あらう", meaning: "to wash" },
    { word: "眠[ねむ]る", reading: "ねむる", meaning: "to sleep; to fall asleep" },
    { word: "残念[ざんねん]", reading: "ざんねん", meaning: "unfortunate; a shame" },
    { word: "連休[れんきゅう]", reading: "れんきゅう", meaning: "consecutive holidays; long weekend" },
    { word: "風[かぜ]", reading: "かぜ", meaning: "wind" },
    { word: "音楽[おんがく]", reading: "おんがく", meaning: "music" },
    { word: "聴[き]く", reading: "きく", meaning: "to listen (to music)", note: "聴く — attentive listening; 聞く — to hear/ask" },
    { word: "迷[まよ]う", reading: "まよう", meaning: "to get lost; to waver (u-verb)" },
    { word: "飛[と]ぶ", reading: "とぶ", meaning: "to fly; to jump (u-verb)" },
    { word: "レポート", reading: "レポート", meaning: "report; paper" },
  ],
  blocks: [
    {
      type: "prose",
      text: "This lesson collects four patterns that pin an action to a precise moment in time: **{{〜たばかり}}** 'just did', **{{〜たとたん}}** 'the instant … happened', **{{〜ながら}}** 'while doing', and casual **{{〜まくる}}** 'doing non-stop'.",
    },
    {
      type: "heading",
      text: "〜たばかり — just did",
    },
    {
      type: "rule",
      items: [
        "**Past tense + {{ばかり}}** — the action is hot off the press: {{起[お]きたばかり}} 'just woke up'.",
        "The result behaves like a noun: {{食[た]べたばかりだ}}, {{着[つ]いたばかりなので…}}, {{買[か]ったばかりの傘[かさ]}}.",
        "Casual speech clips it to {{ばっか}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "さっき起[お]きたばかりで、まだ眠[ねむ]い。", en: "I just woke up, so I'm still sleepy." },
        { jp: "日本[にほん]に来[き]たばかりの頃[ころ]は、駅[えき]で毎回[まいかい]迷[まよ]った。", en: "When I'd only just come to Japan, I got lost at the station every single time." },
        { jp: "買[か]ったばかりの傘[かさ]を電車[でんしゃ]に忘[わす]れた。", en: "I left my brand-new umbrella on the train." },
      ],
    },
    {
      type: "note",
      text: "Different beast: {{〜てばかり}} (te-form + ばかり) means 'doing **nothing but**' — {{寝[ね]てばかりいる}} 'does nothing but sleep'. The amounts lesson covers that ばかり; here it's **past tense** + ばかり = 'just did'.",
    },
    {
      type: "heading",
      text: "〜たとたん（に） — the instant that",
    },
    {
      type: "prose",
      text: "**Past tense + {{とたん}}({{に}})** says the second thing happened *the very instant* the first did. The catch: the second event must be something **outside your control** — a reaction, not a plan.",
    },
    {
      type: "examples",
      items: [
        { jp: "ドアを開[あ]けたとたん、犬[いぬ]が飛[と]び出[だ]した。", en: "The instant I opened the door, the dog shot out." },
        { jp: "横[よこ]になったとたんに、眠[ねむ]ってしまった。", en: "The moment I lay down, I fell asleep." },
      ],
    },
    {
      type: "note",
      text: "Because とたん reports involuntary outcomes, you can't follow it with something you chose to do — for plans, plain {{〜たらすぐ}} works instead.",
    },
    {
      type: "heading",
      text: "〜ながら — while doing",
    },
    {
      type: "rule",
      items: [
        "**Verb stem + {{ながら}}**: {{聴[き]く}} → {{聴きながら}} 'while listening'.",
        "The **main** action comes last; ながら marks the background one.",
        "Only the final verb carries tense: {{飲[の]みながら書[か]いた}} 'wrote while drinking'.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "音楽[おんがく]を聴[き]きながら、皿[さら]を洗[あら]う。", en: "I wash the dishes while listening to music." },
        { jp: "コーヒーを飲[の]みながらレポートを書[か]いていた。", en: "I was writing the report while drinking coffee." },
      ],
    },
    {
      type: "prose",
      text: "{{ながら}} also attaches to nouns and adjectives with an implied state-of-being (no {{だ}}): {{残念[ざんねん]ながら}} 'while it's unfortunate…'. Add {{も}} for '**even** while': {{ながらも}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "残念[ざんねん]ながら、今回[こんかい]は参加[さんか]できません。", en: "Unfortunately, I can't take part this time." },
        { jp: "狭[せま]いながらも、居心地[いごこち]のいい部屋[へや]だ。", en: "Small as it is, it's a comfortable room." },
      ],
    },
    {
      type: "heading",
      text: "〜まくる — non-stop, like crazy",
    },
    {
      type: "prose",
      text: "**Verb stem + {{まくる}}** is very casual and means doing something with reckless abandon. Since it describes an ongoing spree, it usually shows up as {{〜まくっている}} or past {{〜まくった}}, and conjugates like any u-verb.",
    },
    {
      type: "examples",
      items: [
        { jp: "連休[れんきゅう]はドラマを見[み]まくった。", en: "I binged dramas the whole long weekend." },
        { jp: "妹[いもうと]は最近[さいきん]、写真[しゃしん]を撮[と]りまくっている。", en: "My little sister has been taking photos non-stop lately." },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「I just ate」?",
      choices: ["食べたばかりだ", "食べてばかりだ", "食べるばかりだ", "食べばかりだ"],
      answer: 0,
      explanation: "Past + ばかり = just did. 食べてばかり would mean 'does nothing but eat'.",
    },
    {
      kind: "mc",
      prompt: "Which sentence uses とたん naturally?",
      choices: [
        "窓を開けたとたん、冷たい風が入ってきた",
        "窓を開けたとたん、勉強を始めた",
        "窓を開けるとたん、風が入った",
        "窓を開けたとたん、開けようとした",
      ],
      answer: 0,
      explanation: "とたん takes past tense before it, and the result must be involuntary — wind blowing in, not a decision to study.",
    },
    {
      kind: "fill",
      prompt: "「Looking at your phone while walking is dangerous」 — fill the gap",
      promptJp: "歩き（　）スマホを見るのは危ない。",
      answers: ["ながら"],
      explanation: "Verb stem + ながら = while doing.",
    },
    {
      kind: "mc",
      prompt: "残念ながら means…",
      choices: [
        "Unfortunately…",
        "While it's fun…",
        "Just finished…",
        "The instant it happened…",
      ],
      answer: 0,
      explanation: "ながら on a noun/na-adjective keeps its 'while being' sense: 'while it's a shame' → unfortunately.",
    },
    {
      kind: "mc",
      prompt: "ゲームをやりまくっている means…",
      choices: [
        "Playing games non-stop",
        "Just started playing games",
        "Better not to play games",
        "Can't play games",
      ],
      answer: 0,
      explanation: "Stem + まくる = doing with reckless abandon.",
    },
    {
      kind: "order",
      prompt: "Build: 'I run while listening to music'",
      tiles: ["音楽[おんがく]を", "聴[き]きながら", "走[はし]る"],
      distractors: ["聴[き]いてから"],
      explanation: "Stem + ながら marks the background action; the main verb comes last.",
    },
  ],
  drills: [
    { id: "tabakari", prompt: "Say 'just woke up'", jp: "起[お]きる", answers: ["起[お]きたばかり"] },
    { id: "totan", prompt: "Fill — 'the instant (I) arrived…'", jp: "着[つ]いた◯◯◯、…", answers: ["とたん", "とたんに"] },
    { id: "nagara", prompt: "Say 'while washing' — two actions at once", jp: "洗[あら]う", answers: ["洗[あら]いながら"] },
    { id: "makuru", prompt: "Add 'do like crazy' — 'eat and eat'", jp: "食[た]べる", answers: ["食[た]べまくる"] },
  ],
};
