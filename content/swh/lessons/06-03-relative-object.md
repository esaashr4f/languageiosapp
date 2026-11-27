---
id: swh-06-03
lang: swh
part: 6
order: 3
title: "Relative clauses III: object relatives"
point: Relativise objects (kitabu nilichokisoma), know when the object prefix appears, and keep track of two classes in one verb
requires: [swh-06-02]
introduces: [object-relative]
confidence: verified
sources: [wpgrammar, almasi2014, wiktionary]
---

## The idea

So far the noun described has been the **subject** of the relative clause: "the person **who came**", "the factory **which makes** shoes". But a noun can also be the **object** of the relative clause: "the book **which I read**", "the man **whom we saw**". In the second kind, someone else does the action, and the noun described is what the action is done to. This is an **object relative**.

Swahili builds it with the same pieces as lesson 6.2. The only change is that the verb now carries **two different agreements**:

- the **subject prefix** agrees with whoever does the action in the relative clause ("I", "we", "the teacher");
- the **relative marker** agrees with the noun described (the book, the man).

So in *kitabu nilichosoma* "the book which I read", *ni-* is "I" and *-cho-* is class 7, pointing back to *kitabu*. Wikipedia's grammar article puts it plainly: the relative marker "is the same expressing the subject (who) or the object (that, which)". What changes is the subject prefix.

The verb template has one more slot to fill: the object prefix of lesson 4.7. Since the noun described is the object, the verb can also carry an object prefix that points to it: *kitabu nilicho**ki**soma*. The marker *-cho-* and the object prefix *-ki-* then both refer to the same book. Wikipedia's grammar gives the pair *kitu kilichonipendeza* "the thing which pleased me" (subject relative) and *kitu nilichokipenda* "the thing I liked" (object relative, with the object prefix *-ki-*).

Why repeat the object? It follows the rule of lessons 4.7 and 4.8. The object prefix marks a known, particular object, and the noun described by a relative clause is by nature particular: "the book I read" is one book. With people the object prefix is used in any case. So:

- **people**: the object prefix appears: *mtu tuliyemwona* "the person we saw". Almasi and colleagues (p. 296): *mnyama ambaye tumemwona* "an animal which we have seen".
- **things**: the object prefix is common but not required: *kitabu nilichokisoma* and *kitabu nilichosoma* both occur. Wikipedia's grammar has *Chagua yale uliyoweka pembeni* "choose the ones you put aside", with no object prefix. The sources consulted give no firmer rule; use it when you mean that particular thing, as in lesson 4.8.

## How it is built

### Chain of thought

Say "the book which I read was good".

1. The noun described: *kitabu*, class 7.
2. Who does the reading? "I": subject prefix *ni-*.
3. Tense: past, *-li-*.
4. Relative marker: it points to *kitabu*, so class 7 *-cho-*: *ni-li-cho-*.
5. Object prefix (optional for a thing): class 7 *-ki-*.
6. Root: *-soma*. *Nilichokisoma.*
7. Main clause: "was good", *kilikuwa kizuri*: class 7 again, because the subject of the main sentence is the book.
8. *Kitabu nilichokisoma kilikuwa kizuri.*

Three different things agree in that sentence: *ni-* with me, *-cho-* and *-ki-* with the book, and *ki-* in *kilikuwa* with the book.

Say "the man whom we saw yesterday is a doctor".

1. *Mtu*, class 1.
2. Subject: "we", *tu-*; past *-li-*.
3. Relative: class 1 *-ye-*.
4. Object prefix for a person: class 1 *-m(w)-*; before the vowel of *-ona*, *-mw-*.
5. *Tu-li-ye-mw-ona*: *tuliyemwona*.
6. *Mtu tuliyemwona jana ni daktari.*

### With amba-

*Amba-* takes the class of the noun described; the verb after it has its own subject and, usually, an object prefix: *kitabu ambacho nilikisoma*, *mnyama ambaye tumemwona*. This is the only way with tenses that cannot take the relative marker: *kitabu ambacho nimekisoma* "the book I have read".

