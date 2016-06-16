/* eslint-disable prefer-template */

import logger from '../logger';
import 'colors';

export function help() {
  logger.info('');
  logger.info('');
  logger.info('Mica Commands:'.bold);
  logger.info('');
  logger.info('   install <framework>: ' + 'creates framework in directory'.dim);
  logger.info('     example: mica install webdriverio'.dim);
  logger.info('   environment-check: ' + 'check for essential local dependencies'.dim);
  logger.info('   update: ' + 'updates the framework'.dim);
  logger.info('   destroy: ' + 'deletes all files relating to the framework'.dim);
  logger.info('   run: ' + 'run the tests'.dim);
  logger.info('   watch: ' + 'watch for file changes in the directory and re-test'.dim);
  logger.info('   cleanup: ' + 'remove all output and log files from your codebase'.dim);
  logger.info('');
  logger.info('Currently Implemented:'.bold);
  logger.info('');
  logger.info('   mica install webdriverio');
  logger.info('   mica environment-check');
  logger.info('');
}


module.exports = help;
