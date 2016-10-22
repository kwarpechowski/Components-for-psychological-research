/// <reference path="../../types/svgjs.d.ts" />
import { Config }  from '../config';
import { Circle }  from './circle';
import { ElementInterface } from '../interface/ElementInterface';

export class Group implements ElementInterface {
  element: svgjs.Element;
  index: number;
  config: Config;
  odstep: number = 0;
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
      this.circles.push(new Circle(this, line.getSize(), index));
    });

    // TODO KW zrobic element z ktorego bedzie dziedziczyc text oraz circle
    // 
    // let text = this.element.plain(this.config.labels[this.index-1]);
    // text.addClass('text');
    // text.center(this.config.R, this.config.R);
    // text.dx(ox * (this.config.R + odstep));
    // text.dy(oy * (this.config.R + odstep));
  }

  setActive(circle: Circle) {
    this.circles.forEach(c => {
      c.disable();
    });
    circle.enable();
  }
}