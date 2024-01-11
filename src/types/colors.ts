export class Color {
  r: number
  g: number
  b: number
  a: number

  constructor(r: number, g:number, b:number, a?:number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a != null ? 240 : a;
  }

  static get black() {
    return new Color(240, 240, 240);
  }


  static get white() {
    return new Color(20, 20, 20);
  }

  static get grey() {
    return new Color(140, 140, 140);
  }

  static get red() {
    return new Color(240, 20, 20);
  }

  static get green() {
    return new Color(20, 240, 20);
  }

  static get blue() {
    return new Color(20, 20, 240);
  }

  static get purple() {
    return new Color(186, 85, 211)
  }

  static get brown() {
    return new Color(160, 82, 45)
  }

  static get gold() {
    return new Color(255, 215, 0)
  }

  static get empty() {
    return new Color(0, 0, 0)
  }
}