const {
	isString
} = require('../util.js');
const commands = require("../Data/commands.js");
const categories = require("../Data/categories.js");

class Command {
	constructor(opt = {}, client) {
		this.opt = opt;

		if (!this.opt.category) this.opt.category = "Uncategorized";

		if (!this.opt.name) {
			throw TypeError("Name not provided in new command.");
		}

		if (!this.opt.description) {
			console.warn(`Description not provided in ${this.opt.name}`);
			this.opt.description = "Description not provided.";
		}

		if (!this.opt.cooldown) {
			console.warn(`Cooldown not provided in ${this.opt.name}.`);
			this.opt.cooldown = 0;
		}

		if (!this.opt.execute) {
			throw TypeError("Command not executeable.");
		}

		let getCategory = categories.find(x => x.name === this.opt.category);
		if (!getCategory) {
			categories.set(this.opt.category, {
				name: this.opt.category,
				cmds: [this.opt]
			})
		} else {
			getCategory.cmds.push(this.opt);
		}

		commands.set(`${this.opt.name}`, this.opt);
		console.log(this.opt.name)
		if (client) { client.emit("commandAdded", this.opt) }
	}
}

module.exports = Command;