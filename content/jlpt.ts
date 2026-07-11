/**
 * JLPT N5/N4 grammar points mapped to the lessons that teach them.
 *
 * The JLPT publishes no official lists (not since 2010), so levels follow the
 * common study lists; every mapping was verified against the lesson content.
 * `lessonId: null` = a standard point the course does not teach yet — shown
 * honestly as a gap in the progress view. (As of 2026-07-11, N5/N4 are fully mapped.)
 *
 * Lesson ids follow the JLPT-aligned renew curriculum (Foundations → N5–N1).
 */

export type JlptLevel = 5 | 4;

export interface JlptGrammarPoint {
  level: JlptLevel;
  /** The pattern as usually listed, e.g. "〜たことがある". */
  jp: string;
  /** Short English gloss. */
  en: string;
  /** Lesson that teaches it; null = not in the course yet. */
  lessonId: string | null;
}

export const jlptGrammar: JlptGrammarPoint[] = [
  // ---- N5 ------------------------------------------------------------------
  { level: 5, jp: "だ・です", en: "state of being", lessonId: "state-of-being" },
  { level: 5, jp: "は", en: "topic particle", lessonId: "particles-intro" },
  { level: 5, jp: "も", en: "inclusive particle", lessonId: "particles-intro" },
  { level: 5, jp: "が", en: "identifier particle", lessonId: "particles-intro" },
  { level: 5, jp: "を", en: "direct object", lessonId: "verb-particles" },
  { level: 5, jp: "に", en: "target / time", lessonId: "verb-particles" },
  { level: 5, jp: "へ", en: "direction", lessonId: "verb-particles" },
  { level: 5, jp: "で", en: "context / means", lessonId: "verb-particles" },
  { level: 5, jp: "から・まで", en: "from / until", lessonId: "verb-particles" },
  { level: 5, jp: "の", en: "possession & linking", lessonId: "noun-particles" },
  { level: 5, jp: "と", en: "and (exhaustive) / with", lessonId: "noun-particles" },
  { level: 5, jp: "や・とか", en: "and (non-exhaustive)", lessonId: "noun-particles" },
  { level: 5, jp: "い-adjectives", en: "conjugating i-adjectives", lessonId: "adjectives" },
  { level: 5, jp: "な-adjectives", en: "using na-adjectives", lessonId: "adjectives" },
  { level: 5, jp: "〜ない", en: "plain negative", lessonId: "negative-verbs" },
  { level: 5, jp: "〜た", en: "plain past", lessonId: "past-tense" },
  { level: 5, jp: "〜ます・〜です", en: "polite form", lessonId: "polite-form" },
  { level: 5, jp: "〜か", en: "questions", lessonId: "questions-polite" },
  { level: 5, jp: "ね・よ", en: "sentence enders", lessonId: "adverbs-particles" },
  { level: 5, jp: "〜く・〜に", en: "making adverbs", lessonId: "adverbs-particles" },
  { level: 5, jp: "〜がある・〜がいる", en: "existence", lessonId: "existence-location" },
  { level: 5, jp: "〜てください", en: "please do", lessonId: "te-form" },
  { level: 5, jp: "〜ないでください", en: "please don't", lessonId: "making-requests" },
  { level: 5, jp: "〜ている", en: "ongoing action / state", lessonId: "te-form-uses" },
  { level: 5, jp: "〜てもいい", en: "permission", lessonId: "obligation" },
  { level: 5, jp: "〜てはいけない", en: "prohibition", lessonId: "obligation" },
  { level: 5, jp: "〜たい", en: "want to do", lessonId: "desire-suggestions" },
  { level: 5, jp: "〜が欲しい", en: "want a thing", lessonId: "desire-suggestions" },
  { level: 5, jp: "〜ましょう・〜ませんか", en: "suggestions & invitations", lessonId: "desire-suggestions" },
  { level: 5, jp: "〜から", en: "because", lessonId: "compound-sentences" },
  { level: 5, jp: "〜ので", en: "because (softer)", lessonId: "compound-sentences" },
  { level: 5, jp: "〜が・〜けど", en: "but / although", lessonId: "compound-sentences" },
  { level: 5, jp: "〜し", en: "listing reasons", lessonId: "compound-sentences" },
  { level: 5, jp: "〜たり〜たりする", en: "listing actions", lessonId: "compound-sentences" },
  { level: 5, jp: "〜くなる・〜になる", en: "to become", lessonId: "naru-suru" },
  { level: 5, jp: "〜とき", en: "when …", lessonId: "time-and-mama" },
  { level: 5, jp: "〜前に・〜後で", en: "before / after doing", lessonId: "time-and-mama" },
  { level: 5, jp: "〜ながら", en: "while doing", lessonId: "time-specific-actions" },
  { level: 5, jp: "〜より・〜の方が", en: "comparisons", lessonId: "comparisons" },
  { level: 5, jp: "一番", en: "superlatives", lessonId: "comparisons" },
  { level: 5, jp: "〜方（かた）", en: "how to do", lessonId: "comparisons" },
  { level: 5, jp: "〜すぎる", en: "too much", lessonId: "expressing-amounts" },
  { level: 5, jp: "だけ", en: "only", lessonId: "expressing-amounts" },
  { level: 5, jp: "でしょう", en: "probably", lessonId: "certainty" },
  { level: 5, jp: "Counters & dates", en: "〜つ、〜人、〜月…", lessonId: "numbers-counting" },
  { level: 5, jp: "〜てから", en: "after doing", lessonId: "te-form-uses" },
  { level: 5, jp: "もう・まだ", en: "already / still", lessonId: "mou-mada" },
  { level: 5, jp: "あまり〜ない", en: "not much / not very", lessonId: "amari-nai" },

  // ---- N4 ------------------------------------------------------------------
  { level: 4, jp: "可能形", en: "potential form", lessonId: "potential-form" },
  { level: 4, jp: "〜なければならない", en: "must / have to", lessonId: "obligation" },
  { level: 4, jp: "〜なくてもいい", en: "don't have to", lessonId: "obligation" },
  { level: 4, jp: "〜かもしれない", en: "might", lessonId: "certainty" },
  { level: 4, jp: "だろう", en: "probably (plain)", lessonId: "certainty" },
  { level: 4, jp: "〜はず", en: "expectation", lessonId: "certainty" },
  { level: 4, jp: "〜そうだ（様子）", en: "looks like", lessonId: "similarity-hearsay" },
  { level: 4, jp: "〜そうだ（伝聞）", en: "I heard that", lessonId: "similarity-hearsay" },
  { level: 4, jp: "〜ようだ", en: "appears to be", lessonId: "similarity-hearsay" },
  { level: 4, jp: "〜みたい", en: "seems / like", lessonId: "similarity-hearsay" },
  { level: 4, jp: "〜らしい", en: "apparently / typical of", lessonId: "similarity-hearsay" },
  { level: 4, jp: "〜やすい・〜にくい", en: "easy / hard to do", lessonId: "ease-difficulty" },
  { level: 4, jp: "〜と（条件）", en: "natural consequence", lessonId: "conditionals" },
  { level: 4, jp: "〜たら", en: "if / when (conditional)", lessonId: "conditionals" },
  { level: 4, jp: "〜ば", en: "if (conditional)", lessonId: "conditionals-nuance" },
  { level: 4, jp: "〜なら", en: "if (contextual)", lessonId: "conditionals-nuance" },
  { level: 4, jp: "〜ても・〜でも", en: "even if", lessonId: "conditionals-nuance" },
  { level: 4, jp: "受身形（〜られる）", en: "passive", lessonId: "causative-passive-intro" },
  { level: 4, jp: "使役形（〜させる）", en: "causative", lessonId: "causative-passive-intro" },
  { level: 4, jp: "〜させられる", en: "causative-passive", lessonId: "causative-passive" },
  { level: 4, jp: "〜てあげる・〜てくれる・〜てもらう", en: "giving & receiving favours", lessonId: "giving-receiving" },
  { level: 4, jp: "〜てみる", en: "try doing", lessonId: "defining-and-trying" },
  { level: 4, jp: "〜という", en: "called …", lessonId: "defining-and-trying" },
  { level: 4, jp: "〜こと・〜の", en: "nominalizers", lessonId: "defining-and-trying" },
  { level: 4, jp: "〜といい", en: "hope that …", lessonId: "defining-and-trying" },
  { level: 4, jp: "〜てしまう", en: "finished / regrettably", lessonId: "te-shimau" },
  { level: 4, jp: "〜てある", en: "resulting state (set up)", lessonId: "te-aspect" },
  { level: 4, jp: "〜ておく", en: "do in advance", lessonId: "te-aspect" },
  { level: 4, jp: "〜たところ・〜ているところ", en: "just at the point of", lessonId: "generic-nouns" },
  { level: 4, jp: "〜たことがある", en: "have done before", lessonId: "generic-nouns" },
  { level: 4, jp: "〜たばかり", en: "just did", lessonId: "time-specific-actions" },
  { level: 4, jp: "〜ようになる", en: "came to be", lessonId: "naru-suru" },
  { level: 4, jp: "〜ようにする", en: "make an effort to", lessonId: "naru-suru" },
  { level: 4, jp: "〜ことになる・〜ことにする", en: "it's decided / I decide", lessonId: "naru-suru" },
  { level: 4, jp: "〜かどうか", en: "whether or not", lessonId: "hypothesizing" },
  { level: 4, jp: "〜と言う・〜と思う", en: "quoting speech & thought", lessonId: "quoted-speech" },
  { level: 4, jp: "〜つもり", en: "intention", lessonId: "intention-tsumori" },
  { level: 4, jp: "意向形（〜よう）", en: "volitional — let's / shall", lessonId: "intention-tsumori" },
  { level: 4, jp: "〜ようと思う", en: "thinking of doing", lessonId: "intention-tsumori" },
  { level: 4, jp: "命令形・〜な", en: "commands & prohibition", lessonId: "making-requests" },
  { level: 4, jp: "〜なさい", en: "firm polite command", lessonId: "making-requests" },
  { level: 4, jp: "自動詞・他動詞", en: "transitive / intransitive pairs", lessonId: "transitivity" },
  { level: 4, jp: "お〜になる・お〜する", en: "basic honorific & humble", lessonId: "honorific-humble" },
  { level: 4, jp: "〜間・〜間に", en: "while / during", lessonId: "time-and-mama" },
  { level: 4, jp: "〜がる", en: "shows signs of", lessonId: "showing-signs" },
  { level: 4, jp: "〜たがる", en: "third-person desire", lessonId: "desire-suggestions" },
  { level: 4, jp: "しか〜ない", en: "nothing but", lessonId: "expressing-amounts" },
  { level: 4, jp: "くらい・ぐらい", en: "about / to the extent", lessonId: "expressing-amounts" },
  { level: 4, jp: "〜ため（に）", en: "for the sake of / because of", lessonId: "reasons-causes" },
  { level: 4, jp: "〜のに", en: "despite", lessonId: "contrast-noni" },
  { level: 4, jp: "〜てほしい", en: "want someone to do", lessonId: "te-hoshii" },
];

export function jlptGrammarForLevel(level: JlptLevel): JlptGrammarPoint[] {
  return jlptGrammar.filter((p) => p.level === level);
}
