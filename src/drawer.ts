import { Config }  from "./config";
import { Group } from "./model/Group";
import { Prompt } from "./model/Prompt";
import { DrawHelper } from "./helpers/DrawHelper";
import { GroupContainer } from "./GroupContainer";
import { Subject } from "rxjs/Subject";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";

export class Drawer {
  private mainElement: SVGGElement;
  private svg: SVGElement;
  private textSizer: Subject<any>;
  private maxTextWidth: number = 0;
  private gc: GroupContainer;
  private config: Config;
  private otherEmotion: Prompt;

  constructor(config: Config) {
    this.config = config;
    let container = document.getElementById(this.config.element);
    container.setAttribute("class", "gew-instance")
    this.svg = DrawHelper.createElement("svg");
    this.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    this.svg.setAttribute("version", "1.1");
    container.appendChild(this.svg);

    this.mainElement  = document.createElementNS("http://www.w3.org/2000/svg", "g");
    this.mainElement.setAttribute("class", this.config.classes.mainGroup);
    this.svg.appendChild(this.mainElement);

    this.textSizer = new Subject();

    this.textSizer.subscribe((n: number) => {
      if (n > this.maxTextWidth) {
        this.maxTextWidth = n;
      }
    });

    this.gc = new GroupContainer(this.config);
    this.otherEmotion = new Prompt();
    container.appendChild(this.otherEmotion.create());

  }

  private countLineSize(): number {
    let size = 0;

    this.config.getLines().forEach((line) => {
     size += line.getSize() * 2;
    });

    return size;
  }

  private getRealR(): number {
    return this.config.R + this.maxTextWidth + 50 + this.countLineSize();
  }

  private drawAxis(): void {
    if (this.config.showLines) {
      let size = this.getRealR();
      this.drawLine(size * -1, 0, this.config.R * -1, 0);
      this.drawLine(this.config.R, 0, size, 0);

      this.drawLine(0, size * -1, 0, this.config.R * -1);
      this.drawLine(0, this.config.R, 0 , size);
    }
  }

  private drawLine(x1: number, y1: number, x2: number, y2: number): void {
    let line = DrawHelper.createElement("line");
    line.setAttribute("class", this.config.classes.lineAxis);
    line.setAttribute("x1", x1.toString());
    line.setAttribute("y1", y1.toString());
    line.setAttribute("x2", x2.toString());
    line.setAttribute("y2", y2.toString());
    this.mainElement.appendChild(line);
  }

  private drawHeaders(): void {
    // TODO KW podzielic na dwie metody
    if (this.config.showHeader) {
      let headerTop = DrawHelper.drawHeader(this.config.R / 2 * -1, this.config.headerTop);
      let source = Observable.fromEvent(headerTop, "click");

      source.subscribe(() => {
        this.gc.clearAll();
      });

      this.mainElement.appendChild(headerTop);

      let headerBottom = DrawHelper.drawHeader(this.config.R / 2, this.config.headerBottom);
      headerBottom.setAttribute("title", "click if you feel other emotion"); // TODO KW translate
      let source2 = Observable.fromEvent(headerBottom, "click");
      source2.subscribe(() => {
        this.gc.clearAll();
        this.otherEmotion.show();
      });
      this.mainElement.appendChild(headerBottom);
    }
  }

  private drawBorder(): void {
    if (this.config.showBorder) {
      // let outsideBorder = DrawHelper.drawBorder(this.getRealR());
      // outsideBorder.setAttribute("class", this.config.classes.lineBorder);
      // this.mainElement.appendChild(outsideBorder);

      let insideBorder = DrawHelper.drawBorder(this.config.R);
      insideBorder.setAttribute("class", this.config.classes.lineBorder);
      this.mainElement.appendChild(insideBorder);
    }
  }

  private setPosition(): void {
    let halfWidth = this.getRealR();
    let width = halfWidth * 2;

    this.mainElement.setAttribute("style", `transform: translate(${halfWidth}px, ${halfWidth}px)`);
    this.svg.setAttribute("viewBox", `0 0 ${width} ${width}`);
  }

  run(): void {

    this.gc.create();

    this.gc.getGroups().forEach((group: Group) => {
      this.mainElement.appendChild(group.create());

      if (typeof this.config.checkedElements[group.index - 1] === "number") {
        group.setActiveIndex(this.config.checkedElements[group.index - 1]);
      }

      let text = group.getText();
      this.mainElement.appendChild(text.create());
      text.repaint(this.textSizer);
    });

    this.setPosition();
    this.drawAxis();
    this.drawHeaders();
    this.drawBorder();
  }

  circleClick(): any {
    return this.gc.changeObserver;
  }

  isAllChecked(f: Function): Subject<any> {
    return this.gc.completeObserver;
  }
}
