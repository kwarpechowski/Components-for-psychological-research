export class Line {
  private size: number;
  private color: string;
  constructor(size: number, color: string) {
  	this.size = size;
  	this.color = color;
  }
  getColor(): string {
  	return this.color;
  }
  getSize(): number {
  	return this.size;
  }
};