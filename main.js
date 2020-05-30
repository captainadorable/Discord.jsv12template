const Discord = require("discord.js")
const client = new Discord.Client();
const config = require("./config.js")
const fs = require("fs");
require('./util/Loader.js')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.kategoriler = new Discord.Collection();

fs.readdir('./commands/bot_owner', (err, files) => {
  if (err) console.error(err);
  console.log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./commands/bot_owner/${f}`);
    console.log(`${props.config.name} komutu yüklendi.`);
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {
      client.aliases.set(alias, props.config.name);
    });
    props.config.kategori.forEach(kategori => {
      client.kategoriler.set(kategori, props.config.name)
    });
    
  });
})
fs.readdir('./commands/bot_commands', (err, files) => {
  if (err) console.error(err);
  console.log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./commands/bot_commands/${f}`);
    console.log(`${props.config.name} komutu yüklendi.`);
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {
      client.aliases.set(alias, props.config.name);
    });
      props.config.kategori.forEach(kategori => {
        client.kategoriler.set(kategori, props.config.name)
    });
  });
})

client.login(config.token)
