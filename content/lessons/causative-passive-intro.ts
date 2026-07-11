import type { Lesson } from "../types";

export const causativePassiveIntro: Lesson = {
  id: "causative-passive-intro",
  stage: "n4",
  order: 9,
  title: "Passive & Causative Intro",
  subtitle: "Light 〜られる and 〜させる",
  summary:
    "A gentle first look: something is done to you (passive), or you make/let someone do something (causative). Full causative-passive comes later.",
  estMinutes: 16,
  vocabulary: [
    { word: "言[い]う", reading: "いう", meaning: "to say" },
    { word: "呼[よ]ぶ", reading: "よぶ", meaning: "to call" },
    { word: "待[ま]つ", reading: "まつ", meaning: "to wait" },
    { word: "食[た]べる", reading: "たべる", meaning: "to eat" },
    { word: "宿題[しゅくだい]", reading: "しゅくだい", meaning: "homework" },
    { word: "子供[こども]", reading: "こども", meaning: "child" },
    { word: "先生[せんせい]", reading: "せんせい", meaning: "teacher" },
    { word: "怒[おこ]る", reading: "おこる", meaning: "to get angry; to scold" },
    { word: "休[やす]む", reading: "やすむ", meaning: "to rest" },
    { word: "野菜[やさい]", reading: "やさい", meaning: "vegetable" },
  ],
  blocks: [
    {
      type: "prose",
      text: "At N4 you only need the **basics**: passive {{〜られる}} ('is done / I get X done to me') and causative {{〜させる}} ('make or let someone do'). We'll skip stacking them into {{させられる}} — that lives in the full causative & passive lesson at N3.",
    },
    {
      type: "heading",
      text: "Passive — something is done",
    },
    {
      type: "rule",
      title: "Forming a simple passive",
      items: [
        "**Ru-verbs:** {{る}} → {{られる}}. {{食べる}} → {{食べられる}}.",
        "**U-verbs:** final /u/ → /a/ + {{れる}}. {{言う}} → {{言われる}}, {{呼ぶ}} → {{呼ばれる}}, {{待つ}} → {{待たれる}}.",
        "**Exceptions:** {{する}} → {{される}}, {{来る}} → {{来られる}}.",
      ],
    },
    {
      type: "prose",
      text: "The **patient** (who is affected) is the subject. The doer often takes {{に}}: {{先生に呼ばれた}} — 'I was called by the teacher.'",
    },
    {
      type: "examples",
      items: [
        { jp: "先生[せんせい]に名前[なまえ]を呼[よ]ばれました。", en: "I was called by name by the teacher." },
        { jp: "友達[ともだち]に待[ま]たれた。", en: "I had a friend wait for me / I kept a friend waiting (nuance depends on context)." },
        { jp: "会社[かいしゃ]で変[へん]なことを言[い]われた。", en: "I was told something odd at work." },
        { jp: "宿題[しゅくだい]を忘[わす]れて、先生[せんせい]に怒[おこ]られた。", en: "I forgot my homework and got scolded by the teacher." },
      ],
    },
    {
      type: "note",
      text: "For ru-verbs, {{食べられる}} can also mean **potential** ('can eat'). At N4, use context: if someone is affected or a doer with {{に}} appears, think passive first.",
    },
    {
      type: "heading",
      text: "Causative — make / let do",
    },
    {
      type: "rule",
      title: "Forming a simple causative",
      items: [
        "**Ru-verbs:** {{る}} → {{させる}}. {{食べる}} → {{食べさせる}}.",
        "**U-verbs:** final /u/ → /a/ + {{せる}}. {{待つ}} → {{待たせる}}, {{行く}} → {{行かせる}}.",
        "**Exceptions:** {{する}} → {{させる}}, {{来る}} → {{来させる}}.",
      ],
    },
    {
      type: "prose",
      text: "Causative means **make someone do** or **let someone do**. Permission often uses {{に}}: {{子供に遊ばせる}} — let the child play. Forcing someone who is also the doer often uses {{を}}: {{子供を寝させる}} — make the child sleep.",
    },
    {
      type: "examples",
      items: [
        { jp: "母[はは]は子供[こども]に野菜[やさい]を食[た]べさせます。", en: "Mom makes the child eat vegetables." },
        { jp: "先生[せんせい]は学生[がくせい]を立[た]たせた。", en: "The teacher made the student stand." },
        { jp: "少[すこ]し休[やす]ませてください。", en: "Please let me rest a little." },
        { jp: "今日[きょう]は早[はや]く帰[かえ]らせてもらえますか？", en: "Could you let me go home early today?" },
      ],
    },
    {
      type: "table",
      caption: "Quick contrast",
      headers: ["Form", "Meaning", "Example"],
      rows: [
        ["〜られる", "Passive — is done to", "呼ばれた"],
        ["〜させる", "Causative — make/let do", "食べさせる"],
        ["〜させられる", "Causative-passive (later)", "食べさせられた"],
      ],
    },
    {
      type: "dialogue",
      title: "At school and work",
      lines: [
        { speaker: "A", jp: "昨日[きのう]、何[なに]があったの？", en: "What happened yesterday?" },
        { speaker: "B", jp: "先生[せんせい]に会議室[かいぎしつ]に呼[よ]ばれた。", en: "I was called into the meeting room by the teacher." },
        { speaker: "A", jp: "大丈夫[だいじょうぶ]？", en: "You okay?" },
        { speaker: "B", jp: "うん。宿題[しゅくだい]を全部[ぜんぶ]やらせられた… いや、やらせられた話[はなし]は後[あと]で。", en: "Yeah. I was made to do all the homework… wait, that 'made to' part is for later." },
      ],
    },
    {
      type: "tip",
      text: "Polite requests often use causative + receive: {{〜させてください}} ('please let me…') and {{〜させていただけますか}}. Learn these as set phrases even before deep causative grammar.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Passive of 呼ぶ?",
      choices: ["呼ばせる", "呼ばれる", "呼べる", "呼びられる"],
      answer: 1,
      explanation: "ぶ → ば + れる → 呼ばれる.",
    },
    {
      kind: "mc",
      prompt: "Causative of 食べる?",
      choices: ["食べられる", "食べさせる", "食べれる", "食べさせられる"],
      answer: 1,
      explanation: "Ru-verb causative: る → させる.",
    },
    {
      kind: "mc",
      prompt: "「I was scolded by the teacher」 — pattern?",
      choices: ["先生を怒った", "先生に怒られた", "先生に怒らせた", "先生が怒らせた"],
      answer: 1,
      explanation: "Passive with doer に.",
    },
    {
      kind: "fill",
      prompt: "Causative of する:",
      answers: ["させる"],
      explanation: "する → させる.",
    },
    {
      kind: "order",
      prompt: "Build: 'Please let me rest a little'",
      tiles: ["少[すこ]し", "休[やす]ませて", "ください"],
      distractors: ["休[やす]まれて"],
      explanation: "休ませてください = causative + please (let me rest).",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "先生[せんせい]に呼[よ]ばれました",
      explanation: "先生に呼ばれました — I was called by the teacher.",
    },
  ],
  drills: [
    { id: "passive-yobu", prompt: "Make the passive — 'be called'", jp: "呼[よ]ぶ", answers: ["呼[よ]ばれる"] },
    { id: "passive-iu", prompt: "Make the passive — 'be said / be told'", jp: "言[い]う", answers: ["言[い]われる"] },
    { id: "causative-taberu", prompt: "Make the causative — 'make/let eat'", jp: "食[た]べる", answers: ["食[た]べさせる"] },
    { id: "causative-matsu", prompt: "Make the causative — 'make/let wait'", jp: "待[ま]つ", answers: ["待[ま]たせる"] },
    { id: "causative-please", prompt: "Complete — 'please let me rest'", jp: "休[やす]ませて◯", answers: ["ください"] },
  ],
};
