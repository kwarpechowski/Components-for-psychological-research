import { Config }  from "../config";
import { Group }  from "./group";
import { ElementInterface } from "../interface/ElementInterface";

export class Circle implements ElementInterface {
  element: SVGGElement;
  index: number;
  group: Group;
  static activeClass: string = "active";

  constructor(group: Group, size: number, index: number) {
    this.group = group;
    this.index = index;

    let oy = Math.sin(this.group.getPosition());
    let ox = Math.cos(this.group.getPosition());
    this.group.odstep += size * 2; // TODO KW magic numbers

    let sizeY = oy * (Config.R + this.group.odstep);
    let sizeX = ox * (Config.R + this.group.odstep);

    this.element = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    this.element.setAttribute("cx", sizeX.toString());
    this.element.setAttribute("cy", sizeY.toString());
    this.element.setAttribute("r", size.toString());
    this.element.setAttribute("class", Config.classes.circlePrefix + index);

    this.bindEvents();

    this.group.element.appendChild(this.element);
  }

  bindEvents(): void {
    this.element.addEventListener("click", () => {
      this.group.setActive(this);
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