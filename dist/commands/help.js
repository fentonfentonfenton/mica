'use strict';

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

require('colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-template */

_logger2.default.info('');
_logger2.default.info('');
_logger2.default.info('Mica Commands:'.bold);
_logger2.default.info('   install <name>: ' + 'creates framework in directory'.dim);
_logger2.default.info('   update: ' + 'updates the framework'.dim);
_logger2.default.info('   destroy: ' + 'deletes all files relating to the framework'.dim);
_logger2.default.info('   run: ' + 'run the tests'.dim);
_logger2.default.info('   watch: ' + 'watch for file changes in the directory and re-test'.dim);
_logger2.default.info('   cleanup: ' + 'remove all output and log files from your codebase'.dim);
_logger2.default.info('');
_logger2.default.info('Examples:'.bold);
_logger2.default.info('   mica init (capybara|webdriver|webdriver-angular)');
_logger2.default.info('   mica update');
_logger2.default.info('   mica run');
_logger2.default.info('');