"use strict";
var config_1 = require('./config');
var drawer_1 = require('./drawer');
window['GEW'] = function (userConfig) {
    var config = new config_1.Config(userConfig);
    var drawer = new drawer_1.Drawer(config);
    drawer.run();
};
