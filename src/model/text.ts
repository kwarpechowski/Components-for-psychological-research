import { Config }  from "../config";
import { Group }  from "./Group";
import { ElementInterface } from "../interface/ElementInterface";

import { Subject } from "rx";

export class Text implements ElementInterface {
  static spacerSize: number = 40;
  element: SVGGElement;
  index: number;
  group: Group;
  sizeX: number;
  sizeY: number;

  constructor(group: Group) {
    this.group = group;
    this.index = group.index;
  }

  create(): SVGGElement {

    let oy = Math.sin(this.group.getPosition());
    let ox = Math.cos(this.group.getPosition());
    this.group.odstep += Text.spacerSize;

    this.sizeY = oy * (this.group.config.R + this.group.odstep);
    this.sizeX = ox * (this.group.config.R + this.group.odstep);

    this.element = document.createElementNS("http://www.w3.org/2000/svg", "text");
    this.element.setAttribute("x", this.sizeX.toString());
    this.element.setAttribute("y", this.sizeY.toString());
    this.element.setAttribute("id", "text_" + this.index);

    let textNode = document.createTextNode(this.group.config.labels[this.index - 1]);
    this.element.appendChild(textNode);

    return this.element;

  }

  repaint(textSizer: Subject<number>): void {
    if (this.index > this.group.config.labels.length / 2) {
      let el = document.getElementById("text_" + this.index);
      let width = el.getBoundingClientRect().width;
      this.element.setAttribute("x", (this.sizeX - width).toString());

      textSizer.onNext(width);
    }
  }

}