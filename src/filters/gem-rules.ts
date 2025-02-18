import fs from 'fs';
import path from 'path';
import rule from '../rule';
import {Colors} from "../types/colors";

const wayLessThanTink = 2
const lessThanTink = 4
const tink = 6

// Set filtername here
const filterName = 'ZZZZ-hael-GemFilter';

const getFilter = () => `
${
rule().itemClass("Skill Gems", "Support Gems").hide().continue().compile()
}

${
    // TODO make this super loud for bow gems
    rule(
      rule().itemClass("Skill Gems", "Support Gems"),
    )
      .gemLevel(">=", 2)
      .gemLevel("<=", 19)
      .sound(wayLessThanTink)
      .icon("White", "Cross")
      .text(Colors.white)
      .background(Colors.darkGrey)
      .border(Colors.green)
      .size(45)
      .compile()
  }

  ${
    rule(
      rule().itemClass("Skill Gems", "Support Gems"),
    )
      .gemLevel(">=", 20)
      .sound(wayLessThanTink)
      .icon("Red", "Cross")
      .text(Colors.black)
      .background(Colors.darkGrey)
      .border(Colors.purple)
      .size(45)
      .compile()
  }

  ${
    rule(
      rule().itemClass("Skill Gems"),
      rule().itemClass("Support Gems")
    )
      .quality(">=", 5)
      .sound(wayLessThanTink)
      .icon("Red", "Cross")
      .text(Colors.black)
      .background(Colors.green)
      .border(Colors.gold)
      .size(45)
      .compile()
  }

  ${
    rule(
        rule().baseType("Enhance Support", "Empower Support", "Enlighten Support")
    )
    .sound(tink)
    .icon("Cyan", "Cross")
    .compile()
  }

  ${
    rule(
      rule().baseType("Burning Arrow").areaLevel("<=", 12),
      rule().baseType("Momentum Support").areaLevel("<=", 12),
      rule().baseType("Sniper's Mark").areaLevel("<=", 12),
      rule().baseType("Frostblink").areaLevel("<=", 12),
      rule().baseType("Faster Attacks Support").areaLevel("<=", 42),
      rule().baseType("Poacher's Mark").areaLevel("<=", 21),
      rule().baseType("Ensnaring Arrow").areaLevel("<=", 21),
      rule().baseType("Trinity Support").areaLevel("<=", 31),
      rule().baseType("Elemental Damage with Attacks Support").areaLevel("<=", 31),
      rule().baseType("Storm Rain").areaLevel("<=", 45),
      rule().baseType("Blast Rain").areaLevel("<=", 45),
      rule().baseType("Returning Projectiles Support").areaLevel("<=", 60),
      rule().baseType("Multiple Totems Support").areaLevel("<=", 60),
      rule().baseType("Manaforged Arrows Support").areaLevel("<=", 42),
      rule().baseType("Lesser Multiple Projectiles Support").areaLevel("<=", 22),
      rule().baseType("Lightning Arrow").areaLevel("<=", 42),
      rule().baseType("Dash").areaLevel("<=", 12),
      rule().baseType("Shrapnel Ballista").areaLevel("<=", 42),
      rule().baseType("Herald of Ice").areaLevel("<=", 42),
      rule().baseType("Haste").areaLevel("<=", 42),
    )
      .sound(lessThanTink)
      .icon("Cyan", "Hexagon")
      .text(Colors.black)
      .background(Colors.white)
      .border(Colors.red)
      .size(45)
      .compile()
  }
`
// Write filter to output directory
fs.writeFileSync(path.join(__dirname, `../../output/${filterName}.filter`), getFilter());