---
id: san-01-08
lang: san
part: 1
order: 8
title: "Devanagari IV: the special signs, punctuation and numerals"
point: Read anusvāra, visarga, candrabindu, avagraha, daṇḍa, oṃ and the Devanagari digits
requires: [san-01-07]
introduces: []
confidence: verified
sources: [whitney1889, macdonell1927, mw1899, unicode, gretil]
---

## The idea

With consonant letters, vowel signs, virāma and conjuncts you can write every Sanskrit word. A handful of extra signs completes the script. Two of them write the edge sounds of san-01-04, anusvāra and visarga. One marks a vowel lost in sandhi. The rest are punctuation, a sacred syllable, and the digits.

None of these signs is a letter of the grid. Each is a mark added to a syllable, or a sign standing between words. That is why they are taught last.

## How it is built

**1. Anusvāra ं** is a dot above the syllable it follows: सं *saṃ*, अं *aṃ*. Macdonell (§7) translates the name "after-sound": it comes after the vowel. Its pronunciation depends on the next sound (san-01-04).

Indian printing often uses this dot for any nasal before a consonant, even where the nasal of a row would be correct. Macdonell (§10) calls this a habit "to save trouble", and gives अंकित for अङ्कित *aṅkita*; Whitney (§73b) calls it "slovenly". The pronunciation does not change. This guide follows the dictionary: *aṅga*, *daṇḍa* with their own nasals, *ṃ* only where the dictionary has it, and final *m* before a consonant written *ṃ* (part 2).

**2. Visarga ः** is two dots after the syllable, like a colon: नमः *namaḥ*. It writes the final breath of san-01-04. Before *k* and *p*, some old authorities describe two special variants of it, the *jihvāmūlīya* ("made at the root of the tongue") and the *upadhmānīya* ("on-breathing"). Whitney (§69) doubts whether they were more than "grammatical abstractions", and Macdonell (§6, note) says their signs have become obsolete. This guide does not use them.

**3. Candrabindu ँ**, "moon and dot", is a crescent with a dot, placed above. It marks a nasalised vowel or a nasalised semivowel (Whitney §73a). In Sanskrit it is rare. Its main use is a sandhi rule: final *n* before *l* becomes a nasal *l* (Whitney §206). Whitney gives *trīn lokān* "the three worlds" written in manuscripts as त्रींलोकान्, and recommends त्रील्ँ लोकान्. IAST writes the sign as m̐. You will meet it in editions; this guide uses it only where the edition does.

**4. Avagraha ऽ**, "separation", marks an initial *a* that has disappeared after a final *e* or *o* (Whitney §§16a, 135). In roman letters it is an apostrophe. Whitney gives *so 'bravīt* "he said", from *saḥ abravīt*, and Macdonell (§9) *te 'pi* "they too", from *te api*. You will meet this join in every text, so learn to undo it on sight: when you see ऽ, put an *a* back.

**5. Daṇḍa । and double daṇḍa ॥.** These are the only marks of punctuation (Macdonell §9). The single daṇḍa ("stick") ends a half-verse or a sentence. The double one ends a verse or a paragraph. A verse number is often written between two double daṇḍas: ॥२०॥ (Whitney §16d). In transliteration the daṇḍas are written | and ||.

**6. ॐ oṃ.** The sacred syllable has its own sign, ॐ. Monier-Williams calls *om* "a word of solemn affirmation and respectful assent" and notes that it stands at the beginning of most Hindu works. Unicode encodes it as a single character.

**7. The abbreviation mark ॰.** A small circle stands for something left out and understood from the context, much like "ditto" (Whitney §16c; Macdonell §9). You will see it in dictionaries and lists.

**8. The digits.** Devanagari has its own ten digits, used exactly like ours, with place value and zero (Whitney §17): २५ is 25, ६३० is 630. Macdonell (§14) adds that the Arabs borrowed these figures from India and brought them to Europe. Our "Arabic numerals" are Indian in origin.

## Examples

:::example
orig: संस्कृत, अंश
translit: saṃskṛta, aṃśa
morphemes: saṃskṛta aṃśa
gloss: perfected share
translation: refined, perfected (the name of the language); share, part
note: [sɐ̃skr̩t̪ɐ] and [ɐ̃ɕɐ]. Anusvāra before s and ś: a nasalised vowel.
source: mw1899
confidence: verified
:::

:::example
orig: नमः
translit: namaḥ
morphemes: namaḥ
gloss: homage
translation: homage, a bow, salutation
note: [n̪ɐmɐh]. The dictionary form is namas; at a pause, final s becomes visarga.
source: mw1899
confidence: verified
:::

:::example
orig: सो ऽब्रवीत्
translit: so 'bravīt
morphemes: saḥ a-bravī-t
gloss: DEM.NOM.SG.M PST-say-3SG
translation: He said.
note: Preview. The avagraha shows that the a of abravīt has gone after so (for saḥ). Undone in the third line: saḥ abravīt.
source: whitney1889 §135
confidence: verified
preview: DEM, NOM, SG, M, PST, 3
:::

