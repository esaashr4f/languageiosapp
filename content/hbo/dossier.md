# Biblical Hebrew dossier

Built 2026-11-12. Source ids refer to `sources.json`. Everything a drafting or verifying agent needs to stay consistent is here. Where this file and a named source disagree, the source wins and this file gets corrected. Anything marked **(unverified)** was written from recall or from a source not opened in this session. It must be checked before it goes into a lesson as `verified`.

**Checking tools used in this session.** Corpus counts below come from the OSHB files (all 39 books, downloaded 2026-11-12). The method was: strip accents (U+0591–U+05AF), meteg (U+05BD) and paseq (U+05C0), normalise to NFC, then match whole words. A count such as "דְּבָרוֹ 20× Ncmsc/Sp3ms" means the form occurs 20 times, tagged as a construct noun with a 3ms suffix. Forms in maqqef compounds and pausal forms are counted separately, so a low count does not mean a rare word. Drafters should use the same method: fetch `https://raw.githubusercontent.com/openscriptures/morphhb/master/wlc/<Book>.xml` (book ids `Gen Exod Lev Num Deut Josh Judg Ruth 1Sam 2Sam 1Kgs 2Kgs Isa Jer Ezek Hos … Ps Prov Job Song Eccl Lam Esth Dan Ezra Neh 1Chr 2Chr`), keep the files in a scratch directory, and search them there. Do not commit them to the repository.

## 1. Variety taught

