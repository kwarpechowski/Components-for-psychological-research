/// <reference path="../../types/svgjs.d.ts" />
import { Config }  from '../config';
import { Group }  from './group';
import { ElementInterface } from '../interface/ElementInterface';

export class Circle implements ElementInterface {
  element: svgjs.Element;
  index: number;

  constructor(group: Group, size: number, odstep: number, index: number) {

    this.element = group.element.ellipse(size, size);
    this.element.fill('red');
    this.index = index;

    //TODO KW bezposrednio do config
    this.element.center(Config.R, Config.R);

    let oy = Math.sin(group.getPosition());
    let ox = Math.cos(group.getPosition());

    this.element.dx(ox * (Config.R + odstep));
    this.element.dy(oy * (Config.R + odstep));

    this.element.click(() => {
      console.log('clicked', group.index, this.index);
    });

  }
}