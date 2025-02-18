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
const filterName = 'GemFilter';
const getFilter = () => `
${(0, rule_1.default)().itemClass("Skill Gems", "Support Gems").hide().continue().compile()}

${
// TODO make this super loud for bow gems
(0, rule_1.default)((0, rule_1.default)().itemClass("Skill Gems", "Support Gems"))
    .gemLevel(">=", 2)
    .gemLevel("<=", 19)
    .sound(wayLessThanTink)
    .icon("White", "Cross")
    .text(colors_1.Colors.white)
    .background(colors_1.Colors.darkGrey)
    .border(colors_1.Colors.green)
    .size(45)
    .compile()}

  ${(0, rule_1.default)((0, rule_1.default)().itemClass("Skill Gems", "Support Gems"))
    .gemLevel(">=", 20)
    .sound(wayLessThanTink)
    .icon("Red", "Cross")
    .text(colors_1.Colors.black)
    .background(colors_1.Colors.darkGrey)
    .border(colors_1.Colors.purple)
    .size(45)
    .compile()}

  ${(0, rule_1.default)((0, rule_1.default)().itemClass("Skill Gems"), (0, rule_1.default)().itemClass("Support Gems"))
    .quality(">=", 5)
    .sound(wayLessThanTink)
    .icon("Red", "Cross")
    .text(colors_1.Colors.black)
    .background(colors_1.Colors.green)
    .border(colors_1.Colors.gold)
    .size(45)
    .compile()}

  ${(0, rule_1.default)((0, rule_1.default)().baseType("Enhance Support", "Empower Support", "Enlighten Support"))
    .sound(tink)
    .icon("Cyan", "Cross")
    .compile()}

  ${(0, rule_1.default)((0, rule_1.default)().baseType("Burning Arrow").areaLevel("<=", 12), (0, rule_1.default)().baseType("Momentum Support").areaLevel("<=", 12), (0, rule_1.default)().baseType("Sniper's Mark").areaLevel("<=", 12), (0, rule_1.default)().baseType("Frostblink").areaLevel("<=", 12), (0, rule_1.default)().baseType("Faster Attacks Support").areaLevel("<=", 42), (0, rule_1.default)().baseType("Poacher's Mark").areaLevel("<=", 21), (0, rule_1.default)().baseType("Ensnaring Arrow").areaLevel("<=", 21), (0, rule_1.default)().baseType("Trinity Support").areaLevel("<=", 31), (0, rule_1.default)().baseType("Elemental Damage with Attacks Support").areaLevel("<=", 31), (0, rule_1.default)().baseType("Storm Rain").areaLevel("<=", 45), (0, rule_1.default)().baseType("Blast Rain").areaLevel("<=", 45), (0, rule_1.default)().baseType("Returning Projectiles Support").areaLevel("<=", 60), (0, rule_1.default)().baseType("Multiple Totems Support").areaLevel("<=", 60), (0, rule_1.default)().baseType("Manaforged Arrows Support").areaLevel("<=", 42), (0, rule_1.default)().baseType("Lesser Multiple Projectiles Support").areaLevel("<=", 22), (0, rule_1.default)().baseType("Lightning Arrow").areaLevel("<=", 42), (0, rule_1.default)().baseType("Dash").areaLevel("<=", 12), (0, rule_1.default)().baseType("Shrapnel Ballista").areaLevel("<=", 42), (0, rule_1.default)().baseType("Herald of Ice").areaLevel("<=", 42), (0, rule_1.default)().baseType("Haste").areaLevel("<=", 42))
    .sound(lessThanTink)
    .icon("Cyan", "Hexagon")
    .text(colors_1.Colors.black)
    .background(colors_1.Colors.white)
    .border(colors_1.Colors.red)
    .size(45)
    .compile()}
`;
// Write filter to output directory
fs_1.default.writeFileSync(path_1.default.join(__dirname, `../../output/${filterName}.filter`), getFilter());
//# sourceMappingURL=gem-rules.js.map