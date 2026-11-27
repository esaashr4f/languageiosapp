---
id: swh-07-01
lang: swh
part: 7
order: 1
title: "Verb extensions: one root, many verbs"
point: See how suffixes between root and final vowel change who does what to whom, and predict the i/e harmony they follow
requires: [swh-06-15]
introduces: [extension, vowel-harmony]
confidence: verified
sources: [wiktionary, wpgrammar]
---

## The idea

Lesson 4.1 laid out the verb template: subject prefix, negative, tense, relative, object prefix, root, then a slot marked EXT, then the final vowel. Every verb so far has left EXT empty, or carried something in it that you learnt as part of the word. This part fills that slot.

An **extension** is a short suffix placed between the root and the final vowel that makes a new verb from the old one. It does not change the tense or the person. It changes the cast of the sentence: who acts, who is affected, who benefits, whether anyone acts at all.

Take *-pika* "cook". Wiktionary lists five verbs built on its root *pik-*:

- *-pikia* "cook for (someone)": one more person enters the sentence, the one cooked for;
- *-pikisha* "make (someone) cook": one more person enters, the one who causes the cooking;
- *-pikwa* "be cooked": the cook leaves the sentence; the food becomes the subject;
- *-pikika* "be cookable": no cook at all, only a property of the food;
- *-pikana*: two parties act on each other (lesson 7.10).

So the extensions add a participant, remove one, or fold two together. That is the whole system in one sentence. The next ten lessons take one extension each.

Why does Swahili do this with suffixes, where English uses separate words ("for", "make", "be ... -ed")? Because it is a Bantu language, and the extension slot is old. Wiktionary's etymology of *-pikia* traces it to a Proto-Bantu verb built from the root plus an applicative suffix *-ɪda*, with matching forms in Zulu and Chichewa. The suffixes are inherited, not a Swahili invention.

You have already met many extended verbs whole: *-tumia* "use" (from *-tuma* "send"), *-onyesha* "show", *-kutana* "meet", *-badilika* "change", *-zaliwa* "be born", *-pendeza* "please", *-kimbilia* "run to", *-lisha* "feed", *-kopesha* "lend". From now on you can take them apart.

## How it is built

### The final vowel moves to the end

A native verb ends in *-a*. When an extension is added, that *-a* drops and comes back after the extension (wpgrammar, "Derived verbs"). Each extension, in other words, is a suffix that carries its own final *-a*:

1. *pik-a* "cook": root *pik-*, final vowel *-a*;
2. drop the *-a*: *pik-*;
3. add the extension: *pik-i-*;
4. put the final vowel back: *pik-i-a*, *-pikia*.

The rest of the template works exactly as before: *a-na-ni-pik-i-a* "she is cooking for me", *ha-ni-pik-i-i* "she is not cooking for me", with the negative *-i* in the final vowel slot as in lesson 2.3.

### Vowel harmony: i or e

Three extensions have a vowel that changes: the applicative (*-i-* or *-e-*), the causative *-ish-* or *-esh-*, and the stative *-ik-* or *-ek-*. **Vowel harmony** means that a suffix's vowel is chosen to match a vowel earlier in the word. Here the rule looks at the last vowel of the root (wpgrammar; the dossier's extension notes):

- after **a, i, u** (and after a syllabic m), the extension has **i**;
- after **e, o**, the extension has **e**.

Chain of thought for "read to someone":

1. Root *som-*. Last root vowel: o.
2. o takes e: applicative *-e-*.
3. *som-e-a*: *-somea*.

For "play with": *chez-*, last vowel e, so *chez-e-a*, *-chezea*. For "cook for": *pik-*, last vowel i, so *pik-i-a*. For "write to": *andik-*, last vowel i, so *andik-i-a*. For "push to": *sukum-*, last vowel u, so *sukum-i-a* (Wiktionary *-sukumia*).

The sources state this rule without giving its origin, so this guide gives none. Notice what it groups: e and o are the two middle vowels of the five (lesson 1.1); a, i and u are the rest.

### The lost l comes back

