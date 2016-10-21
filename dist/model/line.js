"use strict";
var Line = (function () {
    function Line(size, color) {
        this.size = size;
        this.color = color;
    }
    Line.prototype.getColor = function () {
        return this.color;
    };
    Line.prototype.getSize = function () {
        return this.size;
    };
    return Line;
}());
exports.Line = Line;
;
