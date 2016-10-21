import { Config, ConfigInterface }  from './config';
import { Drawer }  from './drawer';

window['GEW'] = function (userConfig: ConfigInterface) {
  let config = new Config(userConfig);
  let drawer = new Drawer(config);
  drawer.run();
};

