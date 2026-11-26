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
- **Future:** `bhavi-ṣya-ti` `be-FUT-3SG`, `kari-ṣya-ti` `do-FUT-3SG`. **Periphrastic future** whole: `kartā` `do.FUT.3SG` (note: "periphrastic future, an agent noun used as a verb"). **Conditional:** `a-kariṣya-t` `PST-do.COND-3SG` (whitney1889 §940; the Appendix synopsis of √kṛ gives 1SG *akariṣyam*).
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

## 5. Major paradigms and where to check them

**How to check a form.** (1) Wiktionary through `python3 tools/wikt.py <Devanagari> Sanskrit`: nouns by stem (`देव`, `राजन्`, `मनस्`), verbs by the 3SG present (`गच्छति`, `लभते`, `करोति`). Tables give present, imperfect, imperative, optative and participles, with Vedic accents and footnoted Vedic variants: strip the accents, ignore footnoted forms. The tool does **not** print perfect, aorist, future or non-finite forms for a root (querying `कृ`, `गम्` returned nothing usable in this session). (2) For those, mw1899 (Cologne, `getword.php?key=<SLP1>`; e.g. `kf`, `gam`, `BU`, `vac`) lists each root's attested forms with their texts: pf., aor., fut., inf., ind.p. (absolutive), Pass. This session checked from mw1899: *babhūva, abhūt, bhaviṣyati, bhavitā, bhūtvā* (bhū); *cakāra, cakre, akārṣīt, kariṣyati, kartā, kartum, kṛtvā* (kṛ); *jagāma, agamat, gamiṣyati, gantā, gantum, gatvā, gamyate, jigamiṣati* (gam); *uvāca, ūce, ucyate, vakṣyati, vaktā, vaktum, uktvā* (vac); *hanti, ghnanti, jaghāna, hantum, hatvā* (han); *veda, vetti, avedīt* (vid); *tyaktum, atyākṣīt* (tyaj); *śrotum* (śru); *labhate, lebhe, labdhum, labdhvā* (labh). (3) whitney1889 for the system and the rule; its Appendix gives a synopsis of the whole conjugation of bhū and kṛ. Read forms from the Wikisource page scan, not from the archive.org OCR (which garbles diacritics). (4) Heritage site (heritage) declension and conjugation engines as a mechanical second check when Wiktionary and MW disagree; not run in this session.

**Where Wiktionary and the grammars differ** (seen this session): Wiktionary gives Vedic dual *-ā* beside *-au*, Vedic plural *-āsaḥ* and *-ebhiḥ*, *nadīḥ* nominative, *senā* instrumental: all footnoted, all Vedic. It gives *bhavathāt*-type 2SG imperatives (*bhavatāt*) unfootnoted: this "imperative in -tāt" is rare in Classical (whitney1889 §570) and should not appear in tables.

### Model paradigm 1: a-stem masculine *deva* "god" (Wiktionary देव; whitney1889 §§326–334, example §330)

| Case | Singular | Dual | Plural |
|---|---|---|---|
| NOM | devaḥ | devau | devāḥ |
| ACC | devam | devau | devān |
| INS | devena | devābhyām | devaiḥ |
| DAT | devāya | devābhyām | devebhyaḥ |
| ABL | devāt | devābhyām | devebhyaḥ |
| GEN | devasya | devayoḥ | devānām |
| LOC | deve | devayoḥ | deveṣu |
| VOC | deva | devau | devāḥ |

Neuter *phala* differs only in NOM/ACC/VOC: *phalam*, *phale*, *phalāni* (Wiktionary table for the neuter of देव checked: *devam, deve, devāni*). Feminine *senā* (Wiktionary सेना): *senā, senām, senayā, senāyai, senāyāḥ, senāyāḥ, senāyām, sene*; DU *sene, sene, senābhyām, senayoḥ*; PL *senāḥ, senāḥ, senābhiḥ, senābhyaḥ, senānām, senāsu*.

### Model paradigm 2: present active of class 1 *gam* "go" and middle of *labh* "get" (Wiktionary गच्छति, लभते)

| | active SG | DU | PL | middle SG | DU | PL |
|---|---|---|---|---|---|---|
| 3 | gacchati | gacchataḥ | gacchanti | labhate | labhete | labhante |
| 2 | gacchasi | gacchathaḥ | gacchatha | labhase | labhethe | labhadhve |
| 1 | gacchāmi | gacchāvaḥ | gacchāmaḥ | labhe | labhāvahe | labhāmahe |

