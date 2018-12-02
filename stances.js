const ammunition = '**Ammunition Stance**:\n' +
	'*Requirement:* A weapon with the Ammunition trait.\n\n' +
	'__Pros__\n' +
	'*Piercing Shot:* If a creature is 20ft or less in a line behind a target that you are attacking, then you can make an attack against that target as well. If you hit the front target, then the back creature takes damage equal to one level smaller damage dice.\n' +
	'*Death From Above:* If you are at a higher elevation from the target, you gain the following effects:\n' +
	'- Your attacks gain a +1 to hit.\n' +
	'- Your attacks deal an additional 1d4 or 3 damage.\n\n' +
	'__Cons__\n' +
	'*Planted:* Your movement speed becomes 0 until the beginning of your next turn, and you cannot attack if you have already moved this turn.\n' +
	'You have disadvantage on Dexterity (Saving Throw) checks.\n' +
	'*Slow Stow:* Switching out of this stance always takes a minor action.'
const boxing = '**Boxing Stance**:\n' +
	'*Requirement:* Unarmed or a weapon with the Unarmed trait.\n\n' +
	'__Pros__\n' +
	'*Fist Fighter:* Your unarmed damage die is 1d6.\n' +
	'*1-2 Punch:* Unarmed attacks have the “Light” trait.\n' +
	'*Uppercut:* As an action, you attack a creature with an uppercut. If the attack lands on a creature of at most 1 size larger than you, the creature must make a Strength (Saving Throw) check of DC 8 + your Strength Modifier + your Proficiency Bonus.  On failure, the creature is knocked 10ft into the air and falls prone when landing.  For each attack that hits the target while it is in the air, such as from a reaction or desperate action, it takes an additional 1d4 bludgeoning damage when it lands.\n' +
	'*Jab & Weave:* If you use the Self-Defense action, you can make an off-hand attack as a minor action.\n\n' +
	'__Cons__\n' +
	'*Misdressed:* Your armor grants an AC of 10 + your Dexterity Modifier.\n' +
	'*Punch The Wall:* Your unarmed attacks only deal 1 bludgeoning damage if your target is wearing Heavy Armor or is a larger creature with natural armor.'
const finesse = '**Finesse Stance:**\n' +
	'*Requirement:* A weapon with the Finesse trait.\n\n' +
	'__Pros__\n' +
	'*Parry:* As a minor action, you cause a single target to have disadvantage attacking you until the beginning of your next turn as long as you can see the target.\n' +
	'*Riposte:* As a reaction, you can make an opportunity attack against a creature you see that misses you with an attack while you are either in Self-Defense or are Parrying the target.\n\n' +
	'__Cons__\n' +
	'*Trained For Vitals:* You have disadvantage on attacks against constructs and creatures wearing Heavy Armor.\n' +
	'*Uneven Circumstances:* Natural weapon attacks from creatures larger than you, heavy weapons, and spell attacks are unaffected by Self-Defense, Parry, or bonuses granted by desperate actions when attacking you, and the attacker cannot be targeted for a Riposte.\n'
const heavy = '**Heavy Stance:**\n' +
	'*Requirement:* A weapon with the Heavy trait.\n\n' +
	'__Pros__\n' +
	'*Block Breaker:* As an action, you make one attack that has a +3 to hit.  You cannot switch weapon or from this stance until the beginning of your next turn.\n' +
	'*Armor Breaker:* You have advantage to hit creatures in Heavy Armor and to hit larger creatures with Natural Armor.\n' +
	'*Weighty:* When dealing damage by falling on top of another creature, the other creature takes the same amount of falling damage as you.\n\n' +
	'__Cons__\n' +
	'*Burdened:* You do not add your Dexterity Modifier to your AC or Dexterity (Saving Throw) checks unless the modifier is negative.\n' +
	'If your AC is unchanged by the previous sentence, you have a -2 to AC.'
