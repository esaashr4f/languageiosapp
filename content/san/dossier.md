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
| m̐ | ँ | U+0901 | candrabindu (nasalised semivowel in sandhi: *tāṃl lokān*, often printed *tām̐l lokān*). IAST m + U+0310 COMBINING CANDRABINDU; no precomposed form. Rare: use only when the edition has it. |
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

- **Final m before a consonant** is written ṃ (anusvāra), as GRETIL writes it (*enaṃ vetti*, *saṅgaṃ tyaktvā*), never the homorganic nasal (*enan vetti*), even though Pāṇini allows that too. Before a vowel and at a pause, m. Inside a word, follow the dictionary: a nasal before a stop is written as the stop's own nasal (*aṅga*, *pañca*, *kaṇṭha*, *anta*, *kampa*), before *ś ṣ s h* and *y r l v* as ṃ (*saṃsāra*, *vaṃśa*, *saṃyoga*, *siṃha*). Cologne MW writes some of these with ṃ (*saṃkalpa*) and Wiktionary with the nasal (*saṅkalpa*): follow mw1899 and do not make a point of it.
- **Capitals:** none in example fields (IAST has no case and Devanagari none). Names keep lower case in `translit` and `morphemes`; in `gloss` and English prose they get a capital (*nala* → `Nala`).
- **Doubled consonants after r** (*karmma*, *arttha*), common in older printing and manuscripts, are normalised to the dictionary spelling (*karma*, *artha*).
- Vedic accent marks (Devanagari U+0951, U+0952; IAST acute and grave) are stripped everywhere except in san-07-10.
- Punctuation in `translit`: | and || for daṇḍas in verse, as GRETIL; prose sentences may end with a full stop in `translit` and । in `orig`. Do not put the GRETIL verse labels (Bhg_02.047a) into example fields.
