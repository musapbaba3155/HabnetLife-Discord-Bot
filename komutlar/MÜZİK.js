const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Eğlence Komutları")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Komutlar:**", `lm!add = BOT Sıraya Şarkı Ekler. \nlm!play = BOT Ses Kanalına Girer. \nlm!pause = BOT Müziği Durdurur. \nlm!resume = BOT Duran Müziği Devam Ettirir. \nlm!skip = BOT Çalan Müziği Geçer.`)
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
  name: 'müzik',
  description: 'Eğlence Komutlarını Gösterir.',
  usage: 'müzik [komut]'
};
