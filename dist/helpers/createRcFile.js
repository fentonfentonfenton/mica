'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRcFile = createRcFile;

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRcFile(framework, run) {
  _fs2.default.writeFile('./.micarc', '{"framework": "' + framework + '", "run": "' + run + '"}', function (err) {
    if (err) {
      return _logger2.default.info(err);
    }
    _logger2.default.info('The .micarc file was saved!');
  });
}

module.exports = createRcFile;