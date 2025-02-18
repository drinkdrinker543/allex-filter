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
// Set filtername here
const filterName = 'ZZZZ-hael-bows';
const getFilter = () => `

### socket rules

${
//#region Early sockets
(0, rule_1.default)(gearRule().sockets(">=", "G"))
    .icon("Red", "Triangle").areaLevel("<=", 15)
    .background(colors_1.Colors.black)
    .border(colors_1.Colors.red)
    .size(40)
    .continue()
    .compile()}

${(0, rule_1.default)(gearRule().sockets(">=", "GG").customSound("hael/green_sockets"), gearRule().sockets(">=", "RGB").customSound("hael/blue_red"))
    .icon("Red", "Triangle").areaLevel("<=", 25)
    .background(colors_1.Colors.black)
    .border(colors_1.Colors.red)
    .size(45)
    .continue()
    .compile()}


${
//#region Early sockets
(0, rule_1.default)(gearRule().sockets(">=", "GG"), gearRule().sockets(">=", "RGB"))
    .icon("Red", "Triangle").areaLevel("<=", 30)
    .border(colors_1.Colors.red)
    .size(45)
    .continue()
    .compile()}

### later socket rules
${(0, rule_1.default)(gearRule().sockets(">=", "4GGG").customSound("hael/green_sockets"), gearRule().sockets(">=", "4RGB").customSound("hael/blue_red"))
    .icon("Red", "Triangle")
    .areaLevel("<=", 60)
    .background(colors_1.Colors.black)
    .border(colors_1.Colors.red)
    .size(45)
    .continue()
    .compile()
//#endregion
}


### 3 link rules
${
//#region 3 link rules
(0, rule_1.default)(gearRule().socketGroup(">=", "GGG").customSound("hael/3green"), gearRule().socketGroup(">=", "GGB").customSound("hael/3link"), gearRule().socketGroup(">=", "GGR").customSound("hael/3link"))
    .icon("Cyan", "Triangle")
    .areaLevel("<=", 40)
    .background(colors_1.Colors.black)
    .border(colors_1.Colors.red)
    .size(45)
    .compile()
//#endregion
}


### 4+ link rules
${
//#region 4 link rules
(0, rule_1.default)(gearRule().socketGroup(">=", "GGGG").customSound("hael/4link").icon("Cyan", "Triangle").areaLevel("<=", 55), gearRule().socketGroup(">=", "4GGB").customSound("hael/4link").icon("Cyan", "Triangle").areaLevel("<=", 55), gearRule().socketGroup(">=", "4GGR").customSound("hael/4link").icon("Cyan", "Triangle").areaLevel("<=", 55), gearRule().linkedSockets("==", 4).baseEvasion(">=", 1).customSound("hael/4link").icon("Cyan", "Triangle").areaLevel("<=", 40))
    .border(colors_1.Colors.red)
    .size(45)
    .compile()}

${(0, rule_1.default)(gearRule().socketGroup(">=", "GGGG"), gearRule().socketGroup(">=", "4GGB"), gearRule().socketGroup(">=", "4GGR"))
    .icon("Cyan", "Triangle")
    .areaLevel(">=", 56).areaLevel("<=", 68)
    .border(colors_1.Colors.gearingColor)
    .size(45)
    .continue()
    .compile()}

${(0, rule_1.default)(gearRule().socketGroup(">=", "GGGG"), gearRule().socketGroup(">=", "4GGB"), gearRule().socketGroup(">=", "4GGR"))
    .rarity("==", "Normal")
    .icon("Cyan", "Triangle")
    .areaLevel(">=", 68).areaLevel("<=", 77)
    .border(colors_1.Colors.gearingColor)
    .size(30)
    .continue()
    .compile()
//#endregion
}


### bows and quivers rules
${
//#region bows and quivers rules
(0, rule_1.default)((0, rule_1.default)().baseType("Short Bow").areaLevel("<=", 12), (0, rule_1.default)().baseType("Long Bow").areaLevel("<=", 18), (0, rule_1.default)().baseType("Composite Bow").areaLevel("<=", 23), (0, rule_1.default)().baseType("Bone Bow").areaLevel("<=", 29), (0, rule_1.default)().baseType("Royal Bow").areaLevel("<=", 35), (0, rule_1.default)().baseType("Grove Bow").areaLevel("<=", 48), (0, rule_1.default)().baseType("Ivory Bow").areaLevel("<", 52), (0, rule_1.default)().baseType("Highborn Bow").areaLevel("<=", 65), (0, rule_1.default)().baseType("Thicket Bow").areaLevel("<=", 68), (0, rule_1.default)().baseType("Spine Bow").itemLevel(">=", 74).itemLevel("<=", 80))
    .icon("White", "UpsideDownHouse")
    .background(colors_1.Colors.black)
    .rarity("==", "Normal")
    .customSound("hael/bow")
    .size(45)
    .compile()}


${(0, rule_1.default)()
    .itemClass("Bows")
    .rarity("==", "Rare")
    .customSound("hael/rare_weapon", 300)
    .icon("Cyan", "UpsideDownHouse")
    .border(colors_1.Colors.red)
    .size(45)
    .compile()}

${(0, rule_1.default)(badBows().rarity("==", "Magic").areaLevel("<=", 37), badBows().rarity("==", "Normal").areaLevel("<=", 18))
    .compile()}

${(0, rule_1.default)()
    .itemClass("Bows")
    .rarity("==", "Magic")
    .areaLevel("<=", 40)
    .customSound("hael/magicweapon")
    .icon("Red", "UpsideDownHouse")
    .size(45)
    .compile()}

${(0, rule_1.default)()
    .itemClass("Quivers")
    .rarity("==", "Rare")
    .customSound("hael/rare_quiver", 300)
    .icon("Cyan", "Kite")
    .background(colors_1.Colors.darkGrey)
    .border(colors_1.Colors.red)
    .size(45)
    .compile()}

${(0, rule_1.default)()
    .itemClass("Quivers")
    .rarity("==", "Magic")
    .areaLevel("<=", 35)
    .customSound("hael/magic_quiver", 300)
    .icon("Red", "Kite")
    .size(45)
    .compile()}

${(0, rule_1.default)()
    .baseType("Serrated Arrow Quiver")
    .rarity("==", "Normal")
    .areaLevel("<=", 10)
    .customSound("hael/quiver", 300)
    .icon("White", "Kite")
    .background(colors_1.Colors.darkGrey)
    .size(45)
    .compile()}

${(0, rule_1.default)()
    .baseType("Fire Arrow Quiver")
    .rarity("==", "Normal")
    .areaLevel("<=", 22)
    .customSound("hael/quiver", 300)
    .icon("White", "Kite")
    .background(colors_1.Colors.darkGrey)
    .size(45)
    .compile()}


${(0, rule_1.default)()
    .itemClass("Quivers")
    .baseType("Penetrating Arrow Quiver")
    .rarity("==", "Normal")
    .icon("White", "Kite")
    .border(colors_1.Colors.gucciPurple)
    .size(45)
    .compile()}

${(0, rule_1.default)()
    .itemClass("Quivers")
    .baseType("Feathered Arrow Quiver")
    .rarity("==", "Normal")
    .areaLevel("<=", 50)
    .customSound("hael/feathered", 300)
    .icon("White", "Kite")
    .border(colors_1.Colors.gucciPurple)
    .size(45)
    .compile()}

${(0, rule_1.default)()
    .itemClass("Bows")
    .linkedSockets('==', 5)
    .size(45)
    .background(colors_1.Colors.white)
    .text(colors_1.Colors.black)
    .border(colors_1.Colors.red)
    .size(45)
    .customSound("hael/5link")
    .compile()}
## fix 6link
${(0, rule_1.default)()
    .itemClass("Bows")
    .linkedSockets('==', 6)
    .size(45)
    .background(colors_1.Colors.white)
    .text(colors_1.Colors.black)
    .border(colors_1.Colors.red)
    .size(45)
    .customSound("hael/6link")
    .compile()
//#endregion
}

### other relevant rare rules
${
//#region other relevant rare rules
(0, rule_1.default)((0, rule_1.default)().itemClass("Gloves"), (0, rule_1.default)().itemClass("Boots"), (0, rule_1.default)().itemClass("Helmets"), (0, rule_1.default)().itemClass("Body Armours"))
    .areaLevel("<=", 75)
    .rarity(">=", "Rare")
    .baseEvasion(">=", 1)
    .border(colors_1.Colors.gucciPurple)
    .size(45)
    .continue()
    .compile()}

${(0, rule_1.default)((0, rule_1.default)().itemClass("Gloves"), (0, rule_1.default)().itemClass("Boots"), (0, rule_1.default)().itemClass("Helmets"), (0, rule_1.default)().itemClass("Body Armours"))
    .areaLevel(">=", 76)
    .rarity(">=", "Rare")
    .baseEvasion(">=", 1)
    .border(colors_1.Colors.gucciPurple)
    .size(35)
    .continue()
    .compile()
//#endregion
}

### annoying things
${(0, rule_1.default)().baseType("Simple Robe").rarity("==", "Normal").hide().areaLevel("<=", 8).compile()}

`;
// Write filter to output directory
fs_1.default.writeFileSync(path_1.default.join(__dirname, `../../output/${filterName}.filter`), getFilter());
//# sourceMappingURL=hael-bows.js.map