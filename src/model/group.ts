/// <reference path="../../types/svgjs.d.ts" />

export class Group {
  private mainElement: svgjs.Element;
  private odstep: number = 0;

  constructor(element: svgjs.Element) {
    this.mainElement = element;
  }
}