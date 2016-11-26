export class Line {
  private r: number;
  public labels: Array<string>;
  private id: number;

  constructor(r: number, labels: Array<string>, id: number) {
    this.r = r;
    this.labels = labels;
    this.id = id;
  }

  getR(): number {
    return this.r;
  }

  getId(): number {
    return this.id;
  }

  public toString = () : string => {
    return `${this.getR()} ${this.getR()} `;
  }
}