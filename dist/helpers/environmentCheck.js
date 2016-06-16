'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.environmentCheck = environmentCheck;

var _shelljs = require('shelljs');

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkSeleniumStandalone() {
  _logger2.default.info('checking if selenium-standalone is installed'.bold);
  _logger2.default.info('');
  if ((0, _shelljs.exec)('selenium-standalone').code !== 0) {
    _logger2.default.info('Error: selenium-standalone not install'.red);
    _logger2.default.info('please install https://www.npmjs.com/package/selenium-standalone');
  } else {
    _logger2.default.info('selenium-standalone is already installed'.green);
  }
}

function checkPhantomjs() {
  _logger2.default.info('checking if phantomjs is installed'.bold);
  _logger2.default.info('');
  if ((0, _shelljs.exec)('phantomjs -v').code !== 0) {
    _logger2.default.info('Error: phantomjs not install'.red);
    _logger2.default.info('please install http://phantomjs.org/');
  } else {
    _logger2.default.info('phantomjs is already installed'.green);
  }
}

function environmentCheck() {
  _logger2.default.info('checking your environment');
  checkSeleniumStandalone();
  _logger2.default.info('');
  checkPhantomjs();
  _logger2.default.info('');
  _logger2.default.info('Important info for local browser testing'.bold);
  _logger2.default.info('');
  _logger2.default.info('chrome needs the chromedriver https://sites.google.com/a/chromium.org/chromedriver/');
  _logger2.default.info('');
  _logger2.default.info('Firefox comes bundled with its own driver');
  _logger2.default.info('');
  _logger2.default.info('Safari needs the selenium webdriver https://github.com/SeleniumHQ/selenium/wiki/SafariDriver#getting-started');
  _logger2.default.info('');
}

module.exports = environmentCheck;