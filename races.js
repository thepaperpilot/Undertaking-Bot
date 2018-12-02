const human = 'Information about the **Human** race:\n' +
	'*Core Human Traits:*\n' +
	'*Compatibility:* Mammal\n' +
	'*Ability Score Increase:* Pick three different Ability Scores, you increase each of these by 1.\n' +
	'*Lifespan:* Humans reach adulthood in their late teens and live less than a century.\n' +
	'*Size:* Medium; Humans are various when it comes to height and build.  Human height in feet can be anywhere from the low 5s to the high 6s on average, and their weight ranges from below 100 lb. to 200 lb. or more.\n' +
	'*Speed:* Your base ground speed is 30 feet.\n' +
	'*Languages:* You can speak, read, and write Common and one extra language of your choice.  Humans can, and do, live across many different lands and with many different peoples, and often learn the languages of those they live or work with, no matter the obscurity or difficulty.  Humans often spice up their own speech patterns with words from a multitude of languages as well, especially languages they know.\n\n' +
	'*Human Branches:*\n' +
	'- City Human\n' +
	'- Country Human\n' +
	'- Gifted Human\n' +
	'- Assimilant Human'
const city = '**City Human Traits**:\n' +
	'*Skill Proficiency:* You have proficiency in one skill from the following list: Culture, Insight, Persuasion, Deception.\n' +
	'*Language:* You can speak, read, and write in one extra language of your choice.\n' +
	'*Fast-Walker:* Your base ground speed is 35ft.\n' +
	'*Night Owl:* You can sleep for 1 hour less than normal during a long rest.\n' +
	'*Hard Sell:* Add your proficiency twice when using Wisdom (Insight), Presence (Persuasion), or Presence (Deception) checks in relation to bartering if you are already proficient in these skills.\n' +
	'*Pocket Protector:* You automatically have a +5 Awareness toward creatures using Dexterity (Sleight of Hand) on you.'
const country = '**Country Human Traits**:\n' +
	'*Skill Proficiency:* You have proficiency in one skill from the following list: Athletics, Craft, Nature, Instinct.\n' +
	'*Weapon Proficiency:* You have proficiency in sickles, scythes, tridents, and whips.\n' +
	'*Farmer’s Advantage:* You add your proficiency twice to Wisdom (Nature) and Intelligence (Craft) checks in relation to farming or cooking if you are already proficient in either skill.\n' +
	'*Pet Pal:* Add your proficiency twice to Wisdom (Instinct) checks toward domesticated beasts, such as pets and mounts, if you are already proficient in Wisdom (Instinct).\n' +
	'*Early Bird:* Your first ability check after a long rest has advantage.'
const gifted = '**Gifted Human Traits**:\n' +
	'*Ability Score Increase:* Pick three different ability scores that you did not increase as part of your core traits.  Increase each of these ability scores by 1.\n' +
	'*Skill Proficiency:* You learn one skill proficiency of your choice.'
const assimilant = '**Assimilant Human Traits**:\n' +
	'*Adopted Race:* Choose one race other than your core race.  You were adopted into this race’s culture or have otherwise come to know the race as if you were one of their own.  As such, your knowledge of this race is comparable to a member of the race itself.\n' +
	'*Adopted Ability Score Increase:* Choose one of the ability scores increased by your adopted race’s core traits.  You increase that ability score by 1.\n' +
	'*Adopted Languages:* You can speak, read, and write one language listed under your adopted race. If you already know all the languages of your adopted race, then choose one other language to know.\n' +
	'*Adopted Weapon Proficiency:* You are proficient in the same weapons as your adopted race’s core or one of its branches. If the race has natural armor or natural weaponry, you can gain proficiency in all armors or unarmed attacks instead respectively.  If the adopted race and its branches have no weapon proficiencies, then you are proficient in 2 weapons and 1 armor of your choice.\n' +
	'*Behavioral Experience:* You have advantage on Presence (Insight) checks directed at members of your adopted race.\n' +
	'*Cultural Osmosis:* You have advantage on Intelligence (Culture) checks related to your adopted race.\n' +
	'*Adopted Accent:* Over the years, you have adopted the local accent and speech patterns of a specific town. You have advantage on Presence (Persuasion) checks with residents of this town if you know that the target creature is from this town.\n' +
    'Depending on the scope of the campaign, the GM might allow the speech pattern to be regional instead.'

