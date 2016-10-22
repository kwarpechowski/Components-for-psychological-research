import { Line } from './model/line';

export interface ConfigInterface {
  /**
   * Radius of the main wheel
   */
  R: number;
  /**
   * List of all labels
   */
  labels: Array<string>

  /**
   * Id DOM element
   */
  element: string;
}

export class Config {
  static R: number = 80;
  static labels: Array<string> = [
    'Interest',
    'Amusement',
    'Pride',
    'Joy',
    'Pleasure',
    'Contentment',
    'Love',
    'Admiration',
    'Relief',
    'Comassion',
    'Sadness',
    'Guilt',
    'Regret',
    'Shame',
    'Disappointment',
    'Fear',
    'Disgust',
    'Contempt',
    'Hate',
    'Anger'
  ];
  static element: string = 'drawer';

  static set (config: ConfigInterface) {
    Object.keys(config).forEach((key) => {
      Config[key] = config[key];
    });
  }

  static getElementsCount() : number {
    return this.labels.length;
  }

  static getQuarterCount() : number {
    return this.getElementsCount() / 4;
  }

  static getLines(): Array<Line> {
    //TODO KW konfig
    let lines: Array<Line> = [];
    lines.push(new Line(10));
    lines.push(new Line(20));
    lines.push(new Line(25));
    lines.push(new Line(30));
    lines.push(new Line(40));
    return lines;
  }
}