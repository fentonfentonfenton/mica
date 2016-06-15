'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

require('colors');

var _webdriverio = require('../helpers/webdriverio');

var _webdriverio2 = _interopRequireDefault(_webdriverio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(framework) {
  switch (framework) {
    default:
      _logger2.default.error('please select a framework (capybara|webdriver|angular)');
      break;
    case 'capybara':
      _logger2.default.info('capybara');
      break;
    case 'webdriverio':
      _logger2.default.info('installing webdriverio');
      (0, _webdriverio2.default)();
      break;
  }
}

module.exports = install;