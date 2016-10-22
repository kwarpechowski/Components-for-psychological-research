/// <reference path="../types/svgjs.d.ts" />
import { Config }  from './config';
import { Line } from './model/line';
import { Group } from './model/group';

export class Drawer {
  private mainElement: svgjs.Element;
  private draw: svgjs.Doc = SVG('drawing'); //z konfigu pobierac

  constructor() {
    this.mainElement = this.draw.group();
  }

  private drawAxis(): void {
    let lineHorizontal = this.mainElement.line(0, 0, 600, 0).stroke({ width: 1 })
    lineHorizontal.center(Config.R, Config.R);

    let lineVertical = this.mainElement.line(0, 0, 0, 600).stroke({ width: 1 })
    lineVertical.center(Config.R, Config.R);
  }

  run() : void {
    this.drawAxis();
    this.mainElement.move(250, 250);

    for(var i =1; i <= Config.getElementsCount(); i++) {
      new Group(this.mainElement, i)
      //TODO KW usunac mainElement i confgi z konstruktorow, moze statyki
    }
  }
}
