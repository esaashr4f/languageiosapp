---
id: san-01-07
lang: san
part: 1
order: 7
title: "Devanagari III: virāma and conjunct consonants"
point: Kill the inherent a with virāma and read the common stacked and joined consonant clusters
requires: [san-01-06]
introduces: []
confidence: verified
sources: [whitney1889, macdonell1927, mw1899, wiktionary, unicode]
---

## The idea

Every consonant letter carries an *a*. So how do you write a consonant with no vowel after it? Sanskrit needs this in two places: at the end of a word that ends in a consonant, such as *karman* "action", and inside a cluster of consonants, such as the *tr* of *putra* "son".

Devanagari has two answers, one for each place.

At the end of a word, a small slanting stroke below the letter, the **virāma**, removes the *a*: क *ka*, but क् *k*. The name means "rest, stop" (Whitney §11). The Unicode Standard calls it the "vowel omission sign" and a consonant carrying it a "dead consonant".

Inside a cluster, the consonants are fused into one compound letter, a **conjunct**. This follows from the syllable principle of san-01-05: Whitney (§9B) says that when several consonants precede a vowel in one syllable, "their characters must be combined into a single compound character". The cluster and its vowel form one written unit.

## How it is built

**Step 1: virāma at the end.** Write the last consonant with the stroke below: कर्मन् *karman*, आत्मन् *ātman*. In Indian writing, where words run together, virāma is needed only before a pause (§11a). This guide also uses it before every space (san-01-09).

**Step 2: the basic method for conjuncts.** Macdonell (§11) states it: drop the vertical and horizontal strokes of every consonant except the last. What is left of each earlier consonant is a **half form**, which leans against the next letter (Whitney §12a). स *sa* + त *ta* gives स्त *sta*: the loop of स without its vertical stroke, then the full त. In शब्द *śabda*, ब loses its vertical stroke and leans against द: ब्द *bda*. Read a cluster from left to right.

**Step 3: stacking.** Some letters have no vertical stroke to drop. They are written one above the other instead, the first on top (§12b): द्द *dda*, ञ्ज *ñja*. Fonts differ in which pairs they stack (§15a), so the same cluster may appear side by side in one book and stacked in another.

**Step 4: r is special** (§14).

- *r* before a consonant becomes a small hook above the following letter, called *repha*: र्म *rma* in धर्म *dharma*, र्थ *rtha* in अर्थ *artha*. The hook is written above the consonant that comes *after* the *r* in speech, and to the right of any other marks above it (§14b).
- *r* after a consonant becomes a short slanting stroke at the foot of the letter: प्र *pra*, ग्र *gra*. With त, श and द the letter also changes shape: त्र *tra*, श्र *śra*, द्र *dra* (§14c).

**Step 5: the shapes you must learn by sight.** Two conjuncts hide their parts completely (Whitney §13g): क्ष *kṣa* (क + ष) and ज्ञ *jña* (ज + ञ). A few others are disguised (§13): क्त *kta*, त्त *tta*, द्य *dya*, द्व *dva*, and श, which often takes a different shape before a consonant: श्च *śca*, श्व *śva*.

**Step 6: three or more consonants.** The same rules apply in sequence (§15): न्त्र *ntra* in मन्त्र *mantra*, त्त्व *ttva* in सत्त्व *sattva*.

**Step 7: typing.** Type each consonant with a virāma between: त + ् + र gives त्र. The font decides how the cluster looks. Never search for a ready-made "conjunct character"; there is none for Sanskrit.

## Examples

:::example
orig: कर्मन्, आत्मन्
translit: karman, ātman
morphemes: karman ātman
gloss: action self
translation: action, work; breath, soul, self
note: [kɐɾmɐn̪] and [aːt̪mɐn̪]. Final n with virāma. karman also has the repha: र्म rma. ātman has the cluster त्म tma.
source: mw1899
confidence: verified
:::

:::example
orig: वाक्
translit: vāk
morphemes: vāk
gloss: speech
translation: speech, voice, language
note: [ʋaːk]. The dictionary stem is vāc. No palatal can end a word (Whitney §43), so the word is written with k and virāma at a pause.
source: mw1899
confidence: verified
:::

:::example
orig: पुत्र, क्षेत्र
translit: putra, kṣetra
morphemes: putra kṣetra
gloss: son field
translation: son; field, land
note: [put̪ɾɐ] and [kʂeːt̪ɾɐ]. त्र tra, with r as a stroke at the foot; क्ष kṣa, whose parts cannot be seen.
source: mw1899
confidence: verified
:::

:::example
orig: धर्म, अर्थ
translit: dharma, artha
morphemes: dharma artha
gloss: law wealth
translation: law, duty, right conduct; aim, meaning, wealth
note: [d̪ʱɐɾmɐ] and [ɐɾt̪ʰɐ]. The repha sits on the letter after the r.
source: mw1899
confidence: verified
:::

:::example
orig: शब्द
translit: śabda
morphemes: śabda
gloss: sound
translation: sound, voice; word
note: [ɕɐbd̪ɐ]. Half ब, full द: side by side.
source: mw1899
confidence: verified
:::

:::example
orig: ज्ञान
translit: jñāna
morphemes: jñāna
gloss: knowledge
translation: knowing, knowledge
note: [d͡ʑɲaːn̪ɐ]. ज्ञ jña. Hindi says the same word [ɡjä̃ːn] (Wiktionary), which is why it is often spelt "gyan".
source: mw1899; wiktionary
confidence: verified
:::

:::example
orig: श्री
translit: śrī
morphemes: śrī
gloss: splendour
translation: splendour, beauty, prosperity; also a title of honour
note: [ɕɾiː]. श्र śra with the long ī sign after it.
source: mw1899
confidence: verified
:::

