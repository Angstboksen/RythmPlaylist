
require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!pp'

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const validateArgs = (msg, args) => {
    if(args.length != 2) {
        msg.reply("Slutt å vær så retarded a please!")
        return
    } 
    msg.reply("Du skrev inn kommandoen: " + args[1])
} 

client.on('message', msg => {
    const content = msg.content
    const args = content.split(" ")
    const givenprefix = args[0]
    if (givenprefix === prefix) {
        validateArgs(msg, args)
    }
});

client.login(process.env.BOT_TOKEN);