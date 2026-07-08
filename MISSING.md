# Missing content vs. Tae Kim's *Guide to Japanese Grammar*

Audited: 2026-07-08, against `docs/*.pdf` (1st Edition, book pages 1–436).

**Method:** the book's full table of contents was cross-checked against every lesson file in
`content/lessons/` at the *grammar-point* level (grep for the actual patterns, then reading the
lesson sections) — not just chapter titles. `content/pdf-curriculum.ts` previously marked every
section "done"; its statuses have been corrected to match this audit.

**Verdict:** the course covers most of the book, but **3 chapters are missing outright**, **2
lessons teach different material than the chapter they claim to cover**, and **~10 lessons are
missing sub-points**. The highest-impact gaps are ways of everyday speech: comparisons
(より・の方が), 〜ながら (while doing), and ようになる／ようにする.

Legend: 🔴 missing entirely · 🟡 partial / passing mention only · ✅ resolved

> **Update 2026-07-08 (C.1 + C.2 + C.3 complete):** every gap in this audit is closed.
> C.1 added four lessons — `naru-suru`, `comparisons`, `time-specific-actions`,
> `covered-by`. C.2 extended the ten lessons in §3 with their missing sub-points.
> C.3 verified originality: all 386 example sentences scanned against the full PDF
> text; ~30 flagged sentences rewritten; 0 verbatim / 0 near-copies (12+ shared
> chars) remain. What's left from the content plan: exercises (C.5) and the
> optional reorder (C.4).

---

## 1. Missing chapters (no lesson teaches this)

### ✅ ~~Using する and なる with the に particle~~ → `naru-suru` — Essential Grammar, pp. ~152–156

| Point | Meaning |
|-------|---------|
| ～ようになる | change of state — "came to (be able to) do" |
| ～ようにする | making an effort to / see to it that (one bullet in `advanced-volitional` only) |
| ことになる | "it has been decided that" |
| ことにする | "I decide to" |

High frequency, beginner-relevant. The book places it between potential form and conditionals.

### ✅ ~~Using 方 and よる~~ → `comparisons` — Special Expressions, pp. 322–329

| Point | Meaning |
|-------|---------|
| AよりBの方が～ | comparisons — **より appears in zero lessons** |
| ～の中で一番～ | superlatives — 一番 appears in zero lessons |
| ～によって | depending on / by means of |
| ～によると | according to (source of hearsay) |

Comparisons are among the most common everyday patterns; this is the single biggest gap.
(stem＋方 "how to do" *is* covered, in `defining-and-trying`.)

### ✅ ~~Expressing time-specific actions~~ → `time-specific-actions` — Special Expressions, pp. 349–358

| Point | Meaning |
|-------|---------|
| ～たとたん（に） | as soon as (something happened) |
| ～ながら | while doing — only a passing aside in `tendencies` (as casual つつ) |
| ～まくる | doing something a lot / non-stop |

～たばかり ("just did") is touched in `expressing-amounts`; the rest of the chapter is absent.

---

## 2. Lessons that don't match the chapter they're mapped to

### ✅ `covered-events` — was mapped to pp. 418–435 while teaching none of it → resolved by new `covered-by` lesson; `covered-events` kept as an off-book bonus

The lesson actually teaches 上で・うちに・最中・際・にわたって (useful JLPT-style timing
grammar, but not from these chapters). The three book chapters mapped to it are untaught:

| Book chapter | Points missing |
|--------------|----------------|
| Covered by something | ～だらけ、～まみれ、～ずくめ |
| Advanced proximity of actions | ～が早いか、～や否や、～そばから |
| Others | ～思いきや、～がてら、～あげく |

### ✅ `time-and-mama` — was mapped to pp. 353–363 while covering half

Teaches とき・前/後・間・まま・っぱなし. Now honestly mapped to pp. 359–363 only;
the "time-specific actions" half has its own lesson (see section 1).

---

## 3. Lessons missing sub-points from their chapter — ✅ all filled 2026-07-08

Each "Missing" entry below now has its own section in the lesson (kept for reference).
Bonus: fixed a grammar bug found along the way — `tendencies` used 忙しつつも, but
つつ attaches to verb stems only (now 知りつつも, with a warning note).

| Lesson | Covered ✅ | Missing (→ now added) |
|--------|-----------|---------|
| `ease-difficulty` | やすい・にくい・がたい・づらい | 🔴 whole "More negative verbs" half: ～ないで（"without doing"）、～ず（に）、せず、～ん、～ぬ |
| `generic-nouns` | こと・の | 🔴 ところ（～たところ、～ているところ）and もの（～ものだ patterns）— the chapter is こと・**ところ**・**もの** |
| `casual-patterns` | plain form, question の, contractions, わ／のよ／ぜ／ぞ, じゃん | 🟡 slang patterns ってば・ったら, なんか slurring; "Review & more sentence-ending particles" chapter（な、さ、etc.）only lightly touched |
| `zaru-wo-enai` | ～ざるを得ない | 🟡 やむを得ない、～かねる／かねない |
| `tendencies` | がち・つつ（+ 気味, beyond the book） | 🟡 ～きらいがある |
| `hazu-beki` | はず・べき | 🟡 べく、べからず |
| `de-sae-desura` | でさえ・ですら | 🟡 （は）おろか |
| `showing-signs` | がる・げ・っぽい | 🟡 ～んばかり（に）、～めく |
| `advanced-volitional` | まい (+ うとする、ようにする bullets) | 🟡 であろう、かろう |
| `making-requests` | ください・なさい・command form | 🟡 ～ちょうだい |
| `desire-suggestions` | たい・欲しい・ましょう・ませんか・たらどう | ✅ complete on re-check |

---

## 4. Suggested placement (when tackling content) — done as suggested

- **する／なる with に** → new Essential Grammar lesson after `potential-form` (book order).
- **方・よる (comparisons)** → new Special Expressions lesson; arguably important enough to
  pull forward — beginners need comparisons long before だらけ／まみれ.
- **Time-specific actions** → new Special Expressions lesson next to `time-and-mama`, or fold
  ながら into an Essential lesson (it's too common to sit in stage 4).
- **Covered-by / proximity / others** → either author a true pp. 418–435 lesson, or re-map
  `covered-events` honestly (rename its PDF mapping) and add the missing points to it.
- **More negative verbs (ず・ん・ぬ)** → small dedicated lesson or extend `ease-difficulty`
  (and split its title back into two topics).
- Sub-points (おろか、べく、めく、かねる、きらいがある、ちょうだい…) → extend their
  existing lessons; each is a section, not a lesson.

---

*Example-sentence originality was audited separately on 2026-07-08 (C.3): every Japanese
string in `content/lessons/` was scanned against the full extracted PDF text — first for
verbatim sentence matches, then for shared runs of 12+ consecutive Japanese characters.
Remaining overlaps are only conjugation paradigms (高い→高くなかった) and the names of the
grammar patterns themselves (ざるを得ない…), which any course must contain.*
