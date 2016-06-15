'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.webdriverio = webdriverio;

var _simpleGit = require('simple-git');

var _simpleGit2 = _interopRequireDefault(_simpleGit);

var _createRcFile = require('./createRcFile');

var _createRcFile2 = _interopRequireDefault(_createRcFile);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function webdriverio() {
  var repoURL = 'https://github.com/maxmckenzie/cucumber-submodule';

  (0, _simpleGit2.default)().outputHandler(function (command, stdout, stderr) {
    stdout.pipe(process.stdout);
    stderr.pipe(process.stderr);
  }).clone(repoURL, './test');

  (0, _createRcFile2.default)('webdriverio');
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