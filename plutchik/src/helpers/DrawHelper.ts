export class DrawHelper {

    static createElement(name: string, opts?: Object): SVGElement {
        let el = document.createElementNS("http://www.w3.org/2000/svg", name);
        for (let opt in opts) {
            el.setAttribute(opt, opts[opt]);
        }
        return el;
    }

}