---
id: swh-04-07
lang: swh
part: 4
order: 7
title: "Object prefixes I: me, you, him, us, them"
point: Put -ni-, -ku-, -m(w)-, -tu-, -wa- in the object slot and mark 'you all' with -eni
requires: [swh-04-06]
introduces: [object-prefix]
confidence: verified
sources: [almasi2014, thompson2001, polome1967, wiktionary, wpgrammar]
---

## The idea

"She loves me." In English, "me" is a separate word after the verb. In Swahili it goes inside the verb, in slot 6 of the template, between the tense marker and the root: *a-na-ni-penda*, *ananipenda*. This piece is the **object prefix**: a prefix that shows who or what the action is done to.

Swahili does not use its independent pronouns (*mimi*, *wewe*...) for ordinary objects. "She loves me" is not *\*anapenda mimi*. The object is in the verb, just as the subject is. The pronoun can still be added after the verb for emphasis: Thompson and Schleicher give *Fatma anampenda* "Fatma loves him" and *Fatma anampenda yeye* "Fatma loves *him*".

Here are the object prefixes for persons:

- *-ni-* "me"
- *-ku-* "you" (one person)
- *-m-* "him, her" (class 1), written *-mw-* before a vowel
- *-tu-* "us"
- *-wa-* "you" (several) and "them" (class 2)

Three of them are the same as the subject prefixes (*ni-*, *tu-*, *wa-*). Three differ: "you" is *-ku-* not *u-*, "him, her" is *-m-* not *a-*, and "you all" shares *-wa-* with "them". Polomé makes the same observation.

The two *-wa-*s create an obvious problem: *niliwaona* could be "I saw them" or "I saw you (all)". Almasi and colleagues say that *-wa-* alone is normally taken as "them". To make it "you (all)", the most common solution is to change the final *-a* to *-e* and add *-ni*, the same *-ni* that makes plural commands (lesson 2.7): *niliwaoneni* "I saw you (all)". Loan verbs add *-ni* to their own vowel. Two other solutions exist: add *ninyi* after the verb (*niliwaona ninyi*), or, least commonly, use *-ku-* with *-eni* (*nilikuoneni*); Polomé notes that this last form means "each one of you".

Which tenses take an object prefix? All of them, positive and negative. Thompson and Schleicher list *ninamwona* "I see him", *simwoni* "I don't see him", *nimemwona*, *sijamwona*, *nilimwona*, *sikumwona*, *nitamwona*, *sitamwona*. The prefix always stands right before the root, whatever comes before it.

When is an object prefix needed? Thompson and Schleicher's rule is firm: it must be used when the object is a person or a pronoun (*Tunamfahamu Adija* "we know Adija"). Wpgrammar is more cautious: with people it is the norm, but counter-examples are "commonplace", and use depends on how definite and important the object is. This guide follows the practical rule: **with a person as object, put the object prefix in.** Lesson 4.8 deals with things, where it is optional.

People in other noun classes (*daktari*, *kijana*, *rafiki*) still take the class 1 and 2 object prefixes, as they take class 1 and 2 subject prefixes (lesson 3.9). Almasi and colleagues give *Nilimshauri kijana* "I advised the young person".

Three verbs, according to Almasi and colleagues, always take an object prefix, and it is always a person: *-ambia* "tell (someone)", *-ita* "call (someone)" and *-pa* "give (to someone)". Wiktionary marks *-ambia* and *-pa* as having "no plain infinitive". With *-pa*, the object prefix is the person who receives: *nilikupa mkate* "I gave you bread" (Almasi and colleagues).

## How it is built

Say "we will help you".

1. Subject "we": *tu-*. Future: *-ta-*.
2. Object "you" (one): *-ku-*.
3. Root *-saidi-*, final *-a*.
4. *Tu-ta-ku-saidi-a*: *Tutakusaidia.*

Now "I didn't see the teacher".

1. Negative "I": *si-*. Negative past: *-ku-*.
2. Object: the teacher, a person, class 1: *-m-*; before the vowel of *-ona*, *-mw-*.
3. *Si-ku-mw-on-a*: *Sikumwona mwalimu.*

