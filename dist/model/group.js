"use strict";
var circle_1 = require('./circle');
var Group = (function () {
    function Group(element, index, config) {
        this.element = element.group().addClass('line');
        this.index = index;
        this.config = config;
    }
    Group.prototype.getPosition = function () {
        var cw = this.config.getQuarterCount();
        return (90 / cw) * (this.index - cw - 0.5) * Math.PI / 180;
    };
    Group.prototype.run = function () {
        var _this = this;
        var odstep = 0;
        this.config.getLines().forEach(function (line, index) {
            var size = line.getSize();
            new circle_1.Circle(_this, size, odstep, index);
            odstep += size + 10;
        });
        // TODO KW zrobic element z ktorego bedzie dziedziczyc text oraz circle
        // 
        // let text = this.element.plain(this.config.labels[this.index-1]);
        // text.addClass('text');
        // text.center(this.config.R, this.config.R);
        // text.dx(ox * (this.config.R + odstep));
        // text.dy(oy * (this.config.R + odstep));
    };
    return Group;
}());
exports.Group = Group;
