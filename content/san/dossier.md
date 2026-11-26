# Sanskrit dossier

Built 2026-11-26. Source ids refer to `sources.json`. Everything a drafting or verifying agent needs to stay consistent is here; where this file and a named source disagree, the source wins and this file gets corrected. "Checked" below means opened in this session (2026-11-26): Whitney's table of contents on Wikisource and the section headings in the archive.org OCR of the 1896 issue; Wiktionary tables via `tools/wikt.py`; GRETIL files; the Cologne Monier-Williams.

## 1. Variety taught

- **Base: Classical Sanskrit**, the language described by Pāṇini's grammar (the *Aṣṭādhyāyī*) and written to that norm in prose and verse from roughly the last centuries BC onward: the Hitopadeśa and Pañcatantra, Kālidāsa, the śāstras and commentaries. This is the variety every reference grammar takes as its base (whitney1889 §1–3 treats Classical first and marks Vedic separately; macdonell1927 ch. I §1: Sanskrit is "that later phase of the literary language of ancient India which is described in the grammar of Pāṇini"). Forms, paradigms and rules in parts 1 to 6 are Classical (Pāṇinian) unless labelled.
- **Why this base:** it is the norm that later Sanskrit was written to for two thousand years, it is what the dictionaries and grammars describe, and it is regular enough to teach as a system. The famous texts a learner wants (the Gītā, Nala, the Rāmāyaṇa, Kālidāsa, the Hitopadeśa) are all either Classical or epic Sanskrit, which is close to it.
- **Epic Sanskrit** (the Mahābhārata, including the Gītā and Nala, and the Rāmāyaṇa) is the language of most of part 8. It is Classical in its grammar but allows forms Pāṇini does not: wrong voice (*-ti* for *-te* and the reverse), thematised athematic verbs, the absolutive in *-ya* on unprefixed roots and *-tvā* on prefixed ones, irregular sandhi across the pāda break, and metrical lengthening. The tradition calls them *ārṣa* "belonging to the seers". They are taught in san-07-08 and flagged wherever they occur in a reading: the note says "epic form; Classical X". Example checked in this session: MBh 3.50.27c (GRETIL) has *bhavethā varavarṇini* "(if) you were (his wife), fair one": *bhavethāḥ* is the 2SG middle optative of *bhū* (Wiktionary table for भवति), where Classical uses only the active *bhaveḥ*. The loss of -ḥ before *v-* is ordinary sandhi (-āḥ before a voiced sound → -ā, whitney1889 §177); the middle voice is the epic feature. Do not use epic forms in constructed examples.
- **Vedic Sanskrit** (the Ṛgveda to the Brāhmaṇas and early Upaniṣads) is flagged and taught only in san-07-10. It has the pitch accent, the subjunctive, about a dozen infinitives, more aorist and perfect forms, and older endings (*devāsaḥ* for *devāḥ*, *devebhiḥ* for *devaiḥ*; all footnoted as Vedic in the Wiktionary table for देव). Wiktionary prints Vedic accents and footnoted Vedic variants in every table: strip the accents and ignore footnoted forms when checking a Classical form.
- **Pronunciation:** the reconstructed pronunciation described by the Indian phoneticians and by whitney1889 §§19–75, with modern Indian usage mentioned where it differs (short *a* as [ɐ], *ṛ* as [ɾɪ], *jñ* as [ɡjɐ]). Accent is not taught for Classical Sanskrit, which was not written with accent marks and whose accent the grammarians describe only for the older language (whitney1889 §80ff.; macdonell1927 Appendix III).

## 2. Phoneme inventory

Sources: whitney1889 §§19–75 (System of Sounds; headings checked in the OCR), macdonell1927 ch. I (Pronunciation), with the Indian names for the classes. IPA values are the usual reconstruction; where the old descriptions and modern practice differ, both are given. The traditional order of the alphabet (*varṇamālā*) is the order of the tables below, and it is also dictionary order.

### Vowels

| IAST | Deva (initial / sign) | IPA | Description and notes |
|---|---|---|---|
| a | अ / (inherent) | [ɐ] | short; "neutral vowel" like English *but*, already described as *saṃvṛta* "closed" by Pāṇini (whitney1889 §21) |
| ā | आ / ा | [aː] | long open a, as in *father* |
| i | इ / ि | [i] | short |
| ī | ई / ी | [iː] | long |
| u | उ / ु | [u] | short |
| ū | ऊ / ू | [uː] | long |
| ṛ | ऋ / ृ | [r̩] | syllabic r, "a smooth or untrilled r-sound in vocalic office" (whitney1889 §24). Modern Indian recitation says [ɾɪ] (north) or [ɾu] (south and Maharashtra): teach [r̩], mention [ɾɪ]. |
| ṝ | ॠ / ॄ | [r̩ː] | long syllabic r; only in a few plural forms of ṛ-stems (*pitṝn*, *pitṝṇām*, *mātṝḥ*) |
| ḷ | ऌ / ॢ | [l̩] | syllabic l; only in forms of the root *kḷp* "be fit" (*kḷpta*) (whitney1889 §23–24) |
| ḹ | ॡ / ॣ | – | listed by grammarians for symmetry; occurs in no genuine word (whitney1889 §23a). Teach the letter only as a curiosity. |
| e | ए / े | [eː] | always long; historically *ai* (a + i), so it counts as a diphthong in sandhi (whitney1889 §28) |
| ai | ऐ / ै | [ɐi̯] or [aːi̯] | the vṛddhi diphthong (ā + i) |
| o | ओ / ो | [oː] | always long; historically *au* (a + u) |
| au | औ / ौ | [ɐu̯] or [aːu̯] | the vṛddhi diphthong (ā + u) |

