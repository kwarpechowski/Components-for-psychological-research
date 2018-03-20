import { Config }  from "./config/Config";
import { ConfigInterface } from "./interfaces/ConfigInterface";
import { Drawer }  from "./Drawer";

export default function(userConfig: ConfigInterface) {
    let config = new Config(userConfig);
    let drawer = new Drawer(config);
    drawer.run();
    return drawer;
}