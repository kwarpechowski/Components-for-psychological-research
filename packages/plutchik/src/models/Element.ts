import { Option }  from "./Option";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { fromEvent } from "rxjs/observable/fromEvent";
import {Drawer} from "../Drawer";
import {DrawHelper} from "../helpers/DrawHelper";

export class Element {
  static activeClass: string = "active";
  private id: string;
  private path: string;
  private textPath: string;
  private element: SVGElement
  private drawer: Drawer;
  txt: string;
  isActive: boolean;
  changeObserver: Subject<any>;

  constructor(opt: Option, drawer: Drawer) {
    this.id = "p-" + (opt.line.getId() + "-" + opt.i).toString();
    this.txt = opt.line.labels[opt.i];
    this.path = opt.path;
    this.textPath = opt.textPath;
    this.drawer = drawer;
    this.changeObserver = new Subject();
  }

  draw(): SVGElement {
    this.element = DrawHelper.createElement("a", {
      href: "javascript:;",
      "class": this.id,
      title: this.txt
    });

    let el = DrawHelper.createElement("path", {
      d: this.path
    });
    this.element.appendChild(el);

    let txt = DrawHelper.createElement("text");
    let textPath = DrawHelper.createElement("textPath");
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
    return DrawHelper.createElement("path", {
      id: this.id,
      d: this.textPath
    });
  }

  private bindEvents() {
    let source = fromEvent(this.element, "click");

    source.subscribe(() => {
      if (this.isActive) {
        this.disable();
      } else if (this.drawer.ifCanChange()) {
        this.enable();
      }
      this.changeObserver.next(this);
    });
  }

  enable() {
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

  disable() {
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