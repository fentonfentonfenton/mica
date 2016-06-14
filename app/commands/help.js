/* eslint-disable prefer-template */

import logger from '../logger';
import 'colors';

logger.info('');
logger.info('');
logger.info('Mica Commands:'.bold);
logger.info('   install <name>: ' + 'creates framework in directory'.dim);
logger.info('   update: ' + 'updates the framework'.dim);
logger.info('   destroy: ' + 'deletes all files relating to the framework'.dim);
logger.info('   run: ' + 'run the tests'.dim);
logger.info('   watch: ' + 'watch for file changes in the directory and re-test'.dim);
logger.info('   cleanup: ' + 'remove all output and log files from your codebase'.dim);
logger.info('');
logger.info('Examples:'.bold);
logger.info('   mica init (capybara|webdriver|webdriver-angular)');
logger.info('   mica update');
logger.info('   mica run');
logger.info('');
