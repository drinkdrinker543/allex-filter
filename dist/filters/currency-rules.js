"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const rule_1 = __importDefault(require("../rule"));
const colors_1 = require("../types/colors");
const wayLessThanTink = 2;
const lessThanTink = 4;
const tink = 6;
// Set filtername here
const filterName = 'CurrencyFilter';
// TODO add drop effects 
function allCurrency() {
    return (0, rule_1.default)().baseType('Abrasive Catalyst', 'Accelerating Catalyst', 'Albino Rhoa Feather', 'Alchemy Shard', 'Alteration Shard', 'Ancient Orb', 'Ancient Shard', 'Annulment Shard', "Armourer's Scrap", 'Astragali', 'Awakened Sextant', "Awakener's Orb", 'Bestiary Orb', 'Binding Shard', "Blacksmith's Whetstone", 'Blessed Orb', 'Blessing of Chayula', 'Blessing of Esh', 'Blessing of Tul', 'Blessing of Uul-Netol', 'Blessing of Xoph', 'Blighted Scouting Report', 'Burial Medallion', "Cartographer's Chisel", 'Chaos Orb', 'Chaos Shard', 'Charged Compass', 'Chromatic Orb', 'Comprehensive Scouting Report', 'Crescent Splinter', "Crusader's Exalted Orb", 'Delirious Scouting Report', 'Divine Orb', 'Eldritch Chaos Orb', 'Eldritch Exalted Orb', 'Eldritch Orb of Annulment', 'Elevated Sextant', "Engineer's Orb", "Engineer's Shard", 'Enkindling Orb', 'Eternal Orb', 'Exalted Orb', 'Exalted Shard', 'Exceptional Eldritch Ember', 'Exceptional Eldritch Ichor', 'Exotic Coinage', "Explorer's Scouting Report", "Facetor's Lens", 'Fertile Catalyst', 'Fracturing Orb', 'Fracturing Shard', "Gemcutter's Prism", "Glassblower's Bauble", 'Grand Eldritch Ember', 'Grand Eldritch Ichor', 'Greater Eldritch Ember', 'Greater Eldritch Ichor', "Harbinger's Orb", "Harbinger's Shard", 'Horizon Shard', "Hunter's Exalted Orb", 'Imbued Catalyst', 'Influenced Scouting Report', 'Instilling Orb', 'Intrinsic Catalyst', "Jeweller's Orb", 'Lesser Eldritch Ember', 'Lesser Eldritch Ichor', 'Mirror Shard', 'Mirror of Kalandra', 'Noxious Catalyst', 'Oil Extractor', "Operative's Scouting Report", 'Orb of Alchemy', 'Orb of Alteration', 'Orb of Annulment', 'Orb of Augmentation', 'Orb of Binding', 'Orb of Chance', 'Orb of Conflict', 'Orb of Dominance', 'Orb of Fusing', 'Orb of Horizons', 'Orb of Regret', 'Orb of Scouring', 'Orb of Transmutation', 'Orb of Unmaking', 'Otherworldly Scouting Report', 'Portal Scroll', 'Primal Crystallised Lifeforce', 'Prime Regrading Lens', 'Prismatic Catalyst', "Redeemer's Exalted Orb", 'Regal Orb', 'Regal Shard', 'Ritual Splinter', 'Ritual Vessel', 'Sacred Crystallised Lifeforce', 'Sacred Orb', 'Scrap Metal', 'Scroll of Wisdom', 'Secondary Regrading Lens', 'Singular Scouting Report', 'Stacked Deck', "Surveyor's Compass", 'Tailoring Orb', "Tainted Armourer's Scrap", "Tainted Blacksmith's Whetstone", 'Tainted Blessing', 'Tainted Chaos Orb', 'Tainted Chromatic Orb', 'Tainted Divine Teardrop', 'Tainted Exalted Orb', "Tainted Jeweller's Orb", 'Tainted Mythic Orb', 'Tainted Orb of Fusing', 'Tempering Catalyst', 'Tempering Orb', 'Transmutation Shard', 'Turbulent Catalyst', 'Unstable Catalyst', 'Vaal Orb', 'Vaal Scouting Report', 'Veiled Orb', 'Vivid Crystallised Lifeforce', "Warlord's Exalted Orb", 'Wild Crystallised Lifeforce');
}
function taintedCurrency() {
    return (0, rule_1.default)().baseType("Tainted Armourer's Scrap", "Tainted Blacksmith's Whetstone", "Tainted Chaos Orb", "Tainted Chromatic Orb", "Tainted Divine Teardrop", "Tainted Exalted Orb", "Tainted Jeweller's Orb", "Tainted Mythic Orb", "Tainted Orb of Fusing");
}
// excludes sacred lifeforce
function harvestCurrency() {
    return (0, rule_1.default)().baseType("Vivid Crystallised Lifeforce", "Wild Crystallised Lifeforce", "Primal Crystallised Lifeforce");
}
function expeditionCurrency() {
    return (0, rule_1.default)().baseType("Scrap Metal", "Exotic Coinage", "Burial Medallion", "Astragali");
}
function scoutingReport() {
    return (0, rule_1.default)().baseType("Blighted Scouting Report", "Comprehensive Scouting Report", "Delirious Scouting Report", "Explorer's Scouting Report", 'Influenced Scouting Report', "Operative's Scouting Report", "Otherworldly Scouting Report", "Singular Scouting Report", "Vaal Scouting Report");
}
function ritualCurrency() {
    return (0, rule_1.default)().baseType('Ritual Splinter', "Ritual Vessel");
}
function breachCurrency() {
    return (0, rule_1.default)().baseType("Blessing of Chayula", "Blessing of Esh", "Blessing of Tul", "Blessing of Uul-Netol", "Blessing of Xoph");
}
function catchAll() {
    return (0, rule_1.default)().baseType("Bestiary Orb", "Eternal Orb", "Charged Compass", "Facetor's Lens", "Prime Regrading Lens", "Secondary Regrading Lens", "Sacred Orb", "Sacred Crystallised Lifeforce", "Surveyor's Compass", "Albino Rhoa Feather", "Charged Compass");
}
function embersAndIchors() {
    return (0, rule_1.default)().baseType("Exceptional Eldritch Ember", "Exceptional Eldritch Ichor", "Greater Eldritch Ember", "Greater Eldritch Ichor", "Grand Eldritch Ember", "Grand Eldritch Ichor", "Lesser Eldritch Ember", "Lesser Eldritch Ichor");
}
const getFilter = () => `

### this rule is actually kinda stupid in hindsight, but it does make it harder to unintentionally hide new things
${allCurrency().hide().continue().compile()}

### catalysts
${(0, rule_1.default)().baseType("Imbued Catalyst", "Fertile Catalyst", "Noxious Catalyst", "Abrasive Catalyst", "Unstable Catalyst", "Intrinsic Catalyst", "Prismatic Catalyst", "Tempering Catalyst", "Turbulent Catalyst")
    .size(45)
    .icon("Red", "Star")
    .sound(wayLessThanTink, 200)
    .compile()}

### tainted currency
${taintedCurrency()
    .icon("Red", "Circle")
    .sound(wayLessThanTink, 200)
    .size(45)
    .compile()}

${expeditionCurrency()
    .icon("Red", "Circle")
    .sound(lessThanTink)
    .size(45)
    .compile()}

${scoutingReport()
    .icon("Pink", "Circle")
    .sound(lessThanTink)
    .size(45)
    .compile()}

### harvest currency
${harvestCurrency()
    .icon("Yellow", "Circle")
    .size(45)
    .compile()}

### embers and ichors
${embersAndIchors()
    .icon("Red", "Circle")
    .sound(lessThanTink)
    .size(45)
    .compile()}

### ritual
${ritualCurrency()
    .icon("Red", "Circle")
    .sound(lessThanTink)
    .size(45)
    .compile()}

### breach
${breachCurrency()
    .icon("Cyan", "Circle")
    .sound(lessThanTink)
    .size(45)
    .compile()}

### catch all for weird or crazy things
${catchAll()
    .icon("Green", "Circle")
    .sound(lessThanTink)
    .size(45)
    .compile()}

### sounds
${(0, rule_1.default)((0, rule_1.default)().baseType("Chromatic Orb").areaLevel("<=", 50).customSound("gucci_sounds/chrome.mp3"), (0, rule_1.default)().baseType("Chromatic Orb").areaLevel(">=", 51).stackSize(">=", 2).customSound("gucci_sounds/chrome.mp3"), (0, rule_1.default)().baseType("Vaal Orb").customSound("gucci_sounds/vaal.mp3"), (0, rule_1.default)().baseType("Orb of Chance").areaLevel("<=", 82).customSound("gucci_sounds/chance.mp3"), (0, rule_1.default)().baseType("Orb of Chance").stackSize(">=", 3).areaLevel("<=", 83).customSound("gucci_sounds/chance.mp3"), (0, rule_1.default)().baseType("Orb of Alchemy").areaLevel("<=", 82).customSound("gucci_sounds/alch.mp3"), (0, rule_1.default)().baseType("Orb of Binding").areaLevel("<=", 80).customSound("gucci_sounds/binding.mp3"), (0, rule_1.default)().baseType("Orb of Augmentation").stackSize(">=", 1).areaLevel("<=", 40).customSound("gucci_sounds/augment.mp3"), (0, rule_1.default)().baseType("Orb of Augmentation").stackSize(">=", 2).areaLevel("<=", 68).customSound("gucci_sounds/augment.mp3"), (0, rule_1.default)().baseType("Orb of Augmentation").stackSize(">=", 3).areaLevel("<=", 83).customSound("gucci_sounds/augment.mp3"), (0, rule_1.default)().baseType("Orb of Alteration").stackSize(">=", 1).areaLevel("<=", 45).customSound("gucci_sounds/alt.mp3"), (0, rule_1.default)().baseType("Orb of Alteration").stackSize(">=", 2).areaLevel("<=", 68).customSound("gucci_sounds/alt.mp3"), (0, rule_1.default)().baseType("Orb of Alteration").stackSize(">=", 3).areaLevel("<=", 83).customSound("gucci_sounds/alt.mp3"), (0, rule_1.default)().baseType("Orb of Transmutation").stackSize(">=", 1).areaLevel("<=", 45).customSound("gucci_sounds/trans.mp3"), (0, rule_1.default)().baseType("Orb of Transmutation").stackSize(">=", 2).areaLevel("<=", 68).customSound("gucci_sounds/trans.mp3"), (0, rule_1.default)().baseType("Orb of Transmutation").stackSize(">=", 3).areaLevel("<=", 83).customSound("gucci_sounds/trans.mp3"), (0, rule_1.default)().baseType("Portal Scroll").stackSize(">=", 1).areaLevel("<=", 45).customSound("gucci_sounds/portal.mp3"), (0, rule_1.default)().baseType("Portal Scroll").stackSize(">=", 2).areaLevel("<=", 68).customSound("gucci_sounds/portal.mp3"), (0, rule_1.default)().baseType("Portal Scroll").stackSize(">=", 3).areaLevel("<=", 83).customSound("gucci_sounds/portal.mp3"), (0, rule_1.default)().baseType("Scroll of Wisdom").stackSize(">=", 1).areaLevel("<=", 40).customSound("gucci_sounds/wisdom.mp3"), (0, rule_1.default)().baseType("Scroll of Wisdom").stackSize(">=", 2).areaLevel("<=", 68).customSound("gucci_sounds/wisdom.mp3"), (0, rule_1.default)().baseType("Jeweller's Orb").stackSize(">=", 1).areaLevel("<=", 68).customSound("gucci_sounds/jeweller.mp3"), (0, rule_1.default)().baseType("Jeweller's Orb").stackSize(">=", 2).areaLevel("<=", 83).customSound("gucci_sounds/jeweller.mp3"), (0, rule_1.default)().baseType("Orb of Fusing").stackSize(">=", 1).areaLevel("<=", 80).customSound("gucci_sounds/fusing.mp3"), (0, rule_1.default)().baseType("Orb of Fusing").stackSize(">=", 2).areaLevel("<=", 85).customSound("gucci_sounds/fusing.mp3"), (0, rule_1.default)().baseType("Blacksmith's Whetstone").stackSize(">=", 1).areaLevel("<=", 50).customSound("gucci_sounds/whetstone.mp3"), (0, rule_1.default)().baseType("Blacksmith's Whetstone").stackSize(">=", 2).areaLevel("<=", 68).customSound("gucci_sounds/whetstone.mp3"), (0, rule_1.default)().baseType("Armourer's Scrap").stackSize(">=", 1).areaLevel("<=", 50).customSound("gucci_sounds/scrap.mp3"), (0, rule_1.default)().baseType("Armourer's Scrap").stackSize(">=", 2).areaLevel("<=", 68).customSound("gucci_sounds/scrap.mp3"), (0, rule_1.default)().baseType("Chaos Orb").stackSize(">=", 1).customSound("gucci_sounds/chaos.mp3"), (0, rule_1.default)().baseType("Orb of Scouring").stackSize(">=", 1).customSound("gucci_sounds/scouring.mp3"), (0, rule_1.default)().baseType("Regal Orb").stackSize(">=", 1).customSound("gucci_sounds/regal.mp3"), (0, rule_1.default)().baseType("Orb of Regret").stackSize(">=", 1).customSound("gucci_sounds/regret.mp3"))
    .size(45)
    .continue()
    .compile()}


### alts, augs, transmutes, armorer's, and whets (cause they're really annoying with levels)
${(0, rule_1.default)((0, rule_1.default)().baseType("Scroll of Wisdom").areaLevel("<=", 50).stackSize("<=", 1), (0, rule_1.default)().baseType("Scroll of Wisdom").areaLevel("<=", 77).stackSize("<=", 2), (0, rule_1.default)().baseType("Portal Scroll").areaLevel("<=", 82).stackSize("<=", 1), (0, rule_1.default)().baseType("Portal Scroll").areaLevel("<=", 100).stackSize("<=", 3), (0, rule_1.default)().baseType("Orb of Alteration"), (0, rule_1.default)().baseType("Orb of Augmentation").areaLevel("<=", 50).stackSize("<=", 1), (0, rule_1.default)().baseType("Orb of Augmentation").areaLevel("<=", 75).stackSize("==", 2), (0, rule_1.default)().baseType("Orb of Augmentation").areaLevel("<=", 100).stackSize(">=", 3), (0, rule_1.default)().baseType("Orb of Transmutation").areaLevel("<=", 50).stackSize("<=", 1), (0, rule_1.default)().baseType("Orb of Transmutation").areaLevel("<=", 75).stackSize("==", 2), (0, rule_1.default)().baseType("Orb of Transmutation").areaLevel("<=", 100).stackSize(">=", 3), (0, rule_1.default)().baseType("Armourer's Scrap").areaLevel("<=", 50).stackSize("<=", 1), (0, rule_1.default)().baseType("Armourer's Scrap").areaLevel("<=", 75).stackSize("==", 2), (0, rule_1.default)().baseType("Armourer's Scrap").areaLevel("<=", 100).stackSize(">=", 3), (0, rule_1.default)().baseType("Blacksmith's Whetstone").areaLevel("<=", 50).stackSize("<=", 1), (0, rule_1.default)().baseType("Blacksmith's Whetstone").areaLevel("<=", 75).stackSize("==", 2), (0, rule_1.default)().baseType("Blacksmith's Whetstone").areaLevel("<=", 100).stackSize(">=", 3))
    .text(colors_1.Colors.gucciBlue2)
    .border(colors_1.Colors.gucciBlue2)
    .size(45)
    .icon("White", "Circle")
    .compile()}




### t6 currency. features things that are extremely bad
#
#    rule(
#        rule().baseType("Engineer's Orb", "Engineer's Shard", "Orb of Augmentation", "Transmutation Shard")
#    )
#

### t5 currency. currency that you only pick up very early
${(0, rule_1.default)((0, rule_1.default)().baseType("Alchemy Shard").areaLevel("<=", 75), (0, rule_1.default)().baseType("Alteration Shard").areaLevel("<=", 30))
    .size(45)
    .compile()}

### new tier based on gucci. blueish items that are kinda good and wouldn't mind skipping
${(0, rule_1.default)((0, rule_1.default)().baseType("Chromatic Orb").stackSize(">=", 1), (0, rule_1.default)().baseType("Jeweller's Orb").stackSize("<=", 2), (0, rule_1.default)().baseType("Blessed Orb").stackSize(">=", 1), (0, rule_1.default)().baseType("Regal Shard").stackSize(">=", 3), (0, rule_1.default)().baseType("Orb of Horizons").stackSize(">=", 1), (0, rule_1.default)().baseType("Horizon Shard").stackSize(">=", 1), (0, rule_1.default)().baseType("Harbinger's Orb").stackSize(">=", 1), (0, rule_1.default)().baseType("Harbinger's Shard").stackSize(">=", 1), (0, rule_1.default)().baseType("Glassblower's Bauble").stackSize(">=", 1))
    .icon("White", "Circle")
    .size(45)
    .text(colors_1.Colors.gucciBlue2)
    .border(colors_1.Colors.gucciBlue2)
    .compile()}

### new tier based on gucci. redish items that you'd basically always pick up
${(0, rule_1.default)((0, rule_1.default)().baseType("Jeweller's Orb").stackSize(">=", 3), (0, rule_1.default)().baseType("Orb of Chance").stackSize(">=", 1), (0, rule_1.default)().baseType("Orb of Binding").stackSize(">=", 1), (0, rule_1.default)().baseType("Orb of Regret").stackSize(">=", 1), (0, rule_1.default)().baseType("Orb of Fusing").stackSize(">=", 1), (0, rule_1.default)().baseType("Orb of Unmaking").stackSize(">=", 1), (0, rule_1.default)().baseType("Orb of Alchemy").stackSize(">=", 1), (0, rule_1.default)().baseType("Orb of Scouring").stackSize(">=", 1), (0, rule_1.default)().baseType("Cartographer's Chisel").stackSize(">=", 1), (0, rule_1.default)().baseType("Chaos Shard").stackSize(">=", 5), (0, rule_1.default)().baseType("Binding Shard").stackSize(">=", 10))
    .icon("Red", "Circle")
    .size(45)
    .text(colors_1.Colors.gucciPurple)
    .border(colors_1.Colors.gucciPurple)
    .compile()}

### t3 currency. currencies you want a sound for.
${(0, rule_1.default)((0, rule_1.default)().baseType("Orb of Annulment"), (0, rule_1.default)().baseType("Regal Orb"), (0, rule_1.default)().baseType("Chaos Orb"), (0, rule_1.default)().baseType("Chaos Shard").stackSize(">=", 10), (0, rule_1.default)().baseType("Awakened Sextant"), (0, rule_1.default)().baseType("Ancient Shard"), (0, rule_1.default)().baseType("Annulment Shard"), (0, rule_1.default)().baseType("Enkindling Orb"), (0, rule_1.default)().baseType("Gemcutter's Prism"), (0, rule_1.default)().baseType("Stacked Deck"), (0, rule_1.default)().baseType("Vaal Orb"), (0, rule_1.default)().baseType("Instilling Orb"), (0, rule_1.default)().baseType("Orb of Alteration").stackSize(">=", 3), (0, rule_1.default)().baseType("Exalted Shard"))
    .icon("Red", "Circle")
    .size(45)
    .text(colors_1.Colors.gucciPurple)
    .border(colors_1.Colors.gucciPurple)
    .sound(wayLessThanTink)
    .compile()}

### t2 currency. currencies that are worth like >10c
${(0, rule_1.default)((0, rule_1.default)().baseType("Ancient Orb"), (0, rule_1.default)().baseType("Oil Extractor"), (0, rule_1.default)().baseType("Veiled Orb"), (0, rule_1.default)().baseType("Eldritch Chaos Orb"), (0, rule_1.default)().baseType("Eldritch Orb of Annulment"))
    .icon("Cyan", "Circle")
    .size(45)
    .background(colors_1.Colors.red)
    .text(colors_1.Colors.white)
    .sound(lessThanTink)
    .compile()}

### t0 currency
${(0, rule_1.default)((0, rule_1.default)().baseType("Mirror of Kalandra", "Mirror Shard", "Divine Orb", "Tempering Orb", "Tailoring Orb", "Fracturing Orb", "Fracturing Shard", "Exalted Orb", "Eldritch Exalted Orb", "Hunter's Exalted Orb", "Warlord's Exalted Orb", "Crusader's Exalted Orb", "Redeemer's Exalted Orb", "Orb of Conflict", "Orb of Dominance", "Awakener's Orb", "Crescent Splinter", "Elevated Sextant"))
    .icon("Purple", "Circle")
    .size(45)
    .background(colors_1.Colors.white)
    .text(colors_1.Colors.red)
    .sound(tink)
    .compile()}
`;
// Write filter to output directory
fs_1.default.writeFileSync(path_1.default.join(__dirname, `../../output/${filterName}.filter`), getFilter());
//# sourceMappingURL=currency-rules.js.map