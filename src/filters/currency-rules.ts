import fs from 'fs';
import path from 'path';
import rule from '../rule';
import {Colors} from "../types/colors";

const wayLessThanTink = 5
const lessThanTink = 10
const tink = 15

// Set filtername here
const filterName = 'CurrencyFilter';

// TODO add drop effects 

function allCurrency() {
    return rule().baseType('Abrasive Catalyst', 'Accelerating Catalyst', 'Albino Rhoa Feather', 'Alchemy Shard', 'Alteration Shard', 'Ancient Orb', 'Ancient Shard', 'Annulment Shard', "Armourer's Scrap", 'Astragali', 'Awakened Sextant', "Awakener's Orb", 'Bestiary Orb', 'Binding Shard', "Blacksmith's Whetstone", 'Blessed Orb', 'Blessing of Chayula', 'Blessing of Esh', 'Blessing of Tul', 'Blessing of Uul-Netol', 'Blessing of Xoph', 'Blighted Scouting Report', 'Burial Medallion', "Cartographer's Chisel", 'Chaos Orb', 'Chaos Shard', 'Charged Compass', 'Chromatic Orb', 'Comprehensive Scouting Report', 'Crescent Splinter', "Crusader's Exalted Orb", 'Delirious Scouting Report', 'Divine Orb', 'Eldritch Chaos Orb', 'Eldritch Exalted Orb', 'Eldritch Orb of Annulment', 'Elevated Sextant', "Engineer's Orb", "Engineer's Shard", 'Enkindling Orb', 'Eternal Orb', 'Exalted Orb', 'Exalted Shard', 'Exceptional Eldritch Ember', 'Exceptional Eldritch Ichor', 'Exotic Coinage', "Explorer's Scouting Report", "Facetor's Lens", 'Fertile Catalyst', 'Fracturing Orb', 'Fracturing Shard', "Gemcutter's Prism", "Glassblower's Bauble", 'Grand Eldritch Ember', 'Grand Eldritch Ichor', 'Greater Eldritch Ember', 'Greater Eldritch Ichor', "Harbinger's Orb", "Harbinger's Shard", 'Horizon Shard', "Hunter's Exalted Orb", 'Imbued Catalyst', 'Influenced Scouting Report', 'Instilling Orb', 'Intrinsic Catalyst', "Jeweller's Orb", 'Lesser Eldritch Ember', 'Lesser Eldritch Ichor', 'Mirror Shard', 'Mirror of Kalandra', 'Noxious Catalyst', 'Oil Extractor', "Operative's Scouting Report", 'Orb of Alchemy', 'Orb of Alteration', 'Orb of Annulment', 'Orb of Augmentation', 'Orb of Binding', 'Orb of Chance', 'Orb of Conflict', 'Orb of Dominance', 'Orb of Fusing', 'Orb of Horizons', 'Orb of Regret', 'Orb of Scouring', 'Orb of Transmutation', 'Orb of Unmaking', 'Otherworldly Scouting Report', 'Portal Scroll', 'Primal Crystallised Lifeforce', 'Prime Regrading Lens', 'Prismatic Catalyst', "Redeemer's Exalted Orb", 'Regal Orb', 'Regal Shard', 'Ritual Splinter', 'Ritual Vessel', 'Sacred Crystallised Lifeforce', 'Sacred Orb', 'Scrap Metal', 'Scroll of Wisdom', 'Secondary Regrading Lens', 'Singular Scouting Report', 'Stacked Deck', "Surveyor's Compass", 'Tailoring Orb', "Tainted Armourer's Scrap", "Tainted Blacksmith's Whetstone", 'Tainted Blessing', 'Tainted Chaos Orb', 'Tainted Chromatic Orb', 'Tainted Divine Teardrop', 'Tainted Exalted Orb', "Tainted Jeweller's Orb", 'Tainted Mythic Orb', 'Tainted Orb of Fusing', 'Tempering Catalyst', 'Tempering Orb', 'Transmutation Shard', 'Turbulent Catalyst', 'Unstable Catalyst', 'Vaal Orb', 'Vaal Scouting Report', 'Veiled Chaos Orb', 'Vivid Crystallised Lifeforce', "Warlord's Exalted Orb", 'Wild Crystallised Lifeforce')
}

