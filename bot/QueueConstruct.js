import ytdl from 'ytdl-core'

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

    async getEstimatedTime() {
        let totalSeconds = 0
        for (let song of this.songs) {
            totalSeconds += song.length
        }
        let hours = totalSeconds < 3600 ? "" : Math.floor(totalSeconds / 3600)
        hours = hours === "" ? hours : "0" + hours + ":"

        let minutes = totalSeconds < 60 ? "0" : Math.floor(totalSeconds / 60)
        minutes = minutes === 0 || minutes < 10 ? "0" + minutes: minutes

        let seconds = totalSeconds % 60
        seconds = seconds === 0 || seconds < 10 ? "0" + seconds: seconds

        let formatted = hours + minutes + ':' + seconds
        return formatted
    }
}

export default QueueConstruct;
