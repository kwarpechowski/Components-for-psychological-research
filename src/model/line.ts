export class Line {
  static lineSize: number = 0;
  private size: number;

  constructor(size: number) {
    this.size = size;
    Line.lineSize += size * 2; // TODO Magic numbers
  }
  getSize(): number {
    return this.size;
  }
};