const Command = require('../Command.js');

class Help extends Command {
  constructor(){
    super("Help");
    this.log('BookingBug CLI\n\n' +
      'You can use the following args \n' +
      'mica help \n' +
      'mica init \n'
    );
  }
}

module.exports = Help;
