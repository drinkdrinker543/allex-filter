import fs from 'fs';
import path from 'path';
import rule from '../rule';

// Set filtername here
const filterName = 'MyFilter';

const wayLessThanTink = 5
const lessThanTink = 10
const tink = 15

function weaponRule() {
  return rule().itemClass("One Hand Swords", "One Hand Axes", "One Hand Maces", "Thrusting One Hand Swords", "Claws", "Daggers", "Rune Daggers", "Wands", "Sceptres", "Two Hand Swords", "Two Hand Maces", "Two Hand Axes", "Staves", "Warstaves", "Staves", "Shields", "Bows", "Quivers")
}

function gearRule() {
  return rule().itemClass("Boots", "Gloves", "Body Armours", "Helmets")
}

function jewelryRule() {
  return rule().itemClass("Belts", "Rings", "Amulets")
}

function taintedCurrency() {
  return rule().baseType("Tainted Armourer's Scrap", "Tainted Blacksmith's Whetstone", "Tainted Chaos Orb", "Tainted Chromatic Orb", "Tainted Divine Teardrop", "Tainted Exalted Orb", "Tainted Jeweller's Orb", "Tainted Mythic Orb", "Tainted Orb of Fusing")
}

function expeditionCurrency() {
  return rule().baseType("Polished Breach Scarab", "Polished Elder Scarab", "Polished Shaper Scarab", "Polished Torment Scarab", "Polished Ultimatum Scarab", "Rusted Abyss Scarab", "Rusted Ambush Scarab", "Rusted Bestiary Scarab", "Rusted Blight Scarab", "Rusted Breach Scarab", "Rusted Cartography Scarab", "Rusted Elder Scarab", "Rusted Harbinger Scarab", "Rusted Reliquary Scarab", "Rusted Shaper Scarab", "Rusted Torment Scarab", "Rusted Ultimatum Scarab")
}

function tierOneScarabs() {
  return rule().baseType("Winged Abyss Scarab", "Winged Divination Scarab", "Winged Reliquary Scarab")
}

function tierTwoScarabs() {
  return rule().baseType("Gilded Abyss Scarab", "Gilded Ambush Scarab", "Gilded Divination Scarab", "Gilded Harbinger Scarab", "Gilded Reliquary Scarab", "Polished Legion Scarab", "Winged Ambush Scarab", "Winged Bestiary Scarab", "Winged Blight Scarab", "Winged Breach Scarab", "Winged Cartography Scarab", "Winged Elder Scarab", "Winged Expedition Scarab", "Winged Harbinger Scarab", "Winged Legion Scarab", "Winged Shaper Scarab", "Winged Sulphite Scarab", "Winged Torment Scarab", "Winged Ultimatum Scarab")
}

function tierThreeScarabs() {
  return rule().baseType("Polished Breach Scarab", "Polished Elder Scarab", "Polished Shaper Scarab", "Polished Torment Scarab", "Polished Ultimatum Scarab", "Rusted Abyss Scarab", "Rusted Ambush Scarab", "Rusted Bestiary Scarab", "Rusted Blight Scarab", "Rusted Breach Scarab", "Rusted Cartography Scarab", "Rusted Elder Scarab", "Rusted Harbinger Scarab", "Rusted Reliquary Scarab", "Rusted Shaper Scarab", "Rusted Torment Scarab", "Rusted Ultimatum Scarab")
}

function bossFragments() {
  return rule().baseType('Fragment of Constriction', 'Fragment of Emptiness', 'Fragment of Enslavement', 'Fragment of Eradication', 'Fragment of Knowledge', 'Fragment of Purification', 'Fragment of Shape', "Fragment of Terror", "Fragment of the Chimera", "Fragment of the Hydra", "Fragment of the Minotaur", "Fragment of the Phoenix", "Drox's Crest", "Al-Hezmin's Crest", "Baran's Crest", "Veritania's Crest", "The Maven's Writ", "Mortal Grief", "Mortal Hope", "Mortal Ignorance", "Mortal Rage")
}

