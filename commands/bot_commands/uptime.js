const Discord = require("discord.js"),
client = new Discord.Client();
const ms = require('ms');


module.exports.run = async (client, message, args) => {
  message.channel.send(`Galiba \`${ms(client.uptime, { long: true })}\` oldu!`);
};

exports.config = {
  name: "uptime",
  guildOnly: true,
  aliases: [],
  permLevel: "",
  kategori:["Bot Bilgi"]
};