Imperfect *agacchat, agacchatām, agacchan; agacchaḥ, agacchatam, agacchata; agaccham, agacchāva, agacchāma*; middle *alabhata ... alabhe*. Optative *gacchet ... gaccheyuḥ*; *labheta ... labheran*. Imperative *gacchatu, gacchantu, gaccha, gacchata, gacchāni*; *labhatām, labhasva*. Participles *gacchat*, *labhamāna*. Passive *gamyate*. All from the Wiktionary tables.

### Model paradigm 3: the personal pronouns (Wiktionary अहम्, त्वम्; whitney1889 §491)

| | 1SG | 1DU | 1PL | 2SG | 2DU | 2PL |
|---|---|---|---|---|---|---|
| NOM | aham | āvām | vayam | tvam | yuvām | yūyam |
| ACC | mām, mā | āvām, nau | asmān, naḥ | tvām, tvā | yuvām, vām | yuṣmān, vaḥ |
| INS | mayā | āvābhyām | asmābhiḥ | tvayā | yuvābhyām | yuṣmābhiḥ |
| DAT | mahyam, me | āvābhyām, nau | asmabhyam, naḥ | tubhyam, te | yuvābhyām, vām | yuṣmabhyam, vaḥ |
| ABL | mat, mattaḥ | āvābhyām | asmat, asmattaḥ | tvat, tvattaḥ | yuvābhyām | yuṣmat, yuṣmattaḥ |
| GEN | mama, me | āvayoḥ, nau | asmākam, naḥ | tava, te | yuvayoḥ, vām | yuṣmākam, vaḥ |
| LOC | mayi | āvayoḥ | asmāsu | tvayi | yuvayoḥ | yuṣmāsu |

The second form in a cell is the enclitic, which never stands first in its sentence or verse quarter.

### Model paradigm 4: the demonstrative *sa, sā, tad* (Wiktionary तद्; whitney1889 §495)

M: *saḥ, tam, tena, tasmai, tasmāt, tasya, tasmin*; DU *tau, tābhyām, tayoḥ*; PL *te, tān, taiḥ, tebhyaḥ, teṣām, teṣu*. F: *sā, tām, tayā, tasyai, tasyāḥ, tasyāḥ, tasyām*; DU *te, tābhyām, tayoḥ*; PL *tāḥ, tābhiḥ, tābhyaḥ, tāsām, tāsu*. N: *tat* (pausa; *tad* is the stem and the dictionary form), DU *te*, PL *tāni*, otherwise as M. *saḥ* drops its -ḥ before any consonant (*sa gacchati*), and before vowels behaves as -aḥ (*sa uvāca*; whitney1889 §176a). *eṣa/etad* inflects the same way on *eta-*.

### All topics, with model words

Section numbers for whitney1889 are those whose headings were found in this session (archive.org OCR of the 1896 issue, "copy A" text file; chapter ranges confirmed on the Wikisource contents page). The ranges for sandhi topics (§§125–138, 139–155, 164–178, 180–198, 202–213) were read from the first and last headings found and are approximate at their edges.

