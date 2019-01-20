const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kimin Üzerine Araba Süreceksin?**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + message.author.username + 'Üzerine Araba Sürdü!**')
	.setImage (`https://karalamanotlar.files.wordpress.com/2016/02/s-e7ae417895a95ae0147e607768455f8fa0479178.gif?w=768`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'arabasür',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'arabasür'
};
