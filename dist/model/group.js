"use strict";
var config_1 = require("../config");
var circle_1 = require("./circle");
var text_1 = require("./text");
var Group = (function () {
    function Group(index) {
        this.odstep = 0;
        this.circles = [];
        var main = document.getElementsByClassName(config_1.Config.classes.mainGroup)[0]; // TODO KW magic string, szukac tylko po configu
        this.element = document.createElementNS("http://www.w3.org/2000/svg", "g");
        var classes = [
            config_1.Config.classes.line,
            config_1.Config.classes.line + "_" + index
        ];
        this.element.setAttribute("class", classes.join(" "));
        main.appendChild(this.element);
        this.index = index;
        this.run();
    }
    Group.prototype.getPosition = function () {
        var cw = config_1.Config.getQuarterCount();
        return (90 / cw) * (this.index - cw - 0.5) * Math.PI / 180;
    };
    Group.prototype.run = function () {
        var _this = this;
        var odstep = 0;
        config_1.Config.getLines().forEach(function (line, index) {
            _this.circles.push(new circle_1.Circle(_this, line.getSize(), index));
        });
        new text_1.Text(this, this.index);
    };
    Group.prototype.setActive = function (circle) {
        this.circles.forEach(function (c) {
            c.disable();
        });
        circle.enable();
    };
    return Group;
}());
exports.Group = Group;
