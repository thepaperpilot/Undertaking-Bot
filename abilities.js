/* Cleric */
const faithroll = 'Information about the Cleric\'s **🔘 Starter: Faith Roll 🔘** ability:\n' +
	'At its core, a cleric is one whose faith gets them through tough situations. As it is said, a cleric without faith is not a cleric at all.\n' +
	'Depending on your dominion and abilities, certain actions have a chance of causing a Faith Roll afterward. Abilities that grant Faith Rolls have this symbol next to their title: 💠.\n' +
    'When you trigger a Faith Roll, you can choose to roll a 1d100, gaining certain effects from the Faith Roll’s results.\n'
const grandrevelation = 'Information about the Cleric\'s **🔘 Starter: Grand Revelation 🔘** ability\n' +
	'When you make a Faith Roll, on a roll of 100, your faith is palpably answered by a Grand Revelation.\n' +
    'The DM chooses the nature of the intervention: a cleric ability or spell is common, as are summoning holy aides, curing and healing of self, lasting buffs, or other common events.  Generally these abilities, spells, or boons should be no higher than what can be used by a cleric of 3 levels higher than the player character, and no summoned creature of a challenge rating more than 2 higher than the player’s current overall level.  However, a Grand Revelation need not necessarily be exactly this powerful.  Additionally, the player and all allied creatures that witness the revelation have their Wisdom modifier increased by +1 until their next long rest or until 24 hours pass, whichever comes first.\n' +
    'After a Grand Revelation, another cannot occur until after the next long rest.'
const spellcasting = 'Information about the Cleric\'s **🔘 Starter: Spellcasting 🔘** ability\n' +
	'Your connection to your deity has been rewarded with the miracle of spellcasting. Despite your previous capabilities at spellcasting, you find yourself progressively more magically capable by channeling your natural mana through your faith in your deity. \n\n' +
	'*Cantrips*\n' +
	'Upon gaining your 1st level of Cleric, you know three Cantrips from the Cleric’s spell list.  You will learn additional cantrips as you advance in the Cleric class. You gain an additional Cantrip when you hit Adept Cleric, and then another at Expert Cleric.\n\n' +
	'*Preparing and Casting Spells*\n' +
	'A cleric, like all spellcasters, expends Mana to cast spells (expanded upon in the Mana section of Magic).  As well, you regain your Mana fully on a Long Rest, and partially on a Short Rest.\n' +
    'Like other spellcasters, a cleric can prepare and memorize a list of spells that they can cast each day.  However, since clerics lean upon their deities for their magic, they do not learn cleric spells in the traditional sense.  Instead, they become capable enough to channel more powerful spells.  As such, clerics can prepare a number of spells from the cleric spell list that they are capable of casting equal to:\n\n' +
	'> Your Cleric level + your Wisdom modifier, (minimum of 1)\n\n' +
	'These are the spells that can be chosen from this day. For example, Thadius is a 5th level Cleric with a Wisdom of 17.  He can prepare eight spells, picking a combination of spells from the 1st, 2nd, or 3rd level cleric spell.  Thadius can cast any spell he wants until he runs out of mana, but he cannot cast a spell that he has not prepared.  This means that if he has 2 mana left, but has only prepared 3rd level spells, then the mana will go unused until he regains mana or prepares new spells.\n' +
    'A Cleric can change the spells they have prepared at the end of any long rest they take.  The act of preparing them does take time, though. It takes 1 minute per spell level for each spell on your list of prepared spells.\n\n' +
	'*Spellcasting Ability*\n' +
	'Being that you obtain your magic ability through intense devotion and faith, Wisdom is the spellcasting ability for a Cleric.  Meaning that your Wisdom modifier comes into play when setting the DC for your cleric spells and when making an attack with one.\n\n' +
	'> *Spell Save DC:* 8 + your proficiency bonus + your Wisdom modifier\n' +
	'> *Spell Attack Modifier:* your proficiency bonus + your Wisdom modifier\n\n' +
	'*Ritual Casting*\n' +
	'You can cast a cleric spell as a ritual if that spell has the ritual tag, and you have the spell prepared.\n\n' +
	'*Spellcasting Focus*\n' +
	'You may use a holy focus as a spellcasting focus for casting your cleric spells.  Spellcasting focuses allow spells to be cast without needing the material components, but does not replace material components that have a cost or are said to be used up by the spell.'

module.exports = {
	faithroll,
	faith: faithroll,
	grandrevelation,
	grand: grandrevelation,
	revelation: grandrevelation,
	spellcasting,
	casting: spellcasting,
	spells: spellcasting
}
