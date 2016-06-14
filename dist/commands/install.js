'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

require('colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(cmd) {
  switch (cmd) {
    default:
      _logger2.default.error('please select a framework (capybara|webdriver|angular)');
      break;
    case 'capybara':
      _logger2.default.info('capybara');
      break;
  }
}

module.exports = install;