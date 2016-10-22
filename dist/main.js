"use strict";
var config_1 = require('./config');
var drawer_1 = require('./drawer');
window['GEW'] = function (userConfig) {
    config_1.Config.set(userConfig);
    var drawer = new drawer_1.Drawer();
    drawer.run();
};
