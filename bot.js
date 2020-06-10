var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

var fs = require('fs');
var E = require('./const.json')
console.log(E)

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    if (userID=="633910137882411038")
        return
    regs=[/orz/gi]
    for (var i=0;i<regs.length;i++){
        var a=message.match(regs[i])
        if (a==null)
        {

        } else {
            bot.sendMessage({to:channelID,message:"Orzing is forbidden"})
        }
     }
});


bot.on('message', function (user, userID, channelID, message, evt) {
	if (message == "Z on"){
		E[userID] = 1
            	bot.sendMessage({to:channelID,message:user+" is now sunglassed"})
		fs.writeFile('const.json', JSON.stringify(E), 'utf8', function(){});
	} else if (message == "Z off") {
		E[userID] = 0
            	bot.sendMessage({to:channelID,message:user+" isn't sunglassed no more"})
		fs.writeFile('const.json', JSON.stringify(E), 'utf8', function(){});
	}
});

bot.on('message', function (user, userID, channelID, message, evt) {
	var x=Math.random()
	if (E[userID] && x<1.0/6){
		 bot.addReaction({ channelID: channelID, messageID: evt.d.id, reaction: "😎"})
	}
});

bot.on('message', function (user, userID, channelID, message, evt) {
	if (message == "Z help"){
            	bot.sendMessage({to:channelID,message:"Z on, Z off, orzing is forbidden"})
	}
});
