import fs from 'fs';
import path from 'path';
import rule from '../rule';
import {Colors} from "../types/colors";

// this filter contains rules for showing mostly unid gear.

// Set filtername here
const filterName = 'ZZZZ-hael-GearFilter';

const large = 45;
const medium = 35;
const small = 30;

function allGear() {
	return rule().itemClass("Claws", "Daggers", "Rune Daggers", "Gloves", "Helmets", "Body Armours", "Belts", "Rings", "Amulets", "Two Hand Axes", "Two Hand Maces", "Two Hand Swords", "Thrusting One Hand Swords", "One Hand Axes", "One Hand Maces", "One Hand Swords", "Sceptres", "Wands", "Staves", "Warstaves", "Shields", "Quivers")
}

function allGearMinusJewellry() {
	return rule().itemClass("Claws", "Daggers", "Rune Daggers", "Gloves", "Helmets", "Body Armours", "Two Hand Axes", "Two Hand Maces", "Two Hand Swords", "Thrusting One Hand Swords", "One Hand Axes", "One Hand Maces", "One Hand Swords", "Sceptres", "Wands", "Staves", "Warstaves", "Shields", "Quivers")
}

function gearRule() {
  return rule().itemClass("Boots", "Gloves", "Body Armours", "Helmets")
}
  
// this doesn't include bad rings
function jewelryRule() {
  return rule().baseType("Sapphire Ring", "Ruby Ring", "Topaz Ring", "Two-Stone Ring", "Amethyst Ring", "Lapis Amulet", "Jade Amulet", "Amber Amulet", "Citrine Amulet", "Agate Amulet", "Turquoise Amulet", "Onyx Amulet", "Gold Amulet", "Heavy Belt", "Leather Belt", "Chain Belt", "Stygian Vise", "Vanguard Belt", "Rustic Sash", "Crystal Belt", "Cloth Belt")
}

function goodRings() {
	return rule().baseType("Sapphire Ring", "Ruby Ring", "Topaz Ring", "Two-Stone Ring", "Amethyst Ring")
}

function goodAmulets() {
	return rule().baseType("Lapis Amulet", "Jade Amulet", "Amber Amulet", "Citrine Amulet", "Agate Amulet", "Turquoise Amulet", "Onyx Amulet", "Gold Amulet")
}

function goodBelts() {
  return rule().baseType("Heavy Belt", "Leather Belt")
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
		str += rule().width("<=", 2).height("<=", 2).areaLevel("==", i).itemLevel("==", i + 2).rarity("==", "Rare").size(20).continue().compile()
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
    allGear().rarity("==", "Unique").continue(),
  )
  .sound(4)
  .size(45)
  .border(Colors.uniqueColor)
  .compile()
}
### jewelry rules
### show early jewelry
${
  //#region jewelry rules
  rule(
    rule().baseType("Iron Ring").areaLevel("<=", 25).customSound("iron_ring"),
    rule().baseType("Rustic Sash").areaLevel("<=", 20).customSound("rustic"),
    rule().baseType("Coral Ring").areaLevel("<=", 16),
    rule().baseType("Sapphire Ring", "Topaz Ring", "Ruby Ring", "Two-Stone Ring", "Lapis Amulet", "Heavy Belt").areaLevel("<=", 33)
  )
    .border(Colors.red)
    .size(45)
    .compile()
}

### higher is more priority
# todo: check if continues apply correctly

${
  rule(
    rule().baseType('Amethyst Ring').rarity("==", "Normal").areaLevel("<=", 77),
    rule().baseType("Stygian Vise")
  )
  .size(45)
  .border(Colors.red)
  .background(Colors.white)
  .text(Colors.black)
  .compile()
}