const lasso = '**Lasso Stance:**\n' +
	'*Requirement:* A whip or chain whip.\n\n' +
	'__Pros__\n' +
	'*Whip Crack:* You can choose for your attacks to deal sonic damage type.\n' +
	'*Lasso:* You can grapple or trip targets up to your weapon’s reach.\n' +
	'You have advantage on Strength (Athletics) checks to grapple a creature of equal or smaller size if further than 5ft from you.\n' +
	'*Tie the Knot:* While grappling a target within 5ft of you, you can use a minor action to finish tying your whip around the target.  When you do so, you let go of your whip, are no longer **grappled**, and exit the Lasso Stance.  The target remains **grappled**, and you continue rolling against the target when it tries to escape the grapple.  When you first do this, you can choose whether this grapple applies the ability “Noose”.\n' +
	'*Noose:* While grappling a target of equal or smaller size, the target cannot breathe, and the target can only hold its breath for half as long.\n\n' +
	'__Cons__\n' +
	'*Minimum Distance:* You have disadvantage on melee attacks against creatures within 5ft of you.\n' +
	'*Tangled:* You have disadvantage on checks to resist being **grappled**.'
const light = '**Light Stance:**\n' +
	'*Requirement:* A weapon with the Light trait.\n\n' +
	'__Pros__\n' +
	'*Wail:* If you hit with an Off-Hand attack as a minor action, you can immediately make a Lesser Off-Hand attack as a non-action.\n' +
	'*Five-Foot Step:* After an attack, you can move 5ft.  You cannot be attacked by an opportunity attack as part of this movement, but cannot move further this turn.\n' +
	'*Unburdened:* You are proficient in Dexterity (Saving Throw).  If you are already proficient in Dexterity (Saving Throw), then you can add your proficiency bonus twice.\n\n' +
	'__Cons__\n' +
	'*Split Offense:* You have a -1 to your Strength and Dexterity Modifiers.\n' +
	'*Inoffensive Defense:* You cannot use desperate actions to attack.\n' +
	'You cannot use opportunity attacks.'
const loading = '**Loading Stance:**\n' +
	'*Requirement:* A weapon with the Loading trait.\n\n' +
	'__Pros__\n' +
	'*Reliable Aim:* You do not have disadvantage on attacks at any range, or from being **prone**.\n' +
	'*Snipe:* While **prone**, your attacks have a +5 to hit targets 15ft or further away.\n' +
	'*Precision Pierce:* If you attack a target that has been attacked since your last turn and the attack hits, the creature must make a Constitution (Saving Throw) check of DC 10 + Your Attack Modifier or start **bleeding**. The creature can cure this by making an Intelligence (Medicine) check on itself of the same DC as an action.\n\n' +
	'__Cons__\n' +
	'*Malfunction:* On a critically failed weapon attack, Strength (Saving Throw) check, or Dexterity (Saving Throw) check, your weapon gets jammed, becoming unusable.  You can attempt to unjam the weapon as a minor action by beating a DC 10 Intelligence (Craft) check.\n' +
	'*Risk of Casualty:* If your target is aware of you and within 5ft of another creature of equal or larger size, then you have a -2 to attack rolls to hit the target.'
const onehanded = '**One-Handed Stance:**\n' +
	'*Requirement:* A single one-handed melee weapon without the Heavy, Special, or Unarmed traits.\n\n' +
	'__Pros__\n' +
	'*Minor Multi-attack:* When you make an attack action, you can attack again as a minor action.\n' +
	'*Deflect:* If an opponent that you can see misses you with a melee attack, you can immediately move 5ft without evoking an opportunity attack from your attacker as a non-action.\n' +
	'*Critical Stagger:* When you land a critical hit, the target must make a Constitution (Saving Throw) check of DC 10 + your Attack Modifier or be moved back one spot in initiative.\n\n' +
	'__Cons__\n' +
	'*Traitless:* If your weapon has traits, it acts as if it has none. This does not remove the Finesse trait.\n' +
	'*Imprecision:* If you have disadvantage on an attack, roll a 1d6 and subtract it from your final damage, minimum of 0.'