Note the two *ku*s in *sikukupenda* "I didn't love you" (Almasi and colleagues' example): the first is the negative past in slot 4, the second is "you" in slot 6.

Now "they welcomed you (all)".

1. Subject *wa-*, past *-li-*, object *-wa-*.
2. *-karibisha*: final *-a* becomes *-e*, then *-ni*: *wa-li-wa-karibish-eni*.

Short verbs lose *ku-* when there is an object prefix, because the object prefix can carry the stress (Polomé; lesson 4.4). That is why *-pa* never shows *ku-*: it always has an object. *Alinipa* "she gave me".

## Examples

:::example
orig: Ananipenda.
morphemes: a-na-ni-pend-a
gloss: C1.SM-PRS-1SG.OM-love-FV
translation: She loves me. / He loves me.
note: The object prefix -ni- sits between the tense and the root.
source: constructed
confidence: constructed
:::

:::example
orig: Tutakusaidia.
morphemes: tu-ta-ku-saidi-a
gloss: 1PL.SM-FUT-2SG.OM-help-FV
translation: We will help you.
note: "You" as object is -ku-, not u-.
source: constructed
confidence: constructed
:::

:::example
orig: Nilimwona mwalimu sokoni.
morphemes: ni-li-mw-on-a mw-alimu soko-ni
gloss: 1SG.SM-PST-C1.OM-see-FV C1-teacher market.C5-LOC
translation: I saw the teacher at the market.
note: The object noun follows, and the verb still has -mw- (before a vowel).
source: constructed
confidence: constructed
:::

:::example
orig: Hatumjibu.
morphemes: ha-tu-m-jibu
gloss: NEG-1PL.SM-C1.OM-answer
translation: We're not answering him.
note: -m- before a consonant. A loan verb: no final vowel to change.
source: constructed
confidence: constructed
:::

:::example
orig: Sikumwona.
morphemes: si-ku-mw-on-a
gloss: NEG.1SG.SM-PST.NEG-C1.OM-see-FV
translation: I didn't see her.
note: Negative past -ku- in slot 4, object -mw- in slot 6.
source: constructed
confidence: constructed
:::

:::example
orig: Walitukaribisha nyumbani.
morphemes: wa-li-tu-karibish-a nyumba-ni
gloss: C2.SM-PST-1PL.OM-welcome-FV house.C9-LOC
translation: They welcomed us into their home.
note: Subject wa- "they" and object -tu- "us".
source: constructed
confidence: constructed
:::

:::example
orig: Niliwaoneni sokoni.
morphemes: ni-li-wa-on-eni soko-ni
gloss: 1SG.SM-PST-2PL.OM-see-PL market.C5-LOC
translation: I saw you (all) at the market.
note: -wa- plus -eni: "you (several)", not "them" (Almasi and colleagues).
source: constructed
confidence: constructed
:::

:::example
orig: Mama aliwaita watoto.
morphemes: mama a-li-wa-it-a wa-toto
gloss: mother.C9 C1.SM-PST-C2.OM-call-FV C2-child
translation: Mother called the children.
note: -ita always takes a personal object prefix.
source: constructed
confidence: constructed
:::

:::example
orig: Nilimwambia habari.
morphemes: ni-li-mw-ambi-a habari
gloss: 1SG.SM-PST-C1.OM-tell-FV news.C10
translation: I told him the news.
note: The person told is the object prefix; the news follows as a second object.
source: constructed
confidence: constructed
:::

:::example
orig: Alinipa zawadi.
morphemes: a-li-ni-p-a zawadi
gloss: C1.SM-PST-1SG.OM-give-FV gift.C9
translation: She gave me a present.
note: -pa: the receiver is the object prefix, and there is no ku- because the object prefix carries the stress.
source: constructed
confidence: constructed
:::

:::example
orig: Daktari alimshukuru kijana.
morphemes: daktari a-li-m-shukuru ki-jana
gloss: doctor.C5 C1.SM-PST-C1.OM-thank C7-youth
translation: The doctor thanked the young man.
note: Kijana is class 7 but a person: class 1 object prefix.
source: constructed
confidence: constructed
:::

:::example
orig: Nisaidie!
morphemes: ni-saidi-e
gloss: 1SG.OM-help-SBJV
translation: Help me!
note: Preview of lesson 4.10: a command with an object prefix ends in -e.
source: constructed
confidence: constructed
preview: SBJV
:::

## Where it applies

- **Every person as object**: *ananipenda*, *anakupenda*, *anampenda*, *anatupenda*, *anawapenda(ni)*.
- **Every tense, positive and negative**: *ninamwona*, *simwoni*, *nilimwona*, *sikumwona*, *nitamwona*, *sitamwona*, *nimemwona*, *sijamwona* (Thompson and Schleicher).
- **With a noun object that is a person**: *Nilimwona mwalimu*; *Tunamfahamu Adija*.
- **With a pronoun for emphasis**: *Ananipenda mimi* "she loves *me*".
- **People and animals in other classes**: *nilimwona daktari*, *niliwaona vijana*, *nilimwona paka* "I saw the cat" (lesson 3.9: animals agree like people).
- **The receiver of *-pa*, and the person addressed by *-ambia* and *-ita***: *alinipa*, *nilimwambia*, *aliwaita*.
- **Verbs whose English partner needs a preposition**: Thompson and Schleicher note that *-sikiliza* "listen to", *-angalia* "look at" and *-subiri* "wait for" take a direct object: *ninakusikiliza* "I'm listening to you", *nitakusubiri* "I'll wait for you".
- **Commands with a person object**: *Nisaidie!* (lesson 4.10).
- **Infinitives**: *kukuona* "to see you": *Ninataka kukuona* "I want to see you" (wpgrammar: infinitives can take object prefixes).

## Watch out

**Not *\*Anapenda mimi*.** The object goes in the verb: *Ananipenda*. The pronoun is extra.

**Not *\*Ninaupenda* for "I love you".** *U-* is the subject "you". The object "you" is *-ku-*: *Ninakupenda*. (*-u-* is an object prefix too, but for class 3 and 11 things: lesson 4.8.)

**Not *\*Ninaapenda* for "I love him".** The class 1 object is *-m-*: *Ninampenda*.

**Not *\*Nilimona*.** Before a vowel, *-m-* becomes *-mw-*: *nilimwona*. Lesson 1.6 showed the same with noun prefixes (*mw-alimu*).

**Do not forget *-eni* for "you all".** *Nitawasaidia* means "I'll help them". "I'll help you (all)" is *Nitawasaidieni*, or *Nitawasaidia ninyi*.

**Do not put the object after the root, French-style or Spanish-style.** *\*Anapendani* imitates Spanish *ámame*. Inside the verb, the object always precedes the root.

**Do not use *-pa*, *-ambia* or *-ita* without a person prefix.** *\*Alipa zawadi* is not "she gave a present". *Alimpa zawadi* "she gave him a present". (*Alilipa* "she paid" is another verb.)

**Do not read every *ku* the same way.** *Sikukupenda* "I didn't love you": negative past *-ku-*, then object *-ku-*. *Anakula* "he is eating": KU of a short verb. *Anakupenda* "he loves you": object *-ku-*.

**Do not keep *ku-* before an object.** *\*Alikunipa* is wrong: *alinipa*.

## Reference table

:::table
caption: Object prefixes for persons, with -penda and -ona
confidence: verified
source: almasi2014 ch. 11; thompson2001 pp. 244–246; polome1967 §2.4.4.3
| Object | Prefix | "she loves..." | "they saw..." |
|---|---|---|---|
| me | -ni- | ananipenda | waliniona |
| you (one) | -ku- | anakupenda | walikuona |
| him, her | -m(w)- | anampenda | walimwona |
| us | -tu- | anatupenda | walituona |
| you (several) | -wa- ... -eni | anawapendeni | waliwaoneni |
| them | -wa- | anawapenda | waliwaona |
:::

## New words

:::vocab
-ambia | - | verb | tell (someone) | always with a personal object prefix; no plain infinitive
-ita | - | verb | call (someone) | with a personal object prefix; no plain infinitive
-pa | - | verb | give (to someone) | always with an object prefix for the receiver; no plain infinitive
-karibisha | - | verb | welcome, invite in | kukaribisha
-shukuru | - | verb | thank | kushukuru; loan from Arabic
-salimu | - | verb | greet | kusalimu; loan from Arabic
-heshimu | - | verb | respect, honour | kuheshimu; loan from Arabic
-alika | - | verb | invite | kualika
-sumbua | - | verb | bother, disturb | kusumbua
-chukia | - | verb | hate | kuchukia
-kuta | - | verb | find, come upon | kukuta
-sindikiza | - | verb | accompany, see off | kusindikiza
-fukuza | - | verb | chase away; dismiss | kufukuza
-kumbatia | - | verb | hug, embrace | kukumbatia
-dharau | - | verb | despise, look down on | kudharau; loan from Arabic
msaada | - | noun | help | 3/4, pl. misaada
mpenzi | - | noun | darling, lover | 1/2, pl. wapenzi
:::

## Connections

French and Spanish also put object pronouns before the verb (*je te vois*, *te veo*), but as separate words. Swahili builds them into the verb. Many Bantu languages have the same slot: it is a family trait, not a Swahili oddity. Japanese and Korean mostly leave objects unsaid when they are clear; Swahili marks people on the verb even when the noun is present.

## Exercises

1. Say "he loves you", "he loves us", "he loves them", "he loves you (all)".
2. Say "I didn't call you" and "I won't call you".
3. Translate: *Walimwambia mwalimu kwamba hawakumwona.* (*kwamba* "that")
4. Say "the doctor gave me medicine".
5. Say "we respect our elders" (*wazee*).
6. Correct *\*Ninaona wewe.*
7. Correct *\*Nilimona mama yangu.*
8. Take apart *hawakutusalimu* and translate it.

## Worked answers

1. *Anakupenda*, *anatupenda*, *anawapenda*, *anawapendeni*. Only the object slot changes; "you all" adds *-eni*.
2. *Sikukuita* (negative past *-ku-*, object *-ku-*). *Sitakuita.*
3. *Wa-li-mw-ambi-a*: "they told (him)"; *ha-wa-ku-mw-on-a*: "they didn't see him/her". "They told the teacher that they hadn't seen him." (*Kwamba* is taught in part 6; it is glossed here.)
4. *Daktari alinipa dawa.* *-pa* with *-ni-*, no *ku-*.
5. *Tunawaheshimu wazee wetu.* A person object: *-wa-*.
6. The object is a prefix, and "you" is *-ku-*: *Ninakuona.* (*Ninakuona wewe* stresses "you".)
7. *-m-* becomes *-mw-* before a vowel: *Nilimwona mama yangu.*
8. *Ha-wa-ku-tu-salimu*: negative class 2, negative past, object "us", "greet" (a loan verb). "They didn't greet us."
