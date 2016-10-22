import { Line } from "./model/line";
import { ClassesInterface } from "./interface/ClassesInterface";
import { ConfigInterface } from "./interface/ConfigInterface";

export class Config {
  static R: number = 80;
  static labels: Array<string> = [
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

  static element: string = "drawer";

  static showLines: boolean = true;

  static classes: ClassesInterface = {
    mainGroup: "main_group",
    lineAxis: "line_axis",
    line: "line",
    circlePrefix: "row_"
  };

  static set (config: ConfigInterface): void {
    Object.keys(config).forEach((key) => {
      Config[key] = config[key];
    });
  }

  static getElementsCount(): number {
    return this.labels.length;
  }

  static getQuarterCount(): number {
    return this.getElementsCount() / 4;
  }

  static getLines(): Array<Line> {
    // TODO KW konfig
    let lines: Array<Line> = [];
    lines.push(new Line(10));
    lines.push(new Line(15));
    lines.push(new Line(20));
    lines.push(new Line(25));
    lines.push(new Line(30));
    return lines;
  }
}