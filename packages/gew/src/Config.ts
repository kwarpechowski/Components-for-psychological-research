import { Line } from "./model/Line";
import { ClassesInterface } from "./interfaces/ClassesInterface";
import {PropertiesInterface} from "./interfaces/PropertiesInterface";

export class Config {
  R: number = 80;
  labels: Array<string> = [
    "Involvement\nInterest",
    "Amusement\nLaughter",
    "Pride\nElation",
    "Happiness\nJoy",
    "Enjoyment\nPleasure",
    "Tenderness\nFeeling love",
    "Wonderment\nFeeling awe",
    "Feeling disburdened\nRelief",
    "Astonishment\nSuprise",
    "Longing\nNostalgia",
    "Pity\nCompassion",
    "Sadness\nDespair",
    "Worry\nFear",
    "Embarrassment\nShame",
    "Guilt\nRemorse",
    "Disappointment\nRegreat",
    "Envy\nJealousy",
    "Disgust\nRepulsion",
    "Contempt\nScorn",
    "Irritation\nAnger"
  ];

  element: string = "#drawer";

  showLines: boolean = false;

  showBorder: boolean = true;

  headerTop: string = "No emotion";

  headerBottom: string = "Other emotion";

  showHeader: boolean = true;

  maxElements: number = 20;

  isMobile: boolean = false;

  checkedElements: Array<number> = [];

  classes: ClassesInterface = {
    mainGroup: "main_group",
    lineAxis: "line_axis",
    lineBorder: "line_border",
    line: "line",
    circlePrefix: "row_"
  };

  constructor (config: PropertiesInterface) {
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