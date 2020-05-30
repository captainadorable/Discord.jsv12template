const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
  		const msg = await message.channel.send('Pinging...');

		const latency = msg.createdTimestamp - message.createdTimestamp;
		const choices = ['Bu gerçekten benim **pingim** mi?', 'Her şey **yolunda** mı? **Göremiyorum** da!', 'Umarım kötü **değildir**!'];
		const response = choices[Math.floor(Math.random() * choices.length)];

		msg.edit(`${response} - Bot Gecikmesi: \`${latency}ms\`, API Gecikmesi: \`${Math.round(client.ws.ping)}ms\``);
};

exports.config = {
  name: "ping",
  guildOnly: true,
  aliases: [],
  permLevel: "",
  kategori:["Bot Bilgi"]
};
