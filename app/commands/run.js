import { exec } from 'shelljs';
import logger from '../logger.js';
import fs from 'fs';

export function run() {
  fs.readFile('./.micarc', function read(err, data) {
    if (err) {
      throw err;
    }
    const content = JSON.parse(data);

    logger.info('running test framework');
    exec(content.run);
  });
}

module.exports = run;
