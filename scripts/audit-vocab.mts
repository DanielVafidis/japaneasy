/**
 * One-off audit: which Japanese words do lessons/readings USE in their content
 * (examples, dialogues, tables, quizzes, drills, bodies, phrases) that are
 * never INTRODUCED in any `vocabulary` list (and so never become vocab cards)?
 *
 *   node --import ./scripts/ts-alias-loader.mjs scripts/audit-vocab.mts
 */

import { allLessons } from "@/content/lessons";
import { allReadings } from "@/content/readings";
import { parseFurigana, stripFurigana } from "@/lib/japanese";
import type { ContentBlock, QuizQuestion } from "@/content/types";

// ---------- vocabulary coverage sets ----------

const vocabReadings = new Map<string, Set<string>>(); // kanjiRun → readings ("*" = any)
const vocabPlain = new Set<string>(); // stripped full words

function addPair(run: string, reading: string) {
  let set = vocabReadings.get(run);
  if (!set) vocabReadings.set(run, (set = new Set()));
  set.add(reading);
}

const KANA = /^[ぁ-ゖァ-ヴー]+$/;

/**
 * Entries without furigana markup keep the reading in `reading`:
 *   word "高い" + reading "たかい" → pair 高|たか
 * Align by stripping the common kana prefix/suffix; if interior kana
 * remains (rare), fall back to a wildcard reading for each kanji run.
 */
function addPlainEntry(word: string, reading: string | undefined) {
  const runs = word.match(/[㐀-鿿々]+/g) ?? [];
  if (!runs.length || !reading) return;
  let w = word;
  let r = reading;
  while (w.length && r.length && KANA.test(w[0]) && w[0] === r[0]) {
    w = w.slice(1);
    r = r.slice(1);
  }
  while (w.length && r.length && w.at(-1) === r.at(-1) && KANA.test(w.at(-1)!)) {
    w = w.slice(0, -1);
    r = r.slice(0, -1);
  }
  if (/^[㐀-鿿々]+$/.test(w) && KANA.test(r)) {
    addPair(w, r);
  } else {
    for (const run of runs) addPair(run, "*");
  }
}

const sources = [...allLessons, ...allReadings];
let vocabEntryCount = 0;
for (const src of sources) {
  for (const v of src.vocabulary ?? []) {
    vocabEntryCount++;
    vocabPlain.add(stripFurigana(v.word));
    const tokens = parseFurigana(v.word);
    if (tokens.some((t) => t.rt)) {
      for (const t of tokens) if (t.rt) addPair(t.base, t.rt);
    } else {
      addPlainEntry(v.word, v.reading);
    }
  }
}

// dialogue speaker names — used but arguably don't need cards
const speakerNames = new Set<string>();
for (const l of allLessons) {
  for (const b of l.blocks) {
    if (b.type === "dialogue") {
      for (const line of b.lines) speakerNames.add(stripFurigana(line.speaker));
    }
  }
}
for (const r of allReadings) {
  for (const p of r.body) if (p.speaker) speakerNames.add(stripFurigana(p.speaker));
}

// ---------- collect every Japanese string used in content ----------

interface Use {
  text: string;
  source: string; // lessonId (block kind)
}
const uses: Use[] = [];

// curriculum position of every lesson/reading, for placement suggestions
const STAGE_INDEX: Record<string, number> = {
  foundations: 0,
  n5: 1,
  n4: 2,
  n3: 3,
  n2: 4,
  n1: 5,
};
const sourcePos = new Map<string, { pos: number; isReading: boolean }>();
for (const l of allLessons) {
  if (l.recap) continue; // recaps shouldn't introduce vocabulary
  sourcePos.set(l.id, { pos: STAGE_INDEX[l.stage] * 1000 + l.order, isReading: false });
}
for (const r of allReadings) {
  // readings sort after lessons of the same stage+order
  sourcePos.set(r.id, { pos: STAGE_INDEX[r.stage] * 1000 + r.order + 0.5, isReading: true });
}

