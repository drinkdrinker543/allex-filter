"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const rule_1 = __importDefault(require("../rule"));
const colors_1 = require("../types/colors");
// this filter contains rules related to flasks. doesn't contain show uniques.
// Set filtername here
const filterName = 'FlaskFilter';
const getFilter = () => `
${(0, rule_1.default)().itemClass("Life Flasks", "Mana Flasks", "Hybrid Flasks", "Utility Flasks").continue().hide().compile()}

### misc leveling
### life/mana flask rule
${
//#region misc leveling
(0, rule_1.default)((0, rule_1.default)().baseType("Medium Life Flask").itemLevel("<=", 15), (0, rule_1.default)().baseType("Large Life Flask").itemLevel("<=", 20), (0, rule_1.default)().baseType("Greater Life Flask").itemLevel("<=", 22), (0, rule_1.default)().baseType("Grand Life Flask").itemLevel("<=", 28), (0, rule_1.default)().baseType("Giant Life Flask").itemLevel("<=", 36), (0, rule_1.default)().baseType("Colossal Life Flask").itemLevel("<=", 40), (0, rule_1.default)().baseType("Hallowed Life Flask").itemLevel("<=", 55), (0, rule_1.default)().baseType("Divine Life Flask").itemLevel("<=", 75))
    .customSound("hael/life_flask")
    .icon("Red", "Hexagon")
    .text(colors_1.Colors.black)
    .backgroundColor(colors_1.Colors.red)
    .border(colors_1.Colors.black)
    .size(45)
    .compile()}

${(0, rule_1.default)((0, rule_1.default)().baseType("Small Life Flask"), (0, rule_1.default)().baseType("Small Mana Flask"))
    .size(40)
    .rarity(">=", "Magic")
    .compile()}

${(0, rule_1.default)((0, rule_1.default)().baseType("Medium Mana Flask").itemLevel("<=", 11), (0, rule_1.default)().baseType("Large Mana Flask").itemLevel("<=", 18), (0, rule_1.default)().baseType("Greater Mana Flask").itemLevel("<=", 35), (0, rule_1.default)().baseType("Grand Mana Flask").itemLevel("<=", 35), (0, rule_1.default)().baseType("Giant Mana Flask").itemLevel("<=", 35), (0, rule_1.default)().baseType("Colossal Mana Flask").itemLevel("<=", 37), (0, rule_1.default)().baseType("Hallowed Mana Flask").itemLevel("<=", 40))
    .customSound("hael/mana_flask")
    .icon("Blue", "Hexagon")
    .text(colors_1.Colors.black)
    .background(colors_1.Colors.blue)
    .border(colors_1.Colors.black)
    .size(45)
    .compile()}

${(0, rule_1.default)((0, rule_1.default)().baseType("Quicksilver Flask").customSound("hael/quicksilver"), (0, rule_1.default)().baseType("Jade Flask").customSound("hael/jade_flask"), (0, rule_1.default)().baseType("Silver Flask").customSound("hael/silver_flask"), (0, rule_1.default)().baseType("Gold Flask").customSound("hael/gold_flask"))
    .size(45)
    .rarity("<=", "Magic")
    .icon("Cyan", "Hexagon")
    .text(colors_1.Colors.red)
    .background(colors_1.Colors.black)
    .border(colors_1.Colors.red)
    .compile()}

${(0, rule_1.default)().baseType("Bismuth Flask", "Sapphire Flask", "Topaz Flask", "Ruby Flask")
    .size(45)
    .rarity("<=", "Magic")
    .icon("Cyan", "Hexagon")
    .text(colors_1.Colors.red)
    .background(colors_1.Colors.black)
    .border(colors_1.Colors.red)
    .compile()}

${(0, rule_1.default)().itemClass("Life Flasks", "Mana Flasks", "Hybrid Flasks", "Utility Flasks").size(45).rarity("==", "Unique").icon("Cyan", "Hexagon").compile()}
`;
// Write filter to output directory
fs_1.default.writeFileSync(path_1.default.join(__dirname, `../../output/${filterName}.filter`), getFilter());
//# sourceMappingURL=flask-rules.js.map