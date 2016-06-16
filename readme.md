[ ![Codeship Status for maxmckenzie/mica](https://codeship.com/projects/82004030-9859-0133-2c5d-3e3b216d16ca/status?branch=master)](https://codeship.com/projects/126071)
[![Code Climate](https://codeclimate.com/github/maxmckenzie/mica/badges/gpa.svg)](https://codeclimate.com/github/maxmckenzie/mica)
[![Test Coverage](https://codeclimate.com/github/maxmckenzie/mica/badges/coverage.svg)](https://codeclimate.com/github/maxmckenzie/mica/coverage)
[![Issue Count](https://codeclimate.com/github/maxmckenzie/mica/badges/issue_count.svg)](https://codeclimate.com/github/maxmckenzie/mica)

# Install
- clone cd into the root dir
- build `npm run local`
- then type `mica help` for a list of available commands

```
Mica Commands:

   install <framework>: creates framework in directory
     example: mica install webdriverio
   environment-check: check for essential local dependencies
   update: updates the framework
   destroy: deletes all files relating to the framework
   run: run the tests
   watch: watch for file changes in the directory and re-test
   cleanup: remove all output and log files from your codebase

Currently Implemented:

   mica install webdriverio
   mica environment-check
   mica help
   mica run
```

# Coding Standards

https://github.com/airbnb/javascript

# Docs and Dependacies
- [commander](http://tj.github.io/commander.js/) used to handle the terminal commands the user enters
- [Terminal Colours](https://github.com/Marak/colors.js)
- [simple git](https://www.npmjs.com/package/simple-git)
- [shelljs](https://github.com/shelljs/shelljs)
