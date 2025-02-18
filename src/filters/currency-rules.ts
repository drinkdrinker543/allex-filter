import fs from 'fs';
import path, { basename } from 'path';
import rule from '../rule';
import {Colors} from "../types/colors";

const wayLessThanTink = 2
const lessThanTink = 4
const tink = 6

// Set filtername here
const filterName = 'ZZZZ-hael-CurrencyFilter';

// contains filters for (not really) all currencies and div cards. some things are missing cause im stupid

// TODO add drop effects 

function allCurrency() {
    return rule().baseType('Abrasive Catalyst', 'Accelerating Catalyst', 'Albino Rhoa Feather', 'Alchemy Shard', 'Alteration Shard', 'Ancient Orb', 'Ancient Shard', 'Annulment Shard', "Armourer's Scrap", 'Astragali', 'Awakened Sextant', "Awakener's Orb", 'Bestiary Orb', 'Binding Shard', "Blacksmith's Whetstone", 'Blessed Orb', 'Blessing of Chayula', 'Blessing of Esh', 'Blessing of Tul', 'Blessing of Uul-Netol', 'Blessing of Xoph', 'Blighted Scouting Report', 'Burial Medallion', "Cartographer's Chisel", 'Chaos Orb', 'Chaos Shard', 'Charged Compass', 'Chromatic Orb', 'Comprehensive Scouting Report', 'Crescent Splinter', "Crusader's Exalted Orb", 'Delirious Scouting Report', 'Divine Orb', 'Eldritch Chaos Orb', 'Eldritch Exalted Orb', 'Eldritch Orb of Annulment', 'Elevated Sextant', "Engineer's Orb", "Engineer's Shard", 'Enkindling Orb', 'Eternal Orb', 'Exalted Orb', 'Exalted Shard', 'Exceptional Eldritch Ember', 'Exceptional Eldritch Ichor', 'Exotic Coinage', "Explorer's Scouting Report", "Facetor's Lens", 'Fertile Catalyst', 'Fracturing Orb', 'Fracturing Shard', "Gemcutter's Prism", "Glassblower's Bauble", 'Grand Eldritch Ember', 'Grand Eldritch Ichor', 'Greater Eldritch Ember', 'Greater Eldritch Ichor', "Harbinger's Orb", "Harbinger's Shard", 'Horizon Shard', "Hunter's Exalted Orb", 'Imbued Catalyst', 'Influenced Scouting Report', 'Instilling Orb', 'Intrinsic Catalyst', "Jeweller's Orb", 'Lesser Eldritch Ember', 'Lesser Eldritch Ichor', 'Mirror Shard', 'Mirror of Kalandra', 'Noxious Catalyst', 'Oil Extractor', "Operative's Scouting Report", 'Orb of Alchemy', 'Orb of Alteration', 'Orb of Annulment', 'Orb of Augmentation', 'Orb of Binding', 'Orb of Chance', 'Orb of Conflict', 'Orb of Dominance', 'Orb of Fusing', 'Orb of Horizons', 'Orb of Regret', 'Orb of Scouring', 'Orb of Transmutation', 'Orb of Unmaking', 'Otherworldly Scouting Report', 'Portal Scroll', 'Primal Crystallised Lifeforce', 'Prime Regrading Lens', 'Prismatic Catalyst', "Redeemer's Exalted Orb", 'Regal Orb', 'Regal Shard', 'Ritual Splinter', 'Ritual Vessel', 'Sacred Crystallised Lifeforce', 'Sacred Orb', 'Scrap Metal', 'Scroll of Wisdom', 'Secondary Regrading Lens', 'Singular Scouting Report', 'Stacked Deck', "Surveyor's Compass", 'Tailoring Orb', "Tainted Armourer's Scrap", "Tainted Blacksmith's Whetstone", 'Tainted Blessing', 'Tainted Chaos Orb', 'Tainted Chromatic Orb', 'Tainted Divine Teardrop', 'Tainted Exalted Orb', "Tainted Jeweller's Orb", 'Tainted Mythic Orb', 'Tainted Orb of Fusing', 'Tempering Catalyst', 'Tempering Orb', 'Transmutation Shard', 'Turbulent Catalyst', 'Unstable Catalyst', 'Vaal Orb', 'Vaal Scouting Report', 'Veiled Orb', 'Vivid Crystallised Lifeforce', "Warlord's Exalted Orb", 'Wild Crystallised Lifeforce')
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

### this rule is actually kinda stupid in hindsight, but it does make it harder to unintentionally hide new things
${
    allCurrency().hide().continue().compile()
}

### catalysts
${
    rule().baseType("Imbued Catalyst", "Fertile Catalyst", "Noxious Catalyst", "Abrasive Catalyst", "Unstable Catalyst", "Intrinsic Catalyst", "Prismatic Catalyst", "Tempering Catalyst", "Turbulent Catalyst")
    .size(45)
    .icon("Red", "Star")
    .text(Colors.BenGreen)
    .border(Colors.BenGreen)
    .sound(wayLessThanTink, 200)
    .compile()
}

### tainted currency
${
  taintedCurrency()
    .icon("Red", "Circle")
    .sound(wayLessThanTink, 200)
    .size(45)
    .text(Colors.BenGreen)
    .border(Colors.BenGreen)
    .compile()
}

${
    expeditionCurrency()
        .icon("Red", "Circle")
        .sound(lessThanTink)
        .size(45).text(Colors.BenGreen)
        .border(Colors.BenGreen)
        .compile()
}

${
    scoutingReport()
        .icon("Pink", "Circle")
        .sound(lessThanTink)
        .size(45)
        .text(Colors.BenGreen)
        .border(Colors.BenGreen)
        .compile()
}

### harvest currency
${
  harvestCurrency()  
    .icon("Yellow", "Circle")
    .size(45)
    .text(Colors.BenGreen)
    .border(Colors.BenGreen)
    .compile()
}

### embers and ichors
${
    embersAndIchors()
        .icon("Red", "Circle")
        .sound(lessThanTink)
        .text(Colors.BenGreen)
        .border(Colors.BenGreen)
        .size(45)
        .compile()
}

### ritual
${
    ritualCurrency()
        .icon("Red", "Circle")
        .sound(lessThanTink)
        .text(Colors.BenGreen)
        .border(Colors.BenGreen)
        .size(45)
        .compile()
}

### breach
${
    breachCurrency()
        .icon("Cyan", "Circle")
        .text(Colors.BenGreen)
        .border(Colors.BenGreen)
        .sound(lessThanTink)
        .size(45)
        .compile()
}

### catch all for weird or crazy things
${
    catchAll()
        .icon("Green", "Circle")
        .text(Colors.BenGreen)
        .border(Colors.BenGreen)
        .sound(lessThanTink)
        .size(45)
        .compile()
}

${
    rule().baseType("Oil").size(45).text(Colors.BenGreen).border(Colors.BenGreen).icon("Purple", "Circle").compile()
}

### sounds
${
    rule(
        rule().baseType("Chromatic Orb").areaLevel("<=", 50).customSound("gucci_sounds/chrome.mp3"),
        rule().baseType("Chromatic Orb").areaLevel(">=", 51).stackSize(">=", 2).customSound("gucci_sounds/chrome.mp3"),
        rule().baseType("Vaal Orb").customSound("gucci_sounds/vaal.mp3"),
        rule().baseType("Orb of Chance").areaLevel("<=", 82).customSound("gucci_sounds/chance.mp3"),
        rule().baseType("Orb of Chance").stackSize(">=", 3).areaLevel("<=", 83).customSound("gucci_sounds/chance.mp3"),
        rule().baseType("Orb of Alchemy").areaLevel("<=", 82).customSound("gucci_sounds/alch.mp3"),
        rule().baseType("Orb of Binding").areaLevel("<=", 80).customSound("gucci_sounds/binding.mp3"),
        rule().baseType("Orb of Augmentation").stackSize(">=", 1).areaLevel("<=", 40).customSound("gucci_sounds/augment.mp3"),
        rule().baseType("Orb of Augmentation").stackSize(">=", 2).areaLevel("<=", 68).customSound("gucci_sounds/augment.mp3"),
        rule().baseType("Orb of Augmentation").stackSize(">=", 3).areaLevel("<=", 83).customSound("gucci_sounds/augment.mp3"),
        rule().baseType("Orb of Alteration").stackSize(">=", 1).areaLevel("<=", 45).customSound("gucci_sounds/alt.mp3"),
        rule().baseType("Orb of Alteration").stackSize(">=", 2).areaLevel("<=", 68).customSound("gucci_sounds/alt.mp3"),
        rule().baseType("Orb of Alteration").stackSize(">=", 3).areaLevel("<=", 83).customSound("gucci_sounds/alt.mp3"),
        rule().baseType("Orb of Transmutation").stackSize(">=", 1).areaLevel("<=", 45).customSound("gucci_sounds/trans.mp3"),
        rule().baseType("Orb of Transmutation").stackSize(">=", 2).areaLevel("<=", 68).customSound("gucci_sounds/trans.mp3"),
        rule().baseType("Orb of Transmutation").stackSize(">=", 3).areaLevel("<=", 83).customSound("gucci_sounds/trans.mp3"),
        rule().baseType("Portal Scroll").stackSize(">=", 1).areaLevel("<=", 45).customSound("gucci_sounds/portal.mp3"),
        rule().baseType("Portal Scroll").stackSize(">=", 2).areaLevel("<=", 68).customSound("gucci_sounds/portal.mp3"),
        rule().baseType("Portal Scroll").stackSize(">=", 3).areaLevel("<=", 83).customSound("gucci_sounds/portal.mp3"),
        rule().baseType("Scroll of Wisdom").stackSize(">=", 1).areaLevel("<=", 40).customSound("gucci_sounds/wisdom.mp3"),
        rule().baseType("Scroll of Wisdom").stackSize(">=", 2).areaLevel("<=", 68).customSound("gucci_sounds/wisdom.mp3"),
        rule().baseType("Jeweller's Orb").stackSize(">=", 1).areaLevel("<=", 68).customSound("gucci_sounds/jeweller.mp3"),
        rule().baseType("Jeweller's Orb").stackSize(">=", 2).areaLevel("<=", 83).customSound("gucci_sounds/jeweller.mp3"),
        rule().baseType("Orb of Fusing").stackSize(">=", 1).areaLevel("<=", 80).customSound("gucci_sounds/fusing.mp3"),
        rule().baseType("Orb of Fusing").stackSize(">=", 2).areaLevel("<=", 85).customSound("gucci_sounds/fusing.mp3"),
        rule().baseType("Blacksmith's Whetstone").stackSize(">=", 1).areaLevel("<=", 50).customSound("gucci_sounds/whetstone.mp3"),
        rule().baseType("Blacksmith's Whetstone").stackSize(">=", 2).areaLevel("<=", 68).customSound("gucci_sounds/whetstone.mp3"),
        rule().baseType("Armourer's Scrap").stackSize(">=", 1).areaLevel("<=", 50).customSound("gucci_sounds/scrap.mp3"),
        rule().baseType("Armourer's Scrap").stackSize(">=", 2).areaLevel("<=", 68).customSound("gucci_sounds/scrap.mp3"),
        rule().baseType("Chaos Orb").stackSize(">=", 1).customSound("gucci_sounds/chaos.mp3"),
        rule().baseType("Orb of Scouring").stackSize(">=", 1).customSound("gucci_sounds/scouring.mp3"),
        rule().baseType("Regal Orb").stackSize(">=", 1).customSound("gucci_sounds/regal.mp3"),
        rule().baseType("Orb of Regret").stackSize(">=", 1).customSound("gucci_sounds/regret.mp3"),
    )
    .size(45)
    .continue()
    .compile()
}


### alts, augs, transmutes, armorer's, and whets (cause they're really annoying with levels)
${
    rule(
        rule().baseType("Scroll of Wisdom").areaLevel("<=", 50).stackSize("<=", 1),
        rule().baseType("Scroll of Wisdom").areaLevel("<=", 77).stackSize("<=", 2),
        rule().baseType("Portal Scroll").areaLevel("<=", 82).stackSize("<=", 1),
        rule().baseType("Portal Scroll").areaLevel("<=", 100).stackSize("<=", 3),
        rule().baseType("Orb of Alteration"),
        rule().baseType("Orb of Augmentation").areaLevel("<=", 50).stackSize("<=", 1),
        rule().baseType("Orb of Augmentation").areaLevel("<=", 75).stackSize("==", 2),
        rule().baseType("Orb of Augmentation").areaLevel("<=", 100).stackSize(">=", 3),
        rule().baseType("Orb of Transmutation").areaLevel("<=", 50).stackSize("<=", 1),
        rule().baseType("Orb of Transmutation").areaLevel("<=", 75).stackSize("==", 2),
        rule().baseType("Orb of Transmutation").areaLevel("<=", 100).stackSize(">=", 3),
        rule().baseType("Armourer's Scrap").areaLevel("<=", 50).stackSize("<=", 1),
        rule().baseType("Armourer's Scrap").areaLevel("<=", 75).stackSize("==", 2),
        rule().baseType("Armourer's Scrap").areaLevel("<=", 100).stackSize(">=", 3),
        rule().baseType("Blacksmith's Whetstone").areaLevel("<=", 50).stackSize("<=", 1),
        rule().baseType("Blacksmith's Whetstone").areaLevel("<=", 75).stackSize("==", 2),
        rule().baseType("Blacksmith's Whetstone").areaLevel("<=", 100).stackSize(">=", 3),
        )
    .text(Colors.gucciBlue2)
    .border(Colors.gucciBlue2)
    .size(45)
    .icon("White", "Circle")
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
        rule().baseType("Alchemy Shard").areaLevel("<=", 75),
        rule().baseType("Alteration Shard").areaLevel("<=", 30),
    )
    .size(45)
    .compile()
}

