import languages from "./languages";
import {PropertiesInterface} from "../interfaces/PropertiesInterface";

export class Config implements PropertiesInterface {
    element: string = "drawer";
    lang: string = "en";
    isMobile: boolean = false;
    labels: Array<Array<string>> = [];
    checkedElements: Array<string> = [];
    maxElements: number = 32;

    constructor (config: PropertiesInterface) {
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