Length is contrastive: *dina* "day" vs *dīna* "wretched" (mw1899); *matiḥ* NOM.SG vs *matī* NOM.DU (Wiktionary मति); *ca* "and" vs *cā* (only as the result of sandhi, *ca + api* → *cāpi*). There is no short e or o: *e* and *o* scan long everywhere.

### Consonants: the stops and nasals (*sparśa*, "contact sounds")

The 25 stops form a grid of five places by five manners. The grid is the organising idea of part 1, because sandhi rules (voicing, place assimilation, nasal assimilation) are stated by row and column.

| Place (Indian name) | voiceless | voiceless aspirate | voiced | voiced aspirate ("murmured") | nasal |
|---|---|---|---|---|---|
| velar (*kaṇṭhya*, throat) | k [k] | kh [kʰ] | g [ɡ] | gh [ɡʱ] | ṅ [ŋ] |
| palatal (*tālavya*) | c [c] | ch [cʰ] | j [ɟ] | jh [ɟʱ] | ñ [ɲ] |
| retroflex (*mūrdhanya*, "head" sounds) | ṭ [ʈ] | ṭh [ʈʰ] | ḍ [ɖ] | ḍh [ɖʱ] | ṇ [ɳ] |
| dental (*dantya*) | t [t̪] | th [t̪ʰ] | d [d̪] | dh [d̪ʱ] | n [n̪] |
| labial (*oṣṭhya*) | p [p] | ph [pʰ] | b [b] | bh [bʱ] | m [m] |

- **Aspirates** are single sounds with a puff of breath: *th* is never English *th*, *ph* never *f*. The voiced aspirates are "murmured" (breathy-voiced) stops (whitney1889 §§37–38).
- **Palatals:** described by the grammarians as simple stops made with the middle of the tongue on the hard palate [c ɟ]; pronounced today, in India and in Europe, as affricates [t͡ɕ d͡ʑ] like English *church*, *judge* (whitney1889 §44). Teach the affricate pronunciation, state the old description.
- **Retroflexes** ("cerebrals", "linguals" in older grammars): tip of the tongue curled back to the roof of the mouth (whitney1889 §45). They are a mostly Indian development, largely from dentals next to *ṣ* or *r* (whitney1889 §46). European Sanskritists often ignore the difference from dentals; the guide does not.
- **ṅ** and **ñ** occur only before a stop of their own row (*aṅga*, *pañca*) and in a handful of word-final forms (*prāṅ*); **ṇ** occurs mostly by the n-to-ṇ rule (san-03-01, san-05-07).
- **b** is rare; **ḷh**, the Vedic intervocalic retroflex lateral, is Vedic only (whitney1889 §54).

### Semivowels, sibilants, h

| IAST | Deva | IPA | Notes |
|---|---|---|---|
| y | य | [j] | palatal glide; alternates with i (sandhi *iti + api* → *ity api*) |
| r | र | [ɾ] | a tap or short trill; the grammarians class it with the retroflexes, which is why it triggers *n* → *ṇ* (whitney1889 §52) |
| l | ल | [l] | dental lateral |
| v | व | [ʋ] | labiodental approximant; after a consonant often [w]. Alternates with u. |
| ś | श | [ɕ] | palatal sibilant, between English *s* and *sh* |
| ṣ | ष | [ʂ] | retroflex sibilant, *sh* with the tongue curled back |
| s | स | [s] | dental sibilant |
| h | ह | [ɦ] | voiced (breathy) h, not English voiceless h: "defined by all the native authorities as not a surd element, but a sonant" (whitney1889 §§65–68); historically from *gh* (§68) |

### Anusvāra and visarga (the "edge" sounds)

- **ṃ anusvāra** (ं): a nasal at the end of a syllable before a consonant. Before a stop it is pronounced as the nasal of that stop's row (*saṃkalpa* [sɐŋkɐlpɐ]); before *y r l v ś ṣ s h* it is a nasalised vowel or a nasal glide (whitney1889 §§70–73: "discordance of opinion" among the Indian phoneticians on its exact nature). Word-finally before a consonant, final *m* becomes ṃ (whitney1889 §213).
- **ḥ visarga** (ः): a voiceless breath at the end of a syllable, the pausa form of final *s* and *r* (whitney1889 §69). Recitation echoes the preceding vowel after it (*devaḥ* [deːʋɐhɐ], *agniḥ* [ɐɡnihi]); this is a recitation habit, mention it, do not write it.
- **Jihvāmūlīya and upadhmānīya**, the velar and bilabial variants of visarga before *k kh* and *p ph* (whitney1889 §69), are not used in this guide's script or transliteration; san-01-08 mentions them once.

