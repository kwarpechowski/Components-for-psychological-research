import { Config }  from "./config";
import { Line } from "./model/line";
import { Group } from "./model/group";
import { Circle } from "./model/circle";
import { Text } from "./model/text";
import { DrawHelper } from "./helpers/DrawHelper";

export class Drawer {
  static mainElement: SVGGElement;
  private svg: SVGElement;

  constructor() {
    let container = document.getElementById(Config.element);
    this.svg = DrawHelper.createElement("svg");
    this.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    this.svg.setAttribute("version", "1.1");
    this.svg.setAttribute("class", "gew-instance");
    container.appendChild(this.svg);

    let g  = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", Config.classes.mainGroup);
    this.svg.appendChild(g);
    Drawer.mainElement = g;
  }

  private countLineSize(): number {
    let size = 0;

    Config.getLines().forEach((line  ) => {
     size += line.getSize() * 2;
    });

    return size;
  }

  private getRealR(): number {
    return Config.R + Text.maxWidth + Text.spacerSize + this.countLineSize();
  }

  private drawAxis(): void {
    if (Config.showLines) {
      let size = this.getRealR();
      this.drawLine(size * -1, 0, Config.R * -1, 0);
      this.drawLine(Config.R, 0, size, 0);

      this.drawLine(0, size * -1, 0, Config.R * -1);
      this.drawLine(0, Config.R, 0 , size);
    }
  }

  private drawLine(x1: number, y1: number, x2: number, y2: number): void {
    let line = DrawHelper.createElement("line");
    line.setAttribute("class", Config.classes.lineAxis);
    line.setAttribute("x1", x1.toString());
    line.setAttribute("y1", y1.toString());
    line.setAttribute("x2", x2.toString());
    line.setAttribute("y2", y2.toString());
    Drawer.mainElement.appendChild(line);
  }

  private drawHeaders(): void {
    if (Config.showHeader) {
      let headerTop = DrawHelper.drawHeader(Config.R / 2 * -1, Config.headerTop);
      let headerBottom = DrawHelper.drawHeader(Config.R / 2, Config.headerBottom);

      Drawer.mainElement.appendChild(headerTop);
      Drawer.mainElement.appendChild(headerBottom);
    }
  }

  private drawBorder(): void {
    if (Config.showBorder) {
      let outsideBorder = DrawHelper.drawBorder(this.getRealR());
      Drawer.mainElement.appendChild(outsideBorder);

      let insideBorder = DrawHelper.drawBorder(Config.R);
      Drawer.mainElement.appendChild(insideBorder);
    }
  }

  private setPosition(): void {
    let halfWidth = this.getRealR();
    let width = halfWidth * 2;

    Drawer.mainElement.setAttribute("style", `transform: translate(${halfWidth}px, ${halfWidth}px)`);
    this.svg.setAttribute("viewBox", `0 0 ${width} ${width}`);
  }

  run(): void {

    for (let i = 1; i <= Config.getElementsCount(); i++) {
      new Group(i);
    }

    this.setPosition();
    this.drawAxis();
    this.drawHeaders();
    this.drawBorder();
  }

  circleClick(f: Function): void {
    Circle.clickEvents.push(f);
  }

  isAllChecked(f: Function): void {
    Group.isAllCheckedEvents.push(f);
  }
}
