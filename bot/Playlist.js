import HELPERS from "./helpers.js"
import * as db from '../database/DatabaseHandler.js'

class Playlist {

    constructor(guildid, name, songs, creator, trustedusers) {
        this.guildid = guildid
        this.name = name
        this.songs = songs
        this.creator = creator
        this.trustedusers = trustedusers

    }

    hasSong(url) {
        for (let song of this.songs) {
            if (song.url === url) {
                return true
            }
        }
        return false
    }

    addSong(song) {
        this.songs.push(song)
        db.addNewSongToPlaylist(this, song)

    }

    removeSong(index) {
        const song = this.songs[index]
        this.songs.splice(index, 1)
        db.deleteSongFromList(this.guildid, this.name, song.url)
        return song
    }

    addTrustedUser(user) {
        if (!this.trustedusers.includes(user)) {
            this.trustedusers.push(user)
            db.addTrusteduserToPlaylist(this, user)
            return true
        }
        return false
    }

    trusts(sender) {
        for (let trusted of this.trustedusers) {
            if (trusted === sender) {
                return true
            }
        }
        return false
    }

    getSongs(shuffle) {
        return shuffle ? this.shuffle() : this.songs
    }

    shuffle() {
        let temp = [].concat(this.songs)
        return HELPERS.shuffleArray(temp)
    }

    size() {
        return this.songs.length
    }

}

export default Playlist;