function addQuiz(quiz: QuizQuestion[] | undefined, id: string) {
  for (const q of quiz ?? []) {
    if ("promptJp" in q && q.promptJp) uses.push({ text: q.promptJp, source: `${id} (quiz)` });
    if (q.kind === "mc") for (const c of q.choices) uses.push({ text: c, source: `${id} (quiz)` });
    if (q.kind === "fill") for (const a of q.answers) uses.push({ text: a, source: `${id} (quiz)` });
    if (q.kind === "match")
      for (const p of q.pairs) {
        uses.push({ text: p.left, source: `${id} (quiz)` });
        uses.push({ text: p.right, source: `${id} (quiz)` });
      }
    if (q.kind === "order") {
      for (const t of q.tiles) uses.push({ text: t, source: `${id} (quiz)` });
      for (const t of q.distractors ?? []) uses.push({ text: t, source: `${id} (quiz)` });
    }
    if (q.kind === "listen") {
      uses.push({ text: q.audio, source: `${id} (quiz)` });
      for (const a of q.answers ?? []) uses.push({ text: a, source: `${id} (quiz)` });
    }
  }
}

/** Pull {{...}} inline Japanese out of prose/rule/note/tip text. */
function inlineJp(text: string): string[] {
  return [...text.matchAll(/\{\{(.+?)\}\}/g)].map((m) => m[1]);
}

for (const l of allLessons) {
  for (const b of l.blocks as ContentBlock[]) {
    switch (b.type) {
      case "examples":
        for (const e of b.items) uses.push({ text: e.jp, source: `${l.id} (example)` });
        break;
      case "dialogue":
        for (const line of b.lines) uses.push({ text: line.jp, source: `${l.id} (dialogue)` });
        break;
      case "table":
        for (const row of b.rows)
          for (const cell of row) uses.push({ text: cell, source: `${l.id} (table)` });
        break;
      case "prose":
      case "note":
      case "tip":
        for (const jp of inlineJp(b.text)) uses.push({ text: jp, source: `${l.id} (${b.type})` });
        break;
      case "rule":
        for (const item of b.items)
          for (const jp of inlineJp(item)) uses.push({ text: jp, source: `${l.id} (rule)` });
        break;
    }
  }
  addQuiz(l.quiz, l.id);
  for (const d of l.drills ?? []) {
    uses.push({ text: d.jp, source: `${l.id} (drill)` });
    for (const a of d.answers) uses.push({ text: a, source: `${l.id} (drill)` });
  }
}

for (const r of allReadings) {
  uses.push({ text: r.jpTitle, source: `${r.id} (title)` });
  for (const p of r.body) uses.push({ text: p.jp, source: `${r.id} (body)` });
  for (const ph of r.phrases ?? []) uses.push({ text: ph.jp, source: `${r.id} (phrase)` });
  addQuiz(r.quiz, r.id);
}

// ---------- extract tokens and check coverage ----------

interface Gap {
  count: number;
  sources: Map<string, number>;
  contexts: Set<string>;
  kind: "kanji" | "kanji-noruby" | "katakana";
  display: string;
}
const gaps = new Map<string, Gap>();

function record(key: string, display: string, kind: Gap["kind"], use: Use) {
  let g = gaps.get(key);
  if (!g) {
    g = { count: 0, sources: new Map(), contexts: new Set(), kind, display };
    gaps.set(key, g);
  }
  g.count++;
  g.sources.set(use.source, (g.sources.get(use.source) ?? 0) + 1);
  if (g.contexts.size < 3) g.contexts.add(stripFurigana(use.text).slice(0, 40));
}

const KANJI_RUN = /[㐀-鿿々]+/g;
const KATAKANA_RUN = /[ァ-ヴー]{2,}/g;

for (const use of uses) {
  const tokens = parseFurigana(use.text);
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.rt) {
      // furigana-annotated kanji run: covered iff some vocab word has the
      // same run with the same reading (conjugation lives in the okurigana)
      const known = vocabReadings.get(t.base);
      if (known && (known.has(t.rt) || known.has("*"))) continue;
      if (speakerNames.has(t.base)) continue;
      const trail = (tokens[i + 1]?.rt ? "" : (tokens[i + 1]?.base ?? "")).match(/^[ぁ-ゖー]{0,4}/)?.[0] ?? "";
      record(`${t.base}|${t.rt}`, `${t.base}[${t.rt}]${trail ? trail + "…" : ""}`, "kanji", use);
    } else {
      // bare text: kanji runs without furigana + katakana words
      for (const m of t.base.match(KANJI_RUN) ?? []) {
        if (vocabReadings.has(m) || speakerNames.has(m)) continue;
        // covered if it's a full vocab word or the kanji part of one
        if (vocabPlain.has(m)) continue;
        if ([...vocabPlain].some((w) => w.startsWith(m))) continue;
        record(`${m}|`, m, "kanji-noruby", use);
      }
      for (const m of t.base.match(KATAKANA_RUN) ?? []) {
        if (vocabPlain.has(m)) continue;
        if ([...vocabPlain].some((w) => w.includes(m))) continue;
        if (speakerNames.has(m)) continue;
        record(`kata:${m}`, m, "katakana", use);
      }
    }
  }
}

