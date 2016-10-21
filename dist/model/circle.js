"use strict";
var Circle = (function () {
    function Circle(group, size, odstep, index) {
        this.element = group.element[Circle.mode](size, size);
        this.element.fill('yellow');
        //TODO KW bezposrednio do config
        this.element.center(group.config.R, group.config.R);
        var oy = Math.sin(group.getPosition());
        var ox = Math.cos(group.getPosition());
        this.element.dx(ox * (group.config.R + odstep));
        this.element.dy(oy * (group.config.R + odstep));
        this.element.click(function () {
            console.log('clicked', group.index, index);
        });
    }
    Circle.mode = 'ellipse';
    return Circle;
}());
exports.Circle = Circle;