### new tier based on gucci. blueish items that are kinda good and wouldn't mind skipping
${
    rule(
        rule().baseType("Chromatic Orb").stackSize(">=", 1),
        rule().baseType("Jeweller's Orb").stackSize("<=", 2),
        rule().baseType("Blessed Orb").stackSize(">=", 1),
        rule().baseType("Regal Shard").stackSize(">=", 3),
        rule().baseType("Orb of Horizons").stackSize(">=", 1),
        rule().baseType("Horizon Shard").stackSize(">=", 1),
        rule().baseType("Harbinger's Orb").stackSize(">=", 1),
        rule().baseType("Harbinger's Shard").stackSize(">=", 1),
        rule().baseType("Glassblower's Bauble").stackSize(">=", 1)
    )
    .icon("White", "Circle")
    .size(45)
    .text(Colors.gucciBlue2)
    .border(Colors.gucciBlue2)
    .compile()
}

### new tier based on gucci. redish items that you'd basically always pick up
${
    rule(
        rule().baseType("Jeweller's Orb").stackSize(">=", 3),
        rule().baseType("Orb of Chance").stackSize(">=", 1),
        rule().baseType("Orb of Binding").stackSize(">=", 1),
        rule().baseType("Orb of Regret").stackSize(">=", 1),
        rule().baseType("Orb of Fusing").stackSize(">=", 1),
        rule().baseType("Orb of Unmaking").stackSize(">=", 1),
        rule().baseType("Orb of Alchemy").stackSize(">=", 1),
        rule().baseType("Orb of Scouring").stackSize(">=", 1),
        rule().baseType("Cartographer's Chisel").stackSize(">=", 1),
        rule().baseType("Chaos Shard").stackSize(">=", 5),
        rule().baseType("Binding Shard").stackSize(">=", 10),
    )
    .icon("Red", "Circle")
    .size(45)
    .text(Colors.gucciPurple)
    .border(Colors.gucciPurple)
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
    .border(Colors.gucciPurple)
    .sound(wayLessThanTink)
    .compile()
}

