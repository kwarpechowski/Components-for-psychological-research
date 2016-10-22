"use strict";
var config_1 = require('../config');
var Circle = (function () {
    function Circle(group, size, index) {
        this.group = group;
        this.index = index;
        var oy = Math.sin(this.group.getPosition());
        var ox = Math.cos(this.group.getPosition());
        this.group.odstep += size * 2; //TODO KW magic numbers
        var sizeY = oy * (config_1.Config.R + this.group.odstep);
        var sizeX = ox * (config_1.Config.R + this.group.odstep);
        this.element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        this.element.setAttribute('cx', sizeX.toString());
        this.element.setAttribute('cy', sizeY.toString());
        this.element.setAttribute('r', size.toString());
        this.element.setAttribute('class', config_1.Config.classes.circlePrefix + index);
        this.bindEvents();
        this.group.element.appendChild(this.element);
    }
    Circle.prototype.bindEvents = function () {
        var _this = this;
        this.element.addEventListener('click', function () {
            _this.group.setActive(_this);
        });
    };
    Circle.prototype.enable = function () {
        var classes = this.element.getAttribute('class');
        if (classes) {
            classes += ' ' + Circle.activeClass;
        }
        else {
            classes = Circle.activeClass;
        }
        this.element.setAttribute('class', classes);
    };
    Circle.prototype.disable = function () {
        var classes = this.element.getAttribute('class');
        if (classes) {
            classes = classes.replace(Circle.activeClass, '');
        }
        this.element.setAttribute('class', classes);
    };
    Circle.activeClass = 'active';
    return Circle;
}());
exports.Circle = Circle;
