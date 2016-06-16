'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

require('colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-template */

function help() {
  _logger2.default.info('');
  _logger2.default.info('');
  _logger2.default.info('Mica Commands:'.bold);
  _logger2.default.info('');
  _logger2.default.info('   install <framework>: ' + 'creates framework in directory'.dim);
  _logger2.default.info('     example: mica install webdriverio'.dim);
  _logger2.default.info('   environment-check: ' + 'check for essential local dependencies'.dim);
  _logger2.default.info('   update: ' + 'updates the framework'.dim);
  _logger2.default.info('   destroy: ' + 'deletes all files relating to the framework'.dim);
  _logger2.default.info('   run: ' + 'run the tests'.dim);
  _logger2.default.info('   watch: ' + 'watch for file changes in the directory and re-test'.dim);
  _logger2.default.info('   cleanup: ' + 'remove all output and log files from your codebase'.dim);
  _logger2.default.info('');
  _logger2.default.info('Currently Implemented:'.bold);
  _logger2.default.info('');
  _logger2.default.info('   mica install webdriverio');
  _logger2.default.info('   mica environment-check');
  _logger2.default.info('');
}

module.exports = help;