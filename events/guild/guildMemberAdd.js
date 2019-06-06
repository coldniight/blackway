const { prefix } = require("../../botconfig.json")

module.exports = async (bot, member) => {
    var role = bot.guilds.get("585525446385467393").roles.find('id', '585538870137847826');
    member.addRole(role);
}