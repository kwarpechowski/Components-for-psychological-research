"use strict";
var config_1 = require("./config");
var group_1 = require("./model/group");
var circle_1 = require("./model/circle");
var Drawer = (function () {
    function Drawer() {
        var container = document.getElementById(config_1.Config.element);
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        svg.setAttribute("version", "1.1");
        container.appendChild(svg);
        var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttribute("class", config_1.Config.classes.mainGroup);
        svg.appendChild(g);
        this.mainElement = g;
    }
    Drawer.prototype.drawLine = function (x1, y1, x2, y2) {
        if (config_1.Config.showLines) {
            var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("class", config_1.Config.classes.lineAxis);
            line.setAttribute("x1", x1.toString());
            line.setAttribute("y1", y1.toString());
            line.setAttribute("x2", x2.toString());
            line.setAttribute("y2", y2.toString());
            this.mainElement.appendChild(line);
        }
    };
    Drawer.prototype.drawAxis = function (size) {
        this.drawLine(size * -1, 0, size, 0);
        this.drawLine(0, size, 0, size * -1);
    };
    Drawer.prototype.setPosition = function () {
        var el = document.getElementsByClassName(config_1.Config.classes.mainGroup)[0];
        var width = el.getBoundingClientRect().width / 2; // ladniej mozna policzyc rozmiar
        this.drawAxis(width);
        el.setAttribute("style", "transform: translate(" + width + "px, " + width + "px)");
    };
    Drawer.prototype.run = function () {
        for (var i = 1; i <= config_1.Config.getElementsCount(); i++) {
            new group_1.Group(i);
        }
        this.setPosition();
    };
    Drawer.prototype.circleClick = function (f) {
        circle_1.Circle.clickEvents.push(f);
    };
    Drawer.prototype.isAllChecked = function (f) {
        group_1.Group.isAllCheckedEvents.push(f);
    };
    return Drawer;
}());
exports.Drawer = Drawer;
