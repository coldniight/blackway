const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "verify",
        description: "Gives you access to all the verified channels.",
        usage: "!verify",
        accessableby: "Members",
        aliases: []
    },
    run: async (bot, message, args) => {
        let unverified = bot.guilds.get("585525446385467393").roles.find("id", "585538870137847826")
        let verified = bot.guilds.get("585525446385467393").roles.find("id", "585529210324516864")
        let embed = new RichEmbed()
        .setTitle(bot.user.username + ` Bot`)
        .setDescription(`You are already verified, ${message.author}.`)
        .setColor(message.guild.roles.find(r => r.name === "Bot").color)
        .setFooter(message.id)
        .setTimestamp();

        let vembed = new RichEmbed()
        .setTitle(bot.user.username + ` Bot`)
        .setDescription(`Verified user **${message.author}** with ID **${message.author.id}**.`)
        .setColor(message.guild.roles.find(r => r.name === "Bot").color)
        .setFooter(message.id)
        .setTimestamp();

        if(!message.member.roles.has(unverified.id)) return message.author.send(embed).then(message.delete());
        await(message.member.addRole(verified));
        await(message.member.removeRole(unverified));
        await bot.guilds.get("585525446385467393").channels.get("585542170501447681").send(vembed);
        await message.delete();
       
    }
}
