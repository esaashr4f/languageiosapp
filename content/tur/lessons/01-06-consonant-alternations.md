---
id: tur-01-06
lang: tur
part: 1
order: 6
title: Consonants that change at the joins
point: Predict d or t at the start of a suffix, k to ğ and p to b at the end of a stem, and the buffer letters y, n and s
requires: [tur-01-05]
introduces: [alternation]
confidence: verified
sources: [goksel2005, wiktionary, tdk]
---

## The idea

Harmony adjusts the vowels at the join between a word and its suffix. Three smaller rules adjust the consonants. Together they make up the whole of what changes when Turkish glues pieces together.

All three come from the same pressure. A **join** is the point where a stem meets a suffix, and at a join two sounds meet that were not designed for each other. Turkish smooths the meeting in predictable ways.

**Rule 1: a suffix consonant matches a voiceless neighbour.** Some suffixes begin with *d* or *c*. After a voiceless consonant, they switch to their voiceless partners, *t* and *ç*. This is **assimilation**: one sound taking on a feature of the sound next to it. Your voice is already off at the end of *kitap* "book", and the suffix consonant stays off with it: *kitapta* "in the book", but *evde* "at home". The voiceless consonants are *f, s, t, k, ç, ş, h, p*: exactly the consonants of the phrase *fıstıkçı şahap*, a handy way to remember them (*fıstıkçı* means "pistachio seller"). This is why the guide writes these suffixes with capitals: **-DA** "in, at" and **-CI** "person who deals in".

**Rule 2: many stems end in a voiceless consonant that becomes voiced before a vowel.** *Kitap* becomes *kitab-* before a suffix that starts with a vowel. A final *p*, *t*, *ç* becomes *b*, *d*, *c*, and a final *k* after a vowel becomes *ğ* (after *n*, it becomes *g*). The reason differs by word. In loans from Arabic and Persian the original word often ended in a voiced consonant: *kitap* is Arabic *kitāb*. Turkish does not normally allow *b*, *d*, *c* or *g* at the end of a word, so the bare word ends voiceless, and the voiced consonant reappears only when a vowel follows. In words of more than one syllable that end in a vowel plus *k*, the *k* turns into *ğ* before a vowel as a general rule: *köpek* "dog", *köpeği*. Most words of one syllable do not change at all: *top* "ball", *topu*.

**Rule 3: Turkish keeps vowels apart.** Two vowels never meet at a join. When a vowel-initial suffix follows a vowel, a **buffer** consonant slips in: usually *y*, but *n* for the suffix of the owner and *s* for the suffix meaning "his, her". These are the letters in round brackets in the guide's notation: -(y)I, -(n)In, -(s)I.

## How it is built

At each join, ask three questions.

1. **Does the suffix start with *d* or *c*?** If the stem ends in *f, s, t, k, ç, ş, h* or *p*, use *t* or *ç*. Otherwise keep *d* or *c*.
2. **Does the suffix start with a vowel, and does the stem end in *p, t, ç* or *k*?** Then check the word: if it alternates, voice the consonant. The vocabulary lists show this with the accusative form, *kitap* (acc. *kitabı*).
3. **Does the suffix start with a vowel, and does the stem end in a vowel?** Then use the buffer: the letter in brackets.

Harmony then sets the vowel as usual.

## Examples

:::example
orig: kitapta
morphemes: kitap-ta
gloss: book-LOC
translation: in the book
note: Preview. -DA after voiceless p: t. Compare evde.
source: wiktionary
confidence: verified
preview: LOC
:::

:::example
orig: sokakta
morphemes: sokak-ta
gloss: street-LOC
translation: in the street
note: Preview. After voiceless k: -ta.
source: wiktionary
confidence: verified
preview: LOC
:::

:::example
orig: sütçü, kapıcı
morphemes: süt-çü kapı-cı
gloss: milk-seller door-keeper
translation: milkman; doorman
note: Preview of -CI. Voiceless t gives ç; the vowel ı keeps c. Harmony gives ü and ı.
source: wiktionary
confidence: verified
:::

:::example
orig: kitabı
morphemes: kitab-ı
gloss: book-ACC
translation: the book (as object)
note: Preview. Before a vowel the original b of Arabic kitāb comes back.
source: wiktionary
confidence: verified
preview: ACC
:::

:::example
orig: köpeği
morphemes: köpeğ-i
gloss: dog-ACC
translation: the dog (as object)
note: Preview. A final k after a vowel becomes ğ, which is silent.
source: wiktionary
confidence: verified
preview: ACC
:::

:::example
orig: ağacı
morphemes: ağac-ı
gloss: tree-ACC
translation: the tree (as object)
note: Preview. Final ç becomes c before a vowel.
source: wiktionary
confidence: verified
preview: ACC
:::

:::example
orig: rengi
morphemes: reng-i
gloss: colour-ACC
translation: the colour (as object)
note: Preview. After n, a final k becomes g, not ğ.
source: wiktionary
confidence: verified
preview: ACC
:::

:::example
orig: kâğıdı
morphemes: kâğıd-ı
gloss: paper-ACC
translation: the paper (as object)
note: Preview. Final t becomes d. Few words do this; the dictionary marks it.
source: tdk
confidence: verified
preview: ACC
:::

