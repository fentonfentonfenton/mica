#!/usr/bin/env node

import mica from 'commander';


mica
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);
  console.log('you ordered a pizza with:');
  if (mica.peppers) console.log('  - peppers');
  if (mica.pineapple) console.log('  - pineapple');
  if (mica.bbqSauce) console.log('  - bbq');
  console.log('  - %s cheese', mica.cheese);
