"use strict";
/// <reference path="../../types/svgjs.d.ts" />
var config_1 = require('../config');
var Circle = (function () {
    function Circle(group, size, index) {
        var _this = this;
        this.group = group;
        this.element = this.group.element.ellipse(size, size);
        this.index = index;
        //TODO KW bezposrednio do config
        this.element.center(config_1.Config.R, config_1.Config.R);
        var oy = Math.sin(this.group.getPosition());
        var ox = Math.cos(this.group.getPosition());
        this.element.dx(ox * (config_1.Config.R + this.group.odstep));
        this.element.dy(oy * (config_1.Config.R + this.group.odstep));
        this.group.odstep += size + 10;
        this.element.click(function () {
            _this.group.setActive(_this);
        });
    }
    Circle.prototype.disable = function () {
        this.element.removeClass('active');
    };
    Circle.prototype.enable = function () {
        this.element.addClass('active');
    };
    return Circle;
}());
exports.Circle = Circle;