const quickdraw = '**Quick-Draw Stance:**\n' +
	'*Requirement:* A shortsword or midsword in a sheath, or a loaded hand crossbow in a holster or sheath. No shield in either hand.\n\n' +
	'__Pros__\n' +
	'*Totsuzenshi:* You have advantage on desperate attack actions.\n' +
	'*Quickest-Draw:* If in this stance when initiative is rolled, you gain advantage on your initiative check.\n' +
	'*Imperceivable Strike:* Attacks made in this stance cannot be interrupted by desperate actions.\n\n' +
	'__Cons__\n' +
	'*Armorless:* Your clothing or armor grants AC equal to being unarmored (AC of 10 + your Dexterity Modifier).\n' +
	'*One & Done:* You cannot make more than one attack during your turn.  If you have already made an attack before entering this stance, you cannot make any more attacks this turn.  This applies even if you have multiple actions, spells or abilities that grant multiple attacks, or know “Multiattack”.'
const reach = '**Reach Stance:**\n' +
	'*Requirement:* A weapon with the Reach trait.\n\n' +
	'__Pros__\n' +
	'*Personal Bubble:* When a creature enters your attack range, you can use your reaction to make an opportunity attack against it.\n' +
	'*Spin Attack:* In place of an attack, you can swing your weapon around you in a circle. All creatures within 10ft of you must make a Dexterity (Saving Throw) check of DC 10 + Attack Modifier.  On a fail, the creature takes damage equal to weapon’s damage modifier. The creature takes half damage on success.\n\n' +
	'__Cons__\n' +
	'*Aphenphosmphobia:* You have -2 to hit creatures within 5ft of you.\n' +
	'Creatures within 5ft of you have +2 to the Dexterity (Saving Throw) check from Spin Attack.'
const shield = '**Shield Stance:**\n' +
	'*Requirement:* A shield in one hand with or without a weapon in your other hand.\n\n' +
	'__Pros__\n' +
	'*Shielded:* Your AC increases by +1.\n' +
	'*Damage Sponge:* When you need to make a Dexterity (Saving Throw) check, you can choose to make a Constitution (Saving Throw) check instead.\n' +
	'*Savior:* If you use a desperate action to Save a Target, the attack redirects to you instead of automatically hitting you.  So if the previous attack roll is lower than your AC, then you manage to block the attack.\n' +
	'*Defense Over Offense:* You can make a Lesser Off-Hand Attack with your weapon while in Self-Defense.\n\n' +
	'__Cons__\n' +
	'*Limited Offense:* All of your damage dice are decreased by one size.\n' +
	'*Limited Defense:* If you leave this stance, you cannot re-enter this stance this turn.'
const slugger = '**Slugger Stance:**\n' +
	'*Requirement:* Unarmed or a weapon with the Unarmed trait.\n\n' +
	'__Pros__\n' + 
	'*Fist Fighter:* Your unarmed damage die is 1d6.\n' +
	'*Slug:* Your first unarmed attack each turn deals 1d10 bludgeoning damage.\n' +
	'*Haymaker:* A creature within reach must make a Strength (Saving Throw) check of DC 10 + your Proficiency Bonus or take 1d12 bludgeoning damage. The creature takes half damage on success.\n' +
	'*Punching Bag:* You are resistant to bludgeoning damage.\n\n' +
	'__Cons__\n' +
	'*Un-dodging:* Your AC is reduced by -2.\n' +
	'*Sluggish:* Your movement speed is 5ft slower.'
