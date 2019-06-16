var Discord = require('discord.js');
var fs = require('fs');
var client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});
var prefix = ','

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "412547940654252053") return;

  
  if (message.content.startsWith(prefix + 'wtch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Logic Watch Now: ${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'lis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Logic LISTENING Now: ${argresult}`)
} 


if (message.content.startsWith(prefix + 'name')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Logic Username Changed To ${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'avatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Logic Change Avatar Successfully To ${argresult}**`);
}

if (message.content.startsWith(prefix + 'set')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`Morttal Streaming: ${argresult}`)
} 
if (message.content.startsWith(prefix + 'ply')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Logic Playing: ${argresult}`)
} 



});


client.login(process.env.BOT_TOKEN);
