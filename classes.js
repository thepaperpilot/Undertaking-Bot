const cleric = 'Information about **Cleric**:\n' +
	'*Class Categorization:* Spellcaster\n' +
	'*Rest Dice:* 1d8\n' +
	'*Hit Points at 1st Level:* 8 + your Constitution modifier\n' +
	'*Mana:* 2\n\n' +
	'__Cleric Abilities__\n' +
	'*Starter (1st Level Cleric Abilities)*\n' +
	'- 🔘 Starter: Faith Roll 🔘\n' +
	'- 🔘 Starter: Grand Revelation 🔘\n' +
	'- 🔘 Starter: Spellcasting 🔘\n' +
	'- 🔘 Starter: Cleric Spells 🔘\n' +
	'- 🔘 Starter: Divine Dominion 🔘\n' +
	'*Novice Abilities*\n' +
	'- 🥇 Clerical Approach 🥇\n' +
	'- 🥇 💠 Freedom of Faith 💠 🥇\n' +
	'*Adept Abilities*\n' +
	'- 🆓 💠 Given Abilitiy: Self Sacrifice 💠 🆓\n' +
	'- 🥈 Summon Divine Guardian 🥈\n\n' +
	'*Cleric Sub-Classes: Divine Dominion*:\n' +
	'- Peace Dominion'
const peace = 'Information about Cleric\'s Sub-Class **Divine Dominion: Peace Dominion**:\n' +
	'*Peace Dominion Starter Abilities*\n' +
	'- 🔘 Starter: Dominion Spells 🔘\n' +
	'- 🔘 Starter: Mediator 🔘\n' +
	'- 🔘 Starter: 💠 Calm Magicks 💠 🔘\n' +
	'- 🔘 Starter: 💠 Miracle of Peace 💠 🔘\n' +
	'*Peace Dominion Abilities*\n' +
	'- 🔵 Active Peace 🔵\n' +
	'- 🔵 💠 Spare the Dying 💠 🔵\n' +
	'- 🆓 Divine Guardian Forms 🆓\n'
const fighter = 'Information about **Fighter**:\n' +
	'*Class Categorization:* Martial\n' +
	'*Rest Dice:* 1d10\n' +
	'*Hit Points at 1st Level:* 10 + your Constitution modifier\n' +
	'*Mana:* None\n\n' +
	'__Fighter Abilities__\n' +
	'*Starter (1st Level Fighter Abilities)*\n' +
	'- 🔘 Starter: Size-Up 🔘\n' +
	'- 🔘 Starter: Fighting Stance 🔘\n' +
	'*Novice Abilities*\n' +
	'- 🥇 Adrenaline 🥇\n' +
	'- 🥇 Weapon Savvy 🥇\n' +
	'*Adept Abilities*\n' +
	'- 🆓 Given Abilitiy: Weapon Fanatic 🆓\n' +
	'- 🥈 Extra Attack 🥈\n' +
	'- 🥈 Thrives Under Pressure 🥈\n\n' +
	'*Fighter Sub-Classes: Martial Archetype*:\n' +
	'- Gladiator'
const gladiator = 'Information about Fighter\'s Sub-Class **Martial Archetype: Gladiator**:\n' +
	'*Gladiator Starter Abilities*\n' +
	'- 🆓 Given Ability: Performer 🆓\n' +
	'- 🆓 Given Ability: Heat 🆓\n' +
	'- 🆓 Given Ability: Gladiator Role 🆓\n' +
	'*Gladiator Abilities*\n' +
	'- 🔵 Brand-Builder 🔵\n' +
	'- 🔵 Crowd-Worker 🔵\n' +
	'- 🔵 Fighting Stance: Gladiator 🔵\n'
const rogue = 'Information about **Rogue**:\n' +
	'*Class Categorization:* Martial\n' +
	'*Rest Dice:* 1d8\n' +
	'*Hit Points at 1st Level:* 8 + your Constitution modifier\n' +
	'*Mana:* None\n\n' +
	'__Rogue Abilities__\n' +
	'*Starter (1st Level Rogue Abilities)*\n' +
	'- 🔘 Starter: Speak in Code 🔘\n' +
	'- 🔘 Starter: Sneak Attack 🔘\n' +
	'*Novice Abilities*\n' +
	'- 🥇 One Step Ahead 🥇\n' +
	'- 🥇 Multi-Talented 🥇\n' +
	'*Adept Abilities*\n' +
	'- 🆓 Given Abilitiy: Desperate Quickness 🆓\n' +
	'- 🥈 Evasive 🥈\n' +
	'- 🥈 Exploit 🥈\n\n' +
	'*Rogue Sub-Classes: Roguish Archetype*:\n' +
	'- Ninja'
const ninja = 'Information about Rogue\'s Sub-Class **Roguish Archetype: Ninja**:\n' +
	'*Ninja Starter Abilities*\n' +
	'- 🆓 Given Ability: Way of the Ninja 🆓\n' +
	'- 🆓 Given Ability: Spirit 🆓\n' +
	'*Ninja Abilities*\n' +
	'- 🔵 Mystic Seals 🔵\n' +
	'- 🔵 Run Like The Wind 🔵\n' +
	'- 🔵 Shadow Walk 🔵\n' +
	'- 🔵 Multiplicity 🔵\n'
const wizard = 'Information about **Wizard**:\n' +
	'*Class Categorization:* Spellcaster\n' +
	'*Rest Dice:* 1d6\n' +
	'*Hit Points at 1st Level:* 6 + your Constitution modifier\n' +
	'*Mana:* 3\n\n' +
	'__Wizard Abilities__\n' +
	'*Starter (1st Level Wizard Abilities)*\n' +
	'- 🔘 Starter: Spellcasting 🔘\n' +
	'- 🔘 Starter: Wizard Spells 🔘\n' +
	'- 🔘 Starter: Spell Transferance 🔘\n' +
	'*Novice Abilities*\n' +
	'- 🥇 Meditative Rest 🥇\n' +
	'- 🥇 School of Study 🥇\n' +
	'*Adept Abilities*\n' +
	'- 🆓 Given Abilitiy: Arcane Bond 🆓\n' +
	'- 🥈 Enchant 🥈\n' +
	'- 🥈 Levitate 🥈\n\n' +
	'*Wizard Sub-Classes: Arcane Archetype*:\n' +
	'- Plague Doctor'
const plague = 'Information about Wizard\'s Sub-Class **Archane Archetype: Plague Doctor**:\n' +
	'*Plague Doctor Starter Abilities*\n' +
	'- 🆓 Given Ability: Practitioner 🆓\n' +
	'*Ninja Abilities*\n' +
	'- 🔵 Toxin Caster 🔵\n' +
	'- 🔵 Resilient 🔵\n' +
	'- 🔵 Sickly Touch 🔵\n' +
	'- 🔵 Healing Fingers 🔵\n'

module.exports = {
	cleric,
	peace,
	fighter,
	gladiator,
	rogue,
	ninja,
	wizard,
	plague,
	doctor: plague
}
