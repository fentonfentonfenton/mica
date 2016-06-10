const commandLineCommands = require('command-line-commands');

// define your commands
const cli = commandLineCommands([
  { name: 'help' },
  { name: 'init' }
])

// parse the command line
const command = cli.parse()

respond
switch (command.name) {
  case 'help':
    new (require('./Commands/Help.js'))(); 
    break;
  case 'init':
    new (require('./Commands/Initialise.js'))(); 
    break;
  default:
    console.log('Unknown command. use `help` for more details')
}
