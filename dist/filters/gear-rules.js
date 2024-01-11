"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const rule_1 = __importDefault(require("../rule"));
const colors_1 = require("../types/colors");
// this filter contains rules for showing mostly unid gear.
// Set filtername here
const filterName = 'GearFilter';
function allGear() {
    return (0, rule_1.default)().itemClass("Daggers", "Rune Daggers", "Gloves", "Helmets", "Body Armours", "Belts", "Rings", "Amulets", "Two Hand Axes", "Two Hand Maces", "Two Hand Swords", "Thrusting One Hand Swords", "One Hand Axes", "One Hand Maces", "One Hand Swords", "Sceptres", "Wands", "Staves", "Warstaves", "Shields", "Quivers");
}
function gearRule() {
    return (0, rule_1.default)().itemClass("Boots", "Gloves", "Body Armours", "Helmets");
}
function jewelryRule() {
    return (0, rule_1.default)().baseType("Sapphire Ring", "Ruby Ring", "Topaz Ring", "Two-Stone Ring", "Amethyst Ring", "Lapis Amulet", "Jade Amulet", "Amber Amulet", "Citrine Amulet", "Agate Amulet", "Turquoise Amulet", "Onyx Amulet", "Gold Amulet", "Heavy Belt", "Leather Belt", "Chain Belt", "Stygian Vise", "Vanguard Belt", "Rustic Sash", "Crystal Belt", "Cloth Belt");
}
function goodRings() {
    return (0, rule_1.default)().baseType("Sapphire Ring", "Ruby Ring", "Topaz Ring", "Two-Stone Ring", "Amethyst Ring");
}
function goodAmulets() {
    return (0, rule_1.default)().baseType("Lapis Amulet", "Jade Amulet", "Amber Amulet", "Citrine Amulet", "Agate Amulet", "Turquoise Amulet", "Onyx Amulet", "Gold Amulet");
}
function leapslamRule() {
    return (0, rule_1.default)().baseType("Rusted Sword", "Copper Sword", "Rusted Axe", "Boarding Axe", "Jade Hatchet", "Rusted Spike", "Whalebone Rapier");
}
function oneByThreeGear() {
    return (0, rule_1.default)().baseType("Rusted Sword", "Copper Sword", "Sabre", "Variscite Blade", "Cutlass", "Gemstone Sword", "Corsair Sword", "Glass Shank", "Skinning Knife", "Stiletto", "Flaying Knife", "Prong Dagger", "Poignard", "Pressurised Dagger", "Trisula", "Gutting Knife", "Ambusher", "Pneumatic Dagger", "Sai", "Carving Knife", "Boot Knife", "Copper Kris", "Skean", "Imp Dagger", "Butcher Knife", "Boot Blade", "Golden Kris", "Flashfire Blade", "Royal Skean", "Fiend Dagger", "Slaughter Knife", "Ezomyte Dagger", "Platinum Kris", "Imperial Skean", "Demon Dagger", "Infernal Blade", "Driftwood Wand", "Goat's Horn", "Carved Wand", "Quartz Wand", "Calling Wand", "Spiraled Wand", "Sage Wand", "Pagan Wand", "Faun's Horn", "Engraved Wand", "Crystal Wand", "Coiled Wand", "Congregator Wand", "Convening Wand", "Omen Wand", "Heathen Wand", "Demon's Horn", "Imbued Wand", "Opal Wand", "Tornado Wand", "Prophecy Wand", "Accumulator Wand", "Profane Wand", "Convoking Wand", "Driftwood Club", "Tribal Club", "Spiked Club", "Petrified Club", "Barbed Club", "Ancestral Club", "Tenderizer");
}
function weaponRule() {
    return (0, rule_1.default)().itemClass("One Hand Swords", "One Hand Axes", "One Hand Maces", "Thrusting One Hand Swords", "Claws", "Daggers", "Rune Daggers", "Wands", "Sceptres", "Two Hand Swords", "Two Hand Maces", "Two Hand Axes", "Staves", "Warstaves", "Staves", "Shields", "Bows", "Quivers");
}
function badBows() {
    return (0, rule_1.default)().baseType("Death Bow", "Decimation Bow", "Harbinger Bow", "Recurve Bow", "Decurve Bow", "Sniper Bow", "Citadel Bow", "Assassin Bow", "Long Bow");
}
function showUniqueRareGear() {
    let str = "";
    for (let i = 45; i < 70; i++) {
        str += (0, rule_1.default)().width("<=", 2).height("<=", 2).areaLevel("==", i).itemLevel("==", i + 2).rarity("==", "Rare").size(30).continue().compile();
        str += "\n\n";
    }
    return str;
}
const getFilter = () => `

### hide all gear
${(0, rule_1.default)(allGear().rarity("==", "Normal").hide().continue(), allGear().rarity("==", "Magic").hide().continue(), allGear().rarity("==", "Rare").hide().continue())
    .compile()}


${(0, rule_1.default)(gearRule(), jewelryRule(), weaponRule())
    .rarity("==", "Unique")
    .background(colors_1.Colors.black)
    .size(45)
    .border(colors_1.Colors.uniqueColor)
    .compile()}


### shows small rare loot for leveling
${(0, rule_1.default)(oneByThreeGear().size(30), (0, rule_1.default)().itemClass("Thrusting One Hand Swords").size(30), (0, rule_1.default)().itemClass("Boots", "Helmets", "Gloves").size(30), (0, rule_1.default)().itemClass("Shields").size(30))
    .areaLevel("<=", 45)
    .rarity("==", "Rare")
    .text(colors_1.Colors.gold)
    .background(colors_1.Colors.black)
    .continue()
    .compile()}

### nuts unique/rare only show rare gear drops
${showUniqueRareGear()}
  
  ### show unidentified small magic rule
${(0, rule_1.default)(jewelryRule().size(40), oneByThreeGear().size(25), (0, rule_1.default)().itemClass("Thrusting One Hand Swords").size(25), (0, rule_1.default)().itemClass("Boots", "Helmets", "Gloves").size(35), (0, rule_1.default)().itemClass("Shields").baseArmour("==", 0).size(25))
    .rarity("==", "Magic")
    .text(colors_1.Colors.blue)
    .background(colors_1.Colors.black)
    .border(colors_1.Colors.blue)
    .areaLevel("<=", 30)
    .continue()
    .compile()}
  
  ### hide high lvl unid magic
${(0, rule_1.default)(allGear().hide())
    .identified(false)
    .rarity("==", "Magic")
    .areaLevel(">=", 31)
    .continue()
    .compile()}

${(0, rule_1.default)(jewelryRule())
    .identified(false)
    .rarity("==", "Magic")
    .background(colors_1.Colors.black)
    .size(45)
    .areaLevel(">=", 31)
    .areaLevel("<=", 45)
    .compile()}
  
  ### show large low lvl magic unids
${(0, rule_1.default)((0, rule_1.default)().itemClass("Two Hand Axes", "Two Hand Swords", "Two Hand Maces", "Staves", "Warstaves"), (0, rule_1.default)().itemClass("Shields").baseArmour(">=", 1), (0, rule_1.default)().itemClass("Body Armours"))
    .identified(false)
    .rarity("==", "Magic")
    .text(colors_1.Colors.blue)
    .background(colors_1.Colors.darkGrey)
    .size(25)
    .areaLevel("<=", 28)
    .continue()
    .compile()}

### class specific leveling is in main file.

`;
// Write filter to output directory
fs_1.default.writeFileSync(path_1.default.join(__dirname, `../../output/${filterName}.filter`), getFilter());
//# sourceMappingURL=gear-rules.js.map