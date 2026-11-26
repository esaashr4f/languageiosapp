---
id: san-01-06
lang: san
part: 1
order: 6
title: "Devanagari II: vowel letters and vowel signs"
point: Write any vowel at the start of a word as a letter and after a consonant as a sign
requires: [san-01-05]
introduces: []
confidence: verified
sources: [whitney1889, macdonell1927, mw1899, unicode]
---

## The idea

Every vowel has two written forms. Whitney (§9A) states the rule: the full vowel **letter** is used "only when the vowel forms a syllable by itself", that is, at the start of a word or after another vowel. After a consonant the vowel is written as a **vowel sign**, a small mark attached to the consonant letter. The Unicode Standard calls these "dependent vowel signs".

This follows from the principle of san-01-05. The consonant is the body of the written syllable; the vowel is something added to it. Short *a* needs no sign, because the consonant letter already contains it. Every other vowel replaces the inherent *a* with its own sign.

So you read कि as *ki*, not *kai* or *kia*. The sign for *i* cancels the *a*.

## How it is built

**Step 1: the vowel letters.** Fourteen letters, in alphabet order (Whitney §5):

अ *a*, आ *ā*, इ *i*, ई *ī*, उ *u*, ऊ *ū*, ऋ *ṛ*, ॠ *ṝ*, ऌ *ḷ*, ॡ *ḹ*, ए *e*, ऐ *ai*, ओ *o*, औ *au*.

Notice the families. आ is अ with an extra stroke. ई is इ with a hook. ऊ is उ with a tail. ऐ is ए with a second stroke, and ओ, औ are built on अ.

**Step 2: the signs, by position.** Take क *ka* as the base (Whitney §10).

- **After:** ा *ā* is a vertical stroke after the consonant: का *kā*.
- **Before:** ि *i* is written *before* the consonant it follows in speech: कि *ki*. Its partner ी *ī* goes after: की *kī*. Whitney (§10c) explains that the essential part of both signs was originally only the hook above the line; the long strokes were added later, one on each side.
- **Below:** ु *u*, ू *ū*, ृ *ṛ*, ॄ *ṝ* hang below: कु *ku*, कू *kū*, कृ *kṛ*, कॄ *kṝ*. *ḷ* is a reduced form of its letter: कॢ *kḷ* (§10f).
- **Above:** े *e* and ै *ai* are strokes above the line: के *ke*, कै *kai*.
- **After and above:** ो *o* and ौ *au* are the *ā*-stroke with *e* or *ai* above it: को *ko*, कौ *kau* (§10g).

**Step 3: the irregular ones.** A few combinations look different (§10d–e). With र *ra*, the *u*-signs go to the side: रु *ru*, रू *rū*. With ह *ha*, they are tucked into the letter: हु *hu*, हू *hū*. With द *da* the *u*-signs are slightly disguised: दु *du*, दू *dū*. And *ṛ* attaches to the middle of ह: हृ *hṛ*. Learn these by sight.

**Step 4: reading.** Read each consonant together with whatever sign is attached to it, wherever on the letter the sign sits. A sign on the left belongs to the consonant on its right.

**Step 5: typing.** On a computer you type the consonant first and then the vowel sign, in the order you say them, even for ि: क + ि gives कि. The font moves the sign to the left. The same holds for every sign.

## Examples

:::example
orig: आकाश
translit: ākāśa
morphemes: ākāśa
gloss: sky
translation: open space, sky, ether
note: [aːkaːɕɐ]. The letter आ at the start, then the sign ा after क. The last letter keeps its inherent a.
source: mw1899
confidence: verified
:::

:::example
orig: इति, इह
translit: iti, iha
morphemes: iti iha
gloss: thus here
translation: thus (marks quoted words); here, in this world
note: [it̪i] and [iɦɐ]. The letter इ at the start; inside iti, the sign ि before त.
source: mw1899
confidence: verified
:::

:::example
orig: कवि, नीति
translit: kavi, nīti
morphemes: kavi nīti
gloss: poet conduct
translation: poet, sage; conduct, policy, wise behaviour
note: [kɐʋi] and [n̪iːt̪i]. Short i written before its consonant, long ī after.
source: mw1899
confidence: verified
:::

:::example
orig: उदक, मूल
translit: udaka, mūla
morphemes: udaka mūla
gloss: water root
translation: water; root
note: [ud̪ɐkɐ] and [muːlɐ]. The letter उ at the start, the sign ू below म.
source: mw1899
confidence: verified
:::

:::example
orig: गुरु, रूप
translit: guru, rūpa
morphemes: guru rūpa
gloss: heavy form
translation: heavy, teacher; form
note: [ɡuɾu] and [ɾuːpɐ]. The u-signs beside र: रु ru, रू rū.
source: mw1899
confidence: verified
:::

:::example
orig: ऋण, कृपा, हृदय
translit: ṛṇa, kṛpā, hṛdaya
morphemes: ṛṇa kṛpā hṛdaya
gloss: debt pity heart
translation: debt; pity, compassion; heart
note: [r̩ɳɐ], [kr̩paː], [ɦr̩d̪ɐjɐ]. The letter ऋ at the start; the sign ृ below क and in the middle of ह.
source: mw1899
confidence: verified
:::

