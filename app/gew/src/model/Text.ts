import { Group }  from "./Group";
import { ElementInterface } from "../interfaces/elementInterface";

import { Subject } from "rxjs/Subject";

export class Text implements ElementInterface {
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
    let classes = ["text-label"];

    if (this.txt.indexOf("\n") >= 0) {
      classes.push("multiline");
    }

    if (this.index > this.group.config.labels.length / 2) {
      classes.push("right");
    }

    if (this.index % 2 === 0) {
      classes.push("even");
    } else {
      classes.push("odd");
    }

    this.element = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    this.element.setAttribute("x", position.x);
    this.element.setAttribute("y", position.y);
    this.element.setAttribute("id", "text_" + this.index);
    this.element.setAttribute("class", classes.join(" "));
    this.element.setAttribute("width", "1000");

    let p = document.createElementNS("http://www.w3.org/1999/xhtml", "p");
    p.innerHTML = this.txt.replace("\n", "<br/>");
    this.element.appendChild(p);

    return this.element;
  }

  repaint(textSizer: Subject<number>) {
    // TODO KW - przy muliinstacne będzie zle
    let el = document.getElementById("text_" + this.index);
    let size = el.getBoundingClientRect();
    let x = parseInt(el.getAttribute("x"), 10);
    let y = parseInt(el.getAttribute("y"), 10);

    let p: HTMLElement = <HTMLElement> el.childNodes[0];
    let pSize = p.getBoundingClientRect();
    let pHeight = pSize.height;
    let pWidth = pSize.width;

    let partNumber = this.index / (this.group.config.labels.length / 4);
    if (partNumber <= 1 || partNumber > 3) {
      y -= pHeight;
    }

    let rotate = 0;
    let translate = "";
    const part =  Math.ceil(this.index / (this.group.config.labels.length / 4));
    const num = this.index % 5 || 5;
    let deg = 13;

    if (this.group.config.isMobile) {
      if (part === 1) {
          rotate =  -(Math.abs(num - 5) * deg + deg);
          translate = `${deg}px,50%`;
          if (this.group.config.isMobile) {
              translate = "-100%,-50%";
              rotate = 180 + rotate;
          }
      }else if (part === 2) {
          rotate =  num * deg;
          translate = "0%,-50%";
          if (this.group.config.isMobile) {
              translate = "-100%,50%";
              console.log(rotate);
              rotate = 180 + rotate;
          }
      }else if (part === 3) {
          rotate =  -(Math.abs(num - 5) * deg + deg);
          translate = "-100%,-50%";
      }else if (part === 4) {
          rotate =  num * 13;
          translate = `calc(-100% - ${deg}px),50%`;
      }
    } else {
        if (this.index > this.group.config.labels.length / 2) {
            x -= pWidth;
            textSizer.next(pWidth);
        }
    }

    el.setAttribute("x", x.toString());
    el.setAttribute("y", y.toString());
    el.setAttribute("width", pWidth.toString());
    el.setAttribute("height", pHeight.toString());
    textSizer.next(pWidth);

    setTimeout(() => {
      el.setAttribute("style", `transform: rotate(${rotate}deg)  translate(${translate})`);
    })
  }

}