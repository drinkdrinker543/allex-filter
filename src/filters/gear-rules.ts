import fs from 'fs';
import path from 'path';
import rule from '../rule';
import {Colors} from "../types/colors";

// this filter contains rules for showing mostly unid gear.

// Set filtername here
const filterName = 'GearFilter';

function allGear() {
	return rule().itemClass("Daggers", "Rune Daggers", "Gloves", "Helmets", "Body Armours", "Belts", "Rings", "Amulets", "Two Hand Axes", "Two Hand Maces", "Two Hand Swords", "Thrusting One Hand Swords", "One Hand Axes", "One Hand Maces", "One Hand Swords", "Sceptres", "Wands", "Staves", "Warstaves", "Shields", "Quivers")
}

function gearRule() {
  return rule().itemClass("Boots", "Gloves", "Body Armours", "Helmets")
}
  
function jewelryRule() {
  return rule().baseType("Sapphire Ring", "Ruby Ring", "Topaz Ring", "Two-Stone Ring", "Amethyst Ring", "Lapis Amulet", "Jade Amulet", "Amber Amulet", "Citrine Amulet", "Agate Amulet", "Turquoise Amulet", "Onyx Amulet", "Gold Amulet", "Heavy Belt", "Leather Belt", "Chain Belt", "Stygian Vise", "Vanguard Belt", "Rustic Sash", "Crystal Belt", "Cloth Belt")
}

function goodRings() {
	return rule().baseType("Sapphire Ring", "Ruby Ring", "Topaz Ring", "Two-Stone Ring", "Amethyst Ring")
}

function goodAmulets() {
	return rule().baseType("Lapis Amulet", "Jade Amulet", "Amber Amulet", "Citrine Amulet", "Agate Amulet", "Turquoise Amulet", "Onyx Amulet", "Gold Amulet")
}

function leapslamRule() {
  return rule().baseType("Rusted Sword", "Copper Sword", "Rusted Axe", "Boarding Axe", "Jade Hatchet", "Rusted Spike", "Whalebone Rapier")
}

function oneByThreeGear() {
  return rule().baseType("Rusted Sword", "Copper Sword", "Sabre", "Variscite Blade", "Cutlass", "Gemstone Sword", "Corsair Sword", "Glass Shank", "Skinning Knife", "Stiletto", "Flaying Knife", "Prong Dagger", "Poignard", "Pressurised Dagger", "Trisula", "Gutting Knife", "Ambusher", "Pneumatic Dagger", "Sai", "Carving Knife", "Boot Knife", "Copper Kris", "Skean", "Imp Dagger", "Butcher Knife", "Boot Blade", "Golden Kris", "Flashfire Blade", "Royal Skean", "Fiend Dagger", "Slaughter Knife", "Ezomyte Dagger", "Platinum Kris", "Imperial Skean", "Demon Dagger", "Infernal Blade", "Driftwood Wand", "Goat's Horn", "Carved Wand", "Quartz Wand", "Calling Wand", "Spiraled Wand", "Sage Wand", "Pagan Wand", "Faun's Horn", "Engraved Wand", "Crystal Wand", "Coiled Wand", "Congregator Wand", "Convening Wand", "Omen Wand", "Heathen Wand", "Demon's Horn", "Imbued Wand", "Opal Wand", "Tornado Wand", "Prophecy Wand", "Accumulator Wand", "Profane Wand", "Convoking Wand", "Driftwood Club", "Tribal Club", "Spiked Club", "Petrified Club", "Barbed Club", "Ancestral Club", "Tenderizer")
}

function weaponRule() {
  return rule().itemClass("One Hand Swords", "One Hand Axes", "One Hand Maces", "Thrusting One Hand Swords", "Claws", "Daggers", "Rune Daggers", "Wands", "Sceptres", "Two Hand Swords", "Two Hand Maces", "Two Hand Axes", "Staves", "Warstaves", "Staves", "Shields", "Bows", "Quivers")
}

function badBows() {
  return rule().baseType("Death Bow", "Decimation Bow", "Harbinger Bow", "Recurve Bow", "Decurve Bow", "Sniper Bow", "Citadel Bow", "Assassin Bow", "Long Bow")
}

function showUniqueRareGear() {
	let str = ""
	for (let i = 45; i < 70; i++) {
		str += rule().width("<=", 2).height("<=", 2).areaLevel("==", i).itemLevel("==", i + 2).rarity("==", "Rare").size(30).continue().compile()
		str += "\n\n"
	}

	return str;
}


const getFilter = () => `

### hide all gear
${
	rule(
		allGear().rarity("==", "Normal").hide().continue(),
		allGear().rarity("==", "Magic").hide().continue(),
		allGear().rarity("==", "Rare").hide().continue()
	)
	.compile()
}


${
	rule(
		gearRule(),
		jewelryRule(),
		weaponRule(),
	)
		.rarity("==", "Unique")
		.background(Colors.black)
		.size(45)
		.border(Colors.uniqueColor)
		.compile()
}


### shows small rare loot for leveling
${
  rule(
      oneByThreeGear().size(30),
      rule().itemClass("Thrusting One Hand Swords").size(30),
      rule().itemClass("Boots", "Helmets", "Gloves").size(30),
      rule().itemClass("Shields").size(30),
    )
			.areaLevel("<=", 45)
      .rarity("==", "Rare")
      .text(Colors.gold)
      .background(Colors.black)
      .continue()
      .compile()
  }

### nuts unique/rare only show rare gear drops
${
	showUniqueRareGear()
}
  
  ### show unidentified small magic rule
${
    rule(
      jewelryRule().size(40),
      oneByThreeGear().size(25),
      rule().itemClass("Thrusting One Hand Swords").size(25),
      rule().itemClass("Boots", "Helmets", "Gloves").size(35),
      rule().itemClass("Shields").baseArmour("==", 0).size(25),
    )
      .rarity("==", "Magic")
      .text(Colors.blue)
      .background(Colors.black)
      .border(Colors.blue)
      .areaLevel("<=", 30)
      .continue()
      .compile()
  }
  
  ### hide high lvl unid magic
${
    rule(
      allGear().hide()
    )
      .identified(false)
      .rarity("==", "Magic")
      .areaLevel(">=", 31)
			.continue()
      .compile()
}

${
	rule(
		jewelryRule()
	)
		.identified(false)
		.rarity("==", "Magic")
		.background(Colors.black)
		.size(45)
		.areaLevel(">=", 31)
		.areaLevel("<=", 55)
		.continue()
		.compile()
}
  
  ### show large low lvl magic unids
${
  rule(
    rule().itemClass("Two Hand Axes", "Two Hand Swords", "Two Hand Maces", "Staves", "Warstaves"),
    rule().itemClass("Shields").baseArmour(">=", 1),
    rule().itemClass("Body Armours")
    )
      .identified(false)
      .rarity("==", "Magic")
      .text(Colors.blue)
      .background(Colors.black)
      .size(25)
      .areaLevel("<=", 28)
      .continue()
      .compile()
  }

### class specific leveling is in main file.

`
// Write filter to output directory
fs.writeFileSync(path.join(__dirname, `../../output/${filterName}.filter`), getFilter());