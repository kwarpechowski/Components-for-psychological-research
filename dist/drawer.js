"use strict";
var line_1 = require('./model/line');
var Drawer = (function () {
    function Drawer(config) {
        this.draw = SVG('drawing');
        this.config = config;
        this.mainElement = this.draw.group();
    }
    Drawer.prototype.getLines = function () {
        var lines = [];
        lines.push(new line_1.Line(10, 'yellow'));
        lines.push(new line_1.Line(20, 'green'));
        lines.push(new line_1.Line(30, 'pink'));
        lines.push(new line_1.Line(40, 'blue'));
        lines.push(new line_1.Line(50, 'gold'));
        return lines;
    };
    Drawer.prototype.run = function () {
        var _this = this;
        var numberPoints = this.config.labels.length;
        var k = 360 / numberPoints;
        this.mainElement.move(300, 300);
        var _loop_1 = function() {
            odstep = 0;
            var group = this_1.mainElement.group().addClass('line');
            this_1.getLines().forEach(function (line, index) {
                var size = line.getSize();
                var circle = group.ellipse(size, size);
                circle.addClass('element_' + index);
                circle.fill(line.getColor());
                circle.center(_this.config.R, _this.config.R);
                var y = Math.sin(k * i * Math.PI / 180) * (_this.config.R + odstep);
                var x = Math.cos(k * i * Math.PI / 180) * (_this.config.R + odstep);
                circle.dx(x);
                circle.dy(y);
                odstep += size + 10;
            });
            text = group.plain(this_1.config.labels[i - 1]);
            text.fill('#000');
            text.addClass('text');
            text.center(this_1.config.R, this_1.config.R);
            y = Math.sin(k * i * Math.PI / 180) * (this_1.config.R + odstep);
            x = Math.cos(k * i * Math.PI / 180) * (this_1.config.R + odstep);
            text.dx(x);
            text.dy(y);
        };
        var this_1 = this;
        var odstep, text, y, x;
        for (var i = 1; i <= numberPoints; i++) {
            _loop_1();
        }
    };
    return Drawer;
}());
exports.Drawer = Drawer;
