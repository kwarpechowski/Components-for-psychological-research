"use strict";
/// <reference path="../../types/svgjs.d.ts" />
var config_1 = require('../config');
var circle_1 = require('./circle');
var Group = (function () {
    function Group(element, index) {
        this.odstep = 0;
        this.circles = [];
        this.element = element.group().addClass('line');
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
        // TODO KW zrobic element z ktorego bedzie dziedziczyc text oraz circle
        // 
        // let text = this.element.plain(this.config.labels[this.index-1]);
        // text.addClass('text');
        // text.center(this.config.R, this.config.R);
        // text.dx(ox * (this.config.R + odstep));
        // text.dy(oy * (this.config.R + odstep));
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
