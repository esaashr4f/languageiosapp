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
