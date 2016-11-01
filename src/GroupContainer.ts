import { Group } from "./model/Group";
import { Element } from "./model/Element";
import { Config }  from "./config";
import { ClickEvent } from "./model/ClickEvent";

import { Subject } from "rxjs/Subject";

export class GroupContainer {
  changeObserver: Subject<any>;
  completeObserver: Subject<any>;
  private groups: Array<Group> = [];
  private groupStatus: Object = {};
  private config: Config;

  constructor(config: Config) {
    this.config = config;
    this.completeObserver = new Subject();

    this.changeObserver = new Subject();
    this.changeObserver.subscribe(() => {
      if (this.groups.length === Object.keys(this.groupStatus).length) {
        this.completeObserver.next(this.groupStatus);
      }
    });
  }

  create() {
    for (let i = 1; i <= this.config.getElementsCount(); i++) {
      let g = new Group(this.config, i);

      g.changeObserver.subscribe((element: Element) => {
        this.groupStatus[g.index] = element.index;
        this.changeObserver.next(this.groupStatus);
      });
      this.groups.push(g);
    }
  }

  getGroups(): Array<Group> {
    return this.groups;
  }
}