### t2 currency. currencies that are worth like >10c
${
    rule(
        rule().baseType("Ancient Orb"),
        rule().baseType("Oil Extractor"),
        rule().baseType("Veiled Orb"),
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
        rule().baseType("Hinekora's Lock", "Mirror of Kalandra", "Mirror Shard", "Divine Orb", "Tempering Orb", "Tailoring Orb", "Fracturing Orb", "Fracturing Shard", "Exalted Orb", "Eldritch Exalted Orb", "Hunter's Exalted Orb", "Warlord's Exalted Orb", "Crusader's Exalted Orb", "Redeemer's Exalted Orb", "Orb of Conflict", "Orb of Dominance", "Awakener's Orb", "Crescent Splinter", "Elevated Sextant")
    )
    .icon("Purple", "Circle")
    .size(45)
    .background(Colors.white)
    .text(Colors.red)
    .sound(tink)
    .compile()
}

### div cards

### t1

${
    rule().itemClass("Divination Cards").hide().continue().compile()
}

${
    rule(
        rule().baseType("The Fortunate", "A Familiar Call", "Ambitious Obsession", "Assassin's Gift", "Auspicious Ambitions", "Avian Pursuit", "Beauty Through Death", "Brother's Gift", "Brother's Stash", "Burning Blood", "Choking Guilt", "Darker Half", "Desecrated Virtue", "Divine Beauty", "Divine Justice", "Fateful Meeting", "Father's Love", "Fire Of Unknown Origin", "House of Mirrors", "I See Brothers", "Imperfect Memories", "Lethean Temptation", "Lonely Warrior", "Love Through Ice", "Luminous Trove", "Matryoshka", "Misery in Darkness", "Perfection", "Remembrance", "Seven Years Bad Luck", "Succor of the Sinless", "The Apothecary", "The Catch", "The Cheater", "The Damned", "The Demon", "The Doctor", "The Endless Darkness", "The Enlightened", "The Fiend", "The Formless Sea", "The Greatest Intentions", "The Gulf", "The Immortal", "The Insane Cat", "The Last One Standing", "The Last Supper", "The Old Man", "The One That Got Away", "The Price of Devotion", "The Progeny of Lunaris", "The Sacrifice", "The Sephirot", "The Shieldbearer", "The Soul", "The Vast", "The World Eater", "Tranquillity", "Unrequited Love", "Wealth and Power", "Winter's Embrace")
    )
    .size(45)
    .text(Colors.blue)
    .border(Colors.blue)
    .backgroundColor(Colors.white)
    .sound(tink)
    .effect("Red")
    .icon("Red", "Star", 0)
    .compile()
}