:::example
orig: वेद, ऐहिक
translit: veda, aihika
morphemes: veda aihika
gloss: knowledge worldly
translation: knowledge, the Veda; of this world
note: [ʋeːd̪ɐ] and [ɐi̯ɦikɐ]. The sign े above व; the letter ऐ at the start. aihika is the vṛddhi derivative of iha "here".
source: mw1899
confidence: verified
:::

:::example
orig: वैर, ओदन
translit: vaira, odana
morphemes: vaira odana
gloss: enmity porridge
translation: enmity, feud; boiled rice, porridge
note: [ʋɐi̯ɾɐ] and [oːd̪ɐn̪ɐ]. The sign ै above व; the letter ओ at the start.
source: mw1899
confidence: verified
:::

:::example
orig: मौन, औषध
translit: mauna, auṣadha
morphemes: mauna auṣadha
gloss: silence medicine
translation: silence; medicine, medicinal herb
note: [mɐu̯n̪ɐ] and [ɐu̯ʂɐd̪ʱɐ]. The sign ौ on म; the letter औ at the start. Monier-Williams derives mauna from muni "sage".
source: mw1899
confidence: verified
:::

:::example
orig: ईश
translit: īśa
morphemes: īśa
gloss: lord
translation: master, lord
note: [iːɕɐ]. The letter ई at the start.
source: mw1899
confidence: verified
:::

## Watch out

**The i-sign is read after its consonant.** In कवि the sign ि stands before व, but the word is *kavi*, not *kiva*. The sign belongs to the letter on its right.

**Letter or sign, never both.** After a consonant you always use the sign. Writing क + इ gives *ka-i*, two syllables in hiatus, which is a different (and very rare) thing.

**ो is not ा + े read separately.** It is one sign for *o*. Likewise ौ is *au*. Read the whole cluster of marks on a letter before deciding the vowel.

**रु and रू are not र + a hook below.** र takes its *u*-signs at the side.

**Long and short i differ in direction.** ि hooks to the left, ी to the right. Check the direction of the hook before deciding the length.

## Reference table

:::table
caption: Vowel letters and the signs they take after a consonant, shown on क ka
confidence: verified
source: whitney1889 §§5, 10; unicode
| Vowel | Letter | Sign | With क |
|---|---|---|---|
| a | अ | (none) | क ka |
| ā | आ | ा | का kā |
| i | इ | ि | कि ki |
| ī | ई | ी | की kī |
| u | उ | ु | कु ku |
| ū | ऊ | ू | कू kū |
| ṛ | ऋ | ृ | कृ kṛ |
| ṝ | ॠ | ॄ | कॄ kṝ |
| ḷ | ऌ | ॢ | कॢ kḷ |
| e | ए | े | के ke |
| ai | ऐ | ै | कै kai |
| o | ओ | ो | को ko |
| au | औ | ौ | कौ kau |
:::

## New words

:::vocab
आकाश | ākāśa | noun | open space, sky | n. (Vedic m.), a-stem
कवि | kavi | noun | poet, sage | m., i-stem
नीति | nīti | noun | conduct, policy, prudence | f., i-stem
उदक | udaka | noun | water | n., a-stem
मूल | mūla | noun | root | n., a-stem
ऋण | ṛṇa | noun | debt, obligation | n., a-stem
कृपा | kṛpā | noun | pity, compassion | f., ā-stem
हृदय | hṛdaya | noun | heart | n., a-stem
वेद | veda | noun | knowledge; the Veda | m., a-stem; from √vid
ऐहिक | aihika | adjective | of this world, worldly | aihika, f. aihikī
वैर | vaira | noun | enmity | n., a-stem
ओदन | odana | noun | boiled rice, porridge | m. or n., a-stem
मौन | mauna | noun | silence | n., a-stem
औषध | auṣadha | noun | medicine, medicinal herb | n., a-stem
ईश | īśa | noun | master, lord | m., a-stem (also adj. "owning, master of")
:::

## Connections

Hindi uses the same letters and signs. Korean hangul also builds a syllable block from a consonant and a vowel shape placed beside or below it, but in hangul every vowel, including *a*, must be written.

## Exercises

1. Transliterate: कवि, मूल, कृपा, मौन.
2. Write in Devanagari: *iti*, *guru*, *veda*, *odana*.
3. Why is the *i* of *nīti* written after न, and the *i* of *kavi* before व?
4. In which word of this lesson is a vowel letter used after a consonant? Explain your answer.
5. Write *ru*, *rū* and *hṛ* in Devanagari.
6. Give the order in which you type the characters of कि, and what you see on the screen.
7. Transliterate and translate: हृदय, ऋण, आकाश.

## Worked answers

1. *kavi*, *mūla*, *kṛpā*, *mauna*.
2. इति, गुरु, वेद, ओदन.
3. Long *ī* (ी) is written after its consonant, short *i* (ि) before it. The *ī* of *nīti* is long; the *i* of *kavi* is short. Both are pronounced after the consonant.
4. None. A vowel letter is used only at the start of a word or after another vowel (Whitney §9A). After a consonant the vowel is always a sign.
5. रु, रू, हृ.
6. क first, then ि. The screen shows कि, with the sign moved to the left of the letter.
7. *hṛdaya* "heart", *ṛṇa* "debt", *ākāśa* "sky, open space".