function taintedCurrency() {
    return rule().baseType("Tainted Armourer's Scrap", "Tainted Blacksmith's Whetstone", "Tainted Chaos Orb", "Tainted Chromatic Orb", "Tainted Divine Teardrop", "Tainted Exalted Orb", "Tainted Jeweller's Orb", "Tainted Mythic Orb", "Tainted Orb of Fusing")
  }

// excludes sacred lifeforce
function harvestCurrency() {
    return rule().baseType("Vivid Crystallised Lifeforce", "Wild Crystallised Lifeforce", "Primal Crystallised Lifeforce")
}

function expeditionCurrency() {
    return rule().baseType("Scrap Metal", "Exotic Coinage", "Burial Medallion", "Astragali")
}

function scoutingReport() {
    return rule().baseType("Blighted Scouting Report", "Comprehensive Scouting Report", "Delirious Scouting Report", "Explorer's Scouting Report", 'Influenced Scouting Report', "Operative's Scouting Report", "Otherworldly Scouting Report", "Singular Scouting Report", "Vaal Scouting Report")
}

function ritualCurrency() {
    return rule().baseType('Ritual Splinter', "Ritual Vessel")
}

function breachCurrency() {
    return rule().baseType("Blessing of Chayula", "Blessing of Esh", "Blessing of Tul", "Blessing of Uul-Netol", "Blessing of Xoph")
}

function catchAll() {
    return rule().baseType("Bestiary Orb", "Eternal Orb", "Charged Compass", "Facetor's Lens", "Prime Regrading Lens", "Secondary Regrading Lens", "Sacred Orb", "Sacred Crystallised Lifeforce", "Surveyor's Compass", "Albino Rhoa Feather", "Charged Compass")
}

function embersAndIchors() {
    return rule().baseType("Exceptional Eldritch Ember", "Exceptional Eldritch Ichor", "Greater Eldritch Ember", "Greater Eldritch Ichor", "Grand Eldritch Ember", "Grand Eldritch Ichor", "Lesser Eldritch Ember", "Lesser Eldritch Ichor")
}

