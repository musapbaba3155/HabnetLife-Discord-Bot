const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kimi Öpüceksen Onu Etiketle!**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + message.author.username + ' :kiss: , Seni Öptü!**')
	.setImage (`https://media1.tenor.com/images/aae798c8f6160e31805edf04a5d3b091/tenor.gif?itemid=11472565`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öp',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'öp'
};
