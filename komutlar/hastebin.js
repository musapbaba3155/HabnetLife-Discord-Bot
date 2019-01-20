const hastebin = require('hastebin-gen');

exports.run = (client, msg, args) => {
	    let haste = args.slice(0).join(" ")
        let type = args.slice(1).join(" ")
        if (!args[0]) { return msg.channel.send(":x: Kod Yazmalısın!") }
        hastebin(haste, type).then(r => {
            msg.channel.send(":white_check_mark: Link Hazır: " + r);
        }).catch(console.error);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'hastebin',
  description: 'Hastebin çevirir.',
  usage: 'hastebin [komut]'
};