---
id: san-01-09
lang: san
part: 1
order: 9
title: Transliteration, Unicode and how joined words are printed
point: Transliterate Devanagari into IAST and back, type both correctly, and read a line in which words run together
requires: [san-01-08]
introduces: []
confidence: verified
sources: [whitney1889, mw1899, wiktionary, unicode, wp-iast, gretil, bori, heritage]
---

## The idea

You now know every sign of the script. IAST, the roman scheme of this guide, was fixed by the International Congress of Orientalists at Geneva in 1894. It has one roman spelling for each Devanagari sign, so you can go from one script to the other mechanically, in both directions, without knowing the language.

Two practical matters follow. The marks of IAST must be typed as the right characters, or searches and dictionaries will not find your words. And Devanagari as printed in India does not space words the way this guide does. Whitney (§9a) says that Indian manuscripts write "everything, without exception", solid, with a final consonant joined into one syllable with the next word. Indian printed books keep part of that habit, so you must find the word boundaries yourself.

## How it is built

**Step 1: Devanagari to IAST.** Go one written syllable at a time. Write each consonant's roman letter, then its vowel: the sign's vowel, *a* if there is no sign, nothing after virāma. A conjunct gives its consonants in order, left to right and top to bottom, with the repha first. A vowel letter gives its vowel. Then ṃ, ḥ and ' for anusvāra, visarga and avagraha.

**Step 2: IAST to Devanagari.** Cut the roman word into syllables: any consonants, then one vowel. Remember that *kh, gh, ch, jh, ṭh, ḍh, th, dh, ph, bh* are one letter each, and so are *ai* and *au*. A vowel at the start of a word, or after another vowel, is a vowel letter. A vowel after a consonant is a sign. Two or more consonants before a vowel make a conjunct. A consonant with no vowel after it takes virāma.

**Step 3: type the right characters.** Every character on a screen is stored as a number, its **code point**, assigned by the **Unicode** Standard, the international catalogue of characters. Each IAST letter with a mark has its own code point: ā is one character, not *a* followed by a separate bar. The same letter can also be stored as a base letter plus a **combining mark**. **NFC** ("normalisation form C") is the Unicode rule that turns such pairs into the single character where one exists. All files of this guide are in NFC. Use ṃ (dot below) for anusvāra, and the straight apostrophe ' for avagraha.

In Devanagari, type in the order of speech. The short *i* sign is written before its consonant but typed after it: कि is क then ि. A vowel letter is one key: आ is its own character. The Unicode Standard (chapter 12) lists अ + ा as a sequence not to use, because it looks like आ but is not the same text.

**Step 4: this guide's spacing.** The roman line puts a space at every word boundary, as Western editions and GRETIL do. The exception is two vowels that have melted into one: *eva* + *adhikāraḥ* is written *evādhikāraḥ*. A vowel that has turned into *y* or *v* stays before the space: *karmaṇy eva*. The Devanagari line copies these spaces exactly, with virāma on any consonant before a space: a style Whitney (§9d) notes in books for beginners.

**Step 5: the joined printing.** An Indian edition prints the Gītā line of this lesson's examples as:

कर्मण्येवाधिकारस्ते मा फलेषु कदाचन

Spaces appear only after a vowel, ṃ or ḥ. A word ending in a consonant has no virāma: its consonant joins the next word's first sound. So the conjunct ण्ये holds the end of one word and the start of the next, *-ṇy* + *e-*. स्ते is *-s* + *te*. Two words that belong together, such as *kadā cana* "ever", are often printed as one: कदाचन. To read such a line, transliterate it first, then look for the words you know. When stuck, the Sanskrit Heritage Site's segmenter lists possible splits.

**Step 6: dictionary order.** Whitney (§7) notes that European scholars took the grammarians' order of sounds as the alphabetical order for dictionaries. That is the order of san-01-01, and it holds in roman letters too: every word in *k* comes before the first word in *kh*. Monier-Williams's dictionary lists compounds under their first member.

## Examples

:::example
orig: कृष्ण
translit: kṛṣṇa
morphemes: kṛṣṇa
gloss: black
translation: black, dark; (as a name) Kṛṣṇa
note: [kr̩ʂɳɐ]. Three letters with dots below, each a single code point: ṛ U+1E5B, ṣ U+1E63, ṇ U+1E47.
source: mw1899; wiktionary
confidence: verified
:::

