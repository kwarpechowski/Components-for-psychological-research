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

  static showBorder: boolean = true;

  static headerTop: string = "No emotion";

  static headerBottom: string = "Other emotion";

  static showHeader: boolean = true;

  static classes: ClassesInterface = {
    mainGroup: "main_group",
    lineAxis: "line_axis",
    lineBorder: "line_border",
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

  static lines: Array<Line> = [];

  static getLines(): Array<Line> {
    if (!Config.lines.length) {
      // TODO KW konfig
      Config.lines.push(new Line(10));
      Config.lines.push(new Line(15));
      Config.lines.push(new Line(20));
      Config.lines.push(new Line(25));
      Config.lines.push(new Line(30));
    }
    return Config.lines;
  }
}