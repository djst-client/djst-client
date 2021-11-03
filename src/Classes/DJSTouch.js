const { Client: djsclient } = require("discord.js");
const Command = require("./Command.js");
const Util = require("./Util.js");
const { initCommands, generateHelpCommand } = new Util();

class DJSTouch extends djsclient {
	constructor(options = {}) {
		super(options);

		this.opt = {
			...options,
			initCommands: options.initCommands ? options.initCommands : true,
			ignoreBot: options.ignoreBot ? options.ignoreBot : true,
			messages: {
				cooldown: options.messages.cooldown ? options.messages.cooldown : "You have cooldown in **{command}** (**${cdTime}**)"
			}
		};

		if (this.opt.initCommands) {
			initCommands(this)
		}

	}

	createCommand(opt) {
		return new Command(opt, this);
	}

	getCommands() {
		return require("../Data/commands.js");
	}

	generateHelpCommand() {
		return generateHelpCommand();
	}

	setStatus(options) {
		let opt = {
			status: options.status,
			name: options.name,
			type: options.type,
			url: options.url || null
		};

		if (!opt.status) opt.status = "online";
		if (!opt.name) throw TypeError("Status name is not provided.");
		if (!opt.type) opt.type = "LISTENING";

		this.user.setStatus(opt.status);
		this.user.setActivity(opt.name, {type: opt.type, url: opt.url})
	}

	getBotData() {

		return {
			users: this.users.cache,
			guilds: this.guilds.cache,
			channels: this.channels.cache
		}
	}
}

module.exports = {
	Client: DJSTouch
}