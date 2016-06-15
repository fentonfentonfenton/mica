import logger from '../logger';
import fs from 'fs';

export function createRcFile(framework) {
  fs.writeFile('./.micarc', `{"framework": "${framework}"}`, function (err) {
    if (err) {
      return logger.info(err);
    }
    logger.info('The file was saved!');
  });
}

module.exports = createRcFile;
