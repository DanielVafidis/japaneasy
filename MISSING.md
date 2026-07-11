# Missing content vs. the JLPT-aligned curriculum

Last updated: 2026-07-11

Tracks grammar points that common N5/N4 study lists expect but the course does not
teach yet. The live map is [`content/jlpt.ts`](content/jlpt.ts) — points with
`lessonId: null` show as gaps on the Progress page.

**Curriculum (current):** Writing System → N5 → N4 → N3 → N2 → N1, with spiral
real-life themes. Lesson bodies, examples, and drills are original.

---

## Closed by the renew pass (2026-07-11)

These used to be open gaps; they now have dedicated lessons (or remapped homes):

| Point | Lesson |
|-------|--------|
| 〜がある・〜がいる | `existence-location` |
| から・まで | `verb-particles` |
| 〜てください | `te-form` |
| 〜てから | `te-form-uses` |
| 〜が・〜けど / 〜し | `compound-sentences` |
| 〜ば / 〜なら / 〜ても | `conditionals-nuance` |
| 〜と / 〜たら | `conditionals` |
| Light passive / causative | `causative-passive-intro` |
| 〜させられる | `causative-passive` |
| 〜つもり / 意向形 / ようと思う | `intention-tsumori` |
| 〜てある / 〜ておく | `te-aspect` |
| 〜ため（に） | `reasons-causes` |
| 〜のに | `contrast-noni` |

Earlier content-overhaul work (naru-suru, comparisons, time-specific-actions,
covered-by, sub-point fills, originality pass, in-lesson exercises) remains in
place under the new stage model.

---

## Still open (honest gaps)

Shown as “not in the course yet” in the JLPT progress view:

| Point | Typical level | Notes |
|-------|---------------|-------|
| もう・まだ | N5 | already / still — no dedicated lesson |
| あまり〜ない | N5 | not much / not very |
| 〜てほしい | N4 | want someone to do |

Legend: 🔴 missing · ✅ resolved

---

## How to close a gap

1. Author or extend a lesson under `content/lessons/` (see AUTHORING.md).
2. Set `lessonId` on the matching row in `content/jlpt.ts`.
3. Add vocabulary + drills that practice the point.
4. Run `npm test` and `npm run audio:manifest`.