Some roots end in a vowel: *-nunua* "buy" is *nunu-a*, *-kaa* "sit" is *ka-a*. Here the applicative is not *-i-* but *-li-* (or *-le-* after e and o): *nunu-li-a* "buy for", *ka-li-a* "sit on". Why an l? Wikipedia's grammar explains it as "the reappearance of the /l/ which disappeared from an older stage of Swahili between the final two vowels". The old verb had an l before its final *-a*; ordinary speech lost it, but the extended form kept it. The Wikipedia article on the language gives *kondoo* "sheep", from older *kondolo*, as another word that lost the same l.

### Loan verbs and short verbs

Loan verbs that end in *-i*, *-e* or *-u* drop that vowel and take the same suffix as a native verb, by the same harmony rule: *-rudi* "return" gives *-rudia* and *-rudisha* (wpgrammar). Loans in *-au* keep it and add the l form: *-sahau* "forget", *-sahaulisha* "make forget" (wpgrammar).

Short verbs (lesson 4.4) have no vowel before the root's final *-a*, so their extended forms are learnt one by one: *-la* "eat" gives *-lisha* "feed"; *-nywa* "drink" gives *-nywesha* "give a drink to" (wpgrammar).

## Examples

:::example
orig: Mama anapika wali.
morphemes: mama a-na-pik-a wali
gloss: mother.C9 C1.SM-PRS-cook-FV cooked.rice.C11
translation: Mother is cooking rice.
note: The plain verb, with the EXT slot empty. Two participants: the cook and the food.
source: constructed
confidence: constructed
:::

:::example
orig: Mama ananipikia wali.
morphemes: mama a-na-ni-pik-i-a wali
gloss: mother.C9 C1.SM-PRS-1SG.OM-cook-APPL-FV cooked.rice.C11
translation: Mother is cooking rice for me.
note: Preview of the applicative (lesson 7.2). -i- after the i of pik-; a third participant, "me", enters as the object prefix.
source: constructed
confidence: constructed
preview: APPL
:::

:::example
orig: Wali unapikwa.
morphemes: wali u-na-pik-w-a
gloss: cooked.rice.C11 C11.SM-PRS-cook-PASS-FV
translation: The rice is being cooked.
note: Preview of the passive (lesson 7.4). The cook has left the sentence; the rice is now the subject.
source: constructed
confidence: constructed
preview: PASS
:::

:::example
orig: Mwalimu anawasomea watoto hadithi.
morphemes: mw-alimu a-na-wa-som-e-a wa-toto hadithi
gloss: C1-teacher C1.SM-PRS-C2.OM-read-APPL-FV C2-child story.C9
translation: The teacher is reading the children a story.
note: Preview of the applicative. The o of som- takes e, not i: -somea.
source: constructed
confidence: constructed
preview: APPL
:::

:::example
orig: Mama alininunulia mkasi.
morphemes: mama a-li-ni-nunu-li-a m-kasi
gloss: mother.C9 C1.SM-PST-1SG.OM-buy-APPL-FV C3-scissors
translation: Mother bought me a pair of scissors.
note: Preview of the applicative. The root nunu- ends in a vowel, so the old l returns: -nunulia.
source: constructed
confidence: constructed
preview: APPL
:::

:::example
orig: Watoto wanachezea kamba.
morphemes: wa-toto wa-na-chez-e-a kamba
gloss: C2-child C2.SM-PRS-play-APPL-FV rope.C9
translation: The children are playing with a rope.
note: Preview of the applicative. The e of chez- takes e: -chezea "play with" (Wiktionary).
source: constructed
confidence: constructed
preview: APPL
:::

:::example
orig: Mwalimu anatusomesha Kiswahili.
morphemes: mw-alimu a-na-tu-som-esh-a ki-swahili
gloss: C1-teacher C1.SM-PRS-1PL.OM-read-CAUS-FV C7-Swahili
literal: The teacher is making us read Swahili.
translation: The teacher is teaching us Swahili.
note: Preview of the causative (lesson 7.6). o takes e: -esh-. Wiktionary: -somesha "make read, educate".
source: constructed
confidence: constructed
preview: CAUS
:::

:::example
orig: Barua hii haisomeki.
morphemes: barua hii ha-i-som-ek-i
gloss: letter.C9 this.C9 NEG-C9.SM-read-STAT-NEG
translation: This letter cannot be read (it is illegible).
note: Preview of the stative (lesson 7.9). No reader in the sentence; -someka "be legible" (Wiktionary). The negative -i still takes the final slot.
source: constructed
confidence: constructed
preview: STAT
:::