:::example
orig: शङ्ख
translit: śaṅkha
morphemes: śaṅkha
gloss: conch
translation: shell, conch
note: [ɕɐŋkʰɐ]. Six roman letters, five sounds: ś a ṅ kh a. ख is one letter, written with two roman letters.
source: mw1899
confidence: verified
:::

:::example
orig: शिव
translit: śiva
morphemes: śiva
gloss: auspicious
translation: auspicious, kind; (as a name) Śiva, "the auspicious one"
note: [ɕiʋɐ]. Whitney's grammar writes this letter ç: çiva. In IAST it is ś, U+015B.
source: mw1899; wiktionary
confidence: verified
:::

:::example
orig: दैव
translit: daiva
morphemes: daiva
gloss: divine
translation: divine; (as a neuter noun) fate, destiny
note: [d̪ɐi̯ʋɐ]. ai is one vowel, the sign ै. Whitney writes it āi. The word is derived from deva "god".
source: mw1899
confidence: verified
:::

:::example
orig: संस्कृत
translit: saṃskṛta
morphemes: saṃskṛta
gloss: refined
translation: put together, perfected, refined; the name of the language
note: [sɐ̃skr̩t̪ɐ]. ṃ is m with a dot below, U+1E43. ṁ with a dot above (U+1E41) is another scheme's letter, also used by Whitney.
source: mw1899; wiktionary
confidence: verified
:::

:::example
orig: दृढ
translit: dṛḍha
morphemes: dṛḍha
gloss: firm
translation: fixed, firm, strong
note: [d̪r̩ɖʱɐ]. Vowel sign ृ under द, then ढ ḍha. Dot below on r and on d: two different jobs (vowel r, retroflex d).
source: mw1899
confidence: verified
:::

:::example
orig: कर्मण्य् एवाधिकारस् ते मा फलेषु कदा चन
translit: karmaṇy evādhikāras te mā phaleṣu kadā cana
morphemes: karmaṇ-i eva adhikār-aḥ te mā phal-eṣu kadā cana
gloss: action-LOC.SG EMPH right-NOM.SG 2SG.GEN PROH fruit-LOC.PL when INDF
literal: In action alone (is) your right; not in fruits, ever.
translation: Your right is to the work alone, never to its fruits.
note: Preview. The same line as in Step 5, in this guide's spacing. karmaṇy is karmaṇi before a vowel; evādhikāras is eva adhikāraḥ, with two a's melted into ā and -ḥ written s before t.
source: Bhagavad Gītā 2.47a (= Mahābhārata 6.24.47a, BORI critical edition, GRETIL e-text bhgce__u.htm)
confidence: attested
preview: LOC, SG, EMPH, NOM, 2, GEN, PROH, PL, INDF
:::

## Watch out

**Two roman letters can be one sound.** *kh* in *śaṅkha* is one letter, ख. In rare cases a real *k* + *h*, or *a* + *i* side by side in two syllables, looks the same as *kh* or *ai*. The Devanagari then decides, and this guide's note says so.

**Older books spell differently.** Whitney writes ç for ś, āi and āu for ai and au, and ṅ or ṁ for anusvāra. Popular spellings such as *Krishna* and *Shiva* merge ś and ṣ (san-01-04). Convert to IAST before looking anything up.

**The curly apostrophe is a different character.** ’ (U+2019) and Whitney's ‘ look like avagraha's ' but are not it. Word processors often change ' into ’ as you type; turn that off, or searches fail.

**Typing schemes are not transliteration.** Online dictionaries accept plain-keyboard schemes such as Harvard-Kyoto and SLP1, which use capitals and ordinary letters for the dotted ones. They are for typing a search, never for writing Sanskrit in this guide.

## Reference table

