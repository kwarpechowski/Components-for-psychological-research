import { Group }  from "./Group";
import { ElementInterface } from "../interfaces/elementInterface";
import { DrawHelper } from "../helpers/DrawHelper";
import { Position }  from "./Position";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";

export class Element implements ElementInterface {
  index: number;
  element: SVGElement;
  private group: Group;
  private isActive: boolean;
  static activeClass: string = "active";
  private size: number;

  constructor(group: Group, size: number, index: number) {
    this.group = group;
    this.size = size;
    this.index = index;
  }

  private getTitle(): string {
    return `Element ${this.index}`;
  }

  private bindEvents() {
    let source = Observable.fromEvent(this.element, "click");

    source.subscribe(() => {
      if (this.isActive) {
        this.group.unsetActive();
      } else {
        this.group.setActive(this);
      }
    });
  }

  create(): SVGElement {
    let position: Position = this.group.getElementPosition();

    this.element = DrawHelper.createElement("a");
    this.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", "javascript:;");
    this.element.setAttributeNS("http://www.w3.org/1999/xlink", "title", this.getTitle());
    this.element.setAttribute("class", this.group.config.classes.circlePrefix + this.index);

    let c = DrawHelper.createElement("circle");
    c.setAttribute("cx", position.x);
    c.setAttribute("cy", position.y);
    c.setAttribute("r", this.size.toString());

    this.bindEvents();

    this.element.appendChild(c);

    return this.element;
  }

  enable() {
    if (!this.isActive) {
      this.isActive = true;
      let classes = this.element.getAttribute("class");
      if (classes) {
        classes += " " + Element.activeClass;
      } else {
        classes = Element.activeClass;
      }
      this.element.setAttribute("class", classes);
    }
  }

  disable() {
    if (this.isActive) {
      this.isActive = false;
      let classes = this.element.getAttribute("class");
      if (classes) {
         classes = classes.replace(Element.activeClass, "");
      }
      this.element.setAttribute("class", classes);
    }
  }
}