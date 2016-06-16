import logger from '../logger';
import 'colors';

import webdriverio from '../helpers/webdriverio';

export function install(framework) {
  switch (framework) {
    default:
      logger.error('please select a framework (capybara|webdriverio|webdriverio-angular)');
      break;
    case 'capybara':
      logger.info('capybara not yet supported');
      break;
    case 'webdriverio':
      logger.info('installing webdriverio'.green);
      webdriverio();
      break;
  }
}

module.exports = install;
