import {ConfigInterface} from "../interfaces/ConfigInterface";
import languages from "./languages";

export class Config {
    element: string = "drawer";
    isMobile: boolean = false;
    labels: Array<Array<string>> = [];
    checkedElements: Array<string> = [];
    lang: string = "en";
    maxElements: number = 32;

    constructor (config: ConfigInterface) {
        Object.keys(config).forEach((key) => {
            this[key] = config[key];
        });
    }
    getLabels(): Array<Array<string>> {
        if (this.labels.length) {
            return this.labels;
        } else if (languages[this.lang].length) {
            return languages[this.lang];
        } else {
            return languages["en"];
        }
    }
}