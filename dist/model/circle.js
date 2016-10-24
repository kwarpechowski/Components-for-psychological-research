"use strict";
var config_1 = require("../config");
var Circle = (function () {
    function Circle(group, size, index) {
        this.group = group;
        this.index = index;
        var oy = Math.sin(this.group.getPosition());
        var ox = Math.cos(this.group.getPosition());
        this.group.odstep += size * 2; // TODO KW magic numbers
        var sizeY = oy * (config_1.Config.R + this.group.odstep);
        var sizeX = ox * (config_1.Config.R + this.group.odstep);
        this.element = document.createElementNS("http://www.w3.org/2000/svg", "a");
        this.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#");
        this.element.setAttribute("target", "_top");
        this.element.setAttribute("class", config_1.Config.classes.circlePrefix + index);
        var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        c.setAttribute("cx", sizeX.toString());
        c.setAttribute("cy", sizeY.toString());
        c.setAttribute("r", size.toString());
        this.bindEvents();
        this.element.appendChild(c);
        this.group.element.appendChild(this.element);
    }
    Circle.prototype.bindEvents = function () {
        var _this = this;
        this.element.addEventListener("click", function () {
            _this.group.setActive(_this);
            Circle.clickEvents.forEach(function (event) {
                event(_this.group.index, _this.index);
            });
        });
    };
    Circle.prototype.enable = function () {
        var classes = this.element.getAttribute("class");
        if (classes) {
            classes += " " + Circle.activeClass;
        }
        else {
            classes = Circle.activeClass;
        }
        this.element.setAttribute("class", classes);
    };
    Circle.prototype.disable = function () {
        var classes = this.element.getAttribute("class");
        if (classes) {
            classes = classes.replace(Circle.activeClass, "");
        }
        this.element.setAttribute("class", classes);
    };
    Circle.activeClass = "active";
    Circle.clickEvents = [];
    return Circle;
}());
exports.Circle = Circle;
