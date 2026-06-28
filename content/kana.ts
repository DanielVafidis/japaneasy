/**
 * Hiragana + Katakana datasets.
 * Each entry pairs the two scripts because they share the same romaji/sound.
 * Used by the Kana Trainer and by the romaji converter in lib/japanese.ts.
 */

export type KanaType = "gojuon" | "dakuten" | "yoon";

export interface KanaChar {
  hira: string;
  kata: string;
  romaji: string;
  type: KanaType;
}

export const gojuon: KanaChar[] = [
  { hira: "あ", kata: "ア", romaji: "a", type: "gojuon" },
  { hira: "い", kata: "イ", romaji: "i", type: "gojuon" },
  { hira: "う", kata: "ウ", romaji: "u", type: "gojuon" },
  { hira: "え", kata: "エ", romaji: "e", type: "gojuon" },
  { hira: "お", kata: "オ", romaji: "o", type: "gojuon" },
  { hira: "か", kata: "カ", romaji: "ka", type: "gojuon" },
  { hira: "き", kata: "キ", romaji: "ki", type: "gojuon" },
  { hira: "く", kata: "ク", romaji: "ku", type: "gojuon" },
  { hira: "け", kata: "ケ", romaji: "ke", type: "gojuon" },
  { hira: "こ", kata: "コ", romaji: "ko", type: "gojuon" },
  { hira: "さ", kata: "サ", romaji: "sa", type: "gojuon" },
  { hira: "し", kata: "シ", romaji: "shi", type: "gojuon" },
  { hira: "す", kata: "ス", romaji: "su", type: "gojuon" },
  { hira: "せ", kata: "セ", romaji: "se", type: "gojuon" },
  { hira: "そ", kata: "ソ", romaji: "so", type: "gojuon" },
  { hira: "た", kata: "タ", romaji: "ta", type: "gojuon" },
  { hira: "ち", kata: "チ", romaji: "chi", type: "gojuon" },
  { hira: "つ", kata: "ツ", romaji: "tsu", type: "gojuon" },
  { hira: "て", kata: "テ", romaji: "te", type: "gojuon" },
  { hira: "と", kata: "ト", romaji: "to", type: "gojuon" },
  { hira: "な", kata: "ナ", romaji: "na", type: "gojuon" },
  { hira: "に", kata: "ニ", romaji: "ni", type: "gojuon" },
  { hira: "ぬ", kata: "ヌ", romaji: "nu", type: "gojuon" },
  { hira: "ね", kata: "ネ", romaji: "ne", type: "gojuon" },
  { hira: "の", kata: "ノ", romaji: "no", type: "gojuon" },
  { hira: "は", kata: "ハ", romaji: "ha", type: "gojuon" },
  { hira: "ひ", kata: "ヒ", romaji: "hi", type: "gojuon" },
  { hira: "ふ", kata: "フ", romaji: "fu", type: "gojuon" },
  { hira: "へ", kata: "ヘ", romaji: "he", type: "gojuon" },
  { hira: "ほ", kata: "ホ", romaji: "ho", type: "gojuon" },
  { hira: "ま", kata: "マ", romaji: "ma", type: "gojuon" },
  { hira: "み", kata: "ミ", romaji: "mi", type: "gojuon" },
  { hira: "む", kata: "ム", romaji: "mu", type: "gojuon" },
  { hira: "め", kata: "メ", romaji: "me", type: "gojuon" },
  { hira: "も", kata: "モ", romaji: "mo", type: "gojuon" },
  { hira: "や", kata: "ヤ", romaji: "ya", type: "gojuon" },
  { hira: "ゆ", kata: "ユ", romaji: "yu", type: "gojuon" },
  { hira: "よ", kata: "ヨ", romaji: "yo", type: "gojuon" },
  { hira: "ら", kata: "ラ", romaji: "ra", type: "gojuon" },
  { hira: "り", kata: "リ", romaji: "ri", type: "gojuon" },
  { hira: "る", kata: "ル", romaji: "ru", type: "gojuon" },
  { hira: "れ", kata: "レ", romaji: "re", type: "gojuon" },
  { hira: "ろ", kata: "ロ", romaji: "ro", type: "gojuon" },
  { hira: "わ", kata: "ワ", romaji: "wa", type: "gojuon" },
  { hira: "を", kata: "ヲ", romaji: "wo", type: "gojuon" },
  { hira: "ん", kata: "ン", romaji: "n", type: "gojuon" },
];