const getFilter = () => `

### decorators
${
    rule(
        rule().baseType("Chromatic Orb", "Orb of Alteration", "Glassblower's Bauble", "Jeweller's Orb", "Orb of Chance").background(Colors.gearingColor)    
    )
}

${
    allCurrency().background(Colors.green).text(Colors.black).continue().compile()
}

${
    allCurrency().hide().continue().compile()
}

### catalysts
${
    rule().baseType("Imbued Catalyst", "Fertile Catalyst", "Noxious Catalyst", "Abrasive Catalyst", "Unstable Catalyst", "Intrinsic Catalyst", "Prismatic Catalyst", "Tempering Catalyst", "Turbulent Catalyst")
    .size(45)
    .icon("Red", "Star")
    .sound(wayLessThanTink, 200)
    .compile()
}

### tainted currency
${
  taintedCurrency()
    .icon("Red", "Circle")
    .sound(wayLessThanTink, 200)
    .size(45)
    .compile()
}

${
    expeditionCurrency()
        .icon("Red", "Circle")
        .sound(lessThanTink)
        .size(45)
        .compile()
}

${
    scoutingReport()
        .icon("Pink", "Circle")
        .sound(lessThanTink)
        .size(45)
        .compile()
}

### harvest currency
${
  harvestCurrency()  
    .icon("Yellow", "Circle")
    .size(45)
    .compile()
}

### embers and ichors
${
    embersAndIchors()
        .icon("Red", "Circle")
        .sound(lessThanTink)
        .size(45)
        .compile()
}

### ritual
${
    ritualCurrency()
        .icon("Red", "Circle")
        .sound(lessThanTink)
        .size(45)
        .compile()
}

### breach
${
    breachCurrency()
        .icon("Cyan", "Circle")
        .sound(lessThanTink)
        .size(45)
        .compile()
}

### catch all
${
    catchAll()
        .icon("Green", "Circle")
        .sound(lessThanTink)
        .size(45)
        .compile()
}

### t6 currency. features things that are extremely bad
#
#    rule(
#        rule().baseType("Engineer's Orb", "Engineer's Shard", "Orb of Augmentation", "Transmutation Shard")
#    )
#

### t5 currency. currency that you only pick up very early
${
    rule(
        rule().baseType("Alchemy Shard").areaLevel("<=", 77),
        rule().baseType("Alteration Shard").areaLevel("<=", 68),
        rule().baseType("Orb of Augmentation").areaLevel("<=", 60)
    )
    .icon("White", "Circle")
    .size(45)
    .background(Colors.darkGrey)
    .text(Colors.white)
    .compile()
}

### t4 currency. features currencies you'd pick up if close, but don't want a sound for 1 stacks
${
    rule(
        rule().baseType("Chromatic Orb"),
        rule().baseType("Orb of Chance"),
        rule().baseType("Orb of Fusing"),
        rule().baseType("Orb of Binding"),
        rule().baseType("Orb of Regret"),
        rule().baseType("Orb of Fusing"),
        rule().baseType("Orb of Horizons"),
        rule().baseType("Orb of Unmaking"),
        rule().baseType("Orb of Alchemy"),
        rule().baseType("Orb of Scouring"),
        rule().baseType("Regal Shard").stackSize(">=", 3),
        rule().baseType("Blessed Orb"),
        rule().baseType("Cartographer's Chisel"),
        rule().baseType("Chaos Shard").stackSize(">=", 5),
        rule().baseType("Binding Shard").stackSize(">=", 10),
        rule().baseType("Jeweller's Orb"),
        rule().baseType("Orb of Augmentation").stackSize(">=", 3),
        rule().baseType("Horizon Shard"),
        rule().baseType("Harbinger's Orb"),
        rule().baseType("Harbinger's Shard"),
        rule().baseType("Orb of Alteration"),
        rule().baseType("Orb of Transmutation").stackSize(">=", 1),
        rule().baseType("Armourer's Scrap").stackSize(">=", 3),
        rule().baseType("Blacksmith's Whetstone").stackSize(">=", 3),
        rule().baseType("Glassblower's Bauble").stackSize(">=", 1),
        rule().baseType("Portal Scroll").stackSize(">=", 3),
        rule().baseType("Scroll of Wisdom").stackSize(">=", 3)
    )
    .icon("White", "Circle")
    .size(45)
    .text(Colors.gucciPurple)
    .compile()
}

### t3 currency. currencies you want a sound for.
${
    rule(
        rule().baseType("Orb of Annulment"),
        rule().baseType("Regal Orb"),
        rule().baseType("Chaos Orb"),
        rule().baseType("Chaos Shard").stackSize(">=", 10),
        rule().baseType("Awakened Sextant"),
        rule().baseType("Ancient Shard"),
        rule().baseType("Annulment Shard"),
        rule().baseType("Enkindling Orb"),
        rule().baseType("Gemcutter's Prism"),
        rule().baseType("Stacked Deck"),
        rule().baseType("Vaal Orb"),
        rule().baseType("Instilling Orb"),
        rule().baseType("Orb of Alteration").stackSize(">=", 3),
        rule().baseType("Exalted Shard")
    )
    .icon("Red", "Circle")
    .size(45)
    .text(Colors.gucciPurple)
    .border(Colors.red)
    .sound(wayLessThanTink)
    .compile()
}

### t2 currency. currencies that are worth like >10c
${
    rule(
        rule().baseType("Ancient Orb"),
        rule().baseType("Oil Extractor"),
        rule().baseType("Veiled Chaos Orb"),
        rule().baseType("Eldritch Chaos Orb"),
        rule().baseType("Eldritch Orb of Annulment")
    )
    .icon("Cyan", "Circle")
    .size(45)
    .background(Colors.red)
    .text(Colors.white)
    .sound(lessThanTink)
    .compile()
}

### t0 currency
${
    rule(
        rule().baseType("Mirror of Kalandra", "Mirror Shard", "Divine Orb", "Tempering Orb", "Tailoring Orb", "Fracturing Orb", "Fracturing Shard", "Exalted Orb", "Eldritch Exalted Orb", "Hunter's Exalted Orb", "Warlord's Exalted Orb", "Crusader's Exalted Orb", "Redeemer's Exalted Orb", "Orb of Conflict", "Orb of Dominance", "Awakener's Orb", "Crescent Splinter", "Elevated Sextant")
    )
    .icon("Purple", "Circle")
    .size(45)
    .background(Colors.red)
    .text(Colors.white)
    .sound(tink)
    .compile()
}
`
// Write filter to output directory
fs.writeFileSync(path.join(__dirname, `../../output/${filterName}.filter`), getFilter());