const elf = 'Information about the **Elf** race:\n' +
	'*Core Elf Traits:*\n' +
	'*Compatibility:* Mammal\n' +
	'*Ability Score Increase:* Your Dexterity increases by 2.\n' +
	'*Lifespan:* Elves actually reach physical maturity about the same time that humans do.  However, elves also live to be upwards of 700 years old, and thus have a different approach as to what truly makes you an adult.  Incidentally, most elves do not culturally have acceptance as adults until around 100 years of age, as they are judged by experience and knowledge, not years lived.\n' +
	'*Size:* Medium; Elves are similar to humans, but are slightly smaller in stature.  They range from being a bit below 5 feet to just over 6 feet tall, and generally weigh within the range of 90 to 145 pounds.\n' +
	'*Speed:* Your base ground speed is 30 feet.\n' +
	'*Skill Proficiency:* You have proficiency in the Wisdom (Perception) skill.\n' +
	'*Languages:* You can speak, read, and write Common, Elven, and one language of your choice.\n\n' +
	'*Elf Branches:*\n' +
	'- Light Elf\n' +
	'- Dark Elf\n' +
	'- Dawn Elf\n' +
	'- Dusk Elf'
const light = '**Light Elf Traits**:\n' +
	'*Ability Score Increase:* Your Intelligence increases by 1.\n' +
	'*Skill Proficiency:* You have proficiency in the Intelligence (Arcana) skill.\n' +
	'*Fey Ancestry:* You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.\n' +
	'*Illuminary:* You can cast the spell Luminescence as a cantrip without needing to use the verbal or somatic components.  You can only use this on yourself.\n' +
	'*Cantrip:* You know one Cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.'
const dark = '**Dark Elf Traits**:\n' +
	'*Ability Score Increase:* Your Wisdom increases by 1.\n' +
	'*Skill Proficiency:* You have proficiency in the Wisdom (Theology) skill.\n' +
	'*Fey Ancestry:* You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.\n' +
	'*Darkvision 60ft:* Being either accustomed to the moonlit forests or gazing off into the night sky, you have superior vision when peering into dark and dim light conditions.  You can see in dim light within 60ft of you as if it were in bright conditions, and you can see in darkness as if it were dim conditions up to the same distance.\n' +
	'*Cantrip:* You know one Cantrip of your choice from the cleric spell list.  Wisdom is your spellcasting ability for it.'
const dawn = '**Dawn Elf Traits**:\n' +
	'*Ability Score Increase:* Your Presence increases by 1.\n' +
	'*Skill Proficiency:* You have proficiency in one skill from the following list: Arcana, Culture, Nature, or Theology.\n' +
	'*Extra language:* You can speak, read, and write one extra language of your choice.\n' +
	'*Weapon Proficiency:* You have proficiency in Quarterstaffs, Scimitars, and Longbows.\n' +
	'*Navigator:* You always know the cardinal direction that you are facing.\n' +
	'*Road Less Traveled:* You can travel through non-magical rough terrain unhindered.\n' +
	'*Lesser Fey Ancestry:* You have advantage on saving throw checks against magically being put to sleep.'
const dusk = '**Dusk Elf Traits**:\n' +
	'*Ability Score Increase:* Your Strength increases by 1.\n' +
	'*Weapon Proficiency:* You have proficiency in Rapiers, Midswords, and Longbows.\n' +
	'*Darkvision 30ft:* Being either accustomed to the moonlight forests or gazing off into the night sky, you have superior vision when peering into dark and dim light conditions.  You can see in dim light within 30ft of you as if it were in bright conditions, and you can see in darkness as if it were dim conditions up to the same distance.\n' +
	'*Unstoppable:* You have advantage on rolls against effects that would keep you from moving.\n' +
	'*Magic Means Nothing:* If you would be reduced to 0 hit points by a magical source, you can choose to instead be at 1.  This ability can only be used once per long rest.'

const chktu = 'Information about the **Chk’tu** race:\n' +
	'*Core Chk’tu Traits:*\n' +
	'*Compatibility:* Insectoid\n' +
	'*Ability Score Increase:* Your Constitution increases by 1.\n' +
	'*Lifespan:* Chk’tu reach maturity at around 1 year old, and live about 5 to 10 years on average.\n' +
	'*Size:* Medium; Chk’tu stand between 5 to 7 feet tall and weigh between 100 to 200 pounds.\n' +
	'*Speed:* Your base ground speed is 30 feet.\n' +
	'*Languages:* You can speak, read, and write Common and Chk’tu.\n' +
	'*Insectoid Creature:* Chk’tu are considered both Humanoid and Insectoid when it comes to rules affecting creatures types.\n\n' +
	'*Chk’tu Branches:*\n' +
	'- Drone Chk’tu\n' +
	'- Royal Chk’tu\n' +
	'- Scout Chk’tu\n' +
	'- Warrior Chk’tu'