function sacrificeFragments() {
  return rule().baseType("Sacrifice at Dusk", "Sacrifice at Dawn", "Sacrifice at Midnight", "Sacrifice at Noon")
}

function otherFragments() {
  return rule().baseType("Gift to the Goddess", "Tribute to the Goddess", "Sacred Blossom", "Simulacrum", "Unrelenting Timeless Eternal Emblem", "Unrelenting Timeless Karui Emblem", "Unrelenting Timeless Maraketh Emblem", "Unrelenting Timeless Templar Emblem", "Unrelenting Timeless Vaal Emblem", "Timeless Eternal Emblem", "Timeless Maraketh Emblem", "Timeless Karui Emblem", "Timeless Templar Emblem", "Timeless Vaal Emblem", )
}

function tempFragments() {
  return rule().baseType("Divine Vessel", "Offering to the Goddess", )
}

function badBows() {
  return rule().baseType("Death Bow", "Decimation Bow", "Harbinger Bow", "Recurve Bow", "Decurve Bow", "Sniper Bow", "Citadel Bow", "Assassin Bow")
}

function oneByThreeGear() {
  return rule().baseType("Rusted Sword", "Copper Sword", "Sabre", "Variscite Blade", "Cutlass", "Gemstone Sword", "Corsair Sword", "Glass Shank", "Skinning Knife", "Stiletto", "Flaying Knife", "Prong Dagger", "Poignard", "Pressurised Dagger", "Trisula", "Gutting Knife", "Ambusher", "Pneumatic Dagger", "Sai", "Carving Knife", "Boot Knife", "Copper Kris", "Skean", "Imp Dagger", "Butcher Knife", "Boot Blade", "Golden Kris", "Flashfire Blade", "Royal Skean", "Fiend Dagger", "Slaughter Knife", "Ezomyte Dagger", "Platinum Kris", "Imperial Skean", "Demon Dagger", "Infernal Blade", "Driftwood Wand", "Goat's Horn", "Carved Wand", "Quartz Wand", "Calling Wand", "Spiraled Wand", "Sage Wand", "Pagan Wand", "Faun's Horn", "Engraved Wand", "Crystal Wand", "Coiled Wand", "Congregator Wand", "Convening Wand", "Omen Wand", "Heathen Wand", "Demon's Horn", "Imbued Wand", "Opal Wand", "Tornado Wand", "Prophecy Wand", "Accumulator Wand", "Profane Wand", "Convoking Wand")
}

