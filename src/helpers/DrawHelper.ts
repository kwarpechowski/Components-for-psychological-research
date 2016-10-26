import { Config }  from "../config";

export class DrawHelper {

  static createElement(name: string): SVGElement {
    return document.createElementNS("http://www.w3.org/2000/svg", name);
  }

  static drawHeader(y: number, txt: string): SVGElement {
    let el = DrawHelper.createElement("text");
    el.setAttribute("text-anchor", "middle");
    el.setAttribute("x", "0");
    el.setAttribute("y", y.toString());

    let textNode = document.createTextNode(txt);
    el.appendChild(textNode);

    return el;
  }

  static drawBorder(r: number): SVGElement {
    let c = DrawHelper.createElement('circle');
    c.setAttribute("cx", "0");
    c.setAttribute("cy", "0");
    c.setAttribute("r", r.toString());
    c.setAttribute("class", Config.classes.lineBorder);
    return c;
  }

}