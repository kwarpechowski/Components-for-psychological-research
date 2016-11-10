import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/observable/fromEvent";

export class Prompt {
    private el: HTMLElement;
    private isActive: boolean;
    onSave: Subject<string>;

    constructor() {
        this.onSave = new Subject();
        this.isActive = false;
        this.el = document.createElement("div");
        this.el.setAttribute("class", "prompt");
        this.el.innerHTML = `
            <p>
                <input type="text" />
            </p>
            <p>
                <button class="save_btn">Save</button>
                <button class="cancel_btn">Cancel</button>
            </p>
         `;
        this.bindSaveBtn();
        this.bindCancelBtn();
    }

    bindSaveBtn(): void {
        let btn = this.el.querySelector(".save_btn");

        let source = Observable.fromEvent(btn, "click");
        source.subscribe(() => {
            this.hide();
            let val = this.el.querySelector("input").value;
            if (val) {
                this.onSave.next(val);
            }
        });
    }

    bindCancelBtn(): void {
        let btn = this.el.querySelector(".cancel_btn");

        let source = Observable.fromEvent(btn, "click");
        source.subscribe(() => {
            this.hide();
            // TODO KW czyszczenie inputu
        });
    }

    hide(): void {
        if (this.isActive) {
            let classes = this.el.getAttribute("class");
            this.el.setAttribute("class", classes.replace(" active", ""));
            this.isActive = false;
        }
    }

    show(): void {
        if (!this.isActive) {
            let classes = this.el.getAttribute("class");
            this.el.setAttribute("class", classes + " active");
            this.el.querySelector("input").focus();
            this.isActive = true;
        }
    }

    create(): HTMLElement {
        // TODO KW zmienic nazwe metody
        return this.el;
    }
}