"use strict";
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
        var _this = this;
        this.drawAxis();
        this.mainElement.move(250, 250);
        var cw = this.config.getElementsCount() / 4; //a co jak nie bedzie calkowita
        var _loop_1 = function() {
            //let groupInstance = new Group(this.mainElement);
            var position = (90 / cw) * (i - cw - 0.5) * Math.PI / 180;
            var oy = Math.sin(position);
            var ox = Math.cos(position);
            var odstep = 0;
            var group = this_1.mainElement.group().addClass('line');
            this_1.config.getLines().forEach(function (line, index) {
                var size = line.getSize();
                var circle = group.ellipse(size, size);
                circle.addClass('element_' + index);
                circle.fill(line.getColor());
                circle.center(_this.config.R, _this.config.R);
                circle.dx(ox * (_this.config.R + odstep));
                circle.dy(oy * (_this.config.R + odstep));
                circle.click(function () {
                    console.log('clicked', i, index);
                });
                odstep += size + 10;
            });
            var text = group.plain(this_1.config.labels[i - 1]);
            text.addClass('text');
            text.center(this_1.config.R, this_1.config.R);
            text.dx(ox * (this_1.config.R + odstep));
            text.dy(oy * (this_1.config.R + odstep));
        };
        var this_1 = this;
        for (var i = 1; i <= this.config.getElementsCount(); i++) {
            _loop_1();
        }
    };
    return Drawer;
}());
exports.Drawer = Drawer;