export const dakuten: KanaChar[] = [
  { hira: "が", kata: "ガ", romaji: "ga", type: "dakuten" },
  { hira: "ぎ", kata: "ギ", romaji: "gi", type: "dakuten" },
  { hira: "ぐ", kata: "グ", romaji: "gu", type: "dakuten" },
  { hira: "げ", kata: "ゲ", romaji: "ge", type: "dakuten" },
  { hira: "ご", kata: "ゴ", romaji: "go", type: "dakuten" },
  { hira: "ざ", kata: "ザ", romaji: "za", type: "dakuten" },
  { hira: "じ", kata: "ジ", romaji: "ji", type: "dakuten" },
  { hira: "ず", kata: "ズ", romaji: "zu", type: "dakuten" },
  { hira: "ぜ", kata: "ゼ", romaji: "ze", type: "dakuten" },
  { hira: "ぞ", kata: "ゾ", romaji: "zo", type: "dakuten" },
  { hira: "だ", kata: "ダ", romaji: "da", type: "dakuten" },
  { hira: "ぢ", kata: "ヂ", romaji: "ji", type: "dakuten" },
  { hira: "づ", kata: "ヅ", romaji: "zu", type: "dakuten" },
  { hira: "で", kata: "デ", romaji: "de", type: "dakuten" },
  { hira: "ど", kata: "ド", romaji: "do", type: "dakuten" },
  { hira: "ば", kata: "バ", romaji: "ba", type: "dakuten" },
  { hira: "び", kata: "ビ", romaji: "bi", type: "dakuten" },
  { hira: "ぶ", kata: "ブ", romaji: "bu", type: "dakuten" },
  { hira: "べ", kata: "ベ", romaji: "be", type: "dakuten" },
  { hira: "ぼ", kata: "ボ", romaji: "bo", type: "dakuten" },
  { hira: "ぱ", kata: "パ", romaji: "pa", type: "dakuten" },
  { hira: "ぴ", kata: "ピ", romaji: "pi", type: "dakuten" },
  { hira: "ぷ", kata: "プ", romaji: "pu", type: "dakuten" },
  { hira: "ぺ", kata: "ペ", romaji: "pe", type: "dakuten" },
  { hira: "ぽ", kata: "ポ", romaji: "po", type: "dakuten" },
];

export const yoon: KanaChar[] = [
  { hira: "きゃ", kata: "キャ", romaji: "kya", type: "yoon" },
  { hira: "きゅ", kata: "キュ", romaji: "kyu", type: "yoon" },
  { hira: "きょ", kata: "キョ", romaji: "kyo", type: "yoon" },
  { hira: "しゃ", kata: "シャ", romaji: "sha", type: "yoon" },
  { hira: "しゅ", kata: "シュ", romaji: "shu", type: "yoon" },
  { hira: "しょ", kata: "ショ", romaji: "sho", type: "yoon" },
  { hira: "ちゃ", kata: "チャ", romaji: "cha", type: "yoon" },
  { hira: "ちゅ", kata: "チュ", romaji: "chu", type: "yoon" },
  { hira: "ちょ", kata: "チョ", romaji: "cho", type: "yoon" },
  { hira: "にゃ", kata: "ニャ", romaji: "nya", type: "yoon" },
  { hira: "にゅ", kata: "ニュ", romaji: "nyu", type: "yoon" },
  { hira: "にょ", kata: "ニョ", romaji: "nyo", type: "yoon" },
  { hira: "ひゃ", kata: "ヒャ", romaji: "hya", type: "yoon" },
  { hira: "ひゅ", kata: "ヒュ", romaji: "hyu", type: "yoon" },
  { hira: "ひょ", kata: "ヒョ", romaji: "hyo", type: "yoon" },
  { hira: "みゃ", kata: "ミャ", romaji: "mya", type: "yoon" },
  { hira: "みゅ", kata: "ミュ", romaji: "myu", type: "yoon" },
  { hira: "みょ", kata: "ミョ", romaji: "myo", type: "yoon" },
  { hira: "りゃ", kata: "リャ", romaji: "rya", type: "yoon" },
  { hira: "りゅ", kata: "リュ", romaji: "ryu", type: "yoon" },
  { hira: "りょ", kata: "リョ", romaji: "ryo", type: "yoon" },
  { hira: "ぎゃ", kata: "ギャ", romaji: "gya", type: "yoon" },
  { hira: "ぎゅ", kata: "ギュ", romaji: "gyu", type: "yoon" },
  { hira: "ぎょ", kata: "ギョ", romaji: "gyo", type: "yoon" },
  { hira: "じゃ", kata: "ジャ", romaji: "ja", type: "yoon" },
  { hira: "じゅ", kata: "ジュ", romaji: "ju", type: "yoon" },
  { hira: "じょ", kata: "ジョ", romaji: "jo", type: "yoon" },
  { hira: "びゃ", kata: "ビャ", romaji: "bya", type: "yoon" },
  { hira: "びゅ", kata: "ビュ", romaji: "byu", type: "yoon" },
  { hira: "びょ", kata: "ビョ", romaji: "byo", type: "yoon" },
  { hira: "ぴゃ", kata: "ピャ", romaji: "pya", type: "yoon" },
  { hira: "ぴゅ", kata: "ピュ", romaji: "pyu", type: "yoon" },
  { hira: "ぴょ", kata: "ピョ", romaji: "pyo", type: "yoon" },
];

