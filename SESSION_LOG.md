# Session log

Appended at the end of each session: what was done, what failed, what to do next.

## Session 1 — 2026-11-11

(Entry kept current during the session so a sudden stop loses nothing.)

**Done**
- M0 complete: `BRIEF.md`, `CLAUDE.md`, `languages.json` (100 languages, ISO 639-3 checked against the SIL table), `DECISIONS.md`, `PROGRESS.md`, content tools (`lint:content`, `build:content`, `build:reference`, `stats`), fixtures (`npm run test:tools`), `docs/CONTENT_FORMAT.md`.
- `docs/DRAFTING_BRIEF.md` and `docs/VERIFY_BRIEF.md`: standing instructions for drafting and verification subagents. Start each subagent by pointing it at one of these plus part-specific notes.
- `tools/wikt.py`: Wiktionary inflection lookup for form checks.
- lat: dossier, sources, glossary abbreviations, syllabus of 96 lessons, meta. Part 0 (3 lessons) drafted by the main agent.

**Also done (2026-11-12)**
- lat part 0 and part 1 verified (reports in `content/lat/VERIFY.md`). lat part 2 (8 lessons) drafted.
- kat and tur dossiers and syllabuses done (100 lessons each). Pilot changed at the owner's request: lat, kat, tur, hbo, swh, san; thin-source languages deferred (BRIEF.md Amendments).
- Owner's rules added (BRIEF.md Amendments): capstone famous-text reading as the last part 8 lesson where it fits; required "Where it applies" section and tempting-but-wrong uses in "Watch out" for parts 2 to 7, up to 1,800 words.
- `tools/preview.ts` renders lessons to HTML for review (`docs/preview/`).
- `docs/DOSSIER_BRIEF.md` added for stage 1-2 subagents.

**Stopped by the usage limit at about 03:00 UTC on 2026-11-12** (resets 05:20 UTC). Nothing was left half-written on disk.

**Next, in this order**
1. Verify lat part 2 (fresh subagent, docs/VERIFY_BRIEF.md). Paste the report into `content/lat/VERIFY.md`; set those lessons to `verified`.
2. Draft lat part 3 (13 lessons; docs/DRAFTING_BRIEF.md; vocab so far in `content/lat/vocab.json`; 'declension' is already defined in lat-02-02).
3. Build the hbo dossier and syllabus (docs/DOSSIER_BRIEF.md; Tiberian pointing, transliteration choice, right-to-left glossing rule, capstone choice).
4. Then swh and san dossiers. Lessons for kat, tur and the others wait until Latin is complete.
5. After each part: glossary terms from the drafter's report, `npm run build:reference -- lat`, `npm run stats`, commit, push.

## Paused by the owner — 2026-11-12

All agents stopped on the owner's request. State at the pause:
- lat: parts 0–2 verified; part 3 (13 lessons + review lat-03-14) drafted. Part 3 verification was in progress: corrections to lat-03-01 to 03-03 may be committed; restart verification of the whole part (docs/VERIFY_BRIEF.md) so the counts are complete.
- lat-02-09 (part 2 review) and part 4 (lat-04-01 to 04-20): drafting had just started; check `content/lat/lessons/` for anything that landed, lint it, and continue from the first missing lesson.
- san: dossier was in progress; files in `content/san/` are partial. Finish per docs/DOSSIER_BRIEF.md (including step 7, review lessons).
- kat, tur, hbo, swh: dossier and syllabus done, reviews added; lessons wait until Latin is complete.
- The owner's private book repo is `esaashr4f/polyglotsources` (empty at the pause). Books go in `<iso>/<author><year>.pdf`; Mohammed 2001 suggested for swh.
- A scheduled resume reminder is not set; resume only when the owner asks.

