import type { Lesson } from "../types";

export const makingRequests: Lesson = {
  id: "making-requests",
  stage: "n4",
  order: 1,
  title: "Making Requests",
  subtitle: "ください · ちょうだい · なさい · command form",
  summary:
    "Ask for help on the commute or at school — polite てください, casual ちょうだい, firm なさい, and blunt commands.",
  estMinutes: 16,
  vocabulary: [
    { word: "ください", reading: "ください", meaning: "please (give me / do for me)" },
    { word: "傘[かさ]", reading: "かさ", meaning: "umbrella" },
    { word: "待[ま]つ", reading: "まつ", meaning: "to wait" },
    { word: "教[おし]える", reading: "おしえる", meaning: "to teach; to tell" },
    { word: "貸[か]す", reading: "かす", meaning: "to lend" },
    { word: "座[すわ]る", reading: "すわる", meaning: "to sit" },
    { word: "荷物[にもつ]", reading: "にもつ", meaning: "luggage; bags" },
    { word: "道[みち]", reading: "みち", meaning: "road; way" },
    { word: "写真[しゃしん]", reading: "しゃしん", meaning: "photograph" },
    { word: "電車[でんしゃ]", reading: "でんしゃ", meaning: "train" },
  ],
  blocks: [
    {
      type: "prose",
      text: "When the train is packed, you're lost, or you need a favour, Japanese requests range from soft {{てください}} to blunt command forms. Match the form to the person and the urgency.",
    },
    {
      type: "heading",
      text: "Te-form + ください",
    },
    {
      type: "rule",
      title: "Polite requests",
      items: [
        "Action: te-form + {{ください}} — {{待ってください}}, {{教えてください}}.",
        "Thing: {{をください}} — {{それをください}}.",
        "Negative: {{ないでください}} — {{押さないでください}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "少[すこ]し待[ま]ってください。電車[でんしゃ]が遅[おく]れています。", en: "Please wait a moment. The train is delayed." },
        { jp: "駅[えき]までの道[みち]を教[おし]えてください。", en: "Please tell me the way to the station." },
        { jp: "この荷物[にもつ]を持[も]ってくださいませんか。", en: "Could you please carry this bag?" },
        { jp: "ドアの近[ちか]くに立[た]たないでください。", en: "Please don't stand near the door." },
      ],
    },
    {
      type: "heading",
      text: "ちょうだい — casual please",
    },
    {
      type: "prose",
      text: "{{ちょうだい}} replaces {{ください}} among friends and family: {{ちょっと待ってちょうだい}}, {{それ、ちょうだい}}. Softer than a bare te-form request, still casual.",
    },
    {
      type: "examples",
      items: [
        { jp: "傘[かさ]、貸[か]してちょうだい。", en: "Lend me an umbrella, will you?" },
        { jp: "写真[しゃしん]、一枚[いちまい]ちょうだい。", en: "Give me one of those photos?" },
      ],
    },
    {
      type: "dialogue",
      title: "Asking for help on the platform",
      lines: [
        { speaker: "A", jp: "すみません、この電車[でんしゃ]、新宿[しんじゅく]に行[い]きますか。", en: "Excuse me — does this train go to Shinjuku?" },
        { speaker: "B", jp: "はい。次[つぎ]の駅[えき]で乗[の]り換[か]えてください。", en: "Yes. Please transfer at the next station." },
        { speaker: "A", jp: "ありがとうございます。地図[ちず]を見[み]てもいいですか。", en: "Thank you. May I look at the map?" },
        { speaker: "B", jp: "どうぞ。ここに書[か]いてありますよ。", en: "Go ahead. It's written here." },
      ],
    },
    {
      type: "heading",
      text: "なさい — firm polite command",
    },
    {
      type: "prose",
      text: "{{なさい}} attaches to the **stem**: {{聞きなさい}}, {{座りなさい}}. Teachers and parents use it — firm, not as blunt as the plain command. Casual short form: {{聞きな}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "静[しず]かにしなさい。", en: "Be quiet. (teacher/parent)" },
        { jp: "宿題[しゅくだい]を出[だ]しなさい。", en: "Hand in your homework." },
      ],
    },
    {
      type: "heading",
      text: "Command form (plain orders)",
    },
    {
      type: "rule",
      title: "Conjugation",
      items: [
        "**Ru-verbs:** {{る}} → {{ろ}}: {{食べる}} → {{食べろ}}.",
        "**U-verbs:** final vowel → /e/: {{待つ}} → {{待て}}, {{座る}} → {{座れ}}.",
        "**Exceptions:** {{する}} → {{しろ}}, {{来る}} → {{来い}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "早[はや]く来[こ]い！", en: "Come quickly!" },
        { jp: "ここに座[すわ]れ。", en: "Sit here." },
      ],
    },
    {
      type: "note",
      text: "Commands are blunt — close friends or fiction, not strangers or superiors. Default to {{ください}}. Soften further with {{くださいませんか}} when asking a favour of someone you don't know well.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Polite: 'please wait'?",
      choices: ["待って", "待ってください", "待ちなさい", "待て"],
      answer: 1,
      explanation: "てください is the standard polite request.",
    },
    {
      kind: "mc",
      prompt: "「Please don't push」?",
      choices: ["押さないください", "押さないでください", "押さなくてください", "押すないで"],
      answer: 1,
      explanation: "ないでください for negative requests.",
    },
    {
      kind: "mc",
      prompt: "Teacher-style 'sit down!'?",
      choices: ["座ってください", "座りなさい", "座れ", "座ってちょうだい"],
      answer: 1,
      explanation: "なさい = stem + なさい.",
    },
    {
      kind: "mc",
      prompt: "Command form of する?",
      choices: ["すれ", "しろ", "して", "される"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "待ってちょうだい is…",
      choices: [
        "a casual friendly 'please wait'",
        "a rude command",
        "formal business Japanese",
        "a question",
      ],
      answer: 0,
    },
    {
      kind: "order",
      prompt: "Build: 'Please tell me the way to the station'",
      tiles: ["駅[えき]までの", "道[みち]を", "教[おし]えてください"],
      distractors: ["教[おし]えください"],
      explanation: "ください follows the te-form: 教えて + ください.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "少[すこ]し待[ま]ってください",
      explanation: "少し待ってください — Please wait a moment.",
    },
  ],
  drills: [
    { id: "kudasai", prompt: "Request — 'please wait'", jp: "待[ま]つ", answers: ["待[ま]ってください"] },
    { id: "negative-request", prompt: "Negative request — 'please don't push'", jp: "押[お]す", answers: ["押[お]さないでください"] },
    { id: "choudai", prompt: "Casual stand-in for ください", jp: "？", answers: ["ちょうだい"] },
    { id: "nasai", prompt: "Soft command — 'sit'", jp: "座[すわ]る", answers: ["座[すわ]りなさい"] },
    { id: "command", prompt: "Blunt command — 'sit!'", jp: "座[すわ]る", answers: ["座[すわ]れ"] },
    { id: "oshiete", prompt: "Request — 'please tell/teach me'", jp: "教[おし]える", answers: ["教[おし]えてください"] },
  ],
};