export const allKana: KanaChar[] = [...gojuon, ...dakuten, ...yoon];

export type KanaScript = "hira" | "kata";

export interface KanaGroup {
  id: string;
  label: string;
  type: KanaType;
  chars: KanaChar[];
}

const byRomaji = (set: KanaChar[], r: string) => set.find((k) => k.romaji === r);

function group(set: KanaChar[], romajis: string[]): KanaChar[] {
  return romajis.map((r) => byRomaji(set, r)).filter(Boolean) as KanaChar[];
}

/** Ordered learning groups (used for the trainer's "study by row" mode). */
export const kanaGroups: KanaGroup[] = [
  { id: "vowels", label: "Vowels", type: "gojuon", chars: group(gojuon, ["a", "i", "u", "e", "o"]) },
  { id: "k", label: "K", type: "gojuon", chars: group(gojuon, ["ka", "ki", "ku", "ke", "ko"]) },
  { id: "s", label: "S", type: "gojuon", chars: group(gojuon, ["sa", "shi", "su", "se", "so"]) },
  { id: "t", label: "T", type: "gojuon", chars: group(gojuon, ["ta", "chi", "tsu", "te", "to"]) },
  { id: "n", label: "N", type: "gojuon", chars: group(gojuon, ["na", "ni", "nu", "ne", "no"]) },
  { id: "h", label: "H", type: "gojuon", chars: group(gojuon, ["ha", "hi", "fu", "he", "ho"]) },
  { id: "m", label: "M", type: "gojuon", chars: group(gojuon, ["ma", "mi", "mu", "me", "mo"]) },
  { id: "y", label: "Y", type: "gojuon", chars: group(gojuon, ["ya", "yu", "yo"]) },
  { id: "r", label: "R", type: "gojuon", chars: group(gojuon, ["ra", "ri", "ru", "re", "ro"]) },
  { id: "w", label: "W & N", type: "gojuon", chars: group(gojuon, ["wa", "wo", "n"]) },
  { id: "g", label: "G", type: "dakuten", chars: group(dakuten, ["ga", "gi", "gu", "ge", "go"]) },
  { id: "z", label: "Z", type: "dakuten", chars: group(dakuten, ["za", "ji", "zu", "ze", "zo"]) },
  { id: "d", label: "D", type: "dakuten", chars: group(dakuten, ["da", "de", "do"]) },
  { id: "b", label: "B", type: "dakuten", chars: group(dakuten, ["ba", "bi", "bu", "be", "bo"]) },
  { id: "p", label: "P", type: "dakuten", chars: group(dakuten, ["pa", "pi", "pu", "pe", "po"]) },
];

export interface GridRow {
  consonant: string;
  cells: (KanaChar | null)[];
}

function buildRows(
  set: KanaChar[],
  layout: { consonant: string; romajis: (string | null)[] }[],
): GridRow[] {
  return layout.map(({ consonant, romajis }) => ({
    consonant,
    cells: romajis.map((r) => (r ? byRomaji(set, r) ?? null : null)),
  }));
}

const GOJUON_LAYOUT = [
  { consonant: "—", romajis: ["a", "i", "u", "e", "o"] },
  { consonant: "k", romajis: ["ka", "ki", "ku", "ke", "ko"] },
  { consonant: "s", romajis: ["sa", "shi", "su", "se", "so"] },
  { consonant: "t", romajis: ["ta", "chi", "tsu", "te", "to"] },
  { consonant: "n", romajis: ["na", "ni", "nu", "ne", "no"] },
  { consonant: "h", romajis: ["ha", "hi", "fu", "he", "ho"] },
  { consonant: "m", romajis: ["ma", "mi", "mu", "me", "mo"] },
  { consonant: "y", romajis: ["ya", null, "yu", null, "yo"] },
  { consonant: "r", romajis: ["ra", "ri", "ru", "re", "ro"] },
  { consonant: "w", romajis: ["wa", null, null, null, "wo"] },
  { consonant: "n", romajis: ["n", null, null, null, null] },
];

export const gojuonRows = buildRows(gojuon, GOJUON_LAYOUT);

export const vowelHeaders = ["a", "i", "u", "e", "o"];

export function kanaOf(c: KanaChar, script: KanaScript): string {
  return script === "hira" ? c.hira : c.kata;
}
