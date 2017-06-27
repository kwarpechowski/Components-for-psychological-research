import { Config }  from "./config/Config";
import { Point }  from "./models/Point";
import { Line }  from "./models/Line";
import { Option }  from "./models/Option";
import { Element }  from "./models/Element";
import {DrawHelper} from "./helpers/DrawHelper";
import { Subject } from "rxjs/Subject";

export class Drawer {
    private svg: SVGElement;
    private defs: SVGElement;
    private config: Config;
    private centerPoint: Point;
    private changeObserver: Subject<any>;
    private elements: Array<Element>;

    constructor(config: Config) {
      this.config = config;
        this.changeObserver = new Subject<any>();
        this.elements = [];

      this.centerPoint = new Point(250, 250);

      let container = document.querySelector(this.config.element);
      container.setAttribute("class", "plutchik-instance");
      this.svg = DrawHelper.createElement("svg", {
        class: "plutchik",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          version: "1.1",
          viewBox: "0 0 500 500"
      });
        this.defs = DrawHelper.createElement("defs");
      this.svg.appendChild(this.defs);
      container.appendChild(this.svg);
    }

    render(elements: Array<Element>) {
      elements.forEach((element) => {
        this.defs.appendChild(element.getDef());
        this.svg.appendChild(element.draw());

        if (this.config.checkedElements.indexOf(element.txt) >= 0) {
            element.enable();
        }
      });
    }

    createCoords(r: number, max: number, move?: number): Array<Point> {
        let tab = new Array<Point>();

        for (let i = 1; i <= max; i++) {
            let position = DrawHelper.getPosition(i, max, move);
            tab.push(new Point(
              this.centerPoint.x + Math.cos(position) * r,
              this.centerPoint.y + Math.sin(position) * r,
            ));
        }

        return tab;
    }

    private getLines(nums: Array<number>): Array<Line> {
        let labels = this.config.getLabels();
        let arr = new Array<Line>();
        nums.forEach((num, index) => {
            arr.push(new Line(num, labels[index], index));
        });
        return arr;
    }

    private runDefault() {
        let R = this.getLines([80, 144, 250, 250]);
        let textMoveElements = [0, 1, 2, 3];

        let positions = this.createCoords(R[0].r, 8);
        let positionsPart = this.createCoords(R[0].r, 8, 22.5);
        let positionsTwo = this.createCoords(R[1].r, 16);
        let positionsTwoPart = this.createCoords(R[1].r, 16, 11.5);
        let positionsFour = this.createCoords(R[3].r, 16, 12);

      for (let i = 0; i < 8; i++) {

        let index = (i === 0 ?  8 - 1 : i - 1);

        let elements = new Array<Element>();


          let roundPoint = new Point(450, 450);

        elements.push(this.createElement({
          i: i,
          line: R[0],
          path: `M ${this.centerPoint}
           L ${positions[index]}
           A ${R[0]} 0 0,1 ${positions[i]}`,
          textPath: DrawHelper.createPath(i, this.centerPoint, positionsPart[i], textMoveElements)
        }));

        elements.push(this.createElement({
          i: i,
          line: R[1],
          path: `M ${positions[i]}
           A ${roundPoint} 0 0,0 ${positionsTwo[i * 2]}
           A ${R[1]} 0 0,0 ${positionsTwo[index * 2 + 1]}
           A ${roundPoint} 1 0,0 ${positions[index]}
           A ${R[0]} 1 0,1 ${positions[i]}`,
          textPath: DrawHelper.createPath(i, positionsPart[i], positionsTwoPart[i * 2], textMoveElements)
        }));

        index = (i === 0 ?  15 : i * 2 - 1);

        elements.push(this.createElement({
          i: i,
          line: R[2],
          path: `M ${positionsTwo[i * 2]}
           A ${roundPoint} 0 0,0 ${positionsFour[i * 2]}
           A ${roundPoint} 0 0,0 ${positionsTwo[index]}
           A ${R[1]} 1 0,1 ${positionsTwo[i * 2]}`,
          textPath: DrawHelper.createPath(i, positionsTwoPart[i * 2], positionsFour[i * 2], textMoveElements)
        }));

        index = (i === 7 ?  0 : i * 2 + 2);
        elements.push(this.createElement({
          i: i,
          line: R[3],
          path: `M ${positionsFour[i * 2]}
           A ${this.centerPoint} 0 0,1 ${positionsFour[index]}
           A ${roundPoint} 1 0,0 ${positions[i]}
           A ${roundPoint} 0 0,0 ${positionsFour[i * 2]}`,
          textPath: DrawHelper.createPath(i, positions[i], positionsFour[i * 2 + 1], textMoveElements)
        }));

        this.render(elements);
      }
    }