// ---------- report ----------

console.log(`lessons: ${allLessons.length}, readings: ${allReadings.length}`);
console.log(`vocab entries: ${vocabEntryCount}, distinct plain words: ${vocabPlain.size}`);
const noVocab = allLessons.filter((l) => !l.recap && !(l.vocabulary?.length));
console.log(`non-recap lessons with NO vocabulary list: ${noVocab.length}`);
for (const l of noVocab) console.log(`  - ${l.id} (${l.stage})`);

const sorted = [...gaps.values()].sort((a, b) => b.count - a.count);
console.log(`\n=== tokens used in content but not introduced as vocabulary: ${sorted.length} ===\n`);
for (const g of sorted) {
  const srcs = [...g.sources.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([s, n]) => (n > 1 ? `${s}×${n}` : s))
    .join(", ");
  console.log(
    `${String(g.count).padStart(3)}  ${g.kind.padEnd(12)} ${g.display}\n     ${srcs}${g.sources.size > 4 ? ` (+${g.sources.size - 4} more)` : ""}\n     e.g. ${[...g.contexts][0] ?? ""}`,
  );
}

// ---------- placement suggestions for the curated fill-in pass ----------
// key = gap key ("run|reading", "run|" for no-ruby, "kata:WORD");
// "with:<other key>" places alongside that word instead (e.g. 父 next to 母).

