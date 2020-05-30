const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
  
  const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Davet Linkleri')
    .setAuthor(`${client.user.username}#${client.user.discriminator}`, client.user.displayAvatarURL(), 'https://discordapp.com/oauth2/authorize?client_id=715957340796354561&scope=bot&permissions=8')
    .setDescription('Davet Linklerimiz Aşağıda!')
    .addFields(
      { name: 'Discord Sunucumuz', value: 'Tıkla',  },
      { name: 'Bot Davet Linki', value: 'Tıkla',  },
    )
    .addField('Websitemiz', 'Tıkla', true)
    .setTimestamp()
  message.channel.send(embed)
  console.log(client.user)
};

exports.config = {
  name: "davetlinkleri",
  guildOnly: true,
  aliases: [],
  permLevel: "",
  kategori:["Bot Bilgi"]
};
