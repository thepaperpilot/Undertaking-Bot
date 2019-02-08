const help = '**Command list for Undertaking bot:**\n' +
	'- `!class <class>`: Gives information about a given class\n' +
	'- `!race <race>`: Gives information about a given race\n' +
	'- `!stance <stance>`: Gives information about a given fighter stance\n' +
	'- `!condition <condition>`: Gives information about a given condition\n' +
	'- `!ability <ability>`: Gives information about a given ability (woefully incomplete)\n' +
	'- `!level`: Gives a checklist for leveling up\n' +
	'\n*The Shatterers*\n' +
	'- `!snecko <entry>`: Gives excerpts from Snecko\'s journal about a given subject\n' +
	'- `!wiki`: Gives a link to the wikia page used by the Saturday group\n' +
	'- `!epilogue`: Posts the epilogue of the Colosseum Campaign'

const level = '**Leveling Up Checklist**\n' +
	'1. Subtract your current Experience Points by 100.\n' +
	'2. Increase your Overall Level by 1.\n' +
	'3. If your overall level is now 5, 11, or 17, this is a Growth Level, skip steps 4-6 and do steps 3a-3d instead.\n' +
	'	a. Either:\n' +
	'		i. Increase one of your Ability Scores by 2, and a different Ability Score by 1.\n' +
	'		ii. Increase three different Ability Scores by 1.\n' +
	'	b. Update your Ability Modifier for increased Ability Scores.  You can find your Ability Score’s Modifier by subtracting an Ability Score by 10, dividing it by 2, and rounding down.\n' +
	'	c. If your Constitution Modifier increases by 1, increase your maximum health by your current overall level - 1.\n' +
	'	d. Check for abilities that improve on Growth Levels.\n' +
	'4. If you want to multiclass into a new Class, skip steps 5-6 and do steps 4a-4b instead:\n' +
	'	a. Pick a Class that you have no levels in.  Add the new class to your character sheet at level 1.\n' +
	'	b. Take all of the Starter Abilities for the Class.\n' +
	'5. Pick a Class of 1st level or higher to gain a level in. Increase the level for that Class by 1 on your character sheet.\n' +
	'6. Choose and write down 1 ability to learn from the available Novice, Adept, Expert, or Sub-Class Abilities.\n' +
	'	a. Make sure you meet the “Unlock” requirements at the top of the ability or ability section before picking an ability.\n' +
	'7. Increase your maximum and current Hit Points by the “Hit Point Gain after 1st Level” for the Class.\n' +
	'8. Increase your Rest Dice by the “Rest Dice Gain after 1st Level” for the Class.\n' +
	'9. Increase your Mana by the “Mana Gain after 1st Level” for the Class.\n' +
	'10. Check for any abilities that improve based on your class or overall level, such as “Spellcasting”, “Sneak Attack”, and “Fighting Stance”.\n' +
	'11. You are now finished leveling up. Congratulations!\n'

const wiki = 'https://undertakingrpg.wikia.com/wiki/UndertakingRPG_Wiki'

const epilogue = '**The Shatterers\' Colosseum Campaign Epilogue**\n' +
	'Shatterstar continued wandering from town to town as a hero.\n' +
	'Lexxi went back to Local U but after seeing a Shatterstar performance when he visited again about a year and a half later, she realized she didn\'t want to stay at Local U, and rejoined Shatterstar\'s group.\n' +
	'Vanessa sought spiritual enlightenment whilst serving as Shatterstar\'s spiritual advisor.\n' +
	'Snecko and Pecko joined Stix and Zeke at the Colosseum. They worked to repair all the damage, and in the process became close to their fellow kobold coworkers.\n' +
	'The Colosseum took a year off but had a grand reopening two years after the events of this campaign. Shatterstar and company returned to compete and, after an incredible tournament, the kobolds also rejoined the group and they all set off to continue as an adventuring party. Their first goal was to follow up on a lead from Zeke on where to find another book of holding. But that\'s a story, for another time. '

module.exports = {
	help,
	'?': help,
	level,
	levelup: level,
	wiki,
	wikia: wiki,
	epilogue
}
