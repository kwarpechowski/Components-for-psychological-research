"use strict";
var Config = (function () {
    function Config(config) {
        var _this = this;
        this.R = 80;
        this.labels = [
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
            'Anger',
            'Interest',
            'Amusement',
            'Pride',
            'Joy',
            'Pleasure'
        ];
        Object.keys(config).forEach(function (key) {
            _this[key] = config[key];
        });
        console.log(this);
    }
    return Config;
}());
exports.Config = Config;