- **Base:** Classical Biblical Hebrew (also called Standard Biblical Hebrew): the prose of the narrative books Genesis to 2 Kings, and Ruth. It is read in the **Tiberian vocalisation** of the Masoretic text, as found in the Leningrad Codex (dated AD 1008/9 **(date unverified: from recall)**) and transcribed in the Westminster Leningrad Codex (oshb, uxlc). Every reference grammar listed describes this variety and this pointing (gkc1910 §§2–3; jm2006 and lambdin1971 not consulted).
- **Flagged as other varieties, taught in part 7:**
  - poetry (Psalms, Job, Proverbs, the old poems in Genesis 49, Exodus 15, Judges 5): hbo-07-05, hbo-07-06;
  - Late Biblical Hebrew (Chronicles, Ezra, Nehemiah, Esther, Qohelet, Daniel's Hebrew chapters): hbo-07-07;
  - pre-exilic inscriptions in the Palaeo-Hebrew script: hbo-07-10;
  - Biblical Aramaic (Daniel 2:4b–7:28, Ezra 4:8–6:18, 7:12–26, Jeremiah 10:11, two words in Genesis 31:47): recognised only, hbo-07-11. It is a different language.
  
  A form from these varieties that appears before part 7 must be labelled in its note ("poetic", "late").
- **What the pointing is, and what that means. This must be taught in hbo-00-01, hbo-01-03 and hbo-07-04.** The consonantal text took shape between about the 10th and the 2nd century BC. The vowel points, dagesh and accents were added by the Masoretes of Tiberias in the early Islamic period, roughly AD 750 to 950 (khan2020, abstract on the landing page, opened: "created in Tiberias in the early Islamic period"). That is about a millennium after most of the texts were written. Consequences, each to be stated where it matters:
  1. The pointing records a **reading tradition**: how the text was recited in synagogue in Tiberias. It does not record how Isaiah or the scribes of Kings spoke. That tradition was old and careful, and has roots in antiquity (khan2020 abstract). But it has features that arose after the biblical period. The main examples: spirantisation of b g d k p t, established only during or after the biblical period (wp-bh); the merger of two sounds each in ḥ and ʿ by c. 200 BC (wp-bh); and the reading of ś as [s].
  2. Where the consonants and the vowels disagree, the vowels are the later layer. Ketiv and qere (hbo-01-09) are the Masoretes' own record of such cases.
  3. "Classical Biblical Hebrew in Tiberian pointing" is a hybrid of a first-millennium-BC grammar and a first-millennium-AD pronunciation. The guide teaches the hybrid because it is what every edition prints and every grammar and lexicon describes. It says plainly when a rule belongs to the reading tradition (pausal forms, most vowel-length rules, begadkefat) rather than to the language of the authors.
  4. The European school pronunciation that most grammars teach is not the Tiberian one. Modern Israeli pronunciation is not either. khan2020's stated aim is to bridge that gap. See section 2.
- **Why this variety:** it is the bulk of the Hebrew Bible's prose, its grammar is the most regular, and all teaching grammars start from it. The capstone (Genesis 1) is in it.

## 2. Phoneme inventory

There are three layers, and the guide names which one it means each time:

- **(a) Tiberian:** the pronunciation the pointing encodes (khan2020). It is the guide's reference pronunciation, because it explains the pointing. For example, qameṣ and qameṣ ḥaṭuf share one sign because they had one quality, [ɔ].
- **(b) Earlier, biblical-period Hebrew:** reconstructed from spelling, transcriptions and comparison (wp-bh). Teach it only to explain the system's history.
- **(c) The common modern reading:** Israeli-style, used in most classrooms. Mention it so the reader can follow other teachers. Do not teach it as Biblical.

Sources: wp-romanization (its Tiberian IPA column cites Khan; opened) and wp-bh (opened). khan2020 itself: landing page only. Every Tiberian value below is therefore **(via wp-romanization; check in khan2020 vol. I, ch. I.0 and I.1–I.2 when its chapters can be opened)**.

### Consonants

Each row gives the letter (with its final form, if any), the name, the Tiberian value, the guide's transliteration, a description, and notes on layers (b) and (c).

| Letter | Name | Tiberian | Translit | Description | Notes: (b) earlier, (c) modern |
|---|---|---|---|---|---|
| א | ʾālep̄ | [ʔ] | ʾ | glottal stop, the catch in "uh-oh" | (c) usually silent |
| בּ / ב | bêt | [b] / [v] | b / ḇ | b; soft form v | (b) [b] only, before spirantisation |
| גּ / ג | gîmel | [g] / [ʁ] | g / ḡ | g; soft form a uvular fricative like French r | (c) both g |
| דּ / ד | dālet | [d] / [ð] | d / ḏ | d; soft form th of "this" | (c) both d |
| ה | hê | [h] | h | h | |
| ו | wāw | [v] (wp-romanization; [w] in some environments) | w | in Tiberian labio-dental v | (b) [w]; translit stays w (SBL) |
| ז | zayin | [z] | z | z | |
| ח | ḥêt | [ħ] | ḥ | pharyngeal fricative, the Arabic ح | (b) also [χ] (Arabic خ) until c. 200 BC; (c) [χ] |
| ט | ṭêt | [tˤ] | ṭ | "emphatic" t, the Arabic ط | (c) plain t |
| י | yôd | [j] | y | y | |
| כּ / כ ך | kāp̄ | [kʰ] / [χ] | k / ḵ | k; soft form ch of "Bach" | |
| ל | lāmed | [l] | l | l | |
| מ ם | mêm | [m] | m | m | |
| נ ן | nûn | [n] | n | n | |
| ס | sāmek | [s] | s | s | |
| ע | ʿayin | [ʕ] | ʿ | pharyngeal, the Arabic ع | (b) also [ʁ] (Arabic غ) until c. 200 BC (wp-bh; the Septuagint example usually cited, Γάζα for ʿazzâ, is **unverified**); (c) usually silent |
| פּ / פ ף | pê | [pʰ] / [f] | p / p̄ | p; soft form f | |
| צ ץ | ṣādê | [sˤ] | ṣ | "emphatic" s, the Arabic ص | (b) possibly affricate [tsˤ] (disputed, wp-bh); (c) [ts] |
| ק | qôp̄ | [q] | q | back k, the Arabic ق | (c) k |
| ר | rêš | [ʀ] (uvular; an alveolar variant in some contexts, wp-romanization note) | r | | (b) probably alveolar |
| שׁ | šîn | [ʃ] | š | sh | |
| שׂ | śîn | [s] | ś | in Tiberian the same sound as ס | (b) probably lateral [ɬ], as in Welsh ll (comparative evidence, wp-bh); this is why one letter serves both š and ś |
| תּ / ת | tāw | [tʰ] / [θ] | t / ṯ | t; soft form th of "thin" | (c) both t |

Points to teach:

- **The gutturals** are ʾ, h, ḥ, ʿ, and in part r. They cannot be doubled, and they prefer a-vowels and hatef vowels. These two facts explain a large share of the "irregular" vowels (gkc1910 §22, opened). Teach them in hbo-01-02 and use them constantly afterwards.
- **"Emphatic"** ṭ, ṣ, q: pharyngealised in Tiberian and in Arabic. Their earlier articulation is disputed: pharyngealised, velarised, or perhaps ejective as in Ethiopic (wp-bh). Say "probably pharyngealised".
- **Begadkefat:** b g d k p t have a hard (stop) and a soft (fricative) form. The soft form follows a vowel, the hard form follows a consonant or a pause. Hard is marked with dagesh lene (gkc1910 §§13, 21, opened). The alternation arose during the biblical period, probably under Aramaic influence (wp-bh). Teach it as a feature of the reading tradition that the language itself acquired late.

### Vowels

The Tiberian system has seven full vowel qualities and three reduced (hatef) vowels. The same sign can be long or short. In Khan's description, length is conditioned by stress and syllable structure rather than written separately **(unverified: from recall of khan2020; wp-romanization shows qameṣ [ɔː], ṣere [eː], ḥolem [oː], pataḥ [a]~[aː], segol [ɛ]~[ɛː])**.

| Sign (on ב) | Name | Tiberian quality | School pronunciation (European) | Translit |
|---|---|---|---|---|
| בִ | ḥîreq | [i] | i or ī | i (î with yod) |
| בֵ | ṣērê | [e] | ē | ē (ê with yod) |
| בֶ | sĕgôl | [ɛ] | e | e |
| בַ | pataḥ | [a] | a | a |
| בָ | qāmeṣ | [ɔ] | ā (o when "ḥaṭuf") | ā or o (see section 3) |
| בֹ | ḥōlem | [o] | ō | ō (ô with waw) |
| בֻ / בוּ | qibbûṣ / šûreq | [u] | u / ū | u / û |
| בְ | šəwāʾ | vocal: [a]-like, short (wp-romanization: Tiberian /a/); silent: nothing | vocal ə, silent nothing | ə / nothing |
| בֲ | ḥāṭēp̄ pataḥ | [ă] | ă | ă |
| בֱ | ḥāṭēp̄ sĕgôl | [ɛ̆] | ĕ | ĕ |
| בֳ | ḥāṭēp̄ qāmeṣ | [ɔ̆] | ŏ | ŏ |

Points to teach:

- **The pointing marks quality, not length.** The European school grammar turned the seven qualities into "long" and "short" vowel classes (qameṣ = long a; qameṣ ḥaṭuf = short o). That is a later analysis. It works as a teaching tool for predicting vowel changes (gkc1910 §§8–9, 25–27, opened), but it is not what the Masoretes wrote. The guide uses the school terms "long" and "short" only as names for how vowels behave in patterns, and says so in hbo-01-03.
- **Vocal shewa** in Tiberian was a short vowel, normally of a-quality, but assimilated to a following guttural's vowel or to [i] before yod. The European ĕ/ə reading is a convention (gkc1910 §10 says ĕ "has been adopted as the normal transcription", "although it is certain that it often became assimilated in sound to other vowels", opened). The full Tiberian rules for when shewa is vocal differ in detail from the school rules **(unverified; khan2020 ch. I.2.5, not opened)**. Teach the school rules (gkc1910 §10). These are vocal: shewa at the start of a word, under a doubled consonant, as the second of two shewas, and after a long vowel in an unstressed open syllable. Then note that the Masoretic reality was richer.
- **Furtive pataḥ:** under final ḥ, ʿ or h with mappiq after a non-a vowel, it is pronounced before the consonant: רוּחַ rûaḥ (gkc1910 §22f–g, opened).
- **(b) Earlier vowels:** Proto-Hebrew had i u a, each short and long. The Tiberian qualities reflect later changes: lengthening of pretonic vowels, the Canaanite shift ā > ō, segholisation (wp-bh, opened, as pointer). Used in hbo-07-08 only, and labelled "reconstructed".

### Syllables and stress (gkc1910 §§26, 29, opened)

- Every syllable begins with one consonant. The exceptions are a word-initial conjunction û- and furtive pataḥ. A syllable is open (ends in a vowel) or closed (ends in a consonant).
- **Stress:** most words are stressed on the last syllable (*milraʿ*). Segholates and some suffixed and verbal forms are stressed on the next-to-last (*milʿêl*): מֶלֶךְ mélek. Weqatal moves the stress from the next-to-last to the last syllable "in certain verbal forms" (gkc1910 §49h, opened: הָלַכְתִּי hāláktî "I went", consecutive וְהָלַכְתִּי wəhālaktî́ "and I will go"); the shift "is not consistently carried out", never in the 1st plural (§49k). The forms concerned are mainly 1SG and 2SG.M: וְשָׁמַרְתָּ wəšāmartā́ versus šāmártā. Wayyiqtol often pulls the stress back: יָקוּם yāqûm, וַיָּקָם wayyā́qom (gkc1910 §49d, opened). Stress also accounts for many vowel changes (gkc1910 §29).
- **Do not mark stress in `orig`, `translit` or `morphemes`.** Mark it with an acute accent on the translit vowel only in part 1 lessons, in notes, and in vocab notes for words stressed on the next-to-last syllable (*mélek*). Say there that the acute is the guide's.
- **Pause:** at a major division (atnaḥ, silluq), many words take a pausal form, usually with a lengthened or restored vowel: אָרֶץ ʾereṣ → אָרֶץ ʾāreṣ, מַיִם mayim → מָיִם māyim (gkc1910 §29i–v). Attested examples quoted at the end of a verse are often pausal. Gloss them like the normal form and say "pausal" in the note.

## 3. Script and transliteration

### Script

- **Square script** (*ktāb ʾaššûrî*), 22 consonant letters, written right to left. Five letters have final forms: כ ך, מ ם, נ ן, פ ף, צ ץ (gkc1910 §5, opened). The script is Aramaic in origin. The older Palaeo-Hebrew script (descended from Phoenician) appears in inscriptions and some Dead Sea Scrolls: taught in hbo-07-10 only.
- **Vowel letters** (*matres lectionis*): ה, ו, י (and א) double as vowel signs: ו for ô/û, י for î/ê, final ה for â/ê/ō, rarely א. A word with them is spelled "full" (plene), without them "defective". The same word can be spelled both ways: לֹא and לוֹא (gkc1910 §§7–8). The consonantal text varies, and the guide copies WLC exactly.
- **Points used in this guide:** the vowels in section 2; dagesh/mappiq U+05BC (one sign, three jobs: dagesh forte, dagesh lene, mappiq in final ה); šin dot U+05C1, śin dot U+05C2; rafe U+05BF (rare; do not use unless quoting); maqqef U+05BE; sof pasuq U+05C3.
- **Accents (ṭəʿāmîm)** U+0591–U+05AF and meteg U+05BD are **stripped from `orig` everywhere** except in hbo-01-09 (and any later lesson that discusses a specific accent). There, quote the verse with its accents as WLC has them and say so. Reasons: the accents are cantillation and punctuation, not grammar. They clutter a phone screen. Stripping them keeps NFC handling simple. hbo-01-09 teaches only the major disjunctives as punctuation: silluq with sof pasuq (verse end), atnaḥ (main division), zaqep̄ qāṭōn and səgôltâ (sub-divisions), rəbîaʿ, ṭipḥâ; plus maqqef and conjunctive accents as "joining". Cantillation beyond that is out of scope.
- **Ketiv and qere:** WLC prints the written consonants (ketiv) with the vowels of the word to be read (qere). In `orig`, copy WLC as it stands. In `translit`, `morphemes` and `gloss`, give the qere. Add a note: "ketiv X, read Y". The perpetual qeres are not footnoted in the text and must be taught (hbo-01-09, hbo-07-04):
  - **יְהוָה** (YHWH, pointed with the vowels of ʾădōnāy "my Lord"; WLC writes יְהוָה with shewa and no ḥolem);
  - **יְרוּשָׁלַ͏ִם** Jerusalem (two vowels under lamed: the qere yərûšālayim);
  - **הִוא** for hîʾ "she" in the Torah: WLC writes the consonants הוא pointed hiriq. Corpus: הִוא 128×, of which 127 are tagged 3fs pronoun (oshb).

### Unicode and normalisation (unicode-hebrew; checked with Python unicodedata in this session)

- **Files are NFC** (the linter rejects anything else).
- **WLC/OSHB text is not NFC.** OSHB's README says to avoid NFC normalisation, citing the SBL Hebrew font manual. WLC stores a letter's marks in "logical" order (dagesh, then šin dot, then vowel). NFC re-sorts them by canonical combining class: ḥireq 14, ṣere 15, segol 16, pataḥ 17, qameṣ 18, ḥolem 19, qibbuṣ 20, dagesh 21, meteg 22, rafe 23, šin dot 24, śin dot 25. Example, הַשָּׁמַיִם: WLC has šin + šin dot + dagesh + qameṣ; NFC gives šin + qameṣ + dagesh + šin dot. The words are canonically equivalent and current shaping engines (Core Text, HarfBuzz) reorder marks for display. **Rule: always NFC-normalise text copied from WLC/OSHB/UXLC.** The rendering of NFC-ordered pointed text on the owner's iPhone must still be checked and recorded in `docs/script-rendering.md` (not yet done).
- **Two vowels on one letter.** The one case where NFC changes meaning-bearing order is two vowels under one letter: the qere perpetuum of Jerusalem, where WLC has lamed + qameṣ + ḥireq and NFC would give lamed + ḥireq + qameṣ. There, put **U+034F COMBINING GRAPHEME JOINER** between the two vowels (pataḥ/qameṣ, CGJ, ḥireq). This keeps the WLC order and is still NFC, because CGJ has class 0. In this session no WLC file contained a CGJ, so WLC has no such protection. Drafters must add it. Check every such word by printing code points.
- **Strip** before NFC: U+0591–U+05AF (accents), U+05BD (meteg), U+05C0 (paseq), and OSHB's "/" morpheme separators. Keep U+05BE maqqef and U+05C3 sof pasuq. Do not use U+05C7 qameṣ qaṭan (WLC does not use it; the reading goes in `translit`). Do not use precomposed presentation forms (U+FB1D–U+FB4F). A one-line check:
  `python3 -c "import sys,unicodedata as u;s=sys.argv[1];print(s==u.normalize('NFC',s),[hex(ord(c)) for c in s])" 'בְּרֵאשִׁית'`
- **No bidi control characters** (the linter warns on U+202A–U+202E and U+2066–U+2069). The renderer sets direction on the `orig` element. Hebrew quoted inside English prose is left to the Unicode bidi algorithm. Keep such quotes to one word or phrase, and always follow them with the transliteration in italics, so a mis-ordered display does not mislead.
- **Transliteration characters:** ḇ U+1E07, ḏ U+1E0F, ḵ U+1E35, ṯ U+1E6F, ḡ U+1E21, p̄ = p + U+0304 (no precomposed form; NFC leaves it as two characters), ḥ U+1E25, ṭ U+1E6D, ṣ U+1E63, š U+0161, ś U+015B, ʾ U+02BE, ʿ U+02BF, ə U+0259, ă U+0103, ĕ U+0115, ŏ U+014F, â ê î ô û and ā ē ō with macron, all precomposed by NFC. Do not use apostrophes ' or ‘ for ʾ ʿ.

### Transliteration scheme: SBL academic style (sblhs2 §5.1.1), second edition

**Why this scheme.** It is the scheme of the standard English reference works and journals. It shows exactly what the reader needs here:

- spirantisation (ḇ vs b);
- doubling (dagesh forte as a double letter);
- the vowel sign written (ā vs a vs â);
- whether a vowel letter is present (ō defective vs ô plene).

It is therefore nearly letter-for-letter reversible to the pointed text, which the verification pass (BRIEF §5, script check) needs. The SBL general-purpose style (*shema*, *bereshit*) loses spirantisation, length and vowel letters. The guide uses it only for familiar names and terms in running prose (Torah, Shema, Qohelet, binyan, Masoretes), never in example fields. The second edition replaced first-edition ĕ for vocal shewa with **ə**, keeping ĕ for ḥaṭep̄ segol, and spells the stems *qal, niphal, piel, pual, hiphil, hophal, hithpael* (sblhs2 rule-change list, opened via the quoted list). The guide follows both changes.

**Consonants.** ʾ b ḇ g ḡ d ḏ h w z ḥ ṭ y k ḵ l m n s ʿ p p̄ ṣ q r ś š t ṯ, as in the table in section 2. Final forms are transliterated like the ordinary letter.

- **Dagesh forte:** the consonant written twice: הַמֶּלֶךְ hammelek, וַיְדַבֵּר waydabbēr. A doubled begadkefat letter is hard: וַיִּתֵּן wayyittēn.
- **Dagesh lene:** the plain letter (b d g k p t). The absence of dagesh after a vowel gives the soft letter (ḇ ḏ ḡ ḵ p̄ ṯ).
- **Mappiq in final ה:** h (לָהּ lāh). A final ה with no mappiq is a vowel letter and is shown by the vowel sign (â, ê, ō, eh, ēh; below).
- **Initial ʾ is written** (ʾĕlōhîm). Silent ʾ (no vowel of its own, as in בָּרָא, רֵאשִׁית) is still written ʾ (bārāʾ, rēʾšît), as SBL does.

**Vowels.**

| Pointed | Translit | Note |
|---|---|---|
| ַ pataḥ | a | including furtive pataḥ, written where it is pronounced: rûaḥ |
| ָ qāmeṣ | ā | |
| ָ qāmeṣ ḥāṭûp̄ | o | in an unstressed closed syllable: כָּל־ kol-, חָכְמָה ḥokmâ, וַיָּקָם wayyāqom |
| ֶ sĕgôl | e | |
| ֵ ṣērê | ē | |
| ִ ḥîreq (no yod) | i | always i; the guide does not use SBL's optional ī for "long" defective ḥireq |
| ֹ ḥōlem (no waw) | ō | |
| וֹ ḥōlem wāw | ô | |
| ֻ qibbûṣ | u | always u; the guide does not use ū |
| וּ šûreq | û | |
| ִי ḥîreq yôd | î | |
| ֵי ṣērê yôd | ê | |
| ֶי sĕgôl yôd | ê | same as ṣērê yôd in SBL; `orig` disambiguates |
| ָה final qāmeṣ hê | â | |
| ֶה final sĕgôl hê | eh | |
| ֵה final ṣērê hê | ēh | |
| ֹה final ḥōlem hê | ōh | |
| ְ vocal shewa | ə | |
| ְ silent shewa | (nothing) | |
| ֲ ֱ ֳ | ă ĕ ŏ | |
| ָיו (3ms suffix on plurals) | āyw | yod written, not pronounced in Tiberian |

**Points of judgement, recorded here.**

1. **Qameṣ ḥaṭuf:** the sign is the same as qameṣ, so `translit` must decide between ā and o. The rules are gkc1910 §9u (opened in §9). (a) In a closed unstressed syllable, read o: kol-, ḥokmâ, wayyāqom, qodšô. (b) Before ḥaṭep̄ qāmeṣ, read o: פָּעֳלוֹ poʿŏlô. (c) Where WLC has meteg to mark an open syllable, the meteg shows ā even though it is stripped from `orig`. The drafter must look at the accented WLC form before stripping. When in doubt, check the word in wiktionary (which marks qameṣ qaṭan with U+05C7 in some entries) and note "(qameṣ ḥaṭuf by rule; unverified)".
2. **Vocal or silent shewa:** use the school rules (section 2). The two disputed cases are shewa after a long vowel with meteg, and the second of two identical consonants. Follow gkc1910 §10 and do not raise the matter in lessons other than hbo-01-05.
3. **The divine name:** transliterate as **YHWH** in `translit` and `morphemes`, as SBL style does. Gloss it **Yhwh**: the linter reads capitals as abbreviations. Translate it **the LORD**, because the Masoretic reading taught here is ʾădōnāy. Explain this once in hbo-01-09 and again in hbo-07-04.
4. **Maqqef** is a hyphen in `translit` (kol-hāʾāreṣ). In `morphemes`, words joined by maqqef are written as separate words, because `-` there means a morpheme boundary. See section 4.

## 4. Grammatical and glossing conventions

### Right to left: what goes in each field

- **`orig`:** pointed Hebrew, accents stripped (section 3), NFC, no bidi controls, maqqef and sof pasuq as in WLC. It is displayed as one right-to-left block and is **not** aligned word by word.
- **`translit`:** the whole sentence in the SBL academic scheme, left to right, maqqef as hyphen, no morpheme breaks.
- **`morphemes`:** **transliteration, left to right, segmented.** This is the line the renderer aligns with `gloss`, so it must be in Latin letters. Hebrew in an LTR alignment grid would put the first word on the left and reverse the reader's expectation. Each space-separated word of `morphemes` corresponds to one of `gloss`, in the same left-to-right order, which is the order of the Hebrew words from right to left. Words joined by maqqef count as separate words here.
- **`gloss`:** Leipzig-style, aligned with `morphemes`.
- **`literal`:** the Hebrew order in English where it helps (verb-subject order, construct chains).
- The drafter never reverses anything by hand. Hebrew is typed in logical (reading) order, transliteration in normal order.

### Segmentation

- **Proclitics take `=`:** the conjunction wə= (and its forms û=, wā=, wa=), the article ha= (hā=, he=), the prefixed prepositions bə=, lə=, kə= (and their merged forms with the article bā=, lā=, kā=), mi= / mē= (from, the assimilated form of min), the interrogative hă=. Example: וְהָאָרֶץ wə=hā=ʾāreṣ `and=DEF=earth`.
- **Doubling caused by the article, by mi-, or by wayyiqtol** stays with the following word, because the doubled letter is that word's first consonant: הַשָּׁמַיִם ha=ššāmayim, מִבֵּית mi=bbêt, וַיֹּאמֶר way-yōʾmer. The point is explained in the note, not hidden.
- **Pronoun suffixes take `-`:** they are bound suffixes, not clitics. דְּבָרוֹ dəbār-ô `word-3SG.M`; לוֹ l-ô `to-3SG.M`; אֹתוֹ ʾōt-ô `OBJ-3SG.M`. The plural-noun suffix forms take the plural marker with them: דְּבָרָיו dəbār-āyw `word.PL-3SG.M`.
- **Verbs.** The stem and conjugation are fused, so they are glossed with full stops, not segmented. The root-and-pattern stem cannot be cut with hyphens, and the guide does not invent boundaries.
  - **qatal:** stem.QTL then the person ending as its own piece, except for 3SG.M, which has no ending: שָׁמַר šāmar `guard.QTL.3SG.M`; שָׁמַרְתָּ šāmar-tā `guard.QTL-2SG.M`; שָׁמְרוּ šāmr-û `guard.QTL-3PL`. The endings are separable and look like pronouns (gkc1910 §44a).
  - **yiqtol, jussive, cohortative, imperative, infinitive:** one piece, all labels fused. Person is marked by a prefix and an ending on both sides of the stem, which hyphens cannot show honestly: יִשְׁמֹר yišmōr `guard.YQTL.3SG.M`; תִּשְׁמְרוּ tišmərû `guard.YQTL.2PL.M`. Lessons hbo-04-03 and hbo-09-02 show the prefixes and endings in tables.
  - **Wayyiqtol:** the prefix way- (with the doubling handled as above) glossed WAYY, then the short prefix form glossed without YQTL: וַיֹּאמֶר way-yōʾmer `WAYY-say.3SG.M`; וַיְדַבֵּר way-dabbēr `WAYY-speak.PIEL.3SG.M`.
  - **Weqatal:** wə- glossed WQTL, then stem and ending: וְשָׁמַרְתָּ wə-šāmar-tā `WQTL-guard-2SG.M`. A plain "and" + qatal that is not weqatal (past, not a continuation) is wə= `and=`, with `.QTL` on the stem. The drafter decides from context and stress. The note says which.
  - **Stems:** qal is unmarked. The derived stems are glossed NIPH, PIEL, PUAL, HITP, HIPH, HOPH after the lexical meaning: דִּבֶּר dibbēr `speak.PIEL.QTL.3SG.M`. Label order: meaning.STEM.CONJUGATION.PERSON.
  - **Participles** inflect like nouns: שֹׁמֵר šōmēr `guard.PTCP.SG.M`; שֹׁמְרִים šōmər-îm `guard.PTCP-PL.M`; the passive שָׁמוּר šāmûr `guard.PASS.PTCP.SG.M`.
  - **Object suffixes** on verbs take `-`: יְנַהֲלֵנִי yənahălē-nî `lead.PIEL.YQTL.3SG.M-1SG`.
- **Nouns.** Masculine singular absolute is unmarked. Plural endings are segmented: מְלָכִים məlāk-îm `king-PL`. Feminine -â/-t is segmented only in lessons about gender, otherwise glossed as part of the stem. The construct state is CSTR: דְּבַר dəbar `word.CSTR`; דִּבְרֵי dibrê `word.PL.CSTR` (the construct plural ending -ê fuses number and state). Gender is glossed on nouns only in hbo-03-01, and always on adjectives, pronouns, verbs and suffixes.
- **Person labels:** 1SG, 2SG.M, 2SG.F, 3SG.M, 3SG.F, 1PL, 2PL.M, 2PL.F, 3PL.M, 3PL.F. Forms common to both genders (1st person, qatal 3PL) take no gender: 3PL.
- **Particles** are glossed with lower-case English: lōʾ `not`, ʾal `not` (with jussive; note says "prohibitive"), kî `that`/`because` (by context), hinnēh `look`, nāʾ `please`, yēš `there.is`, ʾên `there.is.not`, gam `also`. ʾēt is OBJ. ʾăšer is REL. The directional -â is DIR: מִצְרַיְמָה miṣráym-â `Egypt-DIR` (oshb 13×, tagged Np/Sd).
- **Names:** English Bible forms with capitals (`Abraham`, `Moab`). ʾĕlōhîm meaning God is `God`; meaning "gods" it is `god.PL`.
- **Citation forms:** verbs by the qal qatal 3ms (שָׁמַר šāmar "guard"), with the root in prose as š-m-r. A verb not used in qal is cited by its commonest stem, with the stem named (דִּבֶּר dibbēr piel "speak"). Nouns in the absolute singular, with plural and construct where irregular. Vocab line: `שָׁמַר | šāmar | verb | guard, keep | qal; yiqtol yišmōr; root š-m-r`.
- **Terms:** "qatal", "yiqtol", "wayyiqtol", "weqatal" (lower case, italic in prose) as the names of the forms, not "perfect/imperfect" or "past/future". The traditional names are given once in hbo-04-02 and hbo-04-06, with the reason the guide avoids them. "Stem" for binyan, with *binyan* given once. "Construct state" (*smîkût* not used). "Root" for the abstract consonants, written with hyphens: š-m-r.

## 5. Major paradigms and where to check them

Check each form against gkc1910 (section numbers below; each section is the Wikisource page /N), the OSHB corpus (method at the top) and, for pointing only, wiktionary (`python3 tools/wikt.py <unpointed word> Hebrew`; Modern Hebrew labels).

### Independent pronouns (gkc1910 §32, opened; oshb counts)

| | Singular | Plural |
|---|---|---|
| 1 | אֲנִי ʾănî (587×), אָנֹכִי ʾānōkî (293×) | אֲנַחְנוּ ʾănaḥnû (75×) |
| 2 m | אַתָּה ʾattâ (484×) | אַתֶּם ʾattem (213×) |
| 2 f | אַתְּ ʾatt (37× as 2fs) | אַתֵּנָה ʾattēnâ / אַתֶּן ʾatten (rare; gkc1910 §32 has אַתֶּן; **counts unverified**) |
| 3 m | הוּא hûʾ (866× as 3ms) | הֵם hēm (176×), הֵמָּה hēmmâ (218×) |
| 3 f | הִיא hîʾ (187×), Torah ketiv הִוא (127×) | הֵנָּה hēnnâ (rare as pronoun: most of the 70 tokens are the adverb "here, hither") |

### Qal qatal and yiqtol, strong verb

gkc1910 §44 and §47 (opened, with model קָטַל; all forms below found in the section text with קטל). For שָׁמַר the forms follow the same pattern (wiktionary שמר table, opened; oshb counts in brackets).

| Person | qatal | yiqtol |
|---|---|---|
| 3SG.M | שָׁמַר šāmar (8×) | יִשְׁמֹר yišmōr (5×) |
| 3SG.F | שָׁמְרָה šāmrâ (3× as 3fs) | תִּשְׁמֹר tišmōr (3× as 3fs) |
| 2SG.M | שָׁמַרְתָּ šāmartā (8×) | תִּשְׁמֹר tišmōr (9×) |
| 2SG.F | שָׁמַרְתְּ šāmart (0×; gkc קָטַלְתְּ) | תִּשְׁמְרִי tišmərî (0×; gkc תִּקְטְלִי) |
| 1SG | שָׁמַרְתִּי šāmartî (6×) | אֶשְׁמֹר ʾešmōr (4×) |
| 3PL(.M) | שָׁמְרוּ šāmrû (10×) | יִשְׁמְרוּ yišmərû (12×) |
| 3PL.F | (= 3PL) | תִּשְׁמֹרְנָה tišmōrnâ (0×; gkc תִּקְטֹלְנָה) |
| 2PL.M | שְׁמַרְתֶּם šəmartem (4×) | תִּשְׁמְרוּ tišmərû (8×) |
| 2PL.F | שְׁמַרְתֶּן šəmarten (gkc קְטַלְתֶּן) | תִּשְׁמֹרְנָה tišmōrnâ |
| 1PL | שָׁמַרְנוּ šāmarnû (2×) | נִשְׁמֹר nišmōr (1×, Deut 6:25) |

Imperative שְׁמֹר šəmōr (11×), שִׁמְרוּ šimrû (7×); infinitive construct לִשְׁמֹר lišmōr (35×); infinitive absolute שָׁמוֹר / שָׁמֹר šāmōr (2×, Deut 11:22, 27:1); participle שֹׁמֵר šōmēr (36×), שֹׁמְרִים šōmərîm (9×); passive participle שָׁמוּר šāmûr (2×); weqatal וְשָׁמַרְתָּ wəšāmartā (12×, tagged Vqq2ms); wayyiqtol וַיִּשְׁמֹר wayyišmōr (3×). Forms with 0× are paradigm forms: label them `verified` against gkc1910 for the pattern, and say in the text that the form of this verb is unattested if it is shown.

### Wayyiqtol (gkc1910 §49, §111, opened)

The short prefix form (jussive form) after wa- plus doubling. In weak verbs the stress is pulled back and the last vowel shortened (§49d: יָקוּם → וַיָּקָם). 1SG takes wā- (no doubling before ʾ) and usually does not shorten (§49e; וָאֹמַר wāʾōmar 90×). Commonest forms (oshb counts): וַיֹּאמֶר wayyōʾmer 1948×, וַיְהִי wayhî 782×, וַיָּבֹא wayyābōʾ 243×, וַיַּעַשׂ wayyaʿaś 235×, וַיֵּלֶךְ wayyēlek 212×, וַיִּקַּח wayyiqqaḥ 202×, וַיְדַבֵּר waydabbēr 192× (piel), וַיִּתֵּן wayyittēn 150×, וַיֵּצֵא wayyēṣēʾ 134×, וַיַּרְא wayyarʾ 130× qal, וַיָּקָם wayyāqom 107×, וַיֵּשֶׁב wayyēšeb 95×, וַיָּשֶׂם wayyāśem 84×, וַיִּבֶן wayyiben 59×; plural וַיֹּאמְרוּ wayyōʾmərû 297×. These must be taught as vocabulary from hbo-04-04 on, each with a note on its root, before their weak classes are explained in hbo-04-11 to hbo-04-17. This is a deliberate exception to "explain before use", flagged in the note each time ("its root is h-l-k; why it looks like this: hbo-04-16").

### The stems, 3ms (gkc1910 §39 with קטל, opened; corpus examples)

| Stem | qatal | yiqtol | Corpus examples (oshb) |
|---|---|---|---|
| qal | קָטַל qāṭal | יִקְטֹל yiqṭōl | שָׁמַר, יִשְׁמֹר |
| niphal | נִקְטַל niqṭal | יִקָּטֵל yiqqāṭēl (§51) | נִשְׁמַר (2 Sam 20:10), נוֹלַד nôlad (I-y, 7×) |
| piel | קִטֵּל qiṭṭēl | יְקַטֵּל yəqaṭṭēl (§52) | דִּבֶּר dibbēr 200×, יְדַבֵּר 35×, בִּקֵּשׁ biqqēš 5× |
| pual | קֻטַּל quṭṭal | יְקֻטַּל yəquṭṭal **(yiqtol unverified)** | |
| hiphil | הִקְטִיל hiqṭîl | יַקְטִיל yaqṭîl (§53) | הִשְׁלִיךְ hišlîk 6×, וַיַּשְׁלֵךְ 14×, הִקְרִיב 6×, הֵקִים hēqîm 10×, הֵבִיא hēbîʾ 16× |
| hophal | הָקְטַל hoqṭal **(form in §39 not found by string match; pattern from oshb)** | יָקְטַל yoqṭal (§53) | הָפְקַד hopqad 2×, הֻגַּד huggad 8× (I-n) |
| hithpael | הִתְקַטֵּל hitqaṭṭēl | יִתְקַטֵּל yitqaṭṭēl **(§54 string not matched; pattern from oshb)** | הִתְהַלֵּךְ 2× (impv), וַיִּתְהַלֵּךְ 5×, יִתְהַלֵּךְ 1×, מִתְהַלֵּךְ 8×, וַיִּתְפַּלֵּל 16× |

### Nouns

- **Model words:** דָּבָר dābār "word" (changeable vowels, gkc1910 §93); מֶלֶךְ melek "king" (segholate, §93); תּוֹרָה tôrâ "instruction" (feminine, §95; construct תּוֹרַת tôrat 47×); the irregular nouns אָב, אָח, אִישׁ, אִשָּׁה, בֵּן, בַּת, בַּיִת, יוֹם, עִיר (gkc1910 §96, **not opened: unverified until checked**).
- **dābār** (oshb): דְּבָרִים dəbārîm (23× plus pausal), דְּבַר dəbar (CSTR, 156×), דִּבְרֵי dibrê (PL.CSTR, 240×). Suffixed singular: דְּבָרִי (6×), דְּבָרְךָ (7×), דְּבָרוֹ (20×), דְּבָרֵנוּ (2×). Suffixed plural: דְּבָרַי (20×), דְּבָרֶיךָ (14×), דְּבָרָיו (19×), דְּבָרֶיהָ (2×), דִּבְרֵיכֶם (7×), דִּבְרֵיהֶם (2×). The forms דְּבָרֵךְ, דְּבָרָהּ, דְּבַרְכֶם, דְּבָרָם are not attested for this noun. Teach the suffix set on סוּס sûs "horse" (gkc §91; **unverified**) or show it on several nouns, each checked.
- **melek** (oshb): מְלָכִים məlākîm (39×), מַלְכֵי malkê (110×), מַלְכִּי malkî (7× as noun + 1sg), מַלְכּוֹ malkô (5×). The suffixed forms show an older base malk- **(the historical *malk- explanation is unverified: not found in the §93 text by search; check §84a and §93 before stating it)**.
- **Article** (gkc1910 §35, opened): הַ + dagesh forte. Before gutturals and r, which cannot double, it takes הָ (before א, ר, usually ע) or הֶ (before unstressed הָ, חָ, and עָ). Pataḥ before ה, ח without doubling: the "virtual doubling" of §22c. After bə, lə, kə the ה drops: bā-, lā-, kā- (לָאוֹר lāʾôr, Gen 1:5).

### Prepositions with suffixes (oshb counts)

לִי lî 602×, לְךָ ləkā 435×, לָךְ lāk 303× (2fs), לוֹ lô 1036×, לָהּ lāh 189×, לָנוּ lānû 187×, לָכֶם lākem 466×, לָהֶם lāhem 638×. Object marker with suffix: אֹתִי ʾōtî 82×, אֹתְךָ ʾōtəkā 32×, אֹתוֹ ʾōtô 440×, אֹתָהּ ʾōtāh 115×, אֹתָנוּ ʾōtānû 30×, אֶתְכֶם ʾetkem 297×, אֹתָם ʾōtām 284×. Demonstratives: זֶה zeh 280×, זֹאת zōʾt 216×, אֵלֶּה ʾēlleh 320×.

### Where else to look in gkc1910

| Topic | gkc1910 | Lesson(s) |
|---|---|---|
| Letters, pronunciation | §§5–6 | hbo-01-01, -02 |
| Vowels, vowel letters | §§7–9 | hbo-01-03, -04 |
| Shewa, hatef vowels | §10 | hbo-01-05 |
| Syllables, vowel changes | §§26–28 | hbo-01-06, hbo-03-03 |
| Dagesh, begadkefat, mappiq | §§12–14, 20–21 | hbo-01-07 |
| Accents, maqqef, meteg, pause | §§15–16, 29 | hbo-01-08, -09 |
| Gutturals | §22 | hbo-01-02, hbo-04-11 |
| Pronouns, suffixes | §§32–33 | hbo-02-04, hbo-03-07 to -09 |
| Article, relative, interrogatives | §§35–37 | hbo-02-02, hbo-06-01, -02 |
| Stems and their meaning | §§39, 51–55 | hbo-04-01, -19 to -22, hbo-07-01, -02 |
| Qal and its forms | §§43–50 | hbo-04-02 to -10 |
| Waw consecutive (forms) | §49 | hbo-04-04, -05 |
| Verbal suffixes | §§57–61 | hbo-04-18 |
| Weak verbs | §§62–78 | hbo-04-11 to -17, -23 |
| Noun gender, plural, dual | §§80, 87–88 | hbo-03-01, -02 |
| Construct state | §§89, 128–130 | hbo-03-05, -06 |
| Nouns with suffixes, paradigms | §§91–96 | hbo-03-04, -07, -08, -12 |
| Numerals | §§97–98, 134 | hbo-05-03, -04 |
| Particles, prepositions, conjunctions | §§99–104 | hbo-02-05, hbo-05-01, -07, -08 |
| Use of the conjugations | §§106–112 | hbo-04-06, -07 |
| Infinitives and participles | §§113–116 | hbo-04-08 to -10, hbo-07-03 |
| Noun syntax, apposition, adjectives | §§122–132 | hbo-03-10, -11 |
| Clause types, negation, questions | §§140–153 | hbo-02-01, -07, -08 |
| Clauses: relative, circumstantial, causal, conditional, temporal, final | §§154–166 | part 6 |

**Syllabus check against gkc1910's table of contents (opened 2026-11-12).** Every chapter of gkc1910 maps to a lesson. The guide covers less than gkc1910 on:

- the accents (§15 has the full cantillation system; out of scope);
- quadriliterals and the rare stems (§§55–56, one lesson, hbo-07-02);
- "real and supposed remains of early case-endings" (§90; mentioned in hbo-07-08 and hbo-05-02 for the directional -â).

Topics added beyond gkc1910's grammar: the discourse function of the verbal chain (hbo-04-06, hbo-06-10), Late Biblical Hebrew (hbo-07-07), inscriptions (hbo-07-10). lambdin1971 was not available for comparison.

## 6. Points of scholarly disagreement

Say so in the lesson when one of these comes up.

1. **What the verb forms mean (the main one; hbo-04-06).** Present the views as views:
   - **Tense:** qatal past, yiqtol future/non-past, with the waw "converting" them. This is the medieval and early-modern "waw conversive" view.
   - **Aspect:** qatal perfective, yiqtol imperfective. This is the 19th-century view (Ewald, Driver), on which gkc1910 §§106–107 builds (opened: §106 "perfect" for completed actions; §107 imperfect).
   - **Discourse function:** wayyiqtol marks the main line of narrative, weqatal the main line of instruction and prediction, other forms background. Associated with text-linguistic approaches (Niccacci, Longacre) **(unverified: names from recall, not opened)**.
   - **Historical:** wayyiqtol continues an old Semitic short past form *yaqtul, distinct from yiqtol *yaqtulu. On this view it is not a "converted" imperfect at all. gkc1910 §49 calls it the imperfect with "pregnant and" (opened); the *yaqtul view is standard in comparative Semitics **(unverified: no open source opened; check wp-bh or a comparative grammar before stating)**.

   No view has won. The guide uses form names (qatal, yiqtol) and neutral glosses (QTL, YQTL, WAYY, WQTL), translates by context, and states that most prose uses are uncontroversial: wayyiqtol = "and then (past)". The dispute is about the system, not about what most sentences mean.
2. **The pronunciation.** Tiberian versus the school pronunciation versus the biblical period; khan2020 versus traditional grammars on vowel length and vocal shewa (section 2). Only reconstruction is possible for the biblical period.
3. **Basic word order.** Verb-subject order dominates in narrative because wayyiqtol must stand first. Whether the underlying basic order is VS or SV is debated: some argue SV, with VS triggered by wayyiqtol and fronting elements (Holmstedt) **(unverified: from recall, not opened)**. Teach "in narrative the verb comes first" as observation, not as the basic order of the language.
4. **What the stems mean.** "Intensive" for the piel is the traditional label (gkc1910 §52f, opened: "to busy oneself eagerly with"). Many modern grammars prefer factitive/resultative (Jenni; wo1990) **(unverified: not consulted)**. Teach what each stem does with particular verbs. Present the labels as rough tendencies (hbo-07-01).
5. **Dating and Late Biblical Hebrew.** That Chronicles, Ezra–Nehemiah, Esther and Qohelet show later features is agreed. Whether linguistic features can date a text is disputed: Hurvitz versus Young, Rezetko and Ehrensvärd **(unverified: names from recall)**. Teach LBH as a set of features found in those books, not as a dating tool.
6. **Genesis 1:1.** Whether bərēʾšît is "in the beginning" (absolute) or "in the beginning of", making 1:1 a temporal clause ("When God began to create"). The pointing (no article, yet with a vowel that could be read as construct) allows both. Say so in the capstone.
7. **Ketiv/qere and the text.** The Masoretic text is one textual tradition among others (Dead Sea Scrolls, the Septuagint's source, the Samaritan Pentateuch). The guide reads MT only and says so in hbo-07-04.
8. **Begadkefat date, emphatic articulation, the value of ś.** All reconstructions (wp-bh). Label them "probable".

## 7. Text corpora for attested examples

- **oshb** (WLC + morphology): the working corpus. Cite as `Genesis 1:1`: English book name, chapter:verse, and the verse range for passages. For the source field, add the edition once per lesson, e.g. `Genesis 1:3 (WLC)`. Translations are always the guide's own.
- **uxlc** (tanach.us): second check on wording for any passage quoted in part 8. UXLC corrects WLC towards the codex. If they differ, follow UXLC and note it.
- **bhsa/SHEBANQ:** clause-level queries, e.g. how often weqatal follows an imperative.
- **Versification:** Hebrew (MT) chapter and verse numbers, which sometimes differ from English Bibles (for example the Psalm headings counted as verse 1, Malachi 3:19–24 = English 4:1–6). Say "Hebrew numbering" once in hbo-00-03.
- **Part 8 passages chosen** (all checked present in WLC via oshb on 2026-11-12; the text is public domain):
  - Ruth 1:1–5: almost all wayyiqtol, names, construct, suffixes; easiest.
  - 1 Samuel 3:1–10: dialogue, background clauses with wə + noun, repetition.
  - Jonah 1:1–6: imperatives, purpose with lə + infinitive, wayyiqtol of weak verbs.
  - Genesis 22:1–8: wayhî, hinnēnî, imperatives, the volitive chain.
  - Deuteronomy 6:4–9, the Shema: weqatal chain, 2ms suffixes, infinitives with suffixes. The extraction in this session shows וְשִׁנַּנְתָּם, וּקְשַׁרְתָּם, וּכְתַבְתָּם: weqatal with object suffix.
  - Psalm 23: poetry, yiqtol in non-past, poetic word order, suffixes. Read after hbo-07-06.
  - Qohelet 1:1–11: Late Biblical Hebrew prose and verse, participles, the relative še-.
  - Genesis 1:1–2:3: capstone.
- **Capstone: Genesis 1:1–2:3.** It is the most famous passage of the Hebrew Bible. It is in the base variety (classical prose), and everything in it is taught by the end of part 7:
  - the wayyiqtol chain (way-yōʾmer, way-hî, way-yarʾ, way-yabdēl);
  - the jussive yəhî "let there be" (oshb: יְהִי tagged Vqj3ms at 1:3; extraction in this session);
  - verbless clauses (kî-ṭôb);
  - numbers with yôm and the ordinals;
  - construct chains;
  - the infinitive and the hiphil (way-yabdēl, tagged Vhw3ms at 1:4);
  - the volitive naʿăśeh "let us make" (1:26). OSHB tags it yiqtol 1PL (Vqi1cp): a verb ending in -â has no separate cohortative form, so the wish is read from context **(general rule unverified; check gkc1910 §75 and §108)**.

  If the lesson runs too long, read 1:1–13, 1:26–31 and 2:1–3 in full and summarise days four to six. Its familiarity in translation helps the reader check himself. Rejected:
  - Psalm 23: poetry, so secondary to the guide's base; kept as reading 6.
  - The Shema: too short for a capstone; kept as reading 5.
  - Ruth 1: famous but less so; kept as reading 1.

## 8. Notes for drafters

- British spelling; second person; short sentences; one idea per paragraph. No "simply", no "just" as filler.
- **The organising idea must recur:** name the root of every new verb and noun (š-m-r), and say which pattern it is in, so the reader learns to see roots. In part 4, show the same root in several stems where one is attested. Check every such form in oshb.
- **Why before how:** most "irregularities" have one of four causes. Name the cause each time:
  - gutturals cannot double and prefer a-vowels;
  - vowels reduce as stress moves away (propretonic reduction);
  - weak root letters (n, y/w, a final h-type) assimilate or drop;
  - old forms survive (*malk- under melek).

  Historical claims rest on gkc1910 or a wiktionary etymology section, never on recall alone.
- **Constructed examples** are allowed. Prefer attested ones: the corpus is large and searchable. Use only vocabulary already introduced in a `:::vocab` block, and grammar already introduced. The exception is the flagged wayyiqtol "learn as a word" forms (section 5).
- **Vocabulary by frequency:** choose words by OSHB lemma counts (each `<w lemma="…">` is a Strong's number). The commonest content words in narrative are the verbs ʾmr, hyh, ʿśh, bwʾ, ntn, hlk, rʾh, šmʿ, dbr, yšb, yṣʾ, šwb, lqḥ, ydʿ, qrʾ, and the nouns ʾĕlōhîm, melek, ʾereṣ, yôm, ʾîš, bayit, ʿam, bēn, pānîm, yād, dābār, ʿîr. **(List from recall; drafters confirm counts in oshb before relying on it.)**
- **Meanings:** check in bdb (archive.org scan or Sefaria). Wiktionary's Hebrew meanings are often Modern Hebrew: do not use them alone for biblical meanings.
- **Examples in tables:** pointed Hebrew in the first column, translit in the second, so the table reads left to right in English.
- **Connections** for this reader:
  - **Arabic** is the strongest anchor: roots and patterns (k-t-b, š-m-r, cf. Arabic ḥ-f-ẓ); the construct state = *iḍāfa*; the article al- / ha- with assimilation (aš-šams; ha-ššāmayim); the dual; verbless sentences; the prefix and suffix conjugations (yaktubu / kataba); the pharyngeals ḥ ʿ and the emphatics. Cognates: *šālôm* / *salām*, *bayit* / *bayt*, *yôm* / *yawm*, *ʾereṣ* / *ʾarḍ*.
  - **Modern Hebrew** (`heb`): same script and pointing, different pronunciation and verbal system (qatal = past, yiqtol = future, no wayyiqtol).
  - **Spanish and French:** biblical names and loans that came through Latin and Greek (Spanish *aleluya*, *amén*, *sábado*; French *sabbat*, *chérubin*).
  - **Japanese and Korean:** only typology. Korean hangul and Hebrew both write syllables built from consonant-plus-vowel marks; both scripts were reformed by scholars. Keep it short and accurate.
  - **Other guides:** Ge'ez, Classical Syriac and Akkadian for shared Semitic structure.
- **Do not** present Christian or Jewish interpretive traditions as grammar. Where a famous translation reflects a grammatical choice (Genesis 1:1; Isaiah 7:14 ʿalmâ), state the grammar and the range of readings neutrally.
