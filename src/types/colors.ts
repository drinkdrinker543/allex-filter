// class to hold preset colors for easier usage with background, borders, and text
export class Colors {
  public r: number
  public g: number
  public b: number
  public a: number

  constructor(r: number, g:number, b:number, a?:number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a == undefined ? 240 : a;
  }

  static readonly black = new Colors(0, 0, 0)
  static readonly white = new Colors(240, 240, 240)
  static readonly lightGrey = new Colors(180, 180, 180)
  static readonly grey = new Colors(140, 140, 140)
  static readonly darkGrey = new Colors(90, 90, 90)
  static readonly red = new Colors(240, 20, 20)
  static readonly green = new Colors(20, 240, 20)
  static readonly blue = new Colors(20, 20, 240)
  static readonly purple = new Colors(186, 85, 211)
  static readonly brown = new Colors(160, 82, 45)
  static readonly gold = new Colors(255, 215, 0)
  static readonly uniqueColor = new Colors(175, 96, 37)
  static readonly rareColor = new Colors(255,255,119)
  static readonly magicColor = new Colors(136,136,255)
  static readonly normalColor = new Colors(200,200,200)
  static readonly gucciPurple = new Colors(250, 0, 125) // used for leveling currency
  static readonly gearingColor = new Colors(170, 158, 130)
  static readonly empty = new Colors(0, 0, 0)
}