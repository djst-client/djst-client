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
client.login("ODczMDYxMTE1MzUxOTMyOTY4.YQy7hg.xsTdMmb2MmysZj3FA3JspvwSSAk")