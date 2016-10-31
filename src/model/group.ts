import { Config }  from "../config";
import { Circle }  from "./Circle";
import { Position }  from "./Position";
import { Text }  from "./Text";
import { ElementInterface } from "../interface/ElementInterface";
import { DrawHelper } from "../helpers/DrawHelper";
import { Drawer }  from "../drawer";

import { Observable, Subject } from "rx";


export class Group implements ElementInterface {
  element: SVGElement;
  index: number;
  config: Config;
  private odstep: number = 0;
  changeObserver: Subject<any>;
  private circles: Array<Circle> = [];
  private text: Text;

  constructor(config: Config, index: number) {
    this.index = index;
    this.config = config;
    this.changeObserver = new Subject();
  }

  create(): SVGElement {

    this.element  = DrawHelper.createElement("g");
    let classes = [
      this.config.classes.line,
      this.config.classes.line + "_" + this.index
    ];
    this.element.setAttribute("class", classes.join(" "));

    this.run();
    return this.element;
  }

  getText(): Text {
    return this.text;
  }

  getPosition(): number {
    let cw = this.config.getQuarterCount();
    return (90 / cw) * (this.index - cw - 0.5) * Math.PI / 180;
  }

  private run(): void {
    this.config.getLines().forEach((line, index) => {
      let size = line.getSize();
      this.odstep += size * 2; // TODO KW magic numbers
      let circle = new Circle(this, size, index);
      this.circles.push(circle);
      this.element.appendChild(circle.create());
    });

    this.odstep += Text.spacerSize;
    this.text = new Text(this.config.labels[this.index - 1], this);
  }

  getElementPosition(): Position {
    let oy = Math.sin(this.getPosition());
    let ox = Math.cos(this.getPosition());

    let sizeY = oy * (this.config.R + this.odstep);
    let sizeX = ox * (this.config.R + this.odstep);

    return {
      x: sizeX.toString(),
      y: sizeY.toString()
    };
  }

  setActive(circle: Circle) {
    this.circles.forEach(c => {
      c.disable();
    });
    circle.enable();

    this.changeObserver.onNext(circle);
  }
}