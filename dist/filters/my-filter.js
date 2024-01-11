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
const filterName = 'MyFilter';
const wayLessThanTink = 5;
const lessThanTink = 10;
const tink = 15;
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
    return (0, rule_1.default)().baseType("Winged Abyss Scarab", "Winged Divination Scarab", "Winged Reliquary Scarab");
}
function tierTwoScarabs() {
    return (0, rule_1.default)().baseType("Gilded Abyss Scarab", "Gilded Ambush Scarab", "Gilded Divination Scarab", "Gilded Harbinger Scarab", "Gilded Reliquary Scarab", "Polished Legion Scarab", "Winged Ambush Scarab", "Winged Bestiary Scarab", "Winged Blight Scarab", "Winged Breach Scarab", "Winged Cartography Scarab", "Winged Elder Scarab", "Winged Expedition Scarab", "Winged Harbinger Scarab", "Winged Legion Scarab", "Winged Shaper Scarab", "Winged Sulphite Scarab", "Winged Torment Scarab", "Winged Ultimatum Scarab");
}
function tierThreeScarabs() {
    return (0, rule_1.default)().baseType("Polished Breach Scarab", "Polished Elder Scarab", "Polished Shaper Scarab", "Polished Torment Scarab", "Polished Ultimatum Scarab", "Rusted Abyss Scarab", "Rusted Ambush Scarab", "Rusted Bestiary Scarab", "Rusted Blight Scarab", "Rusted Breach Scarab", "Rusted Cartography Scarab", "Rusted Elder Scarab", "Rusted Harbinger Scarab", "Rusted Reliquary Scarab", "Rusted Shaper Scarab", "Rusted Torment Scarab", "Rusted Ultimatum Scarab");
}
function bossFragments() {
    return (0, rule_1.default)().baseType('Fragment of Constriction', 'Fragment of Emptiness', 'Fragment of Enslavement', 'Fragment of Eradication', 'Fragment of Knowledge', 'Fragment of Purification', 'Fragment of Shape', "Fragment of Terror", "Fragment of the Chimera", "Fragment of the Hydra", "Fragment of the Minotaur", "Fragment of the Phoenix", "Drox's Crest", "Al-Hezmin's Crest", "Baran's Crest", "Veritania's Crest", "The Maven's Writ", "Mortal Grief", "Mortal Hope", "Mortal Ignorance", "Mortal Rage");
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


### TODO show specific early magic bad bows

${(0, rule_1.default)((0, rule_1.default)().baseType("Short Bow").areaLevel("<=", 10), (0, rule_1.default)().baseType("Long Bow").areaLevel("<=", 15), (0, rule_1.default)().baseType("Composite Bow").areaLevel("<=", 23), (0, rule_1.default)().baseType("Bone Bow").areaLevel("<=", 29), (0, rule_1.default)().baseType("Royal Bow").areaLevel("<=", 35), (0, rule_1.default)().baseType("Grove Bow").areaLevel("<=", 48), (0, rule_1.default)().baseType("Ivory Bow").areaLevel("<", 52), (0, rule_1.default)().baseType("Highborn Bow").areaLevel("<=", 65), (0, rule_1.default)().baseType("Thicket Bow").areaLevel("<=", 68), (0, rule_1.default)().baseType("Spine Bow").itemLevel(">=", 74).itemLevel("<=", 80))
    .icon("White", "Cross")
    .background(colors_1.Colors.darkGrey)
    .rarity("==", "Normal")
    .customSound("hael/bow")
    .size(45)
    .compile()}


### early socket rules
${
//#region Early sockets
(0, rule_1.default)(gearRule().sockets(">=", "GG").customSound("hael/green_sockets"), gearRule().sockets(">=", "RGB"))
    .icon("Red", "Triangle").areaLevel("<=", 16)
    .background(colors_1.Colors.black)
    .text(colors_1.Colors.white)
    .border(colors_1.Colors.red)
    .size(45)
    .compile()}

### later socket rules
${(0, rule_1.default)(gearRule().sockets(">=", "4GGG").customSound("hael/green_sockets"), gearRule().sockets(">=", "RGB").customSound("hael/blue_red"))
    .icon("Red", "Triangle")
    .areaLevel("<=", 60)
    .background(colors_1.Colors.black)
    .text(colors_1.Colors.white)
    .border(colors_1.Colors.red)
    .size(45)
    .compile()}

### 3 link rules
${(0, rule_1.default)(gearRule().socketGroup(">=", "GGG").customSound("hael/3green"), gearRule().socketGroup(">=", "GGB").customSound("hael/3link"), gearRule().socketGroup(">=", "GGR").customSound("hael/3link"))
    .icon("Cyan", "Triangle")
    .areaLevel("<=", 27)
    .background(colors_1.Colors.purple)
    .text(colors_1.Colors.white)
    .size(45)
    .compile()}

### 4 link rules
${(0, rule_1.default)(gearRule().socketGroup(">=", "GGGG").customSound("hael/4link"), gearRule().socketGroup(">=", "4GGB").customSound("hael/4link"), gearRule().socketGroup(">=", "4GGR").customSound("hael/4link"))
    .icon("Cyan", "Triangle")
    .areaLevel("<=", 70)
    .background(colors_1.Colors.black)
    .size(45)
    .compile()
//#endregion
}

### All weapon rule 
${(0, rule_1.default)()
    .itemClass("Bows")
    .rarity("==", "Rare")
    .customSound("hael/rare_weapon", 300)
    .icon("Cyan", "UpsideDownHouse")
    .background(colors_1.Colors.black)
    .border(colors_1.Colors.red)
    .size(45)
    .compile()}

${(0, rule_1.default)(badBows().rarity("==", "Magic").areaLevel(">=", 37).hide(), badBows().rarity("==", "Normal").areaLevel(">=", 18).hide())
    .compile()}

${(0, rule_1.default)()
    .itemClass("Bows")
    .rarity("==", "Magic")
    .areaLevel("<=", 40)
    .customSound("hael/magicweapon")
    .icon("Red", "UpsideDownHouse")
    .background(colors_1.Colors.black)
    .text(colors_1.Colors.blue)
    .size(45)
    .compile()}

${(0, rule_1.default)()
    .itemClass("Quivers")
    .rarity("==", "Rare")
    .customSound("hael/rare_quiver", 300)
    .icon("Cyan", "Kite")
    .background(colors_1.Colors.white)
    .text(colors_1.Colors.black)
    .size(45)
    .compile()}

${(0, rule_1.default)()
    .itemClass("Quivers")
    .rarity("==", "Magic")
    .areaLevel("<=", 35)
    .customSound("hael/magic_quiver", 300)
    .icon("Red", "Kite")
    .background(colors_1.Colors.black)
    .text(colors_1.Colors.blue)
    .size(45)
    .compile()}

${(0, rule_1.default)()
    .itemClass("Quivers")
    .rarity("==", "Normal")
    .areaLevel("<=", 16)
    .customSound("hael/quiver", 300)
    .icon("White", "Kite")
    .background(colors_1.Colors.black)
    .size(45)
    .compile()}

${(0, rule_1.default)()
    .itemClass("Quivers")
    .baseType("Feathered Arrow Quiver")
    .rarity("==", "Normal")
    .customSound("hael/feathered", 300)
    .icon("White", "Kite")
    .background(colors_1.Colors.black)
    .size(45)
    .compile()
//#endregion
}

### strand rules
${(0, rule_1.default)().rarity("==", "Normal").areaLevel("<=", 2).size(45).compile()}

# any usable rare
${(0, rule_1.default)((0, rule_1.default)().itemClass("Gloves"), (0, rule_1.default)().itemClass("Boots"), (0, rule_1.default)().itemClass("Helmets"), (0, rule_1.default)().itemClass("Body Armours"))
    .rarity(">=", "Rare")
    .baseEvasion(">=", 1)
    .baseArmour("==", 0)
    .baseES("==", 0)
    .background(colors_1.Colors.black)
    .border(colors_1.Colors.red)
    .size(45)
    .compile()}

### misc leveling

### annoying things
#
#  rule().baseType("Simple Robe").rarity("==", "Normal").hide().compile()
#

### show early jewelry
${(0, rule_1.default)((0, rule_1.default)().baseType("Iron Ring").areaLevel("<=", 20).customSound("iron_ring"), (0, rule_1.default)().baseType("Rustic Sash").areaLevel("<=", 20).customSound("rustic"), (0, rule_1.default)().baseType("Coral Ring").areaLevel("<=", 12), (0, rule_1.default)().baseType("Sapphire Ring", "Topaz Ring", "Ruby Ring", "Two-Stone Ring", "Lapis Amulet", "Heavy Belt").areaLevel("<=", 30))
    .background(colors_1.Colors.darkGrey)
    .border(colors_1.Colors.red)
    .size(45)
    .compile()}

### hide large high lvl magic unids 
${(0, rule_1.default)((0, rule_1.default)().itemClass("Two Hand Axes", "Two Hand Swords", "Two Hand Maces", "Staves", "Warstaves").hide(), (0, rule_1.default)().itemClass("Shields").baseArmour(">=", 1).hide())
    .identified(false)
    .rarity("==", "Magic")
    .areaLevel(">=", 29)
    .hide()
    .compile()
//#endregion
}

### group leveling
### early group links
### casters
${(0, rule_1.default)(leapslamRule().sockets(">=", "2B").areaLevel("<=", 18).customSound("hael/blue_weapon"), gearRule().socketGroup(">=", "BBB").areaLevel("<=", 18).customSound("hael/3_blue"), gearRule().socketGroup(">=", "BBG").areaLevel("<=", 24).customSound("hael/crema"))
    .icon("Purple", "Star")
    .size(45)
    .border(colors_1.Colors.red)
    .background(colors_1.Colors.black)
    .compile()}
### TODO duelist

### TODO marauder

### late group links
### caster
${(0, rule_1.default)(gearRule().socketGroup(">=", "BBBB").areaLevel("<=", 42).customSound("hael/arma_links"), gearRule().socketGroup(">=", "BBBG").areaLevel("<=", 42).customSound("hael/crema_links"), gearRule().socketGroup(">=", "BBGR").areaLevel("<=", 42).customSound("hael/crema_links"))
    .icon("Purple", "Star")
    .size(45)
    .border(colors_1.Colors.red)
    .background(colors_1.Colors.black)
    .compile()}
  
  
### leveling specific currency rules
###
${
//#region Leveling Currency Rules
(0, rule_1.default)((0, rule_1.default)().baseType("Orb of Transmutation").areaLevel("<", 50).icon("Red", "Circle").customSound("hael/transmutation", 300), (0, rule_1.default)().baseType("Orb of Transmutation").areaLevel("<", 75).stackSize(">=", 2).icon("Red", "Circle").customSound("hael/transmutation", 300), (0, rule_1.default)().baseType("Orb of Transmutation").areaLevel("<", 100).stackSize(">=", 3).icon("White", "Circle"), (0, rule_1.default)().baseType("Scroll of Wisdom").areaLevel("<", 31).icon("White", "Circle").customSound("hael/wisdom"), (0, rule_1.default)().baseType("Scroll of Wisdom").areaLevel("<", 55).stackSize(">=", 2).icon("White", "Circle").customSound("hael/wisdom", 300), (0, rule_1.default)().baseType("Scroll of Wisdom").areaLevel("<", 100).stackSize(">=", 3).icon("White", "Circle"), (0, rule_1.default)().baseType("Portal Scroll").areaLevel("<", 31).icon("White", "Circle").customSound("hael/wisdom"), (0, rule_1.default)().baseType("Portal Scroll").areaLevel("<", 55).stackSize(">=", 2).icon("White", "Circle").customSound("hael/wisdom", 300), (0, rule_1.default)().baseType("Portal Scroll").areaLevel("<", 100).stackSize(">=", 3).icon("White", "Circle"), (0, rule_1.default)().baseType("Armourer's Scrap").areaLevel("<", 40).icon("White", "Circle").customSound("hael/armorer"), (0, rule_1.default)().baseType("Armourer's Scrap").areaLevel("<", 65).stackSize(">=", 2).icon("White", "Circle").customSound("hael/armorer", 300), (0, rule_1.default)().baseType("Armourer's Scrap").areaLevel("<", 100).stackSize(">=", 3).icon("White", "Circle"), (0, rule_1.default)().baseType("Blacksmith's Whetstone").areaLevel("<", 40).icon("White", "Circle").customSound("hael/armorer"), (0, rule_1.default)().baseType("Blacksmith's Whetstone").areaLevel("<", 65).stackSize(">=", 2).icon("White", "Circle").customSound("hael/armorer", 300), (0, rule_1.default)().baseType("Blacksmith's Whetstone").areaLevel("<", 100).stackSize(">=", 3).icon("White", "Circle"), (0, rule_1.default)().baseType("Orb of Augmentation").areaLevel("<", 30).icon("White", "Circle").customSound("hael/augment", 300), (0, rule_1.default)().baseType("Orb of Augmentation").areaLevel("<", 100).stackSize(">=", 2).icon("White", "Circle"))
    .text(colors_1.Colors.black)
    .background(colors_1.Colors.lightGrey)
    .border(colors_1.Colors.red)
    .size(45)
    .compile()
//#endregion
}

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
    .text(colors_1.Colors.white)
    .background(colors_1.Colors.darkGrey)
    .border(colors_1.Colors.gold)
    .size(45)
    .compile()}

${(0, rule_1.default)().itemClass("Maps").rarity("==", "Unique").icon("Brown", "Square").customSound("hael/uniquemap", 300)
    .text(colors_1.Colors.black)
    .background(colors_1.Colors.lightGrey)
    .size(45)
    .compile()
//#endregion
}
    
### fragments
### scarab rule
${
//#region Scarabs
(0, rule_1.default)(tierOneScarabs().icon("White", "Diamond"), tierTwoScarabs().icon("Red", "Diamond"), tierThreeScarabs().icon("Red", "Diamond"))
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
    .customSound("hael/quest_item")
    .text(colors_1.Colors.white)
    .background(colors_1.Colors.green)
    .border(colors_1.Colors.gold)
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