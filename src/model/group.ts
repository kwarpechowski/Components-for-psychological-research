import { Config }  from "../config";
import { Circle }  from "./circle";
import { Text }  from "./text";
import { ElementInterface } from "../interface/ElementInterface";

export class Group implements ElementInterface {
  element: SVGGElement;
  index: number;
  config: Config;
  odstep: number = 0;
  private circles: Array<Circle> = [];

  constructor(index: number) {
    let main =  document.getElementsByClassName(Config.classes.mainGroup)[0]; // TODO KW magic string, szukac tylko po configu

    this.element  = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let classes = [
      Config.classes.line,
      Config.classes.line + "_" + index
    ];
    this.element.setAttribute("class", classes.join(" "));

    main.appendChild(this.element);
    this.index = index;
    this.run();
  }

  getPosition(): number {
    let cw = Config.getQuarterCount();
    return (90 / cw) * (this.index - cw - 0.5) * Math.PI / 180;
  }

  private run(): void {
    let odstep = 0;

    Config.getLines().forEach((line, index) => {
      this.circles.push(new Circle(this, line.getSize(), index));
    });

    new Text(this, this.index);
  }

  setActive(circle: Circle) {
    this.circles.forEach(c => {
      c.disable();
    });
    circle.enable();
  }
}