:::example
orig: Mama anamlisha mtoto.
morphemes: mama a-na-m-l-ish-a m-toto
gloss: mother.C9 C1.SM-PRS-C1.OM-eat-CAUS-FV C1-child
literal: Mother is making the child eat.
translation: Mother is feeding the child.
note: Preview of the causative. -lisha, learnt whole in part 6, is -la "eat" with -ish-. A short verb, so the form is learnt by heart.
source: constructed
confidence: constructed
preview: CAUS
:::

:::example
orig: Wanapendana sana.
morphemes: wa-na-pend-an-a sana
gloss: C2.SM-PRS-love-RECP-FV very
translation: They love each other very much.
note: Preview of the reciprocal (lesson 7.10). -an- has no harmony: it is the same after every vowel.
source: constructed
confidence: constructed
preview: RECP
:::

## Where it applies

- **Every native verb with a consonant-final root** can in principle take extensions; which ones it actually takes, and with what meaning, is a fact about that verb. Wiktionary lists the derived forms under each verb ("Verbal derivations"); check there before you build a new one.
- **Vowel-final roots** take the l forms: *-nunulia*, *-kalia* "sit on" (Wiktionary).
- **Loan verbs** in *-i*, *-e*, *-u* drop the vowel and follow the same harmony: *-rudia*, *-rudisha*.
- **Short verbs** have their own forms: *-lisha*, *-nywesha*.
- **The harmony rule covers the applicative, the causative -ish-/-esh- and the stative**. The passive *-w-*, the reciprocal *-an-* and the reversive have their own shapes (lessons 7.4, 7.10, 7.11).
- **Every tense, mood and relative** works on an extended verb exactly as on a plain one: *alinipikia*, *atanipikia*, *anipikie*, *aliyenipikia*.
- **The infinitive** too: *kupikia* "to cook for", *kusomesha* "to teach".
- **Nouns** are made from extended verbs as from plain ones (lesson 5.11): Wiktionary gives *mchekeshaji* "comedian" from *-chekesha* "make laugh".

## Watch out

**Do not keep the final vowel in the middle.** *\*Ana-pika-ia* or *\*anapikaia* leaves the *-a* of *pika* inside the word. The *-a* moves to the end: *anapikia*.

**Do not ignore harmony.** *\*Anasomia* puts i after o. The root's last vowel is o, so the applicative is e: *anasomea*. And the reverse: *\*anapikea* puts e after i: *anapikia*.

**Look at the root, not the prefixes.** In *anachezea*, the a of *a-na-* is irrelevant; the vowel that counts is the e of *chez-*.

**Do not add -i- to a vowel-final root.** *\*Ananunuia* is wrong. The old l returns: *ananunulia*.

**Do not build extensions on a short verb by rule.** *\*Kuliisha* or *\*kulaisha* are wrong. The causative of *-la* is *-lisha*: *kulisha* "to feed".

**Do not translate the extension with a separate word as well.** *\*Ananipikia kwa mimi* adds "for me" twice. The applicative already says "for"; the beneficiary goes in the object prefix: *ananipikia*.

**Not every verb takes every extension.** The forms in this lesson are all listed in Wiktionary. A form you build by rule may not exist, or may have a narrower meaning than you expect: *-somesha* means "teach", not any kind of "make read". Lessons 7.3 and 7.7 return to such fixed meanings.

**Learnt-whole verbs are not always obvious.** *-tumia* "use" is the applicative of *-tuma* "send" (Wiktionary), but the meaning has drifted far. Taking it apart explains its shape, not its meaning.

## Reference table

:::table
caption: Vowel harmony in the applicative, causative and stative
confidence: verified
source: wpgrammar "Derived verbs" (applicative and causative tables); wiktionary (-pika, -soma, -nunua derivations)
| Last root vowel | Applicative | Causative | Stative | Example |
|---|---|---|---|---|
| a, i, u (consonant after) | -i- | -ish- | -ik- | pika: pikia, pikisha, pikika |
| e, o (consonant after) | -e- | -esh- | -ek- | soma: somea, somesha, someka |
| vowel-final root, a, i, u | -li- | -lish- | -lik- | nunua: nunulia |
| vowel-final root, e, o | -le- | -lesh- | -lek- | ongea: ongelesha (wpgrammar) |
:::

