

class QueueConstruct {

    constructor(textChannel, voiceChannel, connection) {
        this.textChannel = textChannel
        this.voiceChannel = voiceChannel
        this.connection =  connection
        this.songs = []
        this.volume =  5
        this.playing = false
    }
}

export default QueueConstruct;
