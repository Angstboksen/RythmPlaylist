import Playlist from "./Playlist.js"

class Guild {

    constructor(id, name, playlists = []) {
        this.id = id
        this.name = name
        this.playlists = playlists
    }

    addPlaylist(playlist) {
        this.playlists.push(playlist)
    }

    removePlaylist(playlistname) {
        let index = 0
        for(let list of this.playlists) {
            if(list.name === playlistname) {
                break;
            }
            index++
        }
        this.playlists.splice(index, 1)
    }

    getPlaylistByName(playlistname) {
        for(let list of this.playlists) {
            if(list.name === playlistname) {
                return list
            }
        }
        return null
    }
}

export default Guild