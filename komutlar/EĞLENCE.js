const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Eğlence Komutları")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Komutlar:**", `l!atatürk = Atatürk Gif Gönderir! \n!arabasür = Etiketlediğin Kişinin Üzerine Araba Sürer. \nl!avatarım = Avatarınınızı Gösterir. \nl!tokat = Etiketlediğin Kişiye Tokat Atarsın. \nl!hesapla = Matematik işlemi hesaplar. \nl!herkesebendençay = Herkese Çay Alırsınız. \nl!stresçarkı = Stres çarkı çevirir. \nl!emojiyazı = Emoji İle Yazı Yazar. \nl!yazıtura = Yazı Tura Oynatır. \nl!slots = Slots Oyunu Oynatır. \nl!woodie = Woodie Hakkında Bilgi Verir. \nl!koş = Koşarsınız.\nl!çayiç = Çay İçersiniz. \nl!öp = Etiketlediğin kullanıcığı öper. \nl!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nl!çayaşekerat = Çaya Şeker Atarsınız. \nl!yumrukat = Yumruk Atarsınız. \nl!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nl!sunucuresmi = BOT Sunucunun Resmini Atar.`)
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
  name: 'eğlence',
  description: 'Eğlence Komutlarını Gösterir.',
  usage: 'eğlence [komut]'
};
