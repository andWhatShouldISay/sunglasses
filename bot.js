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
	regs = [/orz/gi]
    	for (var i = 0; i < regs.length; i++){
        	var a = message.content.match(regs[i])
        	if (a != null)
			message.channel.send("Orzing is forbidden")
     	}
     	
     	bad = [/numb/gi]
     	good = [/number/gi]
     	var balance = 0
     	
     	for (var i = 0; i < bad.length; i++){
        	var a = message.content.match(bad[i])
        	if (a != null)
			balance -= a.length
     	}    	
     	     	
     	for (var i = 0; i < good.length; i++){
        	var a = message.content.match(good[i])
        	if (a != null)
			balance += a.length
     	}    
     	
     	if (balance < 0) {
     		message.channel.send("Enjoy being blocked")
     	}

	userID = message.author
	if (message.content == "Z on"){
		E[userID] = 1
            	message.channel.send(message.author.tag+" is now sunglassed (really)")
		fs.writeFile('const.json', JSON.stringify(E), 'utf8', function(){});
	} else if (message.content == "Z off") {
		E[userID] = 0
            	message.channel.send(message.author.tag+" isn't sunglassed no more")
		fs.writeFile('const.json', JSON.stringify(E), 'utf8', function(){});
	}
	
	var x=Math.random()
	if ((E[userID] == 1 || E[userID] === undefined) && x<1.0/6){
		message.react('😎');
	}

	if (message.content == "Z help") 
		message.channel.send("Z on, Z off, orzing is forbidden, enjoy being blocked")
});

client.on('message', message => {
	if (message.author.bot) return;
	ban = [/numb/gi]
	unban = [/number/gi]
	
	var bal = 0
	
	for (var i = 0; i < ban.length; i++){
		var a = message.content.match(ban[i])
		if (a != null)
			bal -= a.length
	}
	
	for (var i = 0; i < unban.length; i++){
		var a = message.content.match(unban[i])
		if (a != null)
			bal += a.length
	}
	
		
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login(require('./auth.json').token);
