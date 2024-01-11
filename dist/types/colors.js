"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colors = void 0;
// class to hold preset colors for easier usage with background, borders, and text
class Colors {
    constructor(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a == undefined ? 240 : a;
    }
}
exports.Colors = Colors;
Colors.black = new Colors(0, 0, 0);
Colors.white = new Colors(240, 240, 240);
Colors.lightGrey = new Colors(180, 180, 180);
Colors.grey = new Colors(140, 140, 140);
Colors.darkGrey = new Colors(90, 90, 90);
Colors.red = new Colors(240, 20, 20);
Colors.green = new Colors(20, 240, 20);
Colors.blue = new Colors(20, 20, 240);
Colors.purple = new Colors(186, 85, 211);
Colors.brown = new Colors(160, 82, 45);
Colors.gold = new Colors(255, 215, 0);
Colors.uniqueColor = new Colors(175, 96, 37);
Colors.rareColor = new Colors(255, 255, 119);
Colors.magicColor = new Colors(136, 136, 255);
Colors.normalColor = new Colors(200, 200, 200);
Colors.empty = new Colors(0, 0, 0);
//# sourceMappingURL=colors.js.map