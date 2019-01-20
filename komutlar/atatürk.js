const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
    const embed = new Discord.RichEmbed()
    .setAuthor('Mustafa Kemal Atatürk!')
    .setColor(3447003)
	.setImage (`https://media1.tenor.com/images/9bc96af34563931baaa6e3f071e4fc31/tenor.gif?itemid=12248775`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'atatürk'
};
