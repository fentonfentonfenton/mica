import logger from '../logger';
import 'colors';

export function install(cmd) {
  switch (cmd) {
    default:
      logger.error('please select a framework (capybara|webdriver|angular)');
      break;
    case 'capybara':
      logger.info('capybara');
      break;
  }
}

module.exports = install;
