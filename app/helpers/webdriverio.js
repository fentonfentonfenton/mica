/* eslint-disable prefer-template */
import git from 'simple-git';
import { exec } from 'shelljs';
import logger from '../logger';
import createRcFile from './createRcFile';
import fs from 'fs';

function cloneWebdriverIoBoilerplate() {
  const repoURL = 'https://github.com/maxmckenzie/cucumber-submodule';

  git()
    .outputHandler((command, stdout, stderr) => {
      stdout.pipe(process.stdout);
      stderr.pipe(process.stderr);
    })
    .clone(repoURL, './test');

  createRcFile('webdriverio', './test/run.js');

  logger.info('.micarc file created'.green);
}

function webdriverDependacies() {
  exec('npm install mocha --save');
  exec('npm install chai --save');
  exec('npm install deepmerge --save');
  exec('npm install glob --save');
  exec('npm install q --save');
  exec('npm install webdriverio --save');
  exec('npm install yadda --save');
  exec('npm install babel-cli --save');
  exec('npm install babel-preset-es2015 --save');
  exec('npm install babel-preset-stage-0 --save');
  exec('npm install babel-register --save');

  cloneWebdriverIoBoilerplate();
}

function checkPackageJsonExists(path) {
  fs.stat(path, (err) => {
    if (err == null) {
      logger.info('Package.json exists skipping to node dependencies'.green);
      webdriverDependacies();
    } else if (err.code === 'ENOENT') {
      logger.info('Package.json does not exist'.red);
      logger.info('please run ' + 'npm init'.bold);
      logger.info('then run ' + 'mica install webdriverio'.bold + 'again');
    } else {
      logger.error('ohhh that went well wrong: ', err.code);
    }
  });
}

export function webdriverio() {
  checkPackageJsonExists('./package.json');
}

module.exports = webdriverio;
