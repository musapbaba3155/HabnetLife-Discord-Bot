const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yetkili Komutları")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Komutlar**", `l!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nl!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nl!unban = İstediğiniz Kişinin Yasağını Açar. \nl!mute = İstediğiniz Kişiyi Susturur. \nl!oylama = Oylama Açar. \nl!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Yetkili komutları gösterir.',
  usage: 'yetkili [komut]'
};
