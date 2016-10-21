"use strict";
var group_1 = require('./model/group');
var Drawer = (function () {
    function Drawer(config) {
        this.draw = SVG('drawing'); //z konfigu pobierac
        this.config = config;
        this.mainElement = this.draw.group();
    }
    Drawer.prototype.drawAxis = function () {
        var lineHorizontal = this.mainElement.line(0, 0, 600, 0).stroke({ width: 1 });
        lineHorizontal.center(this.config.R, this.config.R);
        var lineVertical = this.mainElement.line(0, 0, 0, 600).stroke({ width: 1 });
        lineVertical.center(this.config.R, this.config.R);
    };
    Drawer.prototype.run = function () {
        this.drawAxis();
        this.mainElement.move(250, 250);
        for (var i = 1; i <= this.config.getElementsCount(); i++) {
            new group_1.Group(this.mainElement, i, this.config).run();
        }
    };
    return Drawer;
}());
exports.Drawer = Drawer;
