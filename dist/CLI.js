#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version('0.0.1').option('-p, --peppers', 'Add peppers').option('-P, --pineapple', 'Add pineapple').option('-b, --bbq-sauce', 'Add bbq sauce').option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble').parse(process.argv);
console.log('you ordered a pizza with:');
if (_commander2.default.peppers) console.log('  - peppers');
if (_commander2.default.pineapple) console.log('  - pineapple');
if (_commander2.default.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', _commander2.default.cheese);