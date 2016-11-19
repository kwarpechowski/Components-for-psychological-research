import { Option }  from "./Option";

export class Element {
  id: string;
  txt: string;
  path: string;
  textPath: string;

  constructor(opt: Option) {
    this.id = (opt.line.getId() + opt.i).toString();
    this.txt = opt.line.labels[opt.i];
    this.path = opt.path;
    this.textPath = opt.textPath;
  }

  draw(): SVGAElement {
    let a = document.createElementNS("http://www.w3.org/2000/svg", "a");
    a.setAttribute("href", "javascript:;");

    let el = document.createElementNS("http://www.w3.org/2000/svg", "path");
    el.setAttribute("d", this.path);
    el.setAttribute("class", this.id);
    a.appendChild(el);

    let txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
    let textPath = document.createElementNS("http://www.w3.org/2000/svg", "textPath");
    textPath.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + this.id);
    textPath.setAttribute("startOffset", "50%");
    let textNode = document.createTextNode(this.id);
    textPath.appendChild(textNode);
    txt.appendChild(textPath);
    a.appendChild(txt);

    return a;
  }

  getDef(): SVGElement {
    let p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("id", this.id);
    p.setAttribute("d", this.textPath);
    return p;
  }
}