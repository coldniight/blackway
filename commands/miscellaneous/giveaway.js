const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "giveaway",
        description: "Starts a giveaway of a item for a specified amount of time.",
        usage: "!giveaway",
        accessableby: "Administrators",
        aliases: ["startgiveaway", "giveawaystart"]
    },
    run: async (bot, message, args) => {
        var item = args.join(" ").slice(2);
        var time;
        var winnerCount;
    
        time = Number(args[0]);
        var minmins = "minute";
        if(time == 1){
            minmins = "minute";
        }
        else {
            minmins = "minutes";
        }
    
        var embed = new RichEmbed()
        .setColor(message.guild.roles.find(r => r.name === "Bot").color)
        .setTitle(`Giveaway for ${item} has started!`)
        .setDescription(`React with 🎉 to join the giveaway! The giveaway will be ended in ${time} ${minmins} and a random reactor will be chosen as the winner. Giveaway started by ${message.author}`)
        .setFooter(message.id)
        .setTimestamp()
    
        gwmessage = await message.channel.send(embed);
        gwmessage.react("🎉");
        setTimeout(function() {
            var reactors = gwmessage.reactions.get("🎉").users.array();
            var index = Math.floor(Math.random() * reactors.length);
            var winners = [];
            var winnermessage = "";
            for (var i = 0; i < winnerCount; i++){
                winners.push(reactors[index]);
                index = Math.floor(Math.random() * reactors.length);
            }
            for (var i = 0; i < winners.length; i++){
                if (winners[i].id == bot.user.id){
                    winners.join(" ").slice(i); //winners[i].slice(i, 1); 
                    continue;
                }
                winnermessage += (winners[i].toString() + " ");
            }

            let endbed = new RichEmbed()
            .setColor(message.guild.roles.find(r => r.name === "Bot").color)
            .setTitle(`Giveaway ended!`)
            .setDescription(winnermessage)
            .setFooter(message.id)
            .setTimestamp()

            message.channel.send(endbed);
        }, time * 1000)
    }
}