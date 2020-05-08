
require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

const commands = require('./commands').commands()

const prefix = '!pp'

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const validateArgs = async (message, args) => {
    const command = commands[args]
    const channel = message.member.voice.channel
    if (!command) {
        message.reply("Slutt å vær så retarded a please!")
        return
    }
    if (channel) {
        command.run(channel, message)
    } else {
        message.channel.send('You need to join a voice channel first!');
    }
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(' ');
    args.shift().toLowerCase();
    validateArgs(message, args)
});

client.login(process.env.BOT_TOKEN);