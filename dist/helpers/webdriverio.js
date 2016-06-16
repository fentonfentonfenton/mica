'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.webdriverio = webdriverio;

var _simpleGit = require('simple-git');

var _simpleGit2 = _interopRequireDefault(_simpleGit);

var _shelljs = require('shelljs');

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _createRcFile = require('./createRcFile');

var _createRcFile2 = _interopRequireDefault(_createRcFile);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cloneWebdriverIoBoilerplate() {
  var repoURL = 'https://github.com/maxmckenzie/cucumber-submodule';

  (0, _simpleGit2.default)().outputHandler(function (command, stdout, stderr) {
    stdout.pipe(process.stdout);
    stderr.pipe(process.stderr);
  }).clone(repoURL, './test');

  (0, _createRcFile2.default)('webdriverio', './test/run.js');

  _logger2.default.info('.micarc file created'.green);
} /* eslint-disable prefer-template */


function webdriverDependacies() {
  (0, _shelljs.exec)('npm install mocha --save');
  (0, _shelljs.exec)('npm install chai --save');
  (0, _shelljs.exec)('npm install deepmerge --save');
  (0, _shelljs.exec)('npm install glob --save');
  (0, _shelljs.exec)('npm install q --save');
  (0, _shelljs.exec)('npm install webdriverio --save');
  (0, _shelljs.exec)('npm install yadda --save');
  (0, _shelljs.exec)('npm install babel-cli --save');
  (0, _shelljs.exec)('npm install babel-preset-es2015 --save');
  (0, _shelljs.exec)('npm install babel-preset-stage-0 --save');
  (0, _shelljs.exec)('npm install babel-register --save');

  cloneWebdriverIoBoilerplate();
}

function checkPackageJsonExists(path) {
  _fs2.default.stat(path, function (err) {
    if (err == null) {
      _logger2.default.info('Package.json exists skipping to node dependencies'.green);
      webdriverDependacies();
    } else if (err.code === 'ENOENT') {
      _logger2.default.info('Package.json does not exist'.red);
      _logger2.default.info('please run ' + 'npm init'.bold);
      _logger2.default.info('then run ' + 'mica install webdriverio'.bold + 'again');
    } else {
      _logger2.default.error('ohhh that went well wrong: ', err.code);
    }
  });
}

function webdriverio() {
  checkPackageJsonExists('./package.json');
}

module.exports = webdriverio;

// TO DO create files in app directory default ./
// fs.createReadStream('test.log').pipe(fs.createWriteStream('newLog.log'));

// TO DO create a .micarc file to track framework
// {
//   "framework": "webdriver",
//   // "commit": "9238325hf9fh2983484"
//   // "run-command": "./test/run.js"
// }