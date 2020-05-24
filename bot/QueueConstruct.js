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
        this.current = null
    }

    next() {
        this.current = this.songs[0]
        return this.current
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
        this.playing = false
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
        console.log(text.length)
        if(text.length > 5500) {
            text = text.slice(0, 5500)
        }
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
