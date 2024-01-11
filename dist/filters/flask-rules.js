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
(0, rule_1.default)((0, rule_1.default)().baseType("Medium Life Flask").areaLevel("<=", 11), (0, rule_1.default)().baseType("Large Life Flask").areaLevel("<=", 15), (0, rule_1.default)().baseType("Greater Life Flask").areaLevel("<=", 17), (0, rule_1.default)().baseType("Grand Life Flask").areaLevel("<=", 23), (0, rule_1.default)().baseType("Giant Life Flask").areaLevel("<=", 29), (0, rule_1.default)().baseType("Colossal Life Flask").areaLevel("<=", 35), (0, rule_1.default)().baseType("Hallowed Life Flask").areaLevel("<=", 55), (0, rule_1.default)().baseType("Divine Life Flask").areaLevel("<=", 75))
    .customSound("hael/life_flask")
    .icon("Red", "Hexagon")
    .text(colors_1.Colors.black)
    .backgroundColor(colors_1.Colors.red)
    .border(colors_1.Colors.black)
    .size(45)
    .compile()}

${(0, rule_1.default)((0, rule_1.default)().baseType("Medium Mana Flask").areaLevel("<=", 11), (0, rule_1.default)().baseType("Large Mana Flask").areaLevel("<=", 13), (0, rule_1.default)().baseType("Greater Mana Flask").areaLevel("<=", 20), (0, rule_1.default)().baseType("Grand Mana Flask").areaLevel("<=", 26), (0, rule_1.default)().baseType("Giant Mana Flask").areaLevel("<=", 31), (0, rule_1.default)().baseType("Colossal Mana Flask").areaLevel("<=", 37), (0, rule_1.default)().baseType("Hallowed Mana Flask").areaLevel("<=", 49))
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
`;
// Write filter to output directory
fs_1.default.writeFileSync(path_1.default.join(__dirname, `../../output/${filterName}.filter`), getFilter());
//# sourceMappingURL=flask-rules.js.map