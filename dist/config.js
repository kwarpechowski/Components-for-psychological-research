"use strict";
var line_1 = require('./model/line');
var Config = (function () {
    function Config() {
    }
    Config.set = function (config) {
        Object.keys(config).forEach(function (key) {
            Config[key] = config[key];
        });
    };
    Config.getElementsCount = function () {
        return this.labels.length;
    };
    Config.getQuarterCount = function () {
        return this.getElementsCount() / 4;
    };
    Config.getLines = function () {
        //TODO KW konfig
        var lines = [];
        lines.push(new line_1.Line(10));
        lines.push(new line_1.Line(15));
        lines.push(new line_1.Line(20));
        lines.push(new line_1.Line(25));
        lines.push(new line_1.Line(30));
        return lines;
    };
    Config.R = 80;
    Config.labels = [
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
    Config.element = 'drawer';
    Config.showLines = true;
    Config.classes = {
        mainGroup: 'main_group',
        lineAxis: 'line_axis',
        line: 'line',
        circlePrefix: 'row_'
    };
    return Config;
}());
exports.Config = Config;
