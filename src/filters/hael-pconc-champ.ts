import fs from 'fs';
import path from 'path';
import rule from '../rule';
import {Colors} from "../types/colors";

// Set filtername here
const filterName = 'ZZZZ-hael-pconc-leveling';

function gearRule() {
    return rule().itemClass("Boots", "Gloves", "Body Armours", "Helmets", 'Shields')
  }

function weaponRule() {
  return rule().itemClass("One Hand Axes", "One Hand Swords", "One Hand Maces", "Daggers", "Two Hand Swords", "Two Hand Axes")
}
  

const getFilter = () => `

${
  rule().itemClass("Bows", "Quivers").hide().compile()
}

${
  // white weapon rules
  rule(
    rule().baseType("Whalebone Rapier").areaLevel("<=", 11),
    rule().baseType("Jade Hatchet").areaLevel("<=", 10),
    rule().baseType("Copper Sword").areaLevel("<=", 10),
    rule().baseType("Longsword").areaLevel("<=", 14),
    rule().baseType("Bastard Sword").areaLevel("<=", 14),
  )
  .border(Colors.white)
  .size(45)
  .continue()
  .compile()
}

${
  weaponRule()
  .rarity("==", "Magic")
  .size(45)
  .areaLevel("<=", 14)
  .compile()
}

${
  weaponRule()
  .rarity("==", "Rare")
  .customSound("hael/rareweapon")
  .size(45)
  .border(Colors.red)
  .areaLevel("<=", 18)
  .compile()
}

${
  rule()
  .baseType("Lapis Amulet")
  .size(45)
  .border(Colors.red)
  .areaLevel("<=", 20)
  .customSound("hael/lapis")
  .compile()
}

${
  // gear section (including chrome items is probably a mistake)
  // lower on the list overrides higher entries. ie, if rareboots are 3g, 3g will tts
  rule(
    gearRule().sockets(">=", "G").areaLevel("<=", 10),
    gearRule().sockets(">=", "GG").areaLevel("<=", 18),
    gearRule().sockets(">=", "BG").areaLevel("<=", 18),
    rule().itemClass("Boots").rarity("==", "Rare").customSound("hael/rareboots").areaLevel("<=", 30),
    rule().itemClass("Boots").rarity("==", "Magic").customSound("hael/magicboots").areaLevel("<=", 15),
    gearRule().sockets(">=", "GGG").customSound("hael/greensockets").areaLevel("<=", 30),
    gearRule().sockets("==", 4).baseEvasion(">=", 1).areaLevel("<=", 45),
    gearRule().socketGroup(">=", "RG").customSound("hael/chargelinks").areaLevel("<=", 20),
    gearRule().socketGroup(">=", "RG").areaLevel(">=", 21).areaLevel("<=", 30),
    gearRule().socketGroup(">=", "RR").customSound("hael/2red").areaLevel("<=", 33),
    gearRule().socketGroup(">=", "RR").sockets(">=", 3).areaLevel(">=", 34).areaLevel("<=", 40),
    gearRule().socketGroup("==", "3G").customSound("hael/3link").areaLevel("<=", 20),
    gearRule().socketGroup("==", "3G").areaLevel(">=", 21).areaLevel("<=", 30),
    rule().socketGroup("==", "RGB").customSound("hael/rgb").areaLevel("<=", 30),
    rule().socketGroup("==", "RGB").areaLevel(">=", 34).areaLevel("<=", 40),
    gearRule().linkedSockets("==", 4).baseEvasion(">=", 1).baseArmour("==", 0).customSound("hael/4link").areaLevel("<=", 36),
    gearRule().linkedSockets("==", 4).baseEvasion(">=", 1).baseArmour("==", 0).areaLevel(">=", 37).areaLevel("<=", 45),

  )
  .continue()
  .size(45)
  .border(Colors.red)
  .compile()
}

${
  //#region other relevant rare rules
  rule(
    rule().itemClass("Shields"),
    rule().itemClass("Gloves"),
    rule().itemClass("Boots"),
    rule().itemClass("Helmets"),
    rule().itemClass("Body Armours"),
  )
    .areaLevel("<=", 75)
    .rarity(">=", "Rare")
    .baseEvasion(">=", 1)
    .border(Colors.gucciPurple)
    .size(45)
    .continue()
    .compile()
}

${
  // gems
  rule(
    rule().baseType("Double Strike"),
    rule().baseType("Spectral Throw"),
    rule().baseType("Momentum Support"),
    rule().baseType("Steelskin"),
    rule().baseType("Lifetap Support"),
    rule().baseType("Faster Attacks Support"),
    rule().baseType("Volley Support"),
    rule().baseType("Lesser Multiple Projectiles Support"),
    rule().baseType("Greater Volley Support"),
    rule().baseType("Greater Multiple Projectiles Support"),
    rule().baseType("Corrupting Fever"),
    rule().baseType("Withering Step"),
    rule().baseType("Poisonous Concoction"),
    rule().baseType("Vicious Projectiles Support"),
    rule().baseType("Void Manipulation Support"),
    rule().baseType("Unbound Ailments Support"),
    rule().baseType("Plague Bearer"),
    rule().baseType("Increased Area of Effect Support"),
    rule().baseType("Herald of Ash"),
    rule().baseType("Poacher's Mark"),
    rule().baseType("Sniper's Mark"),
    rule().baseType("Herald of Agony"),
    rule().baseType("Blood Rage"),
  )
  .continue()
  .size(45)
  .text(Colors.white)
  .compile()
}

${
  // gems
  rule(
    rule().baseType("Double Strike").areaLevel(">=", 7),
    rule().baseType("Spectral Throw").areaLevel(">=", 15),
    rule().baseType("Momentum Support").areaLevel(">=", 20),
    rule().baseType("Steelskin").areaLevel(">=", 40),
    rule().baseType("Lifetap Support").areaLevel(">=", 70),
    rule().baseType("Faster Attacks Support").areaLevel(">=", 70),
    rule().baseType("Volley Support").areaLevel(">=", 44),
    rule().baseType("Lesser Multiple Projectiles Support").areaLevel(">=", 44),
    rule().baseType("Greater Volley Support").areaLevel(">=", 50),
    rule().baseType("Greater Multiple Projectiles Support").areaLevel(">=", 50),
    rule().baseType("Corrupting Fever").areaLevel(">=", 50),
    rule().baseType("Withering Step").areaLevel(">=", 50),
    rule().baseType("Poisonous Concoction").areaLevel(">=", 50),
    rule().baseType("Vicious Projectiles Support").areaLevel(">=", 50),
    rule().baseType("Void Manipulation Support").areaLevel(">=", 50),
    rule().baseType("Unbound Ailments Support").areaLevel(">=", 50),
    rule().baseType("Plague Bearer").areaLevel(">=", 50),
    rule().baseType("Increased Area of Effect Support").areaLevel(">=", 50),
    rule().baseType("Herald of Ash").areaLevel(">=", 30),
    rule().baseType("Poacher's Mark").areaLevel(">=", 50),
    rule().baseType("Sniper's Mark").areaLevel(">=", 20),
    rule().baseType("Herald of Agony").areaLevel(">=", 50),
    rule().baseType("Blood Rage").areaLevel(">=", 50),
  )
  .hide()
  .continue()
  .size(45)
  .text(Colors.white)
  .compile()
}


`
// Write filter to output directory
fs.writeFileSync(path.join(__dirname, `../../output/${filterName}.filter`), getFilter());