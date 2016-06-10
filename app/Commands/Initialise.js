const Command = require('../Command.js');
const fs = require('fs')

class Initialise extends Command {
  constructor() {
    super("Initialise");
    this.checkGit();

    //check dependencies
    //ask for details
    	//company_id
    	//api_url
    	//assets_url
    	//admin_email
    	//admin_password
    //bower init
    	//appname etc
  }

  checkGit() {
  	fs.access('git', fs.R_OK | fs.X_OK, function (err) {
  		console.log(err ? 'no access! to git on the command line' : 'can execute git');
  	});
  }

}

module.exports = Initialise;
