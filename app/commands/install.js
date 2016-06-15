import logger from '../logger';
import 'colors';

import webdriverio from '../helpers/webdriverio';

export function install(framework) {
  switch (framework) {
    default:
      logger.error('please select a framework (capybara|webdriver|angular)');
      break;
    case 'capybara':
      logger.info('capybara');
      break;
    case 'webdriverio':
      logger.info('installing webdriverio');
      webdriverio();
      break;
  }
}

module.exports = install;