const drone = '**Drone Chk’tu Traits**:\n' +
	'*Ability Score Increase:* Your Strength increases by 2.\n' +
	'*Proficiencies:* You are proficient in Dexterity (Sleight of Hand).\n' +
	'*Extra Arms:* You have a two pairs of arms, with the 2nd set located beneath the first.  You can choose either set of arms to complete actions with, can carry or hold things in up to all four hands, can carry up to 2 two-handed objects, and can reload up to 2 loading weapons at once without penalty.\n' +
	'However, you do not gain extra attacks, actions or minor actions with these limbs.  If you hold more than two shields, you only gain the Armor Class bonuses of the first two, as more than two becomes unwieldy and unhelpful.  Additionally, while wearing any armor, shields only grant bonuses when held in 2 hands due to limited mobility.\n' +
	'*Handsy:* You have advantage on Strength (Athletics) checks related to grappling if you use more than 1 arm.\n'
const royal = '**Royal Chk’tu Traits**:\n' +
	'*Ability Score Increase:* Your Presence increases by 1, and you can increase either your Intelligence or Wisdom by 1.\n' +
	'*Expanded Lifespan:* Royal chk’tu can live up to 50 years old.\n' +
	'*Royal Piping:* As a minor action, you can let loose a loud piping or horn noise like a howl that radiates up to 120ft.  All sleeping creatures that hear it are awoken, and up to 5 allied creatures of your choice that hear it gain temporary hit points equal to 5 or your level, whichever is higher.  Temporary hit points gained this way can be stacked.  You can use this racial ability once per long or short rest.\n' +
	'*Flutter Jump:* Your fluttering wings add a +10ft to your vertical and horizontal jump distance.  This distance is halved while wearing heavy armor.\n' +
	'*Flutter Fall:* While conscious, you flutter your wings to prevent yourself from taking falling damage.  This does not apply while wearing heavy armor.'
const scout = '**Scout Chk’tu Traits**:\n' +
	'*Ability Score Increase:* Your Dexterity increases by 2.\n' +
	'*Slow Walker:* Your base walking speed is 25ft instead.\n' +
	'*Flight:* You have a flying speed of 30ft. To use this speed, you cannot be wearing medium or heavy armor.\n'
const warrior = '**Warrior Chk’tu Traits**:\n' +
	'*Ability Score Increase:* Your Strength and Constitution each increase by 1.\n' +
	'*Natural Armor:* Your chitin exoskeleton is comparably tough.  While not wearing armor, your Armor Class is 11 + your Dexterity Modifier.\n' +
	'*Stinger Arms:* You have two pairs of arms, with the 2nd set located beneath the first.  Additionally, replacing the forearms of your upper limbs are a pair of sharp chitin blades.  These limbs are considered natural weapons equivalent to shortswords.  You are proficient with these blades, and can use them as if dual-wielding.\n' +
	'However, you do not gain extra attacks, actions or minor actions with these limbs.  Additionally, while wearing any armor, shields only grant bonuses when held in 2 hands due to limited mobility.\n' +
	'*Death Sting:* You have a stinger on your abdomen that is bred to kill.  If you attempt to sting a creature with it, make a melee weapon attack with proficiency.  On hit, the target takes 1d10 piercing damage, and you take 1d10 force damage as the stinger rips out.  On critical hit, the target becomes poisoned.  Otherwise the target must make a Constitution Saving Throw of DC 10 + your proficiency bonus.  On failure, the creature takes 1d6 poison damage and is sickened until the end of your next turn.  You cannot use this racial trait again until you take a long rest.\n' +
	'*Flutter Jump:* Your fluttering wings add a +10ft to your vertical and horizontal jump distance.  This distance is halved while wearing heavy armor.\n' +
	'*Flutter Fall:* While conscious, you flutter your wings to prevent yourself from taking falling damage.  This does not apply while wearing heavy armor.'

const kobold = 'Information about the **Kobold** race:\n' +
	'*Compatibility:* Reptile\n' +
	'*Ability Score Increase:* Your Dexterity increases by 2.\n' +
	'*Lifespan:* Kobolds reach their age of maturity at 7 years old, and can live up to 125 years old.\n' +
	'*Size:* Small; Kobolds stand between 2 to 3 feet tall and weigh between 25 to 35 pounds.\n' +
	'*Speed:* Your base ground speed is 30 feet.\n' +
	'*Darkvision:* Kobolds have superior vision in the dark, and can see in dim light within 60 feet of you as if it were in bright conditions, and can see in darkness as if it were dim conditions up to the same distance.\n' +
	'*Strength in Numbers:* You gain a +1 to Wisdom, Intelligence, and Presence saving throws for each ally that you can see, excluding yourself in any form, that isn’t incapacitated, up to a maximum of +3.\n' +
	'*Languages:* You can speak, read, and write Common and Draconic.\n\n' +
	'*Kobold Branches:*\n' +
	'- Bright-Hide Kobold\n' +
	'- Shimmer-Scale Kobold\n' +
	'- Strong-Claw Kobold\n' +
	'- Wing-Beat Kobold'