    private runMobile() {
        let R = this.getLines([50, 110, 175, 250]);
        let textMoveElements = [0,1,2,3,4,5,6,7,8];

      let positions = this.createCoords(R[0].r, 8);
      let positionsPart = this.createCoords((R[0].r + R[1].r) / 2, 8);
      let positionsTwo = this.createCoords(R[1].r, 8);
      let positionsPartTwo = this.createCoords((R[1].r + R[2].r) / 2, 8);
      let positionsThree = this.createCoords(R[2].r, 8);
      let positionsPartThree = this.createCoords((R[2].r + R[3].r) / 2, 8);
      let positionsPartFour = this.createCoords((R[2].r + R[3].r) / 2 + 10, 8, 26);
      let positionsPartFourP = this.createCoords((R[2].r + R[3].r) / 2 + 10, 8, 20);
      let positionsFour = this.createCoords(R[3].r, 8, 23);

      for (let i = 0; i < 8; i++) {
        let index = (i === 0 ?  8 - 1 : i - 1);

        let elements = new Array<Element>();

         elements.push(this.createElement({
          i: i,
          line: R[0],
          path: `M ${positionsTwo[index]}
            A ${R[0]} 1 0,1 ${positionsTwo[i]}
            L ${positions[i]}
            A ${R[0]} 1 0,0  ${positions[index]}
            L ${positionsTwo[index]}`,
          textPath: DrawHelper.createPath(i, positionsPart[index], positionsPart[i], textMoveElements)
        }));

        elements.push(this.createElement({
            i: i,
            line: R[1],
            path: `M ${positionsThree[index]}
               A ${R[2]} 1 0,1 ${positionsThree[i]}
               L ${positionsTwo[i]}
               A ${R[1]} 1 0,0 ${positionsTwo[index]}
               L ${positionsThree[index]}`,
            textPath: DrawHelper.createPath(i, positionsPartTwo[index], positionsPartTwo[i], textMoveElements)
        }));

      elements.push(this.createElement({
          i: i,
          line: R[2],
          path: `M ${positionsThree[index]}
            A ${R[3]} 0 0,1 ${positionsThree[i]}
            A ${R[3]} 1 0,0 ${positionsFour[i]}
            A ${R[3]} 1 0,0 ${positionsThree[index]}`,
          textPath: DrawHelper.createPath(i, positionsPartThree[index], positionsPartThree[i], textMoveElements)
      }));

      index = (i === 7 ?  0 : i + 1);

      elements.push(this.createElement({
          i: i,
          line: R[3],
          path: `M ${positionsFour[i]}
            A ${R[3]} 0 0,1 ${positionsFour[index]}
            A ${R[3]} 1 0,0 ${positionsThree[i]}
            A ${R[3]} 1 0,0 ${positionsFour[i]}`,
          textPath: DrawHelper.createPath(i, positionsPartFourP[i], positionsPartFour[index], textMoveElements)
      }));

        this.render(elements);
      }
    }
    private createElement(opt: Option): Element {
        let element = new Element(opt, this);
        element.changeObserver.subscribe(() => {
           this.changeObserver.next(this.getData());
        });
        this.elements.push(element);
        return element;
    }

    getData(): Object {
        let data = {};
        this.elements.forEach((element) => {
           data[element.txt] = element.isActive;
        });
        return {
            data: data,
            element: this.svg
        };
    }

    ifCanChange(): boolean {
        return this.elements.filter((element) => {
            return element.isActive;
        }).length < this.config.maxElements;
    }

    run() {
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