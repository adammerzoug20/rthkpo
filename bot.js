const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("591604988438904847")
setInterval(function() {
channel.send(`انا حلو مرة`);
}, 30)
})

client.login(process.env.BOT_TOKEN);