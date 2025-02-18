"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const rule_1 = __importDefault(require("../rule"));
const colors_1 = require("../types/colors");
// Set filtername here
const filterName = 'AAAAAA hael filter';
const wayLessThanTink = 2;
const lessThanTink = 4;
const tink = 6;
function weaponRule() {
    return (0, rule_1.default)().itemClass("One Hand Swords", "One Hand Axes", "One Hand Maces", "Thrusting One Hand Swords", "Claws", "Daggers", "Rune Daggers", "Wands", "Sceptres", "Two Hand Swords", "Two Hand Maces", "Two Hand Axes", "Staves", "Warstaves", "Staves", "Shields", "Bows", "Quivers");
}
function leapslamRule() {
    return (0, rule_1.default)().baseType("Rusted Sword", "Copper Sword", "Rusted Hatchet", "Boarding Axe", "Jade Hatchet", "Rusted Spike", "Whalebone Rapier");
}
function gearRule() {
    return (0, rule_1.default)().itemClass("Boots", "Gloves", "Body Armours", "Helmets");
}
function jewelryRule() {
    return (0, rule_1.default)().itemClass("Belts", "Rings", "Amulets");
}
function taintedCurrency() {
    return (0, rule_1.default)().baseType("Tainted Armourer's Scrap", "Tainted Blacksmith's Whetstone", "Tainted Chaos Orb", "Tainted Chromatic Orb", "Tainted Divine Teardrop", "Tainted Exalted Orb", "Tainted Jeweller's Orb", "Tainted Mythic Orb", "Tainted Orb of Fusing");
}
function tierOneScarabs() {
    return (0, rule_1.default)().baseType("Ambush Scarab of Containment", "Bestiary Scarab of the Shadowed Crow", "Breach Scarab of the Dreamer", "Divination Scarab of Completion", "Divination Scarab of Curation", "Essence Scarab of Calcification", "Harvest Scarab of Cornucopia", "Horned Scarab of Awakening", "Horned Scarab of Bloodlines", "Horned Scarab of Glittering", "Horned Scarab of Preservation", "Reliquary Scarab of Vision", "Ultimatum Scarab of Catalysing");
}
function tierTwoScarabs() {
    return (0, rule_1.default)().baseType("Ambush Scarab of Discernment", "Bestiary Scarab of Duplicating", "Blight Scarab of Blooming", "Breach Scarab of Snares", "Domination Scarab of Teachings", "Domination Scarab of Terrors", "Essence Scarab of Ascent", "Expedition Scarab of Archaeology", "Harbinger Scarab of Warhoards", "Harvest Scarab of Doubling", "Horned Scarab of Nemeses", "Horned Scarab of Pandemonium", "Horned Scarab of Tradition", "Incursion Scarab of Timelines", "Legion Scarab of Eternal Conflict", "Legion Scarab of Officers", "Ultimatum Scarab of Dueling");
}
function tierThreeScarabs() {
    return (0, rule_1.default)().baseType("Abyss Scarab of Edifice", "Ambush Scarab", "Anarchy Scarab of Partnership", "Bestiary Scarab of the Herd", "Betrayal Scarab of Perpetuation", "Beyond Scarab of Resurgence", "Beyond Scarab of the Invasion", "Blight Scarab of Bounty", "Blight Scarab of Oils", "Breach Scarab of Lordship", "Cartography Scarab", "Cartography Scarab of Ascension", "Cartography Scarab of Corruption", "Cartography Scarab of Duplication", "Cartography Scarab of Singularity", "Delirium Scarab of Mania", "Delirium Scarab of Neuroses", "Delirium Scarab of Paranoia", "Divination Scarab", "Essence Scarab", "Expedition Scarab of Runefinding", "Expedition Scarab of the Skald", "Harbinger Scarab", "Harbinger Scarab of Discernment", "Harbinger Scarab of Regency", "Influencing Scarab of Conversion", "Legion Scarab", "Reliquary Scarab of Overlords", "Ritual Scarab of Abundance", "Ritual Scarab of Selectiveness", "Scarab of Hunted Traitors", "Scarab of Stability");
}
function bossFragments() {
    return (0, rule_1.default)().baseType('Fragment of Constriction', 'Fragment of Emptiness', 'Fragment of Enslavement', 'Fragment of Eradication', 'Fragment of Knowledge', 'Fragment of Purification', 'Fragment of Shape', "Fragment of Terror", "Fragment of the Chimera", "Fragment of the Hydra", "Fragment of the Minotaur", "Fragment of the Phoenix", "Drox's Crest", "Al-Hezmin's Crest", "Baran's Crest", "Veritania's Crest", "The Maven's Writ", "Mortal Grief", "Mortal Hope", "Mortal Ignorance", "Mortal Rage", "Decaying Fragment", "Awakening Fragment", 'Synthesising Fragment', 'Reality Fragment', "Devouring Fragment", "Blazing Fragment");
}
function sacrificeFragments() {
    return (0, rule_1.default)().baseType("Sacrifice at Dusk", "Sacrifice at Dawn", "Sacrifice at Midnight", "Sacrifice at Noon");
}
function otherFragments() {
    return (0, rule_1.default)().baseType("Gift to the Goddess", "Tribute to the Goddess", "Sacred Blossom", "Simulacrum", "Unrelenting Timeless Eternal Emblem", "Unrelenting Timeless Karui Emblem", "Unrelenting Timeless Maraketh Emblem", "Unrelenting Timeless Templar Emblem", "Unrelenting Timeless Vaal Emblem", "Timeless Eternal Emblem", "Timeless Maraketh Emblem", "Timeless Karui Emblem", "Timeless Templar Emblem", "Timeless Vaal Emblem");
}
function tempFragments() {
    return (0, rule_1.default)().baseType("Divine Vessel", "Offering to the Goddess");
}
function badBows() {
    return (0, rule_1.default)().baseType("Death Bow", "Decimation Bow", "Harbinger Bow", "Recurve Bow", "Decurve Bow", "Sniper Bow", "Citadel Bow", "Assassin Bow");
}
const getFilter = () => `
### decorators
${(0, rule_1.default)((0, rule_1.default)().rarity("==", 'Unique').text(colors_1.Colors.uniqueColor), (0, rule_1.default)().rarity("==", "Rare").text(colors_1.Colors.rareColor), (0, rule_1.default)().rarity("==", "Magic").text(colors_1.Colors.magicColor), (0, rule_1.default)().rarity("==", "Normal").text(colors_1.Colors.normalColor))
    .continue()
    .compile()}

Import "FlaskFilter.filter"
Import "GearFilter.filter"
Import "GemFilter.filter"
Import "CurrencyFilter.filter"
Import "ZZZZZZ-hael-pconc-leveling.filter"


### TODO show specific early magic bad bows

### strand rules (TODO)
${
//#region strand rules
(0, rule_1.default)().areaLevel("<=", 2).size(45).compile()
//#endregion
}

### misc leveling



### hide large high lvl magic unids 

### group leveling
### early group links
### casters

#  rule(
#    leapslamRule().sockets(">=", "2B").areaLevel("<=", 18).customSound("hael/blue_weapon"),
#    gearRule().socketGroup(">=", "BBB").areaLevel("<=", 18).customSound("hael/3_blue"),
#    gearRule().socketGroup(">=", "BBG").areaLevel("<=", 24).customSound("hael/crema"),
#  )
#    .icon("Purple", "Star")
#   .size(45)
#    .border(Colors.red)
#    .background(Colors.black)
#    .compile()

### TODO duelist

### TODO marauder

### late group links
### caster

#  rule(
#    gearRule().socketGroup(">=", "BBBB").areaLevel("<=", 42).customSound("hael/arma_links"),
#    gearRule().socketGroup(">=", "BBBG").areaLevel("<=", 42).customSound("hael/crema_links"),
#    gearRule().socketGroup(">=", "BBGR").areaLevel("<=", 42).customSound("hael/crema_links"),
#  )
#    .icon("Purple", "Star")
#    .size(45)
#    .border(Colors.red)
#    .background(Colors.black)
#    .compile()


### other currency
${(0, rule_1.default)((0, rule_1.default)().baseType("Rogue's Marker"))
    .icon("White", "Star")
    .text(colors_1.Colors.white)
    .background(colors_1.Colors.black)
    .size(45)
    .compile()}
  
### map rule
###
${
//#region Map rule
(0, rule_1.default)((0, rule_1.default)().mapTier("<=", 5).mapTier(">=", 1).icon("White", "Square").customSound("hael/whitemap", 300), (0, rule_1.default)().mapTier("<=", 10).mapTier(">=", 6).icon("Yellow", "Square").customSound("hael/yellowmap", 300), (0, rule_1.default)().mapTier("<=", 16).mapTier(">=", 11).icon("Red", "Square").customSound("hael/redmap", 300))
    .itemClass("Maps")
    .rarity("!", "Unique")
    .background(colors_1.Colors.darkGrey)
    .border(colors_1.Colors.gold)
    .size(45)
    .compile()}

${(0, rule_1.default)().itemClass("Maps").rarity("==", "Unique").icon("Brown", "Square").customSound("hael/uniquemap", 300)
    .size(45)
    .compile()
//#endregion
}
    
### fragments
### scarab rule

${(0, rule_1.default)(tierOneScarabs().icon("White", "Diamond"), tierTwoScarabs().icon("Red", "Diamond"), tierThreeScarabs().icon("Red", "Diamond"))
    .text(colors_1.Colors.white)
    .background(colors_1.Colors.green)
    .size(45)
    .compile()}
    
### fragments
${(0, rule_1.default)(sacrificeFragments().icon("White", "Raindrop").sound(wayLessThanTink), tempFragments().icon("White", "Raindrop").sound(wayLessThanTink), otherFragments().icon("Red", "Raindrop").sound(lessThanTink), bossFragments().icon("Cyan", "Raindrop").sound(tink))
    .text(colors_1.Colors.white)
    .background(colors_1.Colors.blue)
    .size(45)
    .compile()
//#endregion
}

### misc catch all
${
//#region Misc catch-all
(0, rule_1.default)()
    .itemClass("Quest Items")
    .icon("Green", "Cross")
    .text(colors_1.Colors.green)
    .border(colors_1.Colors.green)
    .size(45)
    .compile()}

### misc catch all
${(0, rule_1.default)()
    .baseType("Treasure Key")
    .icon("Green", "Cross")
    .text(colors_1.Colors.green)
    .border(colors_1.Colors.green)
    .size(45)
    .compile()}

${(0, rule_1.default)()
    .itemClass("Sanctified Relics")
    .icon("Green", "Cross")
    .sound(lessThanTink)
    .text(colors_1.Colors.black)
    .background(colors_1.Colors.gold)
    .border(colors_1.Colors.red)
    .size(45)
    .compile()}

${(0, rule_1.default)()
    .itemClass("Contracts")
    .icon("White", "Cross")
    .text(colors_1.Colors.black)
    .background(colors_1.Colors.lightGrey)
    .size(45)
    .compile()}

${(0, rule_1.default)()
    .itemClass("Blueprints")
    .sound(lessThanTink)
    .icon("Red", "Cross")
    .text(colors_1.Colors.black)
    .background(colors_1.Colors.white)
    .border(colors_1.Colors.gold)
    .size(45)
    .compile()
//#endregion
}
`;
// Write filter to output directory
fs_1.default.writeFileSync(path_1.default.join(__dirname, `../../output/${filterName}.filter`), getFilter());
//# sourceMappingURL=my-filter.js.map