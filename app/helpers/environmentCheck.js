import { exec } from 'shelljs';
import logger from '../logger';

function checkSeleniumStandalone() {
  logger.info('checking if selenium-standalone is installed'.bold);
  logger.info('');
  if (exec('selenium-standalone').code !== 0) {
    logger.info('Error: selenium-standalone not install'.red);
    logger.info('please install https://www.npmjs.com/package/selenium-standalone');
  } else {
    logger.info('selenium-standalone is already installed'.green);
  }
}

function checkPhantomjs() {
  logger.info('checking if phantomjs is installed'.bold);
  logger.info('');
  if (exec('phantomjs -v').code !== 0) {
    logger.info('Error: phantomjs not install'.red);
    logger.info('please install http://phantomjs.org/');
  } else {
    logger.info('phantomjs is already installed'.green);
  }
}

export function environmentCheck() {
  logger.info('checking your environment');
  checkSeleniumStandalone();
  logger.info('');
  checkPhantomjs();
  logger.info('');
  logger.info('Important info for local browser testing'.bold);
  logger.info('');
  logger.info('chrome needs the chromedriver https://sites.google.com/a/chromium.org/chromedriver/');
  logger.info('');
  logger.info('Firefox comes bundled with its own driver');
  logger.info('');
  logger.info('Safari needs the selenium webdriver https://github.com/SeleniumHQ/selenium/wiki/SafariDriver#getting-started');
  logger.info('');
}

module.exports = environmentCheck;
