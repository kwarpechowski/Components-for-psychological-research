import { Config }  from "./config/Config";
import { Drawer }  from "./Drawer";
import {PropertiesInterface} from "./interfaces/PropertiesInterface";

export default function(userConfig: PropertiesInterface) {
    let config = new Config(userConfig);
    let drawer = new Drawer(config);
    drawer.run();
    return drawer;
}