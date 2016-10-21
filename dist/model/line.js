"use strict";
var Line = (function () {
    function Line(size) {
        this.size = size;
    }
    Line.prototype.getSize = function () {
        return this.size;
    };
    return Line;
}());
exports.Line = Line;
;
