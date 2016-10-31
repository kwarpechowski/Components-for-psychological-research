import { Config }  from "../config";
import { Group }  from "./Group";
import { ElementInterface } from "../interface/ElementInterface";

import { Subject } from "rx";

export class Text implements ElementInterface {
  static spacerSize: number = 40;
  element: SVGGElement;
  index: number;
  group: Group;
  private txt: string;

  constructor(txt: string, group: Group) {
    this.group = group;
    this.index = group.index;
    this.txt = txt;
  }

  create(): SVGGElement {

    let position = this.group.getElementPosition();

    this.element = document.createElementNS("http://www.w3.org/2000/svg", "text");
    this.element.setAttribute("x", position.x);
    this.element.setAttribute("y", position.y);
    this.element.setAttribute("id", "text_" + this.index);

    let textNode = document.createTextNode(this.txt);
    this.element.appendChild(textNode);

    return this.element;
  }

  repaint(textSizer: Subject<number>): void {
    if (this.index > this.group.config.labels.length / 2) {
      let el = document.getElementById("text_" + this.index);
      let width = el.getBoundingClientRect().width;
      let x = parseInt(el.getAttribute("x"), 10);
      el.setAttribute("x", (x - width).toString());
      textSizer.onNext(width);
    }
  }

}