| Topic | Model words | whitney1889 | Check with |
|---|---|---|---|
| Alphabet, sounds | | §§1–18, 19–75 | |
| Vowel sandhi | | §§125–138 | heritage sandhi engine |
| Permitted finals, pausa | | §§139–155 (§122 heading "Permitted Finals") | |
| Final s and r (visarga) | | §§164–178 | |
| Final n, m | | §§202–213 | |
| n → ṇ, s → ṣ (internal) | | §§180–198 | |
| Guṇa and vṛddhi | | §§235–243 | |
| Uses of the cases | | §§266–305 | speijer1886 ch. III–VIII |
| a-stems (m. n.), ā-stems (f.) | deva, phala, senā, kanyā | §§326–334, 364 | wikt देव, सेना |
| i- and u-stems | agni, mati, guru, dhenu, vāri, madhu | §§335–346 (examples §339) | wikt अग्नि, मति, गुरु, धेनु |
| ī- and ū-stems | nadī, devī, vadhū; strī, śrī, dhī | §§347–366 (examples §364) | wikt नदी, वधू, स्त्री |
| ṛ-stems | pitṛ, mātṛ, dātṛ, svasṛ | §§369–376 (examples §373) | wikt पितृ, मातृ, दातृ |
| diphthong stems | go, nau, rai | §§360–363 (nau §361) | wikt गो |
| consonant root-stems | vāc, marut, diś, vidyut | §§383–410 | wikt वाच्, मरुत् |
| as-, is-, us-stems | manas, havis, cakṣus | §§411–416 (examples §414) | wikt मनस् |
| an-stems | rājan, ātman, nāman, karman, ahan | §§420–437 (examples §424) | wikt राजन्, आत्मन्, नामन्, कर्मन् |
| in-stems | balin, yogin | §§438–441 | wikt बलिन् |
| ant-, vant-, mant-stems; present participles | bhagavat, bhavat, dhīmat, gacchat | §§446–457 | wikt भगवत् |
| perfect participles in -vas | vidvas, tasthivas | §§458–462 | whitney1889 §458 table (seen) |
| comparison: -īyas, -iṣṭha; -tara, -tama | garīyas, śreyas; priyatara | §§463–474 | |
| irregular nouns | pums, strī, go, path, ahan, sakhi, pati, dyo, ap | scattered; see index | wikt पुंस्, स्त्री, गो, पथिन्, सखि, पति |
| Numerals | eka, dvi, tri, catur, pañcan | §§475–489 (inflection §482) | |
| Personal pronouns | aham, tvam | §491 | wikt अहम्, त्वम् |
| Demonstratives | sa, eṣa, ayam, asau | §§495–503 | wikt तद्, इदम्, अदस् |
| Interrogative, relative, indefinite | ka, kim, ya, kaś cit | §§504–513 | |
| Pronominal adjectives | sarva, anya, para, eka | §§522–526 | |
| Endings, modes, augment | | §§527–598 | |
| Thematic classes 1, 4, 6, 10 | bhū, gam, naś, tud, viś, cur | §§734–779 (class 6 example §752, class 4 example §760) | wikt भवति, गच्छति, नश्यति, चोरयति |
| Root class (2) | as, i, ad, han, brū, vid, duh | §§611–641 | wikt अस्ति, एति, ब्रवीति |
| Reduplicating class (3) | dā, dhā, hu, bhī, bhṛ | §§642–682 | wikt ददाति |
| Nasal class (7) | yuj, rudh, bhid | §§683–696 | wikt युनक्ति |
| nu-, u-classes (5, 8) | śak, āp, su, tan, kṛ (§714) | §§697–716 | wikt करोति |
| nā-class (9) | krī, jñā, grah, aś | §§717–733 | wikt क्रीणाति |
| Passive | kriyate, gamyate, ucyate, dīyate | §§768–774, 998 | wikt tables (passive column) |
| Perfect | jagāma, uvāca, babhūva, cakāra, āha, veda | §§780–823 | mw1899 per root |
| Aorist (7 types) and precative | abhūt, agamat, akārṣīt, avadhīt; bhūyāt | §§824–930 | mw1899 per root |
| Futures and conditional | bhaviṣyati, kartā; akariṣyat | §§931–950 | mw1899; whitney1889 Appendix |
| Past participle -ta/-na; -tavat | gata, kṛta, bhinna; kṛtavat | §§952–960 | mw1899 |
| Gerundives | kartavya, kārya, karaṇīya | §§961–967 | mw1899 |
| Infinitive | gantum, kartum | §§968–988 | mw1899 |
| Absolutive (gerund) | gatvā, kṛtvā; āgamya, vihāya | §§989–995 | mw1899 |
| Intensive, desiderative, causative, denominative | jaṅgamyate; jigamiṣati; kārayati; | §§1000–1068 (§1000, §1026, §1041, §1053) | wikt कारयति; mw1899 |
| Periphrastic perfect; preverbs | kārayām āsa; prefix list | §§1070–1095 (§1077, §1081) | |
| Indeclinables | | §§1096–1135 | |
| Primary and secondary derivation | -ana, -ti, -tṛ; -ya, -tva, -tā, vṛddhi derivatives | §§1136–1245 | |
| Compounds | dvandva §1252; tatpuruṣa §1264; karmadhāraya §1279; bahuvrīhi §1293; avyayībhāva §§1311–1313 | §§1246–1316 | |

