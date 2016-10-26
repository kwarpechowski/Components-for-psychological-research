import { Config }  from "../config";
import { Group }  from "./group";
import { ElementInterface } from "../interface/ElementInterface";
import { DrawHelper } from "../helpers/DrawHelper";

export class Circle implements ElementInterface {
  element: SVGElement;
  index: number;
  group: Group;
  static activeClass: string = "active";
  static clickEvents: Array<Function> = [];

  constructor(group: Group, size: number, index: number) {
    this.group = group;
    this.index = index;

    let oy = Math.sin(this.group.getPosition());
    let ox = Math.cos(this.group.getPosition());
    this.group.odstep += size * 2; // TODO KW magic numbers

    let sizeY = oy * (Config.R + this.group.odstep);
    let sizeX = ox * (Config.R + this.group.odstep);

    this.element = DrawHelper.createElement("a");
    this.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#");
    this.element.setAttribute("target", "_top");
    this.element.setAttribute("class", Config.classes.circlePrefix + index);

    let c = DrawHelper.createElement("circle");
    c.setAttribute("cx", sizeX.toString());
    c.setAttribute("cy", sizeY.toString());
    c.setAttribute("r", size.toString());

    this.bindEvents();

    this.element.appendChild(c);
    this.group.element.appendChild(this.element);
  }

  bindEvents(): void {
    this.element.addEventListener("click", () => {
      this.group.setActive(this);
      Circle.clickEvents.forEach(event => {
        event(this.group.index, this.index);
      });
    });
  }

  enable(): void {
    let classes = this.element.getAttribute("class");
    if (classes) {
      classes += " " + Circle.activeClass;
    } else {
      classes = Circle.activeClass;
    }
    this.element.setAttribute("class", classes);
  }

  disable(): void {
    let classes = this.element.getAttribute("class");
    if (classes) {
       classes = classes.replace(Circle.activeClass, "");
    }
    this.element.setAttribute("class", classes);
  }
}