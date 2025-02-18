import fs from 'fs';
import path from 'path';
import rule from '../rule';
import {Colors} from "../types/colors";

// Set filtername here
const filterName = 'AAAA hael psiphon filter';

const wayLessThanTink = 2
const lessThanTink = 4
const tink = 6

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
  return rule().baseType("Ambush Scarab of Containment", "Bestiary Scarab of the Shadowed Crow", "Breach Scarab of the Dreamer", "Divination Scarab of Completion", "Divination Scarab of Curation", "Essence Scarab of Calcification", "Harvest Scarab of Cornucopia", "Horned Scarab of Awakening", "Horned Scarab of Bloodlines", "Horned Scarab of Glittering", "Horned Scarab of Preservation", "Reliquary Scarab of Vision", "Ultimatum Scarab of Catalysing"
  )
}

function tierTwoScarabs() {
  return rule().baseType("Ambush Scarab of Discernment", "Bestiary Scarab of Duplicating", "Blight Scarab of Blooming", "Breach Scarab of Snares", "Domination Scarab of Teachings", "Domination Scarab of Terrors", "Essence Scarab of Ascent", "Expedition Scarab of Archaeology", "Harbinger Scarab of Warhoards", "Harvest Scarab of Doubling", "Horned Scarab of Nemeses", "Horned Scarab of Pandemonium", "Horned Scarab of Tradition", "Incursion Scarab of Timelines", "Legion Scarab of Eternal Conflict", "Legion Scarab of Officers", "Ultimatum Scarab of Dueling"
	)}

function tierThreeScarabs() {
  return rule().baseType("Abyss Scarab of Edifice", "Ambush Scarab", "Anarchy Scarab of Partnership", "Bestiary Scarab of the Herd", "Betrayal Scarab of Perpetuation", "Beyond Scarab of Resurgence", "Beyond Scarab of the Invasion", "Blight Scarab of Bounty", "Blight Scarab of Oils", "Breach Scarab of Lordship", "Cartography Scarab", "Cartography Scarab of Ascension", "Cartography Scarab of Corruption", "Cartography Scarab of Duplication", "Cartography Scarab of Singularity", "Delirium Scarab of Mania", "Delirium Scarab of Neuroses", "Delirium Scarab of Paranoia", "Divination Scarab", "Essence Scarab", "Expedition Scarab of Runefinding", "Expedition Scarab of the Skald", "Harbinger Scarab", "Harbinger Scarab of Discernment", "Harbinger Scarab of Regency", "Influencing Scarab of Conversion", "Legion Scarab", "Reliquary Scarab of Overlords", "Ritual Scarab of Abundance", "Ritual Scarab of Selectiveness", "Scarab of Hunted Traitors", "Scarab of Stability"
	)}

function bossFragments() {
  return rule().baseType('Fragment of Constriction', 'Fragment of Emptiness', 'Fragment of Enslavement', 'Fragment of Eradication', 'Fragment of Knowledge', 'Fragment of Purification', 'Fragment of Shape', "Fragment of Terror", "Fragment of the Chimera", "Fragment of the Hydra", "Fragment of the Minotaur", "Fragment of the Phoenix", "Drox's Crest", "Al-Hezmin's Crest", "Baran's Crest", "Veritania's Crest", "The Maven's Writ", "Mortal Grief", "Mortal Hope", "Mortal Ignorance", "Mortal Rage", "Decaying Fragment", "Awakening Fragment", 'Synthesising Fragment', 'Reality Fragment', "Devouring Fragment", "Blazing Fragment")
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

Import "ZZZZ-hael-FlaskFilter.filter"
Import "ZZZZ-hael-GearFilter.filter"
Import "ZZZZ-hael-GemFilter.filter"
Import "ZZZZ-hael-CurrencyFilter.filter"
Import "ZZZZ-hael-psiphon.filter"


### TODO show specific early magic bad bows

### strand rules (TODO)
${
  //#region strand rules
  rule().areaLevel("<=", 2).size(45).compile()
  //#endregion
}

### misc leveling


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
    rule().influence("Shaper", "Elder", "Crusader", "Hunter", "Redeemer", "Warlord").icon("Purple", "Square").sound(tink)
  )
    .itemClass("Maps")
    .rarity("!", "Unique")
    .border(Colors.gold)
    .size(45)
    .continue()
    .compile()
}

