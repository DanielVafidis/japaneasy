/**
 * Maps Tae Kim PDF sections (in docs/) to lesson ids.
 * Status: "done" | "partial" | "planned"
 * Page ranges match filenames: …-[start]-[end].pdf
 */
export type PdfSectionStatus = "done" | "partial" | "planned";

export interface PdfSection {
  pdfPages: string;
  title: string;
  lessonId?: string;
  status: PdfSectionStatus;
}

export const pdfSections: Record<string, PdfSection[]> = {
  foundations: [
    { pdfPages: "1-24", title: "Introduction & writing system", status: "done", lessonId: "introduction" },
    { pdfPages: "7-14", title: "Hiragana", status: "done", lessonId: "hiragana" },
    { pdfPages: "15-19", title: "Katakana", status: "done", lessonId: "katakana" },
    { pdfPages: "20-24", title: "Kanji intro", status: "done", lessonId: "kanji-intro" },
  ],
  "basic-grammar": [
    { pdfPages: "26-30", title: "State-of-being", status: "done", lessonId: "state-of-being" },
    { pdfPages: "31-36", title: "Introduction to particles", status: "done", lessonId: "particles-intro" },
    { pdfPages: "37-42", title: "Adjectives", status: "done", lessonId: "adjectives" },
    { pdfPages: "43-48", title: "Verb basics", status: "done", lessonId: "verb-basics" },
    { pdfPages: "49-52", title: "Negative verbs", status: "done", lessonId: "negative-verbs" },
    { pdfPages: "53-58", title: "Past tense", status: "done", lessonId: "past-tense" },
    { pdfPages: "59-70", title: "Particles used with verbs", status: "done", lessonId: "verb-particles" },
    { pdfPages: "71-72", title: "Transitive & intransitive", status: "done", lessonId: "transitivity" },
    { pdfPages: "73-78", title: "Relative clauses & word order", status: "done", lessonId: "relative-clauses" },
    { pdfPages: "79-88", title: "Noun-related particles", status: "done", lessonId: "noun-particles" },
    { pdfPages: "89-94", title: "Adverbs & sentence-ending particles", status: "done", lessonId: "adverbs-particles" },
  ],
  "essential-grammar": [
    { pdfPages: "96-102", title: "Polite form & verb stems", status: "done", lessonId: "polite-form" },
    { pdfPages: "97-99", title: "The stem of verbs", status: "done", lessonId: "verb-stems" },
    { pdfPages: "105-111", title: "Addressing people", status: "done", lessonId: "addressing-people" },
    { pdfPages: "112-119", title: "The question marker", status: "done", lessonId: "questions-polite" },
    { pdfPages: "120-133", title: "Compound sentences", status: "done", lessonId: "compound-sentences" },
    { pdfPages: "134-143", title: "Other uses of the te-form", status: "done", lessonId: "te-form-uses" },
    { pdfPages: "144-151", title: "Potential form", status: "done", lessonId: "potential-form" },
    { pdfPages: "152-156", title: "Using する and なる with に（～ようになる／～ようにする、ことになる／ことにする）", status: "done", lessonId: "naru-suru" },
    { pdfPages: "157-167", title: "Conditionals", status: "done", lessonId: "conditionals" },
    { pdfPages: "168-175", title: "Must / have to", status: "done", lessonId: "obligation" },
    { pdfPages: "176-184", title: "Desire & suggestions", status: "done", lessonId: "desire-suggestions" },
    { pdfPages: "185-199", title: "Defining, trying & quotes", status: "done", lessonId: "defining-and-trying" },
    { pdfPages: "185-199", title: "Quoted speech & って", status: "done", lessonId: "quoted-speech" },
    { pdfPages: "204-211", title: "Giving & receiving", status: "done", lessonId: "giving-receiving" },
    { pdfPages: "212-220", title: "Making requests & commands", status: "done", lessonId: "making-requests" },
    { pdfPages: "221-230", title: "Numbers & counting", status: "done", lessonId: "numbers-counting" },
    { pdfPages: "231-253", title: "Casual patterns & review", status: "done", lessonId: "casual-patterns" },
    { pdfPages: "100-104", title: "Te-form conjugation & requests", status: "done", lessonId: "te-form" },
  ],
  "special-expressions": [
    { pdfPages: "255-266", title: "Causative & passive", status: "done", lessonId: "causative-passive" },
    { pdfPages: "267-277", title: "Honorific & humble", status: "done", lessonId: "honorific-humble" },
    { pdfPages: "278-281", title: "Unintended actions (てしまう)", status: "done", lessonId: "te-shimau" },
    { pdfPages: "282-286", title: "Generic nouns (こと・ところ・もの)", status: "done", lessonId: "generic-nouns" },
    { pdfPages: "287-292", title: "Degrees of certainty", status: "done", lessonId: "certainty" },
    { pdfPages: "293-309", title: "Expressing amounts", status: "done", lessonId: "expressing-amounts" },
    { pdfPages: "310-321", title: "Similarity & hearsay", status: "done", lessonId: "similarity-hearsay" },
    // Note: the comparisons lesson was moved up to Essential Grammar (course order deviates from book order here).
    { pdfPages: "322-329", title: "Using 方 and よる（より、の方、によって、によると）", status: "done", lessonId: "comparisons" },
    { pdfPages: "330-341", title: "Easy/hard & more negatives", status: "done", lessonId: "ease-difficulty" },
    { pdfPages: "342-348", title: "Hypothesizing & concluding", status: "done", lessonId: "hypothesizing" },
    { pdfPages: "349-358", title: "Time-specific actions（たばかり、とたんに、ながら、まくる）", status: "done", lessonId: "time-specific-actions" },
    { pdfPages: "359-363", title: "Leaving as-is（まま・っぱなし）", status: "done", lessonId: "time-and-mama" },
  ],
  "advanced-topics": [
    { pdfPages: "365-371", title: "Formal expressions (である)", status: "done", lessonId: "formal-dearu" },
    { pdfPages: "371-383", title: "はず・べき・べく・べからず", status: "done", lessonId: "hazu-beki" },
    { pdfPages: "394-407", title: "ざるを得ない・やむを得ない・かねる", status: "done", lessonId: "zaru-wo-enai" },
    { pdfPages: "400-407", title: "がち・つつ・きらいがある", status: "done", lessonId: "tendencies" },
    { pdfPages: "384-393", title: "Showing signs（がる・げ・っぽい・んばかり・めく）", status: "done", lessonId: "showing-signs" },
    { pdfPages: "408-417", title: "Advanced volitional（まい・であろう・かろう）", status: "done", lessonId: "advanced-volitional" },
    // covered-events is an off-book bonus lesson (上で・うちに・最中・際・にわたって), kept alongside.
    { pdfPages: "418-435", title: "Covered by / immediate events / other", status: "done", lessonId: "covered-by" },
    { pdfPages: "366-370", title: "でさえ・ですら・はおろか", status: "done", lessonId: "de-sae-desura" },
  ],
};
