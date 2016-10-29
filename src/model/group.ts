import { Config }  from "../config";
import { Circle }  from "./Circle";
import { Text }  from "./Text";
import { ElementInterface } from "../interface/ElementInterface";
import { DrawHelper } from "../helpers/DrawHelper";
import { Drawer }  from "../drawer";

import { Observable, Subject } from "rx";


export class Group implements ElementInterface {
  element: SVGElement;
  index: number;
  config: Config;
  odstep: number = 0;
  changeObserver: Subject<any>;
  private circles: Array<Circle> = [];
  private text: Text;

  constructor(config: Config, index: number) {
    this.index = index;
    this.config = config;
    this.changeObserver = new Subject();
  }

  public create(): SVGElement {

    this.element  = DrawHelper.createElement("g");
    let classes = [
      this.config.classes.line,
      this.config.classes.line + "_" + this.index
    ];
    this.element.setAttribute("class", classes.join(" "));

    this.run();
    return this.element;
  }

  public getText(): Text {
    return this.text;
  }

  getPosition(): number {
    let cw = this.config.getQuarterCount();
    return (90 / cw) * (this.index - cw - 0.5) * Math.PI / 180;
  }

  private run(): void {
    this.config.getLines().forEach((line, index) => {
      let circle = new Circle(this, line.getSize(), index);
      this.circles.push(circle);
      this.element.appendChild(circle.create());
    });

    this.text = new Text(this);
  }

  setActive(circle: Circle) {
    this.circles.forEach(c => {
      c.disable();
    });
    circle.enable();

    this.changeObserver.onNext(circle);
  }
}