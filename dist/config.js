"use strict";
var line_1 = require('./model/line');
var Config = (function () {
    function Config(config) {
        var _this = this;
        this.R = 80;
        this.labels = [
            'Interest',
            'Amusement',
            'Pride',
            'Joy',
            'Pleasure',
            'Contentment',
            'Love',
            'Admiration',
            'Relief',
            'Comassion',
            'Sadness',
            'Guilt',
            'Regret',
            'Shame',
            'Disappointment',
            'Fear',
            'Disgust',
            'Contempt',
            'Hate',
            'Anger'
        ];
        this.element = 'drawer';
        Object.keys(config).forEach(function (key) {
            _this[key] = config[key];
        });
    }
    Config.prototype.getElementsCount = function () {
        return this.labels.length;
    };
    Config.prototype.getQuarterCount = function () {
        return this.getElementsCount() / 4;
    };
    Config.prototype.getLines = function () {
        //TODO KW konfig
        var lines = [];
        lines.push(new line_1.Line(10));
        lines.push(new line_1.Line(20));
        lines.push(new line_1.Line(25));
        lines.push(new line_1.Line(30));
        lines.push(new line_1.Line(40));
        return lines;
    };
    return Config;
}());
exports.Config = Config;