${
    rule(
        rule().baseType("A Modest Request", "Alluring Bounty", "Anarchy's Price", "Broken Promises", "Chasing Risk", "Deadly Joy", "Doryani's Epiphany", "Duality", "Dying Light", "Friendship", "Further Invention", "Gemcutter's Mercy", "Harmony of Souls", "Home", "Hunter's Reward", "Judging Voices", "Magnum Opus", "Merciless Armament", "Pride of the First Ones", "Prometheus' Armoury", "Rebirth", "Silence and Frost", "Temperance", "Terrible Secret of Space", "The Artist", "The Aspirant", "The Astromancer", "The Bitter Blossom", "The Blessing of Moosh", "The Deep Ones", "The Destination", "The Dragon's Heart", "The Dungeon Master", "The Emptiness", "The Enforcer", "The Eternal War", "The Eye of Terror", "The Eye of the Dragon", "The Fishmonger", "The Forgotten Treasure", "The Fortunate", "The Garish Power", "The Hook", "The Leviathan", "The Life Thief", "The Long Con", "The Nurse", "The Polymath", "The Price of Loyalty", "The Rabbit's Foot", "The Samurai's Eye", "The Tumbleweed", "The Wedding Gift", "Who Asked")
    )
    .size(45)
    .text(Colors.white)
    .border(Colors.white)
    .backgroundColor(Colors.nsT2)
    .sound(1)
    .effect("Red")
    .icon("Red", "Star", 0)
    .compile()
}

