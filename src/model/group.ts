import { Config }  from "../config";
import { Circle }  from "./circle";
import { Text }  from "./text";
import { ElementInterface } from "../interface/ElementInterface";
import { DrawHelper } from "../helpers/DrawHelper";
import { Drawer }  from "../drawer";

export class Group implements ElementInterface {
  element: SVGElement;
  index: number;
  config: Config;
  odstep: number = 0;
  active: Circle = null;
  private circles: Array<Circle> = [];
  static list: Array<Group> = [];
  static isAllCheckedEvents: Array<Function> = [];

  static isAllChecked(): void {
    let count = Group.list.filter(group => {
      return group.active === null;
    }).length;
    if (!count) {
      Group.isAllCheckedEvents.forEach((f) => {
        f();
      });
    }
  }

  constructor(index: number) {
    let main =  Drawer.mainElement;

    this.element  = DrawHelper.createElement("g");
    let classes = [
      Config.classes.line,
      Config.classes.line + "_" + index
    ];
    this.element.setAttribute("class", classes.join(" "));

    main.appendChild(this.element);
    this.index = index;
    this.run();
    Group.list.push(this);
  }

  getPosition(): number {
    let cw = Config.getQuarterCount();
    return (90 / cw) * (this.index - cw - 0.5) * Math.PI / 180;
  }

  private run(): void {
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
    this.active = circle;
    Group.isAllChecked();
  }
}