:::example
orig: सत्य, विद्या
translit: satya, vidyā
morphemes: satya vidyā
gloss: true knowledge
translation: true, real; knowledge, learning
note: [sɐt̪jɐ] and [ʋid̪jaː]. Half त before य; द्य dya, where य is reduced.
source: mw1899
confidence: verified
:::

:::example
orig: मन्त्र, सत्त्व
translit: mantra, sattva
morphemes: mantra sattva
gloss: sacred.text being
translation: sacred formula, hymn; being, essence, goodness
note: [mɐn̪t̪ɾɐ] and [sɐt̪t̪ʋɐ]. Three consonants in one conjunct: न्त्र ntra and त्त्व ttva.
source: mw1899
confidence: verified
:::

:::example
orig: तृष्णा
translit: tṛṣṇā
morphemes: tṛṣṇā
gloss: thirst
translation: thirst; craving
note: [t̪r̩ʂɳaː]. The vowel sign ृ under त, then ष्ण ṣṇa: a retroflex sibilant with a retroflex nasal.
source: mw1899
confidence: verified
:::

## Watch out

**The repha is read before its letter.** In धर्म the hook stands on म, but you say *r* before *m*: *dharma*, not *dhamra*.

**A subscript stroke is r after, a hook above is r before.** प्र is *pra*; र्प is *rpa*. Check which one you are looking at.

**The script's syllables are not the metre's.** The script writes *putra* as पु + त्र, as if the syllables were *pu-tra*. For weight, though, what counts is that two consonants follow the *u*: the first syllable is heavy (san-01-02).

**Virāma inside a word is rare.** Whitney (§11a) notes that scribes and printers use it occasionally to avoid an awkward cluster, as in लिड्भिः. Normally, a virāma means the end of a word.

**Fonts disagree.** The same cluster can be printed in two or three ways. Whitney (§15a) says that books "differ from one another more in their management of consonant combinations than in any other respect". When unsure, break the cluster into its consonants and read them in order.

## Reference table

:::table
caption: Conjuncts that do not follow the basic method, or are easy to misread
confidence: verified
source: whitney1889 §§11–15; macdonell1927 §§11–12; meanings mw1899
| Conjunct | Parts | IAST | Example |
|---|---|---|---|
| क्ष | क + ष | kṣa | क्षेत्र kṣetra |
| ज्ञ | ज + ञ | jña | ज्ञान jñāna |
| त्र | त + र | tra | पुत्र putra |
| श्र | श + र | śra | श्री śrī |
| द्र | द + र | dra | भद्र bhadra "fortunate" |
| र्म | र + म | rma | धर्म dharma |
| क्त | क + त | kta | भक्त bhakta "assigned; devoted" |
| त्त | त + त | tta | सत्त्व sattva |
| द्य | द + य | dya | विद्या vidyā |
| द्व | द + व | dva | द्वार dvāra "door" |
| श्च | श + च | śca | पश्चात् paścāt "behind" |
| श्व | श + व | śva | अश्व aśva |
:::

## New words

:::vocab
कर्मन् | karman | noun | action, work, deed | n., an-stem; from √kṛ
आत्मन् | ātman | noun | breath; soul, self | m., an-stem
वाच् | vāc | noun | speech, voice, language | f., consonant stem; pausa vāk
क्षेत्र | kṣetra | noun | field, land | n., a-stem
धर्म | dharma | noun | law, duty, right conduct | m., a-stem
अर्थ | artha | noun | aim, purpose, meaning; wealth | m., a-stem
शब्द | śabda | noun | sound, voice; word | m., a-stem
ज्ञान | jñāna | noun | knowledge | n., a-stem; from √jñā
श्री | śrī | noun | splendour, beauty, prosperity | f., ī-stem
सत्य | satya | adjective | true, real | satya, f. satyā
विद्या | vidyā | noun | knowledge, learning | f., ā-stem
मन्त्र | mantra | noun | sacred formula, hymn; counsel | m., a-stem
सत्त्व | sattva | noun | being, essence; goodness | n., a-stem
तृष्णा | tṛṣṇā | noun | thirst, craving | f., ā-stem
:::

## Exercises

1. Transliterate: धर्म, पुत्र, ज्ञान, आत्मन्.
2. Write in Devanagari: *artha*, *satya*, *mantra*, *kṣetra*.
3. Why does कर्मन् end with a virāma, when the same consonant in कर्मणि *karmaṇi* (san-00-02) has none?
4. In अर्थ, on which letter does the repha sit, and in what order do you say the sounds?
5. Which two conjuncts give no visual clue to their parts?
6. Is the first syllable of *śabda* heavy or light? Explain from the script.
7. Give the order of keys you type for त्र, and for श्री.

## Worked answers

1. *dharma*, *putra*, *jñāna*, *ātman*.
2. अर्थ, सत्य, मन्त्र, क्षेत्र.
3. In कर्मन् the *n* ends the word, so it needs virāma to remove its *a*. In कर्मणि the nasal (here *ṇ*) is followed by the vowel *i* and takes that vowel's sign: णि. A consonant followed by another consonant is written as part of a conjunct instead.
4. On थ. You say *a*, then *r*, then *th*: *artha*. The repha is written on the letter that follows the *r* in speech.
5. क्ष *kṣa* and ज्ञ *jña* (Whitney §13g).
6. Heavy. The conjunct ब्द shows two consonants, *b* and *d*, after the short *a*; two consonants make the syllable heavy.
7. त, ्, र. For श्री: श, ्, र, ी.
