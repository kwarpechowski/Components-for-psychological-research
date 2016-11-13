import { Group } from "./model/Group";
import { Config }  from "./Config";

import { Subject } from "rxjs/Subject";

export class GroupContainer {
  changeObserver: Subject<any>;
  completeObserver: Subject<any>;
  private groups: Array<Group> = [];
  private groupStatus: Array<number> = [];
  private config: Config;

  constructor(config: Config) {
    this.config = config;
    this.completeObserver = new Subject();

    this.changeObserver = new Subject();
    this.changeObserver.subscribe(() => {
      if (this.config.maxElements === this.countResults()) {
        this.completeObserver.next(this.groupStatus);
      }
    });
  }

  private countResults(): number {
    return this.groupStatus.filter(g => g).length;
  }

  private setResults(): void {
    this.groupStatus = this.groups.map(group => group.getActiveElementIndex());
    this.changeObserver.next(this.groupStatus);
  }

  clearAll(): void {
    this.groups.forEach(g => g.disable());
    this.setResults();
  }

  create() {
    for (let i = 1; i <= this.config.getElementsCount(); i++) {
      let g = new Group(this.config, i);
      g.changeObserver.subscribe((group: Group) => {
        if (this.config.maxElements === 1) {
          this.groups.filter(g => g !== group).forEach(g => g.disable());
        } else if (this.countResults() < this.config.maxElements || g.isChanged()) {
          group.enable();
        } else {
          group.removeTemp();
        }
        this.setResults();
      });
      this.groups.push(g);
    }
  }

  getGroups(): Array<Group> {
    return this.groups;
  }
}