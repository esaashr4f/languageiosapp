# Decisions

Every judgement call, dated, one line each. Newest at the bottom.

- 2026-11-11: Repo is `languageiosapp` (given), not `polyglot-atlas`; layout inside follows BRIEF.md section 9.
- 2026-11-11: BRIEF.md is a hand transcription of the PDF brief; the PDF is kept at `docs/brief-original.pdf`. The language table in BRIEF.md gained an ISO column.
- 2026-11-11: ISO 639-3 codes checked against the SIL code table. Choices needing care: Persian `pes` (Iranian Persian, not macro `fas`); Hindi-Urdu folder `hin` with `urd` recorded in `also_iso`; Swahili `swh`; Albanian `als` (Tosk, base of the standard); Serbo-Croatian `hbs` (macrolanguage, the only code for the unit); Pashto `pus` (macro) until the dossier fixes a variety; Khalkha `khk`; Malagasy `plt` (Merina standard); Tamazight `tzm` (Central Atlas) provisionally, to be confirmed in its dossier; Southern Quechua `quz` (Cusco); Guarani `gug` (Paraguayan); Classical Maya `emy`; Mandaic `myz` (Classical); Classical Chinese `lzh`; Old Church Slavonic `chu`; Biblical Hebrew `hbo`; Sanskrit `san`; Middle Egyptian `egy`.
- 2026-11-11: Manchu (`mnc`) stays in the dead and classical group as the brief lists it, though ISO classes it as living.
- 2026-11-11: Expo scaffolding is deferred to M3 (content before app; the brief also wants the SDK version checked at scaffolding time). M0 "repo scaffolded" is read as: tools, state files, layout.
- 2026-11-11: Lesson ids are `<iso>-<PP>-<OO>` with order restarting in each part; files are `lessons/<PP>-<OO>-<slug>.md` (two digits, so they sort).
- 2026-11-11: Format additions (see docs/CONTENT_FORMAT.md): `:::table` blocks so every table carries a confidence label and source; `:::vocab` blocks so vocab.json is generated; `preview:` on examples for rule 4; `glossary.json` maps each gloss abbreviation to the `introduces` tag that unlocks it.
- 2026-11-11: Dependency check uses syllabus order (what the reader has actually read), not the transitive closure of `requires`. `requires` must still point only to earlier lessons.
- 2026-11-11: `translit` may be omitted when `meta.translit_optional` is true (original already in Latin letters).
- 2026-11-11: Word counts (lesson 500 to 1,200; depth-class totals) are measured on prose and exercises, excluding example, table and vocab block contents. Under 400 prose words is a lint error (pilot gate); outside 500 to 1,200 is a warning.
- 2026-11-11: Example-count and new-word rules are errors in parts 2 to 7 and warnings in part 1; parts 0, 8, 9 are free-form.
- 2026-11-11: A constructed sentence is labelled `constructed`, never `verified`; `verified` is for forms and tables checked against a source.
- 2026-11-11: `app-content/` is git-ignored until M3; it is rebuilt by `npm run build:content`.
- 2026-11-11: `tools/wikt.py` added: prints Wiktionary inflection tables for form checks (cached in `.cache/`, ignored).
- 2026-11-11: lat: base variety is classical prose (Cicero, Caesar), restored pronunciation; macrons on all long vowels following Wiktionary; u/v distinguished, i for both vowel and consonant.
- 2026-11-11: lat: case order nominative, vocative, accusative, genitive, dative, ablative (British order; identical forms sit together).
- 2026-11-11: lat: 96 lessons planned (3+5+8+13+18+10+14+13+8 and 4 reference appendices). Parts 4 and 6 run over the "typical" counts because the verb and the subordinate subjunctive need it.
- 2026-11-11: lat: readings chosen: Pompeii graffiti, Vulgate Genesis 1, Caesar BG 1.1, Catullus 85 and 5, Phaedrus 1.1, Cicero Cat. 1.1–2, Aeneid 1.1–11, Magna Carta 39–40 (medieval, for the owner's manuscript interest).
- 2026-11-11: lat: DCC core vocabulary list kept as `core-list.tsv` for choosing words by frequency (CC BY-SA; working reference, not shipped in the app).
- 2026-11-11: lat: Allen and Greenough section numbers in the dossier were confirmed against the DCC pages (`ag-index.tsv` carries sections for 252 of 260 pages); Bennett section numbers remain approximate until opened.
- 2026-11-11: Perseus "hopper" refuses automated requests (403); The Latin Library, Scaife, Logeion and Wiktionary are used instead.
- 2026-11-12: lat: syllable breaks are shown with a raised dot (fē·mi·na), stressed syllables in capitals inside notes (a·MĪ·cus); "long" is used only of vowels and "heavy" only of syllables.
- 2026-11-12: lat: part 1 single-word examples are glossed by meaning only, labelled verified against wiktionary; orig may show an inscriptional spelling (IVLIVS) with the guide's spelling in morphemes.
- 2026-11-12: Glossary `terms` are kept by the main agent from drafters' reports, each noting the lesson that defines it.
- 2026-11-12: Owner may supply copyrighted grammars; they go in `private-sources/` (git-ignored, never pushed), used only to check forms and explanations, cited in sources.json, never copied.
- 2026-11-12: Owner asked to leave thin-source languages for last. Deferred: nav, gez, nci, hit, txb, onw, myz, tmr, bsk, dbl, wbp, nmn, emy, ett, sux. Pilot now lat, kat, tur, hbo, swh, san (hbo for gez, swh for nav, san for nci, each testing the same template stress). Recorded in BRIEF.md Amendments and languages.json.
