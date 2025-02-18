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
const filterName = 'ZZZZZZ-hael-pconc-leveling';
function gearRule() {
    return (0, rule_1.default)().itemClass("Boots", "Gloves", "Body Armours", "Helmets", 'Shields');
}
function weaponRule() {
    return (0, rule_1.default)().itemClass("One Hand Axes", "One Hand Swords", "One Hand Maces", "Daggers", "Two Hand Swords", "Two Hand Axes");
}
const getFilter = () => `

${
// white weapon rules
(0, rule_1.default)((0, rule_1.default)().baseType("Whalebone Rapier").areaLevel("<=", 11), (0, rule_1.default)().baseType("Jade Hatchet").areaLevel("<=", 10), (0, rule_1.default)().baseType("Copper Sword").areaLevel("<=", 10), (0, rule_1.default)().baseType("Longsword").areaLevel("<=", 14), (0, rule_1.default)().baseType("Bastard Sword").areaLevel("<=", 14))
    .border(colors_1.Colors.white)
    .size(45)
    .continue()
    .compile()}

${weaponRule()
    .rarity("==", "Magic")
    .size(45)
    .areaLevel("<=", 14)
    .compile()}

${weaponRule()
    .rarity("==", "Rare")
    .customSound("hael/rareweapon")
    .size(45)
    .border(colors_1.Colors.red)
    .areaLevel("<=", 18)
    .compile()}

${
// gear section (including chrome items is probably a mistake)
(0, rule_1.default)(gearRule().socketGroup("==", "3G").customSound("hael/3link").areaLevel("<=", 20), gearRule().socketGroup("==", "3G").areaLevel(">=", 21).areaLevel("<=", 30), gearRule().socketGroup(">=", "2R").customSound("hael/2red").areaLevel("<=", 33), gearRule().socketGroup(">=", "2R").areaLevel(">=", 34).areaLevel("<=", 40), (0, rule_1.default)().socketGroup("==", "RGB").customSound("hael/rgb").areaLevel("<=", 30), (0, rule_1.default)().socketGroup("==", "RGB").areaLevel(">=", 34).areaLevel("<=", 40), gearRule().linkedSockets("==", 4).baseEvasion(">=", 1).baseArmour("==", 0).customSound("hael/4link").areaLevel("<=", 36), gearRule().linkedSockets("==", 4).baseEvasion(">=", 1).baseArmour("==", 0).areaLevel(">=", 37).areaLevel("<=", 45), gearRule().sockets(">=", "3G").customSound("hael/greensockets").areaLevel("<=", 30), gearRule().sockets("==", 4).baseEvasion(">=", 1).areaLevel("<=", 45), gearRule().socketGroup(">=", "RG").customSound("hael/chargelinks").areaLevel("<=", 20), gearRule().socketGroup(">=", "RG").areaLevel(">=", 21).areaLevel("<=", 30))
    .continue()
    .areaLevel("<=", 30)
    .size(45)
    .border(colors_1.Colors.red)
    .compile()}

${
//#region other relevant rare rules
(0, rule_1.default)((0, rule_1.default)().itemClass("Shields"), (0, rule_1.default)().itemClass("Gloves"), (0, rule_1.default)().itemClass("Boots"), (0, rule_1.default)().itemClass("Helmets"), (0, rule_1.default)().itemClass("Body Armours"))
    .areaLevel("<=", 75)
    .rarity(">=", "Rare")
    .baseEvasion(">=", 1)
    .border(colors_1.Colors.gucciPurple)
    .size(45)
    .continue()
    .compile()}

${
// gems
(0, rule_1.default)((0, rule_1.default)().baseType("Double Strike"), (0, rule_1.default)().baseType("Spectral Throw"), (0, rule_1.default)().baseType("Momentum Support"), (0, rule_1.default)().baseType("Steelskin"), (0, rule_1.default)().baseType("Lifetap Support"), (0, rule_1.default)().baseType("Faster Attacks Support"), (0, rule_1.default)().baseType("Volley Support"), (0, rule_1.default)().baseType("Lesser Multiple Projectiles Support"), (0, rule_1.default)().baseType("Greater Volley Support"), (0, rule_1.default)().baseType("Greater Multiple Projectiles Support"), (0, rule_1.default)().baseType("Corrupting Fever"), (0, rule_1.default)().baseType("Withering Step"), (0, rule_1.default)().baseType("Poisonous Concoction"), (0, rule_1.default)().baseType("Vicious Projectiles Support"), (0, rule_1.default)().baseType("Void Manipulation Support"), (0, rule_1.default)().baseType("Unbound Ailments Support"), (0, rule_1.default)().baseType("Plague Bearer"), (0, rule_1.default)().baseType("Increased Area of Effect Support"), (0, rule_1.default)().baseType("Herald of Ash"), (0, rule_1.default)().baseType("Poacher's Mark"), (0, rule_1.default)().baseType("Sniper's Mark"), (0, rule_1.default)().baseType("Herald of Agony"), (0, rule_1.default)().baseType("Blood Rage"))
    .continue()
    .size(45)
    .text(colors_1.Colors.white)
    .compile()}

${
// gems
(0, rule_1.default)((0, rule_1.default)().baseType("Double Strike").areaLevel(">=", 7), (0, rule_1.default)().baseType("Spectral Throw").areaLevel(">=", 15), (0, rule_1.default)().baseType("Momentum Support").areaLevel(">=", 20), (0, rule_1.default)().baseType("Steelskin").areaLevel(">=", 40), (0, rule_1.default)().baseType("Lifetap Support").areaLevel(">=", 70), (0, rule_1.default)().baseType("Faster Attacks Support").areaLevel(">=", 70), (0, rule_1.default)().baseType("Volley Support").areaLevel(">=", 44), (0, rule_1.default)().baseType("Lesser Multiple Projectiles Support").areaLevel(">=", 44), (0, rule_1.default)().baseType("Greater Volley Support").areaLevel(">=", 50), (0, rule_1.default)().baseType("Greater Multiple Projectiles Support").areaLevel(">=", 50), (0, rule_1.default)().baseType("Corrupting Fever").areaLevel(">=", 50), (0, rule_1.default)().baseType("Withering Step").areaLevel(">=", 50), (0, rule_1.default)().baseType("Poisonous Concoction").areaLevel(">=", 50), (0, rule_1.default)().baseType("Vicious Projectiles Support").areaLevel(">=", 50), (0, rule_1.default)().baseType("Void Manipulation Support").areaLevel(">=", 50), (0, rule_1.default)().baseType("Unbound Ailments Support").areaLevel(">=", 50), (0, rule_1.default)().baseType("Plague Bearer").areaLevel(">=", 50), (0, rule_1.default)().baseType("Increased Area of Effect Support").areaLevel(">=", 50), (0, rule_1.default)().baseType("Herald of Ash").areaLevel(">=", 30), (0, rule_1.default)().baseType("Poacher's Mark").areaLevel(">=", 50), (0, rule_1.default)().baseType("Sniper's Mark").areaLevel(">=", 20), (0, rule_1.default)().baseType("Herald of Agony").areaLevel(">=", 50), (0, rule_1.default)().baseType("Blood Rage").areaLevel(">=", 50))
    .hide()
    .continue()
    .size(45)
    .text(colors_1.Colors.white)
    .compile()}


`;
// Write filter to output directory
fs_1.default.writeFileSync(path_1.default.join(__dirname, `../../output/${filterName}.filter`), getFilter());
//# sourceMappingURL=hael-pconc-champ.js.map