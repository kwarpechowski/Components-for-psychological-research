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

export class Config implements ConfigInterface{
  R: number = 80;
  labels: Array<string> = [
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
  element: string = 'drawer';

  constructor(config: ConfigInterface) {
    Object.keys(config).forEach((key) => {
      this[key] = config[key];
    });
  }

  getElementsCount() : number {
    return this.labels.length;
  }

  getLines(): Array<Line> {
    //TODO KW konfig
    let lines: Array<Line> = [];
    lines.push(new Line(10, 'yellow'));
    lines.push(new Line(20, 'red'));
    lines.push(new Line(25, 'yellow'));
    lines.push(new Line(30, 'red'));
    lines.push(new Line(40, 'yellow'));
    return lines;
  }
}