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

## Paused again by the owner — 2026-11-12, about 17:20 UTC

The owner will resume when usage allows (possibly on a larger plan). Work is token-heavy: one drafted part of about 14 lessons, or one verification pass, costs several hundred thousand tokens.

State at the pause:
- lat: parts 0–2 verified (16 lessons). Part 3 (lat-03-01 to 03-14) drafted; verification partly done (corrections to early lessons committed). Re-run verification over the whole part on resume.
- lat-02-09 (part 2 review) and lat-04-01 are on disk from the part 4 drafter; lint and finish them, then draft lat-04-02 onward.
- san: sources, meta, glossary, syllabus, STATUS on disk; dossier.md still to write; then `python3 tools/add-reviews.py san`.
- kat, tur, hbo, swh: dossiers and syllabuses done, reviews added.
- Owner-supplied books in esaashr4f/polyglotsources: Thompson & Schleicher 2001 and Almasi et al. 2014 (swh), Bolkvadze & Kiziria 2023 (kat), Göksel & Kerslake 2005 (tur). The Mohammed 2001 file there is from a shadow library: do not use it.

**Resume recipe:** read CLAUDE.md, then this entry. Run at most three agents at once with docs/DRAFTING_BRIEF.md, docs/VERIFY_BRIEF.md and docs/DOSSIER_BRIEF.md. After each part: update STATUS.json, add the drafter's glossary terms, `npm run build:reference -- lat`, `npm run stats`, append the verifier's report to VERIFY.md, commit, push.

## Session 2 — 2026-11-26 (paused by the owner)

**Done**
- lat: part 3 verified; part 4 (lat-04-01 to 04-20) and lat-02-09 drafted. Latin is 51/105 lessons written, 30 verified.
- Pilot lessons started, one agent per language: kat, tur, swh, hbo parts 0–1 drafted (STATUS "drafted"); san dossier finished, san parts 0–1 mostly drafted.
- Owner added many languages: list is now 153 guides plus 4 companion parts (Malay, Dari, Dzongkha, Aljamiado as part 10 of Indonesian, Persian, Tibetan, Old Spanish). See BRIEF.md Amendments and languages.json.
- Rules added: seam pass after any parallel drafting; one agent per language; nothing outside the pilot until the pilot gate.
- Owner-supplied books in esaashr4f/polyglotsources: Thompson & Schleicher, Almasi (swh); Bolkvadze & Kiziria (kat); Göksel & Kerslake (tur). Do not use the Mohammed file (unauthorised copy).

**In flight at the pause (all agents stopped; partial lessons committed as checkpoints)**
- lat: verification of part 4 + lat-02-09 had just started (nothing changed). Part 5 drafting had just started (nothing written).
- kat part 2: first lessons on disk (up to "I am, you are"); check, lint, continue.
- tur part 2: tur-02-01 to 02-03 on disk; continue from 02-04.
- swh part 2: up to swh-02-03 on disk; continue.
- hbo part 2: just started, nothing written.
- san parts 0–1: up to san-01-08 on disk; **san-01-08 has two lint errors (table rows with too many cells at line 121)**: fix first, then finish part 1.

**Next**
1. Fix san-01-08; finish san part 1. Set STATUS for whatever landed.
2. Resume: verify lat part 4 + 02-09; draft lat part 5; continue part 2 for kat, tur, swh, hbo.
3. Verify parts 0–1 of kat, tur, swh, hbo, san (none verified yet).

## Session 3 — 2026-11-26, overnight run ended at 11:35 GMT (owner's instruction)

All agents were stopped by the 5-hour usage limit at about 07:20 UTC and did not resume (the limit reset at 11:30, the end of the run). Partial lessons were committed as checkpoints and marked "drafted".

