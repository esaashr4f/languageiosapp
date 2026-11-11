# Verification brief (for a fresh subagent checking one drafted part)

You are checking lessons someone else drafted. You have not seen the drafting and should trust nothing in the lessons. The reader will use these guides as a base for reading real texts, so a wrong form is the worst possible defect. Language models write fluent, confident, wrong paradigms: assume errors exist and find them.

## Read first

1. `BRIEF.md` section 5 (accuracy protocol) and `docs/CONTENT_FORMAT.md`.
2. `content/<code>/dossier.md`, `sources.json`, `glossary.json`.
3. The lesson files of the part you are checking (and skim earlier parts only to know what has been taught).

## The six checks, on every lesson in the part

1. **Form check.** For every inflected form in examples, tables, vocab blocks and running prose: look it up (`python3 tools/wikt.py <word> <Language>`, or the other sources in the dossier) or re-derive it from a source paradigm. Check vowel lengths and diacritics too. Fix what is wrong. If a form cannot be checked, set that example's or table's label to `unverified`. For attested quotations, find the passage in a text source and confirm wording and citation.
2. **Gloss check.** Each word has as many gloss pieces as morphemes; the labels are right for the form (case, number, person, tense); the translation says what the gloss says.
3. **Dependency check.** Run `npm run -s lint:content -- <code>`. Also read as a learner: does any example or exercise use a word not yet in a `:::vocab` block, or grammar not yet explained, without a preview flag? Does the prose use a technical term before defining it?
4. **Consistency check.** The same word has the same spelling, vowel lengths, principal parts and meaning everywhere in the part and against earlier parts.
5. **Script check.** Files are NFC; no stray combining marks; (for non-Latin scripts) the original round-trips with the transliteration under the dossier's scheme; right-to-left text has no stray direction marks.
6. **Claim check.** Every historical or comparative claim ("this comes from", "Spanish kept this as") is either confirmed against a source you opened in this session, softened to match what the source says, or removed. Section numbers cited from grammars must be opened and confirmed.

Also check the worked answers: every answer must be correct and must follow from what has been taught.

## What you may change

Fix errors directly in the lesson files (keep the author's wording where it is right; do not rewrite for style). Do not edit `syllabus.json`, `STATUS.json`, `glossary.json` or `dossier.md`; report needed changes instead. After fixing, the linter must pass for every file you touched. Commit only the files you changed:

`git commit -m "<code>: part <N> verification corrections" -- <files>`

Never `git add -A` or `git commit -a`; other agents share the repository. Do not push.

## Final report (your reply)

In this exact shape, so it can be pasted into `VERIFY.md`:

```
### Part <N> — verified <date> by fresh subagent
Lessons checked: <ids>
Forms checked: <n>   corrected: <n>   left unverified: <n>
Glosses checked: <n>   corrected: <n>
Attested quotations checked: <n>   corrected: <n>
Claims checked: <n>   corrected or removed: <n>
Worked answers checked: <n>   corrected: <n>
Corrections:
- <lesson id>: <what was wrong> -> <what it is now> (<source>)
Still open:
- <lesson id>: <what could not be verified and why>
Dossier, glossary or syllabus changes needed:
- ...
```

Be exact about counts. "Checked" means you looked it up or re-derived it in this session, not that it looked right.