const bright = '**Bright-Hide Kobold Traits**:\n' +
	'*Ability Score Increase:* Your Constitution increases by 1.\n' +
	'*Draconic Resilience:* You have resistance to the damage type associated with your draconic ancestry. The colors and their corresponding damage types are as follows:\n' +
	'- Black: Acid\n' +
	'- Blue: Lightning\n' +
	'- Brass: Fire\n' +
	'- Bronze: Lightning \n' +
	'- Copper: Acid\n' +
	'- Gold: Fire\n' +
	'- Green: Poison\n' +
	'- Red: Fire\n' +
	'- Silver: Cold\n' +
	'- White: Cold\n' +
	'*Tough Scales:* You have natural armor equal to 13 + your Dexterity Modifier while not wearing armor.\n' +
	'*Elemental Spit:* Unlike your brethren, you have to the ability to use a lesser version of the dragon’s mighty breath weapon.  Using an action, you can infuse your spit with elemental power and fire it at your foes.\n' +
	'When you use this ability, select a single target within 30ft of you that you can see.  Roll a ranged attack with proficiency.  On a hit, the creature takes 2d6 damage.  This damage increases to 3d6 at overall level 6, 4d6 at overall level 11, and 5d6 at overall level 16.\n' +
	'The type of damage dealt with this attack matches the element that you are resistant to with Draconic Resilience.  You can use this ability a number of times equal to your proficiency modifier per short or long rest.'
const shimmer = '**Shimmer-Scale Kobold Traits**:\n' +
	'*Ability Score Increase:* Your Presence increases by 1.\n' +
	'*Fascinating Colors:* You have advantage on Presence (Persuasion) and Presence (Deception) checks when trying to convince someone to seem less threatening.\n' +
	'*Blending In:* You have advantage on Dexterity (Stealth) rolls when in dense foliage, smoke, or in dim or darker light.'
const strong = '**Strong-Claw Kobold Traits**:\n' +
	'*Ability Score Increase:* Your Strength increases by 1.\n' +
	'*Helping Hand:* You can use a minor action to give an ally advantage on the next attack roll that they make. You must end your turn adjacent to the target to do this.\n' +
	'*Sharp Claws:* Your claws are strong enough to do lethal damage. They deals 1d4 slashing damage and are considered Finesse weapons.  You have proficiency for these natural weapons, and can use them to attack when you are holding nothing in them.'
const wing = '**Wing-Beat Kobold Traits**:\n' +
	'*Ability Score Increase:* Your Wisdom increases by 1.\n' +
	'*Skill Proficiency:* Choose either Dexterity (Acrobatics) or Wisdom (Perception).\n' +
	'*Lesser Flight:* You have a pair of leathery dragon wings sprouting from your shoulder blades. Your wings give you a flying speed of 30 feet. This benefit works only in short bursts, however. You fall if you end your turn in the air and nothing else is holding you aloft, such as Glide. Between Limited Flight and Glide, your total horizontal movement each turn cannot exceed twice your flying speed. You cannot fly in heavy armor.\n' +
	'*Glide:* As an action, you can choose to enter a Glide while you are airborne that lasts until you land. While gliding:\n' +
	'- You may choose how far you fall at the end of each round, to a minimum of 10 feet. You do not fall on the turn that you enter Glide.\n' +
	'- You can only use your movement to descend.\n' +
	'- For every 5 feet you fall or descend while gliding, you can move 10 feet horizontally.\n' +
	'- If you land while gliding, you don\'t take fall damage.'

module.exports = {
	human,
	city,
	country,
	gifted,
	assimilant,

	elf,
	light,
	dark,
	dawn,
	dusk,

	chktu,
	'chk\'tu': chktu,
	'chk’tu': chktu,
	'bug': chktu,
	drone,
	royal,
	scout,
	warrior,

	kobold,
	bright,
	'bright-hide': bright,
	brighthide: bright,
	hide: bright,
	shimmer,
	'shimmer-scale': shimmer,
	shimmerscale: shimmer,
	scale: shimmer,
	strong,
	'strong-claw': strong,
	strongclaw: strong,
	claw: strong,
	wing,
	'wing-beat': wing,
	wingbeat: wing,
	beat: wing
}
