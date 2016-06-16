'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _shelljs = require('shelljs');

var _logger = require('../logger.js');

var _logger2 = _interopRequireDefault(_logger);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function run() {
  _fs2.default.readFile('./.micarc', function read(err, data) {
    if (err) {
      throw err;
    }
    var content = JSON.parse(data);

    _logger2.default.info('running test framework');
    (0, _shelljs.exec)(content.run);
  });
}

module.exports = run;