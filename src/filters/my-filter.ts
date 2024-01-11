import fs from 'fs';
import path from 'path';
import rule from '../rule';
import {Colors} from "../types/colors";

// Set filtername here
const filterName = 'MyFilter';

const wayLessThanTink = 5
const lessThanTink = 10
const tink = 15

function weaponRule() {
  return rule().itemClass("One Hand Swords", "One Hand Axes", "One Hand Maces", "Thrusting One Hand Swords", "Claws", "Daggers", "Rune Daggers", "Wands", "Sceptres", "Two Hand Swords", "Two Hand Maces", "Two Hand Axes", "Staves", "Warstaves", "Staves", "Shields", "Bows", "Quivers")
}

function leapslamRule() {
  return rule().baseType("Rusted Sword", "Copper Sword", "Rusted Hatchet", "Boarding Axe", "Jade Hatchet", "Rusted Spike", "Whalebone Rapier")
}

function gearRule() {
  return rule().itemClass("Boots", "Gloves", "Body Armours", "Helmets")
}

function jewelryRule() {
  return rule().itemClass("Belts", "Rings", "Amulets")
}

function taintedCurrency() {
  return rule().baseType("Tainted Armourer's Scrap", "Tainted Blacksmith's Whetstone", "Tainted Chaos Orb", "Tainted Chromatic Orb", "Tainted Divine Teardrop", "Tainted Exalted Orb", "Tainted Jeweller's Orb", "Tainted Mythic Orb", "Tainted Orb of Fusing")
}

function tierOneScarabs() {
  return rule().baseType("Winged Abyss Scarab", "Winged Divination Scarab", "Winged Reliquary Scarab")
}

function tierTwoScarabs() {
  return rule().baseType("Gilded Abyss Scarab", "Gilded Ambush Scarab", "Gilded Divination Scarab", "Gilded Harbinger Scarab", "Gilded Reliquary Scarab", "Polished Legion Scarab", "Winged Ambush Scarab", "Winged Bestiary Scarab", "Winged Blight Scarab", "Winged Breach Scarab", "Winged Cartography Scarab", "Winged Elder Scarab", "Winged Expedition Scarab", "Winged Harbinger Scarab", "Winged Legion Scarab", "Winged Shaper Scarab", "Winged Sulphite Scarab", "Winged Torment Scarab", "Winged Ultimatum Scarab")
}

function tierThreeScarabs() {
  return rule().baseType("Polished Breach Scarab", "Polished Elder Scarab", "Polished Shaper Scarab", "Polished Torment Scarab", "Polished Ultimatum Scarab", "Rusted Abyss Scarab", "Rusted Ambush Scarab", "Rusted Bestiary Scarab", "Rusted Blight Scarab", "Rusted Breach Scarab", "Rusted Cartography Scarab", "Rusted Elder Scarab", "Rusted Harbinger Scarab", "Rusted Reliquary Scarab", "Rusted Shaper Scarab", "Rusted Torment Scarab", "Rusted Ultimatum Scarab")
}

function bossFragments() {
  return rule().baseType('Fragment of Constriction', 'Fragment of Emptiness', 'Fragment of Enslavement', 'Fragment of Eradication', 'Fragment of Knowledge', 'Fragment of Purification', 'Fragment of Shape', "Fragment of Terror", "Fragment of the Chimera", "Fragment of the Hydra", "Fragment of the Minotaur", "Fragment of the Phoenix", "Drox's Crest", "Al-Hezmin's Crest", "Baran's Crest", "Veritania's Crest", "The Maven's Writ", "Mortal Grief", "Mortal Hope", "Mortal Ignorance", "Mortal Rage")
}

function sacrificeFragments() {
  return rule().baseType("Sacrifice at Dusk", "Sacrifice at Dawn", "Sacrifice at Midnight", "Sacrifice at Noon")
}

function otherFragments() {
  return rule().baseType("Gift to the Goddess", "Tribute to the Goddess", "Sacred Blossom", "Simulacrum", "Unrelenting Timeless Eternal Emblem", "Unrelenting Timeless Karui Emblem", "Unrelenting Timeless Maraketh Emblem", "Unrelenting Timeless Templar Emblem", "Unrelenting Timeless Vaal Emblem", "Timeless Eternal Emblem", "Timeless Maraketh Emblem", "Timeless Karui Emblem", "Timeless Templar Emblem", "Timeless Vaal Emblem", )
}

function tempFragments() {
  return rule().baseType("Divine Vessel", "Offering to the Goddess", )
}

