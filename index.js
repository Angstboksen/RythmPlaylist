
import RythmPlaylist from './bot/RythmPlaylist.js'
import Discord from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()
const client = new Discord.Client();
let BOT
const prefix = '!'

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    BOT = new RythmPlaylist()
});

client.once("reconnecting", () => {
    console.log("Reconnecting!");
});

client.once("disconnect", () => {
    console.log("Disconnect!");
});

const validateMessage = async (message) => {
    const channel = message.member.voice.channel
    if (channel) {
        BOT.execute(message)
    } else {
        message.channel.send(':robot: **Du må være i en voice channel bro!** :thinking:');
    }
}

client.on('message', message => {
    if (!message.content.toLocaleLowerCase().startsWith(prefix) || message.author.bot) return;
    validateMessage(message)
});

client.login(process.env.BOT_TOKEN);