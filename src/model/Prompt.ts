export class Prompt {
    private el: HTMLElement;

    constructor() {
        this.el = document.createElement("div");
        this.el.setAttribute("class", "prompt");
    }

    show() {
        let classes = this.el.getAttribute("class");
        this.el.setAttribute("class", classes + " active");
    }

    create(): HTMLElement {
        // TODO KW zmienic nazwe metody
        return this.el;
    }
}