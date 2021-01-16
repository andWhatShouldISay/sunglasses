const Discord = require('discord.js');
const client = new Discord.Client();

var fs = require('fs');
var E = require('./const.json')
console.log(E)

client.on('ready', () => {
	console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
	if (message.author.bot) return;
	regs=[/orz/gi]
    	for (var i=0;i<regs.length;i++){
        	var a=message.content.match(regs[i])
        	if (a!=null)
			message.channel.send("Orzing is forbidden")
     	}

	userID = message.author
	if (message.content == "Z on"){
		E[userID] = 1
            	message.channel.send(message.author+" is now sunglassed (really)")
		fs.writeFile('const.json', JSON.stringify(E), 'utf8', function(){});
	} else if (message.content == "Z off") {
		E[userID] = 0
            	message.channel.send(message.author+" isn't sunglassed no more")
		fs.writeFile('const.json', JSON.stringify(E), 'utf8', function(){});
	}
	
	var x=Math.random()
	if ((E[userID] == 1 || E[userID] === undefined) && x<1.0/6){
		message.react('😎');
	}

	if (message.content == "Z help") 
		message.channel.send("Z on, Z off, orzing is forbidden")
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login(require('./auth.json').token);
