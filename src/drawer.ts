/// <reference path="../types/svgjs.d.ts" />
import { Config }  from './config';
import { Line }  from './model/line';


export class Drawer {
  private config: Config;
  private mainElement: svgjs.Element;
  private draw: svgjs.Doc = SVG('drawing');


  constructor(config: Config) {
    this.config = config;
    this.mainElement = this.draw.group();
  }

  getLines(): Array<Line> {
    let lines: Array<Line> = [];
    lines.push(new Line(10, 'yellow'));
    lines.push(new Line(20, 'green'));
    lines.push(new Line(30, 'pink'));
    lines.push(new Line(40, 'blue'));
    lines.push(new Line(50, 'gold'));
    return lines;
  }

  run() : void {
    var numberPoints = this.config.labels.length;
    var k = 360/numberPoints;

    this.mainElement.move(300, 300);

    for(var i =1; i <= numberPoints; i++) {
      var odstep = 0;

      let group = this.mainElement.group().addClass('line');
      this.getLines().forEach((line, index) => {

        let size : number = line.getSize();
        let circle = group.ellipse(size, size);

        circle.addClass('element_' + index);
        circle.fill(line.getColor());
        circle.center(this.config.R, this.config.R);
        var y = Math.sin(k*i*Math.PI/180) * (this.config.R + odstep);
        var x = Math.cos(k*i*Math.PI/180) * (this.config.R + odstep);
        circle.dx(x);
        circle.dy(y);
        odstep += size + 10;
      });

      var text = group.plain(this.config.labels[i-1]);
      text.fill('#000');
      text.addClass('text');
      text.center(this.config.R, this.config.R);
      var y = Math.sin(k*i*Math.PI/180) * (this.config.R + odstep);
      var x = Math.cos(k*i*Math.PI/180) * (this.config.R + odstep);
      text.dx(x);
      text.dy(y);
    }
  }

}