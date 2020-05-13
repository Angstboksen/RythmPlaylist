
class Playlist {

    constructor(name, songs, creator, trustedusers) {
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

    addTrustedUser(user) {
        if (!this.trustedusers.includes(user)) {
            this.trustedusers.push(user)
        }
    }

    getSongs(shuffle) {
        return shuffle ? this.shuffle() : this.songs
    }

    shuffle() {
        let temp = [].concat(this.songs)
        for (let i = temp.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const a = temp[i]
            temp[i] = temp[j]
            temp[j] = a
        }
        return temp
    }

    size() {
        return this.songs.length
    }

}

export default Playlist;