function badBows() {
  return rule().baseType("Death Bow", "Decimation Bow", "Harbinger Bow", "Recurve Bow", "Decurve Bow", "Sniper Bow", "Citadel Bow", "Assassin Bow")
}

const getFilter = () => `
### decorators
${
  rule(
    rule().rarity("==", 'Unique').text(Colors.uniqueColor),
    rule().rarity("==", "Rare").text(Colors.rareColor),
    rule().rarity("==", "Magic").text(Colors.magicColor),
    rule().rarity("==", "Normal").text(Colors.normalColor),
  )
  .continue()
  .compile()
}

Import "FlaskFilter.filter"
Import "GearFilter.filter"
Import "GemFilter.filter"
Import "CurrencyFilter.filter"


### TODO show specific early magic bad bows

${
	rule(
		rule().baseType("Short Bow").areaLevel("<=", 10),
		rule().baseType("Long Bow").areaLevel("<=", 15),
		rule().baseType("Composite Bow").areaLevel("<=", 23),
		rule().baseType("Bone Bow").areaLevel("<=", 29),
		rule().baseType("Royal Bow").areaLevel("<=", 35),
		rule().baseType("Grove Bow").areaLevel("<=", 48),
		rule().baseType("Ivory Bow").areaLevel("<", 52),
		rule().baseType("Highborn Bow").areaLevel("<=", 65),
		rule().baseType("Thicket Bow").areaLevel("<=", 68),
		rule().baseType("Spine Bow").itemLevel(">=", 74).itemLevel("<=", 80),
	)
		.icon("White", "Cross")
		.background(Colors.darkGrey)
		.rarity("==", "Normal")
		.customSound("hael/bow")
		.size(45)
		.compile()
}


### early socket rules
${
  //#region Early sockets
  rule(
    gearRule().sockets(">=", "GG").customSound("hael/green_sockets"),
    gearRule().sockets(">=", "RGB"),
  )
    .icon("Red", "Triangle").areaLevel("<=", 16)
    .background(Colors.black)
    .text(Colors.white)
    .border(Colors.red)
    .size(45)
    .compile()
}

### later socket rules
${
  rule(
    gearRule().sockets(">=", "4GGG").customSound("hael/green_sockets"),
    gearRule().sockets(">=", "RGB").customSound("hael/blue_red"),
  )
    .icon("Red", "Triangle")
    .areaLevel("<=", 60)
    .background(Colors.black)
    .text(Colors.white)
    .border(Colors.red)
    .size(45)
    .compile()
}

### 3 link rules
${
  rule(
    gearRule().socketGroup(">=", "GGG").customSound("hael/3green"),
    gearRule().socketGroup(">=", "GGB").customSound("hael/3link"),
    gearRule().socketGroup(">=", "GGR").customSound("hael/3link"),
  )
    .icon("Cyan", "Triangle")
    .areaLevel("<=", 27)
    .background(Colors.purple)
    .text(Colors.white)
    .size(45)
    .compile()
}

### 4 link rules
${
  rule(
    gearRule().socketGroup(">=", "GGGG").customSound("hael/4link"),
    gearRule().socketGroup(">=", "4GGB").customSound("hael/4link"),
    gearRule().socketGroup(">=", "4GGR").customSound("hael/4link")
  )
    .icon("Cyan", "Triangle")
    .areaLevel("<=", 70)
    .background(Colors.black)
    .size(45)
    .compile()
  //#endregion
}

### All weapon rule 
${
  rule()
    .itemClass("Bows")
    .rarity("==", "Rare")
    .customSound("hael/rare_weapon", 300)
    .icon("Cyan", "UpsideDownHouse")
    .background(Colors.black)
    .border(Colors.red)
    .size(45)
    .compile()
}

${
  rule(
    badBows().rarity("==", "Magic").areaLevel("<=", 37),
    badBows().rarity("==", "Normal").areaLevel("<=", 18)
  )
  .compile()
}

${
  rule()
    .itemClass("Bows")
    .rarity("==", "Magic")
    .areaLevel("<=", 40)
    .customSound("hael/magicweapon")
    .icon("Red", "UpsideDownHouse")
    .background(Colors.black)
    .text(Colors.blue)
    .size(45)
    .compile()
}

${
  rule()
    .itemClass("Quivers")
    .rarity("==", "Rare")
    .customSound("hael/rare_quiver", 300)
    .icon("Cyan", "Kite")
    .background(Colors.white)
    .text(Colors.black)
    .size(45)
    .compile()
}

${
  rule()
    .itemClass("Quivers")
    .rarity("==", "Magic")
    .areaLevel("<=", 35)
    .customSound("hael/magic_quiver", 300)
    .icon("Red", "Kite")
    .background(Colors.black)
    .text(Colors.blue)
    .size(45)
    .compile()
}

${
  rule()
    .itemClass("Quivers")
    .rarity("==", "Normal")
    .areaLevel("<=", 16)
    .customSound("hael/quiver", 300)
    .icon("White", "Kite")
    .background(Colors.black)
    .size(45)
    .compile()
}

${
  rule()
    .itemClass("Quivers")
    .baseType("Feathered Arrow Quiver")
    .rarity("==", "Normal")
    .customSound("hael/feathered", 300)
    .icon("White", "Kite")
    .background(Colors.black)
    .size(45)
    .compile()
  //#endregion
}

### strand rules
${
  rule().rarity("==", "Normal").areaLevel("<=", 2).size(45).compile()
}

# any usable rare
${
  rule(
    rule().itemClass("Gloves"),
    rule().itemClass("Boots"),
    rule().itemClass("Helmets"),
    rule().itemClass("Body Armours"),
  )
    .rarity(">=", "Rare")
    .baseEvasion(">=", 1)
    .baseArmour("==", 0)
    .baseES("==", 0)
    .background(Colors.black)
    .border(Colors.red)
    .size(45)
    .compile()
}

### misc leveling

### annoying things
#
#  rule().baseType("Simple Robe").rarity("==", "Normal").hide().compile()
#

### show early jewelry
${
  rule(
    rule().baseType("Iron Ring").areaLevel("<=", 20).customSound("iron_ring"),
    rule().baseType("Rustic Sash").areaLevel("<=", 20).customSound("rustic"),
    rule().baseType("Coral Ring").areaLevel("<=", 12),
    rule().baseType("Sapphire Ring", "Topaz Ring", "Ruby Ring", "Two-Stone Ring", "Lapis Amulet", "Heavy Belt").areaLevel("<=", 30)
  )
    .background(Colors.darkGrey)
    .border(Colors.red)
    .size(45)
    .compile()
}

### hide large high lvl magic unids 

### group leveling
### early group links
### casters
${
  rule(
    leapslamRule().sockets(">=", "2B").areaLevel("<=", 18).customSound("hael/blue_weapon"),
    gearRule().socketGroup(">=", "BBB").areaLevel("<=", 18).customSound("hael/3_blue"),
    gearRule().socketGroup(">=", "BBG").areaLevel("<=", 24).customSound("hael/crema"),
  )
    .icon("Purple", "Star")
    .size(45)
    .border(Colors.red)
    .background(Colors.black)
    .compile()
}
### TODO duelist

### TODO marauder

### late group links
### caster
${
  rule(
    gearRule().socketGroup(">=", "BBBB").areaLevel("<=", 42).customSound("hael/arma_links"),
    gearRule().socketGroup(">=", "BBBG").areaLevel("<=", 42).customSound("hael/crema_links"),
    gearRule().socketGroup(">=", "BBGR").areaLevel("<=", 42).customSound("hael/crema_links"),
  )
    .icon("Purple", "Star")
    .size(45)
    .border(Colors.red)
    .background(Colors.black)
    .compile()
}
  
  
### leveling specific currency rules
###
${
  //#region Leveling Currency Rules
  rule(
    rule().baseType("Orb of Transmutation").areaLevel("<", 50).icon("Red", "Circle").customSound("hael/transmutation", 300),
    rule().baseType("Orb of Transmutation").areaLevel("<", 75).stackSize(">=", 2).icon("Red", "Circle").customSound("hael/transmutation", 300),
    rule().baseType("Orb of Transmutation").areaLevel("<", 100).stackSize(">=", 3).icon("White", "Circle"),

    rule().baseType("Scroll of Wisdom").areaLevel("<", 31).icon("White", "Circle").customSound("hael/wisdom"),
    rule().baseType("Scroll of Wisdom").areaLevel("<", 55).stackSize(">=", 2).icon("White", "Circle").customSound("hael/wisdom", 300),
    rule().baseType("Scroll of Wisdom").areaLevel("<", 100).stackSize(">=", 3).icon("White", "Circle"),

    rule().baseType("Portal Scroll").areaLevel("<", 31).icon("White", "Circle").customSound("hael/wisdom"),
    rule().baseType("Portal Scroll").areaLevel("<", 55).stackSize(">=", 2).icon("White", "Circle").customSound("hael/wisdom", 300),
    rule().baseType("Portal Scroll").areaLevel("<", 100).stackSize(">=", 3).icon("White", "Circle"),

    rule().baseType("Armourer's Scrap").areaLevel("<", 40).icon("White", "Circle").customSound("hael/armorer"),
    rule().baseType("Armourer's Scrap").areaLevel("<", 65).stackSize(">=", 2).icon("White", "Circle").customSound("hael/armorer", 300),
    rule().baseType("Armourer's Scrap").areaLevel("<", 100).stackSize(">=", 3).icon("White", "Circle"),

    rule().baseType("Blacksmith's Whetstone").areaLevel("<", 40).icon("White", "Circle").customSound("hael/armorer"),
    rule().baseType("Blacksmith's Whetstone").areaLevel("<", 65).stackSize(">=", 2).icon("White", "Circle").customSound("hael/armorer", 300),
    rule().baseType("Blacksmith's Whetstone").areaLevel("<", 100).stackSize(">=", 3).icon("White", "Circle"),

    rule().baseType("Orb of Augmentation").areaLevel("<", 30).icon("White", "Circle").customSound("hael/augment", 300),
    rule().baseType("Orb of Augmentation").areaLevel("<", 100).stackSize(">=", 2).icon("White", "Circle")
  )
    .text(Colors.black)
    .background(Colors.lightGrey)
    .border(Colors.red)
    .size(45)
    .compile()
  //#endregion
}

### other currency
${
  rule(
    rule().baseType("Rogue's Marker"),
  )
    .icon("White", "Star")
    .text(Colors.white)
    .background(Colors.black)
    .size(45)
    .compile()
}
  
### map rule
###
${
  //#region Map rule
  rule(
    rule().mapTier("<=", 5).mapTier(">=", 1).icon("White", "Square").customSound("hael/whitemap", 300),
    rule().mapTier("<=", 10).mapTier(">=", 6).icon("Yellow", "Square").customSound("hael/yellowmap", 300),
    rule().mapTier("<=", 16).mapTier(">=", 11).icon("Red", "Square").customSound("hael/redmap", 300),
  )
    .itemClass("Maps")
    .rarity("!", "Unique")
    .text(Colors.white)
    .background(Colors.darkGrey)
    .border(Colors.gold)
    .size(45)
    .compile()
}

${rule().itemClass("Maps").rarity("==", "Unique").icon("Brown", "Square").customSound("hael/uniquemap", 300)
  .text(Colors.black)
  .background(Colors.lightGrey)
  .size(45)
  .compile()
  //#endregion
}
    
### fragments
### scarab rule
${
  //#region Scarabs
  rule(
    tierOneScarabs().icon("White", "Diamond"),
    tierTwoScarabs().icon("Red", "Diamond"),
    tierThreeScarabs().icon("Red", "Diamond"),
  )
    .text(Colors.white)
    .background(Colors.green)
    .size(45)
    .compile()}
    
### fragments
${rule(
  sacrificeFragments().icon("White", "Raindrop").sound(wayLessThanTink),
  tempFragments().icon("White", "Raindrop").sound(wayLessThanTink),
  otherFragments().icon("Red", "Raindrop").sound(lessThanTink),
  bossFragments().icon("Cyan", "Raindrop").sound(tink)
)
  .text(Colors.white)
  .background(Colors.blue)
  .size(45)
  .compile()
  //#endregion
}

### misc catch all
${
  //#region Misc catch-all
  rule()
    .itemClass("Quest Items")
    .icon("Green", "Cross")
    .text(Colors.white)
    .background(Colors.green)
    .border(Colors.gold)
    .size(45)
    .compile()
}

${
  rule()
    .itemClass("Sanctified Relics")
    .icon("Green", "Cross")
    .sound(lessThanTink)
    .text(Colors.black)
    .background(Colors.gold)
    .border(Colors.red)
    .size(45)
    .compile()
}

${
  rule()
    .itemClass("Contracts")
    .icon("White", "Cross")
    .text(Colors.black)
    .background(Colors.lightGrey)
    .size(45)
    .compile()
}

${
  rule()
    .itemClass("Blueprints")
    .sound(lessThanTink)
    .icon("Red", "Cross")
    .text(Colors.black)
    .background(Colors.white)
    .border(Colors.gold)
    .size(45)
    .compile()
    //#endregion
}
`;

// Write filter to output directory
fs.writeFileSync(path.join(__dirname, `../../output/${filterName}.filter`), getFilter());