### t3 div card
${
    rule(
        rule().baseType("A Chilling Wind", "A Dusty Memory", "A Fate Worse Than Death", "A Stone Perfected", "Abandoned Wealth", "Akil's Prophecy", "Altered Perception", "Arrogance of the Vaal", "Azyran's Reward", "Baited Expectations", "Bijoux", "Boon of the First Ones", "Bowyer's Dream", "Call to the First Ones", "Chaotic Disposition", "Costly Curio", "Council of Cats", "Dark Dreams", "Deathly Designs", "Dementophobia", "Desperate Crusade", "Draped in Dreams", "Etched in Blood", "Eternal Bonds", "Ever-Changing", "Gift of Asenath", "Guardian's Challenge", "Immortal Resolve", "Justified Ambition", "Keeper's Corruption", "Lingering Remnants", "Mawr Blaidd", "Nook's Crown", "Peaceful Moments", "Poisoned Faith", "Rebirth and Renewal", "Something Dark", "The Academic", "The Awakened", "The Breach", "The Cacophony", "The Cartographer", "The Celestial Justicar", "The Celestial Stone", "The Chosen", "The Craving", "The Dreamer", "The Eldritch Decay", "The Escape", "The Fathomless Depths", "The Finishing Touch", "The Forward Gaze", "The Long Watch", "The Mad King", "The Obscured", "The Offering", "The Offspring", "The Pact", "The Patient", "The Price of Prescience", "The Prince of Darkness", "The Professor", "The Risk", "The Road to Power", "The Saint's Treasure", "The Scout", "The Shepherd's Sandals", "The Shortcut", "The Spark and the Flame", "The Strategist", "The Thaumaturgist", "The Tinkerer's Table", "The Transformation", "The Tyrant", "The Undaunted", "The Undisputed", "The Unexpected Prize", "The Union", "The Valkyrie", "The Void", "The White Knight", "The Wilted Rose", "The Wolf's Legacy", "The Wretched", "Void of the Elements")
    )
    .size(45)
    .text(Colors.black)
    .border(Colors.black)
    .backgroundColor(Colors.nsT3)
    .sound(2)
    .effect("Yellow")
    .icon("Yellow", "Star", 0)
    .compile()
}


`
// Write filter to output directory
fs.writeFileSync(path.join(__dirname, `../../output/${filterName}.filter`), getFilter());