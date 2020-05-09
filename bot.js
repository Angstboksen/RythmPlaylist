
require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

const commands = require('./commands').commands()

const prefix = '!pp'

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const validateArgs = async (message, args) => {
    const command = commands[args[0]]
    const channel = message.member.voice.channel
    if (!command) {
        message.channel.send(":zany_face: **Durr! Slutt å vær så retarded a please!**")
        return
    }
    if (channel) {
        command.run(channel, message, args)
    } else {
        message.channel.send(':robot: **You need to join a voice channel first!**');
    }
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length+1).split(' ');
    args.map(a => a = a.toLowerCase())
    validateArgs(message, args)
});

client.login(process.env.BOT_TOKEN);