### Objects of "with"

"The friend I went with": the noun described is the person you went *with*. The relative verb has no object slot for this, so Swahili puts a reference form after *na*, exactly as in lesson 3.14: *naye* "with him". *Rafiki niliyekwenda naye* is literally "the friend whom I went with him". The *-ye-* in the verb and the *-ye* on *na* both point back to the friend. Wikipedia's grammar shows the same doubling with "have": *pesa nilizo nazo* "the money I have" (lesson 6.5).

## Examples

:::example
orig: Kitabu nilichokisoma kilikuwa kizuri.
morphemes: ki-tabu ni-li-cho-ki-som-a ki-li-ku-w-a ki-zuri
gloss: C7-book 1SG.SM-PST-C7.REL-C7.OM-read-FV C7.SM-PST-KU-be-FV C7-good
translation: The book I read was good.
note: ni- agrees with the reader; -cho- and -ki- both point to the book.
source: constructed
confidence: constructed
:::

:::example
orig: Kitabu nilichosoma kilikuwa kizuri.
morphemes: ki-tabu ni-li-cho-som-a ki-li-ku-w-a ki-zuri
gloss: C7-book 1SG.SM-PST-C7.REL-read-FV C7.SM-PST-KU-be-FV C7-good
translation: The book I read was good.
note: The same sentence without the object prefix: possible with a thing.
source: constructed
confidence: constructed
:::

:::example
orig: Mtu tuliyemwona jana ni daktari.
morphemes: m-tu tu-li-ye-mw-on-a jana ni daktari
gloss: C1-person 1PL.SM-PST-C1.REL-C1.OM-see-FV yesterday COP doctor.C9
translation: The man we saw yesterday is a doctor.
note: A person as object: the object prefix -mw- is used.
source: constructed
confidence: constructed
:::

:::example
orig: Chakula utakachokipika kitatosha.
morphemes: ch-akula u-taka-cho-ki-pik-a ki-ta-tosh-a
gloss: C7-food 2SG.SM-FUT-C7.REL-C7.OM-cook-FV C7.SM-FUT-be.enough-FV
translation: The food you will cook will be enough.
note: Future relative -taka- with a 2SG subject and a class 7 object.
source: constructed
confidence: constructed
:::

:::example
orig: Mkate alioununua umeoza.
morphemes: m-kate a-li-o-u-nunu-a u-me-oz-a
gloss: C3-bread C1.SM-PST-C3.REL-C3.OM-buy-FV C3.SM-PRF-go.bad-FV
translation: The bread she bought has gone bad.
note: a- is the buyer (class 1); -o- and -u- are class 3, the bread.
source: constructed
confidence: constructed
:::

:::example
orig: Wageni tunaowakaribisha ni watalii.
morphemes: wa-geni tu-na-o-wa-karibish-a ni wa-talii
gloss: C2-guest 1PL.SM-PRS-C2.REL-C2.OM-welcome-FV COP C2-tourist
translation: The guests we are welcoming are tourists.
note: The class 2 relative -o- and the class 2 object prefix -wa- side by side.
source: constructed
confidence: constructed
:::

:::example
orig: Barua ambayo uliandika imefika.
morphemes: barua amba-yo u-li-andik-a i-me-fik-a
gloss: letter.C9 which-C9.REL 2SG.SM-PST-write-FV C9.SM-PRF-arrive-FV
translation: The letter you wrote has arrived.
note: An object relative with amba-: ambayo points to barua; u- is "you".
source: constructed
confidence: constructed
:::

:::example
orig: Ramani ambayo nimeinunua ni ya zamani.
morphemes: ramani amba-yo ni-me-i-nunu-a ni y-a zamani
gloss: map.C9 which-C9.REL 1SG.SM-PRF-C9.OM-buy-FV COP C9-of old.times
translation: The map I have bought is an old one.
note: With -me-, only amba- is possible; the object prefix -i- is there too.
source: constructed
confidence: constructed
:::

