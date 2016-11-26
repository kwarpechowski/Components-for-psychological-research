import { Option }  from "./Option";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";

export class Element {
  private id: string;
  public txt: string;
  private path: string;
  private textPath: string;
  private element: SVGAElement;
  public isActive: boolean;
  static activeClass: string = "active";
  changeObserver: Subject<any>;

  constructor(opt: Option) {
    this.id = "p-" + (opt.line.getId() + "-" + opt.i).toString();
    this.txt = opt.line.labels[opt.i];
    this.path = opt.path;
    this.textPath = opt.textPath;
    this.changeObserver = new Subject();
  }

  draw(): SVGAElement {
    this.element = document.createElementNS("http://www.w3.org/2000/svg", "a");
    this.element.setAttribute("href", "javascript:;");
    this.element.setAttribute("class", this.id);
    this.element.setAttribute("title", this.txt);

    let el = document.createElementNS("http://www.w3.org/2000/svg", "path");
    el.setAttribute("d", this.path);
    this.element.appendChild(el);

    let txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
    let textPath = document.createElementNS("http://www.w3.org/2000/svg", "textPath");
    textPath.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + this.id);
    textPath.setAttribute("startOffset", "50%");
    let textNode = document.createTextNode(this.txt);
    textPath.appendChild(textNode);
    txt.appendChild(textPath);
    this.element.appendChild(txt);

    this.bindEvents();

    return this.element;
  }

  getDef(): SVGElement {
    let p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("id", this.id);
    p.setAttribute("d", this.textPath);
    return p;
  }

  private bindEvents(): void {
    let source = Observable.fromEvent(this.element, "click");

    let subscription = source.subscribe(() => {
      if (this.isActive) {
        this.disable();
      } else {
        this.enable();
      }
      this.changeObserver.next(this);
    });
  }

  enable(): void {
    if (!this.isActive) {
      this.isActive = true;
      let classes = this.element.getAttribute("class");
      if (classes) {
        classes += " " + Element.activeClass;
      } else {
        classes = Element.activeClass;
      }
      this.element.setAttribute("class", classes);
    }
  }

  disable(): void {
    if (this.isActive) {
      this.isActive = false;
      let classes = this.element.getAttribute("class");
      if (classes) {
        classes = classes.replace(Element.activeClass, "");
        classes = classes.replace(" ", "");
      }
      this.element.setAttribute("class", classes);
    }
  }
}