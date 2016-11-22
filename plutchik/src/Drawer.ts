import { Config }  from "./Config";
import { Point }  from "./Point";
import { Line }  from "./Line";
import { Option }  from "./Option";
import { Element }  from "./Element";
import {DrawHelper} from "./helpers/DrawHelper";
import { Subject } from "rxjs/Subject";

export class Drawer {
    private mainElement: SVGGElement;
    private svg: SVGElement;
    private defs: SVGElement;
    private config: Config;
    private centerPoint: Point;
    private changeObserver: Subject<Element>;

    constructor(config: Config) {
      this.config = config;
        this.changeObserver = new Subject<Element>();

      this.centerPoint = new Point(250, 250);

      let container = document.getElementById(this.config.element);
      container.setAttribute("class", "gew-instance")
      this.svg = DrawHelper.createElement("svg");
      this.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      this.svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
      this.svg.setAttribute("version", "1.1");
      this.svg.setAttribute("viewBox", "0 0 500 500");
      this.defs = DrawHelper.createElement("defs");
      this.svg.appendChild(this.defs);
      container.appendChild(this.svg);
    }

    createPath(i: number, p1: Point, p2: Point): string {
      let a: Point;
      let b: Point;
      let config = [0, 1, 2, 3];
      if (config.indexOf(i) >= 0) {
        a = p1;
        b = p2;
      } else {
        a = p2;
        b = p1;
      }
      return `M ${a} L ${b}`;
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

    runDefault(): void {

      let R = new Array<Line>();
      R.push(new Line(100, this.config.labels[0], "one"));
      R.push(new Line(156, this.config.labels[1], "two"));
      R.push(new Line(250, this.config.labels[2], "three"));
      R.push(new Line(250, this.config.labels[3], "four"));

      let positions = this.createCoords(R[0].getR(), 8, undefined);
      let positionsPart = this.createCoords(R[0].getR(), 8, 22.5);
      let positionsTwo = this.createCoords(R[1].getR(), 16, undefined);
      let positionsTwoPart = this.createCoords(R[1].getR(), 16, 11.5);
      let positionsFour = this.createCoords(R[3].getR(), 16, 12);

      for (let i = 0; i < 8; i++) {

        let index = (i === 0 ?  8 - 1 : i - 1);

        let elements = new Array<Element>();

        elements.push(this.createElement({
          i: i,
          line: R[0],
          path: `M ${this.centerPoint}
           L ${positions[index]}
           A ${R[0]} 0 0,1 ${positions[i]}`,
          textPath: this.createPath(i, this.centerPoint, positionsPart[i])
        }));

        elements.push(this.createElement({
          i: i,
          line: R[1],
          path: `M ${positions[i]}
           A ${this.centerPoint} 0 0,0 ${positionsTwo[i * 2]}
           A ${R[1]} 0 0,0 ${positionsTwo[index * 2 + 1]}
           A ${this.centerPoint} 1 0,0 ${positions[index]}
           A ${R[0]} 1 0,1 ${positions[i]}`,
          textPath: this.createPath(i, positionsPart[i], positionsTwoPart[i * 2])
        }));

        index = (i === 0 ?  15 : i * 2 - 1);

        elements.push(this.createElement({
          i: i,
          line: R[2],
          path: `M ${positionsTwo[i * 2]}
           A 450 450 0 0,0 ${positionsFour[i * 2]}
           A 450 450 0 0,0 ${positionsTwo[index]}
           A ${R[1]} 1 0,1 ${positionsTwo[i * 2]}`,
          textPath: this.createPath(i, positionsTwoPart[i * 2], positionsFour[i * 2])
        }));

        index = (i === 7 ?  0 : i * 2 + 2);
        elements.push(this.createElement({
          i: i,
          line: R[3],
          path: `M ${positionsFour[i * 2]}
           A ${this.centerPoint} 0 0,1 ${positionsFour[index]}
           A 450 450 1 0,0 ${positions[i]}
           A 450 450 0 0,0 ${positionsFour[i * 2]}`,
          textPath: this.createPath(i, positions[i], positionsFour[i * 2 + 1])
        }));

        this.render(elements);
      }
    }

    runMobile(): void {
      let R = new Array<Line>();
      R.push(new Line(50, this.config.labels[0], "one"));
      R.push(new Line(110, this.config.labels[1], "two"));
      R.push(new Line(175, this.config.labels[2], "three"));
      R.push(new Line(250, this.config.labels[3], "four"));

      let positions = this.createCoords(R[0].getR(), 8, undefined);
      let positionsPart = this.createCoords((R[0].getR() + R[1].getR()) / 2, 8, undefined);
      let positionsTwo = this.createCoords(R[1].getR(), 8, undefined);
      let positionsPartTwo = this.createCoords((R[1].getR() + R[2].getR()) / 2, 8, undefined);
      let positionsThree = this.createCoords(R[2].getR(), 8, undefined);
      let positionsPartThree = this.createCoords((R[2].getR() + R[3].getR()) / 2, 8, undefined);
      let positionsPartFour = this.createCoords((R[2].getR() + R[3].getR()) / 2 + 10, 8, 26);
      let positionsPartFourP = this.createCoords((R[2].getR() + R[3].getR()) / 2 + 10, 8, 20);
      let positionsFour = this.createCoords(R[3].getR(), 8, 23);

      for (let i = 0; i < 8; i++) {
        let index = (i === 0 ?  8 - 1 : i - 1);

        let elements = new Array<Element>();

         elements.push(this.createElement({
          i: i,
          line: R[0],
          path: `M ${positionsTwo[index]}
            A ${R[1]} 1 0,1 ${positionsTwo[i]}
            L ${positions[i]}
            A ${R[0]} 1 0,0  ${positions[index]}
            L ${positionsTwo[index]}`,
          textPath: this.createPath(i, positionsPart[index], positionsPart[i])
        }));

        elements.push(this.createElement({
            i: i,
            line: R[1],
            path: `M ${positionsThree[index]}
               A ${R[2]} 1 0,1 ${positionsThree[i]}
               L ${positionsTwo[i]}
               A ${R[1]} 1 0,0 ${positionsTwo[index]}
               L ${positionsThree[index]}`,
            textPath: this.createPath(i, positionsPartTwo[index], positionsPartTwo[i])
        }));

      elements.push(this.createElement({
          i: i,
          line: R[2],
          path: `M ${positionsThree[index]}
            A ${R[3]} 0 0,1 ${positionsThree[i]}
            A ${R[3]} 1 0,0 ${positionsFour[i]}
            A ${R[3]} 1 0,0 ${positionsThree[index]}`,
          textPath: this.createPath(i, positionsPartThree[index], positionsPartThree[i])
      }));

      elements.push(this.createElement({
          i: i,
          line: R[3],
          path: `M ${positionsFour[index]}
            A ${R[3]} 0 0,1 ${positionsFour[i]}
            A ${R[3]} 1 0,0 ${positionsThree[index]}
            A ${R[3]} 1 0,0 ${positionsFour[index]}`,
          textPath: this.createPath(i, positionsPartFourP[index], positionsPartFour[i])
      }));

        this.render(elements);
      }
    }
    private createElement(opt: Option): Element {
        let element = new Element(opt);
        element.changeObserver.subscribe((el: Element) => {
           this.changeObserver.next(el);
        });
        return element;
    }

    run(): void {
        if (this.config.isMobile) {
            this.runMobile();
        } else {
            this.runDefault();
        }
    }


    elementClick(): any {
        return this.changeObserver;
    }

}