:::example
orig: ॐ
translit: oṃ
morphemes: oṃ
gloss: om
translation: om, the sacred syllable of assent
note: [oːm]. One sign for the whole syllable.
source: mw1899; unicode
confidence: verified
:::

:::example
orig: मा कर्मफलहेतुर् भूर् मा ते सङ्गो ऽस्त्व् अकर्मणि ॥
translit: mā karmaphalahetur bhūr mā te saṅgo 'stv akarmaṇi ||
morphemes: mā karma-phala-het-uḥ bhū-ḥ mā te saṅg-aḥ as-tu a-karmaṇ-i
gloss: PROH action-fruit-cause-NOM.SG be.AOR-2SG PROH 2SG.GEN attachment-NOM.SG be-IMP.3SG not-action-LOC.SG
literal: Do not be one whose motive is the fruit of action; let there not be your attachment to non-action.
translation: Do not let the fruit of your work be your motive, and do not cling to doing nothing.
note: Preview. The second half of the Gītā's most quoted verse, ending with ॥. saṅgo 'stv is saṅgaḥ astu: avagraha marks the lost a of astu. The daṇḍas are added as printed editions have them.
source: Bhagavad Gītā 2.47c (= Mahābhārata 6.24.47c, BORI critical edition, GRETIL e-text bhgce__u.htm)
confidence: attested
preview: PROH, NOM, SG, AOR, 2, GEN, IMP, 3, LOC
:::

## Watch out

**Anusvāra and candrabindu are different dots.** Anusvāra is a plain dot (ं). Candrabindu has the crescent under it (ँ). In Sanskrit texts candrabindu is rare.

**Visarga is not a colon.** ः is part of the word it follows. A word ending in visarga is often a noun in its commonest form, as in *devaḥ* (san-02-01).

**The avagraha is not an apostrophe of omission at random.** It always stands for a short *a*, lost after *e* or *o*. In IAST it is the plain apostrophe ', with a space before it: *so 'bravīt*.

**Daṇḍas are not full stops.** In verse, a single daṇḍa often ends a half-verse in the middle of a sentence. Read the grammar, not the punctuation, to find where a sentence ends.

## Reference table

:::table
caption: The Devanagari digits
confidence: verified
source: whitney1889 §17; unicode
| Digit | ० | १ | २ | ३ | ४ | ५ | ६ | ७ | ८ | ९ |
|---|---|---|---|---|---|---|---|---|---|---|
| Value | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
:::

:::table
caption: The special signs
confidence: verified
source: whitney1889 §§16, 69–73, 135, 206; macdonell1927 §§7, 9, 10, 14
| Sign | Name | IAST | Use |
|---|---|---|---|
| ं | anusvāra | ṃ | nasal after a vowel |
| ः | visarga | ḥ | final breath, from s or r |
| ँ | candrabindu | m̐ | nasalised vowel or semivowel; rare |
| ऽ | avagraha | ' | marks a lost initial a |
| । | daṇḍa | \| | end of a half-verse or sentence |
| ॥ | double daṇḍa | \|\| | end of a verse or paragraph |
| ॐ | oṃ | oṃ | the sacred syllable |
| ॰ | abbreviation mark | (none) | something left out |
:::

## New words

:::vocab
अंश | aṃśa | noun | share, part | m., a-stem
नमस् | namas | noun | homage, bow, salutation | n., as-stem; pausa namaḥ
ॐ | oṃ | interjection | om, the sacred syllable | indeclinable
:::

## Exercises

1. Transliterate: संस्कृत, नमः, अंश.
2. Undo the avagraha: what were *te 'pi* and *so 'bravīt* before the join?
3. A verse ends with ॥४७॥. What does this tell you?
4. Write the numbers 18, 108 and 700 in Devanagari digits.
5. Why does this guide write अङ्ग for *aṅga* when many Indian books print अंग?
6. Which sign would you use for a nasalised *l* before *l*, and how is it written in IAST?
7. In the Gītā line of this lesson, find the avagraha and say which word lost its *a*.

## Worked answers

1. *saṃskṛta*, *namaḥ*, *aṃśa*.
2. *te api* and *saḥ abravīt* (with *saḥ* written *so* before the vowel). In each case a final *e* or *o* stood before an initial *a*, and the *a* disappeared (Whitney §135).
3. It is the end of verse 47: the double daṇḍa ends the verse, and the number is written between double daṇḍas in Devanagari digits (Whitney §16d).
4. १८, १०८, ७००.
5. The dictionary writes the nasal of the row before a stop, and so does this guide. The anusvāra dot in अंग is a printing habit; Macdonell (§10) calls it a way "to save trouble". The sound is the same.
6. Candrabindu ँ. IAST writes it m̐ (Whitney §206; this guide's convention for the sign).
7. In *saṅgo 'stv*: the word *astu* "let it be" lost its initial *a* after *saṅgo* (for *saṅgaḥ*).
