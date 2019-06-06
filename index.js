const { Client, Collection } = require("discord.js");
const { token } = require("./botconfig");
const bot = new Client();

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

bot.login("NTg1NTYyMzU2NDQxMDIyNDg0.XPbR_Q.eFqgbp_dxU5SayfTet3TXYyV2Pc");