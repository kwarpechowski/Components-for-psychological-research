import { Config }  from "../config";
import { Group }  from "./group";
import { ElementInterface } from "../interface/ElementInterface";

export class Text implements ElementInterface {
  static maxWidth: number = 0;
  static spacerSize: number = 40;
  element: SVGGElement;
  index: number;
  group: Group;

  constructor(group: Group, index: number) {
    this.group = group;
    this.index = index;

    let oy = Math.sin(this.group.getPosition());
    let ox = Math.cos(this.group.getPosition());
    this.group.odstep += Text.spacerSize;

    let sizeY = oy * (Config.R + this.group.odstep);
    let sizeX = ox * (Config.R + this.group.odstep);

    this.element = document.createElementNS("http://www.w3.org/2000/svg", "text");
    this.element.setAttribute("x", sizeX.toString());
    this.element.setAttribute("y", sizeY.toString());
    this.element.setAttribute("id", "text_" + this.index);

    let textNode = document.createTextNode(Config.labels[this.index - 1]);
    this.element.appendChild(textNode);

    this.group.element.appendChild(this.element);

    if (index > Config.labels.length / 2) {
      let el = document.getElementById("text_" + this.index);
      let width = el.getBoundingClientRect().width;
      if (Text.maxWidth < width) {
        Text.maxWidth = width;
      }
      this.element.setAttribute("x", (sizeX - width).toString());
    }
  }

}