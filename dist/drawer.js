"use strict";
var config_1 = require("./config");
var group_1 = require("./model/group");
var circle_1 = require("./model/circle");
var Drawer = (function () {
    function Drawer() {
        var container = document.getElementById(config_1.Config.element);
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        this.svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        this.svg.setAttribute("version", "1.1");
        this.svg.setAttribute("class", "gew-instance");
        container.appendChild(this.svg);
        var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttribute("class", config_1.Config.classes.mainGroup);
        this.svg.appendChild(g);
        this.mainElement = g;
    }
    Drawer.prototype.drawLine = function (x1, y1, x2, y2) {
        var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("class", config_1.Config.classes.lineAxis);
        line.setAttribute("x1", x1.toString());
        line.setAttribute("y1", y1.toString());
        line.setAttribute("x2", x2.toString());
        line.setAttribute("y2", y2.toString());
        this.mainElement.appendChild(line);
    };
    Drawer.prototype.drawAxis = function (size) {
        if (config_1.Config.showLines) {
            this.drawLine(size * -1, 0, config_1.Config.R * -1, 0);
            this.drawLine(config_1.Config.R, 0, size, 0);
            this.drawLine(0, size * -1, 0, config_1.Config.R * -1);
            this.drawLine(0, config_1.Config.R, 0, size);
        }
    };
    Drawer.prototype.drawHeaders = function () {
        this.drawHeader(config_1.Config.R / 2 * -1, config_1.Config.headerTop);
        this.drawHeader(config_1.Config.R / 2, config_1.Config.headerBottom);
    };
    Drawer.prototype.drawHeader = function (y, txt) {
        var el = document.createElementNS("http://www.w3.org/2000/svg", "text");
        el.setAttribute("text-anchor", "middle");
        el.setAttribute("x", "0");
        el.setAttribute("y", y.toString());
        this.mainElement.appendChild(el);
        var textNode = document.createTextNode(txt);
        el.appendChild(textNode);
    };
    Drawer.prototype.setPosition = function () {
        var el = document.getElementsByClassName(config_1.Config.classes.mainGroup)[0];
        var width = el.getBoundingClientRect().width;
        var halfWidth = width / 2; // ladniej mozna policzyc rozmiar
        this.drawAxis(halfWidth);
        this.drawHeaders();
        el.setAttribute("style", "transform: translate(" + halfWidth + "px, " + halfWidth + "px)");
        this.svg.setAttribute("viewBox", "0 0 " + width + " " + width);
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
