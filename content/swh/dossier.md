# Swahili dossier

Built 2026-11-12. Source ids refer to `sources.json`. Everything a drafting or verifying agent needs to stay consistent is here; where this file and a named source disagree, the source wins and this file gets corrected. Anything marked **(unverified)** was written from recall or from a source not opened in this session, and must be checked before it goes into a lesson as `verified`.

The open sources actually opened in this session: polome1967 (ERIC full text), steere1894 and steere1870 (archive.org OCR), wiktionary (entries via `tools/wikt.py`, three appendices, the proverb category), wpgrammar and wplang (pointers), kucourse (lesson index and Lesson 9), wals (all 143 datapoints, from the CLDF data), glottolog, udhr, swwiki, the anthem pages. The two standard reference grammars, ashton1944 and mohammed2001, are in copyright and were **not** opened; nor were the TUKI dictionaries. This matters: the dossier's paradigms rest on wiktionary, wpgrammar (whose own sources are Mpiranya, Hinnebusch and Mirza, Wilson, Perrott) and polome1967. When a later session can open Ashton or Mohammed, re-check section 5 against them.

## 1. Variety taught

- **Base:** Standard Swahili (*Kiswahili sanifu*), the written and educated spoken standard of Tanzania and Kenya. It is based on the Zanzibar town dialect, Kiunguja: polome1967 (ch. 1, dialect 13, opened) says Unguja "has now been widely accepted as the basis of 'standard' Swahili", spread by the Inter-Territorial Language Committee founded in 1930. Glottolog lists Unguja as a dialect of Swahili (swah1253).
- **Why this variety:** it is what schools, newspapers, radio, the TUKI and BAKITA dictionaries and every grammar listed describe, and what a learner meets in print in both countries.
- **Spoken versus written.** Teach the standard forms; give the common spoken form in the example note, labelled `colloquial`. The main ones (all in swh-07-11 unless said otherwise):
  - ni- before -na- is dropped in speech: *(ni)nasoma* → *nasoma* 'I am reading' (wpgrammar; wiktionary verb appendix: "The 1s nina- can be optionally collapsed to na-"). This makes the colloquial 1SG look like the -a- tense *nasoma* (see section 6 point 5).
  - Short pronouns *mi*, *we* for *mimi*, *wewe* (wpgrammar).
  - *niko* used for every kind of 'I am (somewhere)', where the strict standard distinguishes *nipo*, *niko*, *nimo* (wpgrammar 'Location').
  - The habitual suffix -ga/-nga (*nachezaga* 'I dance from time to time'), entering from inland Bantu languages, informal and regional (wpgrammar).
  - Regular imperatives *kuja!*, *enda!* for the irregular *njoo*, *nenda*, heard "particularly in Kenya" and possibly less polite (wpgrammar).
  - Negative future -to- for -ta- (*hatokuja* for *hatakuja*) (wpgrammar).
  - *a-me-* replaced by *ka-* (*kapotea* 'he's got lost') for some speakers (wpgrammar).
- **Kenyan and coastal forms.** Label `Kenya` or `coastal` only where a learner will meet them often: *jengine*, *lengine*, *zingine* for standard *jingine*, *nyingine* (wpgrammar, after Gromova 2008; called non-standard there); Mombasa *pahali* for *mahali*. Kimvita (Mombasa), Kiamu (Lamu) and the old literary language are named in swh-07-13 and in the readings. **Sheng** (Nairobi youth mixed language) and **Congo Swahili** are described in one paragraph each in swh-07-13; no forms from them are taught.
- **Older language** appears only in the part 8 Steere tale (Zanzibar, 1860s) and in swh-07-13 (a stanza of the *Utendi wa Tambuka*, Kiamu, 1728, shown, not taught).

## 2. Phoneme inventory

Sources: polome1967 §2.1 (opened; OCR garbles some symbols, read with care), wplang 'Phonology' (after contini1997 and Polomé), wiktionary IPA lines (checked for the words cited), wals 1A–19A.

WALS (opened): consonant inventory "moderately large", vowel quality "average (5–6)", no tones, fixed **penultimate** stress, syllable structure "simple", no front rounded vowels, no uvulars, no glottalised consonants, "th" sounds present, velar nasal can begin a word.

### Vowels

Five vowels, written a e i o u, IPA /ɑ ɛ i ɔ u/ (wplang; wiktionary transcriptions use [ɑ ɛ i ɔ u], e.g. *pesa* /ˈpɛ.sɑ/, *ng'ombe* /ˈŋɔ.ᵐbɛ/).

- Vowels are **not reduced** in unstressed syllables (contini1997 via wplang). polome1967 §2.1.2 instead describes closer and laxer variants ([e ɪ o ʊ]) in unstressed syllables. Teach full, clear vowels everywhere (Spanish or Japanese vowels are the model), and mention Polomé's detail only as fine phonetics (section 6 point 1).
- **Two written vowels are two syllables**, including identical ones: *kaa* [ˈkɑː] 'sit' is two syllables for stress purposes (*ku-ka-a*), and long vowels are not phonemic (wplang: they come from a lost l, *kondoo* < *kondolo*). Diphthongs do not exist: *mai* is not a word, but *yai* 'egg' is *ya-i*.

### Consonants

The standard inventory (polome1967 §2.1.1; wplang chart):

| | Labial | Dental | Alveolar | Postalveolar/palatal | Velar | Glottal |
|---|---|---|---|---|---|---|
| Nasal | m | | n | ny [ɲ] | ng' [ŋ] | |
| Prenasalised stop | mb [ᵐb] | | nd [ⁿd] | nj [ⁿdʒ] | ng [ᵑɡ] | |
| Voiced stop | b [ɓ~b] | | d [ɗ~d] | j [ʄ~dʒ] | g [ɠ~ɡ] | |
| Voiceless stop | p | | t | ch [tʃ] | k | |
| Prenasalised fricative | mv [ᶬv] | | nz [ⁿz] | | | |
| Voiced fricative | v | dh [ð] | z | | gh [ɣ] | |
| Voiceless fricative | f | th [θ] | s | sh [ʃ] | (kh [x]) | h |
| Approximant | w | | l | y [j] | | |
| Rhotic | | | r [ɾ~r] | | | |

Points to teach:
- **b, d, j, g are implosive** for many coast speakers (polome1967 §2.1.1 lists "implosive voiced bilabial stop" etc. beside plain voiced variants; wiktionary IPA writes /ɓ ɗ ʄ ɠ/: *baba* /ˈɓɑ.ɓɑ/, *gari* /ˈɠɑ.ɾi/, *jina* /ˈʄi.nɑ/, *zawadi* /zɑˈwɑ.ɗi/). Plain [b d dʒ ɡ] are normal for many second-language speakers. Teach plain voiced stops and mention the implosive as the coast pronunciation.
- **Aspiration** (p t ch k with a puff) once distinguished words, mostly where a class 9/10 nasal was lost: *paa* [p] 'roof' vs [pʰ] 'gazelle'; *kaa* 'sit' vs [kʰ] 'crab' (polome1967 §2.1.1.1, opened). Polomé reports that most educated speakers in Dar es Salaam no longer contrast them. It is never written. Mention it; do not teach it as a contrast.
- **ng' vs ng**: *ng'* is [ŋ] alone (*ng'ombe* 'cow'), *ng* is [ᵑɡ] (*ngoma* 'drum' /ˈᵑɡɔ.mɑ/). polome1967 §2.1.1.6 gives the minimal set *ng'oa* 'root up', *ngoa* 'jealousy', *noa* 'whet', *nyoa* 'shave' (opened; use it in swh-01-03).
- **Syllabic nasals.** m before a consonant in classes 1, 3 and 18 is a syllable of its own: *mtu* /ˈm̩.tu/ 'person' takes the stress on the m (wiktionary IPA; wpgrammar notes on class 1); *mvulana* [m̩.vu.ˈlɑ.nɑ]. n is syllabic in short class 9 words: *nchi* /ˈn̩.tʃi/ 'country' (wiktionary). Before a vowel, m- is mw- and not syllabic: *mwalimu* /mʷɑˈli.mu/ (wiktionary). polome1967 §2.1.1.7 shows that *mbovu* can be [m̩b] or [mb] depending on morphology.
- **r and l** are separate phonemes in the standard; r is usually a tap [ɾ] (wplang). Many inland speakers merge or swap them (unverified frequency; say "you will hear").
- **Arabic consonants dh [ð], th [θ], gh [ɣ], kh [x]** occur in loans (*dhahabu* 'gold', *thelathini* /θɛ.lɑˈθi.ni/ 'thirty', *ghali* 'expensive'; wiktionary). Speakers outside the coast often say z, s, g, h for them (wplang: "many speakers outside of ethnic Swahili areas have trouble differentiating"). kh is marginal: [x] is in free variation with h for most (wplang; wiktionary *habari* /hɑˈɓɑ.ɾi/, /xɑˈɓɑ.ɾi/).

### Syllables and stress

- Syllables are open: (N)(C)(w/y)V, with a syllabic nasal as the only closed-looking unit (wals 12A "simple"; polome1967 §2.1.4).
- **Stress falls on the second-to-last syllable** (penult), counting a syllabic m or n as a syllable and each written vowel as a syllable (polome1967 §2.1.5.1; wals 14A). It moves when the word grows: *kitábu* 'book', *kitabúni* 'in the book' (the stress moves to the new penult; *kitabuni* is a constructed illustration of polome1967's rule).
- **Exceptions:** some Arabic loans keep stress on the antepenult: *lázima* 'necessity', *nusura* 'almost' (polome1967 §2.1.5.1, both opened in the scan); Polomé treats this as a stylistic Arabic pattern and cites the contrast *barabára* 'highway' vs *barábara* 'exactly'.
- **Short verbs keep ku- to give the stress a home** (swh-04-04): tense markers -na-, -li-, -me-, -ta-, -nge- and the relative markers cannot be stressed, so *ni-na-ku-la* 'I am eating' keeps the ku of the infinitive; *si-li* 'I am not eating' does not need it (wiktionary verb appendix: the stressable infixes are -ku-, -ki-, -ka-, -si-, hu-, -a-, subject and object prefixes, and for most speakers -ja-; wpgrammar same list).
- Clitics: polome1967 §2.1.5.1 says the copula *ni* and the -a of association are unstressed and attach to the next word in pronunciation (*maneno ya Salum*). Spelling writes them apart.
- Do not mark stress in `orig` or `morphemes`. Mark it with an acute only in part 1 and in vocabulary notes for antepenult-stressed loans, and say the acute is the guide's.

## 3. Script and transliteration

### Script

- **Latin alphabet** as introduced by missionaries and fixed in the standard (wplang 'Orthography'). Letters and digraphs used: **a b ch d dh e f g gh h i j k kh l m n ng' ny o p r s sh t th u v w y z**. **c** occurs only in *ch* (and unassimilated English names); **q** and **x** are not used (wplang). Digraphs are single sounds; *ng'* uses an apostrophe (ASCII U+0027 in this guide, the usual Swahili practice; some printed texts use U+2019, normalise to U+0027 in `orig` and `morphemes`).
- **Word division:** the whole verb (subject to final vowel, with object and relative markers) is one word: *nilipokupikia*. The copula *ni*, the -a forms (*cha*, *ya*) and *na* are separate words. Older texts write -o-ote words as two (*ye yote*, *wo wote*, as in udhr); modern practice writes one (*yeyote*) (wpgrammar 'Other determiners'). Keep attested texts as printed and note it.
- **Capitals:** proper names, sentence starts; language and nationality words take capitals (*Kiswahili*, *Mswahili*) (seen throughout swwiki).
- **Arabic script (Ajami):** Swahili was written in Arabic script from the earliest documents (Kilwa letters 1711, wplang; *Utendi wa Tambuka* 1728). Explained in swh-07-13; not taught.
- Unicode: plain ASCII letters plus the apostrophe. Files NFC.

### Transliteration

None. `translit_optional` is true and the `translit` field is omitted from every example. IPA appears in part 1 and in vocab notes for exceptional words only.

### Letter-to-sound table

Sources: wiktionary IPA (words marked w), polome1967 §2.1.1 and §3.3, wplang.

| Letter | IPA | Plain description | Example |
|---|---|---|---|
| a | [ɑ] | open, as in Spanish *casa* | *baba* 'father' (w) |
| b | [ɓ] or [b] | b, implosive at the coast | *baba* /ˈɓɑ.ɓɑ/ (w) |
| ch | [tʃ] | ch of *church* | *chai* 'tea' (w, no IPA line) |
| d | [ɗ] or [d] | d, implosive at the coast | *dada* 'sister' (w, no IPA line) |
| dh | [ð] | th of *this*; Arabic loans | *dhahabu* 'gold' (w, no IPA line) |
| e | [ɛ] | as in Spanish *mesa* | *pesa* /ˈpɛ.sɑ/ (w) |
| f | [f] | | *fundi* 'craftsman' (w) |
| g | [ɠ] or [ɡ] | hard g, implosive at the coast | *gari* /ˈɠɑ.ɾi/ (w) |
| gh | [ɣ] | a g with friction, like Spanish *g* in *lago*; Arabic loans | *ghali* 'expensive' (w) |
| h | [h] | always pronounced | *hapa* 'here' (w) |
| i | [i] | as in Spanish *si* | *jina* /ˈʄi.nɑ/ (w) |
| j | [ʄ] or [dʒ] | j of *jam*, implosive at the coast | *jina* (w) |
| k | [k] | | *kaka* 'brother' (w) |
| kh | [x] | ch of Scottish *loch*; rare, often said h | *habari* /xɑˈɓɑ.ɾi/ as a variant (w) |
| l | [l] | | *lala* 'sleep' (w) |
| m | [m], syllabic [m̩] before a consonant | | *mama* /ˈmɑ.mɑ/; *mtu* /ˈm̩.tu/ (w) |
| mb | [ᵐb] | m and b as one onset | *mbuzi* /ˈᵐbu.zi/ 'goat' (w) |
| mv | [ᶬv] | | *mvua* 'rain' (w, no IPA line) |
| n | [n], syllabic [n̩] in short words | | *nane* 'eight'; *nchi* /ˈn̩.tʃi/ (w) |
| nd | [ⁿd] | | *ndege* /ˈⁿdɛ.ɠɛ/ 'bird' (w) |
| ng | [ᵑɡ] | ng of *finger* | *ngoma* /ˈᵑɡɔ.mɑ/ 'drum' (w) |
| ng' | [ŋ] | ng of *singer*, also at the start of a word | *ng'ombe* /ˈŋɔ.ᵐbɛ/ 'cow' (w) |
| nj | [ⁿdʒ] | | *njia* /ˈⁿdʒi.ɑ/ 'path' (w) |
| ny | [ɲ] | Spanish ñ | *nyumba* /ˈɲu.ᵐbɑ/ 'house' (w) |
| nz | [ⁿz] | | *nzuri* 'good' (class 9/10 form) (w) |
| o | [ɔ] | as in Spanish *no* | *ngoma* (w) |
| p | [p] | | *pesa* (w) |
| r | [ɾ] | tap, as in Spanish *pero* | *rafiki* /ɾɑˈfi.ki/ (w) |
| s | [s] | always voiceless | *samaki* /sɑˈmɑ.ki/ 'fish' (w) |
| sh | [ʃ] | sh of *ship* | *shule* /ˈʃu.lɛ/ 'school' (w) |
| t | [t] | | *tatu* /ˈtɑ.tu/ 'three' (w) |
| th | [θ] | th of *thin*; Arabic loans | *thelathini* /θɛ.lɑˈθi.ni/ (w) |
| u | [u] | as in Spanish *tu* | *tatu* (w) |
| v | [v] | | *viatu* /viˈɑ.tu/ 'shoes' (w) |
| w | [w] | | *watu* /ˈwɑ.tu/ 'people' (w) |
| y | [j] | y of *yes* | *yai* 'egg' (w) |
| z | [z] | | *zawadi* /zɑˈwɑ.ɗi/ 'gift' (w) |

## 4. Grammatical and glossing conventions

### Terms

- **Noun class** (Swahili *ngeli*): a set of nouns sharing a prefix and an agreement pattern. Define in swh-03-01. Say "class 7", never "gender".
- **Agreement prefix** (Bantuist "concord"): the prefix another word takes to agree with a noun. Use "agreement prefix" in titles; introduce "concord" once as the usual technical word.
- **Subject prefix** (SM) and **object prefix** (OM), **tense marker**, **relative marker**, **root**, **extension**, **final vowel**: the slot names of swh-04-01. Learner books call the non-initial prefixes "infixes"; wpgrammar notes this is not the linguist's sense. Use "marker" or "prefix" and mention "infix" once.
- **The o of reference**: the -o forms (-ye, -o, -cho, -lo, -yo, -vyo, -zo, -ko, -po, -mo) that make relatives, *nacho*, *ndicho*, *hicho* (wiktionary verb appendix uses this name). Define in swh-06-01.
- **Tense names** (match wpgrammar and wiktionary so verifiers can compare): -na- "present"; -li- "past"; -ta- "future"; -me- "perfect"; -ja- "not yet" (negative perfect); hu- "habitual"; -a- "gnomic" (wiktionary) / "indefinite present" (wpgrammar); -ki- "situational" (wpgrammar; wiktionary "if/when"); -ka- "consecutive" or "narrative"; -nge- "present conditional / irrealis"; -ngali- "past conditional"; -sha- "already" (wpgrammar "anterior"). -sipo- "if not".
- **Extensions**: applicative (learner books: "prepositional"), causative, passive, stative (wpgrammar argues "mediopassive" is more accurate; section 6), reciprocal, reversive (wiktionary "conversive").

### Class numbering and names

- Use the **Bantu numbers** 1 to 18 (no 12 or 13 in the standard) everywhere, and give the **pair name** once per class lesson: m-wa (1/2), m-mi (3/4), ji-ma (5/6), ki-vi (7/8), n (9/10), u (11/10, 14), ku (15), pa, ku, mu (16, 17, 18) (wpgrammar table; wiktionary appendix names).
- Say in swh-03-01 that **East African schools name classes by agreement**, not by noun prefix: A-WA, KI-VI, U-I, LI-YA, I-ZI, U-ZI, U-U, KU-KU, PA, KU, MU (kucourse Lesson 9, opened). Learners will meet both.
- **Wiktionary labels classes with Roman numerals in its own way**: headwords say "class VII (plural ... class VIII)" (fine), but it gives u- abstracts as "class XI" (e.g. *uhuru*, checked), calls the plural of u- nouns "class XII" in its appendix, and labels the ku infinitive and locative together "XV/XVII". When checking a class in wiktionary, translate: its XI covers our 11 and 14; its XII is our 10.

### Segmentation and glossing

Segment every prefix and suffix with a hyphen. `morphemes` shows surface forms as spelt. Abbreviations and their unlocking lessons are in `glossary.json`.

**Classes, persons and the linter.** `tools/lib.ts` `glossAbbreviations()` splits a gloss on `- = . : ; ( ) / < > ~ , [ ]` and whitespace, then reads each piece with `/^([123])?([A-Z][A-Z0-9]*)?$/`: a leading 1, 2 or 3 is taken as **person**, the rest as an abbreviation to look up. So:
- **Class numbers are always written C + number**: `C1` ... `C18`. Each is its own glossary entry (16 entries) tagged to the lesson that teaches the class. A piece like `C7` is checked as the abbreviation "C7"; `C16.REL` is checked as "C16" and "REL".
- **Never write a bare class number** (`7`, `1`): a bare 1, 2 or 3 is read as a person, and 4 to 18 are silently ignored by the linter (the regex fails, so nothing is checked). Never write `7SM` (also unmatched, silently unchecked) or `SM7` (would need its own entry).
- **Persons** are `1SG 2SG 1PL 2PL` (+ `3SG 3PL` for the independent pronouns *yeye*, *wao* and the short forms -ye, -o after *na* when they mean a person). The pieces 1SG etc. pass the linter as "1" + "SG".
- **Third-person subject and object prefixes are glossed by class, not by person**: *a-* is `C1.SM`, *wa-* is `C2.SM`, *-m-* is `C1.OM`. Swahili has no separate third person on the verb: the class 1 and 2 prefixes are the third person. This keeps one system for people and things, and the glossary's plain text for C1 and C2 says "he or she", "they".
- **Function** follows the class or person after a full stop: `1SG.SM`, `C7.SM`, `2SG.OM`, `C7.OM`, `C7.REL`.

**Nouns.**
- A visible class prefix is segmented and glossed by class: `ki-tabu` `C7-book`, `vi-tabu` `C8-book`, `m-tu` `C1-person`, `wa-tu` `C2-person`, `mw-alimu` `C1-teacher` (the loan reanalysed as having mw-; wplang), `m-ti` `C3-tree`, `mi-ti` `C4-tree`, `ji-cho` `C5-eye`, `ma-cho` `C6-eye`, `j-ambo` `C5-matter`, `m-ambo` `C6-matter`, `u-kuta` `C11-wall`, `u-toto` `C14-child` ('childhood').
- A noun with **no visible prefix** is glossed whole with the class after a full stop: `gari` `car.C5`, `magari` → segment `ma-gari` `C6-car`; `nyumba` `house.C9` (plural `house.C10`); `meza` `table.C9`; `kuta` `wall.C10`.
- **Class 9/10 nasal prefixes on nouns are not segmented** (*nyumba*, *ndege*, *nchi*, *mbuzi*): synchronically the nasal is part of the stem for a learner. On **adjectives and numbers** the nasal is segmented when it is visible: `n-zuri` `C9-good`, `m-bili` `C10-two`, `ny-ingi` `C10-many`, `nj-ema` `C9-good`; zero forms are glossed whole: `kubwa` `big.C9`.
- **Prefix fused with the stem** (*meno* 'teeth' < ma+ino; *wezi* 'thieves'; *chumba* 'room'): gloss whole, `tooth.C6`, `thief.C2`, `room.C7` (wpgrammar notes on classes 2, 6, 7).
- **Animate nouns outside classes 1/2** keep their own class on the noun and show 1/2 on what agrees: `rafiki` `friend.C9` ... `a-na-ishi` `C1.SM-PRS-live` (wpgrammar 'Concord'). Say so in the note the first few times.
- **Locative -ni**: `nyumba-ni` `house.C9-LOC`, `ki-tabu-ni` `C7-book-LOC`.
- Proper names keep capitals and are not segmented (*Mswahili* in an example may be segmented `M-swahili` `C1-Swahili` once taught). Never write an all-capitals name in a gloss (the linter would treat it as an abbreviation).

**Verbs** follow the slots of swh-04-01: SM - (NEG) - TAM - REL - OM - root - EXT - FV.
- Final vowel: **segmented and glossed `FV`** on native verbs: `ni-na-som-a` `1SG.SM-PRS-read-FV`. Contrasting final vowels get their own gloss: subjunctive `-e` `SBJV`, negative present `-i` `NEG`. Loan verbs (no final -a) are not given an FV: `ni-na-jibu` `1SG.SM-PRS-answer`, `si-jibu` `NEG.1SG.SM-answer` (wiktionary -jibu table, checked: negative *sijibu*, subjunctive *nijibu*).
- Roots of vowel-final stems: *-nunua* → `nunu-a`; *-kaa* → `ka-a`; *-ona* → `on-a`. The applicative and passive l that reappears goes with the extension: `nunu-li-a` `buy-APPL-FV`, `nunu-liw-a` `buy-PASS-FV` (wpgrammar 'Applicative', 'Passive').
- **Short verbs** keep `KU`: `ni-na-ku-l-a` `1SG.SM-PRS-KU-eat-FV`; *-nywa* has the one-piece root `nyw`: `ni-li-ku-nyw-a` `1SG.SM-PST-KU-drink-FV`. Infinitive `ku-l-a` `INF-eat-FV`. Imperative *kula!* `ku-l-a` `KU-eat-FV`. *kwenda* `kw-end-a` `INF-go-FV`; *anakwenda* `a-na-kw-end-a` `C1.SM-PRS-KU-go-FV` (wpgrammar; wiktionary). Negative present, subjunctive, -ki-, -ka-, hu- take no KU: `si-l-i` `NEG.1SG.SM-eat-NEG`, `ni-l-e` `1SG.SM-eat-SBJV` (wiktionary -la tables, checked: *sili*, *nile*).
- **Negative subject prefixes**: ha- is segmented and glossed `NEG` before a regular subject prefix: `ha-tu-som-i` `NEG-1PL.SM-read-NEG`, `ha-ki-som-i` `NEG-C7.SM-read-NEG`, `ha-m-som-i` `NEG-2PL.SM-read-NEG`, `ha-wa-som-i` `NEG-C2.SM-read-NEG`. The fused forms are one piece: *si-* `NEG.1SG.SM`, *hu-* `NEG.2SG.SM`, *ha-* (class 1) `NEG.C1.SM` (wiktionary verb appendix table, checked).
- **TAM markers**: -na- `PRS`; -li- `PST`; -ku- (after a negative prefix) `PST.NEG`; -ta- `FUT` (also in the negative); -me- `PRF`; -ja- `PRF.NEG`; -taka- (future in relatives) `FUT` as one piece; -ki- `SIT`; -ka- `CONS` (also with the subjunctive: `u-ka-mw-ambi-e` `2SG.SM-CONS-C1.OM-tell-SBJV`); hu- `HAB` (no subject prefix: `hu-l-a` `HAB-eat-FV`); -sha- `ANT` (*-mesha-* is `PRF-ANT`); -nge- `COND`; -ngali- and -ngeli- `CTRF`; -a- `GNO`.
- **The -a- tense** fuses with the subject prefix: `n-a-som-a` `1SG.SM-GNO-read-FV`, `tw-a-som-a` `1PL.SM-GNO-read-FV`; class 1 *asoma* has one a: `a-som-a` `C1.SM.GNO-read-FV` (wiktionary -soma 'Gnomic' table, checked: *nasoma, twasoma, wasoma, mwasoma, asoma, wasoma*; classes *wasoma, yasoma, lasoma, chasoma, vyasoma, zasoma*).
- **Negative -si-** (subjunctive, relative, conditional, -sipo-) is `NEG` after a positive subject prefix: `u-si-som-e` `2SG.SM-NEG-read-SBJV`; `u-si-po-tak-a` `2SG.SM-NEG-C16.REL-want-FV` (wpgrammar). Negative infinitive `ku-to-som-a` `INF-NEG-read-FV`.
- **Object prefixes**: `ni-na-ku-pend-a` `1SG.SM-PRS-2SG.OM-love-FV`; class 1 -m-/-mw-: `a-li-mw-on-a` `C1.SM-PST-C1.OM-see-FV`; reflexive -ji- `REFL`. 2PL object: -wa- plus suffix -eni, glossed `2PL.OM` and `PL`: `ni-na-wa-on-eni` `1SG.SM-PRS-2PL.OM-see-PL` (wpgrammar). Do not segment the -e- of -eni.
- **Imperatives**: the bare singular is not glossed for mood: `som-a` `read-FV`. Plural `som-eni` `read-IMP.PL`. With an object the singular ends in -e and is glossed as subjunctive: `ni-saidi-e` `1SG.OM-help-SBJV`; plural `ni-saidi-eni` `1SG.OM-help-IMP.PL` (wpgrammar imperative tables). Irregular *njoo* `come.IMP`, *njoo-ni* `come.IMP-PL`, *nenda* `go.IMP`, *nende-ni* `go.IMP-PL`, *lete* `bring.IMP` (wpgrammar).
- **Relatives**: the relative marker is `C1.REL`, `C7.REL`, etc.: `a-li-ye-ku-j-a` `C1.SM-PST-C1.REL-KU-come-FV`; object relative with resumptive OM `ni-li-cho-ki-som-a` `1SG.SM-PST-C7.REL-C7.OM-read-FV`; general relative `a-sem-a-ye` `C1.SM-say-FV-C1.REL`; negative relative `a-si-ye-ju-a` `C1.SM-NEG-C1.REL-know-FV`; *amba-ye* `which-C1.REL`; time/place `a-li-po-fik-a` `C1.SM-PST-C16.REL-arrive-FV`; manner -vyo- `C8.REL` (wpgrammar labels -po- CL16.REL; class 8 -vyo- for manner, wiktionary verb appendix).
- **Copula forms**: *ni* `COP`, *si* `COP.NEG`; *ndi-ye* `FOC-C1`, *si-ye* `FOC.NEG-C1`; locative copula `ni-po` `1SG.SM-C16`, `yu-ko` `C1.SM-C17`, `ha-yu-ko` `NEG-C1.SM-C17`; 'have' `ni-na` `1SG.SM-with`, `si-na` `NEG.1SG.SM-with`, `ku-na` `C17.SM-with` 'there is', `ha-ku-na` `NEG-C17.SM-with`; with a pronoun object `ni-na-cho` `1SG.SM-with-C7` 'I have it'; relative copula `a-li-ye` `C1.SM-be-C1.REL` (the -li- here is a copular root, glossed `be`, not PST: wpgrammar 'Relative forms' of 'to be'); continuative `ni-ngali` `1SG.SM-still`.
- **Extensions**: `-i-/-e-/-li-/-le-` APPL, `-w-/-iw-/-ew-/-liw-/-lew-` PASS, `-ish-/-esh-/-iz-/-ez-` CAUS, `-ik-/-ek-/-lik-/-lek-` STAT, `-an-` RECP, `-u-/-o-` REV. Example: `a-li-ni-pik-i-a` `C1.SM-PST-1SG.OM-cook-APPL-FV`; `ki-li-vunj-ik-a` `C7.SM-PST-break-STAT-FV`. Sound-change causatives and other lexicalised derived verbs are glossed whole once they are vocabulary (`amsh-a` `wake.CAUS-FV` in swh-07-07; `fung-u-a` `shut-REV-FV` in swh-07-10, but `fungu-a` `open-FV` outside the extension lessons). Keep the decision consistent within a lesson.

**Modifiers and small words.**
- Adjectives: `ki-kubwa` `C7-big`, `wa-zuri` `C2-good`, `m-pya` `C9-new` (wiktionary -pya: class 9/10 *mpya*, class 5 *jipya*, checked).
- Possessives: class prefix + lexical stem: `ch-angu` `C7-my`, `w-ako` `C1-your`, `y-ake` `C9-his.her` (or `C9-its` when the owner is a thing), `z-etu` `C10-our`, `vy-enu` `C8-your.PL`, `w-ao` `C2-their` (wiktionary -angu table, checked; inanimate 'their' is -ake).
- The -a of association: `ch-a` `C7-of`, `w-a` `C1-of`, `y-a` `C9-of`; *kwa* as a free preposition `by`, `with` or `for` by meaning.
- Demonstratives glossed whole: `huyu` `this.C1`, `yule` `that.C1`, `huyo` `that.C1.ANA`; `hiki`, `kile`, `hicho` likewise; place classes `hapa` `here.C16`, `pale` `there.C16`, `hapo` `there.C16.ANA`, `huku` `here.C17`, `kule` `there.C17`, `huko` `there.C17.ANA`, `humu` `in.here.C18`, `mle` `in.there.C18`, `humo` `in.there.C18.ANA`.
- -ote, -enye, -enyewe, numbers: `w-ote` `C2-all`, `s-ote` `1PL-all`, `ch-enye` `C7-having`, `mw-enyewe` `C1-self`, `wa-wili` `C2-two`; invariable numbers lower case `sita` `six`.
- *na*: `with` or `and` by meaning; with a short pronoun `na-mi` `with-1SG`, `na-ye` `with-3SG`, `na-cho` `with-C7` (wpgrammar 'Comitative na').
- *je* `Q`; *ndiyo* `yes`; *hapana*, *la* `no`; *si* in *si lazima* `COP.NEG`.
- Independent pronouns `mimi` `1SG`, `wewe` `2SG`, `yeye` `3SG`, `sisi` `1PL`, `ninyi` / `nyinyi` `2PL`, `wao` `3PL`. Never gloss "I" as a bare capital.

### Citation forms

- Nouns: singular, with the class pair and the plural: *kitabu* (7/8, pl. *vitabu*); *gari* (5/6, pl. *magari*); *nyumba* (9/10, pl. *nyumba*); *ukuta* (11/10, pl. *kuta*); *uhuru* (14, no pl.); animate exceptions add "agreement 1/2": *rafiki* (9/10, agreement 1/2; pl. also *marafiki*). This is wiktionary's headword line translated into Bantu numbers.
- Verbs: stem with a hyphen and the infinitive: *-soma* (kusoma); *-la* (kula); *-enda* (kwenda); loan verbs *-jibu* (kujibu). `:::vocab` notes give the infinitive, and from part 7 on the main derived forms (*-somea*, *-somesha*, *-somwa*).
- Adjectives: stem with a hyphen, *-kubwa*; the class 9/10 form in the notes where it is irregular (*-ema*: *njema*; *-pya*: *mpya*; *-ingi*: *nyingi*; all checked in wiktionary).

## 5. Major paradigms and where to check them

Check forms with `python3 tools/wikt.py <stem> Swahili` (verbs and adjective stems without the hyphen: `soma`, `kubwa`): it prints concord tables for adjectives and pronominal stems and conjugation tables (present, negative present, subjunctive, gnomic, object prefixes, relatives) for verbs. Paradigms not in wiktionary tables: check wpgrammar's tables (and its sources), then polome1967 §2.4, steere1894 for older forms.

### Agreement by class (wpgrammar 'Concord', 'Determiners', 'Adjectives', 'Genitive -a' tables; wplang concord table; wiktionary tables as marked)

| Class | Noun prefix, example | Adjective (-zuri) | Subject | Object | -a 'of' | Possessive -angu | This / that / that one | Relative |
|---|---|---|---|---|---|---|---|---|
| 1 | m(w)-: mtu, mwalimu | mzuri | a- (yu- with -po/-ko/-mo) | -m(w)- | wa | wangu | huyu, yule, huyo | -ye |
| 2 | wa-: watu | wazuri | wa- | -wa- | wa | wangu | hawa, wale, hao | -o |
| 3 | m(w)-: mti, mwaka | mzuri | u- | -u- | wa | wangu | huu, ule, huo | -o |
| 4 | mi-: miti | mizuri | i- | -i- | ya | yangu | hii, ile, hiyo | -yo |
| 5 | ji-/zero: jicho, gari | zuri | li- | -li- | la | langu | hili, lile, hilo | -lo |
| 6 | ma-: macho, maji | mazuri | ya- | -ya- | ya | yangu | haya, yale, hayo | -yo |
| 7 | ki-/ch-: kitabu, chumba | kizuri | ki- | -ki- | cha | changu | hiki, kile, hicho | -cho |
| 8 | vi-/vy-: vitabu | vizuri | vi- | -vi- | vya | vyangu | hivi, vile, hivyo | -vyo |
| 9 | N-/zero: nyumba, meza | nzuri | i- | -i- | ya | yangu | hii, ile, hiyo | -yo |
| 10 | N-/zero: nyumba | nzuri | zi- | -zi- | za | zangu | hizi, zile, hizo | -zo |
| 11 | u-: ukuta | mzuri | u- | -u- | wa | wangu | huu, ule, huo | -o |
| 14 | u-: uhuru | mzuri | u- | -u- | wa | wangu | huu, ule, huo | -o |
| 15 | ku-: kusoma | kuzuri | ku- | -ku- | kwa | kwangu | huku, kule, huko | -ko |
| 16 | -ni, mahali | pazuri | pa- | -pa- | pa | pangu | hapa, pale, hapo | -po |
| 17 | -ni | kuzuri | ku- | -ku- | kwa | kwangu | huku, kule, huko | -ko |
| 18 | -ni | mzuri | m(u)- | -mu- | mwa | mwangu | humu, mle, humo | -mo |

Checked in wiktionary this session: the adjective rows of -zuri, -kubwa, -ema, -ingi, -pya, -ekundu; -angu; -enye; -ote; the object and relative rows of -soma; the noun classes of mtu, mti, mwaka, moyo, jicho, jino (pl. *meno*), gari, jina, kitabu, kiti, chumba, nyumba, meza, nchi, ukuta (pl. *kuta*), ufunguo (pl. *funguo*), ulimi (pl. *ndimi*), uso (pl. *nyuso*), uhuru, mahali (16), and the animate 9/10 nouns baba, mama, rafiki, ng'ombe, ndege. Class 15 *kuzuri* and the class 15 rows are from wpgrammar only. The demonstrative rows are from wpgrammar only (wiktionary entries *hii*, *huyu*, *yule* exist; their tables were not printed by the tool).

Notes:
- Class 1 negative subject is *ha-*; with locatives *hayu-* (*hayuko*) (wpgrammar).
- Adjectives in class 11 and 14 take **m-**, not u- (*ukuta mzuri*, *uso mzuri*; wiktionary "u class (XI) mzuri"; wpgrammar). Old u- agreement for class 14 survives in a few phrases (wpgrammar).
- Vowel-initial adjective stems: *-ema* gives *mwema, wema, mwema, myema, jema, mema, chema, vyema, njema, njema*; *-ingi* gives *mwingi, wengi, mwingi, mingi, jingi, mengi, kingi, vingi, nyingi, nyingi* (wiktionary, checked). *-ote* class 1 is not used (wpgrammar), but wiktionary lists *wote* for 1/2 together: teach *wote* for 2 only.
- Animate agreement: people and animals take 1/2 agreement whatever their class (*kifaru mkubwa alianguka*, *ndege mkubwa* 'big bird' vs *ndege kubwa* 'big plane'). Kin terms and *rafiki* take 9/10 possessives (*rafiki yangu*, *mama yetu*, *rafiki zangu*) (wpgrammar 'Concord', after mpiranya2015).

### Pronouns (wpgrammar 'Personal pronouns'; wiktionary -angu, -ote)

| | Independent | After na, ndi- | Possessive | All |
|---|---|---|---|---|
| 1SG | mimi | -mi (nami) | -angu | — |
| 2SG | wewe | -we (nawe) | -ako | — |
| 3SG | yeye | -ye (naye) | -ake | — |
| 1PL | sisi | -si (nasi) | -etu | sote |
| 2PL | ninyi, nyinyi | -nyi (nanyi) | -enu | nyote |
| 3PL | wao | -o (nao) | -ao (things: -ake) | wote |

### Verb forms (wiktionary verb appendix TAM table; wpgrammar TAM summary; -soma, -la, -jibu tables checked)

| Form | Positive | Negative | Short verb | Loan verb |
|---|---|---|---|---|
| Present | ni-na-soma | si-som-i, ha-tu-som-i | ninakula / sili | ninajibu / sijibu |
| Past | ni-li-soma | si-ku-soma | nilikula / sikula | nilijibu / sikujibu (wpgrammar: hatukujibu) |
| Future | ni-ta-soma | si-ta-soma (spoken si-to-) | nitakula / sitakula | |
| Perfect | ni-me-soma | si-ja-soma | nimekula / sijala (also sijakula) | hatujajibu |
| Gnomic -a- | na-soma | (as present) | nala | twajibu |
| Habitual | hu-soma | none | hula | |
| Subjunctive | ni-som-e | ni-si-som-e | nile / nisile | nijibu / nisijibu |
| Imperative | soma, som-eni | (usisome, msisome) | kula, kuleni (plural unverified; wpgrammar has *kunyweni*) | jibu, jibuni |
| -ki- | ni-ki-soma | (-sipo-) | nikila | |
| -ka- | ni-ka-soma | (none; neg. subjunctive) | nikala (unverified) | |
| -nge- | ni-nge-soma | ni-singe-soma | ningekula | |
| -ngali- | ni-ngali-soma | ni-singali-soma | ningalikula | |
| Infinitive | ku-soma | ku-to-soma | kula / kutokula | kujibu / kutojibu (unverified exact form; wpgrammar: kuto(ku)sahau) |

The present, negative present, subjunctive and gnomic rows of -soma, -la and -jibu were checked in wiktionary tables; the other rows are from wpgrammar's tables and examples (*nilikula, sikula, nimekula, sijala, nitakula, sitakula, atakwenda, hakwenda, hajaenda, ningekuwa*) and are **(unverified)** in a second source until ashton1944 or polome1967 §2.4.4 is checked page by page. The irrealis negatives with a negative subject (*hatungekuja*) are a southern variant (wpgrammar); teach -singe-.

Other checked facts used by part 4: short verbs are -la, -nywa, -ja, -pa, -wa, -fa, -cha, -nya, with -enda and -isha behaving like them (wpgrammar; wiktionary); kwenda and kwisha take kw- (wiktionary; *kwanza* 'begin' sometimes too). Passives of short verbs: -liwa, -nywewa, -pewa, -chewa (wiktionary derivation appendix), -nyewa (wpgrammar); *-ua* 'kill' has passive *-uawa* (wpgrammar). -pa has no plain infinitive (wiktionary headword "-pa (no plain infinitive)").

### Extensions (wpgrammar 'Derived verbs'; wiktionary derivation appendix)

- Harmony: the vowel of APPL, CAUS -ish-, STAT is **i after a, i, u (or syllabic m)** and **e after e, o** (both sources).
- APPL: -i-/-e- after a consonant; -li-/-le- after a vowel (*nunua* → *nunulia*, *soma* → *somea*, *andika* → *andikia*).
- PASS: -w- after a consonant (*jengwa*, *semwa*); after a vowel -liw-/-lew- (*nunuliwa*, *olewa*, *tolewa*); after l, w, y -iw-/-ew- (*tawaliwa*); Kiunguja-based standard also -liw- for -aa verbs (*zaliwa*, *valiwa*, *kaliwa*) (wpgrammar). Agent with *na*.
- CAUS: -ish-/-esh- (*somesha*, *chelewesha*, *wezesha*); -iz-/-ez- (*pendeza*, *lipiza*); sound-change: -ka → -sha (*amka* → *amsha*, *waka* → *washa*), vowel stems + -za (*jaa* → *jaza*, *kataa* → *kataza*); from adjectives and nouns (*safisha*, *fupisha*, *tayarisha*, *sababisha*).
- STAT: -ik-/-ek- (*vunjika*, *eleweka*, *sikika*); -lik- (*kalika*); means "get done with no agent" and, with some verbs, "be doable" (*-lika* 'be edible', wpgrammar).
- RECP: -an- (*pendana*, *pigana*); loan verbs take it on the applicative (wiktionary).
- REV: -u-/-o- (*fungua*, *fumbua*, *pangua*, *shonoa*), not productive (both).
- Stacking: passive comes last (*andikianishwa*) (wpgrammar).

### Where else to look in polome1967 (sections from its table of contents, opened)

§2.1 phonology (consonants 2.1.1, vowels 2.1.2, phonotactics 2.1.3, syllable 2.1.4, stress 2.1.5); §2.2 morphophonemics (vowels 2.2.1, consonants 2.2.2); §2.3 derivation (nominal 2.3.1, verbal 2.3.2); §2.4 inflection (class concords 2.4.1, nominal forms 2.4.2, pronominal forms 2.4.3, verbal forms 2.4.4, invariables 2.4.5); §2.5 complex structures (locatives in -ni 2.5.1, connective -a 2.5.2, associative na 2.5.3, copulatives ndi and si 2.5.4, relatives with amba 2.5.5, quasi-verbal complexes 2.5.6, verbal forms with clitics 2.5.7, -ingine 2.5.8); §2.6 syntax (concord, phrase, clause, sentence); §3 writing system; §4 points of contrast with English; §5 literature. Page numbers in the ToC OCR are unreliable; cite sections, not pages.

### Syllabus checked against

The standard grammars (ashton1944, mohammed2001) could not be opened, so the syllabus was checked against three tables of contents that were: **polome1967** (above), **wpgrammar** (Typology; Nouns: classes, concord, locatives, compounding; Pronouns: personal, reference and relative; Determiners: articles, demonstratives, other; Adjectives: inflecting, invariable, relatives, genitive, ornative; Verbs: structure, inflection groups, subject and object concords, infinitive, imperative, present tenses, habitual, past, perfect, -sha-, future, subjunctive, situational, consecutive, expeditive, irrealis, relative forms, 'to be' (essence, emphatic copula, location, state, relatives, continuative), 'to have', compound tenses, inchoative verbs, derived verbs (reciprocal, applicative, causative, passive, mediopassive, reversive, stacking); Prepositions: na, -a, kwa, -enye, kwenye, katika, compound prepositions), and **steere1894** (alphabet; substantives; adjectives, comparison, numerals; pronouns: personal, possessive, reflexive, demonstrative, relative, interrogative; verbs: conjugation, irregular, auxiliary, derivative; adverbs, prepositions, conjunctions; formation of words). Mapping:

- Phonology, morphophonemics, writing system → part 1 (swh-01-01 to swh-01-06).
- Classes, concord, locatives, compounding → part 3 (swh-03-01 to swh-03-14), swh-05-11.
- Pronouns, reference forms → swh-02-01, swh-03-09, swh-03-13, swh-06-01.
- Demonstratives, articles (none) → swh-03-11; -ote, -o-ote, -pi, -enyewe → swh-05-05.
- Adjectives (inflecting, invariable, -a, -enye, relatives as adjectives) → swh-03-03, swh-05-01, swh-05-02, swh-03-10, swh-06-02.
- Numerals, comparison → swh-05-03, swh-05-04, swh-05-06.
- Verb structure and concords → swh-02-02, swh-04-01, swh-04-07, swh-04-08; every TAM form → part 4 (present swh-02-02, negative swh-02-03, past swh-04-02, future swh-04-03, perfect swh-04-05, -sha- swh-04-16, subjunctive swh-04-09/10, imperative swh-02-07, infinitive swh-04-11, habitual swh-04-12, situational swh-04-13, consecutive and expeditive swh-04-14, compound tenses swh-04-15, inchoatives swh-04-06), irrealis swh-06-12, the -a- tense swh-07-11.
- Relative forms → swh-06-01 to swh-06-06; 'to be' and 'to have' → swh-02-01, swh-02-05, swh-02-06, swh-06-05, swh-06-07, swh-04-16 (-ngali).
- Derived verbs → part 7 (swh-07-01 to swh-07-10); derivation of nouns → swh-05-11; irregular verbs → swh-02-07, swh-04-04.
- Prepositions, adverbs, conjunctions → swh-05-07 to swh-05-09; syntax (word order, clause types) → swh-03-13, part 6.
- Points of contrast with English → Watch out sections throughout; literature → swh-07-13 and part 8.
Nothing at table-of-contents level is missing. The sub-sections of Ashton and Mohammed were not seen.

## 6. Points of scholarly disagreement or uncertainty

Say so in the lesson when one of these comes up.

1. **Vowel quality.** contini1997 (via wplang): vowels never reduce. polome1967: laxer allophones in unstressed syllables and before prenasalised consonants. Teach full vowels; mention variation in one sentence in swh-01-01.
2. **Phonemic status of aspirates, implosives and prenasalised stops.** Aspirates are lexically distinctive for some coastal (especially northern) speakers and not for most others (polome1967 §2.1.1.1). Prenasalised consonants: single phonemes or clusters? wplang reports that "multiple studies favour classifying prenasalization as consonant clusters". Teach them as clusters said as one onset.
3. **How many classes, and how to count them.** Bantu numbering (16 classes, 1–18 without 12/13; wpgrammar) versus the agreement-based school system (kucourse: 9 or 10 *ngeli*, A-WA, KI-VI...), versus wiktionary's Roman labels (its "XII" for the u- plural; XI for both 11 and 14). Classes 11 and 14 are nearly merged in the modern language (same prefixes; adjectives *m-* for both; wpgrammar). WALS 30A simply says "five or more" genders. The guide uses Bantu numbers and names the school pairs.
4. **Stative or mediopassive.** wpgrammar argues the -ik- extension is wrongly called "stative" in learner materials: the verbs are dynamic and exclude an agent (citing Seidl and Dimitriadis 2003); wiktionary calls it "stative" and also notes a "potential" sense. The guide uses "stative" (the name learners will meet), glosses STAT, and says in swh-07-08 that the name is misleading.
5. **The -a- tense.** wiktionary calls it "gnomic"; wpgrammar calls it the "indefinite present", "more or less obsolete" except in headlines (after Mpiranya 2015) and nearly identical in meaning to -na-. Teach it for reading only (swh-07-11) and warn that colloquial *nasoma* (dropped ni- of *ninasoma*) looks identical in the 1SG.
6. **-ja-: negative perfect or 'not yet'?** wiktionary lists -ja- as "not yet", a separate tense; wpgrammar treats it as the negative of -me- with "some sources" adding a 'not yet' implication. Gloss PRF.NEG, translate by context ("haven't (yet)").
7. **-ki- and -sipo-; -ja- and -me-.** wiktionary: some grammarians treat -sipo- as the negative of -ki-, but their uses differ; wpgrammar: -ki- has "no negative" strictly. Teach -sipo- as the negative of conditional -ki- only.
8. **-ngali- versus -ngeli- versus -nge-.** wiktionary: "-ngeli- is not used in literary Standard Swahili at all" and the conditionals are often interchangeable in speech; wpgrammar: -nge- vs -ngali- is a present/past irrealis distinction, blurred for many speakers. Teach -nge- and -ngali- with the strict distinction, flag the blur.
9. **The object prefix with animate objects.** Some sources say it is obligatory for animate objects; wpgrammar says counter-examples are "commonplace" and use depends on animacy, specificity and emphasis. Teach: usual (near-obligatory in practice) with people and named animals, optional and definiteness-marking with things (swh-04-08); avoid "always".
10. **Demonstratives: two or three?** wals 41A codes a "two-way contrast"; wpgrammar describes three forms, the -o form being medial/referential ("aforementioned", or near the listener). The guide teaches three forms with the -o form as mainly "that one mentioned" (ANA). Class 18 distal: wpgrammar *mle*, wiktionary noun-class appendix *mule*: use *mle* and note *mule*.
11. **amba- relatives.** wpgrammar claims amba- "was coined a hundred years ago by foreigners" and is urban and media usage; wiktionary says relatives with amba- are the colloquial norm and verb-internal relatives literary. These conflict on register; neither cites evidence the session opened. Teach both as standard; say that amba- is the more frequent in speech and the only option outside -li-, -na-, -taka- and the tenseless form (both sources agree on that limitation) **(register claims unverified)**.
12. **Stress exceptions.** polome1967 gives antepenult stress in some Arabic loans (*lazima*, *nusura*) and the pair *barabara*; most teaching materials say stress is always penultimate. Teach the rule, then the handful of exceptions as "careful or Arabic-style pronunciation".
13. **Zero copula.** wals 120A: zero copula "impossible" for predicate nominals; yet *ni* is often left out in speech and headlines (wpgrammar shows *(ni) lazima*). Teach *ni* as normal, its omission as a feature of speech and headlines **(frequency unverified)**.
14. **History.** The origin of the classes, the lost l (*kondoo* < *kondolo*), the -ku- of short verbs as the old infinitive prefix, and -sha- from *kwisha* 'finish' are stated in wplang and wpgrammar; Bantu-wide reconstructions rest on nurse1993 (not opened). State only what an opened source states, and say "probably" where they do. Loanword shares vary widely (wplang: 40 % Arabic in one count, 16–20 % in another, 2–8 % in core vocabulary): never give one figure as fact.

## 7. Text corpora for attested examples

- **proverbs** (wiktionary Category:Swahili proverbs, 34 entries, opened). Meanings in the entries checked for: *penye nia pana njia*, *haba na haba hujaza kibaba*, *mtu ni watu*, *umoja ni nguvu*, *haraka haraka haina baraka*, *usipoziba ufa utajenga ukuta*, *mchumia juani hulia kivulini*, *samaki mkunje angali mbichi* (also *yungali mbichi*), *afya ni mali*, *ahadi ni deni*. Others listed: *mwenye kisima hapangi foleni*, *mtoto wa nyoka ni nyoka*, *mbwa abwekae haumi*, *mwosha huoshwa*, *tenda wema nenda zako*, *sumu ya neno ni neno*, *kazi ni kazi*. Cite as `wiktionary, entry <proverb>`. wpgrammar also quotes *Mwenye choyo hashibi* and *Usiache mbachao kwa msala upitao* (its form *ujao*; check).
- **steere1870**: nineteenth-century Zanzibar tales with English translation (archive.org OCR, noisy). Older spellings to modernise in `orig` with a note: *hatta* → *hata*, *bassi* → *basi*, *kulla* → *kila*, *ela* → *ila*, *ginsi* → *jinsi*, *wallakini* → *walakini*, *ntakuleta* (= *nitakuleta*, with a reduced ni-; **check** the reading against the scan), *nnakwenda* → *ninakwenda*. Cite as `Steere 1870, Kisa cha punda wa dobi, p. n`.
- **steere1894**: Appendix III, "Part of a Swahili tale, with the prefixes marked and explained" (useful for a verification pass).
- **udhr** (opened): formal register; older word division (*wo wote*, *ye yote*, *cho chote*). Cite `UDHR, Kifungu cha n`.
- **swwiki** (opened, rev. 1603419): modern prose; it has non-standard agreement in places (*Kiswahili ilitokana* with class 9 agreement for a class 7 noun, apparently agreeing with an understood *lugha* 'language'; point this out rather than correcting it).
- **wpgrammar** examples are constructed by editors or quoted from teaching grammars: treat them as `constructed` (verified) examples, not `attested`.
- No balanced corpus (Helsinki Corpus of Swahili, which requires registration) was opened.

### Part 8 readings chosen

| Lesson | Text | Source | Status |
|---|---|---|---|
| swh-08-01 | Eight proverbs (from the list above) | proverbs | opened; CC BY-SA; traditional |
| swh-08-02 | *Kima na papa*: the monkey and the shark, opening (to *Nambie, rafiki yangu, nipate kujua maana*) | steere1870, *Kisa cha punda wa dobi*, pp. 2–5 **(page range unverified: OCR page headers)** | opened; public domain; transcribe from page images |
| swh-08-03 | *Kisa cha punda wa dobi*: the washerman's donkey, the hare and the lion, to the end | steere1870, pp. 5–9 **(page range unverified)** | as above |
| swh-08-04 | UDHR Articles 1 and 3 to 5 (Article 2 is a long list; omitted) | udhr | opened |
| swh-08-05 | *Kiswahili*, first three paragraphs | swwiki rev. 1603419 | opened; CC BY-SA |
| swh-08-06 | **Capstone**: *Mungu ibariki Afrika* (both stanzas and refrains) | anthem | opened |

**Capstone decision.** Candidates considered:
- **Shaaban Robert** (1909–1962), the most celebrated modern Swahili writer ("poet laureate of Swahili", en.wikipedia, opened). Tanzania's copyright term is life plus 50 years, so his works entered the public domain in Tanzania on 1 January 2013 (term from en.wikipedia 'List of copyright duration by country', seen as a search excerpt; **unverified** against the Act), but they may still be protected elsewhere (for example in the United States, by publication date) **(unverified)**, and no open, checkable text of any poem or prose passage was found in this session (there is no Swahili Wikisource). Rejected for now: a later session may add a short excerpt if a reliable edition can be opened.
- **The *Utendi wa Tambuka*** (1728): the oldest dated Swahili literary work, in Kiamu and in Arabic script, with heavy Arabic vocabulary (en.wikipedia, opened; first stanza *Bisimillahi kut̠ubu / yina la Mola Wahhabu ...*). Beyond the guide's reach: shown in swh-07-13 as an example of utenzi form, not read.
- **The national anthem**, chosen. It is the text every Tanzanian knows (sung daily in schools, en.wikipedia), short, in standard modern Swahili, and it fits the end of the guide exactly: imperatives with object prefixes on a loan verb (*ibariki*, *wabariki*, *tubariki*: -bariki has no final -a, so the object-prefix imperative keeps -i instead of taking -e, the swh-04-09 rule seen in a real text), possessives (*viongozi wake*, *ngao zetu*, *watu wake*), a demonstrative with the copula (*Hizi ni ngao zetu*), class 14 abstracts (*hekima*, *umoja*, *amani*, *uhuru*), a causative from a loan verb (*dumisha* 'maintain', wiktionary: causative of *-dumu* 'last', checked), the -a of association (*watoto wa Afrika*), and the idiom *wake kwa waume* 'women and men' (*wake*, plural of *mke* 'wife', not the possessive *wake*: a lovely trap to discuss). Text (sw.wikipedia, matching en.wikipedia apart from capitals and the line break in the last line of stanza 2):

  *Mungu ibariki Afrika / Wabariki viongozi wake / Hekima, umoja na amani / Hizi ni ngao zetu / Afrika na watu wake. // Ibariki Afrika, ibariki Afrika / Tubariki watoto wa Afrika. // Mungu ibariki Tanzania / Dumisha uhuru na umoja / Wake kwa waume na watoto / Mungu ibariki Tanzania na watu wake. // Ibariki Tanzania, ibariki Tanzania / Tubariki watoto wa Tanzania.*

  Note the agreement: *ibariki* has the class 9 object prefix i-, because *Afrika* and *Tanzania* are treated as class 9 nouns; *wabariki* has class 2 -wa- for *viongozi* (people). Authorship of the Swahili words is unclear (sw.wikipedia names Moses Nnauye; en.wikipedia says it is not known); say so. Copyright status not verified; the text is short and quoted for commentary.

Translations are always our own.

## 8. Notes for drafters

- British spelling; second person; short sentences; one idea per paragraph. No "simply", no "just" as filler.
- **The backbone is agreement and the slots.** Every lesson in parts 2 to 4 says which slot a new marker fills, and every lesson in part 3 shows one noun's prefix echoed on at least an adjective and a verb. The chain of thought runs: "The noun is *kitabu*, class 7. The adjective takes the class 7 adjective prefix: *kikubwa*. The verb needs a subject prefix for class 7: *ki-*. Past: *-li-*. Root *-angu-*, final vowel *-a*: *kilianguka*."
- **Dependency order of agreement.** Until swh-03-02, the only nouns are people (classes 1/2) and the only agreement is the subject prefix of persons and classes 1/2. Each class lesson adds its subject prefix and adjective prefix only; possessives, -a, demonstratives come after all the classes (swh-03-09 to swh-03-11), so the drafter of swh-03-02 must not use *changu* or *hiki*. Object prefixes wait for swh-04-07; relatives for part 6; extensions for part 7. Until swh-04-02 every verb is in -na-, the negative present, the imperative or the infinitive.
- **Short verbs** (-la, -nywa, -ja, -pa, -wa, -fa) are best avoided in constructed examples before swh-04-04, except as infinitives (*kula*, *kunywa*) and in the -na- present with KU explained in a note as a preview.
- **Loan verbs** (-jibu, -fikiri, -rudi, -samehe, -safiri, -bariki) do not change their final vowel: point this out in every lesson that changes the final vowel (swh-02-03, swh-04-09, swh-02-07).
- **Vocabulary**: prefer frequent everyday words; record for each noun its class pair and plural (checked in wiktionary), for each verb the infinitive and whether it is short or a loan.
- **People and animals in other classes** (*rafiki*, *ndege*, *kifaru*, *mwalimu* is fine) agree in 1/2: flag it in the note each time until swh-03-08, and avoid them in examples before that lesson.
- **hu-**: the habitual hu- and the negative 2SG hu- look identical (*husoma* 'one usually reads' vs *husomi* 'you don't read'); the final vowel tells them apart. Teach in swh-04-12 Watch out.
- **wa-**: the class 2 subject prefix *wa-*, the 2PL object *-wa-*, the class 2 object *-wa-*, the -a of association *wa* (classes 1, 3, 11, 14) and the 2SG gnomic *wa-* (u + a) all look alike. Each lesson that adds one says which slot it is in.
- Constructed examples use only words already introduced in a `:::vocab` block and only grammar already introduced. An example whose gloss needs a category not yet taught carries `preview:` and says so in its note.
- Connections worth making for this reader (keep each short and accurate):
  - **Spanish and French**: grammatical gender is the nearest European idea to a noun class, but Swahili has sixteen classes, not two, and they are based on meaning and form, not sex (wals 31A "non-sex-based"); agreement on adjectives (*la casa blanca* / *nyumba nzuri*) is the bridge. *ser/estar* compares with *ni* versus *-ko/-po* (wpgrammar makes the comparison itself). The subjunctive after "want" and in prohibitions (*no comas* / *usile*) is a real parallel (wpgrammar notes the negative imperative as subjunctive "as in Spanish"). French *fin de semaine* compares with genitive compounds like *mpira wa miguu* (wpgrammar). Portuguese gave words like *meza* 'table' and *pesa* 'money' **(etymologies unverified: check wiktionary before stating)**.
  - **Arabic**: a large loan layer (*kitabu*, *mwalimu*, *habari*, *dhahabu*, *lazima*, *rafiki*, *-jibu*, *-fikiri*, *-rudi*; wplang and wiktionary etymologies to check per word); the loan *kitabu* reanalysed as ki- + -tabu, plural *vitabu* (wplang) is the best illustration of the class system absorbing foreign words; Arabic dh, th, gh, kh; numbers six, seven, nine and the tens from Arabic (*sita*, *saba*, *tisa*, *ishirini*; wpgrammar). The name *Swahili* is from Arabic *sawāḥil* 'coasts' (wplang).
  - **Japanese and Korean**: no structural kinship. Useful contrasts: Swahili is head-first (noun before adjective, preposition, relative after the noun) where Japanese and Korean are head-final; but like them it drops pronouns freely and packs grammar into affixes on the verb. Korean speech levels can be compared with the subjunctive as a "polite imperative" only loosely; do not overstate. Swahili has no honorific verb forms.
  - **Other Bantu languages in the app** (if any are added): the class numbers are shared across Bantu, so *ki-/vi-* and *m-/wa-* correspond regularly (wpgrammar: "corresponding classes in the other Bantu languages which can be identified by the same system of numbers").
- Do not use vulgar examples (wpgrammar has a few); avoid political material beyond the fixed readings, which are presented as historical or civic documents.