const throwing = '**Throwing Stance:**\n' +
	'*Requirement:* A weapon with the Thrown trait.\n\n' +
	'__Pros__\n' +
	'*Catch:* As a desperate action, if you attempt to Save a Target from a ranged weapon attack, you can make a Dexterity (Sleight of Hand) check to catch the projectile and take no damage. The DC for the check is the projectile’s attack roll. You have advantage if the projectile is a thrown weapon.\n' +
	'*Return Shot:* If you Catch a projectile, you can throw the projectile back immediately as a non-action. The attack does one damage die lower than before.\n' +
	'*Run-Up:* If you do a run-up of 15ft before making a thrown attack, the throw’s range increases by 30ft and the damage dice increase by two sizes.\n' +
	'*Anchoring Shot:* If a thrown attack hits a flying, swimming, or riding creature, then it must make a Dexterity (Saving Throw) check of DC 10 + your Strength Modifier.\n' +
	'On a failure:\n' +
	'- A flying creature falls 10ft and repeats the check until it hits something or succeeds the save.\n' +
	'- A swimming creature falls 10ft.\n' +
	'- A riding creature is dismounted and falls prone.\n' +
	'*Weapon Pickup:* You have advantage on Wisdom (Perception) checks to find your weapons, and you can pickup and stow or brandish weapons as a non-action.\n\n' +
	'__Cons__\n' +
	'*Fumble:* You have advantage on Wisdom (Perception) checks to find your weapons, and you can pickup and stow or brandish weapons as a non-action.\n' +
	'*High-Velocity Miss:* Upon missing an attack, the thrown weapon flies 10ft past the target before hitting the ground.  This increases to 20ft on a critical fail.  Weapons thrown this way do not stick into walls, floors, or objects.'
const twohanded = '**Two-Handed Stance:**\n' +
	'*Requirement:* A melee weapon with the Two-Handed trait.\n\n' +
	'__Pros__\n' +
	'*Cleave:* Once per turn, during your attack action, if a creature other than your target is within reach of you and within 5ft of your target, then you can make an attack against that target as well.\n' +
	'*Called Shot:* You take an action to prepare a strike, ending your turn.  At the beginning of your next turn, you can choose to attack a target within range.  This attack takes up an action, but automatically hits and is a critical hit.  If you take an action or a desperate action before this, your strike is no longer prepared.\n' +
	'*Fulcrum-Free:* As an action, you make an attack with one hand at disadvantage, despite using a two-handed weapon.\n\n' +
	'__Cons__\n' +
	'*Full Swing:* Attack actions take up both your action and minor action.\n' +
	'*Grasp-Free:* If you roll a critical fail on a Fulcrum-Free attack, you drop your weapon and exit this stance.'
const versatile = '**Versatile Stance:**\n' +
	'*Requirement:* A weapon with the Versatile trait.\n\n' +
	'__Pros__\n' +
	'*Spry Strike:* You make one attack as an action with your weapon in one hand. You move up one spot in initiative.\n' +
	'*Ample Strike:* You make one attack as an action while holding your weapon with two hands. You add either your Strength or Dexterity modifier to the final damage. You move back one spot in initiative.\n\n' +
	'__Cons__\n' +
	'*Sticky Hands:* You cannot manually switch stance or change how many hands you hold your weapon with after using Spry or Ample Strike until the beginning of your next turn.\n' +
	'*Lacking Defense:* Ending your turn with one hand on your weapon lowers your AC by -2 until the beginning of your next turn.\n' +
	'*Stiff Defense:* Ending your turn with two hands on your weapon lowers your Strength (Saving Throw), Dexterity (Saving Throw), and Constitution (Saving Throw) by -4 until the beginning of your next turn.'

module.exports = {
	ammunition,
	boxing,
	finesse,
	heavy,
	lasso,
	light,
	loading,
	onehanded,
	'one-handed': onehanded,
	quickdraw,
	'quick-draw': quickdraw,
	reach,
	shield,
	slugger,
	throwing,
	twohanded,
	'two-handed': twohanded,
	versatile
}