### magic gear section
${
  rule(
    // smaller gear shown smaller at higher levels section
    allGear().height("==", 2).width("==", 1).size(25).areaLevel("<=", 45),
    allGear().height("==", 3).width("==", 1).size(25).areaLevel("<=", 45),
    allGear().height("==", 4).width("==", 1).size(25).areaLevel("<=", 45),
    allGear().height("==", 1).width("==", 2).size(25).areaLevel("<=", 45),
    jewelryRule().size(45).areaLevel("<=", 45),
    allGear().height("==", 1).width("==", 2).size(40).areaLevel("<=", 32),
    allGear().height("==", 2).width("==", 2).size(35).areaLevel("<=", 32),
    allGear().height("==", 3).width("==", 2).size(30).areaLevel("<=", 26),
    allGear().height("==", 4).width("==", 2).size(25).areaLevel("<=", 26),
    allGear().height("==", 2).width("==", 1).size(40).areaLevel("<=", 32),
    allGear().height("==", 3).width("==", 1).size(40).areaLevel("<=", 32),
    allGear().height("==", 4).width("==", 1).size(40).areaLevel("<=", 32),
  )
  .rarity("==", "Magic")
  .continue()
  .compile()
}

${
  rule(
    goodAmulets(),
    goodRings(),
    goodBelts(),
  )
  .rarity(">=", "Rare")
  .areaLevel("<=", 82)
  .border(Colors.red)
  .size(45)
  .sound(2)
  .compile()
}

### rare gear section
${
  rule(
    // smaller gear shown smaller at higher levels section
    allGear().height("==", 2).width("==", 1).size(25).areaLevel("<=", 65),
    allGear().height("==", 3).width("==", 1).size(25).areaLevel("<=", 65),
    allGear().height("==", 4).width("==", 1).size(25).areaLevel("<=", 65),
    allGear().height("==", 1).width("==", 2).size(25).areaLevel("<=", 65),
    allGear().height("==", 1).width("==", 2).size(40).areaLevel("<=", 65),
    allGear().height("==", 2).width("==", 2).size(35).areaLevel("<=", 65),
    allGear().height("==", 3).width("==", 2).size(30).areaLevel("<=", 65),
    allGear().height("==", 4).width("==", 2).size(25).areaLevel("<=", 35),
    allGear().height("==", 2).width("==", 1).size(40).areaLevel("<=", 42),
    allGear().height("==", 3).width("==", 1).size(40).areaLevel("<=", 42),
    allGear().height("==", 4).width("==", 1).size(40).areaLevel("<=", 42),
  )
  .rarity("==", "Rare")
  .continue()
  .compile()
  //#endregion
}

${
  rule(
    rule().socketGroup(">=", "RGB").linkedSockets("<=", 4),
    rule().sockets("==", 6).linkedSockets("<=", 4).customSound("hael/6socket")
  )
  .background(Colors.lightGrey)
  .size(45)
  .continue()
  .compile()
}

### unsorted

${
  rule(
    rule().identified(true).hasExplicitMod(">=1", "Veiled", "of the Veil", "of Janus' Veil", "of Hillock's Veil", "of Jorgin's Veil", "of Cameria's Veil", "of Aisling's Veil", "of Riker's Veil"),
    rule().itemClass("Rings", "Amulets", "Jewels", "Belts", "Flasks").fractured(true),
    rule().synthItem(true),

  )
  .sound(6)
  .size(45)
  .border(Colors.BenGreen)
  .text(Colors.green)
  .continue()
  .compile()
}

Show
BaseType "Essence"
AreaLevel < 69
Class Currency
SetBorderColor 0 0 0
SetTextColor 0 250 250
SetBackgroundColor 0 75 75
SetFontSize 45
CustomAlertSound "gucci_sounds/essence.mp3" 
MinimapIcon 2 Green Circle

Show
BaseType "Essence"
AreaLevel > 69
Class Currency
SetBorderColor 0 0 0
SetTextColor 0 250 250
SetBackgroundColor 0 75 75
SetFontSize 45
MinimapIcon 2 Green Circle

### class specific leveling is in main file.

`
// Write filter to output directory
fs.writeFileSync(path.join(__dirname, `../../output/${filterName}.filter`), getFilter());