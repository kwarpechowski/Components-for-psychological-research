/// <reference path="../../types/svgjs.d.ts" />
import { Config }  from '../config';
import { Circle }  from './circle';

export class Group {
  public element: svgjs.Element;
  public index: number;
  public config: Config;

  constructor(element: svgjs.Element, index: number, config: Config) {
    this.element = element.group().addClass('line');
    this.index = index;
    this.config = config;
  }

  getPosition() : number {
    let cw = this.config.getQuarterCount();
    return (90 / cw) * (this.index - cw - 0.5) * Math.PI / 180;
  }

  run(): void {
    let odstep = 0;

    this.config.getLines().forEach((line, index) => {
      let size = line.getSize();
      new Circle(this, size, odstep, index);
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