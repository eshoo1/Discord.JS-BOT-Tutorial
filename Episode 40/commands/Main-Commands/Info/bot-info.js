const os = require('os')
const ms = require('ms') 
const moment = require('moment')
const { MessageEmbed } = require('discord.js')
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const { prefix } = require('../../config.json')

let botname = "Sike"

module.exports = {
    commands: ['botinfo', 'bi', 'bot-info'], 
    description: 'botinfo command', 
    callback: (message, args) => {

          
            const status = {
                online: '`🟢` - Elérhető',
                idle: '`🟡` - Tétlen',
                dnd: '`🔴` - Elefoglalt',
                offline: '`⚫` - Offline'
            }

                const embed = new MessageEmbed()
                .setTimestamp()
                .setColor('#C0C0C0')
                .addField("`🟢Ennyi szerveren van bent:`" +`${bot.guilds.cache.size}`, '_ _', true)
                .addField('Státuszom:', `${status[bot.presence.status]}`)
                .setFooter(`${botname}` + ' - Botinfo command')
                .addField(":dart:`Prefixem:`" +`${prefix}`, '_ _', true)
                .setTimestamp()
                .addField(":file_folder:`Verzió:`" +`${process.platform}`, '_ _', true)
                .addField(":black_circle:`Fejlesztő(k): ΞSHØØ 多#7212`", '_ _', true)
                .addField(":gear:`Node.js:`" +`${process.version}`, '_ _', true)
                .addField(":busts_in_silhouette:`Felhasználók:`" +`${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, '_ _', true)
                .addField(":8ball:`Csatornák:`" +`${bot.channels.cache.size.toLocaleString()}`, '_ _', true)
                .setDescription(':bejelents:', '_ _')
                .setImage(message.author.avatarURL)
                .addField(":robot:`Bot Pingje:`" +bot.ws.ping+"ms", '_ _', true)
                .addField(':large_blue_diamond:`A szerverhez csatlakoztam ekkor:`', moment.utc(bot.joinedAt).format('LLLL'))
                   
                   
                message.reply(embed)
                }
            }
