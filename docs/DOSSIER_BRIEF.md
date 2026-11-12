# Dossier brief (for a subagent building stage 1 and 2 of one guide)

You are preparing a language for Polyglot Atlas before any lesson is written. Accuracy is the main risk of the whole project: your output is what every drafter and verifier of this language will trust. Treat your own recall as a draft to be checked, never as a source.

## Read first

1. `BRIEF.md` sections 2 to 6 (the language's row in the table, pedagogy, guide anatomy, accuracy protocol, pipeline).
2. `docs/CONTENT_FORMAT.md`.
3. The Latin exemplar: `content/lat/dossier.md`, `sources.json`, `meta.json`, `glossary.json`, `syllabus.json`. Match their shape and level of detail. Do not copy their content.
4. `languages.json` for this language's ISO code, depth class and notes.

## What to produce in `content/<code>/`

1. **`sources.json`**: `{ "sources": [ { id, citation, url?, used_for, access } ] }`. The standard descriptive grammar(s), the main teaching grammars, the main dictionaries, open checkable sources (Wiktionary, WALS, Grambank, Glottolog, open-access grammars, digitised public-domain grammars, university course notes), and for dead languages the text corpora with translations. Short lowercase ids (`aronson1990`). `access` says honestly whether it is open online, in copyright and not consulted, or cited at second hand. Open each URL you list in this session.
2. **`dossier.md`**, following the Latin dossier's sections: variety or period taught and why; phoneme inventory with IPA and plain descriptions, each with its source; script and transliteration scheme chosen, with reason and the exact letter-to-letter table; grammatical and glossing conventions specific to this language (segmentation choices, how fused or portmanteau morphemes are glossed, citation forms); major paradigms with model words and where to check each (section numbers or page ranges only if you opened them); points of scholarly disagreement; text corpora for attested examples; notes for drafters (connections for a reader who knows Spanish, French, Japanese, Korean, Arabic).
3. **`meta.json`**: same keys as Latin's (`name, endonym, iso, number, family, region, era, status, scripts, typology {word_order, morphology, alignment, tags}, depth, translit_optional, organising_idea, hook, difficulty, sample`). The sample is one short example in the `:::example` field shape; prefer an attested sentence, cited; check every form.
4. **`glossary.json`**: every gloss abbreviation the guide will need (Leipzig standard ones where they exist), each with `name`, `plain` (one plain sentence) and `tag` (the syllabus `introduces` tag of the lesson that first teaches it). `terms` may stay empty.
5. **`syllabus.json`**: the full ordered lesson list on the spine of BRIEF.md section 4, adapted to the language (drop parts that do not apply, add language-specific parts or lessons). Depth A: 60 to 100 lessons; depth B: about 40 to 60; depth C: as the evidence allows. Ids `<code>-PP-OO`, order restarting at 01 in each part. Each lesson: `slug, title, point, requires, introduces`. Order by what a learner needs to build real sentences soonest. Part 8 lists the graded authentic passages you chose (cite each; check that each text exists and is open or quotable). If the language has a famous passage or text that fits what the learner can read by the end, the last part 8 lesson is a **capstone** reading it (see BRIEF.md Amendments); if none fits, say so in the dossier and do not force one in. Part 9 is reference appendices. Check the syllabus against the table of contents of the standard grammar so nothing major is missing; say in the dossier which grammar you compared it with.
6. **`STATUS.json`**: every lesson `planned`.
7. Run `python3 tools/add-reviews.py <code>` to add the review lessons (BRIEF.md Amendments), then lint again.

## Rules

- Check every paradigm and every form you write into the dossier or meta against a source opened in this session (`python3 tools/wikt.py <word> <Language>` prints Wiktionary inflection tables; WALS, Glottolog and open grammars are reachable). Mark anything you could not check as `(unverified)` in the dossier.
- If this is a depth B or C language and you cannot reach adequate sources, stop and say so; do not build the dossier from recall.
- Honesty rules (BRIEF.md section 5) apply: name the variety, separate established from probable from unknown, respect community-sensitive material.
- Run `npm run -s lint:content -- <code>` until it reports 0 errors (it checks the syllabus, glossary tags and meta keys).
- Commit only your files: `git add content/<code> && git commit -m "<code>: dossier, sources, syllabus" -- content/<code>`. Never `git add -A`; other agents share the repository. Do not push.
- Do not edit files outside `content/<code>/`. Record judgement calls in your final report, not in `DECISIONS.md`.

## Final report (your reply)

Short plain text: variety and transliteration chosen and why; lesson count per part; the sources you actually opened versus those listed but not reachable; anything left `(unverified)`; one line per judgement call (these go into `DECISIONS.md`); and any problem with the brief's row for this language (script, depth, notes).
