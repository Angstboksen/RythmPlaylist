import HELPERS from './helpers.js'
import { MessageEmbed } from 'discord.js'

class QueueConstruct {

    constructor(textChannel, voiceChannel, connection, songs = []) {
        this.textChannel = textChannel
        this.voiceChannel = voiceChannel
        this.connection = connection
        this.songs = songs
        this.volume = 5
        this.playing = false
    }

    next() {
        return this.songs[0]
    }

    size() {
        return this.songs.length
    }

    enqueue(song) {
        this.songs.push(song)
    }

    dequeue() {
        this.songs.shift()
    }

    clear() {
        this.songs = []
    }
    async show() {
        let embed = new MessageEmbed()
        let text = ""
        let count = 0
        for (let song of this.songs) {
            count++
            text += "**" + count + ")** :notes: **Tittel: **" + song.title + "\n"
        }
        text += "\n :timer: **Beregnet total tid: ** " + await this.getEstimatedTime()
        let title = count === 0 ? ":scroll: **Køen er tom!** :scroll:" :
            ":scroll: **Slik ser køen ut** :scroll: | **Antall sanger: **" + this.size()
        embed.setTitle(title)
        embed.setDescription(text)

        return embed
    }

    async getEstimatedTime() {
        let totalSeconds = 0
        for (let song of this.songs) {
            totalSeconds += song.length
        }
        return HELPERS.formattedTime(totalSeconds)
    }
}

export default QueueConstruct;
