"use strict";
/// <reference path="../../types/svgjs.d.ts" />
var config_1 = require('../config');
var Circle = (function () {
    function Circle(group, size, odstep, index) {
        this.element = group.element[Circle.mode](size, size);
        this.element.fill('yellow');
        //TODO KW bezposrednio do config
        this.element.center(config_1.Config.R, config_1.Config.R);
        var oy = Math.sin(group.getPosition());
        var ox = Math.cos(group.getPosition());
        this.element.dx(ox * (config_1.Config.R + odstep));
        this.element.dy(oy * (config_1.Config.R + odstep));
        this.element.click(function () {
            console.log('clicked', group.index, index);
        });
    }
    Circle.mode = 'ellipse';
    return Circle;
}());
exports.Circle = Circle;
