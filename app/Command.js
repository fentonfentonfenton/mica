class Command {
  constructor(name) {
    this.name = name;
    this.log("loaded and running");
  }

  log(message) {
    console.log("[" + this.name + "] " + message);
  }
}

module.exports = Command;