**Where each language stands**
- **lat:** parts 0–4 verified (51 lessons). Part 5 (lat-05-01 to 05-11) drafted; its verification was stopped early (fix lat-03-08's dīvīsa gloss as part of it). Part 6: lat-06-01 and 06-02 on disk; continue from 06-03.
- **kat:** parts 0–2 verified. Part 3: up to kat-03-11 on disk; finish part 3 (check 03-11 is complete).
- **tur:** parts 0–2 verified. Part 3: up to tur-03-14 on disk; finish part 3. The apostrophe rule for proper nouns (dossier, "Notes from verifying part 2") must be applied to all part 3 lessons.
- **swh:** parts 0–2 verified; part 3 (16 lessons) drafted; its verification was stopped partway (uncommitted edits to 03-01, 03-02, 03-03, 03-05 were checkpointed: re-run the verification over all of part 3, and fix swh-02-08 usiku's plural). Part 4 not started.
- **hbo:** parts 0–2 drafted; verification of parts 0–2 stopped early (restart). Part 3: up to hbo-03-05 on disk; continue.
- **san:** parts 0–2 drafted (none verified). Part 3 drafting had just started (nothing written).

**Next, in this order**
1. Lint first (last check: 0 errors).
2. Resume or restart: lat part 5 verification + lat part 6 drafting; kat, tur, hbo, san part 3 drafting; swh part 3 verification + part 4 drafting; hbo parts 0–2 verification; san parts 0–2 verification.
3. Record each report as before (STATUS, glossary terms, dossier notes, `npm run build:reference -- <code>`, VERIFY.md, `npm run stats`), commit, push.


## Session 3, pause (2026-11-26)

Paused at the owner's request. All agents stopped. State on pause:

- lat: parts 0–6 verified. Part 7 being drafted: 07-01 to 07-08 on disk (the drafter was stopped at the start of a resumed run); continue from 07-09, then verify part 7, then parts 8 (capstone Aeneid 1.1–11) and 9.
- kat: parts 0–3 verified. Part 4 drafting: 04-01 to 04-23 committed; 04-24 was being written when stopped (committed as work in progress; check or rewrite it). Then the rest of part 4, verify part 4, part 5.
- tur: parts 0–3 verified, part 4 drafted. Part 4 verification reached 04-16 (an edit to the oluyor claim in 04-16 was half done: committed as work in progress, recheck it), continue from 04-16. Part 5 drafting: 05-01 to 05-03 done; continue from 05-04.
- swh: parts 0–4 verified, part 5 drafted (12). Part 5 verification and part 6 drafting had just started; nothing committed by either. Restart both.
- hbo: parts 0–3 verified. Part 4 drafting: 04-01 to 04-12 done; continue from 04-13 (the stopped agent said "lesson 4.6", but files up to 04-12 exist: check the last one is complete).
- san: parts 0–2 verified, part 3 drafted. Part 3 verification reached 03-14 (corrections committed through 03-14-r-stems); continue from 03-15. Part 4 drafting: 04-01 done, 04-02 was being written when stopped (committed as work in progress; check or rewrite it).

To resume: start one drafter and one verifier per language from the points above, with the same briefs (docs/DRAFTING_BRIEF.md, docs/VERIFY_BRIEF.md), telling each where to continue.

Added after the pause: the owner asked for (1) a linguistics guide (languages.json 154, qli, first after the pilot gate) and (2) living-language parts 20–22 (vocabulary core, spoken language, graded reader; BRIEF.md Amendments; first planned as 11–13), to be tried on tur, swh and kat at the pilot gate. The pilot-gate step therefore becomes: cold-read and random-form checks, template revision, then design and draft parts 20–22 for tur, swh, kat, then the app.


## Session 3, second pause (2026-11-27 02:31 GMT)

Paused at the owner's request (owner's usage window resets at 02:30; do not run past an agreed stop time). State:

- lat: part 7 drafted to 07-15 (the last lesson; no final report from the drafter, so check 07-13 to 07-15 are complete and mark part 7 drafted). Part 7 verification had just started (reached 07-03, nothing committed): restart it.
- kat: part 4 drafted (27). Part 4 verification under way: corrections committed for the early lessons (it was editing 04-04); continue from 04-04.
- tur: parts 0–4 verified, part 5 drafted (12). Part 5 verification committed through 05-03; continue from 05-04.
- swh: parts 0–5 verified except swh-05-04 glosses. Part 6 drafted to 06-15 (06-15 was uncommitted at the stop, committed as work in progress: check it); 06-16 (review) still to write.
- hbo: part 4 drafted to 04-19; continue from 04-20 to 04-25. Verification of 04-01 to 04-13 had started (one correction committed; an edit to 04-03 was uncommitted at the stop, committed as work in progress: recheck it).
- san: part 3 verified. Part 4 drafted to 04-12; continue from 04-13.

## Session 3, run to 07:30 GMT (2026-11-27) — state at 06:20, in case usage runs out

Running when written (each commits per lesson; resume from the last committed file):
- lat: all 105 lessons written. Verifying part 7 (one agent) and parts 8–9 (another). When both report, lat is fully verified (parts 0–6 already are).
- tur: parts 0–5 verified. Drafting part 6.
- swh: parts 0–6 verified. Drafting part 7.
- kat: parts 0–4 verified. Drafting part 5.
- hbo: parts 0–4 verified. Drafting part 5.
- san: parts 0–3 and 04-01 to 04-16 verified. Drafting part 4 (to about 04-19); its verifier follows behind.
If agents stopped without reporting: check git log per language for the last lesson committed, commit any partial file as work in progress, and restart that step from the next lesson.