Syntax: speijer1886 is the main source (cases ch. III–VIII; absolute locative and genitive §§365–370, as already noted in sources.json); macdonell1927 ch. VII (Syntax) is the short check. Metre: macdonell1927 Appendix II.

**Syllabus checked against:** the table of contents of whitney1889 (Wikisource, opened) and the chapter list of macdonell1927 (archive.org OCR, opened). Every chapter of Whitney maps to lessons: Alphabet and Sounds → part 1; Euphonic Combination → san-02-06, san-03-07, san-04-07, san-05-07 and san-03-11 (guṇa, vṛddhi); Declension and Nouns → part 3 and san-05-01; Numerals → san-05-05; Pronouns → san-03-08, san-03-09, san-03-18, san-05-02, san-06-01, san-06-02; Conjugation and the Present System → san-04-01 to san-04-12; Perfect → san-04-18; Aorist and precative → san-04-19, san-07-06; Futures and conditional → san-04-17, san-06-06; Verbal adjectives and nouns → san-04-13, san-04-15, san-04-16, san-04-20, san-06-07; Secondary conjugation → san-04-14, san-07-01 to san-07-03; Periphrastic and compound conjugation → san-04-04, san-07-01; Indeclinables → san-05-03, san-05-04; Derivation → san-07-04, san-07-05; Compounds → san-05-08 to san-05-12; Appendix (accent) → san-07-10. Macdonell's extra chapter, Syntax, is spread over parts 3 to 6 as each construction is taught, and his appendices on metre and Vedic are san-07-07 and san-07-10. Three gaps found and fixed in syllabus.json in this session: the perfect participle (*vidvān*, needed for the Hitopadeśa reading) added to san-04-18; the polite *bhavān* added to san-03-17; the reflexive *ātman*, *svayam* and *sva* added to san-03-16 and san-05-02; the possessive adjectives *madīya*, *māmaka* (needed for Bhg 1.1) added to san-07-05. The guide covers less than Whitney on: Vedic forms (one lesson), accent (only in san-07-10), the rarer aorist types and the intensive (recognition only), and the adverbial gerund in *-am* (mentioned in san-07-06).

## 6. Points of scholarly disagreement or uncertainty

Say so in the lesson when one of these comes up.

1. **Dates.** Pāṇini's date is not known. macdonell1927 (Introduction, opened) argues for a date after Alexander's invasion of 327 BC from Pāṇini's word *yavanānī* "Greek writing"; others place him in the 5th or 4th century BC (cardona1997, not consulted). The guide says "around the 4th century BC, perhaps earlier". The epics grew over centuries (conventionally c. 400 BC to AD 400); the Gītā's date inside that span is debated. Give ranges, never single dates.
2. **Roots: *kṛ* or *kar*?** The Indian grammarians, and this guide, state roots in their weakest form (*kṛ*, *bhṛ*, *vṛdh*) and derive *karoti*, *bharati*, *vardhate* by guṇa. Historically the full forms are older and *ṛ* is a reduction of *ar* (Indo-European ablaut); many European grammarians therefore start from *kar*, *bhar* (whitney1889 §237, which itself follows the ṛ-form). Teach guṇa and vṛddhi as "raising" because it predicts forms well; say once in san-03-11 that the history runs the other way.
3. **What the past tenses mean.** Pāṇini assigns the imperfect to the past "not of today", the perfect to the past "not witnessed by the speaker" and the aorist to the recent past. whitney1889 §821a: "there is no evidence of its [the perfect's] being either exclusively or distinctively so employed at any period"; in the later language the perfect is "simply a preterit" (§821b), the imperfect "the tense of narration ... simple past time" (§779), and the aorist's "have done" value (§928) is clear only in the Brāhmaṇas and Veda (§929). Teach: in Classical texts imperfect, perfect and aorist all narrate the past; the epics prefer the perfect; later prose prefers the past participle. State the Pāṇinian rule as the grammarians' rule, not as usage.
4. **Pronunciation.** The palatals as stops or affricates (whitney1889 §44), the nature of anusvāra ("discordance of opinion among both the Hindu phonetists", §71), the vowel *ṛ*, and the quality of short *a* (§21) are reconstructions from the Indian phonetic treatises; recitation traditions differ by region. Say "the old phoneticians describe ..., today one says ...".
5. **Origin of the retroflexes.** Mostly from dentals after *ṣ*, *r* inside Indo-Aryan, "but also in part occurring in words that have no traceable Indo-European connection, and are perhaps derived from the aboriginal languages of India" (whitney1889 §46). Influence from Dravidian or other languages is widely held and debated: say "probably in part", with no firm claim.
6. **Epic forms: errors or older usage?** The *ārṣa* forms of the epics (section 1) are treated by the tradition as licensed by the seers' authority and by modern scholars as a looser, partly older, partly popular norm. The guide describes them, labels them, and does not call them mistakes.
7. **Was Classical Sanskrit spoken?** It was used for learned debate, teaching and court life, and is spoken in some circles today; whether and when it was anyone's first language is debated. The guide says this in san-00-01 without a firm answer (no source consulted: mark the lesson's claim `uncertain`).
8. **Text and numbering.** Critical editions (bori, ramayana-ce) differ from the older vulgate editions the dictionaries cite. mw1899 cites the Nala story as "Nal." by the vulgate's cantos (the 26 cantos Lanman and other readers print) and the Mahābhārata by the Calcutta or Bombay edition: the same verse has different numbers. The Gītā's 700 verses are numbered the same in both. Cite by the critical edition (MBh 3.50.1) and give the vulgate reference in a note where a reader may look it up in a reader or in mw1899 (vulgate numbers from lanman1884 not yet checked: `unverified`).
9. **Terms.** The *-tvā/-ya* form is "gerund" (whitney1889, macdonell1927), "absolutive" (most current teaching), "converb" (typology). The *-tavya/-anīya/-ya* form is "gerundive" or "future passive participle". The guide uses absolutive and gerundive and names the others once.

