# JapanEasy — Product roadmap & recommendations

Last updated: 2026-07-08

## Product direction (locked for now)

| Decision | Choice |
|----------|--------|
| **Audience** | Anyone; optimize for **complete beginners** |
| **North star** | **Foundation** — finish a calm, Japanese-first grammar course and retain what you learned through daily review |
| **Monetization** | Free; **no backend until the learning loop is solid** |
| **AI** | Later |
| **External content** | Later (Anki import, JMdict, Tatoeba, etc.) |
| **Platform** | **Mobile first** |
| **Positioning** | A **structured course** — not a game, not a single-skill app (not WaniKani/Bunpro/Duolingo clone) |

---

## North star (locked)

> **Finish a calm, Japanese-first grammar course and retain what you learned through daily review.**

This is the product’s primary promise: structured lessons first, spaced repetition second — not gamification, not a single-skill drill app.

**Other lanes (JLPT, conversation, travel, media) stay optional expansions in Phase 3+** — see [Deferred](#deferred--save-for-later).

---

## Alternative north stars (not chosen)

- **JLPT** — N5/N4 tracks and mock-style drills
- **Conversation** — situation dialogues + speaking (needs AI or scripted branching)
- **Travel** — phrase + situation modules
- **Media** — manga/anime sentence mining

## Current state (baseline)

- **54 lessons**, 5 stages, typed TS content with furigana, examples, quizzes
- **SRS** (SM-2-lite), 5 decks; auto-enroll on lesson complete + manual “Add to flashcards”
- **Typed recall** in flashcard review & quiz fill-ins — romaji/kana input, normalized matching (kana, vocab, kanji readings; EN for grammar)
- **Kana** chart / quiz / writer; **~172 kanji** browser
- **Gamification** — streak, XP, daily goal, heatmap; localStorage only
- **Coverage** — full Tae Kim guide coverage as of 2026-07-08 (audit + fixes in **MISSING.md**)
- **Gaps** — examples not yet original vs the PDF (C.3); grammar deck cards weak (title→summary); no in-lesson production exercises; no sentence cards, listening drills, PWA, tests

---

## Phase 0 — Fix the learning loop (highest impact)

Ship these before backend, AI, or major new content.

| # | Feature | Description | Why (beginners + course feel) | Effort | Priority | Status |
|---|---------|-------------|-------------------------------|--------|----------|--------|
| 0.1 | **Auto-enroll vocab on lesson complete** | When a lesson is marked complete (or quiz ≥60%), add its vocabulary cards to the SRS deck automatically (opt-out in Settings). | Beginners won’t discover “Add to flashcards”; review is where retention happens. | Low | High | ✅ |
| 0.2 | **“Today” course view (mobile home)** | Replace/supplement dashboard with: (1) reviews due, (2) next lesson in path, (3) daily goal progress — one primary CTA. | Course apps win on “what do I do today?” not stats grids. | Medium | High | ✅ |
| 0.3 | **Post-lesson recap** | After complete: “12 words added · N cards to review · Next: Polite Form” with review + next-lesson CTAs. (New cards are due immediately in our SRS, so “due tomorrow” → “to review now”.) | Connects reading to long-term memory; feels like a course, not a checklist. | Low | High | ✅ |
| 0.4 | **Quiz misses → boosted SRS** | Wrong quiz answers spawn or prioritize cards (sentence or vocab). Shipped: missed questions map to lesson vocab found in their prompts/correct answers (never distractors) + the lesson's grammar card; unowned cards spawn due-now, owned ones get `due` pulled forward (no ease/lapse penalty); “N cards from what you missed” note links to review. | Closes read → test → review loop without AI. | Medium | High | ✅ |
| 0.5 | **First-run onboarding (3 steps)** | Explain: read lesson → short quiz → reviews save progress. Mobile-first, dismissible. Shipped as a 3-step card in the Today view (一 read / 二 quiz / 三 review), shown until dismissed or the course is started; dismissal persists (store + export/import). | Reduces bounce; sets course expectations vs game. | Low | High | ✅ |
| 0.6 | **Daily goal = reviews + lesson** | Tie goal to “10 reviews OR finish one lesson section” not XP alone (kana quiz spam). Shipped: `dailyGoalReviews` (default 10, presets in Settings) met by N reviews **or** any lesson completed today; XP kept only for levels/streak visuals. | Keeps gamification honest and course-aligned. | Low | High | ✅ |

---

## Phase C — Content overhaul (now first in queue)

Decided 2026-07-08: before more app features, the course content itself gets fixed —
complete vs the Tae Kim guide, original in voice and examples, and interactive.
Still **frontend-only**; backend stays deferred.

| # | Feature | Description | Why | Effort | Priority | Status |
|---|---------|-------------|-----|--------|----------|--------|
| C.1 | **Fill missing chapters** | Author the 3 missing Tae Kim chapters (する/なる with に; 方・よる comparisons; time-specific actions) and re-map/extend `covered-events` to its real pp. 418–435 points. See MISSING.md §1–2. | Course promise is a complete grammar foundation. | Medium | High | ✅ |
| C.2 | **Fill sub-point gaps** | Extend ~10 lessons with missing points (ず/ん/ぬ negatives, ところ/もの, おろか, べく/べからず, めく, かねる, きらいがある, ちょうだい, であろう/かろう…). See MISSING.md §3. | Chapters shouldn't silently drop points. | Medium | High | ✅ |
| C.3 | **Original examples & prose pass** | Rewrite lesson examples/sentences so none are lifted from the PDF; keep the grammar points. Verified by scan: all 386 example sentences checked against full PDF text — 0 verbatim, 0 near-copies (12+ shared chars); ~30 flagged sentences rewritten. Prose was already original voice. | Originality + licensing hygiene (book is CC BY-NC-SA). | High | High | ✅ |
| C.4 | **Curriculum reorder** | Kept minimal by design: **Comparisons moved to Essential Grammar** (after Conditionals) — N5 material that sat at lesson ~41. ながら stays in Special Expressions (bundled with genuinely intermediate たばかり/とたん/まくる). Progress is keyed by lesson id, so saved progress is unaffected. | Beginners should meet common patterns sooner. | Low | Medium | ✅ |
| C.5 | **In-lesson exercises v2** | New `order` quiz kind (tap word tiles to build a sentence, with distractors) + automatic **"Practice these words"** typed vocab drill on every lesson with 3+ words (reuses flashcard checker, non-scoring). Tap-the-word = existing `mc`; type-the-word = existing `fill` with romaji. Every grammar lesson (50/50) now has a sentence-building exercise with a teaching distractor; all sentences verified original vs the PDF. | Active production inside the lesson loop, before SRS. | High | High | ✅ |

---

## Phase 1 — Make review worth doing

| # | Feature | Description | Why | Effort | Priority | Status |
|---|---------|-------------|-----|--------|----------|--------|
| 1.1 | **Learn lesson vocabulary** *(re-scoped from “sentence cards”)* | Guided learn mode per lesson: meet each word (reading, meaning, audio), then typed recall with misses re-queued until correct; words join the review deck on finish. Entries: “Learn these words” in the lesson vocab section, `?vocab=1` deep link, “Learn its N new words first” on Today for the next lesson. Decision 2026-07-09: decks stay **word-based** — full sentences don’t become decks. | Learn vocabulary before, during, or after the lesson that introduces it. | Medium | High | ✅ |
| 1.2 | **Typed recall mode (mobile)** | Typed answers with live romaji→kana conversion + normalized matching: kana, vocab, kanji readings, EN for grammar; quiz fill-ins too. Shipped beyond original “kana + vocab” scope. | Active production; still no AI. | Medium | High | ✅ |
| 1.3 | **Rebuild grammar deck** | Replace title→summary with pattern drills (conjugate, particle, fix sentence) authored in lesson files. Shipped: `drills` content type → typed cards (`grammar:<lesson>:<drill>`), auto-enrolled on lesson complete, boosted on quiz miss. **All 50 grammar lessons authored — 243 drills, zero legacy cards** (Basic 56 · Essential 96 · Special/Advanced 91). | Current grammar cards don’t teach grammar. | Medium | High | ✅ |
| 1.4 | **Kanji card modes** | char↔meaning, reading drills, link to example word from `kanji.ts`. Shipped: each kanji now has two cards — recall (`kanji:X`, meaning → type reading/char, unchanged id) and recognition (`kanji-mean:X`, char → type the meaning, any semicolon-split alternative accepted); both reveal the example word with audio; browser detail adds both. | Kanji browser alone doesn’t build recall. | Medium | High | ✅ |
| 1.5 | **Pre-lesson warm-up** | 3–5 due cards before new lesson content (skippable). Shipped: offered once per day on uncompleted lessons when reviews are due — up to 5 oldest-due cards, graded for real (counts toward the daily goal); skippable per day. | Spacing inside the course path. | Medium | High | ✅ |
| 1.6 | **Leech / struggling cards** | Flag cards missed N times; offer extra practice or suspend. Shipped: cards with 4+ lapses surface on the flashcards overview with a focused “Practice N” session (runs even when not due). | Standard SRS hygiene; reduces frustration. | Low | Medium | ✅ |
| 1.7 | **Kana mastery suggestion** | Soft gate: “Finish hiragana reviews before lesson 4” (not hard block at first). Shipped: soft nudge on the first four Basic Grammar lessons while <80% of the hiragana deck is enrolled, linking to the kana trainer — never a block. | Honors kana-first philosophy. | Low | Medium | ✅ |

---

## Phase 2 — Mobile course polish & trust

| # | Feature | Description | Why | Effort | Priority | Status |
|---|---------|-------------|-----|--------|----------|--------|
| 2.1 | **PWA (install + offline)** | Service worker for lessons + review queue; cache static content. Deferred 2026-07-09 — revisit once the learning loop settles (possibly alongside backend/sync). | Mobile-first commuters; no backend needed. | Medium | High | ⏸ |
| 2.2 | **Store schema v2 + migration** | Version persist payload; migrate card fields safely. | Avoid breaking real user progress. | Low | High | ⬜ |
| 2.3 | **Tests (SRS, furigana, store)** | Unit tests for `lib/srs.ts`, `lib/japanese.ts`, store import/export. Shipped (Vitest, `npm test`): 69 tests over srs scheduling, furigana/romaji conversion, flashcard+quiz answer checkers, store actions (streak, XP, boost, complete, import round-trip incl. legacy fields), lesson→card mapping, plus a content scan validating every drill answer in kanji/kana/romaji forms and all quiz shapes. | Prevent silent scheduling bugs. | Medium | High | ✅ |
| 2.4 | **Push-style reminders (PWA)** | Optional “reviews due” via Web Push when PWA installed. | Retention without native app. | Medium | Medium | ⬜ |
| 2.5 | **Natural audio (curated)** | Record or license native audio for core lesson sentences; keep TTS fallback. | Course quality bar; listening exposure. | High | Medium | ⬜ |
| 2.6 | **Listening comprehension drills** | Hear sentence → pick/write answer (no open-ended AI). Shipped: `listen` quiz kind (TTS speaks it, learner types the transcription — kanji/kana/romaji accepted, text revealed after answering); 11 questions across hiragana, katakana, state-of-being, polite-form, questions-polite, and past-tense. Extend alongside future content passes; audio quality improves with 2.5. | Ear training beyond TTS playback. | Medium | High | ✅ |
| 2.7 | **Accessibility pass** | Mobile focus, touch targets, screen reader on quiz/SRS. Shipped for quiz + review: verdicts announced via `role="status"` (incl. the correct answer on a miss), focus moves to each new question, answer inputs labelled, decorative progress dots hidden, 44px touch targets on Next/Check/Continue/tiles/End-session. Broader sweep (kana trainer, nav) still open. | Mobile-first includes a11y. | Medium | Medium | ✅ |
| 2.8 | **Update README** | 50 lessons, link to this roadmap, mobile/PWA notes. Shipped: 54 lessons, learning-loop features, 243 drills, dual kanji cards, listening, `npm test`, roadmap link. | Docs match product. | Low | Low | ✅ |

---

## Phase 3 — Course depth (still curated, no external ingest)

| # | Feature | Description | Why | Effort | Priority | Status |
|---|---------|-------------|-----|--------|----------|--------|
| 3.1 | **Graded readings per stage** | Short passages using only taught vocab/kanji; comprehension quiz. Pilot shipped: `Reading` content type, `/readings` library + reader (per-line audio, tap-to-reveal English, glossary → flashcards, quiz ≥60% marks read), “Read” in the nav; 3 readings (Basic ×2, Essential ×1). Needs more volume per stage + Special/Advanced readers. | Volume reading cements grammar. | High | High | 🔄 |
| 3.2 | **Situation modules** | Konbini, train, directions — dialogue blocks + targeted quiz. | Real-world framing without “game” feel. | Medium | High | ⬜ |
| 3.3 | **Stage recap lessons** | End-of-stage synthesis + mixed review quiz. | Course rhythm; milestone satisfaction. | Medium | Medium | ⬜ |
| 3.4 | **Kanji expansion + radicals** | Grow set; optional component hints in browser/SRS. | Beginners need structure, not 2000 chars at once. | Medium | Medium | ⬜ |
| 3.5 | **JLPT progress view (optional)** | Map lessons/kanji to N5/N4 coverage %. | Useful when user picks JLPT north star. | Medium | Medium | ⬜ |
| 3.6 | **Kana writer validation** | Stroke-order check against reference paths. | Writing = motor memory; high effort. | High | Low | ⬜ |

---

## Deferred — save for later

### Backend & accounts (after Phase 0–1 solid)

| Feature | Why wait | Effort |
|---------|----------|--------|
| Auth + cloud sync | localStorage breaks on new phone; add when retention proves value | High |
| Paid tier | After free course loop works | — |

### AI (Phase 4+)

| Feature | Notes | Effort |
|---------|-------|--------|
| Typed-answer feedback | “Wrong particle” hints on production drills | Medium |
| Adaptive difficulty | Repeat weak grammar patterns | Medium |
| Conversation roleplay | Per-lesson scenarios; needs guardrails | High |
| Personalized examples | i+1 sentences from known vocab | High |

### External content (Phase 4+)

| Feature | Notes |
|---------|-------|
| Anki deck import/export | Power users; `.apkg` or CSV |
| JMdict / Tatoeba | Auto sentence mining — conflicts with curated course |
| User-generated decks | Moderation + quality risk |

### Nice-to-have (low priority unless audience shifts)

| Feature | Effort | Priority |
|---------|--------|----------|
| FSRS scheduler | Medium | Medium |
| Achievements beyond streak | Low | Low |
| Manga/anime sentence lane | High | Low |
| Speaking shadowing / STT | High | Medium (if conversation north star) |

---

## What we are *not* building (positioning)

- **Not a streak game** — gamification supports the course; it doesn’t replace lesson + review.
- **Not WaniKani** — kanji supports grammar course, not the whole product.
- **Not Bunpro** — grammar is learned in lessons first; SRS reinforces, not replaces.
- **Not Duolingo** — no fake gamified trees; respect learner intelligence.

---

## Suggested build order (next up, mobile-first)

Ordered queue — pull from the top; reorder here as priorities shift.

1. **3.1 readings volume** — more readers per stage (incl. Special/Advanced)
2. **3.2 situation modules** · **3.3 stage recap lessons**
3. Later: 2.5 natural audio · backend/sync era

**Phase 1 is complete** (1.1–1.7 all ✅).

(2.1 PWA and 2.2 store schema v2 deferred — revisit with backend/sync.)

---

## Status legend

- ⬜ Not started
- 🔄 In progress
- ✅ Done
- ⏸ Deferred

---

## Changelog

| Date | Change |
|------|--------|
| 2026-07-10 | Phase 3.1 piloted: graded readings — `Reading` content type, `/readings` library + reader with per-line audio and tap-to-reveal English, glossary words become flashcards, comprehension quiz marks read; 3 original readers (My Dog, The Library, A Text from a Friend); "Read" added to the nav |
| 2026-07-09 | Phase 2.7 shipped (quiz/review scope): status-region verdict announcements with the answer on misses, per-question focus management, labelled answer inputs, hidden decorative dots, 44px touch targets |
| 2026-07-09 | Phases 2.6 + 2.8 completed: listening dictation rolled out to 6 lessons (11 questions incl. katakana loanwords and short grammar sentences); README refreshed (54 lessons, learning loop, drills, tests, roadmap link) |
| 2026-07-09 | Phases 1.4 + 1.6 + 1.7 shipped: kanji recognition cards (`kanji-mean:X`) with example words in the reveal; leech section on flashcards overview with focused practice; soft kana-first nudge on early grammar lessons — **Phase 1 complete** |
| 2026-07-09 | Phase 2.6 piloted: `listen` quiz kind — TTS dictation with typed transcription (romaji converts live), audio revealed after answering; 3 questions in the hiragana lesson; AUTHORING.md documents the kind |
| 2026-07-09 | Phase 1.5 shipped: pre-lesson warm-up — once-a-day offer on uncompleted lessons to review up to 5 oldest-due cards inline (real SRS grades, counts toward the goal), skippable for the day |
| 2026-07-09 | Phase 2.3 shipped: Vitest suite (`npm test`) — 69 tests across srs, japanese, answer checkers, store, lesson-cards, and a full content validation scan (every drill answer accepted as kanji/kana/romaji) |
| 2026-07-09 | Phase 1.3 complete: Special Expressions + Advanced Topics drill passes — 91 drills across the final 20 lessons (causative/passive, keigo, てしまう, certainty, amounts, hearsay, ずに, tendencies, volitional, formal patterns); grammar deck now 243 authored drills with no legacy cards. 2.2 schema v2 deferred until backend/sync |
| 2026-07-09 | Phase 1.3 (part 2): Essential Grammar drill pass — 96 drills across all 19 lessons (stems, polite forms, te-form, potential, conditionals, comparisons, obligation, quoting, giving/receiving, requests, counters, casual contractions); grammar deck now 172 cards |
| 2026-07-09 | Phase 1.3 (part 1): grammar drill infrastructure + Basic Grammar authored — `drills` in lesson files become typed Grammar-deck cards (instruction + JP prompt, romaji/kana/kanji answers), auto-enrolled on completion and boosted on quiz misses; 11 lessons, 56 drills; AUTHORING.md §6 documents the format |
| 2026-07-09 | Phase 1.1 re-scoped and shipped: guided vocab learn mode (intro cards → typed recall with miss re-queue → words join the review deck) reachable from the lesson, `?vocab=1`, and Today; sentence cards dropped — decks stay word-based |
| 2026-07-09 | Phase 0.4 shipped: quiz misses spawn/boost SRS cards (`boostCards` + `quizMissCardIds`) — missed lesson vocab and the lesson's grammar card go due-now, with a review link under the quiz results; **Phase 0 complete** |
| 2026-07-09 | Phase 0.6 shipped: daily goal is now reviews-or-lesson (`dailyGoalReviews`, default 10; Settings presets 5/10/20/30) instead of XP — kana-quiz XP no longer fills the goal; removed dead `DailyGoalRing` |
| 2026-07-08 | Phase 0.5 shipped: first-run onboarding — 3-step "How the course works" card (read → quiz → review) in the Today view for brand-new users; dismissible, persisted via `onboardingDismissed` in the store and export/import |
| 2026-07-08 | Phase C.4 done (kept minimal): Comparisons moved into Essential Grammar after Conditionals; stage orders renumbered — **Phase C content overhaul complete** |
| 2026-07-08 | Phase C.5 completed: sentence-building `order` exercise rolled out to all 50 grammar lessons (one per lesson, each with a teaching distractor); all new sentences scanned original vs the PDF |
| 2026-07-08 | Phase C.5 (partial): sentence-building `order` quiz kind + automatic typed vocab practice drill on lessons with 3+ words; `order` piloted in 6 lessons; AUTHORING.md updated |
| 2026-07-08 | Phase C.3 shipped: originality pass — scanned all 386 example sentences (plus every Japanese string) against the full PDF text; rewrote ~30 flagged sentences across 16 lessons; verified 0 verbatim / 0 near-copies remain |
| 2026-07-08 | Phase C.2 shipped: 10 lessons extended with all missing sub-points (ないで/ずに/ん/ぬ, ところ/もの, slang + sentence enders, やむを得ない/かねる, きらいがある, べく/べからず, はおろか, んばかり/めく, まい/であろう/かろう, ちょうだい); fixed 忙しつつも grammar bug in tendencies — full Tae Kim coverage reached |
| 2026-07-08 | Phase C.1 shipped: 4 new lessons (`naru-suru`, `comparisons`, `time-specific-actions`, `covered-by`) close every missing-chapter gap; course now 54 lessons; PDF map ranges corrected |
| 2026-07-08 | PDF coverage audit → **MISSING.md**: 3 missing chapters, 2 mis-mapped lessons, ~10 lessons with sub-point gaps; `pdf-curriculum.ts` statuses corrected; Phase C (content overhaul + in-lesson exercises) added at front of queue |
| 2026-07-08 | Phase 0.3 shipped: post-lesson recap with words-added + reviews-waiting counts and review/next-lesson CTAs |
| 2026-07-08 | Phase 1.2 marked ✅: live romaji conversion in lesson quiz fill-ins completed the typed-recall loop |
| 2026-07-07 | Phase 1.2: flashcard review redesigned around typed recall with romaji input; home/review UI fixes |
| 2026-07-06 | Phase 0.2: mobile-first Today view on home with review/lesson/daily-goal plan |
| 2026-07-06 | Phase 0.1: auto-add lesson vocab to SRS on complete (Settings opt-out) |
| 2026-07-06 | Locked north star: **Foundation** (structured course + daily review) |
