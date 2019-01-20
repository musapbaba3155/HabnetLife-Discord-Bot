const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Kullanıcı Komutları")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Komutlar**", "l!yardım = BOT Komutlarını Atar. \nl!site = Site Tanıtımı Yapar. \nl!partner = Partnlerleri Gösterir. \nl!parti = Parti Verirsin. \nl!hayvan = Hayvan Gösterir. \nl!köpek = Köpek Resmi Gösterir. \nl!kedi = Kedi Resmi Gösterir. \nl!hastebin = Hastebin Kod Oluşturur. \nl!coolresim = Cool Resim Gönderir. \nl!şifre = Rastgele Şifre Oluşturur. \nl!öneri = Öneride Bulunmanızı Sağlar. \nl!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nl!ping = BOT Gecikme Süresini Söyler. \nl!davet = BOT Davet Linkini Atar. \nl!istatistik = BOT İstatistiklerini Atar. \nl!sunucubilgi = Sunucu hakkında bilgi verir. \nl!kullanıcıbilgim = Bilgilerinizi Gösterir.")
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
  name: 'kullanıcı',
  description: 'Kullanıcı komutları gösterir.',
  usage: 'kullanıcı [komut]'
};
