# JapanEasy — Product roadmap & recommendations

Last updated: 2026-07-06

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

- **50 lessons**, 5 stages, typed TS content with furigana, examples, quizzes
- **SRS** (SM-2-lite), 5 decks, manual “Add to flashcards”
- **Kana** chart / quiz / writer; **~172 kanji** browser
- **Gamification** — streak, XP, daily goal, heatmap; localStorage only
- **Gaps** — weak review loop, passive cards, no production/listening, no PWA, no tests

---

## Phase 0 — Fix the learning loop (highest impact)

Ship these before backend, AI, or major new content.

| # | Feature | Description | Why (beginners + course feel) | Effort | Priority | Status |
|---|---------|-------------|-------------------------------|--------|----------|--------|
| 0.1 | **Auto-enroll vocab on lesson complete** | When a lesson is marked complete (or quiz ≥60%), add its vocabulary cards to the SRS deck automatically (opt-out in Settings). | Beginners won’t discover “Add to flashcards”; review is where retention happens. | Low | High | ✅ |
| 0.2 | **“Today” course view (mobile home)** | Replace/supplement dashboard with: (1) reviews due, (2) next lesson in path, (3) daily goal progress — one primary CTA. | Course apps win on “what do I do today?” not stats grids. | Medium | High | ⬜ |
| 0.3 | **Post-lesson recap** | After complete: “12 words added · 8 due tomorrow · Next: Polite Form”. | Connects reading to long-term memory; feels like a course, not a checklist. | Low | High | 🔄 |
| 0.4 | **Quiz misses → boosted SRS** | Wrong quiz answers spawn or prioritize cards (sentence or vocab). | Closes read → test → review loop without AI. | Medium | High | ⬜ |
| 0.5 | **First-run onboarding (3 steps)** | Explain: read lesson → short quiz → reviews save progress. Mobile-first, dismissible. | Reduces bounce; sets course expectations vs game. | Low | High | ⬜ |
| 0.6 | **Daily goal = reviews + lesson** | Tie goal to “10 reviews OR finish one lesson section” not XP alone (kana quiz spam). | Keeps gamification honest and course-aligned. | Low | High | ⬜ |

---

## Phase 1 — Make review worth doing

| # | Feature | Description | Why | Effort | Priority | Status |
|---|---------|-------------|-----|--------|----------|--------|
| 1.1 | **Sentence cards from examples** | Generate SRS cards from `examples` blocks: JP → EN, optional cloze. | Words in context; grammar collocation. | Medium | High | ⬜ |
| 1.2 | **Typed recall mode (mobile)** | Optional EN→JP or reading→kana with fuzzy match; start with kana + vocab. | Active production; still no AI. | Medium | High | ⬜ |
| 1.3 | **Rebuild grammar deck** | Replace title→summary with pattern drills (conjugate, particle, fix sentence) authored in lesson files. | Current grammar cards don’t teach grammar. | Medium | High | ⬜ |
| 1.4 | **Kanji card modes** | char↔meaning, reading drills, link to example word from `kanji.ts`. | Kanji browser alone doesn’t build recall. | Medium | High | ⬜ |
| 1.5 | **Pre-lesson warm-up** | 3–5 due cards before new lesson content (skippable). | Spacing inside the course path. | Medium | High | ⬜ |
| 1.6 | **Leech / struggling cards** | Flag cards missed N times; offer extra practice or suspend. | Standard SRS hygiene; reduces frustration. | Low | Medium | ⬜ |
| 1.7 | **Kana mastery suggestion** | Soft gate: “Finish hiragana reviews before lesson 4” (not hard block at first). | Honors kana-first philosophy. | Low | Medium | ⬜ |

---

## Phase 2 — Mobile course polish & trust

| # | Feature | Description | Why | Effort | Priority | Status |
|---|---------|-------------|-----|--------|----------|--------|
| 2.1 | **PWA (install + offline)** | Service worker for lessons + review queue; cache static content. | Mobile-first commuters; no backend needed. | Medium | High | ⬜ |
| 2.2 | **Store schema v2 + migration** | Version persist payload; migrate card fields safely. | Avoid breaking real user progress. | Low | High | ⬜ |
| 2.3 | **Tests (SRS, furigana, store)** | Unit tests for `lib/srs.ts`, `lib/japanese.ts`, store import/export. | Prevent silent scheduling bugs. | Medium | High | ⬜ |
| 2.4 | **Push-style reminders (PWA)** | Optional “reviews due” via Web Push when PWA installed. | Retention without native app. | Medium | Medium | ⬜ |
| 2.5 | **Natural audio (curated)** | Record or license native audio for core lesson sentences; keep TTS fallback. | Course quality bar; listening exposure. | High | Medium | ⬜ |
| 2.6 | **Listening comprehension drills** | Hear sentence → pick/write answer (no open-ended AI). | Ear training beyond TTS playback. | Medium | High | ⬜ |
| 2.7 | **Accessibility pass** | Mobile focus, touch targets, screen reader on quiz/SRS. | Mobile-first includes a11y. | Medium | Medium | ⬜ |
| 2.8 | **Update README** | 50 lessons, link to this roadmap, mobile/PWA notes. | Docs match product. | Low | Low | ⬜ |

---

## Phase 3 — Course depth (still curated, no external ingest)

| # | Feature | Description | Why | Effort | Priority | Status |
|---|---------|-------------|-----|--------|----------|--------|
| 3.1 | **Graded readings per stage** | Short passages using only taught vocab/kanji; comprehension quiz. | Volume reading cements grammar. | High | High | ⬜ |
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

## Suggested build order (next 6 weeks, mobile-first)

| Week | Focus |
|------|--------|
| 1 | 0.1 Auto-enroll vocab · 0.3 Post-lesson recap · 0.5 Onboarding |
| 2 | 0.2 Today view · 0.6 Goal tied to reviews |
| 3 | 1.1 Sentence cards · 0.4 Quiz → SRS |
| 4 | 1.3 Grammar deck rebuild (start with Basic Grammar stage) |
| 5 | 2.2 Store migration · 2.3 Tests · 2.1 PWA scaffold |
| 6 | 1.5 Pre-lesson warm-up · 2.6 Listening drills (pilot one lesson) |

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
| 2026-07-06 | Phase 0.1: auto-add lesson vocab to SRS on complete (Settings opt-out) |
| 2026-07-06 | Locked north star: **Foundation** (structured course + daily review) |
