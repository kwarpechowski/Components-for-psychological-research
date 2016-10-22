/// <reference path="../../types/svgjs.d.ts" />
import { Config }  from '../config';
import { Group }  from './group';
import { ElementInterface } from '../interface/ElementInterface';

export class Circle implements ElementInterface {
  element: svgjs.Element;
  index: number;
  group: Group;

  constructor(group: Group, size: number, index: number) {
    this.group = group;
    this.element = this.group.element.ellipse(size, size);
    this.index = index;

    //TODO KW bezposrednio do config
    this.element.center(Config.R, Config.R);

    let oy = Math.sin(this.group.getPosition());
    let ox = Math.cos(this.group.getPosition());

    this.element.dx(ox * (Config.R + this.group.odstep));
    this.element.dy(oy * (Config.R + this.group.odstep));

    this.group.odstep += size + 10;

    this.element.click(() => {
      this.group.setActive(this);
    });

  }

  disable(): void {
    this.element.removeClass('active');
  }
  enable(): void {
    this.element.addClass('active');
  }
}