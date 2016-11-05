import { Config }  from "../config";
import { Element }  from "./Element";
import { Position }  from "./Position";
import { Text }  from "./Text";
import { ElementInterface } from "../interface/ElementInterface";
import { DrawHelper } from "../helpers/DrawHelper";

import { Subject } from "rxjs/Subject";

export class Group implements ElementInterface {
  element: SVGElement;
  index: number;
  config: Config;
  private odstep: number = 0;
  changeObserver: Subject<any>;
  private elements: Array<Element> = [];
  private text: Text;
  private activeElement: Element; // TODO KW a moze usunac ta jakos zmienna
  private changed: boolean = false;

  constructor(config: Config, index: number) {
    this.index = index;
    this.config = config;
    this.changeObserver = new Subject();
  }

  getActiveElement(): Element {
    return this.activeElement;
  }

  getActiveElementIndex(): number {
    if (this.activeElement) {
      return this.activeElement.index;
    }
    return null;
  }

  isChanged(): boolean {
    return this.changed;
  }


  create(): SVGElement {

    this.element  = DrawHelper.createElement("g");
    let classes = [
      this.config.classes.line,
      this.config.classes.line + "_" + this.index
    ];
    if (this.index % 2 === 0 ) {
      classes.push("even");
    } else {
      classes.push("odd");
    }
    this.element.setAttribute("class", classes.join(" "));

    this.run();
    return this.element;
  }

  getText(): Text {
    return this.text;
  }

  getPosition(): number {
    let cw = this.config.getQuarterCount();
    return (90 / cw) * (this.index - cw - 0.5) * Math.PI / 180;
  }

  private run(): void {
    this.config.getLines().forEach((line, index) => {
      let size = line.getSize();
      this.odstep += size * 2; // TODO KW magic numbers
      let element = new Element(this, size, index);
      this.elements.push(element);
      this.element.appendChild(element.create());
    });

    this.odstep += Text.spacerSize;
    this.text = new Text(this.config.labels[this.index - 1], this);
  }

  setActive(element: Element): void {
    // no ale nie mozna ustawiac actibe element dopoki nie ma pewnosci, ze mozna, a to dopiero po change observer sie zdecyduje
    if (this.activeElement) {
      this.changed = true;
    }
    this.activeElement = element;
    this.changeObserver.next(this);
  }

  unsetActive(): void {
    if (this.activeElement) {
      this.disable();
      this.changeObserver.next(this);
    }
  }

  public enable(): void {
    if (this.activeElement) {
      this.elements.forEach(c => {
        c.disable();
      });
      this.activeElement.enable();
    }
  }

  disable() {
    if (this.activeElement) {
      this.activeElement.disable();
      this.activeElement = null;
      this.changed = false;
    }
  }

  getElementPosition(): Position {
    let oy = Math.sin(this.getPosition());
    let ox = Math.cos(this.getPosition());

    let sizeY = oy * (this.config.R + this.odstep);
    let sizeX = ox * (this.config.R + this.odstep);

    return {
      x: sizeX.toString(),
      y: sizeY.toString()
    };
  }

  removeTemp() {
    this.activeElement = null;
  }
}