"use strict";
var config_1 = require("../config");
var Text = (function () {
    function Text(group, index) {
        this.group = group;
        this.index = index;
        var oy = Math.sin(this.group.getPosition());
        var ox = Math.cos(this.group.getPosition());
        this.group.odstep += 40; // TODO KW magic numbers
        var sizeY = oy * (config_1.Config.R + this.group.odstep);
        var sizeX = ox * (config_1.Config.R + this.group.odstep);
        this.element = document.createElementNS("http://www.w3.org/2000/svg", "text");
        this.element.setAttribute("x", sizeX.toString());
        this.element.setAttribute("y", sizeY.toString());
        this.element.setAttribute("id", "text_" + this.index);
        var textNode = document.createTextNode(config_1.Config.labels[this.index - 1]);
        this.element.appendChild(textNode);
        this.group.element.appendChild(this.element);
        if (index > config_1.Config.labels.length / 2) {
            var el = document.getElementById("text_" + this.index);
            var width = el.getBoundingClientRect().width;
            this.element.setAttribute("x", (sizeX - width).toString());
        }
    }
    return Text;
}());
exports.Text = Text;
