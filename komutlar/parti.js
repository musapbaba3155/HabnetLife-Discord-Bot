const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634,
    title: "Parti",
    url: "",
	file: "https://media.giphy.com/media/12kIdfOnoBGrjW/giphy.gif", 
    description: "Eğlenmene Bak , lütfen..",
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Parti'],
  permLevel: 0
};

exports.help = {
  name: 'parti',
  description: 'Atatürk.',
  usage: 'parti'
};