### Syllable weight (for metre, san-07-07)

A syllable is **heavy** (*guru*) if its vowel is long (ā ī ū ṝ e ai o au) or is followed by two consonants, or by ṃ or ḥ; otherwise **light** (*laghu*) (whitney1889 §79). Aspirates are single consonants. The weight rule, not accent, is what Classical metre counts.

## 3. Script and transliteration

### Choice and reason

- **Devanagari** in `orig` throughout, because it is the script Sanskrit is printed in today in India and in most editions, and the brief's row names it. Sanskrit has been written in many Indian scripts (Brāhmī, Śāradā, Grantha, Bengali, Telugu, Nepali scripts); san-01-05 says so once. Manuscripts of a text may be in a regional script; editions are in Devanagari or in roman.
- **IAST** (International Alphabet of Sanskrit Transliteration, agreed at the Geneva Orientalist Congress of 1894; wp-iast as pointer) in `translit`, `morphemes`, vocab and prose. Reasons: it is the scheme of whitney1889 (in a variant), macdonell1927, mw1899, Wiktionary's romanisation, GRETIL and the DCS, so a drafter can copy and compare directly. It is one-to-one with Devanagari for Sanskrit except for the two ambiguities noted below. ISO 15919 differs from IAST mainly in writing anusvāra ṁ, vocalic r̥ and *ē ō* in non-Sanskrit languages: not used. Harvard-Kyoto, Velthuis and SLP1 (the ASCII schemes of the Cologne dictionaries and the Heritage site) are used only for typing searches; never in content files.
- `translit_optional` is false: transliteration is shown by default and can be hidden.

### The table (Devanagari ↔ IAST), with Unicode

Every character is precomposed under NFC except candrabindu m̐ (two code points, as noted). Files are NFC.

Vowels (independent letter / dependent sign after a consonant):

| IAST | letter | sign | code points (letter, sign) |
|---|---|---|---|
| a | अ | (none: the inherent vowel) | U+0905 |
| ā | आ | ा | U+0906, U+093E |
| i | इ | ि | U+0907, U+093F (written before the consonant, typed after it) |
| ī | ई | ी | U+0908, U+0940 |
| u | उ | ु | U+0909, U+0941 |
| ū | ऊ | ू | U+090A, U+0942 |
| ṛ | ऋ | ृ | U+090B, U+0943 |
| ṝ | ॠ | ॄ | U+0960, U+0944 |
| ḷ | ऌ | ॢ | U+090C, U+0962 |
| ḹ | ॡ | ॣ | U+0961, U+0963 |
| e | ए | े | U+090F, U+0947 |
| ai | ऐ | ै | U+0910, U+0948 |
| o | ओ | ो | U+0913, U+094B |
| au | औ | ौ | U+0914, U+094C |

Consonants (each letter carries an inherent *a*; virāma ् U+094D removes it):

| IAST | Deva | code | IAST | Deva | code | IAST | Deva | code |
|---|---|---|---|---|---|---|---|---|
| k | क | U+0915 | kh | ख | U+0916 | g | ग | U+0917 |
| gh | घ | U+0918 | ṅ | ङ | U+0919 | c | च | U+091A |
| ch | छ | U+091B | j | ज | U+091C | jh | झ | U+091D |
| ñ | ञ | U+091E | ṭ | ट | U+091F | ṭh | ठ | U+0920 |
| ḍ | ड | U+0921 | ḍh | ढ | U+0922 | ṇ | ण | U+0923 |
| t | त | U+0924 | th | थ | U+0925 | d | द | U+0926 |
| dh | ध | U+0927 | n | न | U+0928 | p | प | U+092A |
| ph | फ | U+092B | b | ब | U+092C | bh | भ | U+092D |
| m | म | U+092E | y | य | U+092F | r | र | U+0930 |
| l | ल | U+0932 | v | व | U+0935 | ś | श | U+0936 |
| ṣ | ष | U+0937 | s | स | U+0938 | h | ह | U+0939 |

Other signs:

| IAST | Deva | code | name and use |
|---|---|---|---|
| ṃ | ं | U+0902 | anusvāra. IAST ṃ is U+1E43 (dot below). Do not use ṁ U+1E41 (dot above, the ISO 15919 letter). |
| ḥ | ः | U+0903 | visarga; IAST ḥ U+1E25 |
| m̐ | ँ | U+0901 | candrabindu (final *n* before *l* becomes nasalised *l*: *tān lokān* → *tām̐l lokān*, whitney1889 §206). IAST m + U+0310 COMBINING CANDRABINDU; no precomposed form. Rare: use only when the edition has it. |
| ' | ऽ | U+093D | avagraha: marks an initial *a* lost after -e or -o (*śāśvato 'yaṃ*). IAST uses ASCII apostrophe U+0027, as GRETIL does; not ’ U+2019. |
| \| | । | U+0964 | daṇḍa, end of a half-verse or sentence. In `translit` write \| (U+007C); in prose write the Devanagari sign. |
| \|\| | ॥ | U+0965 | double daṇḍa, end of a verse or paragraph |
| oṃ | ॐ | U+0950 | the syllable om, as a single sign |
| 0–9 | ०–९ | U+0966–U+096F | Devanagari digits; verse numbers in `source` stay in Western digits |