## 7. Text corpora for attested examples

- **gretil** (Göttingen): the main source of quoted text. Files opened and searched in this session: the Bhagavad Gītā (`1_sanskr/2_epic/mbh/ext/bhgce__u.htm`, BORI text with MBh numbering in brackets: `Bhg_02.047a [=MBh_06,024.047a]`); Mahābhārata book 3 (`1_sanskr/2_epic/mbh/mbh_03_u.htm`; lines labelled `03,050.001a`; starred lines such as `03,050.001d*0209_01` are passages the critical edition rejects to its apparatus: never quote them as the text); Rāmāyaṇa critical edition (`corpustei/transformations/plaintext/sa_rAmAyaNa.txt`, labels `R_1,002.014`); Hitopadeśa (`corpustei/sa_nArAyaNa-hitopadeza.xml`, input by J. Brzezinski, edition not named, hyphens inside compounds, labels `Hit_0.6`); Raghuvaṃśa (`corpustei/sa_kAlidAsa-raghuvaMza.xml`, based on A. Scharpé's Kālidāsa Lexicon, Brugge 1964, with variants). The files are CC BY-NC-SA or "provided in good faith": quote short passages with a citation; never bundle whole files.
- **Known e-text errors seen in this session** (check any quoted line letter by letter): Hitopadeśa 0.6 *pātratvāt dhanam* where sandhi requires *pātratvād dhanam*, 0.7 *hāsyaya* for *hāsyāya*; Raghuvaṃśa later in canto 1 has *bhabhūva*, *tābyho*, *dudhoha* (for *babhūva*, *tābhyo*, *dudoha*). Correct them in the guide and say so in the note ("GRETIL e-text reads X").
- **dcs** (Digital Corpus of Sanskrit): every sentence split into words, lemmatised and tagged. Use it to check how a line is split, to find attested uses of a form, and for word frequencies when choosing vocabulary (prefer the most frequent lemmas in parts 2 to 4). Reachable; no queries run in this session.
- **heritage**: segmenter for a sandhi-joined line (gives the possible splits); declension and conjugation engines.
- **mw1899** gives text references for meanings and forms ("MBh.", "R.", "Hit.", "Nal.", "Kum."), which lead to attested examples.
- **Readers:** lanman1884 (Nala, Hitopadeśa selections, Manu, Vedic hymns, with notes and a vocabulary) and perry1885 (graded exercises) are public domain on archive.org; their texts are vulgate, not critical.

Cite attested lines as work, book.chapter.verse and pāda letter where useful: `Bhagavad Gītā 2.47a`, `Mahābhārata 3.50.1a (BORI)`, `Rāmāyaṇa 1.2.14 (critical ed.)`, `Hitopadeśa, introductory verse 6`, `Raghuvaṃśa 1.1`. Translations are always our own.

### Part 8: the graded readings, with checks

| Lesson | Passage | Source file | Check in this session |
|---|---|---|---|
| san-08-01 | Hitopadeśa, introductory verses 3–6 (*ajarāmaravat prājño ...*, *vidyā dadāti vinayaṃ ...*) and the start of the frame story (*asti bhāgīrathītīre pāṭaliputranāmadheyaṃ nagaram ...*) | gretil Hitopadeśa | opened; verses 3–6 and frame opening read; e-text errors noted above |
| san-08-02 | Mahābhārata 3.50.1–10, the opening of the Nala story (*āsīd rājā nalo nāma vīrasenasuto balī*) | gretil MBh 3 | opened; 3.50.1 and 3.50.10 read |
| san-08-03 | Mahābhārata 3.50.17–27, Nala and the swan | gretil MBh 3 | opened; 3.50.17 and 3.50.27 read (*bhavethā*, epic middle) |
| san-08-04 | Rāmāyaṇa 1.2.9–15, the hunter, the crane and the first śloka (*mā niṣāda pratiṣṭhāṃ tvam agamaḥ śāśvatīḥ samāḥ*, 1.2.14) | gretil Rāmāyaṇa | opened; 1.2.9–15 read. The śloka itself is 1.2.14 in this edition, not 1.2.15 |
| san-08-05 | Bhagavad Gītā 2.19–22 (the self that is not slain; the worn-out clothes) | gretil Bhg | opened; all four verses read; 2.20 and 2.22 are in triṣṭubh (11-syllable) metre, the others śloka |
| san-08-06 | Kālidāsa, Raghuvaṃśa 1.1–4 (*vāgarthāv iva saṃpṛktau ...*) | gretil Raghuvaṃśa | opened; verses 1–4 read; check against a second edition before drafting (`unverified` beyond the e-text) |
| san-08-07 | **Capstone:** Bhagavad Gītā 1.1 and 2.47–48 | gretil Bhg | opened; all three verses read |

**Capstone decision.** Candidates considered: the opening of the Nala story (the traditional first reading, but its fame is as a teaching text, and it already serves as readings 2 and 3); the first śloka of the Rāmāyaṇa (famous, but one verse inside a narrative that is reading 4); the Hitopadeśa opening (reading 1, the easiest); the Gītā. The capstone is **Bhagavad Gītā 1.1 and 2.47–48**: the opening question of the most widely read Sanskrit text and its most quoted teaching, on acting without attachment to the fruits of action (*karmaṇy evādhikāras te mā phaleṣu kadā cana*, also the guide's sample sentence: the learner meets it in meta and reads it in full at the end). It is within reach because every form in it is taught by the end of part 7:

- 1.1 *dharmakṣetre kurukṣetre samavetā yuyutsavaḥ / māmakāḥ pāṇḍavāś caiva kim akurvata saṃjaya*: locative compounds (san-05-08), the past participle of *sam-ava-√i* (san-04-13), the desiderative adjective *yuyutsu* (san-07-02), the possessive *māmaka* (san-07-05), the vṛddhi derivative *pāṇḍava* (san-07-05), *ca eva* → *caiva* (san-03-07), the middle imperfect 3PL of *kṛ* (san-04-11), the vocative.
- 2.47 adds *mā* + unaugmented aorist *bhūḥ* (san-04-19), *mā* with no verb, the imperative *astu* (san-04-08), the long compound *karmaphalahetuḥ* (san-05-12), *akarmaṇi* (negative a-), avagraha (*saṅgo 'stv*).
- 2.48 adds the imperative *kuru*, the absolutives *tyaktvā* and *bhūtvā* (san-04-15), the dvandva in the locative dual *siddhyasiddhyoḥ* (san-05-10), the secondary noun *samatvam* (san-07-05), and the passive *ucyate* of *vac* with its weak root form (san-04-14).

Fame of the verses is from general knowledge (Gītā 2.47 is the verse most often quoted), not from a source opened here.

## 8. Notes for drafters

- British spelling; second person; short sentences; one idea per paragraph. No "simply", no "just" as filler.
- **The organising idea** (meta `organising_idea`): root → stem (with a vowel grade) → ending, then sandhi joins everything. Return to it in every lesson of parts 3 to 7: name the root, say which grade the stem has and why, then show the join.
- **Why before how.** Most Sanskrit irregularity has a reason the learner can use: guṇa/vṛddhi and strong/weak stems (accent shift in the parent language; whitney1889 §238 "connection with an accent on the increased syllable"); the n → ṇ and s → ṣ rules (retroflexion after r, ṛ, ṣ and after i, u, k, r); the visarga rules (final *s* in different surroundings); suppletion (*gam/gacch*, *dṛś/paś*, *brū/vac*, *as/bhū*). Historical claims beyond Whitney's need a source; otherwise say "the reason is not certain".
- **Constructed examples** use only words introduced in a `:::vocab` block in this lesson or earlier and only grammar introduced; check every form (section 5); obey the sandhi stage (section 4). Prefer short prose sentences in the style of the Hitopadeśa over invented verse.
- **Attested examples** are preferred wherever a short line at the right level exists. Good mines for early parts: Hitopadeśa verses and frame prose, Nala, the Gītā, Manusmṛti maxims. An attested line that uses something not yet taught carries `preview:` for any unintroduced gloss label and a note.
- **Dictionary look-up habits to teach** (san-01-09, san-04-01): mw1899 is ordered by the Devanagari alphabet (section 2), verbs are under the root, and compounds under their first member.
- **Typing searches:** Cologne and Heritage take SLP1 or Harvard-Kyoto (SLP1: `A` = ā, `f` = ṛ, `S` = ś, `z` = ṣ, `M` = ṃ, `H` = ḥ, `kz` = kṣ, aspirates by capitals: `K` = kh, `B` = bh). Never paste these into content.
- **Vocabulary:** 15 to 30 words per lesson, chosen by frequency (dcs) and by need. The core list (800 to 1,500 words) is to be built from the lessons, as for Latin; no frequency list was downloaded in this session.
- **Connections** for this reader (keep them short and checked):
  - **Spanish and French:** Sanskrit and Latin are both Indo-European, so many basic words are cognate: *pitṛ* (nom. *pitā*) ~ *padre*, *père*; *mātṛ* ~ *madre*, *mère*; *nāman* ~ *nombre*, *nom*; *dvi-* ~ *dos*, *deux*; *trayaḥ* ~ *tres*, *trois*; *asti* ~ *es*, *est*; *deva* ~ *dios*, *dieu* (via Latin *deus*, same root). The case system of Latin is the closest European parallel. Check each pair against Wiktionary etymologies before printing (`unverified` as listed here).
  - **Japanese and Korean:** verb-final order, postposed case marking (Sanskrit endings do the work of Japanese particles *ga, o, ni, de, kara, no*) and freely dropped pronouns are shared typological traits, not inherited ones. Buddhist vocabulary entered both languages from Sanskrit through Chinese; the claim that the Japanese kana order (a i u e o; k s t n h m y r w) follows the Indian phonetic order is widely repeated (`unverified`: Wikipedia was rate-limited in this session; check before using).
  - **Arabic:** both grammars are built on roots, but differently: an Arabic root is a set of consonants slotted into vowel patterns, a Sanskrit root is a syllable whose vowel is graded (guṇa, vṛddhi) and to which suffixes are added. Both have a dual. Arabic's three-case core (-u, -a, -i) can be compared with Sanskrit's eight cases.
  - **Hindi-Urdu (`hin`), Bengali (`ben`), Pali (`pli`):** Hindi and Bengali descend from Middle Indo-Aryan dialects related to Sanskrit, and take learned words (*tatsama*) unchanged from it; Pali is a Middle Indo-Aryan language. Devanagari is shared with Hindi; the inherent-a rule differs (Hindi drops final and some medial a). Tamil and Telugu are Dravidian but full of Sanskrit loans (macdonell1927 ch. I §2).
  - **Ancient Greek (`grc`):** the closest structural match: augment, reduplicated perfect, aorist, middle voice, optative, dual. Latin (`lat`): case functions, gerundive.

## 9. Open items

- Everything marked `unverified` above: Spanish/French cognate pairs (check etymologies), the kana-order claim, vulgate Nala numbering, a second edition for Raghuvaṃśa 1.1–4 and for the Hitopadeśa text.
- Whitney section numbers were read from OCR headings; before citing a section in a lesson, open it on Wikisource (Page namespace, `Sanskrit_Grammar_by_Whitney_p1.djvu/N`; the API was rate-limited late in this session).
- Not consulted (in copyright): coulson1976, goldman2004, ruppel2017, burrow1955, cardona1997, mayrhofer1986. Anything in a lesson resting on them alone is `unverified`.
- The Heritage engines and the DCS were reachable but not queried. The first drafter of part 3 should run a few Heritage declensions to calibrate them against Wiktionary.
- Rendering of Devanagari conjuncts and of virāma before a space on the owner's iPhone has not been checked; record it in `docs/script-rendering.md` when it is.


## Notes from drafting parts 0 and 1 (2026-11-26)

- Introduce *deva* in san-02-01 (shown in san-00-03, not in vocab). Define "pausa" at first use in part 2 (by san-02-06 at the latest); vocab notes already use the word.
- The joined Indian printing is shown in prose only, never in example fields. Whitney's ç, āi, āu, ṁ are written ś, ai, au, ṃ; never curly quotes for avagraha.
- Dictionary order follows the sound grid in roman letters too (all k-words, including kṣ, before kh); where Monier-Williams files ṃ and ḥ is not yet checked.
- san-00-01 is labelled uncertain (whether Classical Sanskrit was anyone's first language). 


## Notes from drafting part 2 (2026-11-26)

- Correction to §4: editions (and GRETIL) write visarga before ś and s (Whitney §172); from san-02-06 examples write -ḥ before sibilants (vīrāḥ stha, devaḥ smarati). Before san-02-06, -ḥ only at the end or before k, kh, p, ph.
- Nouns carry gender in glosses only from san-02-05 (dvau `two.ACC.DU` before that). Particles and interjections glossed in lower case (bhoḥ `hey`, he `oh`); bhoḥ in pausa form in morphemes.
- Introduced early with pointers to part 4: jñā (jānāti), śru (śṛṇoti) in san-02-09; √as with weak stem s- in san-02-07; class-10 pūj, cint, kath. "Ask" entered as prach (Monier-Williams).
- Avoided until san-03-01 (n → ṇ): neuter plurals of stems with r or ṣ. Accusative plural -ān used only before p, k or vowels. Quotations with iti end in -ḥ or -m until san-03-07.
- Attested lines used: ahiṃsā paramo dharmaḥ (Hitopadeśa 1, prose after verse 1.64) in 02-07 and the 02-10 review; MBh 3.50.1 (also in san-00-03). Hitopadeśa prose is cited as "prose after verse X".


## Notes from verifying parts 0–2 (2026-11-26)

- Whitney's Introduction (p. xiv): the classical sound form "never can have been a truly vernacular and living one": cited as his view in san-00-01.
- Visarga before ś, ṣ, s is correct at every stage (Whitney §172). Before other voiced sounds and m, -aḥ changes (§175a): early prose and exercises must respect this too, not only examples.
- Whitney section numbers in the archive.org OCR are often misread (§65 as 66, §67 as 87, §268 as 2368): check the paragraph text, not just the number.
- GRETIL files used: corpustei/sa_manusmRti.xml (Manu 1.108, 8.15); corpustei/sa_taittirIyopaniSad-zaMkarabhASya.xml (TaittU 1.11.1).


## Notes from drafting part 3 (2026-11-26)

- Gloss English with underscores, not hyphens (well_being): hyphens break the linter's morpheme count.
- dyo is entered as div (f., NOM dyauḥ), following Wiktionary's द्यु table. puṃs (not pums) per Monier-Williams and Wiktionary.
- Introduced early with pointers to part 4 (do not re-list): dā (class 3), kṛt, sidh, tras, muc, spṛh, kup, druh, yāc, bhakṣ, sru, sṛ, dhṛ, pāl, puṣ, arh, taḍ, bhūṣ.
- Final -t stands only before k, kh, p, ph, t, th, s or at the end; final -n after a long vowel mostly before vowels, k, p or at the end (a few answers before v, r, which Whitney §§202–208 allows). Vowel sandhi fully applied from san-03-07 on, including iti joins.
- Consonant-stem nominatives without an ending glossed whole (rājā, manaḥ, bhagavān, pumān, gām). Hitopadeśa saṅgama kept as spelt; MBh saṃgama. √nam with the dative. Class-10 vowel grades given by example only (san-03-11).
- Whitney section numbers were corrected from the OCR by sequence (e.g. §296, §375): spot-check against page scans.