const CURATED: [key: string, entry: string][] = [
  // everyday nouns
  ["日本|にほん", `{ word: "日本[にほん]", reading: "にほん", meaning: "Japan" }`],
  ["店|みせ", `{ word: "店[みせ]", reading: "みせ", meaning: "shop; store" }`],
  ["魚|さかな", `{ word: "魚[さかな]", reading: "さかな", meaning: "fish" }`],
  ["山|やま", `{ word: "山[やま]", reading: "やま", meaning: "mountain" }`],
  ["富士山|", `{ word: "富士山[ふじさん]", reading: "ふじさん", meaning: "Mt. Fuji" }`],
  ["今|いま", `{ word: "今[いま]", reading: "いま", meaning: "now" }`],
  ["日|ひ", `{ word: "日[ひ]", reading: "ひ", meaning: "day; sun" }`],
  ["朝|あさ", `{ word: "朝[あさ]", reading: "あさ", meaning: "morning" }`],
  ["with:朝|あさ", `{ word: "朝[あさ]ご飯[はん]", reading: "あさごはん", meaning: "breakfast" }`],
  ["写真|しゃしん", `{ word: "写真[しゃしん]", reading: "しゃしん", meaning: "photograph" }`],
  ["荷物|にもつ", `{ word: "荷物[にもつ]", reading: "にもつ", meaning: "luggage; bags" }`],
  ["靴|くつ", `{ word: "靴[くつ]", reading: "くつ", meaning: "shoes" }`],
  ["窓|まど", `{ word: "窓[まど]", reading: "まど", meaning: "window" }`],
  ["嘘|うそ", `{ word: "嘘[うそ]", reading: "うそ", meaning: "lie" }`],
  ["顔|かお", `{ word: "顔[かお]", reading: "かお", meaning: "face" }`],
  ["会議|かいぎ", `{ word: "会議[かいぎ]", reading: "かいぎ", meaning: "meeting" }`],
  ["風邪|かぜ", `{ word: "風邪[かぜ]", reading: "かぜ", meaning: "a cold", note: "風邪をひく — to catch a cold" }`],
  ["風|", `{ word: "風[かぜ]", reading: "かぜ", meaning: "wind" }`],
  ["音楽|おんがく", `{ word: "音楽[おんがく]", reading: "おんがく", meaning: "music" }`],
  ["話|わ", `{ word: "電話[でんわ]", reading: "でんわ", meaning: "telephone; a call", note: "電話する — to phone someone" }`],
  ["国|くに", `{ word: "国[くに]", reading: "くに", meaning: "country" }`],
  ["雪|ゆき", `{ word: "雪[ゆき]", reading: "ゆき", meaning: "snow" }`],
  ["声|こえ", `{ word: "声[こえ]", reading: "こえ", meaning: "voice" }`],
  ["音|おと", `{ word: "音[おと]", reading: "おと", meaning: "sound" }`],
  ["隣|となり", `{ word: "隣[となり]", reading: "となり", meaning: "next to; next door" }`],
  ["中|なか", `{ word: "中[なか]", reading: "なか", meaning: "inside; in" }`],
  ["話|はなし", `{ word: "話[はなし]", reading: "はなし", meaning: "story; talk" }`],
  ["字|じ", `{ word: "字[じ]", reading: "じ", meaning: "character; handwriting" }`],
  ["腹|なか", `{ word: "お腹[なか]", reading: "おなか", meaning: "stomach; belly" }`],
  ["一度|いちど", `{ word: "一度[いちど]", reading: "いちど", meaning: "once; one time" }`],
  ["合格|ごうかく", `{ word: "合格[ごうかく]する", reading: "ごうかくする", meaning: "to pass (an exam)" }`],
  ["菓子|かし", `{ word: "お菓子[かし]", reading: "おかし", meaning: "sweets; snacks" }`],
  ["客様|", `{ word: "お客様[きゃくさま]", reading: "おきゃくさま", meaning: "customer; guest (polite)" }`],
  ["先輩|", `{ word: "先輩[せんぱい]", reading: "せんぱい", meaning: "senior (at school or work)" }`],
  ["俺|", `{ word: "俺[おれ]", reading: "おれ", meaning: "I; me (rough, masculine)" }`],
  ["店長|てんちょう", `{ word: "店長[てんちょう]", reading: "てんちょう", meaning: "shop manager" }`],
  ["単語|たんご", `{ word: "単語[たんご]", reading: "たんご", meaning: "word; vocabulary" }`],
  ["無理|むり", `{ word: "無理[むり]", reading: "むり", meaning: "impossible; unreasonable" }`],
  ["旅行|りょこう", `{ word: "旅行[りょこう]", reading: "りょこう", meaning: "trip; travel", note: "旅行する — to travel" }`],
  ["来月|らいげつ", `{ word: "来月[らいげつ]", reading: "らいげつ", meaning: "next month" }`],
  ["大阪|おおさか", `{ word: "大阪[おおさか]", reading: "おおさか", meaning: "Osaka" }`],
  ["夕飯|ゆうはん", `{ word: "夕飯[ゆうはん]", reading: "ゆうはん", meaning: "dinner; evening meal" }`],
  ["海外|かいがい", `{ word: "海外[かいがい]", reading: "かいがい", meaning: "overseas; abroad" }`],
  ["事情|じじょう", `{ word: "事情[じじょう]", reading: "じじょう", meaning: "circumstances" }`],
  ["計画|けいかく", `{ word: "計画[けいかく]", reading: "けいかく", meaning: "plan" }`],
  ["結果|けっか", `{ word: "結果[けっか]", reading: "けっか", meaning: "result" }`],
  ["犯人|はんにん", `{ word: "犯人[はんにん]", reading: "はんにん", meaning: "culprit" }`],
  ["専門家|せんもんか", `{ word: "専門家[せんもんか]", reading: "せんもんか", meaning: "expert; specialist" }`],
  ["傾向|けいこう", `{ word: "傾向[けいこう]", reading: "けいこう", meaning: "tendency; trend" }`],
  ["黒|くろ", `{ word: "黒[くろ]", reading: "くろ", meaning: "black" }`],
  ["傷|きず", `{ word: "傷[きず]", reading: "きず", meaning: "wound; scratch" }`],
  ["方|ほう", `{ word: "方[ほう]", reading: "ほう", meaning: "side; direction; way", note: "〜の方がいい — the ... one is better" }`],
  // family
  ["妹|いもうと", `{ word: "妹[いもうと]", reading: "いもうと", meaning: "younger sister" }`],
  ["弟|おとうと", `{ word: "弟[おとうと]", reading: "おとうと", meaning: "younger brother" }`],
  ["母|はは", `{ word: "母[はは]", reading: "はは", meaning: "(my) mother" }`],
  ["with:母|はは", `{ word: "父[ちち]", reading: "ちち", meaning: "(my) father" }`],
  // verbs
  ["帰|かえ", `{ word: "帰[かえ]る", reading: "かえる", meaning: "to go home; to return (u-verb)" }`],
  ["入|はい", `{ word: "入[はい]る", reading: "はいる", meaning: "to enter; to go in (u-verb)" }`],
  ["会|あ", `{ word: "会[あ]う", reading: "あう", meaning: "to meet (u-verb)" }`],
  ["作|つく", `{ word: "作[つく]る", reading: "つくる", meaning: "to make (u-verb)" }`],
  ["使|つか", `{ word: "使[つか]う", reading: "つかう", meaning: "to use (u-verb)" }`],
  ["遊|あそ", `{ word: "遊[あそ]ぶ", reading: "あそぶ", meaning: "to play; to hang out (u-verb)" }`],
  ["手伝|てつだ", `{ word: "手伝[てつだ]う", reading: "てつだう", meaning: "to help; to lend a hand (u-verb)" }`],
  ["勉強|べんきょう", `{ word: "勉強[べんきょう]する", reading: "べんきょうする", meaning: "to study" }`],
  ["持|も", `{ word: "持[も]つ", reading: "もつ", meaning: "to hold; to carry (u-verb)" }`],
  ["断|ことわ", `{ word: "断[ことわ]る", reading: "ことわる", meaning: "to decline; to refuse (u-verb)" }`],
  ["聴|き", `{ word: "聴[き]く", reading: "きく", meaning: "to listen (to music)", note: "聴く — attentive listening; 聞く — to hear/ask" }`],
  ["吸|す", `{ word: "吸[す]う", reading: "すう", meaning: "to smoke; to breathe in (u-verb)" }`],
  ["連絡|れんらく", `{ word: "連絡[れんらく]する", reading: "れんらくする", meaning: "to contact; to get in touch" }`],
  ["答|こた", `{ word: "答[こた]える", reading: "こたえる", meaning: "to answer (ru-verb)" }`],
  ["登|のぼ", `{ word: "登[のぼ]る", reading: "のぼる", meaning: "to climb (u-verb)" }`],
  ["泣|な", `{ word: "泣[な]く", reading: "なく", meaning: "to cry (u-verb)" }`],
  ["迷|まよ", `{ word: "迷[まよ]う", reading: "まよう", meaning: "to get lost; to waver (u-verb)" }`],
  ["飛|と", `{ word: "飛[と]ぶ", reading: "とぶ", meaning: "to fly; to jump (u-verb)" }`],
  ["解|と", `{ word: "解[と]く", reading: "とく", meaning: "to solve (u-verb)" }`],
  ["破|やぶ", `{ word: "破[やぶ]る", reading: "やぶる", meaning: "to break (a rule, promise) (u-verb)" }`],
  ["撮|と", `{ word: "撮[と]る", reading: "とる", meaning: "to take (a photo) (u-verb)" }`],
  ["弾|ひ", `{ word: "弾[ひ]く", reading: "ひく", meaning: "to play (an instrument) (u-verb)" }`],
  ["遅刻|ちこく", `{ word: "遅刻[ちこく]する", reading: "ちこくする", meaning: "to be late" }`],
  ["空|す", `{ word: "空[す]く", reading: "すく", meaning: "to become empty (u-verb)", note: "お腹が空いた — I'm hungry" }`],
  ["得|え", `{ word: "得[え]る", reading: "える", meaning: "to gain; to obtain (ru-verb)", note: "as in 〜ざるを得ない" }`],
  ["覧|らん", `{ word: "ご覧[らん]になる", reading: "ごらんになる", meaning: "to see (honorific)" }`],
  ["存|ぞん", `{ word: "存[ぞん]じる", reading: "ぞんじる", meaning: "to know (humble)" }`],
  ["間|ま", `{ word: "間[ま]に合[あ]う", reading: "まにあう", meaning: "to be on time; to make it" }`],
  // adjectives & adverbs
  ["安|やす", `{ word: "安[やす]い", reading: "やすい", meaning: "cheap (i-adj)" }`],
  ["新|あたら", `{ word: "新[あたら]しい", reading: "あたらしい", meaning: "new (i-adj)" }`],
  ["美味|おい", `{ word: "美味[おい]しい", reading: "おいしい", meaning: "delicious (i-adj)" }`],
  ["長|なが", `{ word: "長[なが]い", reading: "ながい", meaning: "long (i-adj)" }`],
  ["明|あか", `{ word: "明[あか]るい", reading: "あかるい", meaning: "bright (i-adj)" }`],
  ["悲|かな", `{ word: "悲[かな]しい", reading: "かなしい", meaning: "sad (i-adj)" }`],
  ["悪|わる", `{ word: "悪[わる]い", reading: "わるい", meaning: "bad (i-adj)" }`],
  ["遅|おそ", `{ word: "遅[おそ]い", reading: "おそい", meaning: "late; slow (i-adj)" }`],
  ["二度|にど", `{ word: "二度[にど]と", reading: "にどと", meaning: "never again (with a negative)" }`],
  ["今後|こんご", `{ word: "今後[こんご]", reading: "こんご", meaning: "from now on" }`],
  ["願|ねが", `{ word: "お願[ねが]いします", reading: "おねがいします", meaning: "please; I'd like that" }`],
  // counters
  ["一|ひと", `{ word: "一[ひと]つ", reading: "ひとつ", meaning: "one (thing)" }`],
  ["二人|ふたり", `{ word: "二人[ふたり]", reading: "ふたり", meaning: "two people" }`],
  // katakana loanwords
  ["kata:バス", `{ word: "バス", reading: "バス", meaning: "bus" }`],
  ["kata:ケーキ", `{ word: "ケーキ", reading: "ケーキ", meaning: "cake" }`],
  ["kata:コーヒー", `{ word: "コーヒー", reading: "コーヒー", meaning: "coffee" }`],
  ["kata:ニュース", `{ word: "ニュース", reading: "ニュース", meaning: "the news" }`],
  ["kata:タクシー", `{ word: "タクシー", reading: "タクシー", meaning: "taxi" }`],
  ["kata:パソコン", `{ word: "パソコン", reading: "パソコン", meaning: "computer; laptop" }`],
  ["kata:テレビ", `{ word: "テレビ", reading: "テレビ", meaning: "TV" }`],
  ["kata:カード", `{ word: "カード", reading: "カード", meaning: "card" }`],
  ["kata:ピアノ", `{ word: "ピアノ", reading: "ピアノ", meaning: "piano" }`],
  ["kata:ゲーム", `{ word: "ゲーム", reading: "ゲーム", meaning: "game" }`],
  ["kata:コンビニ", `{ word: "コンビニ", reading: "コンビニ", meaning: "convenience store" }`],
  ["kata:レポート", `{ word: "レポート", reading: "レポート", meaning: "report; paper" }`],
  ["kata:タバコ", `{ word: "タバコ", reading: "タバコ", meaning: "tobacco; cigarette" }`],
  ["彼|かれ", `{ word: "彼[かれ]", reading: "かれ", meaning: "he; him" }`],
  ["彼女|かのじょ", `{ word: "彼女[かのじょ]", reading: "かのじょ", meaning: "she; her; girlfriend" }`],
  ["猫|ねこ", `{ word: "猫[ねこ]", reading: "ねこ", meaning: "cat" }`],
  ["決|き", `{ word: "決[き]める", reading: "きめる", meaning: "to decide (ru-verb)" }`],
  ["変|か", `{ word: "変[か]える", reading: "かえる", meaning: "to change (something) (ru-verb)" }`],
  ["急|いそ", `{ word: "急[いそ]ぐ", reading: "いそぐ", meaning: "to hurry (u-verb)" }`],
  ["便利|", `{ word: "便利[べんり]", reading: "べんり", meaning: "convenient (na-adj)" }`],
  ["準備|", `{ word: "準備[じゅんび]", reading: "じゅんび", meaning: "preparation", note: "準備する — to prepare" }`],
  ["出張|", `{ word: "出張[しゅっちょう]", reading: "しゅっちょう", meaning: "business trip" }`],
  ["不足|ぶそく", `{ word: "不足[ぶそく]", reading: "ぶそく", meaning: "shortage; lack" }`],
  ["残|のこ", `{ word: "残[のこ]る", reading: "のこる", meaning: "to remain; to be left (u-verb)" }`],
  ["逃|に", `{ word: "逃[に]げる", reading: "にげる", meaning: "to escape; to run away (ru-verb)" }`],
  ["選|えら", `{ word: "選[えら]ぶ", reading: "えらぶ", meaning: "to choose (u-verb)" }`],
  ["送|おく", `{ word: "送[おく]る", reading: "おくる", meaning: "to send (u-verb)" }`],
  ["限|かぎ", `{ word: "限[かぎ]り", reading: "かぎり", meaning: "as far as; as long as", note: "〜する限り — as long as …" }`],
  ["昼|ひる", `{ word: "昼[ひる]", reading: "ひる", meaning: "noon; daytime" }`],
  ["八|はち", `{ word: "八[はち]", reading: "はち", meaning: "eight" }`],
  ["with:持|も", `{ word: "持[も]っていく", reading: "もっていく", meaning: "to take (something) along" }`],
  ["kata:カフェ", `{ word: "カフェ", reading: "カフェ", meaning: "cafe" }`],
  ["kata:カレー", `{ word: "カレー", reading: "カレー", meaning: "curry" }`],
];

