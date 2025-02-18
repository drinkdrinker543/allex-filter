import fs from 'fs';
import path from 'path';
import rule from '../rule';
import {Colors} from "../types/colors";

// this filter contains rules related to flasks. doesn't contain show uniques.

// Set filtername here
const filterName = 'ZZZZ-hael-FlaskFilter';

const getFilter = () => `
${
    rule().itemClass("Life Flasks", "Mana Flasks", "Hybrid Flasks", "Utility Flasks").continue().hide().compile()
}

### misc leveling
### life/mana flask rule
${
  //#region misc leveling
  rule(
    rule().baseType("Medium Life Flask").itemLevel("<=", 15),
    rule().baseType("Large Life Flask").itemLevel("<=", 20),
    rule().baseType("Greater Life Flask").itemLevel("<=", 22),
    rule().baseType("Grand Life Flask").itemLevel("<=", 28),
    rule().baseType("Giant Life Flask").itemLevel("<=", 36),
    rule().baseType("Colossal Life Flask").itemLevel("<=", 40),
    rule().baseType("Hallowed Life Flask").itemLevel("<=", 55),
    rule().baseType("Divine Life Flask").itemLevel("<=", 75),
  )
    .customSound("hael/life_flask")
    .icon("Red", "Hexagon")
    .text(Colors.black)
    .backgroundColor(Colors.red)
    .border(Colors.black)
    .size(45)
    .compile()
}

${
  rule(
    rule().baseType("Small Life Flask"),
    rule().baseType("Small Mana Flask")
  )
  .size(40)
  .rarity(">=", "Magic")
  .compile()
}

${
  rule(
    rule().baseType("Medium Mana Flask").itemLevel("<=", 11),
    rule().baseType("Large Mana Flask").itemLevel("<=", 18),
    rule().baseType("Greater Mana Flask").itemLevel("<=", 35),
    rule().baseType("Grand Mana Flask").itemLevel("<=", 35),
    rule().baseType("Giant Mana Flask").itemLevel("<=", 35),
    rule().baseType("Colossal Mana Flask").itemLevel("<=", 37),
    rule().baseType("Hallowed Mana Flask").itemLevel("<=", 40),
  )
    .customSound("hael/mana_flask")
    .icon("Blue", "Hexagon")
    .text(Colors.black)
    .background(Colors.blue)
    .border(Colors.black)
    .size(45)
    .compile()
}

${
  rule(
    rule().baseType("Quicksilver Flask").customSound("hael/quicksilver"),
    rule().baseType("Jade Flask").customSound("hael/jade_flask"),
    rule().baseType("Silver Flask").customSound("hael/silver_flask"),
    rule().baseType("Gold Flask").customSound("hael/gold_flask"),
  )
    .size(45)
    .rarity("<=", "Magic")
    .icon("Cyan", "Hexagon")
    .text(Colors.red)
    .background(Colors.black)
    .border(Colors.red)
    .compile()
}

${
    rule().baseType("Bismuth Flask", "Sapphire Flask", "Topaz Flask", "Ruby Flask")
    .size(45)
    .rarity("<=", "Magic")
    .icon("Cyan", "Hexagon")
    .text(Colors.red)
    .background(Colors.black)
    .border(Colors.red)
    .compile()
}

${
    rule().itemClass("Life Flasks", "Mana Flasks", "Hybrid Flasks", "Utility Flasks").size(45).rarity("==", "Unique").icon("Cyan", "Hexagon").compile()
}
`
// Write filter to output directory
fs.writeFileSync(path.join(__dirname, `../../output/${filterName}.filter`), getFilter());