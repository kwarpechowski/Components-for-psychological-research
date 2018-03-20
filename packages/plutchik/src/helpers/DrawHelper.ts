import {Point} from "../models/Point";
export class DrawHelper {

    static createElement(name: string, opts?: Object): SVGElement {
        let el = document.createElementNS("http://www.w3.org/2000/svg", name);
        for (let opt in opts) {
            el.setAttribute(opt, opts[opt]);
        }
        return el;
    }

    static createPath(i: number, p1: Point, p2: Point, config: Array<number>): string {
        if (config.indexOf(i) >= 0) {
            return `M ${p1} L ${p2}`
        }
        return `M ${p2} L ${p1}`
    }

    static getPosition(index: number, max: number, move: number = 0): number {
        if (!move) {
            move = 0;
        }
        let cw = max / 4;
        return ((90 / cw) * (index - cw - 0.45) - move) * Math.PI / 180;
    }

}