// pattern words are better taught by the lesson about their pattern than by
// whichever reading happens to come first
const PLACEMENT_OVERRIDES: Record<string, string> = {
  "得|え": "zaru-wo-enai",
  "限|かぎ": "conditionals-nuance",
};

if (process.argv.includes("--place") || process.argv.includes("--apply")) {
  // earliest non-recap source that uses each gap key
  function earliest(key: string): string | null {
    const g = gaps.get(key);
    if (!g) return null;
    let best: string | null = null;
    let bestPos = Infinity;
    for (const src of g.sources.keys()) {
      const id = src.replace(/ \(.+\)$/, "");
      const meta = sourcePos.get(id);
      if (meta && meta.pos < bestPos) {
        bestPos = meta.pos;
        best = id;
      }
    }
    return best;
  }

  const byTarget = new Map<string, string[]>();
  const unplaced: string[] = [];
  const placementOf = new Map<string, string>();
  for (const [key, entry] of CURATED) {
    const target =
      PLACEMENT_OVERRIDES[key] ??
      (key.startsWith("with:") ? placementOf.get(key.slice(5)) : earliest(key));
    if (!target) {
      unplaced.push(`${key} → ${entry}`);
      continue;
    }
    placementOf.set(key, target);
    let list = byTarget.get(target);
    if (!list) byTarget.set(target, (list = []));
    list.push(entry);
  }

  console.log(`\n=== placement: ${CURATED.length} curated entries ===`);
  for (const [target, entries] of [...byTarget.entries()].sort(
    (a, b) => (sourcePos.get(a[0])?.pos ?? 0) - (sourcePos.get(b[0])?.pos ?? 0),
  )) {
    const kind = sourcePos.get(target)?.isReading ? "readings" : "lessons";
    console.log(`\n--- content/${kind}/${target}.ts`);
    for (const e of entries) console.log(`    ${e},`);
  }
  if (unplaced.length) {
    console.log(`\n--- UNPLACED (no gap entry found):`);
    for (const u of unplaced) console.log(`    ${u}`);
  }

  if (process.argv.includes("--apply")) {
    const { readFileSync, writeFileSync } = await import("node:fs");
    for (const [target, entries] of byTarget) {
      const kind = sourcePos.get(target)?.isReading ? "readings" : "lessons";
      const path = new URL(`../content/${kind}/${target}.ts`, import.meta.url);
      let src = readFileSync(path, "utf8");
      const fresh = entries.filter((e) => {
        const word = e.match(/word: ("[^"]+")/)![1];
        return !src.includes(`word: ${word}`);
      });
      if (!fresh.length) continue;
      const lines = fresh.map((e) => `    ${e},`).join("\n");
      const arr = src.match(/^ {2}vocabulary: \[\n/m);
      if (arr) {
        // append before the array's closing bracket
        const start = src.indexOf(arr[0]) + arr[0].length;
        const end = src.indexOf("\n  ],", start);
        if (end === -1) throw new Error(`no vocabulary close in ${target}`);
        src = src.slice(0, end) + "\n" + lines + src.slice(end);
      } else {
        // no vocabulary list yet — add one after estMinutes/summary
        const anchor = src.match(/^ {2}(estMinutes: \d+|summary: "[^"]*")(,)\n/m);
        if (!anchor) throw new Error(`no anchor for vocabulary in ${target}`);
        const at = src.indexOf(anchor[0]) + anchor[0].length;
        src = src.slice(0, at) + `  vocabulary: [\n${lines}\n  ],\n` + src.slice(at);
      }
      writeFileSync(path, src);
      console.log(`applied ${fresh.length} entries → content/${kind}/${target}.ts`);
    }
  }
}
