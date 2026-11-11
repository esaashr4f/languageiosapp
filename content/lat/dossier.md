# Latin dossier

Built 2026-11-11. Source ids refer to `sources.json`. Everything a drafting or verifying agent needs to stay consistent is here; where this file and a named source disagree, the source wins and this file gets corrected.

## 1. Variety taught

- **Base:** Classical Latin, the written standard of roughly 80 BC to AD 120, with the prose of Cicero and Caesar as the norm. This is the variety all the reference grammars describe (ag1903, bennett1918, gl1895).
- **Flagged as other varieties:** Early Latin (Plautus, old inscriptions), poetic usage, Late and Medieval Latin. They are treated in part 7 and in the readings. Any form from them that appears earlier must be labelled.
- **Pronunciation:** the restored classical pronunciation (allen1978). Ecclesiastical (Italianate) pronunciation is described once, in lat-07-12, as a later system.

## 2. Phoneme inventory (allen1978; ag1903 §§1–8)

Vowels: five qualities, each short or long: a ā, e ē, i ī, o ō, u ū. Length is contrastive (*malum* "bad thing" vs *mālum* "apple"; *rosa* nominative vs *rosā* ablative; *venit* "comes" vs *vēnit* "came").

| Letter | Short (approx. IPA) | Long |
|---|---|---|
| a | [a] | [aː] |
| e | [ɛ] | [eː] |
| i | [ɪ] | [iː] |
| o | [ɔ] | [oː] |
| u | [ʊ] | [uː] |

The quality difference between short and long mid and high vowels (short ones more open) is the usual reconstruction (allen1978 ch. 2); state it as reconstruction, not observation. y [y, yː] occurs only in Greek loans.

Diphthongs: ae [ae̯], au [au̯], oe [oe̯]; rare ei, eu, ui (*cui*, *huic*).

Consonants:

| | Labial | Dental | Velar | Labiovelar | Glottal |
|---|---|---|---|---|---|
| Voiceless stops | p | t | c, k [k] | qu [kʷ] | |
| Voiced stops | b | d | g [ɡ] | gu [ɡʷ] (after n: *lingua*) | |
| Fricatives | f | s [s], never [z] | | | h |
| Nasals | m | n ([ŋ] before c, g, qu) | | | |
| Liquids | | l, r (trilled) | | | |
| Glides | v [w] | consonantal i [j] | | | |

Points to teach, all from allen1978:
- c and g are always hard: *Cicerō* [ˈkɪkɛroː], *gēns* [ɡeːns].
- v is [w]: *vīnum* [ˈwiːnũ]. Consonantal i is [j]: *iam* [jam]; between vowels it is double [jj]: *maior* [ˈmajjɔr], which is why the first syllable is heavy though the a is short.
- Final -m was weak: the vowel before it was nasalised and (probably) lengthened; this is why -m does not block elision in verse. Label "reconstructed".
- gn was probably [ŋn]: *magnus* [ˈmaŋnʊs]. Label "probable".
- ph, th, ch are aspirated stops [pʰ tʰ kʰ] in Greek loans, not fricatives.
- x = [ks], z = [z] or [zz] in Greek loans. Double consonants are pronounced double: *annus* vs *anus*.
- bs, bt are pronounced [ps], [pt]: *urbs* [ʊrps].
- Vowels are long before ns and nf (*cōnsul*, *īnfāns*) and the n was weakly pronounced.

Syllables and stress (ag1903 §§7, 12; allen1978 ch. 5):
- A syllable is heavy if it has a long vowel or diphthong, or if it ends in a consonant (short vowel followed by two consonants, of which the first closes the syllable). x counts as two consonants; qu as one; h as none.
- A stop followed by l or r (*patris*, *tenebrae*) normally goes with the following syllable in prose, leaving the preceding syllable light; poets may treat it either way.
- Stress: two-syllable words on the first. Longer words on the second-from-last (penult) if it is heavy, otherwise on the third-from-last (antepenult). The enclitics -que, -ne, -ve draw the stress to the syllable before them (traditional rule, ag1903 §12a; some scholars doubt it applied when that syllable was light. Label "traditional rule").

## 3. Script and spelling conventions used in the guide

- Latin alphabet of the classical period: A B C D E F G H I K L M N O P Q R S T V X, plus Y Z for Greek words. No lower case, no word spacing convention as now, no punctuation as now; all of that is editorial.
- **This guide:** lower case, capitals for proper names and the first word of a sentence. **u** for the vowel and **v** for the consonant. **i** for both vowel and consonant (no j). This matches wiktionary, the Oxford Latin Dictionary's practice for i, and most current teaching texts.
- **Macrons** on every long vowel, in `orig`, `morphemes`, vocab and tables, following wiktionary (which follows the standard dictionaries). Vowels long "by hidden quantity" (before ns, nf, and in forms like *rēx*, *āctus*, *lēctus*) are marked as wiktionary marks them. Where dictionaries disagree on a hidden quantity, follow wiktionary and do not make a point of it.
- A macron marks vowel length, not syllable weight. *est* has a short vowel and a heavy syllable.
- No transliteration field (`translit_optional` is true): the original is already in the alphabet a transliteration would use.
- Unicode: precomposed macron letters (NFC): ā ē ī ō ū ȳ Ā Ē Ī Ō Ū.
- Quoted attested text keeps the wording of the edition cited but gets this guide's spelling (u/v, i, macrons). Say so once in lat-00-03.