Conjuncts are formed by virāma between consonants (क + ् + ष → क्ष *kṣ*, ज + ् + ञ → ज्ञ *jñ*, त + ् + र → त्र *tr*, श + ् + र → श्र *śr*, द + ् + य → द्य *dy*); the font decides how they look. Type them that way; never use precomposed or presentation characters. ZWNJ U+200C after a virāma forces a visible virāma instead of a conjunct; do not use it in `orig` (it is invisible and breaks the round-trip check). Unicode chapter 12 (unicode) describes this; the nukta letters (क़ etc.) and U+0929, U+0931, U+0934 are Hindi and Dravidian letters not used for Sanskrit.

**Ambiguities of IAST, and the rule.** (1) A consonant followed by *h* in two syllables (*k* + *h*) looks like an aspirate *kh*. In Sanskrit this arises almost only across a boundary and sandhi turns it into an aspirate anyway (*vāk + hi* → *vāg ghi*, whitney1889 §163), so it is not a problem in practice. (2) *a* + *i* or *a* + *u* in hiatus inside a word looks like the diphthongs *ai*, *au*. In external sandhi the hiatus stands at a space (*ta iha*) so it is unambiguous; inside a word it is very rare. If either comes up, the Devanagari decides and the note says so.

### How a line is printed: one rule for both scripts

Devanagari editions printed in India join every word that ends in a consonant to the next word (कर्मण्येवाधिकारस्ते), so that spaces fall only after vowels, ṃ and ḥ. Western editions in roman, GRETIL and the DCS put a space at every word boundary except where two vowels have fused into one (*karmaṇy evādhikāras te*). The guide uses **one spacing for both scripts**:

