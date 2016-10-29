import { Group }  from "./Group";
import { ElementInterface } from "../interface/ElementInterface";
import { DrawHelper } from "../helpers/DrawHelper";

import { Observable } from "rx";

export class Circle implements ElementInterface {
  index: number;
  element: SVGElement;
  private isActive: boolean;
  private group: Group;
  static activeClass: string = "active";
  private size: number;

  constructor(group: Group, size: number, index: number) {
    this.group = group;
    this.size = size;
    this.index = index;
  }

  create(): SVGElement {
    let oy = Math.sin(this.group.getPosition());
    let ox = Math.cos(this.group.getPosition());
    this.group.odstep += this.size * 2; // TODO KW magic numbers

    let sizeY = oy * (this.group.config.R + this.group.odstep);
    let sizeX = ox * (this.group.config.R + this.group.odstep);

    this.element = DrawHelper.createElement("a");
    this.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", "javascript:;");
    this.element.setAttributeNS("http://www.w3.org/1999/xlink", "title", "xyz");
    this.element.setAttribute("class", this.group.config.classes.circlePrefix + this.index);

    let c = DrawHelper.createElement("circle");
    c.setAttribute("cx", sizeX.toString());
    c.setAttribute("cy", sizeY.toString());
    c.setAttribute("r", this.size.toString());

    this.bindEvents();

    this.element.appendChild(c);

    return this.element;
  }

  bindEvents(): void {
    let source = Observable.fromEvent(this.element, "click");

    let subscription = source.subscribe(() => {
      if (!this.isActive) {
        this.group.setActive(this);
      }
    });
  }

  enable(): void {
    if (!this.isActive) {
      this.isActive = true;
      let classes = this.element.getAttribute("class");
      if (classes) {
        classes += " " + Circle.activeClass;
      } else {
        classes = Circle.activeClass;
      }
      this.element.setAttribute("class", classes);
    }
  }

  disable(): void {
    if (this.isActive) {
      this.isActive = false;
      let classes = this.element.getAttribute("class");
      if (classes) {
         classes = classes.replace(Circle.activeClass, "");
      }
      this.element.setAttribute("class", classes);
    }
  }
}