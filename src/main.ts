import { Config, ConfigInterface }  from './config';
import { Drawer }  from './drawer';

window['GEW'] = function (userConfig: ConfigInterface) {
  Config.set(userConfig);
  let drawer = new Drawer();
  drawer.run();
};

