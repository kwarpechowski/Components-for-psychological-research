import { Config }  from "./config";
import { Line } from "./model/line";
import { Group } from "./model/group";
import { Circle } from "./model/circle";

export class Drawer {
  private mainElement: SVGGElement;

  constructor() {
    let container = document.getElementById(Config.element);
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("version", "1.1");
    container.appendChild(svg);

    let g  = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", Config.classes.mainGroup);
    svg.appendChild(g);
    this.mainElement = g;
  }

  private drawLine(x1: number, y1: number, x2: number, y2: number): void {
    if (Config.showLines) {
      let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("class", Config.classes.lineAxis);
      line.setAttribute("x1", x1.toString());
      line.setAttribute("y1", y1.toString());
      line.setAttribute("x2", x2.toString());
      line.setAttribute("y2", y2.toString());
      this.mainElement.appendChild(line);
    }
  }

  private drawAxis(size: number): void {
    this.drawLine(size * -1, 0, size, 0);
    this.drawLine(0, size, 0, size * -1);
  }

  private setPosition(): void {
    let el = document.getElementsByClassName(Config.classes.mainGroup)[0];
    let width = el.getBoundingClientRect().width / 2; // ladniej mozna policzyc rozmiar
    this.drawAxis(width);
    el.setAttribute("style", `transform: translate(${width}px, ${width}px)`);
  }

  run(): void {

    for (let i = 1; i <= Config.getElementsCount(); i++) {
      new Group(i);
    }

    this.setPosition();
  }

  circleClick(f: Function): void {
    Circle.clickEvents.push(f);
  }

  isAllChecked(f: Function): void {
    Group.isAllCheckedEvents.push(f);
  }
}
