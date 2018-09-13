const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('./index.json');
const token = process.env.token;
const prefix = ("?");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('MagicFury').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Wesh Wesh' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
});

const ban = require('./kick et ban/ban');


bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});


bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content.match(/Dieu/i)) {
            msg.reply('MrTyger?.')
    }
    if (msg.content.match(/je suis idiot/i)) {
            msg.reply('Hooo ouiii !.')
    }
    if (msg.content.match(/test/i)) {
            return channel.send('Wesh Wesh' + member.displayName)
    }
    if (msg.content === prefix + "site"){
        msg.channel.send("http://magicfury.fr/")
        console.log("Une personne a demandé pour aller sur ton site.")
    }

});

bot.login(token);
