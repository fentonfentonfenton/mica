import logger from '../logger';
import fs from 'fs';

export function createRcFile(framework, run) {
  fs.writeFile('./.micarc', `{"framework": "${framework}", "run": "${run}"}`, function (err) {
    if (err) {
      return logger.info(err);
    }
    logger.info('The file was saved!');
  });
}

module.exports = createRcFile;