const getFilter = () => `
${
  rule(
    badBows().rarity("==", "Normal").hide(),
    badBows().rarity("==", "Magic").areaLevel(">=", 26).hide(),
    gearRule().rarity("==", "Normal").hide(),
    gearRule().rarity("==", "Magic").areaLevel(">", 24).hide(),
    weaponRule().rarity("==", "Normal").hide(),
    jewelryRule().rarity("==", "Normal").areaLevel(">", 13).hide(),
    gearRule().rarity("==", "Normal").hide()
  )
    .continue()
    .compile()}


### early socket rules
${
  //<editor-fold desc="Description">
  rule(
    gearRule().sockets(">=", "GG").customSound("hael/greensockets"),
    gearRule().sockets(">=", "RB").customSound("hael/bluered"),
  )
    .icon("Red", "Triangle").areaLevel("<=", 16)
    .background(220, 220, 20)
    .text(20, 20, 20)
    .size(45)
    .compile()
}

### later socket rules
${
  rule(
    gearRule().sockets(">=", "4GGG").customSound("hael/greensockets"),
    gearRule().sockets(">=", "RGB").customSound("hael/bluered"),
  )
    .icon("Red", "Triangle")
    .areaLevel("<=", 60)
    .background(220, 220, 20)
    .text(20, 20, 20)
    .size(45)
    .compile()
}

### 3 link rules
${
  rule(
    gearRule().socketGroup(">=", "GGG").customSound("hael/3green"),
    gearRule().socketGroup(">=", "GGB").customSound("hael/3link"),
    gearRule().socketGroup(">=", "GGR").customSound("hael/3link"),
  )
    .icon("Cyan", "Triangle")
    .areaLevel("<=", 25)
    .background(220, 220, 20)
    .text(50, 50, 50)
    .size(45)
    .compile()
}

### 4 link rules
${
  rule(
    gearRule().socketGroup(">=", "GGGG").customSound("hael/4link"),
    gearRule().socketGroup(">=", "4GGB").customSound("hael/4link"),
    gearRule().socketGroup(">=", "4GGR").customSound("hael/4link")
  )
    .icon("Cyan", "Triangle")
    .areaLevel("<=", 60)
    .background(220, 20, 220)
    .text(50, 50, 50)
    .size(45)
    .compile()
  //</editor-fold>
}

### All weapon rule
### early white bows      
${
  //<editor-fold desc="Description">
  rule(
    rule().baseType("Crude Bow").areaLevel("<=", 3),
    rule().baseType("Short Bow").areaLevel("<=", 8),
    rule().baseType("Long Bow").areaLevel("<=", 14),
  )
    .icon("White", "Cross")
    .rarity("==", "Normal")
    .sockets(">=", "GG")
    .customSound("hael/whitebow")
    .background(240,240,240)
    .text(20, 20, 20)
    .size(45)
    .compile()
}
        
### show later white bows
${
  rule(
    rule().baseType("Composite Bow").areaLevel("<=", 21),
    rule().baseType("Bone Bow").areaLevel("<=", 27),
    rule().baseType("Royal Bow").areaLevel("<=", 33),
    rule().baseType("Grove Bow").areaLevel("<=", 50),
    rule().baseType("Highborn Bow").areaLevel("<=", 56),
    rule().baseType("Thicket Bow").areaLevel("<=", 65),
    rule().baseType("Spine Bow").itemLevel(">=", 74).itemLevel("<=", 80),
  )
    .icon("White", "Cross")
    .rarity("==", "Normal")
    .sockets(">=", "GG")
    .customSound("hael/whitebow")
    .background(240,240,240)
    .text(20, 20, 20)
    .size(45)
    .compile()
}

${
  rule()
    .itemClass("Bows")
    .rarity("==", "Rare")
    .customSound("hael/rareweapon", 300)
    .icon("Cyan", "UpsideDownHouse")
    .background(240,240,240)
    .text(20, 20, 200)
    .size(45)
    .compile()
}

${
  rule()
    .itemClass("Bows")
    .rarity("==", "Magic")
    .areaLevel("<=", 35)
    .customSound("hael/magicweapon", 300)
    .icon("Red", "UpsideDownHouse")
    .background(200,200,200)
    .text(20, 20, 200)
    .size(45)
    .compile()
}

${
  rule()
    .itemClass("Quivers")
    .rarity("==", "Rare")
    .customSound("hael/rarequiver", 300)
    .icon("Cyan", "Kite")
    .background(240,240,240)
    .text(20, 20, 200)
    .size(45)
    .compile()
}

${
  rule()
    .itemClass("Quivers")
    .rarity("==", "Magic")
    .areaLevel("<=", 35)
    .customSound("hael/magicquiver", 300)
    .icon("Red", "Kite")
    .background(200,200,200)
    .text(20, 20, 200)
    .size(45)
    .compile()
}

${
  rule()
    .itemClass("Quivers")
    .rarity("==", "Normal")
    .areaLevel("<=", 16)
    .customSound("hael/quiver", 300)
    .icon("White", "Kite")
    .background(200,200,200)
    .text(20, 20, 200)
    .size(45)
    .compile()
}

${
  rule()
    .itemClass("Quivers")
    .baseType("Feathered Arrow Quiver")
    .rarity("==", "Normal")
    .customSound("hael/featheredquiver", 300)
    .icon("White", "Kite")
    .background(200,200,200)
    .text(20, 20, 200)
    .size(45)
    .compile()
  //</editor-fold>
}

# any usable rare
${
  rule(
    rule().itemClass("Gloves").customSound("hael/raregloves", 300),
    rule().itemClass("Boots").customSound("hael/rareboots", 300),
    rule().itemClass("Helmets").customSound("hael/rarehelmets", 300),
    rule().itemClass("Body Armours").customSound("hael/rarebody", 300),
  )
    .baseEvasion(">", 1)
    .customSound("hael/raregear")
    .icon("Red", "Moon")
    .text(20, 20, 20)
    .background(120, 120, 120)
    .border(255, 0, 0)
    .size(45)
    .compile()
}

### misc leveling
###
${
  //<editor-fold desc="misc leveling">
  rule(
    rule().baseType("Sniper's Mark").areaLevel("<=", 12),
    rule().baseType("War Banner").areaLevel("<=", 12),
    rule().baseType("Frostblink").areaLevel("<=", 12),
    rule().baseType("Faster Attacks Support").areaLevel("<=", 42),
    rule().baseType("Poacher's Mark").areaLevel("<=", 21),
    rule().baseType("Ensnaring Arrow").areaLevel("<=", 21),
    rule().baseType("Trinity Support").areaLevel("<=", 12),
    rule().baseType("Elemental Damage with Attacks Support").areaLevel("<=", 12),
    rule().baseType("Storm Rain").areaLevel("<=", 45),
    rule().baseType("Blast Rain").areaLevel("<=", 45),
    rule().baseType("Returning Projectiles Support").areaLevel("<=", 60),
    rule().baseType("Multiple Totems Support").areaLevel("<=", 60),
    rule().baseType("Artillery Ballista").areaLevel("<=", 42),
  )
    .sound(lessThanTink)
    .icon("Cyan", "Hexagon")
    .text(220, 220, 220)
    .background(20, 20, 20)
    .border(255, 0, 0)
    .size(45)
    .compile()
}

### flask rule
${
  rule(
    rule().baseType("Medium Life Flask").areaLevel("<=", 11),
    rule().baseType("Large Life Flask").areaLevel("<=", 15),
    rule().baseType("Greater Life Flask").areaLevel("<=", 17),
    rule().baseType("Grand Life Flask").areaLevel("<=", 23),
    rule().baseType("Giant Life Flask").areaLevel("<=", 29),
    rule().baseType("Colossal Life Flask").areaLevel("<=", 35),
    rule().baseType("Hallowed Life Flask").areaLevel("<=", 55),
    rule().baseType("Divine Life Flask").areaLevel("<=", 75),
  )
    .customSound("hael/lifeflask")
    .icon("Red", "Hexagon")
    .text(0, 250, 250)
    .background(250, 0, 0)
    .border(0, 0, 0)
    .size(45)
    .compile()
}

${
  rule(
    rule().baseType("Medium Mana Flask").areaLevel("<=", 11),
    rule().baseType("Large Mana Flask").areaLevel("<=", 13),
    rule().baseType("Greater Mana Flask").areaLevel("<=", 20),
    rule().baseType("Grand Mana Flask").areaLevel("<=", 26),
    rule().baseType("Giant Mana Flask").areaLevel("<=", 31),
    rule().baseType("Colossal Mana Flask").areaLevel("<=", 37),
    rule().baseType("Hallowed Mana Flask").areaLevel("<=", 49),
  )
    .customSound("hael/manaflask")
    .icon("Blue", "Hexagon")
    .text(0, 250, 250)
    .background(250, 0, 0)
    .border(0, 0, 0)
    .size(45)
    .compile()
}

### unidentified small rare rule
${
  rule(
    jewelryRule().size(45),
    oneByThreeGear().size(45),
    rule().itemClass("Thrusting One Hand Swords").size(35),
    rule().itemClass("Boots", "Helmets", "Gloves").size(45),
    rule().itemClass("Shields").baseArmour("==", 0).size(30),
    rule().itemClass("Life Flasks", "Mana Flasks", "Hybrid Flasks", "Utility Flasks"),
  )
    .identified(false)
    .rarity(">=", "Rare")
    .text(255, 150, 150)
    .background(50, 50, 50)
    .continue()
    .compile()
}

### show unidentified small magic rule
${
  rule(
    jewelryRule().size(25),
    oneByThreeGear().size(25),
    rule().itemClass("Thrusting One Hand Swords").size(35),
    rule().itemClass("Boots", "Helmets", "Gloves").size(45),
    rule().itemClass("Shields").baseArmour("==", 0).size(30),
  )
    .identified(false)
    .rarity("==", "Magic")
    .text(150, 150, 255)
    .background(50, 50, 50)
    .areaLevel("<=", 40)
    .continue()
    .compile()
}

### hide high lvl unid magic
${
  rule(
    jewelryRule().hide(),
    oneByThreeGear().hide(),
    rule().itemClass("Thrusting One Hand Swords").hide(),
    rule().itemClass("Boots", "Helmets", "Gloves").hide(),
    rule().itemClass("Shields").baseArmour("==", 0).hide(),
  )
    .identified(false)
    .rarity("==", "Magic")
    .areaLevel(">=", 45)
    .continue()
    .compile()
}

### show large low lvl magic unids
${
  rule(
    rule().itemClass("Two Hand Axes", "Two Hand Swords", "Two Hand Maces", "Staves", "Warstaves"),
    rule().itemClass("Shields").baseArmour(">=", 1),
    rule().itemClass("Body Armours")
  )
    .identified(false)
    .rarity("==", "Magic")
    .text(150, 150, 255)
    .background(50, 50, 50)
    .size(15)
    .areaLevel("<=", 30)
    .continue()
    .compile()
}

### hide large high lvl magic unids 
${
  rule(
    rule().itemClass("Two Hand Axes", "Two Hand Swords", "Two Hand Maces", "Staves", "Warstaves").hide(),
    rule().itemClass("Shields").baseArmour(">=", 1).hide(),
  )
    .identified(false)
    .rarity("==", "Magic")
    .text(150, 150, 255)
    .background(50, 50, 50)
    .size(15)
    .areaLevel(">=", 31)
    .continue()
    .compile()
  //</editor-fold>
}

### currency rule
${
  //<editor-fold desc="Currency Rule">
  rule(
    rule().baseType('Regal Orb').icon('Green', 'Circle').customSound("hael/regal", 300),
    rule().baseType('Orb of Chance').icon('Green', 'Circle').customSound("hael/chance", 300),
    rule().baseType('Orb of Binding').icon('White', 'Circle').customSound("hael/binding", 300),
    rule().baseType('Orb of Scouring').icon('Green', 'Circle').customSound("hael/scouring", 300),
    rule().baseType('Orb of Alchemy').icon('White', 'Circle').customSound("hael/alchemy", 300),
    rule().baseType('Orb of Alteration').icon('Green', 'Circle').customSound("hael/alteration", 300),
    rule().baseType('Vaal Orb').icon('Red', 'Circle').customSound("hael/vaal", 300),
    rule().baseType('Chaos Orb').icon('Red', 'Circle').customSound("hael/chaos", 300),
    rule().baseType("Chaos Shard").icon("White", "Circle"),
    rule().baseType("Veiled Chaos Orb").icon("Red", "Circle").customSound("hael/veiledchaos", 300),
    rule().baseType('Orb of Regret').icon('Red', 'Circle').customSound("hael/regret", 300),
    rule().baseType("Exalted Orb").icon("Cyan", "Circle").customSound("hael/exalted", 300),
    rule().baseType("Divine Orb").icon("Cyan", "Circle").customSound("hael/divine", 300),
    rule().baseType("Mirror of Kalandra").icon("Cyan", "Circle").customSound("hael/mirror", 300),
    rule().baseType("Mirror Shard").icon("Cyan", "Circle").customSound("hael/mirror", 300),
    rule().baseType("Fracturing Orb").icon("Cyan", "Circle").customSound("hael/fracturing", 300),
    rule().baseType("Fracturing Shard").icon("Cyan", "Circle").customSound("hael/fracturing", 300),
  )
    .text(240, 240, 240)
    .background(120, 120, 120)
    .border(255, 255, 255)
    .size(45)
    .compile()
  //</editor-fold>
}
  
  
### leveling specific currency rules
###
${
  //<editor-fold desc="leveling currency rules">
  rule(
    rule().baseType("Orb of Transmutation").areaLevel("<", 50).icon("Red", "Circle").customSound("hael/transmutation", 300),
    rule().baseType("Orb of Transmutation").areaLevel("<", 75).stackSize(">=", 2).icon("Red", "Circle").customSound("hael/transmutation", 300),
    rule().baseType("Orb of Transmutation").areaLevel("<", 100).stackSize(">=", 3).icon("White", "Circle"),

    rule().baseType("Scroll of Wisdom").areaLevel("<", 31).icon("White", "Circle").customSound("hael/wisdom"),
    rule().baseType("Scroll of Wisdom").areaLevel("<", 55).stackSize(">=", 2).icon("White", "Circle").customSound("hael/wisdom", 300),
    rule().baseType("Scroll of Wisdom").areaLevel("<", 100).stackSize(">=", 3).icon("White", "Circle"),

    rule().baseType("Portal Scroll").areaLevel("<", 31).icon("White", "Circle").customSound("hael/wisdom"),
    rule().baseType("Portal Scroll").areaLevel("<", 55).stackSize(">=", 2).icon("White", "Circle").customSound("hael/wisdom", 300),
    rule().baseType("Portal Scroll").areaLevel("<", 100).stackSize(">=", 3).icon("White", "Circle"),

    rule().baseType("Armourer's Scrap").areaLevel("<", 40).icon("White", "Circle").customSound("hael/armorer"),
    rule().baseType("Armourer's Scrap").areaLevel("<", 65).stackSize(">=", 2).icon("White", "Circle").customSound("hael/armorer", 300),
    rule().baseType("Armourer's Scrap").areaLevel("<", 100).stackSize(">=", 3).icon("White", "Circle"),

    rule().baseType("Blacksmith's Whetstone").areaLevel("<", 40).icon("White", "Circle").customSound("hael/armorer"),
    rule().baseType("Blacksmith's Whetstone").areaLevel("<", 65).stackSize(">=", 2).icon("White", "Circle").customSound("hael/armorer", 300),
    rule().baseType("Blacksmith's Whetstone").areaLevel("<", 100).stackSize(">=", 3).icon("White", "Circle"),

    rule().baseType("Orb of Augmentation").areaLevel("<", 30).icon("White", "Circle").customSound("hael/augment", 300),
    rule().baseType("Orb of Augmentation").areaLevel("<", 100).stackSize(">=", 2).icon("White", "Circle")
  )
    .text(240, 240, 240)
    .background(120, 120, 120)
    .border(255, 255, 255)
    .size(45)
    .compile()
  //</editor-fold>
}
    
### misc currency
### tainted currency
${
  //<editor-fold desc="Other currency">
  taintedCurrency().icon("Red", "Star").sound(lessThanTink, 200)
    .text(240, 240, 240)
    .background(240, 120, 120)
    .border(255, 255, 255)
    .size(45)
    .compile()
}

### other currency
${
  rule(
    rule().baseType("Rogue's Marker"),
  )
    .icon("White", "Star")
    .text(240, 240, 240)
    .background(240, 120, 120)
    .border(255, 255, 255)
    .size(45)
    .compile()
}

### expedition currency
${
  expeditionCurrency().icon("Red", "Star").sound(lessThanTink, 200)
    .text(240, 240, 240)
    .background(240, 120, 120)
    .border(255, 255, 255)
    .size(45)
    .compile()
  //</editor-fold>
}
  
### map rule
###
${
  //<editor-fold desc="map rule">
  rule(
    rule().mapTier("<=", 5).mapTier(">=", 1).icon("White", "Square").customSound("hael/whitemap", 300),
    rule().mapTier("<=", 10).mapTier(">=", 6).icon("Yellow", "Square").customSound("hael/yellowmap", 300),
    rule().mapTier("<=", 16).mapTier(">=", 11).icon("Red", "Square").customSound("hael/redmap", 300),
  )
    .itemClass("Maps")
    .rarity("!", "Unique")
    .text(240, 240, 240)
    .background(220,80,220)
    .size(45)
    .compile()
}

${rule().itemClass("Maps").rarity("==", "Unique").icon("Brown", "Square").customSound("hael/uniquemap", 300)
  .text(240, 240, 240)
  .background(220,80,220)
  .size(45)
  .compile()
  //</editor-fold>
}
    
### fragments
### scarab rule
${
  //<editor-fold desc="Description">
  rule(
    tierOneScarabs().icon("White", "Diamond"),
    tierTwoScarabs().icon("Red", "Diamond"),
    tierThreeScarabs().icon("Red", "Diamond"),
  )
    .text(240, 240, 240)
    .background(80, 240, 80)
    .border(255, 255, 255)
    .size(45)
    .compile()}
    
### fragments
${rule(
  sacrificeFragments().icon("White", "Raindrop").sound(wayLessThanTink),
  tempFragments().icon("White", "Raindrop").sound(wayLessThanTink),
  otherFragments().icon("Red", "Raindrop").sound(lessThanTink),
  bossFragments().icon("Cyan", "Raindrop").sound(tink)
)
  .text(240, 240, 240)
  .background(80, 240, 80)
  .border(255, 255, 255)
  .size(45)
  .compile()
  //</editor-fold>
}
    
### misc catch all
${
  //<editor-fold desc="Description">
  rule()
    .itemClass("Quest Items")
    .icon("Green", "Cross")
    .customSound("hael/questitem")
    .text(50, 50, 50)
    .background(20, 240, 20)
    .border(20, 255, 20)
    .size(45)
    .compile()
}

${
  rule()
    .itemClass("Sanctified Relics")
    .icon("Green", "Cross")
    .sound(lessThanTink)
    .text(50, 50, 50)
    .background(20, 240, 20)
    .border(20, 255, 20)
    .size(45)
    .compile()
}

${
  rule()
    .itemClass("Contracts")
    .icon("White", "Cross")
    .text(50, 50, 50)
    .background(200, 200, 200)
    .border(20, 255, 20)
    .size(45)
    .compile()
}

${
  rule()
    .itemClass("Blueprints")
    .sound(lessThanTink)
    .icon("Red", "Cross")
    .text(50, 50, 50)
    .background(150, 150, 150)
    .border(20, 255, 20)
    .size(45)
    .compile()
}

${
  // TODO make this super loud for bow gems
  rule(
    rule().itemClass("Skill Gems"),
    rule().itemClass("Support Gems")
  )
    .gemLevel(">=", 2)
    .gemLevel("<=", 19)
    .sound(wayLessThanTink)
    .icon("White", "Cross")
    .text(50, 50, 50)
    .background(20, 240, 20)
    .border(20, 255, 20)
    .size(45)
    .compile()
}

${
  rule(
    rule().itemClass("Skill Gems"),
    rule().itemClass("Support Gems")
  )
    .gemLevel(">=", 20)
    .sound(wayLessThanTink)
    .icon("Red", "Cross")
    .text(50, 50, 50)
    .background(20, 240, 20)
    .border(20, 255, 20)
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
    .text(50, 50, 50)
    .background(20, 240, 20)
    .border(20, 255, 20)
    .size(45)
    .compile()
  //</editor-fold>
} 
`;

// Write filter to output directory
fs.writeFileSync(path.join(__dirname, `../../output/${filterName}.filter`), getFilter());