:::example
orig: Rafiki niliyekwenda naye anaishi Mombasa.
morphemes: rafiki ni-li-ye-kw-end-a na-ye a-na-ishi Mombasa
gloss: friend.C9 1SG.SM-PST-C1.REL-KU-go-FV with-3SG C1.SM-PRS-live Mombasa
translation: The friend I went with lives in Mombasa.
note: "With whom": naye after the verb repeats the person. Rafiki takes class 1 agreement.
source: constructed
confidence: constructed
:::

:::example
orig: Mwalimu aliyemwona ni yupi?
morphemes: mw-alimu a-li-ye-mw-on-a ni yupi
gloss: C1-teacher C1.SM-PST-C1.REL-C1.OM-see-FV COP which.C1
translation: Which teacher (was it) who saw him? / Which teacher did he see?
note: With two class 1 people, the form is ambiguous: a- can be the teacher or someone else. Context decides.
source: constructed
confidence: constructed
:::

## Where it applies

- **Objects of any relative tense**: *nilichosoma*, *ninachosoma*, *nitakachosoma*; with *amba-* for the others: *ambacho nimesoma*, *ambacho sikusoma* "which I didn't read".
- **People as objects**, always with the object prefix: *tuliyemwona*, *niliowaona* "whom I saw" (class 2), *ambaye tumemwona*.
- **Things as objects**, with or without the object prefix: *kitu nilichokipenda*, *yale uliyoweka pembeni* (Wikipedia's grammar).
- **Person subjects with class objects**: *nilichosoma* (I + class 7), *alichosoma* (he + class 7), *walivyovinunua* "which they bought" (they + class 8).
- **Class subjects with person objects**: "the man whom the dog chased" is *mtu ambaye mbwa alimfukuza*, where *ambaye* points to the man and *a-* to the dog (an animal, so class 1 agreement).
- **After "with"**: *rafiki niliyekwenda naye*, *kisu nilichokuja nacho* "the knife I came with".
- **Headless**: *nilichosema* "what I said" (the thing which I said), *walichokifanya* "what they did". English "what" in "I know what you did" is often a headless class 7 relative: *Ninajua ulichokifanya.*
- **"The way / the time / the place which"**: these become *-vyo-*, *-po-*, *-ko-*, *-mo-* relatives (lesson 6.6).
- **"The thing I bought it for", "the knife I cut it with"**: Swahili uses the applicative extension of part 7 (*kisu nilichokatia* "the knife I cut with"). Recognise it; part 7 explains it.

## Watch out

**Do not make the subject prefix agree with the noun described.** *\*Kitabu kilichosoma* means "the book which read". If you read it: *kitabu nilichosoma*. Ask: who does the action? That person or thing gets the subject prefix.

**Do not make the relative marker agree with the subject.** *\*Kitabu niliyesoma* uses *-ye-* for "I". The relative marker always looks at the noun described: *-cho-* for *kitabu*.

**Do not put the object prefix before the relative marker.** *\*Nilikichosoma* breaks the slot order. Relative first, object second: *nilichokisoma*.

**Do not use an object prefix of the wrong class.** *\*Mkate aliokinunua* takes class 7 *-ki-*. *Mkate* is class 3: *alioununua*.

**Do not drop the object prefix with a person.** *Mtu tuliyeona* is heard but poor; the person needs *-mw-*: *mtu tuliyemwona* (lesson 4.7).

**Do not add a separate object pronoun.** *\*Kitabu nilichosoma hicho* or *\*kitabu nilichosoma kitabu* copies the noun again after the verb. The relative marker already points to it.

**Do not leave "with" dangling.** *\*Rafiki niliyekwenda na* is cut off, like English "the friend I went with" taken word for word. Swahili needs the reference form: *naye*.

**Do not use English "whom" thinking.** Swahili has no separate "whom": the same *-ye-* serves "who" and "whom". What tells them apart is the subject prefix.

**Do not use the infix with -me-.** *\*Kitabu nilichomesoma*: Almasi and colleagues' rule from lesson 6.2 holds for object relatives too. Use *ambacho nimekisoma*.

## New words

:::vocab
ramani | - | noun | map | 9/10, pl. ramani; loan from Arabic
kamusi | - | noun | dictionary | 9/10, pl. kamusi; loan from Arabic
riwaya | - | noun | novel | 9/10, pl. riwaya; loan from Arabic
shairi | - | noun | poem | 5/6, pl. mashairi; loan from Arabic
ukurasa | - | noun | page | 11/10, pl. kurasa
sura | - | noun | chapter; face, appearance | 9/10, pl. sura; loan from Arabic
maktaba | - | noun | library | 9/10, pl. maktaba; loan from Arabic
kitambulisho | - | noun | identity card | 7/8, pl. vitambulisho
miwani | - | noun | glasses, spectacles | 9/10, pl. miwani
pochi | - | noun | purse, wallet | 9/10, pl. pochi
-kariri | - | verb | recite; learn by heart | kukariri; loan from Arabic
-nakili | - | verb | copy | kunakili; loan from Arabic
-chapisha | - | verb | print, publish | kuchapisha
-futa | - | verb | wipe; erase, delete | kufuta
-hifadhi | - | verb | keep, preserve, save | kuhifadhi; loan from Arabic
-pamba | - | verb | decorate | kupamba
:::

## Connections

Arabic will feel familiar. In *al-kitābu llaḏī qaraʔtu-hu* "the book which I read it", the relative word agrees with the book and a pronoun *-hu* "it" on the verb points back to it: the same doubling as *-cho-* + *-ki-* in *nilichokisoma*. Spanish has a weaker echo in speech, *el libro que lo leí*, which teachers correct; in Swahili the doubling is standard.

## Exercises

1. Say "the dictionary I bought" with the relative marker, with and without the object prefix.
2. Say "the children we saw".
3. Say "the page you erased" with *amba-* and *-me-*.
4. Translate *Shairi alilolikariri lilikuwa refu.*
5. Translate *Maktaba ninayoipenda iko mjini.*
6. Correct *\*Riwaya iliyosoma ni nzuri* ("the novel I read is good").
7. Correct *\*Wageni tuliokaribisha* if the guests are people you are talking about.
8. Say "the people I live with".
9. Translate *Sijui alichokisema.*
10. Show the two readings of *mtoto aliyemwona*.

## Worked answers

1. *Kamusi* class 9: relative *-yo-*, object prefix *-i-*. *Kamusi niliyoinunua*; *kamusi niliyonunua*. Lesson 6.3.
2. *Watoto* class 2, people: object prefix needed. *Tu-li-o-wa-ona*: *watoto tuliowaona*.
3. *Ukurasa* class 11: *ambao*, object prefix *-u-*. *Ukurasa ambao umeufuta.* Only *amba-* works with *-me-* (lesson 6.2).
4. "The poem he recited was long." *Shairi* class 5: *-lo-* and *-li-*; *a-* is the reciter. *Lilikuwa refu*: class 5 adjective with no prefix.
5. "The library I like is in town." *-yo-* and *-i-* for *maktaba*, class 9; *ni-* is "I".
6. The subject prefix must be "I": *riwaya niliyoisoma* (or *niliyosoma*) *ni nzuri*. *Iliyosoma* says "the novel which read".
7. Particular people: *wageni tuliowakaribisha*, with *-wa-* (lessons 4.7, 6.3).
8. *Watu ninaoishi nao.* *-o-* in the verb and *nao* "with them" both point to *watu*.
9. "I don't know what he said." *Alichokisema* is a headless class 7 relative: "the thing which he said".
10. *A-li-ye-mw-ona*. Reading 1, subject relative: the child saw someone ("the child who saw him"). Reading 2, object relative: someone saw the child ("the child whom he saw"). The form is the same; context decides.
