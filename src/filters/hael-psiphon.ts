import fs from 'fs';
import path from 'path';
import rule from '../rule';
import {Colors} from "../types/colors";

const wayLessThanTink = 2
const lessThanTink = 4
const tink = 6

// Set filtername here
const filterName = 'ZZZZ-hael-psiphon';

function gearRule() {
    return rule().itemClass("Boots", "Gloves", "Body Armours", "Helmets", "Shields")
}

function weaponRule() {
    return rule().itemClass("One Hand Axes", "One Hand Swords", "One Hand Maces", "Daggers", "Claws", "Two Hand Swords", "Two Hand Axes")
  }

const getFilter = () => `

### socket rules

${
    rule(
        weaponRule().sockets(">=", "1G").areaLevel("<=", 7),
        weaponRule().sockets(">=", "1B").areaLevel("<=", 7),

        gearRule().sockets(">=", "1G").areaLevel("<=", 9),
        gearRule().sockets(">=", "1B").areaLevel("<=", 9),

        rule(
            gearRule().sockets(">=", "2G"),
            gearRule().sockets(">=", "BG"),
            gearRule().socketGroup(">=", "RG").customSound("hael/redgreen"),
            gearRule().socketGroup(">=", "GGG").customSound("hael/3green"),
            gearRule().socketGroup(">=", "GGB").customSound("hael/2green1blue"),
            gearRule().socketGroup(">=", "GGR").customSound("hael/1red2green"),
            gearRule().socketGroup(">=", "RGB").customSound("hael/rgb"),
        )
        .areaLevel("<=", 20),

        rule(
            gearRule().sockets(">=", "BGG"),
            gearRule().sockets(">=", "BBG"),
            gearRule().sockets(">=", "GGG"),
            gearRule().socketGroup(">=", "3RG"),
        )
        .areaLevel("<=", 33),

        rule(
            gearRule().socketGroup(">=", "BBGG").customSound("hael/2b2g"),
            gearRule().socketGroup(">=", "BBBG").customSound("hael/3b1g"),
        )
        .areaLevel("<=", 45),

        rule(
            gearRule().socketGroup(">=", "BBGG").rarity("==", "Rare").customSound("hael/2b2g"),
            gearRule().socketGroup(">=", "BBBG").rarity("==", "Rare").customSound("hael/3b1g"),
        )
        .areaLevel("<=", 70),

        rule(
            gearRule().sockets(">=", "4BGG").rarity("==", "Rare").icon("Purple", "Raindrop"),
            gearRule().sockets(">=", "4BBG").rarity("==", "Rare").icon("Purple", "Raindrop"),
            gearRule().sockets(">=", "4GGG").rarity("==", "Rare").icon("Purple", "Raindrop"),
        )
        .areaLevel("<=", 80),
    
    )
    .size(45)
    .border(Colors.gearingColor)
    .continue()
    .compile()
}

${
    rule(
        weaponRule().rarity("==", "Magic").areaLevel("<=", 14),
        weaponRule().rarity("==", "Rare").areaLevel("<=", 14).icon("White", "Raindrop")
    )
    .size(45)
    .border(Colors.gearingColor)
    .continue()
    .compile()
}

${
    rule(
        rule().itemClass("Wands").rarity("==", "Rare").customSound("hael/rarewand").text(Colors.nsT2),
        rule().itemClass("Shields").rarity("==", "Rare")
    )
    .icon("Purple", "Raindrop")
    .size(45)
    .border(Colors.gearingColor)
    .continue()
    .compile()
}

${
    rule(
        rule().itemClass("Wands").fractured(true),
        gearRule().baseEvasion(">=", 1).fractured(true)
    )
    .icon("Green", "Raindrop")
    .size(45)
    .text(Colors.green)
    .border(Colors.BenGreen)
    .continue()
    .compile()
}


`
// Write filter to output directory
fs.writeFileSync(path.join(__dirname, `../../output/${filterName}.filter`), getFilter());