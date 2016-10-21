/// <reference path="../types/svgjs.d.ts" />
import { Config }  from './config';
import { Line } from './model/line';
import { Group } from './model/group';

export class Drawer {
  private config: Config;
  private mainElement: svgjs.Element;
  private draw: svgjs.Doc = SVG('drawing'); //z konfigu pobierac

  constructor(config: Config) {
    this.config = config;
    this.mainElement = this.draw.group();
  }

  private drawAxis(): void {
    let lineHorizontal = this.mainElement.line(0, 0, 600, 0).stroke({ width: 1 })
    lineHorizontal.center(this.config.R, this.config.R);

    let lineVertical = this.mainElement.line(0, 0, 0, 600).stroke({ width: 1 })
    lineVertical.center(this.config.R, this.config.R);
  }

  run() : void {
    this.drawAxis();
    this.mainElement.move(250, 250);

    let cw = this.config.getElementsCount() / 4; //a co jak nie bedzie calkowita


    for(var i =1; i <= this.config.getElementsCount(); i++) {
       //let groupInstance = new Group(this.mainElement);

      let position = (90 / cw) * (i - cw - 0.5) * Math.PI / 180;

      let oy = Math.sin(position);
      let ox = Math.cos(position);

      let odstep = 0;

      let group = this.mainElement.group().addClass('line');
      this.config.getLines().forEach((line, index) => {

        let size : number = line.getSize();
        let circle = group.ellipse(size, size);

        circle.addClass('element_' + index);
        circle.fill(line.getColor());
        circle.center(this.config.R, this.config.R);

        circle.dx(ox * (this.config.R + odstep));
        circle.dy(oy * (this.config.R + odstep));


        circle.click(() => {
          console.log('clicked', i, index);
        });

        odstep += size + 10;
      });

      let text = group.plain(this.config.labels[i-1]);
      text.addClass('text');
      text.center(this.config.R, this.config.R);
      text.dx(ox * (this.config.R + odstep));
      text.dy(oy * (this.config.R + odstep));
    }
  }
}
