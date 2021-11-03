const DJST = require("../main.js");
const client = new DJST.Client({
	intents: ["GUILDS", "GUILD_MESSAGES"],
	prefix: "v/"
});

client.generateHelpCommand();

client.on("ready", () => {

	client.setStatus({
		status: "idle",
		name: "discord.js-touch (framework)",
		type: "LISTENING"
	})

	console.log("ready");
})
client.login("NzcxMDA3NzA1MTAzNTk3NjEw.X5l24Q.9yBcXyBMusSAyM-1hbtUYJHbMN8")