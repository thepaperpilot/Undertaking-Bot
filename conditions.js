const bleeding = 'Information about the **Bleeding** condition:\n' +
	'Bleeding creatures take 1 damage each round at the beginning of their turn.\n' +
	'Unless otherwise stated, you can cure all current bleed damage by making a DC 10 Intelligence (Medicine) check as an action, when your Hit Points reach 0, or you receive magical healing.\n' +
	'Can be stacked up to 5 damage each round.'
const blinded = 'Information about the **Blinded** condition:\n' +
	'Blinded creatures cannot see, and fail any checks that require sight.\n' +
	'Attack rolls against blinded creatures have advantage.\n' +
	'See rules for ‘Attacking a Unseen Target’ earlier in this chapter when a blinded creature makes an attack'
const charmed = 'Information about the **Charmed** condition:\n' +
	'Charmed creatures cannot attack the charmer or target the charmer with harmful abilities or spells.\n' +
	'The charmer has advantage on social ability checks with the charmed creature.'
const deafened = 'Information about the **Deafened** condition:\n' +
	'Deafened creatures cannot hear, and fail ability checks that require hearing.'
const diseased = 'Information about the **Diseased** condition:\n' +
	'Diseases are numerous, and their effects vary.\n' +
	'Creatures can contract more than one disease as long as each disease is different.'
const exhausted = 'Information about the **Exhausted** condition:\n' +
	'Exhaustion comes in levels, with each level keeping the detriments of the previous level.\n' +
	'A long rest with food and drink reduces a creature’s exhaustion by 1 level.\n' +
	'Consequently, skipping a long rest can cause exhaustion to worsen.\n' +
	'When a creature’s exhaustion level decreases to 0, the condition is removed.\n' +
	'Level 1: Disadvantage on Ability Checks\n' +
	'Level 2: Speed halved\n' +
	'Level 3: Disadvantage on attack rolls and saving throws\n' +
	'Level 4: Hit point maximum halved\n' +
	'Level 5: Speed reduced to 0\n' +
	'Level 6: Incapacitated\n' +
	'Level 7: Death'
const frightened = 'Information about the **Frightened** condition:\n' +
	'Frightened creatures have disadvantage on ability checks and attack rolls while the source of fear is within line of sight.\n' +
	'Frightened creatures cannot willingly move closer to the source of their fear.'
const grappled = 'Information about the **Grappled** condition:\n' +
	'Grappled creatures have a speed of 0, and cannot benefit from bonuses to speed.\n' +
	'The condition ends if the grappler releases the target, is incapacitated, or is removed from the reach of the target.'
const incapacitated = 'Information about the **Incapacitated** condition:\n' +
	'Incapacitated creatures cannot take Actions, Minor Actions, Desperate Actions, or Reactions.'
const paralyzed = 'Information about the **Paralyzed** condition:\n' +
	'Paralyzed creatures are **incapacitated** and cannot move or speak.\n' +
	'The creature automatically fails Strength and Dexterity (Saving Throw) checks.\n' +
	'Attack rolls against the creature have advantage.\n' +
	'Any attack that hits the creature is a critical hit if the attacker is within 5ft of the creature.'
const petrified = 'Information about the **Petrified** condition:\n' +
	'A petrified creature, and any non-magical objects that it is carrying or wearing, is transformed into a solid inanimate substance (usually stone).  Its weight is multiplied by 10, and it ceases aging.\n' +
	'The creature is **incapacitated**, cannot move or speak, and is unaware of its surroundings.\n' +
	'Attack rolls against the creature have advantage.\n' +
	'The creature automatically fails Strength and Dexterity (Saving Throw) checks.\n' +
	'The creature has resistance to all damage.\n' +
	'The creature is immune to bleeding, diseased, poisoned, and sickened, although any current conditions are suspended for the duration, not neutralized.\n' +
	'The creature is immune to psychic and poison damage, and is considered a structure.'
const pinned = 'Information about the **Pinned** condition:\n' +
	'Like **restrained**, but both the restrainer and the restrainee are **restrained**.'
const poisoned = 'Information about the **Poisoned** condition:\n' +
	'The creature is **sickened** and has **exhaustion** level 1.\n' +
	'Poisoned creatures cannot decrease their exhaustion level by taking a long rest.\n' +
	'Poisoned creatures gain 1 level of **exhaustion** every day until cured.'
const prone = 'Information about the **Prone** condition:\n' +
	'Prone creatures can crawl at half speed, and must use half their movement to stand up.\n' +
	'The creature has disadvantage on attack rolls.\n' +
	'An attack roll against the creature has advantage if the attacker is within 5ft of the creature. Otherwise, the attack roll has disadvantage.\n' +
	'A creature can drop prone as a non-action on its turn.'
const restrained = 'Information about the **Restrained** condition:\n' +
	'Restrained creatures have a speed of 0, and cannot benefit from bonuses to speed.\n' +
	'Attack rolls against the creature have advantage, and the creature’s attack rolls have disadvantage.\n' +
	'The creature has disadvantage on Dexterity (Saving Throw) checks.'
const sickened = 'Information about the **Sickened** condition:\n' +
	'Sickened creatures have disadvantage on attack rolls and ability checks.'
const stunned = 'Information about the **Stunned** condition:\n' +
	'Stunned creatures are **incapacitated**, cannot move, and can only speak falteringly.\n' +
	'The creature automatically fails Strength and Dexterity (Saving Throw) checks.\n' +
	'Attack rolls against the creature have advantage.'
const suffocating = 'Information about the **Suffocating** condition:\n' +
	'When a creature runs out of breath and starts suffocating, the creature has a number of rounds equal to its Constitution modifier (minimum of 1 round) to reach air before dropping to 0 hit points.\n' +
	'While suffocating, the creature automatically fails all death saving throws.'
const unconscious = 'Information about the **Unconscious** condition:\n' +
	'Unconscious creatures are incapacitated, cannot move or speak, and are unaware of their surroundings.\n' +
	'The creature drops whatever it’s holding and falls prone.\n' +
	'The creature automatically fails Strength and Dexterity (Saving Throw) checks.\n' +
	'Attack rolls against the creature have advantage.\n' +
	'Any attack that hits the creature is a critical hit if the attacker is within 5ft of the creature.'

module.exports = {
	bleeding,
	blinded,
	charmed,
	deafened,
	diseased,
	exhausted,
	frightened,
	grappled,
	incapacitated,
	paralyzed,
	petrified,
	pinned,
	poisoned,
	prone,
	restrained,
	sickened,
	stunned,
	suffocating,
	unconscious
}
