import { Line } from "./model/line";
import { ClassesInterface } from "./interface/ClassesInterface";
import { ConfigInterface } from "./interface/ConfigInterface";

export class Config {
  R: number = 80;
  labels: Array<string> = [
    "Interest",
    "Amusement",
    "Pride",
    "Joy",
    "Pleasure",
    "Contentment",
    "Love",
    "Admiration",
    "Relief",
    "Comassion",
    "Sadness",
    "Guilt",
    "Regret",
    "Shame",
    "Disappointment",
    "Fear",
    "Disgust",
    "Contempt",
    "Hate",
    "Anger"
  ];

  element: string = "drawer";

  showLines: boolean = true;

  showBorder: boolean = true;

  headerTop: string = "No emotion";

  headerBottom: string = "Other emotion";

  showHeader: boolean = true;

  classes: ClassesInterface = {
    mainGroup: "main_group",
    lineAxis: "line_axis",
    lineBorder: "line_border",
    line: "line",
    circlePrefix: "row_"
  };

  constructor (config: ConfigInterface) {
    Object.keys(config).forEach((key) => {
      this[key] = config[key];
    });
  }

  getElementsCount(): number {
    return this.labels.length;
  }

  getQuarterCount(): number {
    return this.getElementsCount() / 4;
  }

  lines: Array<Line> = [];

  getLines(): Array<Line> {
    if (!this.lines.length) {
      // TODO KW config
      this.lines.push(new Line(10));
      this.lines.push(new Line(15));
      this.lines.push(new Line(20));
      this.lines.push(new Line(25));
      this.lines.push(new Line(30));
    }
    return this.lines;
  }
}