- `translit` is spaced as GRETIL spaces it: a space at every word boundary, except where a final and an initial vowel have merged into one vowel (*eva* + *adhikāraḥ* → *evādhikāraḥ*; *ca* + *iha* → *ceha*). A vowel turned into a semivowel stays before the space (*karmaṇy eva*, *ity uktvā*). Words inside a compound are never spaced (*karmaphalahetuḥ*). Hyphens are not used inside compounds in `translit` (some e-texts, e.g. GRETIL's Hitopadeśa, insert them; remove them).
- `orig` is the exact letter-for-letter Devanagari of `translit`, with the same spaces. A consonant before a space takes virāma (कर्मण्य् एवाधिकारस् ते). Avagraha keeps the space in front of it as in the IAST (शाश्वतो ऽयं).
- **Reason:** the two lines then round-trip mechanically, which the script check (BRIEF §5) needs, and the reader can see in the Devanagari where each word begins. The cost is that Indian readers are used to the joined printing. san-01-09 shows the same verse in the joined printing once and says that editions print it that way.
- When quoting an attested line, copy GRETIL's IAST (correcting its spacing to the rule above where it differs), then generate the Devanagari. Do not copy Devanagari from another site.

Round-trip check, Devanagari to IAST (tested in this session on the meta sample, Bhg 1.1, Bhg 2.20c and MBh 3.50.1a). Run with `python3 -I`, passing the `orig` and `translit` strings:

```
import sys, unicodedata as u
V = {'अ':'a','आ':'ā','इ':'i','ई':'ī','उ':'u','ऊ':'ū','ऋ':'ṛ','ॠ':'ṝ','ऌ':'ḷ','ॡ':'ḹ','ए':'e','ऐ':'ai','ओ':'o','औ':'au'}
M = {'ा':'ā','ि':'i','ी':'ī','ु':'u','ू':'ū','ृ':'ṛ','ॄ':'ṝ','ॢ':'ḷ','ॣ':'ḹ','े':'e','ै':'ai','ो':'o','ौ':'au'}
C = dict(zip('कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह',
  'k kh g gh ṅ c ch j jh ñ ṭ ṭh ḍ ḍh ṇ t th d dh n p ph b bh m y r l v ś ṣ s h'.split()))
O = {'ं':'ṃ','ः':'ḥ','ँ':'m̐','ऽ':"'",'।':'|','॥':'||','ॐ':'oṃ','्':''}
D = {chr(0x966+i):str(i) for i in range(10)}
def d2i(s):
    s = u.normalize('NFC', s); out = []; i = 0
    while i < len(s):
        ch = s[i]; nx = s[i+1] if i+1 < len(s) else ''
        if ch in C:
            out.append(C[ch])
            if nx in M: out.append(M[nx]); i += 1
            elif nx == '्': i += 1
            else: out.append('a')
        elif ch in V: out.append(V[ch])
        elif ch in O: out.append(O[ch])
        elif ch in D: out.append(D[ch])
        elif ch == '‌': pass
        else: out.append(ch)
        i += 1
    return u.normalize('NFC', ''.join(out))
got = d2i(sys.argv[1]); print('OK' if got == u.normalize('NFC', sys.argv[2]) else 'MISMATCH', got)
```

### Spelling conventions inside IAST

- **Final m before a consonant** is written ṃ (anusvāra), as GRETIL writes it (*enaṃ vetti*, *saṅgaṃ tyaktvā*), never the homorganic nasal (*enan vetti*), even though Pāṇini allows that too. Before a vowel and at a pause, m. Inside a word, follow the dictionary: a nasal before a stop is written as the stop's own nasal (*aṅga*, *pañca*, *kaṇṭha*, *anta*, *kampa*), before *ś ṣ s h* and *y r l v* as ṃ (*saṃsāra*, *vaṃśa*, *saṃyoga*, *siṃha*). Exception: the prefix *sam-* keeps ṃ before a stop too, as mw1899 and Wiktionary both spell it (*saṃkalpa*, checked in both); editions sometimes print *saṅkalpa*. Follow mw1899 and do not make a point of it.
- **Capitals:** none in example fields (IAST has no case and Devanagari none). Names keep lower case in `translit` and `morphemes`; in `gloss` and English prose they get a capital (*nala* → `Nala`).
- **Doubled consonants after r** (*karmma*, *arttha*), common in older printing and manuscripts, are normalised to the dictionary spelling (*karma*, *artha*).
- Vedic accent marks (Devanagari U+0951, U+0952; IAST acute and grave) are stripped everywhere except in san-07-10.
- Punctuation in `translit`: | and || for daṇḍas in verse, as GRETIL; prose sentences may end with a full stop in `translit` and । in `orig`. Do not put the GRETIL verse labels (Bhg_02.047a) into example fields.

## 4. Grammatical and glossing conventions

### Sandhi: what goes in each example field

Sanskrit text is written with sandhi: final and initial sounds change where words meet (whitney1889 §§98–260). The four fields show the same line at three depths.

- **`orig`:** Devanagari, sandhi applied, exactly as the text is (or, for a constructed sentence, as it must be written). Spaced as `translit` (section 3).
- **`translit`:** IAST, sandhi applied, GRETIL spacing.
- **`morphemes`:** the line **with sandhi undone, in the manner of the pada-pāṭha** (the "word text" in which the Vedic schools recited each word separately). Every word stands in its **pausa form**, the form it has at the end of an utterance: final *-s* and *-r* as ḥ (*devaḥ*, *punaḥ*), final *-m* as m, final stops voiceless (*tat*, *vāk*, *āsīt*), and so on (whitney1889 §§139–155 on permitted finals; §122 heading checked). The same applies at the boundaries **inside** a compound and between a **preverb** and its verb: the piece on the left is in pausa form, the piece on the right in its normal form (*karmaphalahetuḥ* → `karma-phala-het-uḥ`; *manoratha* → `manaḥ-rath-aḥ`; *uttiṣṭhati* → `ut-tiṣṭha-ti`; *pratyuvāca* → `prati-uvāc-a`; *udatiṣṭhat* → `ut-a-tiṣṭha-t`). Vowels fused by sandhi are restored on both sides (*evādhikāraḥ* → `eva adhikār-aḥ`; *mahātmā* → `mahā-ātm-ā`).
- **Internal sandhi is not undone.** Inside a word, between root, suffix and ending, the morphemes line shows the actual surface pieces and cuts where a clean cut exists: `karmaṇ-i` (not *karman-i*), `gan-tum` (root *gam*), `yuk-ta-ḥ` (root *yuj*), `bhav-e-t`. The root is named in the note or the vocab entry, not reconstructed in the line.
- **`gloss`** aligns with `morphemes` word for word and piece for piece.
- The note of the **first example in each lesson whose `translit` differs from its `morphemes` by external sandhi** names each join: "*devo* is *devaḥ* before a voiced consonant (san-02-06)". After san-04-07, notes name only joins not yet taught or easy to misread.
- Avagraha is a sandhi effect: *śāśvato 'yam* → `śāśvat-aḥ ayam` (both words restored).

### How the early lessons avoid external sandhi

Sandhi is taught in four stages: san-02-06 (final -ḥ and -m), san-03-07 (vowels), san-04-07 (final consonants), san-05-07 (internal sandhi). Until each stage, constructed examples must be built so that no join of that kind happens, which is possible because many joins change nothing. Rules for drafters of san-02-01 to san-02-05:

- A word ending in **-aḥ, -āḥ, -iḥ, -uḥ** stands either last in the sentence (pausa) or before a word beginning with **k, kh, p, ph** (where the visarga stays: *devaḥ paśyati*; whitney1889 §170). Not before *t, c, ś, s* (→ *-s, -ś*), voiced sounds or vowels (→ *-o*, *-a*, *-ā*, *-r*).
- A word ending in a vowel stands before a word beginning with a consonant (no change), never before a vowel.
- Final **-m** before a consonant is written ṃ from san-02-02 on, with a one-line note pointing forward to san-02-06 (*grāmaṃ gacchati*). Before a vowel it stays m. This is the one join allowed early, because it appears in nearly every sentence with an object.
- Verb-final order keeps most finals at a pause anyway: *devaḥ ... gacchati* is avoided (→ *devo gacchati*); *gacchati devaḥ* or *grāmaṃ devaḥ paśyati* are fine.
- An attested example before its stage keeps its sandhi and carries a note that names the join as a preview ("written *devo* for *devaḥ* before *g*; see san-02-06"). It does not need `preview:` unless it uses an unintroduced gloss category.
- From san-02-06 on, constructed examples apply every join taught so far, and avoid joins not yet taught by the same means (word choice and order). From san-04-07 on, nothing is avoided.

### Segmentation and gloss labels

Leipzig rules (leipzig): `-` between morphemes, `.` for several meanings in one piece, grammatical labels in capitals (all in `glossary.json`), lexical meanings in lower case. Sanskrit-specific choices:

**Nouns and adjectives.**
- **Case and number fuse** in one ending: `dev-aḥ` `god-NOM.SG`. **Gender** is glossed only on adjectives, pronouns and participles (`kṛ-ta-m` `do-PST.PTCP-NOM.SG.N`) and in san-02-05; never on nouns otherwise.
- **Where to cut a vowel stem:** before the stem's final vowel, because that vowel changes through the paradigm and merges with the endings: `dev-aḥ`, `dev-ena`, `dev-āya` (a-stem *deva*); `sen-ā`, `sen-ayā` (*senā*); `agn-iḥ`, `agn-aye`, `agn-eḥ` (*agni*); `pit-ā`, `pit-aram`, `pit-rā`, `pit-uḥ` (*pitṛ*); `nad-ī`, `nad-yāḥ` (*nadī*). Tables in the lessons list the endings cut the same way, and say once that the a of the stem is "inside" the a-stem endings.
- **Consonant stems:** cut after the stem allomorph that the form uses: `rājān-am`, `rājñ-ā`, `rāja-bhiḥ`, `manas-ā`, `mano-bhiḥ`, `vāc-am`, `vāg-bhiḥ`. Where there is no ending to cut (NOM.SG of many consonant stems, NOM/ACC.SG of neuters) gloss the word whole: `rājā` `king.NOM.SG`, `vāk` `speech.NOM.SG`, `manaḥ` `mind.NOM.SG`, `nāma` `name.NOM.SG`.
- **Neuter NOM and ACC** are always identical; gloss by function in the sentence.
- **Case order** in every table and in prose lists: nominative, accusative, instrumental, dative, ablative, genitive, locative, vocative: the Indian order (the *vibhakti*s "first" to "seventh", with the vocative as a form of the first), used by whitney1889, macdonell1927, Wiktionary and the Heritage site. Columns: singular, dual, plural.
- The vocative is a separate row in tables though it is not a separate *vibhakti* in Pāṇini; say so in san-02-09.
- **Compounds:** members separated by `-`, each glossed in lower case, the ending on the last member: `rāja-putr-aḥ` `king-son-NOM.SG`. Members are in stem form (*rāja-* for *rājan*, *karma-* for *karman*, *mahā-* for *mahat*, *pitṛ-*): this is how they appear, and the note says what the full word is. The compound type (tatpuruṣa, bahuvrīhi, ...) is named in the note, never in the gloss. A bahuvrīhi takes the gender of the noun it describes; its last member's ending is glossed with that gender only if the lesson is about it. The negative prefix *a-*/*an-* is glossed `not` (`a-karmaṇ-i` `not-action-LOC.SG`).

**Pronouns** are glossed as fused wholes, since their forms are mostly suppletive: *aham* `1SG.NOM`, *mām* `1SG.ACC`, *me* `1SG.GEN` (enclitic; it also serves as dative), *tvam* `2SG.NOM`, *te* `2SG.GEN`, *vayam* `1PL.NOM`, *āvām* `1DU.NOM`. The demonstrative *sa/sā/tad* is `DEM` with case, number and gender: *saḥ* `DEM.NOM.SG.M` (pausa form in `morphemes` even where `translit` has *sa* before a consonant, whitney1889 §176a), *tat* `DEM.NOM.SG.N`, *tasya* `DEM.GEN.SG.M`. *eṣa/etad* and *ayam/idam* are glossed `this`, *asau/adas* `yonder`: `ayam` `this.NOM.SG.M`, `asau` `yonder.NOM.SG.M`. The relative *ya-* is `REL` (`yaḥ` `REL.NOM.SG.M`). The interrogative *ka-* is `who`/`what` (`kaḥ` `who.NOM.SG.M`, `kim` `what.NOM.SG.N`); *kim* opening a yes/no question is `Q`. Indefinites keep the particle as a separate word, as GRETIL prints it: *kaś cit* → `kaḥ cit` `who.NOM.SG.M INDF`; *kadā cana* `when INDF`. *bhavān* (stem *bhavat*) "you, sir", the polite address, is glossed `sir.NOM.SG.M` and takes a third-person verb; the note says "polite you". No POL label: Sanskrit has no honorific verb forms.

**Verbs.** Order of pieces: preverb(s) - augment - stem - (mood or tense marker) - ending.
- **Present, active, indicative** are unmarked. The present stem (root plus class sign) is one piece glossed with the root's meaning: `gaccha-ti` `go-3SG`, `bhava-ti` `be-3SG`, `naśya-ti` `perish-3SG`, `coraya-ti` `steal-3SG`; athematic `as-ti` `be-3SG`, `s-anti` `be-3PL`, `karo-ti` `do-3SG`, `kurv-anti` `do-3PL`, `yunak-ti` `join-3SG`. The class sign is never glossed (the class is in the vocab entry).
- **Person and number** fuse in one ending: `1SG 2SG 3SG 1DU 2DU 3DU 1PL 2PL 3PL`.
- **Middle** endings add `MID`: `labha-te` `get-3SG.MID`, `a-labha-ta` `PST-get-3SG.MID`. Verbs that are middle only (*labh*, *man*, *vṛt*, *bhāṣ*) are glossed MID like any other middle form; the note says "middle-only verb". There is no DEP label.
- **Passive:** `kri-ya-te` `do-PASS-3SG`. The passive always takes middle endings, so MID is not added. Agents in the instrumental.
- **Imperfect:** the augment is `PST`; no separate IPFV label (the imperfect is "augment + present stem + secondary ending"): `a-gaccha-t` `PST-go-3SG`, `āsīt` `be.PST.3SG` (fused: *a + as + īt*), `abravīt` → `a-bravī-t` `PST-say-3SG`.
- **Optative:** `bhav-e-t` `be-OPT-3SG` (thematic *-a-* + *-ī-* → *-e-*), `s-yā-t` `be-OPT-3SG`, `kur-yā-t` `do-OPT-3SG`, `labh-e-ta` `get-OPT-3SG.MID`.
- **Imperative:** `gaccha-tu` `go-IMP.3SG`, `gaccha-ta` `go-IMP.2PL`; forms with no separable ending whole: `gaccha` `go.IMP.2SG`, `kuru` `do.IMP.2SG`, `edhi` `be.IMP.2SG`. The 1st persons (*gacchāni*, *bhavāma*) are glossed IMP like the others; their origin in the old subjunctive is mentioned in san-07-10, where SBJV first appears.
- **Future:** `bhavi-ṣya-ti` `be-FUT-3SG`, `kari-ṣya-ti` `do-FUT-3SG`. **Periphrastic future** whole: `kartā` `do.FUT.3SG` (note: "periphrastic future, an agent noun used as a verb"). **Conditional:** `a-bhaviṣya-t` `PST-be.COND-3SG`.
- **Perfect:** the reduplicated stem is one piece with `.PRF`, the ending separate: `jagām-a` `go.PRF-3SG`, `uvāc-a` `say.PRF-3SG`, `babhūv-a` `be.PRF-3SG`, `cakr-e` `do.PRF-3SG.MID`, `āh-a` `say.PRF-3SG`. Reduplication is not glossed separately (no RED label). **Periphrastic perfect:** `cintay-ām ās-a` `think-PRF be.PRF-3SG`, with the note "periphrastic perfect" (GRETIL sometimes prints the two words joined: *cintayāmāsa*; space them).
- **Aorist:** `AOR` on the piece that carries it: root and a-aorists on the stem, `a-bhū-t` `PST-be.AOR-3SG`, `a-gam-a-t` `PST-go-AOR-3SG` (thematic a-aorist: the *-a-* is the aorist sign); sigmatic aorists on the sibilant, `a-kār-ṣ-īt` `PST-do-AOR-3SG`; where the sibilant has merged with the ending, fuse: `a-vadh-īḥ` `PST-kill-AOR.2SG` (*iṣ*-aorist; Rām 1.2.14). **Unaugmented aorist after mā** (the injunctive): no PST piece: `mā bhū-ḥ` `PROH be.AOR-2SG` (Bhg 2.47c). The term "injunctive" is given in san-04-19 and not used as a label.
- **Participles:** `ga-ta-ḥ` `go-PST.PTCP-NOM.SG.M`; `kṛ-tavān` `do-PST.PTCP.ACT.NOM.SG.M` (stem *kṛtavat*); present active `gacchant-am` `go.PRS.PTCP-ACC.SG.M`, NOM.SG whole `gacchan` `go.PRS.PTCP.NOM.SG.M`; middle `labha-mān-aḥ` `get-PRS.PTCP.MID-NOM.SG.M`; passive `han-ya-mān-e` `kill-PASS-PRS.PTCP-LOC.SG.N` (Bhg 2.20 *hanyamāne śarīre*); perfect `vidvān` `know.PRF.PTCP.NOM.SG.M`. The past participle in *-ta/-na* is passive for transitive verbs and active for intransitive ones; the translation shows which, the gloss does not.
- **Absolutive** (Indologists' term; also called gerund, whitney1889 §§989–995): glossed `CVB` (the Leipzig label for a converb): `ga-tvā` `go-CVB`, `tyak-tvā` `leave-CVB`, `bhū-tvā` `be-CVB`, `vi-hā-ya` `away-leave-CVB`, `ā-gam-ya` `hither-come-CVB`. Prose calls it "the absolutive" and defines it once as a converb.
- **Infinitive:** `gan-tum` `go-INF`, `śro-tum` `hear-INF`.
- **Gerundive:** `kar-tavya-m` `do-GDV-NOM.SG.N`, `kār-ya-ḥ` `do-GDV-NOM.SG.M`, `pūj-anīya-ḥ` `honour-GDV-NOM.SG.M`.
- **Secondary conjugations:** causative `kār-aya-ti` `do-CAUS-3SG` (the causative *-aya-* is glossed, unlike the identical class 10 sign, which is not: the note says why); desiderative whole stem `jigamiṣa-ti` `go.DESID-3SG`, desiderative adjectives `yuyuts-avaḥ` `fight.DESID-NOM.PL.M` (Bhg 1.1); intensive `INTS`, denominative `DENOM` on the stem in the same way.
- **Preverbs** (*upasarga*) are separate pieces glossed with a lower-case spatial word: `ā-gaccha-ti` `hither-go-3SG`, `ut-tiṣṭha-ti` `up-stand-3SG`, `pra-viśa-ti` `forth-enter-3SG`, `vi-hā-ya` `away-leave-CVB`. Use one stock gloss per preverb across the guide (list in san-04-04: *ati* `beyond`, *adhi* `over`, *anu* `after`, *antar* `between`, *apa* `away.from`, *api* `on`, *abhi* `towards`, *ava* `down`, *ā* `hither`, *ud* `up`, *upa* `near`, *ni* `down.into`, *nis* `out`, *parā* `away`, *pari* `around`, *pra* `forth`, *prati* `back`, *vi* `apart`, *sam* `together`) even where the compound verb's meaning has drifted; the translation carries the drift.

**Particles and indeclinables** are glossed in lower case: *na* `not`, *ca* `and`, *vā* `or`, *api* `also` (or `even`; `Q` when it opens a yes/no question; `INDF` after a question word), *iva* `like`, *hi* `for`, *tu* `but`, *atha* `then`, *tataḥ* `then` (literally "from that"), *evam* `thus`, *iti* `QUOT`, *eva* `EMPH`, *mā* `PROH`, *kim* `Q` (yes/no) or `what`. Postposed *ca ... ca* "both ... and" is glossed `and ... and`. Enclitics (*ca, vā, iva, eva, api, cit, te, me*) are separate words in all fields, as editions print them; `=` is not used.

**Names** keep a capital in `gloss` (`Nala-NOM.SG`, `Pārtha-VOC.SG`) and in English prose, lower case in `translit` and `morphemes`. Epithets are glossed literally where the lesson needs it (`dhanam-jay-a` `wealth.ACC-winner-VOC.SG`: the first member keeps its accusative ending, an *aluk* compound), otherwise as the name with a note ("Dhanaṃjaya, 'winner of wealth', a name of Arjuna").

### Citation forms and terms

- **Nouns** by stem with gender, as in mw1899 and Wiktionary: *deva* m. "god", *senā* f., *phala* n., *rājan* m., *manas* n., *vāc* f. Vocab line: `देव | deva | noun | god | m., a-stem; NOM.SG devaḥ`. Consonant and r-stems add the strong and weak stems: `राजन् | rājan | noun | king | m., n-stem; NOM.SG rājā, INS.SG rājñā`.
- **Verbs** by root, written with √ in prose (√gam), with class, voice and the 3SG present, as mw1899 lists them: `गम् | gam | verb | go | root, class 1, active; gacchati; PST.PTCP gata; CVB gatvā`. The present stem is not a headword. Roots are cited in the form mw1899 gives (*kṛ*, *bhū*, *dṛś*, *sthā*), not the Pāṇinian *dhātupāṭha* forms with markers (*ḍukṛñ*); san-07-11 explains the markers.
- **Adjectives** by masculine stem with feminine: `प्रिय | priya | adjective | dear | priya, f. priyā`.
- **Terms used in prose**, each defined at first use: root (*dhātu*), stem, ending, present class (numbers 1–10, with the Indian names *bhvādi* etc. given once in san-04-01), active and middle (*parasmaipada*, *ātmanepada* given once), guṇa, vṛddhi, sandhi, pausa, visarga, anusvāra, virāma, avagraha, augment, reduplication, absolutive, past participle, gerundive, preverb, and the compound names *tatpuruṣa*, *karmadhāraya*, *dvigu*, *dvandva*, *bahuvrīhi*, *avyayībhāva* (with English names: dependent, descriptive, numeral, copulative, possessive, adverbial). "Retroflex", not "cerebral" or "lingual" (those are named once as older terms).
