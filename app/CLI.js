#!/usr/bin/env node

import mica from 'commander';

import help from './commands/help';

mica
  .version('0.0.1')
  .parse(process.argv);
  if (mica.help) help;
