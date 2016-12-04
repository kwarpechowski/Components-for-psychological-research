export class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  toString = () : string => {
    return `${this.x} ${this.y} `;
  }
}