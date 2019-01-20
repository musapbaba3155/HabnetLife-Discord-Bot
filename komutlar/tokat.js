const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kime Tokat Atıcan?**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + message.author.username + 'Çok Hızlı Vurdun Gardaş!**')
	.setImage (`https://galeri14.uludagsozluk.com/896/hoslanilan-kizin-benim-allah-im-tayyip-tir-demesi_1319986.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tokat',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'tokat'
};
