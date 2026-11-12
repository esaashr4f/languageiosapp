# Drafting brief (for a subagent drafting one part of one guide)

You are writing lessons for Polyglot Atlas: grammar guides that teach a language's logic from zero to one intelligent adult reader who knows no linguistics jargon but will not tolerate hand-waving. He learns by understanding why a rule exists. He knows Spanish, French, Korean and Japanese well, plus some Arabic.

## Read first, in this order

1. `BRIEF.md` sections 1, 3, 4 and 5 (rules, pedagogy, lesson template, accuracy).
2. `docs/CONTENT_FORMAT.md` (exact file format the linter enforces).
3. `content/<code>/dossier.md` (conventions for this language: spelling, gloss style, case order, sources).
4. `content/<code>/syllabus.json` (your lessons: id, slug, title, point, requires, introduces) and `content/<code>/glossary.json` (gloss abbreviations and the tag that unlocks each).
5. Every lesson already written in `content/<code>/lessons/` that comes before yours. You must know exactly which words and which grammar the reader has met. The orientation lessons also set the voice.

## What to produce

One Markdown file per lesson in your part, at `content/<code>/lessons/<PP>-<OO>-<slug>.md`, written in syllabus order. Front matter `title`, `requires`, `introduces` must be copied exactly from the syllabus.

## Rules that are checked

- **Explain before use.** An example may contain only grammar taught in this lesson or earlier ones, and (for constructed examples) only words introduced in a `:::vocab` block in this lesson or earlier ones. If you must show something not yet taught, add `preview: <ABBR, ...>` and say "preview" in the note.
- **Never invent language data.** Check every inflected form, every vowel length and every meaning against a source while you write (for Wiktionary: `python3 tools/wikt.py <word> <Language>`). If you could not check something, label that example or table `unverified`; never guess silently. Lesson-level `confidence` is `verified` only if everything in it was checked.
- **Why before how.** Each rule gets its reason: the system it belongs to, a sound change, or a functional pressure. Historical explanations must come from the dossier's historical sources or a Wiktionary etymology section; if the reason is unknown or disputed, say so. Do not invent a plausible story.
- **Chain of thought.** "How it is built" walks from meaning to form step by step so the reader can rebuild the sentence.
- **Tables last**, inside `:::table`, only after prose and examples have shown the pattern.
- **Voice.** Direct, plain, second person, British spelling. Short sentences. One idea per paragraph. No filler, no encouragement, no "simply" or "just". Define each technical term in one plain sentence at first use (check earlier lessons to see whether it is already defined).
- **No copying.** Original prose and original constructed examples. Attested examples are cited by work and passage, with your own translation.
- **Extensive coverage (owner's preference).** In parts 2 to 7, `## Where it applies` maps every correct use, including the less obvious ones; `## Watch out` covers every place where using the construction feels natural but is wrong (especially by analogy with English, Spanish, French or an earlier lesson): wrong version with an asterisk, why it fails, the right version. Thoroughness beats brevity.
- **Size.** 550 to 1,000 prose words per lesson (parts 2 to 7: up to 1,800) (the linter counts headings, paragraphs and lists; not block contents). 6 to 12 examples, simplest first. 15 to 30 new words (parts 2 to 7), chosen by frequency (see the dossier) and by what the grammar point needs. 5 to 10 exercises that make the reader build or take apart sentences (no multiple choice), as one numbered list, with the same number of worked answers that show the reasoning, as one numbered list.
- **Vocabulary.** A headword is introduced once in the whole guide. Do not re-list words earlier lessons introduced.
- **Connections** section: optional, two to four sentences, accurate, anchored to Spanish, French, Japanese, Korean or Arabic where there is a real link.

## Working method

After each lesson: run `npm run -s lint:content -- content/<code>/lessons/<file>` and fix every error and, where sensible, every warning. Then commit that file only:

`git add content/<code>/lessons/<file> && git commit -m "<code>: lesson <id> drafted" -- content/<code>/lessons/<file>`

Other agents may be committing in the same repository. Never use `git add -A` or `git commit -a`. If git reports a lock, wait a few seconds and retry. Do not push.

Do not edit `syllabus.json`, `STATUS.json`, `glossary.json`, `dossier.md`, `PROGRESS.md` or other agents' lessons. If you need a new gloss abbreviation, a syllabus change, or you find an error in the dossier or an earlier lesson, do not work round it silently: report it.

## Final report (your reply)

Plain text, short: lessons written with prose word counts; anything labelled `unverified` or `uncertain` and why; new glossary terms defined (term and the lesson that defines it); requests for glossary or syllabus changes; errors noticed in earlier material; anything the next part's drafter must know (for example conventions you had to settle).