## New words

:::vocab
-kaanga | - | verb | fry | kukaanga; kikaango "frying pan"
-fuma | - | verb | weave, knit | kufuma; mfumaji "weaver"
-suka | - | verb | plait, braid; shake | kusuka; -sukia, -sukwa
-chonga | - | verb | carve, sculpt; sharpen | kuchonga; -chongea, -chongwa; mchongaji "sculptor"
-bandika | - | verb | stick on, attach, put up (a notice) | kubandika
-chana | - | verb | comb; tear | kuchana; -chanwa, -chanika "be torn"
-sukuma | - | verb | push | kusukuma; -sukumia, -sukumwa, -sukumana, -sukumika
-inua | - | verb | lift, raise | kuinua; -inulia, -inuliwa, -inuka
mtungi | - | noun | water jar, pot | 3/4, pl. mitungi; loan from Persian
mkasi | - | noun | scissors | 3/4, pl. mikasi; loan from Arabic
sindano | - | noun | needle; injection | 9/10, pl. sindano
nyundo | - | noun | hammer | 9/10, pl. nyundo
msumari | - | noun | nail (metal) | 3/4, pl. misumari; loan from Arabic
kamba | - | noun | rope, cord, string | 9/10, pl. kamba; kamba ya kiatu "shoelace"
kiberiti | - | noun | match; box of matches | 7/8, pl. viberiti; loan from Arabic
:::

## Connections

Japanese builds verbs the same way, by suffixes after the stem: 食べる *taberu* "eat", 食べさせる *tabesaseru* "make eat", 食べられる *taberareru* "be eaten" or "can eat". Japanese *-rare-*, like the Swahili stative, covers both "be done" and "be doable". Korean has suffixed causatives and passives too (먹이다 *meogida* "feed" from 먹다 *meokda* "eat"), a close match to *-lisha* from *-la*.

## Exercises

1. Take apart *alinipikia* into its slots and say what each piece does.
2. Build the applicative of *-chonga* "carve" and say which harmony vowel it takes and why.
3. Build the applicative of *-sukuma* "push".
4. Why is the applicative of *-nunua* not *\*-nunuia*?
5. Correct *\*Mwalimu anasomia watoto.*
6. Translate *Mama anamlisha mtoto*, then say which plain verb *-lisha* comes from.
7. Which of these verbs has an extension you met before part 7: *-tumia*, *-safiri*, *-onyesha*, *-kutana*, *-andika*? Name the plain verb where you can.
8. Build "she is cooking for us" (present tense).

## Worked answers

1. *a-li-ni-pik-i-a*: *a-* subject, class 1 "she or he"; *-li-* past; *-ni-* object prefix "me", here the person cooked for; *pik-* "cook"; *-i-* applicative; *-a* final vowel. "She cooked for me." Lessons 4.1, 4.2, 7.1.
2. *-chongea*: the last root vowel is o, and o takes e. Wiktionary confirms *-chongea*. Lesson 7.1, harmony.
3. *-sukumia*: last root vowel u, which takes i. Lesson 7.1.
4. The root *nunu-* ends in a vowel, so the applicative is *-li-*: the l lost from the old form returns before the suffix. *-nunulia*. Lesson 7.1, the lost l.
5. *Mwalimu anawasomea watoto.* The root vowel o needs *-e-*, and a person object takes an object prefix (lesson 4.8), here *-wa-* for *watoto*. Lessons 4.8, 7.1.
6. "Mother is feeding the child." *-lisha* is the causative of the short verb *-la* "eat": "make eat". Lesson 7.1, short verbs.
7. *-tumia* is the applicative of *-tuma* "send"; *-onyesha* is built on *-ona* "see" (lesson 7.7 shows how); *-kutana* has the reciprocal *-an-* on *-kuta* "find, come upon". *-safiri* is a loan with no extension; *-andika* is a plain verb. Lesson 7.1.
8. *Anatupikia.* *a-* "she", *-na-* present, *-tu-* "us" as the beneficiary, *pik-i-a*. Lessons 4.8, 7.1.