## 4. Grammatical conventions

- **Case order: nominative, vocative, accusative, genitive, dative, ablative** (the order usual in Britain since Kennedy's Primer; it keeps forms that are often identical next to each other: nominative/vocative/accusative, dative/ablative). ag1903, bennett1918 and wiktionary use nominative, genitive, dative, accusative, ablative, vocative: reorder when checking.
- Nouns are cited as nominative, genitive ending, gender: *puella, -ae* f. Verbs by four principal parts: *amō, amāre, amāvī, amātum*. The fourth part is given as the supine in -um (as in wiktionary and lewisshort); for verbs with no supine but a future participle give that and say so.
- Adjectives: *bonus, -a, -um*; *omnis, -e*; *fēlīx*, gen. *fēlīcis*.
- Terms: "declension" for a noun pattern, "conjugation" for a verb pattern, each defined at first use. "Perfect" not "preterite". "Present system" (built on the present stem) and "perfect system" (built on the perfect stem), not "infectum/perfectum", though those are mentioned once.

### Gloss conventions

- Segment stem from ending with one hyphen: `puell-am` `girl-ACC.SG`. One ending carries case and number together, so they are joined with a full stop. Gender is glossed only where the form shows it (adjectives, pronouns, participles: `bon-us` `good-NOM.SG.M`) or where the lesson is about gender.
- Verbs: stem (with its characteristic vowel) - tense or mood marker (if any) - person ending. `ama-t` `love-3SG`; `amā-ba-t` `love-IPFV-3SG`; `amā-bi-t` `love-FUT-3SG`; `am-e-t` `love-SBJV-3SG`; `amāv-it` `love.PRF-3SG`; `amāv-era-t` `love.PRF-PLUP-3SG`; `amā-tur` `love-3SG.PASS`; `amā-re` `love-INF`; `amā-t-us` `love-PTCP-NOM.SG.M` (perfect participle), `ama-nt-em` `love-PRS.PTCP-ACC.SG`.
- The present indicative active is the unmarked form and gets no tense gloss. Indicative and active are never glossed.
- Where a stem and marker have fused so that no clean cut exists (*reg-ō*, *reg-e-t* future, *est*, *sum*), do not invent a boundary: gloss the fused piece with full stops (`est` `be.3SG`, `reget` may be `reg-e-t` `rule-FUT-3SG` because the -e- is separable; `sunt` `be.3PL`).
- Clitics take `=`: `puella=que` `girl.NOM.SG=and`; `vidēs=ne` `see.2SG=Q`. (Inside a clitic host, inner hyphens may be dropped to keep the gloss readable, but be consistent within a lesson.)
- Prepositions, conjunctions and adverbs are glossed with a lower-case English word. *nōn* is `not`.
- Deponent endings are glossed `DEP` in place of `PASS`: `sequi-tur` `follow-3SG.DEP`.
- The pronoun "I" is `1SG`, never a bare capital I.
- Abbreviations and the lesson that unlocks each are in `glossary.json`.

## 5. Major paradigms and where to check them

Check every form against wiktionary (`python3 tools/wikt.py <word> Latin`, entered without macrons) and, for the paradigm as a system, bennett1918 (plain text: Project Gutenberg 15665) or ag1903 (section numbers below; `ag-index.tsv` lists the page for each topic).

| Topic | Model words | ag1903 | bennett1918 |
|---|---|---|---|
| 1st declension | puella, porta, nauta (m.) | §§40–44 | §§20–22 |
| 2nd declension | servus, puer, ager, vir, bellum, fīlius | §§45–52 | §§23–27 |
| 3rd declension, consonant stems | rēx, mīles, dux, homō, nōmen, corpus, pater | §§53–64 | §§28–36 |
| 3rd declension, i-stems | cīvis, nāvis, urbs, mare, animal | §§65–78 | §§37–41 |
| 4th declension | manus, cornū, domus | §§88–94 | §§48–50 |
| 5th declension | rēs, diēs | §§95–98 | §§51–53 |
| Adjectives 1st/2nd | bonus, miser, pulcher | §§109–113 | §§63–66 |
| Adjectives 3rd | omnis, ācer, fēlīx, ingēns | §§114–122 | §§67–72 |
| Comparison | altior, altissimus; melior, optimus | §§123–131 | §§71–77 |
| Numerals | ūnus, duo, trēs, mīlle | §§132–139 | §§78–81 |
| Pronouns | ego, tū, sē; is; hic, ille, iste, ipse, īdem; quī; quis | §§142–151 | §§84–92 |
| Verb sum | sum, esse, fuī | §170 | §100 |
| 1st conjugation | amō | §184 | §101 |
| 2nd conjugation | moneō, habeō, videō | §185 | §103 |
| 3rd conjugation | regō, dūcō, mittō | §186 | §105 |
| 3rd in -iō | capiō, faciō | §188 | §109 |
| 4th conjugation | audiō | §187 | §107 |
| Deponents | hortor, sequor, morior | §190–192 | §§112–114 |
| Irregular verbs | possum, volō, nōlō, mālō, ferō, eō, fīō, dō, edō | §§198–204 | §§124–132 |
| Syntax of cases | | §§338–435 | §§166–231 |
| Syntax of moods and tenses | | §§436–593 | §§254–327 |

The ag1903 section numbers were confirmed on 2026-11-11 against the section number each DCC page carries; `ag-index.tsv` now lists topic, sections and URL for all 260 pages, and is the place to look up the exact page before citing a section. (Irregular verbs: sum compounds §§197–198, volō family §199, ferō and edō §§200–201, dō and eō §§202–203, fīō §204.) The bennett1918 numbers were written from memory and are **approximate until a verification pass opens each one**; cite a Bennett section in a lesson only after finding it in the Gutenberg text.

Vocabulary is chosen from `core-list.tsv` (the DCC Latin Core Vocabulary: the 1,000 most frequent lemmas, with rank). Prefer words of rank 1 to 600 in parts 2 to 4. Meanings are checked against wiktionary or lewisshort (via Logeion).

## 6. Points of scholarly disagreement or uncertainty

Say so in the lesson when one of these comes up.

1. **Exact vowel qualities, final -m, gn, and the enclitic stress rule** are reconstructions from ancient testimony, spelling mistakes, loanwords and the Romance languages (allen1978). Good evidence, not recordings.
2. **Hidden quantity** (vowel length in syllables that are heavy anyway) is uncertain for a number of words; dictionaries differ.
3. **"Basic" word order.** Verb-final order is the commonest in Caesar and much classical prose, but Latin order is driven by information flow, and counts vary greatly by author and genre (pinkster2015; devine2006). Teach verb-final as the neutral default of formal prose, not as a rule.
4. **Perfect: tense or aspect?** The Latin perfect continues two Indo-European categories (aorist and perfect), which is why it has two readings ("did" and "has done") and several stem formations (weiss2020; sihler1995). How far classical Latin grammar is organised by aspect at all is debated (pinkster2015).
5. **Origin of forms.** Histories of endings (genitive -ī, the -b- future and imperfect, the passive -r) follow weiss2020 and sihler1995. Where those two differ or call something uncertain, the lesson says "disputed" or "uncertain". No etymology is stated without one of these, or wiktionary's etymology section citing de Vaan, behind it.
6. **i-stem membership.** The classical language is in the middle of merging consonant stems and i-stems; ablative singular -e/-ī and accusative plural -ēs/-īs vary by word, author and editor. Teach the rules of thumb (ag1903) as tendencies and say that editions differ.
7. **Sequence of tenses and the "rules" of the subjunctive** are schoolbook regularisations of usage; exceptions in real authors are normal (pinkster2015). Teach the rule, then show a real exception where useful.

## 7. Text corpora for attested examples

- thelatinlibrary: plain texts of all major authors. Convenient; lightly edited, so check wording against a second source when quoting more than a phrase.
- perseus (Scaife/Perseus): texts with English translations and morphological parsing. The old "hopper" address refused automated requests on 2026-11-11; use scaife.perseus.org or cite via thelatinlibrary and logeion.
- logeion: Lewis & Short and other dictionaries, with corpus examples.
- vulgate: Clementine and Stuttgart texts are widely mirrored (e.g. thelatinlibrary, vulgate.org).
- Inscriptions: cite by CIL number (Corpus Inscriptionum Latinarum); the Epigraphik-Datenbank Clauss-Slaby (edcs) gives searchable texts.

Cite attested sentences as author, work, book.chapter(.section) or poem.line, e.g. `Caesar, Gallic War 1.1.1`. Translations are always our own.

## 8. Notes for drafters

- British spelling; second person; short sentences; one idea per paragraph. No "simply", no "just" as filler.
- Every lesson states *why*: a sound change, an inherited system, or a functional pressure, with the source behind any historical claim.
- Constructed examples use only words already introduced in a `:::vocab` block (this lesson or earlier) and only grammar already introduced.
- An example whose gloss needs a category not yet taught must carry `preview:` and say so in its note.
- Connections worth making for this reader: Spanish and French descend from Latin (sound correspondences, survival of forms); Japanese and Korean share verb-final order and case particles doing the work of Latin endings; Arabic has case endings (-u, -a, -i) with a similar three-way core.
