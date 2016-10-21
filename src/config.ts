export interface ConfigInterface {
  /**
   * Radius of the main wheel
   */
  R: number;
  /**
   * List of all labels
   */
  labels: Array<string>
}

export class Config implements ConfigInterface{
    R: number = 80;
    labels: Array<string> = [
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
        'Anger',
        'Interest',
        'Amusement',
        'Pride',
        'Joy',
        'Pleasure'
      ];

    constructor(config: ConfigInterface) {
      Object.keys(config).forEach((key) => {
        this[key] = config[key];
      });
      console.log(this);
    }
}