:::table
caption: IAST letters with marks, and the characters to type
confidence: verified
source: unicode; whitney1889 §5; wp-iast
| IAST | Devanagari | Code point | Not to be confused with |
|---|---|---|---|
| ā ī ū | आ ई ऊ / ा ी ू | U+0101, U+012B, U+016B | a letter followed by a separate macron |
| ṛ ṝ | ऋ ॠ / ृ ॄ | U+1E5B, U+1E5D | ri, rī |
| ḷ ḹ | ऌ ॡ / ॢ ॣ | U+1E37, U+1E39 | |
| ṅ | ङ | U+1E45 (dot above) | ṇ |
| ñ | ञ | U+00F1 | |
| ṭ ḍ ṇ | ट ड ण | U+1E6D, U+1E0D, U+1E47 | t d n |
| ś | श | U+015B | Whitney's ç |
| ṣ | ष | U+1E63 | sh |
| ṃ | ं | U+1E43 (dot below) | ṁ U+1E41 |
| ḥ | ः | U+1E25 | |
| m̐ | ँ | m + U+0310 | |
| ' | ऽ | U+0027 | ’ U+2019 |
| \| and \|\| | । and ॥ | U+007C; U+0964, U+0965 | |
:::

## New words

:::vocab
कृष्ण | kṛṣṇa | adjective | black, dark | kṛṣṇa, f. kṛṣṇā; as m., the name Kṛṣṇa
शङ्ख | śaṅkha | noun | shell, conch | m. or n., a-stem
शिव | śiva | adjective | auspicious, kind | śiva, f. śivā; as m., the god Śiva
दैव | daiva | adjective | divine | daiva, f. daivī; as n., fate, destiny; vṛddhi derivative of deva
संस्कृत | saṃskṛta | adjective | put together, perfected, refined | saṃskṛta, f. saṃskṛtā; as n., the Sanskrit language
दृढ | dṛḍha | adjective | fixed, firm, strong | dṛḍha, f. dṛḍhā
:::

## Connections

Japanese has rival roman spellings too: Hepburn writes *shi*, the Kunrei system *si*, for the same kana し. Sanskrit has one standard, IAST, beside the typing schemes.

## Exercises

1. Transliterate into IAST: कृष्ण, शङ्ख, दैव, धर्मक्षेत्र.
2. Write in Devanagari: *śiva*, *dṛḍha*, *aśva*, *ātman*.
3. A text file has *saṁskṛta* and *so ’bravīt*. What is wrong with each, for this guide?
4. This line is printed in the Indian joined style. Respace it in this guide's style, in both scripts: आसीद्राजा नलो नाम वीरसेनसुतो बली.
5. Print this line in the Indian joined style: मा कर्मफलहेतुर् भूर् मा ते सङ्गो ऽस्त्व् अकर्मणि.
6. Put in dictionary order: *khara*, *kṣetra*, *kara*, *kṛpā*, *kavi*, *gaja*, *kaṇṭha*, *kamala*.
7. Rewrite Whitney's *çiva* and *dāiva* in IAST.
8. In the joined line कर्मण्येवाधिकारस्ते, which conjunct holds the end of one word and the start of the next, and how do you know?

## Worked answers

1. *kṛṣṇa*, *śaṅkha*, *daiva*, *dharmakṣetra* (र्म is *rma* with the repha; क्ष is *kṣa*).
2. शिव, दृढ, अश्व, आत्मन्. *ātman* ends in a consonant, so न takes virāma.
3. ṁ (dot above) is not the IAST anusvāra: write *saṃskṛta*. The curly ’ is not the avagraha apostrophe: write *so 'bravīt*.
4. आसीद् राजा नलो नाम वीरसेनसुतो बली, *āsīd rājā nalo nāma vīrasenasuto balī*. Only one word ends in a consonant, *āsīd*, so only one space is missing. *vīrasenasuto* is a compound and stays whole (san-00-03).
5. मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि. Remove every space that follows a consonant and drop its virāma; the space before the avagraha goes too. The spaces after मा, ते, which end in vowels, stay.
6. *kaṇṭha*, *kamala*, *kara*, *kavi*, *kṛpā*, *kṣetra*, *khara*, *gaja*. All words in *k* + vowel come first, by the vowel and then the next letter (ṇ, m, r, v in grid order; ṛ after a). *kṣ* is *k* + consonant, so it follows every *k* + vowel. *kh* is a separate letter after *k* (Whitney §7).
7. *śiva*, *daiva*.
8. ण्ये: *-ṇy* ends *karmaṇy*, the vowel *e* begins *eva*. Indian printing leaves no space after a consonant, so a final consonant shares a syllable with the next word; recognising *eva* confirms the cut.