:::example
orig: topu
morphemes: top-u
gloss: ball-ACC
translation: the ball (as object)
note: Preview. Most one-syllable words keep their consonant: top, topu.
source: wiktionary
confidence: verified
preview: ACC
:::

:::example
orig: arabayı, arabanın, arabası
morphemes: araba-yı araba-nın araba-sı
gloss: car-ACC car-GEN car-3SG.POSS
translation: the car (as object); of the car; his or her car
note: Preview. Three suffixes after a vowel, three buffers: y, n and s.
source: wiktionary
confidence: verified
preview: ACC, GEN, 3, SG, POSS
:::

:::example
orig: evi, evin
morphemes: ev-i ev-in
gloss: house-ACC house-GEN
translation: the house (as object); of the house
note: Preview. After a consonant the buffers are not needed.
source: wiktionary
confidence: verified
preview: ACC, GEN
:::

:::example
orig: dağı
morphemes: dağ-ı
gloss: mountain-ACC
translation: the mountain (as object)
note: Preview. ğ is silent, but it counts as a consonant: no buffer, never dağyı.
source: goksel2005 §6.1.3
confidence: verified
preview: ACC
:::

## Watch out

**Rule 1 is about the sound before the suffix, Rule 2 about the stem's own last sound.** In *kitapta*, the stem keeps its *p* and the suffix changes. In *kitabı*, the suffix has no consonant to change and the stem changes. Do not mix them: \**kitabta* and \**kitapı* are both wrong.

**Not every final consonant alternates.** *Top* keeps *p*, *saç* "hair" keeps *ç* (*saçı*), *at* keeps *t* (*atı*), and so do many loans from European languages, such as *park* (*parkı*). Göksel and Kerslake point out that only a dictionary can tell you for certain. This guide gives the accusative of every noun that changes.

**Verbs mostly do not alternate.** The rules for stems apply to nouns and adjectives. A few common verbs are exceptions, and each is flagged when it is taught.

**A proper name keeps its spelling.** Lesson 8 shows that names take an apostrophe before a suffix, and that the spelling of the name does not change, even when the sound does.

## Reference table

:::table
caption: What changes at a join
confidence: verified
source: goksel2005 §§2.1, 6.1.2, 6.1.3; wiktionary
| Situation | Change | Example |
|---|---|---|
| suffix d after f, s, t, k, ç, ş, h, p | d becomes t | ev-de, kitap-ta |
| suffix c after the same consonants | c becomes ç | kapı-cı, süt-çü |
| stem p, t, ç before a vowel (many words) | b, d, c | kitab-ı, kâğıd-ı, ağac-ı |
| stem k after a vowel, before a vowel | ğ | köpeğ-i |
| stem nk before a vowel | ng | reng-i |
| vowel-initial suffix after a vowel | buffer y (n with the genitive, s with "his, her") | araba-yı, araba-nın, araba-sı |
:::

## New words

:::vocab
kitap | - | noun | book | acc. kitabı; from Arabic
köpek | - | noun | dog | acc. köpeği
renk | - | noun | colour | acc. rengi
balık | - | noun | fish | acc. balığı
sokak | - | noun | street | acc. sokağı
top | - | noun | ball | acc. topu
park | - | noun | park | acc. parkı
saç | - | noun | hair (of the head) | acc. saçı
sütçü | - | noun | milkman | süt + -CI
balıkçı | - | noun | fisherman; fishmonger | balık + -CI
kapıcı | - | noun | doorman, gatekeeper | kapı + -CI
kitapçı | - | noun | bookseller; bookshop | kitap + -CI
:::

## Exercises

1. Add *-DA* "in, at" to *park*, *oda*, *göl* and *sokak*.
2. Add *-CI* to *balık* and to *kitap*. Which rule decides the consonant?
3. The accusative of *çocuk* "child" is *çocuğu*. Which rule is at work, and why is it not \**çocukı*?
4. Why does *kitap* end in *p* when its Arabic source ends in *b*?
5. Build the accusative of *kedi* "cat" and explain the *y*.
6. A learner writes \**dağyı*. What is wrong?
7. *Top* and *köpek* both end in a voiceless stop. Why does only one of them change before a vowel?

## Worked answers

1. *Parkta*, *odada*, *gölde*, *sokakta*. After voiceless *k*, the *d* becomes *t*. After a vowel or a voiced consonant such as *l*, it stays *d*. Harmony gives *a* or *e*.
2. *Balıkçı* and *kitapçı*. Rule 1: the stems end in voiceless *k* and *p*, so *c* becomes *ç*. The stem consonants do not change, because the suffix starts with a consonant.
3. Rule 2. *Çocuk* is a word of two syllables ending in a vowel and *k*, so before a vowel the *k* becomes *ğ*. Then four-way harmony after *u* gives *-u*.
4. Turkish does not normally allow *b*, *d*, *c* or *g* at the end of a word, so the final *b* became *p*. Before a vowel it is no longer at the end, and the *b* is kept: *kitabı*.
5. *Kediyi*. The accusative is *-(y)I*. *Kedi* ends in a vowel, so the buffer *y* comes in, and harmony after *i* gives *i*.
6. *Ğ* counts as a consonant, so no buffer is needed: *dağı*.
7. *Top* has one syllable, and most one-syllable words keep their consonant. *Köpek* has two and ends in a vowel plus *k*, the case where *k* regularly becomes *ğ*.
