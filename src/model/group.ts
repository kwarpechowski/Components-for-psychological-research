/// <reference path="../../types/svgjs.d.ts" />
import { Config }  from '../config';
import { Circle }  from './circle';

export class Group {
  public element: svgjs.Element;
  public index: number;
  public config: Config;
  private circles: Array<Circle> = [];

  constructor(element: svgjs.Element, index: number) {
    this.element = element.group().addClass('line');
    this.index = index;
    this.run();
  }

  getPosition() : number {
    let cw = Config.getQuarterCount();
    return (90 / cw) * (this.index - cw - 0.5) * Math.PI / 180;
  }

  private run(): void {
    let odstep = 0;

    Config.getLines().forEach((line, index) => {
      let size = line.getSize();
      let circle = new Circle(this, size, odstep, index);
      this.circles.push(circle);
      odstep += size + 10;
    });

    // TODO KW zrobic element z ktorego bedzie dziedziczyc text oraz circle
    // 
    // let text = this.element.plain(this.config.labels[this.index-1]);
    // text.addClass('text');
    // text.center(this.config.R, this.config.R);
    // text.dx(ox * (this.config.R + odstep));
    // text.dy(oy * (this.config.R + odstep));
  }
}