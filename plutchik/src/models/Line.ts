export class Line {
  r: number;
  labels: Array<string>;
  private id: number;

  constructor(r: number, labels: Array<string>, id: number) {
    this.r = r;
    this.labels = labels;
    this.id = id;
  }

  getId(): number {
    return this.id;
  }

  toString = () : string => {
    return `${this.r} ${this.r} `;
  }
}