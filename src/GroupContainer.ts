import { Group } from "./model/Group";
import { Circle } from "./model/Circle";
import { Config }  from "./config";
import { ClickEvent } from "./model/ClickEvent";

import { Observable, Subject } from "rx";

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
        this.completeObserver.onNext(this.groupStatus);
      }
    })
  }

  create() {
    for (let i = 1; i <= this.config.getElementsCount(); i++) {
      let g = new Group(this.config, i);

      g.changeObserver.subscribe((circle: Circle) => {
        this.groupStatus[g.index] = circle.index;
        this.changeObserver.onNext(this.groupStatus);
      });
      this.groups.push(g);
    }
  }

  getGroups(): Array<Group> {
    return this.groups;
  }
}