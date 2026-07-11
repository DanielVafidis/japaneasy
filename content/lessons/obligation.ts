import type { Lesson } from "../types";

export const obligation: Lesson = {
  id: "obligation",
  stage: "n4",
  order: 2,
  title: "Must & Have To",
  subtitle: "なければならない · てはいけない · なくてもいい · てもいい",
  summary:
    "Say what you must do at work or school, what is forbidden, what you may skip — and permission with てもいい.",
  estMinutes: 18,
  vocabulary: [
    { word: "宿題[しゅくだい]", reading: "しゅくだい", meaning: "homework" },
    { word: "残業[ざんぎょう]", reading: "ざんぎょう", meaning: "overtime" },
    { word: "遅刻[ちこく]", reading: "ちこく", meaning: "lateness; being late" },
    { word: "約束[やくそく]", reading: "やくそく", meaning: "promise; appointment" },
    { word: "入[はい]る", reading: "はいる", meaning: "to enter" },
    { word: "吸[す]う", reading: "すう", meaning: "to smoke; to inhale" },
    { word: "タバコ", reading: "タバコ", meaning: "cigarette" },
    { word: "休[やす]む", reading: "やすむ", meaning: "to rest; to take a day off" },
    { word: "撮[と]る", reading: "とる", meaning: "to take (a photo) (u-verb)" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Commutes, classrooms, and offices are full of **rules**. Japanese packages obligation, prohibition, exemption, and permission into a tight set of patterns built from negative and te-forms.",
    },
    {
      type: "heading",
      text: "Must / have to",
    },
    {
      type: "rule",
      title: "なければならない",
      items: [
        "Negative stem + {{なければならない}} — 'must / have to'.",
        "{{行かなければならない}} — must go.",
        "Softer twin: {{なければいけない}}.",
        "Casual: {{なきゃ}} / {{なくちゃ}} / {{ないと}} — {{行かなきゃ}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "明日[あした]までに宿題[しゅくだい]を出[だ]さなければならない。", en: "I have to hand in the homework by tomorrow." },
        { jp: "今日[きょう]は残業[ざんぎょう]しなきゃ。", en: "Gotta do overtime today." },
        { jp: "約束[やくそく]の時間[じかん]に間[ま]に合[あ]わないといけない。", en: "I have to make it on time for the appointment." },
      ],
    },
    {
      type: "heading",
      text: "Must not & don't have to",
    },
    {
      type: "rule",
      title: "Prohibition vs exemption",
      items: [
        "**Must not:** {{てはいけない}} / {{てはダメ}} / casual {{ちゃだめ}}.",
        "**Don't have to:** {{なくてもいい}} — not required.",
        "Don't mix them: {{来なくてもいい}} = you may skip coming; {{来てはいけない}} = you're not allowed to come.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "ここでタバコを吸[す]ってはいけない。", en: "You must not smoke here." },
        { jp: "遅刻[ちこく]してはだめだよ。", en: "You mustn't be late." },
        { jp: "明日[あした]は来[こ]なくてもいいです。", en: "You don't have to come tomorrow." },
        { jp: "今日[きょう]は残業[ざんぎょう]しなくてもいい。", en: "I don't have to do overtime today." },
      ],
    },
    {
      type: "heading",
      text: "Permission: てもいい",
    },
    {
      type: "prose",
      text: "{{てもいい}} means **'may / is allowed to'**. Ask with {{てもいいですか}}: {{座ってもいいですか}} — 'May I sit?' Negative permission often uses {{なくてもいい}} (already above) or {{てはいけません}} for refusal.",
    },
    {
      type: "examples",
      items: [
        { jp: "窓[まど]を開[あ]けてもいいですか。", en: "May I open the window?" },
        { jp: "写真[しゃしん]を撮[と]ってもいいよ。", en: "It's okay to take photos." },
        { jp: "早[はや]く帰[かえ]ってもいい。", en: "You may go home early." },
      ],
    },
    {
      type: "table",
      caption: "Four patterns at a glance",
      headers: ["Pattern", "Meaning"],
      rows: [
        ["しなければならない", "must do"],
        ["してはいけない", "must not do"],
        ["しなくてもいい", "don't have to"],
        ["してもいい", "may / allowed to"],
      ],
    },
    {
      type: "dialogue",
      title: "Office rules",
      lines: [
        { speaker: "A", jp: "今日[きょう]、早[はや]く帰[かえ]ってもいいですか。", en: "May I leave early today?" },
        { speaker: "B", jp: "報告書[ほうこくしょ]を出[だ]してからなら、いいよ。", en: "If you've submitted the report, sure." },
        { speaker: "A", jp: "じゃ、出[だ]さなきゃ。", en: "Then I gotta submit it." },
        { speaker: "B", jp: "あと、会議室[かいぎしつ]に食[た]べ物[もの]を持[も]って入[はい]っちゃだめだよ。", en: "Also, you mustn't bring food into the meeting room." },
      ],
    },
    {
      type: "note",
      text: "{{べき}} ('should / ought to') is softer advice and shows up later. {{なければならない}} feels like a rule or real necessity.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Must do homework」?",
      choices: ["してもいい", "しなければならない", "してはいけない", "しなくてもいい"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Must not smoke here」?",
      choices: ["吸ってもいい", "吸わなければならない", "吸ってはいけない", "吸ったら"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "「Don't have to come」?",
      choices: ["来なければならない", "来なくてもいい", "来てはいけない", "来てもいい (only)"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「May I sit?」?",
      choices: ["座らなければならない", "座ってはいけない", "座ってもいいですか", "座らなくてもいい"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "Casual 「gotta go」?",
      choices: ["行かなくてもいい", "行かなきゃ", "行ってはいけない", "行ってもいい"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'I have to do overtime'",
      tiles: ["残業[ざんぎょう]を", "しなければ", "ならない"],
      distractors: ["しなくても"],
      explanation: "しなければならない = must. しなくても belongs to 'don't have to'.",
    },
  ],
  drills: [
    { id: "nakereba", prompt: "Obligation — 'must do homework'", jp: "宿題[しゅくだい]をしなければ◯", answers: ["ならない", "いけない"] },
    { id: "casual-gotta", prompt: "Contract — casual 'gotta do'", jp: "しなければならない", answers: ["しなきゃ", "しなくちゃ", "しないと"] },
    { id: "prohibition", prompt: "Prohibition — 'must not enter'", jp: "入[はい]っては◯", answers: ["いけない", "だめ", "ならない"] },
    { id: "exemption", prompt: "Exemption — 'don't have to rest'", jp: "休[やす]む", answers: ["休[やす]まなくてもいい"] },
    { id: "permission", prompt: "Permission — 'may open (it)'", jp: "開[あ]ける", answers: ["開[あ]けてもいい"] },
  ],
};