${
  rule().baseType("Synthesised Map", "Invitation")
  .text(Colors.purple)
  .border(Colors.gold)
  .size(45)
  .continue()
  .compile()
}

${rule().itemClass("Maps").rarity("==", "Unique").icon("Brown", "Square").customSound("hael/uniquemap", 300)
  .size(45)
  .compile()
  //#endregion
}
    
### fragments
### scarab rule

${rule(
    tierOneScarabs().icon("White", "Diamond"),
    tierTwoScarabs().icon("Red", "Diamond"),
    tierThreeScarabs().icon("Red", "Diamond"),
  )
    .border(Colors.purple)
    .size(45)
    .compile()
}
    
### fragments
${
  rule(
  sacrificeFragments().icon("White", "Raindrop"),
  tempFragments().icon("White", "Raindrop").sound(wayLessThanTink),
  otherFragments().icon("Red", "Raindrop").sound(lessThanTink),
  bossFragments().icon("Cyan", "Raindrop").sound(tink)
)
  .text(Colors.BenGreen)
  .border(Colors.BenGreen)
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
    .text(Colors.green)
    .border(Colors.green)
    .size(45)
    .compile()
}

### misc catch all
${
  rule()
    .baseType("Treasure Key", "Forbidden Tome")
    .icon("Green", "Cross")
    .text(Colors.green)
    .border(Colors.green)
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

Show  # $type->exotic->enchanted $tier->enchantedringsgoldoil
AnyEnchantment True
Rarity Normal Magic Rare
Class "Rings"
HasEnchantment == "Arc Tower Chain" "Empowering Tower Special" "Fireball Tower Special" "Imbuing Tower Damage" "Lightning Storm Tower Explosion Area" "Seismic Tower Additional Cascade" "Seismic Tower Special" "Shock Nova Tower Shock Effect" "Shock Nova Tower Special" "Smothering Tower Reduced Damage" "Stone Gaze Tower Petrify Tick Speed" "Temporal Tower Action Speed" "Tower Synergy"
SetFontSize 45
SetTextColor 0 240 190 255
SetBorderColor 0 240 190 255
SetBackgroundColor 0 75 30 255
PlayAlertSound 3 300
PlayEffect Blue
MinimapIcon 0 Blue Diamond

Show
Class "Amulet"
AnyEnchantment True 
Corrupted False
SetFontSize 45
SetTextColor 0 240 190 255
SetBorderColor 0 240 190 255
SetBackgroundColor 0 75 30 255

Show  # $type->exotic->enchanted $tier->enchantedringssilveroil
AnyEnchantment True
Rarity Normal Magic Rare
Class "Rings"
HasEnchantment == "Arc Tower Repeat" "Chilling Tower Special" "Empowering Tower Cast Speed" "Empowering Tower Damage" "Imbuing Tower Critical" "Lightning Storm Tower Targeting" "Scout Tower Additional Minion" "Seismic Tower Stun Duration" "Stone Gaze Tower Cooldown" "Summoning Tower Life" "Summoning Tower Special" "Temporal Tower Reduced Tick Speed"
SetFontSize 45
SetTextColor 0 240 190 255
SetBorderColor 0 240 190 255
SetBackgroundColor 0 75 30 255
PlayAlertSound 3 300
PlayEffect Blue
MinimapIcon 0 Green Diamond

`;

// Write filter to output directory
fs.writeFileSync(path.join(__dirname, `../../output/${filterName}.filter`), getFilter());
