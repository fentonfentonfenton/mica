#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _help = require('./commands/help');

var _help2 = _interopRequireDefault(_help);

var _install = require('./commands/install');

var _install2 = _interopRequireDefault(_install);

var _environmentCheck = require('./helpers/environmentCheck');

var _environmentCheck2 = _interopRequireDefault(_environmentCheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version('0.0.1');

_commander2.default.command('install [framework]').description('run remote setup commands').action(function (framework) {
  (0, _install2.default)(framework);
});

_commander2.default.command('help').action(function () {
  (0, _help2.default)();
});

_commander2.default.command('environment-check').action(function () {
  (0, _environmentCheck2.default)();
});

_commander2.default.parse(process.argv);

// http://tj.github.io/commander.js/#Command.prototype.command

// program
//   .version('0.0.1')
//   .option('-C, --chdir <path>', 'change the working directory')
//   .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
//   .option('-T, --no-tests', 'ignore test hook')

// program
//   .command('setup')
//   .description('run remote setup commands')
//   .action(function() {
//     console.log('setup');
//   });

// program
//   .command('exec <cmd>')
//   .description('run the given remote command')
//   .action(function(cmd) {
//     console.log('exec "%s"', cmd);
//   });

// program
//   .command('teardown <dir> [otherDirs...]')
//   .description('run teardown commands')
//   .action(function(dir, otherDirs) {
//     console.log('dir "%s"', dir);
//     if (otherDirs) {
//       otherDirs.forEach(function (oDir) {
//         console.log('dir "%s"', oDir);
//       });
//     }
//   });

// program
//   .command('*')
//   .description('deploy the given env')
//   .action(function(env) {
//     console.log('deploying "%s"', env);
//   });

// program.parse(process.argv);