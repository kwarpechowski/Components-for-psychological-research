import { Config }  from "./Config";
import {DrawHelper} from "./helpers/DrawHelper";

export class Drawer {
    private mainElement: SVGGElement;
    private svg: SVGElement;
    private config: Config;

    constructor(config: Config) {
        this.config = config;
        let container = document.getElementById(this.config.element);
        container.setAttribute("class", "gew-instance")
        // TODO KW przeniesc tworzenie pojedynczych elementow do jednego template
        this.svg = DrawHelper.createElement("svg");
        this.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        this.svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        this.svg.setAttribute("version", "1.1");
        container.appendChild(this.svg);
    }

    run(): void {
        console.log("run mobile");
    }

}