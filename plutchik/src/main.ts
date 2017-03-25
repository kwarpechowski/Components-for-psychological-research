/// <reference path="../../typings/index.d.ts" />`
import { Config }  from "./config/Config";
import { ConfigInterface } from "./interfaces/ConfigInterface";
import { Drawer }  from "./Drawer";

window.Plutchik = function (userConfig: ConfigInterface) {
    let config = new Config(userConfig);
    let drawer = new Drawer(config);
    drawer.run();
    return drawer;
};
