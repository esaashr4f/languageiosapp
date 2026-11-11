# Session log

Appended at the end of each session: what was done, what failed, what to do next.

## Session 1 — 2026-11-11

(Entry kept current during the session so a sudden stop loses nothing.)

**Done**
- M0 complete: `BRIEF.md`, `CLAUDE.md`, `languages.json` (100 languages, ISO 639-3 checked against the SIL table), `DECISIONS.md`, `PROGRESS.md`, content tools (`lint:content`, `build:content`, `build:reference`, `stats`), fixtures (`npm run test:tools`), `docs/CONTENT_FORMAT.md`.
- `docs/DRAFTING_BRIEF.md` and `docs/VERIFY_BRIEF.md`: standing instructions for drafting and verification subagents. Start each subagent by pointing it at one of these plus part-specific notes.
- `tools/wikt.py`: Wiktionary inflection lookup for form checks.
- lat: dossier, sources, glossary abbreviations, syllabus of 96 lessons, meta. Part 0 (3 lessons) drafted by the main agent.

**In flight when this entry was written**
- lat part 1 (lat-01-01 to 01-05) being drafted by a subagent; lat part 0 being verified by a subagent. If the session died, check `git log` and `content/lat/lessons/` for what landed, lint it, and set `STATUS.json` to match.

**Next**
1. lat: when part 1 lands, review it, set STATUS, then draft part 2, verify part 1, and so on part by part (draft N+1 while verifying N). Paste each verification report into `content/lat/VERIFY.md`.
2. After each part: `npm run build:reference -- lat`, `npm run stats`, commit, push.
3. Glossary `terms` in `content/lat/glossary.json` is empty: fill it from the terms each drafter reports defining.
4. Confirm the Allen and Greenough section numbers in the dossier table against `content/lat/ag-index.tsv` (being filled with section numbers).
