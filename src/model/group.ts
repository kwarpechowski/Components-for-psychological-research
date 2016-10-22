import { Config }  from '../config';
import { Circle }  from './circle';
import { ElementInterface } from '../interface/ElementInterface';

export class Group implements ElementInterface {
  element: SVGGElement;
  index: number;
  config: Config;
  odstep: number = 0;
  private circles: Array<Circle> = [];

  constructor(index: number) {
    let main =  document.getElementsByClassName(Config.classes.mainGroup)[0]; //TODO KW magic string, szukac tylko po configu

    this.element  = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    //this.element.setAttribute('id', 'group_' + index);
    this.element.setAttribute('class', Config.classes.line);

    main.appendChild(this.element);
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