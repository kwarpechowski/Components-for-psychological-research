"use strict";
/// <reference path="../types/svgjs.d.ts" />
var config_1 = require('./config');
var group_1 = require('./model/group');
var Drawer = (function () {
    function Drawer() {
        this.draw = SVG('drawing'); //z konfigu pobierac
        this.mainElement = this.draw.group();
    }
    Drawer.prototype.drawAxis = function () {
        var lineHorizontal = this.mainElement.line(0, 0, 600, 0).stroke({ width: 1 });
        lineHorizontal.center(config_1.Config.R, config_1.Config.R);
        var lineVertical = this.mainElement.line(0, 0, 0, 600).stroke({ width: 1 });
        lineVertical.center(config_1.Config.R, config_1.Config.R);
    };
    Drawer.prototype.run = function () {
        this.drawAxis();
        this.mainElement.move(250, 250);
        for (var i = 1; i <= config_1.Config.getElementsCount(); i++) {
            new group_1.Group(this.mainElement, i);
        }
    };
    return Drawer;
}());
exports.Drawer = Drawer;
