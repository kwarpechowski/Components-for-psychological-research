export class Line {
  private r: number;
  public labels: Array<string>;
  private id: string;

  constructor(r: number, labels: Array<string>, id: string) {
    this.r = r;
    this.labels = labels;
    this.id = id;
  }

  getR(): number {
    return this.r;
  }

  getId(): string {
    return this.id;
  }

  public toString = () : string => {
    return `${this.getR()} ${this.getR()} `;
  }
}