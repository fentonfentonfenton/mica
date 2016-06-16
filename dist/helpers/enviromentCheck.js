'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.environmentCheck = environmentCheck;

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('shelljs/global');


function checkSeleniumStandalone() {
  if (exec('selenium-standalone').code !== 0) {
    _logger2.default.info('Error: selenium-standalone not install'.red);
    _logger2.default.info('please run: npm install selenium-standalone -g');
  } else {
    _logger2.default.info('selenium-standalone is already installed'.green);
  }
}

function environmentCheck() {
  _logger2.default.info('checking your environment');
  checkSeleniumStandalone();
}

module.exports = environmentCheck;