import {ConfigInterface} from "./interfaces/ConfigInterface";

export class Config {
    element: string = "drawer";
    constructor (config: ConfigInterface) {
        Object.keys(config).forEach((key) => {
            this[key] = config[key];
        });
    }
}