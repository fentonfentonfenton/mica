import git from 'simple-git';
import createRcFile from './createRcFile';
import fs from 'fs';

export function webdriverio() {
  const repoURL = 'https://github.com/maxmckenzie/cucumber-submodule';

  git()
    .outputHandler((command, stdout, stderr) => {
      stdout.pipe(process.stdout);
      stderr.pipe(process.stderr);
    })
    .clone(repoURL, './test');

  createRcFile('webdriverio');
}

module.exports = webdriverio;

// TO DO create files in app directory default ./
// fs.createReadStream('test.log').pipe(fs.createWriteStream('newLog.log'));

// TO DO create a .micarc file to track framework
// {
//   "framework": "webdriver",
//   // "commit": "9238325hf9fh2983484"
//   // "run-command": "./test/run.js"
// }
