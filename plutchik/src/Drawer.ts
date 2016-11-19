import { Config }  from "./Config";
import { Point }  from "./Point";
import { Line }  from "./Line";
import { Option }  from "./Option";
import { Element }  from "./Element";
import {DrawHelper} from "./helpers/DrawHelper";

export class Drawer {
    private mainElement: SVGGElement;
    private svg: SVGElement;
    private defs: SVGElement;
    private config: Config;
    private centerPoint: Point;

    constructor(config: Config) {
        this.config = config;

         this.centerPoint = new Point(250, 250);


        let container = document.getElementById(this.config.element);
        container.setAttribute("class", "gew-instance")
        this.svg = DrawHelper.createElement("svg");
        this.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        this.svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        this.svg.setAttribute("version", "1.1");
        this.svg.setAttribute("viewBox", `0 0 ${this.centerPoint.getX() * 2} ${this.centerPoint.getY() * 2}`)


        this.defs = DrawHelper.createElement("defs");
        this.svg.appendChild(this.defs);
        container.appendChild(this.svg);

        let labels = ["ecstasy", "admiration", "terror", "amazement", "grief", "loathing", "rage", "vigilance"];

        let R = new Array<Line>();
        R.push(new Line(100, labels, "one"));
        R.push(new Line(156, labels, "two"));
        R.push(new Line(250, labels, "three"));
        R.push(new Line(250, labels, "four"));

        let positions = this.createCoords(R[0].getR(), 8, undefined);
        let positionsPart = this.createCoords(R[0].getR(), 8, 22.5);
        let positionsTwo = this.createCoords(R[1].getR(), 16, undefined);
        let positionsTwoPart = this.createCoords(R[1].getR(), 16, 11.5);
        let positionsFour = this.createCoords(R[3].getR(), 16, 12);

        for (let i = 0; i < 8; i++) {

          let index = (i === 0 ?  8 - 1 : i - 1 );

          let elements = new Array<Element>();

          elements.push(new Element({
            i: i,
            line: R[0],
            path: `M${this.centerPoint.getX()} ${this.centerPoint.getY()}
             L${positions[index].getX()},${positions[index].getY()}
             A ${R[0].getR()} ${R[0].getR()} 0 0,1 ${positions[i].getX()} ${positions[i].getY()}`,
            textPath: ``
          }));

          elements.push(new Element({
            i: i,
            line: R[1],
            path: `M${positions[i].getX()} ${positions[i].getY()}
             A ${this.centerPoint.getX()} ${this.centerPoint.getY()} 0 0,0 ${positionsTwo[i * 2].getX()} ${positionsTwo[i * 2].getY()}
             A ${R[1].getR()} ${R[1].getR()} 0 0,0 ${positionsTwo[index * 2 + 1].getX()} ${positionsTwo[index * 2 + 1].getY()}
             A ${this.centerPoint.getX()} ${this.centerPoint.getY()} 1 0,0 ${positions[index].getX()} ${positions[index].getY()}
             A ${R[1].getR()} ${R[1].getR()} 1 0,1 ${positions[i].getX()} ${positions[i].getY()}`,
            textPath: ``
          }));

          index = (i === 0 ?  15 : i * 2 - 1 );

          elements.push(new Element({
            i: i,
            line: R[2],
            path: `M ${positionsTwo[i * 2].getX()} ${positionsTwo[i * 2].getY()}
             A 450 450 0 0,0 ${positionsFour[i * 2].getX()} ${positionsFour[i * 2].getY()}
             A 450 450 0 0,0 ${positionsTwo[index].getX()} ${positionsTwo[index].getY()}
             A ${R[1].getR()} ${R[1].getR()} 1 0,1 ${positionsTwo[i * 2].getX()} ${positionsTwo[i * 2].getY()}`,
            textPath: ``
          }));

          index = (i === 7 ?  0 : i * 2 + 2 );
          elements.push(new Element({
            i: i,
            line: R[3],
            path: `M ${positionsFour[i * 2].getX()} ${positionsFour[i * 2].getY()}
             A ${this.centerPoint.getX()} ${this.centerPoint.getY()} 0 0,1 ${positionsFour[index].getX()} ${positionsFour[index].getY()}
             A 450 450 1 0,0 ${positions[i].getX()} ${positions[i].getY()}
             A 450 450 0 0,0 ${positionsFour[i * 2].getX()} ${positionsFour[i * 2].getY()}`,
            textPath: ``
          }));

          this.render(elements);
        }

    }

    render(elements: Array<Element>) {
      elements.forEach((element) => {
        this.defs.appendChild(element.getDef());
        this.svg.appendChild(element.draw());
      });
    }

    getPosition(index: number, max: number, move: number): number {
      if (!move) {
        move = 0;
      }
      let cw = max / 4;
      return ((90 / cw) * (index - cw - 0.45) - move) * Math.PI / 180;
    }

    createCoords(r: number, max: number, move: number): Array<Point> {
        let tab = new Array<Point>();

        for (let i = 1; i <= max; i++) {
            let position = this.getPosition(i, max, move);
            tab.push(new Point(
              this.centerPoint.getX() + Math.cos(position) * r,
              this.centerPoint.getY() + Math.sin(position) * r,
            ));
        }

        return tab;
    }

    run(): void {
        console.log("run");
    }

}